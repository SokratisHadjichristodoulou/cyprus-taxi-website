import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Clock, BadgeCheck, Users, Plane, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FAQAccordion, type FAQItem } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { TrustBar } from "@/components/TrustBar";
import { StructuredData } from "@/components/StructuredData";
import { useI18n, withLocale } from "@/lib/i18n";

export interface TransferPageProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  heroImage: string;
  galleryImage: string;
  fromLocation: string;
  toLocation: string;
  duration: string;
  distance: string;
  prices: { type: string; pax: string; price: string }[];
  highlights: string[];
  intro: string;
  bodyParagraphs: string[];
  nearbyAreas?: string[];
  faqs: FAQItem[];
  relatedLinks: { to: string; label: string }[];
  defaultPickup?: string;
  defaultDropoff?: string;
}

export function TransferPage(p: TransferPageProps) {
  const { t, locale, isGreek } = useI18n();
  const contactPath = withLocale(locale, "/contact");

  const L = isGreek
    ? {
        whatToExpect: "— τι να περιμένετε",
        nearbyHeading: "Κοντινές περιοχές που εξυπηρετούμε",
        nearbyIntro: "Παρέχουμε ιδιωτικές μεταφορές σε όλα τα ξενοδοχεία, βίλες και θέρετρα στις:",
        flightTracked: "Παρακολούθηση πτήσης",
        licensedDrivers: "Αδειούχοι οδηγοί",
        freeChildSeats: "Δωρεάν παιδικά καθίσματα",
        commonQuestions: "Συνήθεις ερωτήσεις",
        related: "Σχετικές μεταφορές",
        from: "από",
        bookNow: "Κράτηση",
      }
    : {
        whatToExpect: "— what to expect",
        nearbyHeading: "Nearby areas we serve",
        nearbyIntro: "We provide private transfers to all hotels, villas and resorts in:",
        flightTracked: "Flight tracked",
        licensedDrivers: "Licensed drivers",
        freeChildSeats: "Free child seats",
        commonQuestions: "Common questions",
        related: "Related transfers",
        from: "from",
        bookNow: "Book Now",
      };

  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "TaxiService",
          name: p.title,
          description: p.subtitle,
          areaServed: { "@type": "Country", name: "Cyprus" },
          provider: {
            "@type": "LocalBusiness",
            name: "Taxi Cyprus 24",
            telephone: "+35796626844",
            url: "https://taxicyprus24.com",
            areaServed: { "@type": "Country", name: "Cyprus" },
          },
        }}
      />
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: p.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />

      <PageHero
        eyebrow={p.eyebrow}
        title={p.title}
        subtitle={p.subtitle}
        image={p.heroImage}
        defaultPickup={p.defaultPickup}
        defaultDropoff={p.defaultDropoff}
      />

      <TrustBar />

      {/* Quick facts */}
      <section className="container-tight py-16 md:py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <FactCard icon={<MapPin />} label={t("common.from")} value={p.fromLocation} />
          <FactCard icon={<MapPin />} label={t("common.to")} value={p.toLocation} />
          <FactCard icon={<Clock />} label={t("common.duration")} value={p.duration} />
          <FactCard icon={<BadgeCheck />} label={t("common.distance")} value={p.distance} />
        </div>
      </section>

      {/* Intro */}
      <section className="container-tight pb-12 md:pb-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <h2 className="font-display text-3xl font-bold text-navy md:text-4xl">{p.eyebrow} {L.whatToExpect}</h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">{p.intro}</p>
            {p.bodyParagraphs.map((para, i) => (
              <p key={i} className="mt-4 text-[15px] leading-relaxed text-muted-foreground md:text-base">{para}</p>
            ))}

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {p.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-sm">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--success)]" />
                  <span className="text-foreground">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="self-start overflow-hidden rounded-3xl shadow-elegant">
            <img src={p.galleryImage} alt={p.toLocation} loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-secondary/40 py-16 md:py-20">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/60">{t("common.fixedPrices")}</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">{t("common.transferPrices")}</h2>
            <p className="mt-3 text-base text-muted-foreground">{t("common.allInclusive")}</p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {p.prices.map((pr) => (
              <div key={pr.type} className="rounded-2xl border border-border bg-card p-7 shadow-card-soft">
                <div className="flex items-center gap-2 text-sm font-semibold text-navy/70">
                  <Users className="h-4 w-4" /> {pr.pax}
                </div>
                <h3 className="mt-3 font-display text-xl font-bold text-navy">{pr.type}</h3>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-xs font-semibold uppercase text-muted-foreground">{L.from}</span>
                  <span className="font-display text-4xl font-bold text-navy">{pr.price}</span>
                </div>
                <Link to={contactPath} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-[color:var(--navy-foreground)] transition-transform hover:scale-[1.02]">
                  {L.bookNow} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby areas */}
      {p.nearbyAreas && p.nearbyAreas.length > 0 && (
        <section className="container-tight py-16 md:py-20">
          <h2 className="font-display text-2xl font-bold text-navy md:text-3xl">{L.nearbyHeading}</h2>
          <p className="mt-3 text-muted-foreground">{L.nearbyIntro}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {p.nearbyAreas.map((a) => (
              <span key={a} className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground">
                <MapPin className="mr-1.5 inline-block h-3.5 w-3.5 text-navy/60" /> {a}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Why us strip */}
      <section className="container-tight pb-16 md:pb-20">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: Plane, t: L.flightTracked },
            { icon: ShieldCheck, t: L.licensedDrivers },
            { icon: BadgeCheck, t: L.freeChildSeats },
          ].map((i) => (
            <div key={i.t} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-[color:var(--navy-foreground)]">
                <i.icon className="h-5 w-5" />
              </div>
              <div className="font-semibold text-navy">{i.t}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container-tight pb-16 md:pb-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/60">{t("common.faq")}</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">{L.commonQuestions}</h2>
          </div>
          <FAQAccordion items={p.faqs} />
        </div>
      </section>

      {/* Related */}
      {p.relatedLinks.length > 0 && (
        <section className="container-tight pb-16 md:pb-20">
          <h2 className="font-display text-2xl font-bold text-navy md:text-3xl">{L.related}</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {p.relatedLinks.map((l) => (
              <Link key={l.to} to={withLocale(locale, l.to)} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-navy transition-colors hover:bg-secondary">
                {l.label} <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}

function FactCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-card-soft">
      <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
        <span className="text-navy/60">{icon}</span>
        {label}
      </div>
      <div className="mt-2 font-display text-lg font-bold text-navy">{value}</div>
    </div>
  );
}
