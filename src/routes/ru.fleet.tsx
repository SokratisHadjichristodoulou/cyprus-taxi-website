import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Users, Briefcase, Snowflake, Baby } from "lucide-react";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import sedanImg from "@/assets/fleet-sedan.jpg";
import vanImg from "@/assets/fleet-van.jpg";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/ru/fleet")({
  head: () => ({
    meta: [
      { title: "Наш автопарк | Taxi Cyprus 24" },
      { name: "description", content: "Премиальный автопарк для трансферов из аэропортов Кипра — Executive E-Class, 7-местные V-Class и люксовые S-Class автомобили." },
      { property: "og:title", content: "Автопарк | Taxi Cyprus 24" },
      { property: "og:description", content: "Премиальные чистые и люксовые автомобили для трансферов на Кипре." },
      { property: "og:image", content: heroImg },
      { property: "og:locale", content: "ru_RU" },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: FleetPage,
});

const fleet = [
  {
    img: sedanImg,
    name: "Executive Sedan",
    model: "Mercedes E-Class или аналог",
    desc: "Наш самый популярный автомобиль — комфортный, просторный и элегантный. Идеален для пар, бизнес-поездок и небольших семей.",
    pax: "До 3 пассажиров",
    bags: "3 больших чемодана",
    priceFrom: "от €35",
  },
  {
    img: vanImg,
    name: "Premium 7-местный минивэн",
    model: "Ford Tourneo Custom или аналог",
    desc: "Просторный 7-местный минивэн для семей и групп. Много места для багажа, детских кресел и сумок для гольфа.",
    pax: "До 7 пассажиров",
    bags: "7 больших чемоданов",
    priceFrom: "от €60",
  },
];

const features = [
  { icon: Snowflake, label: "Кондиционер" },
  { icon: Baby, label: "Бесплатные детские кресла" },
  { icon: Briefcase, label: "Много места для багажа" },
];

function FleetPage() {
  return (
    <>
      <PageHero
        eyebrow="Премиальный автопарк"
        title="Путешествуйте с комфортом в чистых и люксовых автомобилях"
        subtitle="Каждый автомобиль Taxi Cyprus 24 — это чистая и люксовая машина с регулярным обслуживанием и тщательным уходом. Выберите модель, подходящую для вашей группы."
        image={heroImg}
        showForm={false}
      />

      <section className="container-tight py-16 md:py-20">
        <div className="grid gap-8">
          {fleet.map((v, i) => (
            <div key={v.name} className={`grid gap-8 overflow-hidden rounded-3xl border border-border bg-card shadow-card-soft md:grid-cols-2 md:gap-0 ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}>
              <div className="bg-secondary/40 p-8 md:p-12">
                <img src={v.img} alt={v.name} loading="lazy" width={1024} height={768} className="h-full w-full object-contain" />
              </div>
              <div className="p-8 md:p-12">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/60">{v.model}</span>
                <h2 className="mt-2 font-display text-3xl font-bold text-navy md:text-4xl">{v.name}</h2>
                <p className="mt-4 text-base text-muted-foreground">{v.desc}</p>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-border bg-background p-4">
                    <div className="flex items-center gap-2 text-[11px] font-semibold uppercase text-muted-foreground">
                      <Users className="h-4 w-4 text-navy/60" /> Вместимость
                    </div>
                    <div className="mt-1 font-semibold text-navy">{v.pax}</div>
                  </div>
                  <div className="rounded-xl border border-border bg-background p-4">
                    <div className="flex items-center gap-2 text-[11px] font-semibold uppercase text-muted-foreground">
                      <Briefcase className="h-4 w-4 text-navy/60" /> Багаж
                    </div>
                    <div className="mt-1 font-semibold text-navy">{v.bags}</div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span className="font-display text-2xl font-bold text-navy">{v.priceFrom}</span>
                  <Link to="/ru/contact" className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-[color:var(--navy-foreground)] transition-transform hover:scale-[1.02]">
                    Забронировать <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.label} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-[color:var(--navy-foreground)]">
                <f.icon className="h-5 w-5" />
              </div>
              <div className="font-semibold text-navy">{f.label}</div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
