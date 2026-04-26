import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import { PageHero } from "@/components/PageHero";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { sharedFAQs } from "@/lib/faqs";
import { StructuredData } from "@/components/StructuredData";

const allFAQs = [
  ...sharedFAQs,
  {
    q: "How do I book an airport transfer?",
    a: "Booking your Cyprus airport transfer with Taxicyprus24 is quick and easy. You can reserve your private taxi in three convenient ways: (1) complete the online booking form on our website, (2) send us a message on WhatsApp at +357 96 626 844, or (3) call our team directly. Whether you need a taxi from Larnaca Airport, Paphos Airport, Limassol, or anywhere in Cyprus, you will receive a fast booking confirmation within minutes.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Free cancellation up to 24 hours before your transfer. After that, a 50% fee applies. No-shows are charged in full.",
  },
  {
    q: "Do you offer hourly or daily hire?",
    a: "Yes — we offer chauffeur-driven hourly hire and full-day Cyprus tours. Contact us for a custom quote.",
  },
  {
    q: "Can I book a transfer for someone else?",
    a: "Absolutely. Just provide their flight number and contact details — our driver will meet them with their name on the sign.",
  },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Cyprus Airport Transfers | Taxi Cyprus 24" },
      { name: "description", content: "Answers to common questions about Cyprus airport taxi transfers — prices, payment, child seats, flight tracking, cancellation policy." },
      { property: "og:title", content: "FAQ — Taxi Cyprus 24" },
      { property: "og:description", content: "Common questions about Cyprus airport transfers." },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <>
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: allFAQs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }} />

      <PageHero
        eyebrow="Frequently asked questions"
        title="Everything you need to know"
        subtitle="Quick answers about prices, payment, child seats, flight tracking and our cancellation policy."
        image={heroImg}
        showForm={false}
      />

      <section className="container-tight py-16 md:py-20">
        <FAQAccordion items={allFAQs} />
      </section>

      <CTASection />
    </>
  );
}
