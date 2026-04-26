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
    a: "Taxicyprus24 offers free cancellation on all Cyprus airport transfers and private taxi bookings up to 24 hours before your scheduled pickup time. Cancellations made less than 24 hours before the transfer are subject to a 50% cancellation fee, while no-shows are charged in full. Our transparent cancellation policy ensures fair and reliable airport taxi service for all transfers from Larnaca Airport, Paphos Airport, Limassol, and across Cyprus.",
  },
  {
    q: "Do you offer hourly or daily hire?",
    a: "Yes — Taxicyprus24 offers professional chauffeur-driven hourly hire services and private full-day Cyprus tours tailored to your schedule. Whether you need a luxury chauffeur service for business travel, sightseeing tours across Cyprus, or a private driver for the day, we provide comfortable vehicles, experienced drivers, and fixed transparent pricing. Contact us today for a custom quote on private taxi tours, VIP transfers, and chauffeur services anywhere in Cyprus.",
  },
  {
    q: "Can I book a transfer for someone else?",
    a: "Absolutely. You can book a private Cyprus airport transfer for friends, family members, colleagues, or guests with Taxicyprus24. Simply provide the passenger’s flight number and contact details when booking, and our professional driver will monitor the flight in real time and meet them at the arrivals hall with a personalised name sign. Our reliable meet & greet taxi service is available at Larnaca Airport, Paphos Airport, and across Cyprus 24/7.",
  },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Cyprus Airport Transfers | Taxi Cyprus 24" },
      {
        name: "description",
        content:
          "Answers to common questions about Cyprus airport taxi transfers — prices, payment, child seats, flight tracking, cancellation policy.",
      },
      { property: "og:title", content: "FAQ — Taxi Cyprus 24" },
      { property: "og:description", content: "Common questions about Cyprus airport transfers." },
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
          mainEntity: allFAQs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />

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
