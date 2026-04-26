import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import { PageHero } from "@/components/PageHero";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { TrustBar } from "@/components/TrustBar";
import { sharedFAQsRu } from "@/lib/faqs.ru";
import { StructuredData } from "@/components/StructuredData";

export const Route = createFileRoute("/ru/faq")({
  head: () => ({
    meta: [
      { title: "Часто задаваемые вопросы — Taxi Cyprus 24" },
      { name: "description", content: "Ответы на часто задаваемые вопросы о трансферах из аэропортов Кипра. Цены, время в пути, детские кресла, оплата и сервис 24/7." },
      { property: "og:title", content: "Часто задаваемые вопросы — Taxi Cyprus 24" },
      { property: "og:description", content: "Все ответы о трансферах из аэропортов Кипра." },
      { property: "og:locale", content: "ru_RU" },
    ],
    links: [{ rel: "canonical", href: "https://taxicyprus24.com/ru/faq" }],
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
          mainEntity: sharedFAQsRu.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <PageHero
        eyebrow="Часто задаваемые вопросы"
        title="Всё, что нужно знать"
        subtitle="От цен и детских кресел до задержанных рейсов — здесь вы найдёте ответы на все ваши вопросы о трансферах из аэропортов Кипра."
        image={heroImg}
        showForm={false}
      />

      <TrustBar />

      <section className="container-tight py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <FAQAccordion items={sharedFAQsRu} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
