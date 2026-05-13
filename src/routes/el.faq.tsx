import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import { PageHero } from "@/components/PageHero";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { TrustBar } from "@/components/TrustBar";
import { sharedFAQsEl } from "@/lib/faqs.el";
import { StructuredData } from "@/components/StructuredData";

export const Route = createFileRoute("/el/faq")({
  head: () => ({
    meta: [
      { title: "Συχνές Ερωτήσεις — Taxi Cyprus 24" },
      { name: "description", content: "Απαντήσεις σε συχνές ερωτήσεις για τις μεταφορές αεροδρομίου της Κύπρου. Τιμές, χρόνοι, παιδικά καθίσματα, πληρωμή και υπηρεσία 24/7." },
      { property: "og:title", content: "Συχνές Ερωτήσεις — Taxi Cyprus 24" },
      { property: "og:description", content: "Όλες οι απαντήσεις για τις μεταφορές αεροδρομίου Κύπρου." },
      { property: "og:locale", content: "el_GR" },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: sharedFAQsEl.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <PageHero
        eyebrow="Συχνές ερωτήσεις"
        title="Όλα όσα πρέπει να γνωρίζετε"
        subtitle="Από τις τιμές μέχρι τα παιδικά καθίσματα και τις πτήσεις που καθυστερούν — εδώ θα βρείτε τις απαντήσεις σε όλες τις ερωτήσεις σας για τις μεταφορές αεροδρομίου της Κύπρου."
        image={heroImg}
        showForm={false}
      />

      <TrustBar />

      <section className="container-tight py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <FAQAccordion items={sharedFAQsEl} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
