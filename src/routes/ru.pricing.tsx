import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import { PageHero } from "@/components/PageHero";
import { TrustBar } from "@/components/TrustBar";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { sharedFAQsRu } from "@/lib/faqs.ru";
import { StructuredData } from "@/components/StructuredData";
import { PriceTable } from "@/components/PriceTable";
import { pricingFromPaphos, pricingFromLarnaca } from "@/lib/pricing";

export const Route = createFileRoute("/ru/pricing")({
  head: () => ({
    meta: [
      { title: "Цены на трансферы из аэропортов Кипра — фиксированные тарифы | Taxi Cyprus 24" },
      {
        name: "description",
        content:
          "Полный прайс-лист на частные трансферы из аэропортов Кипра — Пафос (PFO) и Ларнака (LCA). Фиксированные итоги за автомобиль — включая дороги, детские кресла и встречу.",
      },
      { property: "og:title", content: "Цены на трансферы из аэропортов Кипра — фиксированные тарифы" },
      {
        property: "og:description",
        content:
          "Прозрачные фиксированные цены на частные трансферы из аэропортов Пафоса и Ларнаки.",
      },
      { property: "og:image", content: heroImg },
      { property: "og:locale", content: "ru_RU" },
      { name: "twitter:image", content: heroImg },
      {
        name: "keywords",
        content: "цены такси Кипр, стоимость такси аэропорт Пафос, тариф трансфер Ларнака, цены трансфер Кипр",
      },
    ],
    links: [{ rel: "canonical", href: "https://taxicyprus24.com/ru/pricing" }],
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
          name: "Цены на трансферы из аэропортов Кипра",
          description: "Частные трансферы по фиксированной цене из аэропортов Пафоса (PFO) и Ларнаки (LCA).",
          priceCurrency: "EUR",
        }}
      />

      <PageHero
        eyebrow="Прозрачные цены"
        title="Цены на трансферы из аэропортов Кипра"
        subtitle="Ищете такси рядом с аэропортом Ларнаки или Пафоса? Наш частный сервис такси на Кипре доступен 24/7 с фиксированными ценами и без скрытых платежей."
        image={heroImg}
      />

      <TrustBar />

      <section className="container-tight py-16 md:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <PriceTable
            pricing={pricingFromPaphos}
            subtitle="Из/в международный аэропорт Пафоса (PFO) — направления по всему Кипру."
          />
          <PriceTable
            pricing={pricingFromLarnaca}
            subtitle="Из/в международный аэропорт Ларнаки (LCA) — направления по всему Кипру."
          />
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-secondary/30 p-6 text-sm text-muted-foreground md:p-8">
          <p>
            <strong className="text-navy">Все цены — итог за автомобиль</strong> (не за пассажира) и включают дороги,
            детские и бустер-кресла, встречу в зале прилёта, отслеживание рейса и бесплатное ожидание 60 минут после
            посадки. Оплата онлайн картой, банковским переводом или наличными (EUR/GBP) напрямую водителю.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/ru/contact"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-[color:var(--navy-foreground)] shadow-elegant transition-transform hover:scale-[1.02]"
          >
            Забронировать трансфер <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/ru/cyprus-airport-transfers"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-secondary/40"
          >
            Все маршруты
          </Link>
        </div>
      </section>

      <section className="container-tight pb-16 md:pb-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/60">Вопросы и ответы</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">
              Вопросы о ценах
            </h2>
          </div>
          <FAQAccordion items={sharedFAQsRu} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
