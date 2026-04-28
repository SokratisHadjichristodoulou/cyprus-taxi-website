import { createFileRoute } from "@tanstack/react-router";

const SITE = "https://taxicyprus24.com";

// Pages that exist in all 3 locales (en + el + ru)
const localizedPaths = [
  "/",
  "/about",
  "/blog",
  "/contact",
  "/cyprus-airport-transfers",
  "/faq",
  "/fleet",
  "/larnaca-airport-to-paphos",
  "/larnaca-airport-transfers",
  "/paphos-airport-transfers",
  "/pricing",
  "/reviews",
  "/taxi-to-chloraka",
  "/taxi-to-coral-bay",
  "/taxi-to-limassol",
  "/taxi-to-peyia",
];

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

function urlFor(locale: "en" | "el" | "ru", path: string): string {
  if (locale === "en") return `${SITE}${path === "/" ? "" : path}` || `${SITE}/`;
  return `${SITE}/${locale}${path === "/" ? "" : path}`;
}

function buildSitemap(): string {
  const today = new Date().toISOString().split("T")[0];
  const urls: string[] = [];

  for (const path of localizedPaths) {
    for (const loc of ["en", "el", "ru"] as const) {
      const links = (["en", "el", "ru"] as const)
        .map(
          (alt) =>
            `<xhtml:link rel="alternate" hreflang="${alt}" href="${urlFor(alt, path)}" />`,
        )
        .join("");
      const xDefault = `<xhtml:link rel="alternate" hreflang="x-default" href="${urlFor("en", path)}" />`;
      urls.push(
        `<url><loc>${urlFor(loc, path)}</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>${path === "/" ? "1.0" : "0.8"}</priority>${links}${xDefault}</url>`,
      );
    }
  }

  for (const path of englishOnlyPaths) {
    urls.push(
      `<url><loc>${urlFor("en", path)}</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
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
