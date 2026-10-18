import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Clock,
  BadgeCheck,
  Plane,
  Baby,
  CreditCard,
  Star,
  ArrowRight,
  MapPin,
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
import { FAQAccordion } from "@/components/FAQAccordion";
import { sharedFAQsDe } from "@/lib/faqs.de";
import { popularRoutes } from "@/lib/routes-data";
import { CTASection } from "@/components/CTASection";
import { StructuredData } from "@/components/StructuredData";
import { aggregateRating } from "@/lib/reviews";
import { withLocale } from "@/lib/i18n";

export const Route = createFileRoute("/de/")({
  head: () => ({
    meta: [
      { title: "Taxi Zypern & Flughafentransfer Paphos und Larnaka | Taxi Cyprus 24" },
      {
        name: "description",
        content:
          "Private Flughafentransfers auf Zypern ab Paphos und Larnaka zum Festpreis: Meet & Greet, Kindersitze inklusive, Flugüberwachung, 24/7 buchbar.",
      },
      { property: "og:title", content: "Taxi Zypern & Flughafentransfer | Taxi Cyprus 24" },
      {
        property: "og:description",
        content:
          "Private Flughafentransfers auf Zypern zum Festpreis – Meet & Greet und Kindersitze inklusive, rund um die Uhr.",
      },
      { property: "og:image", content: heroImg },
      { property: "og:locale", content: "de_DE" },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const destinations = [
  {
    name: "Paphos",
    img: paphosImg,
    slug: "/de/paphos-airport-transfers",
    desc: "Alter Hafen, Königsgräber & Resorts",
  },
  {
    name: "Coral Bay",
    img: coralBayImg,
    slug: "/de/taxi-to-coral-bay",
    desc: "Strandresorts & türkisfarbenes Wasser",
  },
  {
    name: "Limassol",
    img: limassolImg,
    slug: "/de/taxi-to-limassol",
    desc: "Marina, Businesshotels & Nachtleben",
  },
  {
    name: "Larnaka",
    img: larnacaImg,
    slug: "/de/larnaca-airport-transfers",
    desc: "Palmenpromenade Finikoudes",
  },
  { name: "Peyia", img: peyiaImg, slug: "/de/taxi-to-peyia", desc: "Villen mit Meerblick" },
  {
    name: "Chloraka",
    img: chlorakaImg,
    slug: "/de/taxi-to-chloraka",
    desc: "Ruhige Küste bei Paphos",
  },
];

const features = [
  {
    icon: BadgeCheck,
    title: "Festpreise",
    desc: "Flughafentransfers auf Zypern zum Festpreis – ohne versteckte Kosten, ohne Preisaufschläge, mit transparenten Tarifen.",
  },
  {
    icon: Plane,
    title: "Flugüberwachung",
    desc: "Echtzeit-Flugüberwachung für alle Transfers ab den Flughäfen Larnaka und Paphos – auch bei Verspätungen.",
  },
  {
    icon: Baby,
    title: "Kindersitze inklusive",
    desc: "Babyschalen, Kindersitze und Sitzerhöhungen sind bei jedem privaten Flughafentransfer kostenlos.",
  },
  {
    icon: ShieldCheck,
    title: "Lizenzierte Fahrer",
    desc: "Professionelle, lizenzierte und englischsprachige Fahrer für sichere und komfortable Transfers auf Zypern.",
  },
  {
    icon: Clock,
    title: "Rund um die Uhr",
    desc: "Unser Flughafentaxi ist Tag und Nacht für Sie da – auch am Wochenende und an Feiertagen.",
  },
  {
    icon: CreditCard,
    title: "Flexibel bezahlen",
    desc: "Bezahlen Sie online per Karte, per Banküberweisung oder bar in EUR oder GBP.",
  },
];

const fleet = [
  {
    img: sedanImg,
    name: "Executive-Limousine",
    capacity: "Bis zu 3 Fahrgäste · 3 Gepäckstücke",
    model: "Mercedes E-Klasse oder ähnlich",
    priceFrom: "ab 35 €",
  },
  {
    img: vanImg,
    name: "Premium-Van mit 7 Sitzen",
    capacity: "Bis zu 8 Fahrgäste · 10 große Gepäckstücke",
    model: "Ford Tourneo Custom oder ähnlich",
    priceFrom: "ab 60 €",
  },
];

// Customer reviews are shown in their original language (English).
const reviews = [
  {
    name: "Dmitry O",
    from: "County Limerick, Irland · TripAdvisor",
    date: "Juni 2025",
    text: "Vladimiros is a great safe driver, always on time, reasonably priced and has a new people carrier. We used his services throughout our entire stay both for the pick up at the airport and our hotel. Highly recommend.",
  },
  {
    name: "Rayaa K",
    from: "TripAdvisor",
    date: "Mai 2025",
    text: "Thank you Vlad! Very kind and friendly, excellent timing and took good care of the whole trip. 10/10 definitely recommend.",
  },
  {
    name: "Joep D",
    from: "TripAdvisor",
    date: "Juli 2025",
    text: "It was a very good experience — we have had this taxi multiple times, always on time, and he gave some good advice for our stay at different cities.",
  },
];

function HomePage() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "TaxiService",
          name: "Flughafentaxi Zypern",
          description:
            "Private Transfers zum Festpreis ab den Flughäfen Larnaka (LCA) und Paphos (PFO) in ganz Zypern.",
          areaServed: { "@type": "Country", name: "Cyprus" },
          provider: {
            "@type": "LocalBusiness",
            name: "Taxi Cyprus 24",
            telephone: "+35796626844",
            url: "https://taxicyprus24.com",
            aggregateRating,
          },
        }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Mercedes-Limousine für Flughafentransfers auf Zypern an der Küste"
            className="h-full w-full object-cover object-[65%_center] lg:object-center"
            loading="eager"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        <div className="relative container-tight grid gap-10 py-16 md:py-24 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:py-32">
          <div className="text-white animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Premium-Privattransfers auf
              Zypern
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance text-white md:text-5xl lg:text-[64px]">
              Private Flughafentransfers auf Zypern
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
              Sie suchen ein zuverlässiges Taxi auf Zypern – von oder nach Paphos? Taxicyprus24
              bietet Taxifahrten und private Flughafentransfers zum Festpreis, rund um die Uhr. Wir
              sind auf Transfers ab dem Flughafen Paphos und dem Flughafen Larnaka spezialisiert und
              fahren Sie bequem von Tür zu Tür in ganz Zypern – nach Limassol, Coral Bay, Peyia,
              Ayia Napa, Protaras, Nikosia und an viele weitere Ziele.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
              Ob Taxi in Paphos, Privattransfer vom Flughafen Larnaka oder Chauffeurservice überall
              auf Zypern: Unsere erfahrenen Fahrer sorgen für sichere, pünktliche und entspannte
              Fahrten. Urlauber, Familien und Geschäftsreisende schätzen unseren Meet & Greet am
              Flughafen, komfortable Fahrzeuge und transparente Preise ohne versteckte Kosten.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/de/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-navy shadow-elegant transition-transform hover:scale-[1.02]"
              >
                Transfer buchen <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://wa.me/35796626844"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                Sofort-Angebot
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-white/85">
              <Link
                to="/reviews"
                className="flex items-center gap-2 transition-opacity hover:opacity-80"
              >
                <div className="flex">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <span>
                  <strong className="font-semibold text-white">4,9</strong> · über 120
                  TripAdvisor-Bewertungen
                </span>
              </Link>
              <div className="hidden h-4 w-px bg-white/20 sm:block" />
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-gold" /> Lizenziert & versichert
              </div>
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
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/60">
            Warum Taxi Cyprus 24
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-5xl">
            Die komfortable Art, Zypern zu bereisen
          </h2>
          <p className="mt-4 text-pretty text-base text-muted-foreground md:text-lg">
            Pünktlichkeit, gepflegte Fahrzeuge und volle Transparenz – so sollten Flughafentransfers
            sein.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-border bg-card p-7 shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
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
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/60">
                Beliebte Strecken
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">
                Preise für Flughafentransfers auf Zypern
              </h2>
            </div>
            <Link
              to="/cyprus-airport-transfers"
              className="hidden text-sm font-semibold text-navy hover:underline md:inline-flex"
            >
              Alle Strecken →
            </Link>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-card-soft">
            <table className="w-full">
              <thead className="bg-secondary/60">
                <tr className="text-left text-[11px] uppercase tracking-wider text-muted-foreground">
                  <th className="px-5 py-4 md:px-7">Strecke</th>
                  <th className="hidden px-5 py-4 md:table-cell">Entfernung</th>
                  <th className="hidden px-5 py-4 sm:table-cell">Fahrzeit</th>
                  <th className="px-5 py-4 text-right md:px-7">Ab</th>
                </tr>
              </thead>
              <tbody>
                {popularRoutes.map((r) => (
                  <tr
                    key={r.slug}
                    className="border-t border-border transition-colors hover:bg-secondary/30"
                  >
                    <td className="px-5 py-5 md:px-7">
                      <Link to={withLocale("de", r.slug)} className="block">
                        <div className="font-semibold text-navy">{r.name}</div>
                        <div className="mt-0.5 text-xs text-muted-foreground sm:hidden">
                          {r.duration} · {r.distance}
                        </div>
                      </Link>
                    </td>
                    <td className="hidden px-5 py-5 text-sm text-muted-foreground md:table-cell">
                      {r.distance}
                    </td>
                    <td className="hidden px-5 py-5 text-sm text-muted-foreground sm:table-cell">
                      {r.duration}
                    </td>
                    <td className="px-5 py-5 text-right md:px-7">
                      <span className="font-display text-lg font-bold text-navy">
                        {r.priceFrom} €
                      </span>
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
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/60">
            Reiseziele
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-5xl">
            Transfers in jeden Winkel Zyperns
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d) => (
            <Link
              key={d.name}
              to={d.slug}
              className="group relative block overflow-hidden rounded-2xl shadow-card-soft"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={d.img}
                  alt={`Flughafentransfer auf Zypern nach ${d.name}`}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-gold">
                  <MapPin className="h-3 w-3" /> Zypern
                </div>
                <h3 className="mt-2 font-display text-2xl font-bold text-white">{d.name}</h3>
                <p className="mt-1 text-sm text-white/80">{d.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                  Transfer buchen{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
              Unsere Flotte
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-5xl">
              Reisen mit Mercedes-Benz-Komfort
            </h2>
            <p className="mt-4 text-pretty text-base text-white/85 md:text-lg">
              Von der Executive-Limousine bis zum geräumigen Van mit 7 Sitzen – wählen Sie das
              Fahrzeug, das zu Ihrer Gruppe passt.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {fleet.map((v) => (
              <div
                key={v.name}
                className="group overflow-hidden rounded-2xl bg-white text-foreground shadow-elegant transition-transform hover:-translate-y-1"
              >
                <div className="aspect-[4/3] bg-secondary/60 p-6">
                  <img
                    src={v.img}
                    alt={v.name}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="border-t border-border p-6">
                  <h3 className="font-display text-xl font-bold text-navy">{v.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{v.model}</p>
                  <p className="mt-3 text-sm font-medium text-foreground">{v.capacity}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-display text-lg font-bold text-navy">{v.priceFrom}</span>
                    <Link
                      to="/de/fleet"
                      className="text-sm font-semibold text-navy hover:underline"
                    >
                      Details →
                    </Link>
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
            <img
              src={meetGreetImg}
              alt="Fahrer mit Namensschild in der Ankunftshalle eines Flughafens auf Zypern"
              loading="lazy"
              width={1280}
              height={896}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/60">
              Meet & Greet inklusive
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-5xl">
              Ihr Fahrer wartet in der Ankunftshalle
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              Keine Warteschlangen, kein Suchen. Ihr Fahrer erwartet Sie mit einem Namensschild in
              der Ankunftshalle – auch wenn Ihr Flug Verspätung hat. Er hilft Ihnen mit dem Gepäck
              und begleitet Sie direkt zum Fahrzeug.
            </p>
            <ul className="mt-7 space-y-3 text-sm text-foreground">
              {[
                "Flugüberwachung in Echtzeit anhand Ihrer Flugnummer",
                "Persönliches Namensschild in der Ankunftshalle",
                "Hilfe beim Gepäck inklusive",
                "Kostenloses Wasser an Bord",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--success)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/de/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-[color:var(--navy-foreground)] shadow-elegant transition-transform hover:scale-[1.02]"
            >
              Transfer buchen <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/60">
              TripAdvisor-Bewertungen
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-5xl">
              4,9★ auf TripAdvisor – über 120 Bewertungen
            </h2>
            <p className="mt-4 text-sm text-muted-foreground md:text-base">
              Echte Bewertungen von Reisenden, im englischen Original.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reviews.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-border bg-card p-7 shadow-card-soft"
              >
                <div className="flex items-center justify-between">
                  <div className="flex">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">{t.date}</span>
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-foreground" lang="en">
                  "{t.text}"
                </p>
                <div className="mt-5 border-t border-border pt-4">
                  <div className="font-semibold text-navy">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.from}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:underline"
            >
              Alle Bewertungen lesen <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-tight py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/60">
              FAQ
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-5xl">
              Häufige Fragen
            </h2>
            <p className="mt-5 text-base text-muted-foreground">
              Alles, was Sie über Flughafentransfers auf Zypern wissen müssen.
            </p>
            <div className="mt-8 hidden lg:block">
              <Link
                to="/de/faq"
                className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:underline"
              >
                Alle Fragen ansehen <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <FAQAccordion items={sharedFAQsDe.slice(0, 6)} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
