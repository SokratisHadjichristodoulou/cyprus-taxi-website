import { createFileRoute } from "@tanstack/react-router";

const SITE = "https://taxicyprus24.com";

// Decoded Cyrillic legacy slug → new URL on the rebuilt site.
// Anything not in this map returns 410 Gone (signals to Google to drop it).
const RU_LEGACY_REDIRECTS: Record<string, string> = {
  // /ru/услуги/ → Russian services / transfers overview
  "услуги": `${SITE}/ru/cyprus-airport-transfers`,
  // /ru/такси/ → Russian taxi/transfers page
  "такси": `${SITE}/ru/cyprus-airport-transfers`,
  // /ru/аренда-автомобиля-с-водителем-и-без/ → fleet (closest match: car with driver)
  "аренда-автомобиля-с-водителем-и-без": `${SITE}/ru/fleet`,
  // /ru/экскурсии/ and /ru/category/экскурсии/ → blog (excursion-related content)
  "экскурсии": `${SITE}/ru/blog`,
  "category/экскурсии": `${SITE}/ru/blog`,
  // /ru/компания/ → Russian about page
  "компания": `${SITE}/ru/about`,
};

function normalize(slug: string): string {
  // Strip leading/trailing slashes, decode URI components.
  let s = slug.replace(/^\/+|\/+$/g, "");
  try {
    s = decodeURIComponent(s);
  } catch {
    // leave as-is
  }
  return s;
}

// Catch-all under /ru/ for legacy WordPress URLs that don't match an existing
// Russian route. Explicit child routes (e.g. /ru/about) take priority over
// this splat in TanStack Router.
export const Route = createFileRoute("/ru/$")({
  server: {
    handlers: {
      GET: ({ params }) => {
        const slug = normalize(params._splat ?? "");
        const target = RU_LEGACY_REDIRECTS[slug];

        if (target) {
          return new Response(null, {
            status: 301,
            headers: { Location: target },
          });
        }

        // No mapping — tell Google this URL is permanently gone.
        return new Response(
          "<!doctype html><meta name='robots' content='noindex'><title>Gone</title><h1>410 Gone</h1><p>This page no longer exists. Visit <a href='/ru'>our Russian homepage</a>.</p>",
          {
            status: 410,
            headers: { "Content-Type": "text/html; charset=utf-8" },
          },
        );
      },
    },
  },
  // Client-side fallback if a user lands here via in-app navigation.
  component: GoneComponent,
});

function GoneComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-6xl font-bold text-navy">410</h1>
        <h2 className="mt-4 text-xl font-semibold">Страница удалена</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Эта страница больше не существует.
        </p>
        <a
          href="/ru"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-[color:var(--navy-foreground)]"
        >
          На главную
        </a>
      </div>
    </div>
  );
}
