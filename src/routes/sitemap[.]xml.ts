import { createFileRoute } from "@tanstack/react-router";
import "@tanstack/start-client-core";
import { LOCALES, hasLocalePage, type Locale } from "@/lib/i18n";

const SITE = "https://taxicyprus24.com";

// Pages that exist in en + el + ru (and in de when listed in GERMAN_PATHS, src/lib/i18n.ts)
const localizedPaths = [
  "/",
  "/about",
  "/blog",
  "/contact",
  "/cyprus-airport-transfers",
  "/faq",
  "/fleet",
  "/larnaca-airport-to-ayia-napa",
  "/larnaca-airport-to-paphos",
  "/larnaca-airport-to-protaras",
  "/larnaca-airport-transfers",
  "/paphos-airport-to-larnaca",
  "/paphos-airport-to-nicosia",
  "/paphos-airport-transfers",
  "/pricing",
  "/reviews",
  "/taxi-to-aphrodite-hills",
  "/taxi-to-chloraka",
  "/taxi-to-coral-bay",
  "/taxi-to-kato-paphos",
  "/taxi-to-kissonerga",
  "/taxi-to-limassol",
  "/taxi-to-peyia",
  "/taxi-to-pissouri",
  "/taxi-to-polis-latchi",
];

// Date of the last significant content change, per path (applies to every locale of that path).
// Only list pages whose content really changed — never stamp every URL with today's date.
const lastModified: Record<string, string> = {
  "/": "2026-10-18",
  "/about": "2026-10-18",
  "/larnaca-airport-to-paphos": "2026-10-18",
  "/larnaca-airport-transfers": "2026-10-18",
  "/paphos-airport-to-larnaca": "2026-10-18",
  "/paphos-airport-to-nicosia": "2026-10-18",
  "/paphos-airport-transfers": "2026-10-18",
  "/pricing": "2026-10-18",
  "/reviews": "2026-10-18",
  "/taxi-to-aphrodite-hills": "2026-10-18",
  "/taxi-to-chloraka": "2026-10-18",
  "/taxi-to-coral-bay": "2026-10-18",
  "/taxi-to-kato-paphos": "2026-10-18",
  "/taxi-to-kissonerga": "2026-10-18",
  "/taxi-to-limassol": "2026-10-18",
  "/taxi-to-peyia": "2026-10-18",
  "/taxi-to-pissouri": "2026-10-18",
  "/taxi-to-polis-latchi": "2026-10-18",
};

function lastmodTag(path: string): string {
  return lastModified[path] ? `<lastmod>${lastModified[path]}</lastmod>` : "";
}

// English-only routes (blog posts)
const englishOnlyPaths = [
  "/blog/best-beaches-paphos-coral-bay",
  "/blog/complete-cyprus-airport-transfer-guide",
  "/blog/cyprus-travel-tips-first-time-visitors",
  "/blog/hidden-gems-chloraka-kissonerga",
  "/blog/larnaca-airport-to-paphos-travel-guide",
  "/blog/things-to-do-in-paphos",
  "/blog/top-hotels-villas-coral-bay-peyia",
];

function urlFor(locale: Locale, path: string): string {
  if (locale === "en") return `${SITE}${path === "/" ? "" : path}` || `${SITE}/`;
  return `${SITE}/${locale}${path === "/" ? "" : path}`;
}

function buildSitemap(): string {
  const urls: string[] = [];

  for (const path of localizedPaths) {
    // hreflang alternates only for locales that really have this page (German is partial)
    const locales = LOCALES.filter((l) => hasLocalePage(l, path));
    for (const loc of locales) {
      const links = locales
        .map(
          (alt) =>
            `<xhtml:link rel="alternate" hreflang="${alt}" href="${urlFor(alt, path)}" />`,
        )
        .join("");
      const xDefault = `<xhtml:link rel="alternate" hreflang="x-default" href="${urlFor("en", path)}" />`;
      urls.push(
        `<url><loc>${urlFor(loc, path)}</loc>${lastmodTag(path)}<changefreq>weekly</changefreq><priority>${path === "/" ? "1.0" : "0.8"}</priority>${links}${xDefault}</url>`,
      );
    }
  }

  for (const path of englishOnlyPaths) {
    urls.push(
      `<url><loc>${urlFor("en", path)}</loc>${lastmodTag(path)}<changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    );
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>`;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () =>
        new Response(buildSitemap(), {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        }),
    },
  },
});
