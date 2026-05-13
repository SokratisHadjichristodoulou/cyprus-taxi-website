import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import paphosImg from "@/assets/dest-paphos.jpg";
import coralBayImg from "@/assets/dest-coral-bay.jpg";
import larnacaImg from "@/assets/dest-larnaca.jpg";
import limassolImg from "@/assets/dest-limassol.jpg";
import peyiaImg from "@/assets/dest-peyia.jpg";
import chlorakaImg from "@/assets/dest-chloraka.jpg";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/ru/blog")({
  head: () => ({
    meta: [
      { title: "Путеводитель по Кипру и блог | Taxi Cyprus 24" },
      { name: "description", content: "Путеводитель по Кипру — лучшие пляжи Пафоса, чем заняться в Корал-Бей, как добраться из Ларнаки в Пафос, советы и вдохновение." },
      { property: "og:title", content: "Путеводитель по Кипру | Taxi Cyprus 24" },
      { property: "og:description", content: "Гиды и советы для поездки на Кипр." },
      { property: "og:image", content: heroImg },
      { property: "og:locale", content: "ru_RU" },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: BlogPage,
});

const posts = [
  { img: coralBayImg, title: "Лучшие пляжи Пафоса и Корал-Бей", excerpt: "В Пафосе и Корал-Бей — одни из самых красивых пляжей Кипра с кристально чистой водой, золотым песком и потрясающими видами на побережье. Здесь вы найдёте семейный пляж, скрытые места или идеальный закат — у западного побережья есть что предложить каждому.", date: "Апрель 2025", read: "6 мин", to: "/blog/best-beaches-paphos-coral-bay" as const },
  { img: heroImg, title: "Как добраться из аэропорта Ларнаки в Пафос", excerpt: "Поездка из международного аэропорта Ларнаки в Пафос — один из самых популярных маршрутов для гостей Кипра. Расстояние около 135 км, среднее время в пути — около 1 часа 30 минут в зависимости от трафика и выбранного транспорта.", date: "Апрель 2025", read: "5 мин", to: "/blog/larnaca-airport-to-paphos-travel-guide" as const },
  { img: peyiaImg, title: "Лучшие отели и виллы в Корал-Бей и Пейе", excerpt: "Корал-Бей и Пейя — одни из самых популярных направлений для отпуска на западном побережье Кипра. Известны красивыми пляжами, люксовыми виллами, семейными курортами и потрясающими средиземноморскими закатами.", date: "Март 2025", read: "8 мин", to: "/blog/top-hotels-villas-coral-bay-peyia" as const },
  { img: paphosImg, title: "Что посмотреть в Пафосе — гид от местных", excerpt: "Пафос — одно из самых популярных направлений на Кипре, известное пляжами, древней историей, традиционными деревнями и живописной набережной. Будь то спокойный отдых, прогулки или местная кухня — Пафос подходит каждому.", date: "Март 2025", read: "7 мин", to: "/blog/things-to-do-in-paphos" as const },
  { img: larnacaImg, title: "Советы по поездке на Кипр для тех, кто едет впервые", excerpt: "Кипр — одно из самых популярных средиземноморских направлений для британских и европейских путешественников: красивые пляжи, тёплый климат, историческое наследие и гостеприимная культура. Если вы едете впервые — несколько советов сделают ваш отдых проще.", date: "Февраль 2025", read: "6 мин", to: "/blog/cyprus-travel-tips-first-time-visitors" as const },
  { img: limassolImg, title: "Полный гид по трансферам из аэропортов Кипра", excerpt: "Едете на Кипр в отпуск или по делам? Правильный выбор трансфера сделает прибытие быстрее и проще. Прилетаете ли вы в Ларнаку или в Пафос — этот гид сравнивает такси, частные трансферы, аренду авто и общественный транспорт.", date: "Февраль 2025", read: "9 мин", to: "/blog/complete-cyprus-airport-transfer-guide" as const },
  { img: chlorakaImg, title: "Скрытые жемчужины рядом с Хлоракой и Киссонергой", excerpt: "Хлорака и Киссонерга — два недооценённых прибрежных района западного Кипра. Расположены между Пафосом и Корал-Бей, предлагают спокойные пляжи, живописные места, местные таверны и более аутентичный опыт.", date: "Январь 2025", read: "5 мин", to: "/blog/hidden-gems-chloraka-kissonerga" as const },
];

function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Путеводитель"
        title="Гид по Кипру и вдохновение"
        subtitle="Откройте для себя локальные гиды по Пафосу, Корал-Бей, Лимассолу, Ларнаке и направлениям по всему Кипру — от тех, кто действительно знает остров. От скрытых пляжей и традиционных деревень до советов по трансферам, ресторанам и семейным достопримечательностям."
        image={heroImg}
        showForm={false}
      />

      <section className="container-tight py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link key={p.title} to={p.to} className="block">
              <article className="group h-full overflow-hidden rounded-2xl border border-border bg-card shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elegant">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> {p.date}</span>
                    <span>· {p.read}</span>
                  </div>
                  <h2 className="mt-3 font-display text-lg font-bold text-navy">{p.title}</h2>
                  <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{p.excerpt}</p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
                    Читать далее <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/ru/contact" className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-[color:var(--navy-foreground)]">
            Забронировать трансфер <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
