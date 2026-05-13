import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import { PageHero } from "@/components/PageHero";
import { TrustBar } from "@/components/TrustBar";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { sharedFAQsRu } from "@/lib/faqs.ru";
import { withLocale } from "@/lib/i18n";

const allRoutes = [
  { slug: "/larnaca-airport-to-paphos", name: "Аэропорт Ларнаки — Пафос", fromAirport: "Ларнака", duration: "1ч 30м", distance: "140 км", priceFrom: 95 },
  { slug: "/taxi-to-limassol", name: "Аэропорт Ларнаки — Лимассол", fromAirport: "Ларнака", duration: "45 мин", distance: "70 км", priceFrom: 55 },
  { slug: "/taxi-to-coral-bay", name: "Аэропорт Пафоса — Корал-Бей", fromAirport: "Пафос", duration: "30 мин", distance: "25 км", priceFrom: 35 },
  { slug: "/taxi-to-peyia", name: "Аэропорт Пафоса — Пейя", fromAirport: "Пафос", duration: "30 мин", distance: "22 км", priceFrom: 35 },
  { slug: "/taxi-to-chloraka", name: "Аэропорт Пафоса — Хлорака", fromAirport: "Пафос", duration: "25 мин", distance: "20 км", priceFrom: 32 },
  { slug: "/larnaca-airport-transfers", name: "Трансферы из аэропорта Ларнаки", fromAirport: "Ларнака", duration: "По-разному", distance: "По всему Кипру", priceFrom: 35 },
  { slug: "/taxi-to-limassol", name: "Аэропорт Пафоса — Лимассол", fromAirport: "Пафос", duration: "50 мин", distance: "65 км", priceFrom: 65 },
  { slug: "/larnaca-airport-transfers", name: "Аэропорт Ларнаки — Айя-Напа", fromAirport: "Ларнака", duration: "45 мин", distance: "55 км", priceFrom: 55 },
  { slug: "/larnaca-airport-transfers", name: "Аэропорт Ларнаки — Протарас", fromAirport: "Ларнака", duration: "50 мин", distance: "65 км", priceFrom: 60 },
  { slug: "/larnaca-airport-transfers", name: "Аэропорт Ларнаки — Никосия", fromAirport: "Ларнака", duration: "40 мин", distance: "50 км", priceFrom: 50 },
] as const;

export const Route = createFileRoute("/ru/cyprus-airport-transfers")({
  head: () => ({
    meta: [
      { title: "Трансферы из аэропортов Кипра — Все маршруты и цены | Taxi Cyprus 24" },
      { name: "description", content: "Полный список маршрутов трансферов из аэропортов Кипра — Ларнака (LCA) и Пафос (PFO). Фиксированные цены в Пафос, Лимассол, Корал-Бей, Айя-Напу, Протарас, Никосию." },
      { property: "og:title", content: "Трансферы из аэропортов Кипра — Все маршруты" },
      { property: "og:description", content: "Фиксированные цены на трансферы из аэропортов Кипра в любое направление." },
      { property: "og:image", content: heroImg },
      { property: "og:locale", content: "ru_RU" },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: AllTransfersPage,
});

function AllTransfersPage() {
  return (
    <>
      <PageHero
        eyebrow="Все трансферы из аэропортов Кипра"
        title="Трансферы из аэропортов Кипра — Все маршруты и цены"
        subtitle="Частные трансферы по фиксированным ценам из аэропортов Ларнаки (LCA) и Пафоса (PFO) в любое направление Кипра. Сравните маршруты и забронируйте за секунды."
        image={heroImg}
      />

      <TrustBar />

      <section className="container-tight py-16 md:py-20">
        <h2 className="font-display text-3xl font-bold text-navy md:text-4xl">Все маршруты трансферов по Кипру</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Мы предоставляем частные трансферы из аэропортов в каждый город, деревню, отель и курорт на Кипре.
          Все цены ниже — итоговые фиксированные суммы, включающие платные дороги, детские кресла и встречу.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {allRoutes.map((r, i) => (
            <Link key={i} to={withLocale("ru", r.slug)} className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-6 shadow-card-soft transition-all hover:-translate-y-0.5 hover:shadow-elegant">
              <div>
                <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-navy/60">
                  <MapPin className="h-3 w-3" /> Из {r.fromAirport}
                </div>
                <div className="mt-1.5 font-display text-lg font-bold text-navy">{r.name}</div>
                <div className="mt-1 text-sm text-muted-foreground">{r.duration} · {r.distance}</div>
              </div>
              <div className="text-right">
                <div className="text-[11px] font-semibold uppercase text-muted-foreground">От</div>
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
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/60">Вопросы и ответы</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">Частые вопросы</h2>
          </div>
          <FAQAccordion items={sharedFAQsRu} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
