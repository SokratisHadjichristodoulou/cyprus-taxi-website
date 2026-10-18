// Price guard — run with `npm run verify:prices`.
//
// 1. Every euro figure shown on the site (src/routes, src/lib, src/components, public/llms.txt),
//    including `priceFrom: N` fields rendered as "€{priceFrom}", must be a price that exists in
//    src/lib/pricing.ts. The guard cannot tell which route a figure belongs to, so it catches
//    invented or mistyped prices, not a real price shown on the wrong route.
// 2. Every defaultPickup/defaultDropoff preset in src/routes must be a canonical pricing.ts
//    location (in every locale), otherwise the booking form cannot show an instant quote.
import { readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (rel) => readFileSync(path.join(root, rel), "utf8");

const PRICING_FILE = "src/lib/pricing.ts";
const pricingSrc = read(PRICING_FILE);

// Prices are the values of the "4 Seater" / "6 Seater" / "12 Seater" keys (0 means "not offered").
const prices = new Set(
  [...pricingSrc.matchAll(/"(?:4|6|12) Seater":\s*(\d+)/g)]
    .map((m) => Number(m[1]))
    .filter((n) => n > 0),
);
// Canonical location strings: the airports and every destination key.
const locations = new Set(
  [...pricingSrc.matchAll(/\b(?:airport|destination):\s*"([^"]+)"/g)].map((m) => m[1]),
);
if (prices.size === 0 || locations.size === 0) {
  console.error(`verify-prices: could not read prices/locations from ${PRICING_FILE}`);
  process.exit(1);
}

function walk(dir) {
  return readdirSync(path.join(root, dir)).flatMap((name) => {
    const rel = path.posix.join(dir, name);
    return statSync(path.join(root, rel)).isDirectory() ? walk(rel) : [rel];
  });
}

const files = [
  ...["src/routes", "src/lib", "src/components"]
    .flatMap(walk)
    .filter((f) => /\.(tsx?|mjs|js)$/.test(f)),
  "public/llms.txt",
].filter((f) => f !== PRICING_FILE);

// "€35", "€ 35", "35 €", "35€" (German style); thousands separators allowed ("€1,200", "1.200 €").
const EURO = /€\s?(\d{1,3}(?:[.,]\d{3})+|\d+)|(\d{1,3}(?:[.,]\d{3})+|\d+)\s?€/g;
const PRICE_FROM = /\bpriceFrom:\s*(\d+)/g;
const PRESET = /default(Pickup|Dropoff)=\{?["'`]([^"'`]*)["'`]/g;

const lineOf = (src, index) => src.slice(0, index).split("\n").length;
const problems = [];
let figures = 0;
let presets = 0;

for (const file of files) {
  const src = read(file);
  const found = [
    ...[...src.matchAll(EURO)].map((m) => [m, (m[1] ?? m[2]).replace(/[.,]/g, "")]),
    ...[...src.matchAll(PRICE_FROM)].map((m) => [m, m[1]]),
  ];
  for (const [m, digits] of found) {
    figures++;
    if (!prices.has(Number(digits))) {
      problems.push(
        `${file}:${lineOf(src, m.index)}  "${m[0].trim()}" is not a price in ${PRICING_FILE}`,
      );
    }
  }
  if (!file.startsWith("src/routes/")) continue;
  for (const m of src.matchAll(PRESET)) {
    presets++;
    if (!locations.has(m[2])) {
      problems.push(
        `${file}:${lineOf(src, m.index)}  default${m[1]}="${m[2]}" is not a location in ${PRICING_FILE}`,
      );
    }
  }
}

if (problems.length) {
  console.error(`verify-prices: ${problems.length} problem(s)\n`);
  for (const p of problems) console.error(`  ✗ ${p}`);
  process.exit(1);
}
console.log(
  `verify-prices: OK — ${figures} euro figures in ${files.length} files exist in ${PRICING_FILE} (${prices.size} distinct prices); ${presets} booking presets are canonical locations.`,
);
