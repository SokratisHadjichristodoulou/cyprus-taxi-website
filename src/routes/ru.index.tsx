import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck, Clock, BadgeCheck, Plane, Baby, CreditCard,
  Star, ArrowRight, MapPin,
} from "lucide-react";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import meetGreetImg from "@/assets/meet-greet.jpg";
import sedanImg from "@/assets/fleet-sedan.jpg";
import vanImg from "@/assets/fleet-van.jpg";

import coralBayImg from "@/assets/dest-coral-bay.jpg";
import paphosImg from "@/assets/dest-paphos.jpg";
import limassolImg from "@/assets/dest-limassol.jpg";
import larnacaImg from "@/assets/dest-larnaca.jpg";
import peyiaImg from "@/assets/dest-peyia.jpg";
import chlorakaImg from "@/assets/dest-chloraka.jpg";
import { BookingForm } from "@/components/BookingForm";
import { TrustBar } from "@/components/TrustBar";
import { popularRoutes } from "@/lib/routes-data";
import { CTASection } from "@/components/CTASection";
import { StructuredData } from "@/components/StructuredData";

export const Route = createFileRoute("/ru/")({
  head: () => ({
    meta: [
      { title: "Такси из аэропортов Кипра | Taxi Cyprus 24" },
      {
        name: "description",
        content:
          "Премиальные частные трансферы из аэропортов Ларнаки и Пафоса по всему Кипру. Фиксированные цены, профессиональные водители, бесплатная встреча, бронирование 24/7.",
      },
      { property: "og:title", content: "Такси из аэропортов Кипра | Taxi Cyprus 24" },
      {
        property: "og:description",
        content:
          "Премиальные частные трансферы из аэропортов Кипра. Фиксированные цены, бесплатная встреча, 24/7.",
      },
      { property: "og:image", content: heroImg },
      { property: "og:locale", content: "ru_RU" },
      { name: "twitter:image", content: heroImg },
      { name: "keywords", content: "такси Кипр, такси аэропорт Ларнака, такси аэропорт Пафос, трансфер аэропорт Кипр, частное такси Кипр" },
    ],
    links: [{ rel: "canonical", href: "https://taxicyprus24.com/ru" }],
  }),
  component: HomePage,
});

const destinations = [
  { name: "Пафос", img: paphosImg, slug: "/ru/paphos-airport-transfers", desc: "Старый порт, Гробницы царей и курорты" },
  { name: "Корал-Бей", img: coralBayImg, slug: "/ru/taxi-to-coral-bay", desc: "Пляжные курорты и бирюзовая вода" },
  { name: "Лимассол", img: limassolImg, slug: "/ru/taxi-to-limassol", desc: "Марина, бизнес-отели и ночная жизнь" },
  { name: "Ларнака", img: larnacaImg, slug: "/ru/larnaca-airport-transfers", desc: "Набережная Финикудес и марина" },
  { name: "Пейя", img: peyiaImg, slug: "/ru/taxi-to-peyia", desc: "Виллы на холмах с видом на море" },
  { name: "Хлорака", img: chlorakaImg, slug: "/ru/taxi-to-chloraka", desc: "Спокойное побережье рядом с Пафосом" },
];

const features = [
  { icon: BadgeCheck, title: "Фиксированные цены", desc: "Фиксированные цены на трансферы без скрытых платежей и без повышения тарифов — гарантированная прозрачность." },
  { icon: Plane, title: "Отслеживание рейса", desc: "Отслеживание рейса в реальном времени для всех трансферов, включая задержанные прибытия." },
  { icon: Baby, title: "Бесплатные детские кресла", desc: "Бесплатные люльки, детские и бустер-кресла при каждом частном трансфере." },
  { icon: ShieldCheck, title: "Лицензированные водители", desc: "Профессиональные англоговорящие лицензированные водители обеспечивают безопасные и комфортные поездки." },
  { icon: Clock, title: "Сервис 24/7", desc: "Услуги такси доступны круглосуточно, ежедневно, включая праздничные дни." },
  { icon: CreditCard, title: "Удобная оплата", desc: "Оплата онлайн картой, банковским переводом или наличными в EUR или GBP." },
];

const fleet = [
  { img: sedanImg, name: "Executive Sedan", capacity: "До 3 пассажиров · 3 чемодана", model: "Mercedes E-Class или аналог", priceFrom: "от €35" },
  { img: vanImg, name: "Premium 7-местный минивэн", capacity: "До 7 пассажиров · 7 чемоданов", model: "Ford Tourneo Custom или аналог", priceFrom: "от €60" },
];

