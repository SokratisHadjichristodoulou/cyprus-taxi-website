import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/de/contact")({
  head: () => ({
    meta: [
      { title: "Kontakt & Buchung – Taxi Cyprus 24" },
      {
        name: "description",
        content:
          "Buchen Sie Ihren Flughafentransfer auf Zypern bei Taxi Cyprus 24: Anruf unter +357 96 626 844, Nachricht per WhatsApp oder Buchungsformular mit Sofort-Angebot.",
      },
      { property: "og:title", content: "Kontakt & Buchung – Taxi Cyprus 24" },
      {
        property: "og:description",
        content: "Flughafentransfers auf Zypern rund um die Uhr buchen.",
      },
      { property: "og:locale", content: "de_DE" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt & Buchung"
        title="Buchen Sie Ihren Transfer auf Zypern"
        subtitle="Nutzen Sie das Formular für ein Sofort-Angebot oder schreiben Sie uns per WhatsApp für die schnellste Antwort. Wir antworten innerhalb weniger Minuten, rund um die Uhr."
        image={heroImg}
      />

      <section className="container-tight py-16 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ContactCard
            icon={<Phone />}
            title="Telefon"
            main="+357 96 626 844"
            sub="Rund um die Uhr erreichbar"
            href="tel:+35796626844"
          />
          <ContactCard
            icon={<MessageCircle />}
            title="WhatsApp"
            main="+357 96 626 844"
            sub="Schnellste Antwort"
            href="https://wa.me/35796626844"
            external
          />
          <ContactCard
            icon={<Mail />}
            title="E-Mail"
            main="bookings@taxicyprus24.com"
            sub="Antwort innerhalb 1 Stunde"
            href="mailto:bookings@taxicyprus24.com"
          />
          <ContactCard
            icon={<MapPin />}
            title="Einsatzgebiet"
            main="Ganz Zypern"
            sub="Ab den Flughäfen LCA & PFO"
          />
        </div>

        <div className="mt-16 rounded-3xl bg-secondary/40 p-8 md:p-12">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-[color:var(--navy-foreground)]">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-navy">
                24 Stunden am Tag, 7 Tage die Woche erreichbar
              </h2>
              <p className="mt-2 text-muted-foreground">
                Wir sind rund um die Uhr im Einsatz – auch an allen Feiertagen. Transfers in der
                Nacht und am frühen Morgen kosten denselben Festpreis wie tagsüber.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCard({
  icon,
  title,
  main,
  sub,
  href,
  external,
}: {
  icon: React.ReactNode;
  title: string;
  main: string;
  sub: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <>
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-[color:var(--navy-foreground)]">
        {icon}
      </div>
      <div className="mt-5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </div>
      <div className="mt-1 break-words font-display text-base font-bold text-navy">{main}</div>
      <div className="mt-1 text-sm text-muted-foreground">{sub}</div>
    </>
  );
  const className =
    "block rounded-2xl border border-border bg-card p-7 shadow-card-soft transition-all hover:-translate-y-0.5 hover:shadow-elegant";
  if (!href) return <div className={className}>{content}</div>;
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {content}
    </a>
  ) : (
    <a href={href} className={className}>
      {content}
    </a>
  );
}
