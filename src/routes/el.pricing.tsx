import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import { PageHero } from "@/components/PageHero";
import { TrustBar } from "@/components/TrustBar";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { sharedFAQsEl } from "@/lib/faqs.el";
import { StructuredData } from "@/components/StructuredData";
import { PriceTable } from "@/components/PriceTable";
import { pricingFromPaphos, pricingFromLarnaca } from "@/lib/pricing";

export const Route = createFileRoute("/el/pricing")({
  head: () => ({
    meta: [
      { title: "Τιμές Μεταφορών Ταξί Κύπρου — Σταθερές Τιμές από PFO & LCA | Taxi Cyprus 24" },
      {
        name: "description",
        content:
          "Πλήρης τιμοκατάλογος για ιδιωτικές μεταφορές αεροδρομίου Κύπρου από Πάφο (PFO) και Λάρνακα (LCA). Σταθερά σύνολα ανά όχημα — διόδια, παιδικά καθίσματα & υποδοχή.",
      },
      { property: "og:title", content: "Τιμές Μεταφορών Ταξί Κύπρου — Σταθερές Τιμές" },
      {
        property: "og:description",
        content:
          "Διαφανείς σταθερές τιμές για ιδιωτικές μεταφορές από αεροδρόμια Πάφου και Λάρνακας.",
      },
      { property: "og:image", content: heroImg },
      { property: "og:locale", content: "el_GR" },
      { name: "twitter:image", content: heroImg },
      {
        name: "keywords",
        content:
          "τιμές ταξί Κύπρος, τιμή ταξί αεροδρόμιο Πάφου, κόστος μεταφοράς αεροδρόμιο Λάρνακας, τιμές μεταφορών Κύπρος",
      },
    ],
    links: [{ rel: "canonical", href: "https://taxicyprus24.com/el/pricing" }],
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
          name: "Τιμές Μεταφορών Αεροδρομίου Κύπρου",
          description:
            "Ιδιωτικές μεταφορές με σταθερή τιμή από τα αεροδρόμια Πάφου (PFO) και Λάρνακας (LCA).",
          priceCurrency: "EUR",
        }}
      />

      <PageHero
        eyebrow="Διαφανείς τιμές"
        title="Τιμές Μεταφορών Αεροδρομίου Κύπρου"
        subtitle="Ψάχνετε για ταξί κοντά στο Αεροδρόμιο Λάρνακας ή στο Αεροδρόμιο Πάφου; Η ιδιωτική μας υπηρεσία ταξί στην Κύπρο είναι διαθέσιμη 24/7 με σταθερές τιμές και χωρίς κρυφές χρεώσεις."
        image={heroImg}
      />

      <TrustBar />

      <section className="container-tight py-16 md:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <PriceTable
            pricing={pricingFromPaphos}
            subtitle="Από/προς το Διεθνές Αεροδρόμιο Πάφου (PFO) σε προορισμούς σε όλη την Κύπρο."
          />
          <PriceTable
            pricing={pricingFromLarnaca}
            subtitle="Από/προς το Διεθνές Αεροδρόμιο Λάρνακας (LCA) σε προορισμούς σε όλη την Κύπρο."
          />
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-secondary/30 p-6 text-sm text-muted-foreground md:p-8">
          <p>
            <strong className="text-navy">Όλες οι τιμές είναι σύνολο ανά όχημα</strong> (όχι ανά
            άτομο) και περιλαμβάνουν διόδια, παιδικά & booster καθίσματα, υποδοχή στις αφίξεις,
            παρακολούθηση πτήσης και δωρεάν αναμονή 60 λεπτών μετά την προσγείωση. Πληρωμή online
            με κάρτα, τραπεζικό έμβασμα ή μετρητά (EUR/GBP) απευθείας στον οδηγό.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/el/contact"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-[color:var(--navy-foreground)] shadow-elegant transition-transform hover:scale-[1.02]"
          >
            Κάντε κράτηση <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/el/cyprus-airport-transfers"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-secondary/40"
          >
            Δείτε όλες τις διαδρομές
          </Link>
        </div>
      </section>

      <section className="container-tight pb-16 md:pb-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/60">Συχνές ερωτήσεις</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">
              Ερωτήσεις για τις τιμές
            </h2>
          </div>
          <FAQAccordion items={sharedFAQsEl} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