function HomePage() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "TaxiService",
          name: "Такси из аэропортов Кипра",
          description: "Частные трансферы по фиксированным ценам из аэропортов Ларнаки (LCA) и Пафоса (PFO) по всему Кипру.",
          areaServed: { "@type": "Country", name: "Cyprus" },
          provider: {
            "@type": "LocalBusiness",
            name: "Taxi Cyprus 24",
            telephone: "+35796626844",
            url: "https://taxicyprus24.com",
            aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "1247" },
          },
        }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Премиальный трансфер Mercedes из аэропорта Кипра" className="h-full w-full object-cover" loading="eager" width={1920} height={1080} />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        <div className="relative container-tight grid gap-10 py-16 md:py-24 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:py-32">
          <div className="text-white animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Премиальные частные трансферы на Кипре
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance text-white md:text-5xl lg:text-[64px]">
              Частные трансферы из аэропортов Кипра
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
              Ищете надёжное такси рядом со мной на Кипре? Taxicyprus24 предлагает частные трансферы из аэропортов по фиксированным ценам, такси 24/7 и профессиональных водителей в Ларнаку, Пафос, Лимассол, Корал-Бей и любые направления Кипра.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/ru/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-navy shadow-elegant transition-transform hover:scale-[1.02]">
                Забронировать трансфер <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="https://wa.me/35796626844" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20">
                Получить расчёт
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-white/85">
              <Link to="/ru/reviews" className="flex items-center gap-2 transition-opacity hover:opacity-80">
                <div className="flex">
                  {[0,1,2,3,4].map((i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}
                </div>
                <span><strong className="font-semibold text-white">4.9</strong> · 120+ отзывов TripAdvisor</span>
              </Link>
              <div className="hidden h-4 w-px bg-white/20 sm:block" />
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-gold" /> Лицензия и страховка</div>
            </div>
          </div>

          <div className="animate-fade-up delay-200">
            <BookingForm />
          </div>
        </div>
      </section>

      <TrustBar />

      {/* WHY CHOOSE US */}
      <section className="container-tight py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/60">Почему Taxi Cyprus 24</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-5xl">
            Премиальный способ путешествовать по Кипру
          </h2>
          <p className="mt-4 text-pretty text-base text-muted-foreground md:text-lg">
            Мы построили нашу репутацию на пунктуальности, качественных автомобилях и абсолютной прозрачности — именно так и должны выглядеть трансферы из аэропорта.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-border bg-card p-7 shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-[color:var(--navy-foreground)]">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-navy">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* POPULAR ROUTES */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="container-tight">
          <div className="flex items-end justify-between gap-6">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/60">Популярные маршруты</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">
                Цены на трансферы из аэропортов Кипра
              </h2>
            </div>
            <Link to="/ru/cyprus-airport-transfers" className="hidden text-sm font-semibold text-navy hover:underline md:inline-flex">
              Все маршруты →
            </Link>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-card-soft">
            <table className="w-full">
              <thead className="bg-secondary/60">
                <tr className="text-left text-[11px] uppercase tracking-wider text-muted-foreground">
                  <th className="px-5 py-4 md:px-7">Маршрут</th>
                  <th className="hidden px-5 py-4 md:table-cell">Расстояние</th>
                  <th className="hidden px-5 py-4 sm:table-cell">Время</th>
                  <th className="px-5 py-4 text-right md:px-7">От</th>
                </tr>
              </thead>
              <tbody>
                {popularRoutes.map((r) => (
                  <tr key={r.slug} className="border-t border-border transition-colors hover:bg-secondary/30">
                    <td className="px-5 py-5 md:px-7">
                      <Link to={`/ru${r.slug}` as string} className="block">
                        <div className="font-semibold text-navy">{r.name}</div>
                        <div className="mt-0.5 text-xs text-muted-foreground sm:hidden">{r.duration} · {r.distance}</div>
                      </Link>
                    </td>
                    <td className="hidden px-5 py-5 text-sm text-muted-foreground md:table-cell">{r.distance}</td>
                    <td className="hidden px-5 py-5 text-sm text-muted-foreground sm:table-cell">{r.duration}</td>
                    <td className="px-5 py-5 text-right md:px-7">
                      <span className="font-display text-lg font-bold text-navy">€{r.priceFrom}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="container-tight py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/60">Направления</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-5xl">
            Трансферы в любую точку Кипра
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d) => (
            <Link key={d.name} to={d.slug} className="group relative block overflow-hidden rounded-2xl shadow-card-soft">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={d.img} alt={`Трансфер из аэропорта Кипра в ${d.name}`} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-gold">
                  <MapPin className="h-3 w-3" /> Кипр
                </div>
                <h3 className="mt-2 font-display text-2xl font-bold text-white">{d.name}</h3>
                <p className="mt-1 text-sm text-white/80">{d.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                  Заказать <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FLEET */}
      <section className="bg-navy py-20 text-[color:var(--navy-foreground)] md:py-28">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">Наш автопарк</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-5xl">
              Путешествуйте с комфортом в чистых и люксовых автомобилях
            </h2>
            <p className="mt-4 text-pretty text-base text-white/70 md:text-lg">
              От представительских седанов до просторных 7-местных минивэнов — выберите автомобиль под вашу группу.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {fleet.map((v) => (
              <div key={v.name} className="group overflow-hidden rounded-2xl bg-white text-foreground shadow-elegant transition-transform hover:-translate-y-1">
                <div className="aspect-[4/3] bg-secondary/60 p-6">
                  <img src={v.img} alt={v.name} loading="lazy" width={1024} height={768} className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="border-t border-border p-6">
                  <h3 className="font-display text-xl font-bold text-navy">{v.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{v.model}</p>
                  <p className="mt-3 text-sm font-medium text-foreground">{v.capacity}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-display text-lg font-bold text-navy">{v.priceFrom}</span>
                    <Link to="/ru/fleet" className="text-sm font-semibold text-navy hover:underline">Подробнее →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEET & GREET */}
      <section className="container-tight py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-3xl shadow-elegant">
            <img src={meetGreetImg} alt="Встреча водителя в зале прилёта аэропорта Кипра" loading="lazy" width={1280} height={896} className="h-full w-full object-cover" />
          </div>
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/60">Встреча в аэропорту включена</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-5xl">
              Ваш водитель ждёт вас в зале прилёта
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              Никаких очередей, никакой путаницы. Ваш профессиональный водитель будет ждать вас в зале прилёта с табличкой с именем — даже если ваш рейс задержится. Мы поможем с багажом и проводим вас прямо к автомобилю.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
