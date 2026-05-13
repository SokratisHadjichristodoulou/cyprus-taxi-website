import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/ru/contact")({
  head: () => ({
    meta: [
      { title: "Контакты и бронирование — Taxi Cyprus 24" },
      { name: "description", content: "Закажите трансфер из аэропорта Кипра у Taxi Cyprus 24. Звоните +357 96 626 844, пишите в WhatsApp или заполните форму для мгновенного расчёта." },
      { property: "og:title", content: "Контакты и бронирование — Taxi Cyprus 24" },
      { property: "og:description", content: "Забронируйте трансфер из аэропорта Кипра 24/7." },
      { property: "og:locale", content: "ru_RU" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Контакты и бронирование"
        title="Закажите трансфер на Кипре"
        subtitle="Используйте форму для мгновенного расчёта или напишите нам в WhatsApp для самого быстрого ответа. Отвечаем в течение нескольких минут, 24/7."
        image={heroImg}
      />

      <section className="container-tight py-16 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ContactCard icon={<Phone />} title="Телефон" main="+357 96 626 844" sub="Доступны 24/7" href="tel:+35796626844" />
          <ContactCard icon={<MessageCircle />} title="WhatsApp" main="+357 96 626 844" sub="Самый быстрый ответ" href="https://wa.me/35796626844" external />
          <ContactCard icon={<Mail />} title="Email" main="bookings@taxicyprus24.com" sub="Ответ в течение 1 часа" href="mailto:bookings@taxicyprus24.com" />
          <ContactCard icon={<MapPin />} title="Зона обслуживания" main="Весь Кипр" sub="Из аэропортов LCA и PFO" />
        </div>

        <div className="mt-16 rounded-3xl bg-secondary/40 p-8 md:p-12">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-[color:var(--navy-foreground)]">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-navy">Доступны 24 часа в сутки, 7 дней в неделю</h2>
              <p className="mt-2 text-muted-foreground">
                Мы работаем круглосуточно — включая все праздничные дни. Ночные и ранние утренние трансферы оплачиваются по той же фиксированной цене, что и дневные.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCard({
  icon, title, main, sub, href, external,
}: {
  icon: React.ReactNode; title: string; main: string; sub: string; href?: string; external?: boolean;
}) {
  const content = (
    <>
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-[color:var(--navy-foreground)]">
        {icon}
      </div>
      <div className="mt-5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{title}</div>
      <div className="mt-1 break-words font-display text-base font-bold text-navy">{main}</div>
      <div className="mt-1 text-sm text-muted-foreground">{sub}</div>
    </>
  );
  const className = "block rounded-2xl border border-border bg-card p-7 shadow-card-soft transition-all hover:-translate-y-0.5 hover:shadow-elegant";
  if (!href) return <div className={className}>{content}</div>;
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{content}</a>
  ) : (
    <a href={href} className={className}>{content}</a>
  );
}
