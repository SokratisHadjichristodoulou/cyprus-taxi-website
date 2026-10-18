// Price guard — run with `npm run verify:prices`.
//
// Every euro figure shown on the site (src/routes, src/lib, src/components, public/llms.txt) must
// be a price that exists in src/lib/pricing.ts. The guard cannot tell which route a figure belongs
// to, so it catches invented or mistyped prices, not a real price shown on the wrong route.
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
if (prices.size === 0) {
  console.error(`verify-prices: could not read any prices from ${PRICING_FILE}`);
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

const lineOf = (src, index) => src.slice(0, index).split("\n").length;
const problems = [];
let figures = 0;

for (const file of files) {
  const src = read(file);
  for (const m of src.matchAll(EURO)) {
    figures++;
    const value = Number((m[1] ?? m[2]).replace(/[.,]/g, ""));
    if (!prices.has(value)) {
      problems.push(
        `${file}:${lineOf(src, m.index)}  "${m[0].trim()}" is not a price in ${PRICING_FILE}`,
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
  `verify-prices: OK — ${figures} euro figures in ${files.length} files all exist in ${PRICING_FILE} (${prices.size} distinct prices).`,
);
