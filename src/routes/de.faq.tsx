import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import { PageHero } from "@/components/PageHero";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { TrustBar } from "@/components/TrustBar";
import { sharedFAQsDe } from "@/lib/faqs.de";
import { StructuredData } from "@/components/StructuredData";

const allFAQs = [
  ...sharedFAQsDe,
  {
    q: "Wie buche ich einen Flughafentransfer?",
    a: "Sie haben drei Möglichkeiten: (1) das Buchungsformular auf unserer Website ausfüllen, (2) uns per WhatsApp unter +357 96 626 844 schreiben oder (3) uns direkt anrufen. Die Buchungsbestätigung erhalten Sie innerhalb weniger Minuten.",
  },
  {
    q: "Wie lauten Ihre Stornierungsbedingungen?",
    a: "Bis 24 Stunden vor der vereinbarten Abholzeit ist die Stornierung kostenlos. Bei Stornierungen weniger als 24 Stunden vor dem Transfer werden 50 % des Preises berechnet, bei Nichterscheinen der volle Preis.",
  },
  {
    q: "Bieten Sie auch stunden- oder tageweise Fahrten an?",
    a: "Ja – neben Flughafentransfers bieten wir Fahrten mit Chauffeur auf Stundenbasis sowie private Tagesausflüge auf Zypern an. Schreiben Sie uns Ihre Pläne, und wir erstellen Ihnen ein individuelles Angebot.",
  },
  {
    q: "Kann ich einen Transfer für eine andere Person buchen?",
    a: "Selbstverständlich. Geben Sie bei der Buchung einfach die Flugnummer und die Kontaktdaten des Fahrgastes an. Der Fahrer verfolgt den Flug und empfängt die Person mit einem Namensschild in der Ankunftshalle – an den Flughäfen Larnaka und Paphos.",
  },
];

export const Route = createFileRoute("/de/faq")({
  head: () => ({
    meta: [
      { title: "FAQ – Flughafentransfers auf Zypern | Taxi Cyprus 24" },
      {
        name: "description",
        content:
          "Antworten auf häufige Fragen zu Flughafentransfers auf Zypern: Preise, Bezahlung, Kindersitze, Flugüberwachung und Stornierung.",
      },
      { property: "og:title", content: "FAQ – Taxi Cyprus 24" },
      {
        property: "og:description",
        content: "Häufige Fragen zu Flughafentransfers auf Zypern.",
      },
      { property: "og:locale", content: "de_DE" },
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
        eyebrow="Häufige Fragen"
        title="Alles, was Sie wissen müssen"
        subtitle="Schnelle Antworten zu Preisen, Bezahlung, Kindersitzen, Flugüberwachung und unseren Stornierungsbedingungen."
        image={heroImg}
        showForm={false}
      />

      <TrustBar />

      <section className="container-tight py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <FAQAccordion items={allFAQs} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
