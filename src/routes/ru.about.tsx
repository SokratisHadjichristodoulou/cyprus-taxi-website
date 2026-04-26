import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Award, Heart, Clock, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import meetGreetImg from "@/assets/meet-greet.jpg";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { TrustBar } from "@/components/TrustBar";

export const Route = createFileRoute("/ru/about")({
  head: () => ({
    meta: [
      { title: "О Taxicyprus24 — Надёжные трансферы из аэропортов с 2010 года" },
      { name: "description", content: "Узнайте о Taxicyprus24 — семейной компании частных трансферов из аэропортов Кипра с 2010 года. Фиксированные цены из Ларнаки и Пафоса, 5000+ довольных клиентов, рейтинг 4.9★, 24/7." },
      { name: "keywords", content: "о Taxicyprus24, компания трансферов Кипр, частное такси Кипр, такси аэропорт Ларнака, такси аэропорт Пафос, семейное такси Кипр" },
      { property: "og:title", content: "О Taxicyprus24 — Надёжные трансферы из аэропортов с 2010 года" },
      { property: "og:description", content: "Семейная компания частных трансферов на Кипре. Фиксированные цены, профессиональные водители, бесплатные детские кресла и 24/7 из Ларнаки и Пафоса." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImg },
      { property: "og:locale", content: "ru_RU" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "О Taxicyprus24 — Трансферы из аэропортов с 2010" },
      { name: "twitter:description", content: "Семейный сервис такси на Кипре. Фиксированные цены, рейтинг 4.9★, трансферы 24/7." },
      { name: "twitter:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "https://taxicyprus24.com/ru/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: ShieldCheck, title: "Доверие", desc: "Лицензированные и застрахованные водители — полностью прозрачный сервис такси с фиксированной ценой по всему Кипру." },
  { icon: Award, title: "Качество", desc: "Чистые и люксовые автомобили, англоговорящие водители и внимание к деталям при каждом трансфере." },
  { icon: Heart, title: "Забота", desc: "Мы относимся к каждому гостю как к семье — от первого бронирования до доставки от двери до двери." },
  { icon: Clock, title: "Надёжность", desc: "Всегда вовремя, с отслеживанием рейса в реальном времени, встречей в аэропорту и поддержкой 24/7." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="О Taxicyprus24"
        title="Надёжные трансферы из аэропортов Кипра с 2010 года"
        subtitle="Taxicyprus24 — семейная компания частных трансферов, предоставляющая надёжные услуги такси с фиксированной ценой из аэропорта Ларнаки, аэропорта Пафоса и по всему Кипру. Более десяти лет опыта, 5000+ довольных клиентов и рейтинг 4.9★."
        image={heroImg}
        showForm={false}
      />

      <TrustBar />

      <section className="container-tight py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="self-start overflow-hidden rounded-3xl shadow-elegant">
            <img
              src={meetGreetImg}
              alt="Профессиональный водитель Taxicyprus24 встречает в зале прилёта аэропорта Ларнаки"
              loading="lazy"
              width={1280}
              height={896}
              className="aspect-[10/7] w-full object-cover"
            />
          </div>
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/60">Наша история</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">
              Сервис такси из аэропортов Кипра, построенный на доверии
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Taxicyprus24 начался в 2010 году с одного Mercedes E-Class и простого обещания: каждый путешественник, прибывающий на Кипр, будет встречен вовремя, в чистом и люксовом автомобиле, профессиональным англоговорящим водителем, которому действительно не всё равно.
              </p>
              <p>
                Спустя более десяти лет и 5000+ частных трансферов это обещание по-прежнему определяет нашу работу. Фиксированные цены, бесплатные детские кресла, бесплатная встреча в аэропортах Ларнаки и Пафоса и доступность 24/7 — это не опции, а стандарт каждого бронирования.
              </p>
              <p>
                Сегодня мы обслуживаем гостей из Великобритании, Европы и со всего мира — деловых путешественников, семьи, молодожёнов и группы. Из аэропорта Ларнаки в Пафос, Корал-Бей, Пейю, Лимассол, Айя-Напу, Протарас и Никосию — мы покрываем все направления Кипра одним и тем же профессиональным сервисом «от двери до двери».
              </p>
              <p>
                Рейтинг 4.9 звёзд на TripAdvisor и 120+ подтверждённых отзывов клиентов говорят сами за себя. Нужен ли вам частный трансфер из аэропорта Ларнаки, поездка из аэропорта Пафоса до вашей виллы или представительский шофёр по всему острову — Taxicyprus24 обеспечивает комфортную, безопасную и безстрессовую поездку каждый раз.
              </p>
            </div>
            <Link
              to="/ru/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-[color:var(--navy-foreground)]"
            >
              Забронировать трансфер <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-tight">
          <h2 className="text-center font-display text-3xl font-bold text-navy md:text-4xl">
            Почему путешественники выбирают Taxicyprus24
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-muted-foreground">
            Четыре основных принципа определяют каждый трансфер — от первого бронирования до доставки от двери до двери в ваш отель, виллу или апартаменты.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-7 shadow-card-soft">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-[color:var(--navy-foreground)]">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-navy">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
