import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import { PageHero } from "@/components/PageHero";
import { TrustBar } from "@/components/TrustBar";
import { CTASection } from "@/components/CTASection";
import { popularRoutes } from "@/lib/routes-data";
import { FAQAccordion } from "@/components/FAQAccordion";
import { sharedFAQs } from "@/lib/faqs";
import { StructuredData } from "@/components/StructuredData";

const allRoutes = [
  ...popularRoutes,
  { slug: "/taxi-to-limassol" as const, name: "Larnaca Airport to Limassol", fromAirport: "Larnaca", duration: "50 min", distance: "67 km", priceFrom: 85 },
  { slug: "/larnaca-airport-to-ayia-napa" as const, name: "Larnaca Airport to Ayia Napa", fromAirport: "Larnaca", duration: "45 min", distance: "55 km", priceFrom: 70 },
  { slug: "/larnaca-airport-to-protaras" as const, name: "Larnaca Airport to Protaras", fromAirport: "Larnaca", duration: "50 min", distance: "60 km", priceFrom: 80 },
  { slug: "/larnaca-airport-transfers" as const, name: "Larnaca Airport to Nicosia", fromAirport: "Larnaca", duration: "40 min", distance: "50 km", priceFrom: 70 },
];

export const Route = createFileRoute("/cyprus-airport-transfers")({
  head: () => ({
    meta: [
      { title: "Cyprus Airport Transfers — All Routes & Prices | Taxi Cyprus 24" },
      { name: "description", content: "Complete list of Cyprus airport transfer routes from Larnaca (LCA) and Paphos (PFO). Fixed prices to Paphos, Limassol, Coral Bay, Ayia Napa, Protaras, Nicosia." },
      { property: "og:title", content: "Cyprus Airport Transfers — All Routes" },
      { property: "og:description", content: "Fixed-price Cyprus airport transfers to every destination." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
      { name: "keywords", content: "Cyprus airport transfers, Cyprus taxi service, private airport transfer Cyprus" },
    ],
  }),
  component: AllTransfersPage,
});

function AllTransfersPage() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "TaxiService",
          name: "Cyprus Airport Transfers",
          description:
            "Private fixed-price taxi transfers from Larnaca (LCA) and Paphos (PFO) airports to every destination in Cyprus.",
          areaServed: { "@type": "Country", name: "Cyprus" },
          provider: {
            "@type": "LocalBusiness",
            name: "Taxi Cyprus 24",
            telephone: "+35796626844",
            url: "https://taxicyprus24.com",
            areaServed: { "@type": "Country", name: "Cyprus" },
          },
        }}
      />

      <PageHero
        eyebrow="All Cyprus airport transfers"
        title="Cyprus Airport Transfers — All Routes & Prices"
        subtitle="Private fixed-price transfers from Larnaca (LCA) and Paphos (PFO) airports to every destination in Cyprus. Compare routes and book in seconds."
        image={heroImg}
      />

      <TrustBar />

      <section className="container-tight py-16 md:py-20">
        <h2 className="font-display text-3xl font-bold text-navy md:text-4xl">All Cyprus transfer routes</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          We provide private airport transfers to every town, village, hotel and resort in Cyprus.
          All prices below are fixed totals — they include tolls, child seats and meet & greet.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {allRoutes.map((r, i) => (
            <Link key={i} to={r.slug} className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-6 shadow-card-soft transition-all hover:-translate-y-0.5 hover:shadow-elegant">
              <div>
                <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-navy/60">
                  <MapPin className="h-3 w-3" /> From {r.fromAirport}
                </div>
                <div className="mt-1.5 font-display text-lg font-bold text-navy">{r.name}</div>
                <div className="mt-1 text-sm text-muted-foreground">{r.duration} · {r.distance}</div>
              </div>
              <div className="text-right">
                <div className="text-[11px] font-semibold uppercase text-muted-foreground">From</div>
                <div className="font-display text-2xl font-bold text-navy">€{r.priceFrom}</div>
                <ArrowRight className="ml-auto mt-2 h-4 w-4 text-navy/60 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-tight pb-16 md:pb-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/60">FAQ</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">Common questions</h2>
          </div>
          <FAQAccordion items={sharedFAQs} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
