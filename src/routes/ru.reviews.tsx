import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, ArrowRight, ExternalLink } from "lucide-react";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";

const TRIPADVISOR_URL =
  "https://www.tripadvisor.com/Attraction_Review-g190384-d8567084-Reviews-Taxi_Cyprus_Paphos-Paphos_Paphos_District.html";

export const Route = createFileRoute("/ru/reviews")({
  head: () => ({
    meta: [
      { title: "Отзывы — 4.9★ на TripAdvisor (120+ отзывов) | Taxi Cyprus 24" },
      { name: "description", content: "Читайте подтверждённые отзывы TripAdvisor о Taxi Cyprus 24 — 4.9★ от 120+ путешественников. №6 из 94 трансферов в Пафосе." },
      { property: "og:title", content: "Отзывы — Taxi Cyprus 24" },
      { property: "og:description", content: "Подтверждённые отзывы 4.9★ на TripAdvisor о трансферах на Кипре." },
      { property: "og:image", content: heroImg },
      { property: "og:locale", content: "ru_RU" },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: ReviewsPage,
});

const reviews = [
  { name: "Silver C", from: "TripAdvisor", date: "Фев 2026", title: "Отлично", text: "Это была очень быстрая и комфортная поездка!! Ехали из города Пафос в аэропорт. Большое спасибо! Рекомендую." },
  { name: "Ксения Б", from: "TripAdvisor", date: "Окт 2025", title: "Положительно", text: "Очень хорошие ребята. Вовремя, хорошая цена, комфорт, рекомендую. Звонила, бронировала, нужно было поменять время — без проблем, помогают с багажом." },
  { name: "Aggelos A", from: "TripAdvisor", date: "Июн 2025", title: "Такси в Пафосе", text: "Заказали такси, нас встретили в аэропорту, отвезли в город, через несколько дней доставили в Айя-Напу, а из Айя-Напы — в аэропорт Пафоса. Всё вовремя. Рекомендую." },
  { name: "Dmitry O", from: "Графство Лимерик, Ирландия · TripAdvisor", date: "Июн 2025", title: "Отличный сервис такси в Пафосе", text: "Владимирос — отличный и безопасный водитель, всегда вовремя, разумные цены и у него новый 7-местный автомобиль. Пользовались его услугами всё время отдыха. Безусловно рекомендую." },
  { name: "Rayaa K", from: "TripAdvisor", date: "Май 2025", title: "Идеально", text: "Спасибо, Влад! Очень вежливый и дружелюбный, отличный тайминг, позаботился обо всей поездке. 10/10, безусловно рекомендую." },
  { name: "Joep D", from: "TripAdvisor", date: "Июл 2025", title: "Поездка на такси", text: "Это был очень хороший опыт — мы пользовались этим такси много раз, всегда вовремя, и водитель давал отличные советы по поездкам в разные города." },
  { name: "Damian V", from: "TripAdvisor", date: "Июл 2025", title: "Очень дружелюбный водитель", text: "Очень вежливый и дружелюбный водитель такси. Возил нас везде, куда нам было нужно." },
  { name: "Jermo S", from: "TripAdvisor", date: "Июл 2025", title: "Очень хороший водитель", text: "Очень хороший водитель такси. Отвёз нас из Пафоса в Айя-Напу." },
  { name: "Jaap d", from: "TripAdvisor", date: "Июл 2025", title: "Хороший водитель", text: "Превосходно! Возил нас много дней, и каждый раз был очень хорош. Когда мы звонили, был быстрый ответ. Замечательный водитель." },
];

function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Отзывы и рекомендации"
        title="4.9★ на TripAdvisor — 120+ отзывов"
        subtitle="№6 из 94 трансферов в Пафосе. Читайте подтверждённые отзывы реальных путешественников из Великобритании, Европы и со всего мира."
        image={heroImg}
        showForm={false}
      />

      <section className="container-tight pt-16 md:pt-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-card p-8 shadow-card-soft md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-[auto_1fr_auto]">
            <div className="text-center md:text-left">
              <div className="font-display text-6xl font-bold text-navy md:text-7xl">4.9</div>
              <div className="mt-2 flex justify-center gap-0.5 md:justify-start">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>
              <div className="mt-1 text-xs font-medium text-muted-foreground">120 подтверждённых отзывов</div>
            </div>

            <div className="space-y-1.5 text-sm">
              {[
                { label: "Отлично", count: 117, total: 120 },
                { label: "Хорошо", count: 1, total: 120 },
                { label: "Средне", count: 0, total: 120 },
                { label: "Плохо", count: 1, total: 120 },
                { label: "Ужасно", count: 1, total: 120 },
              ].map((row) => (
                <div key={row.label} className="flex items-center gap-3">
                  <span className="w-20 shrink-0 text-xs font-medium text-muted-foreground">{row.label}</span>
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-secondary">
                    <div className="h-full rounded-full bg-navy" style={{ width: `${(row.count / row.total) * 100}%` }} />
                  </div>
                  <span className="w-8 shrink-0 text-right text-xs font-semibold text-navy">{row.count}</span>
                </div>
              ))}
            </div>

            <a href={TRIPADVISOR_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/20 bg-secondary/50 px-5 py-3 text-sm font-semibold text-navy transition-colors hover:bg-secondary">
              Открыть на TripAdvisor <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="container-tight py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <article key={r.name + r.title} className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-card-soft">
              <div className="flex items-center justify-between">
                <div className="flex">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">{r.date}</span>
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-navy">{r.title}</h3>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-foreground">"{r.text}"</p>
              <div className="mt-5 border-t border-border pt-4">
                <div className="font-semibold text-navy">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.from}</div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <a href={TRIPADVISOR_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-card px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-secondary">
            Все 120 отзывов на TripAdvisor <ExternalLink className="h-4 w-4" />
          </a>
          <Link to="/ru/contact" className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-[color:var(--navy-foreground)]">
            Забронировать трансфер <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
