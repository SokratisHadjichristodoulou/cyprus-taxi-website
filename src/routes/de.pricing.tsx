import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import { PageHero } from "@/components/PageHero";
import { TrustBar } from "@/components/TrustBar";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { sharedFAQsDe } from "@/lib/faqs.de";
import { StructuredData } from "@/components/StructuredData";
import { PriceTable } from "@/components/PriceTable";
import { pricingFromPaphos, pricingFromLarnaca } from "@/lib/pricing";
import { paphosRouteLinks, larnacaRouteLinks } from "@/lib/route-links";

export const Route = createFileRoute("/de/pricing")({
  head: () => ({
    meta: [
      { title: "Taxipreise Zypern – Festpreise ab Paphos & Larnaka | Taxi Cyprus 24" },
      {
        name: "description",
        content:
          "Alle Festpreise für private Flughafentransfers ab Paphos (PFO) und Larnaka (LCA). Gesamtpreis pro Fahrzeug – inklusive Kindersitzen und Meet & Greet.",
      },
      { property: "og:title", content: "Taxipreise Zypern – Festpreise für Flughafentransfers" },
      {
        property: "og:description",
        content: "Transparente Festpreise für Privattransfers ab den Flughäfen Paphos und Larnaka.",
      },
      { property: "og:image", content: heroImg },
      { property: "og:locale", content: "de_DE" },
      { name: "twitter:image", content: heroImg },
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
          name: "Preise für Flughafentransfers auf Zypern",
          description:
            "Privattransfers zum Festpreis ab den Flughäfen Paphos (PFO) und Larnaka (LCA).",
          priceCurrency: "EUR",
        }}
      />

      <PageHero
        eyebrow="Transparente Preise"
        title="Preise für Flughafentransfers auf Zypern"
        subtitle="Sie suchen ein Taxi am Flughafen Larnaka oder am Flughafen Paphos? Unser privater Taxiservice auf Zypern ist rund um die Uhr für Sie da – zum Festpreis und ohne versteckte Kosten."
        image={heroImg}
      />

      <TrustBar />

      <section className="container-tight py-16 md:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <PriceTable
            pricing={pricingFromPaphos}
            linkMap={paphosRouteLinks}
            subtitle="Ab/bis Flughafen Paphos (PFO) zu Zielen auf ganz Zypern."
          />
          <PriceTable
            pricing={pricingFromLarnaca}
            linkMap={larnacaRouteLinks}
            subtitle="Ab/bis Flughafen Larnaka (LCA) zu Zielen auf ganz Zypern."
          />
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-secondary/30 p-6 text-sm text-muted-foreground md:p-8">
          <p>
            <strong className="text-navy">Alle Preise gelten pro Fahrzeug</strong> (nicht pro
            Person) und beinhalten Maut, Kinder- und Sitzerhöhungen, Meet & Greet in der
            Ankunftshalle, Flugüberwachung und 60 Minuten kostenlose Wartezeit nach der Landung.
            Bezahlung online per Karte, per Banküberweisung oder bar (EUR/GBP) direkt beim Fahrer.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/de/contact"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-[color:var(--navy-foreground)] shadow-elegant transition-transform hover:scale-[1.02]"
          >
            Transfer buchen <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/cyprus-airport-transfers"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-secondary/40"
          >
            Alle Strecken ansehen
          </Link>
        </div>
      </section>

      <section className="container-tight pb-16 md:pb-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/60">
              FAQ
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">
              Fragen zu den Preisen
            </h2>
          </div>
          <FAQAccordion items={sharedFAQsDe} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
