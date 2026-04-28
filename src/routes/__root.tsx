import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MobileBookingBar } from "@/components/MobileBookingBar";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-navy">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-[color:var(--navy-foreground)] transition-colors hover:opacity-90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0a1d3a" },
      { title: "Cyprus Airport Taxi & Transfers | Taxi Cyprus 24/7" },
      {
        name: "description",
        content:
          "Premium Cyprus airport taxi transfers from Larnaca and Paphos airports. Fixed prices, professional drivers, free cancellation, 24/7 service.",
      },
      { name: "author", content: "Taxi Cyprus 24" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Taxi Cyprus 24" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@TaxiCyprus24" },
      { property: "og:title", content: "Cyprus Airport Taxi & Transfers | Taxi Cyprus 24/7" },
      { name: "twitter:title", content: "Cyprus Airport Taxi & Transfers | Taxi Cyprus 24/7" },
      { name: "description", content: "Private Cyprus airport taxi transfers from Larnaca & Paphos airports. Fixed prices, professional drivers, 24/7 service & comfortable rides across Cyprus." },
      { property: "og:description", content: "Private Cyprus airport taxi transfers from Larnaca & Paphos airports. Fixed prices, professional drivers, 24/7 service & comfortable rides across Cyprus." },
      { name: "twitter:description", content: "Private Cyprus airport taxi transfers from Larnaca & Paphos airports. Fixed prices, professional drivers, 24/7 service & comfortable rides across Cyprus." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/wmsz0aV3y5YpI4DtnooPQnlf3LG3/social-images/social-1777198205711-taxicyprus24Social.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/wmsz0aV3y5YpI4DtnooPQnlf3LG3/social-images/social-1777198205711-taxicyprus24Social.webp" },
      // Geo targeting (helps both classical search & generative engines understand service area)
      { name: "geo.region", content: "CY" },
      { name: "geo.placename", content: "Cyprus" },
      { name: "geo.position", content: "34.9003;33.6232" },
      { name: "ICBM", content: "34.9003, 33.6232" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap",
      },
    ],
    scripts: [
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-N5DQPGXYEX",
        async: true,
      },
      {
        children: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-N5DQPGXYEX');`,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-background pb-20 md:pb-0">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileBookingBar />
    </div>
  );
}
