import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import { PageHero } from "@/components/PageHero";
import { TrustBar } from "@/components/TrustBar";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { sharedFAQs } from "@/lib/faqs";
import { StructuredData } from "@/components/StructuredData";
import { PriceTable } from "@/components/PriceTable";
import { pricingFromPaphos, pricingFromLarnaca } from "@/lib/pricing";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Cyprus Taxi Prices — Fixed Rates | Taxi Cyprus 24" },
      {
        name: "description",
        content:
          "Full price list for private Cyprus airport transfers from Paphos (PFO) and Larnaca (LCA). Fixed totals per vehicle — incl. tolls, child seats & meet & greet.",
      },
      { property: "og:title", content: "Cyprus Taxi Transfer Prices — Fixed Rates" },
      {
        property: "og:description",
        content:
          "Transparent fixed prices for private Cyprus airport transfers from Paphos and Larnaca airports.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
      {
        name: "keywords",
        content:
          "Cyprus taxi prices, Paphos airport taxi price, Larnaca airport transfer cost, Cyprus transfer rates",
      },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "PriceSpecification",
          name: "Cyprus Airport Transfer Prices",
          description:
            "Fixed-price private taxi transfers from Paphos (PFO) and Larnaca (LCA) airports.",
          priceCurrency: "EUR",
        }}
      />

      <PageHero
        eyebrow="Transparent pricing"
        title="Cyprus Airport Transfer Prices"
        subtitle="Searching for a taxi near Larnaca Airport or Paphos Airport? Our private Cyprus taxi service is available 24/7 with fixed prices and no hidden fees."
        image={heroImg}
      />

      <TrustBar />

      <section className="container-tight py-16 md:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <PriceTable
            pricing={pricingFromPaphos}
            subtitle="From/to Paphos International Airport (PFO) to destinations across Cyprus."
          />
          <PriceTable
            pricing={pricingFromLarnaca}
            subtitle="From/to Larnaca International Airport (LCA) to destinations across Cyprus."
          />
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-secondary/30 p-6 text-sm text-muted-foreground md:p-8">
          <p>
            <strong className="text-navy">All prices are total per vehicle</strong> (not per person)
            and include tolls, child & booster seats, meet & greet at arrivals, flight tracking, and
            free 60-minute waiting time after landing. Pay online by card, bank transfer, or in cash
            (EUR/GBP) directly to your driver.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-[color:var(--navy-foreground)] shadow-elegant transition-transform hover:scale-[1.02]"
          >
            Book your transfer <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/cyprus-airport-transfers"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-secondary/40"
          >
            View all routes
          </Link>
        </div>
      </section>

      <section className="container-tight pb-16 md:pb-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/60">FAQ</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">
              Pricing questions
            </h2>
          </div>
          <FAQAccordion items={sharedFAQs} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
