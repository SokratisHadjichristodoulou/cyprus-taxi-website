import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Award, Heart, Clock, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import meetGreetImg from "@/assets/meet-greet.jpg";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { TrustBar } from "@/components/TrustBar";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Taxicyprus24 — Trusted Cyprus Airport Transfers Since 2010" },
      { name: "description", content: "Discover Taxicyprus24 — a family-run private airport transfer company in Cyprus since 2010. Fixed-price taxi from Larnaca & Paphos Airports, 5,000+ happy customers, 4.9★ rating, 24/7 service." },
      { name: "keywords", content: "about Taxicyprus24, Cyprus airport transfer company, private taxi Cyprus, Larnaca airport taxi, Paphos airport taxi, family-run taxi service Cyprus, fixed price taxi Cyprus" },
      { property: "og:title", content: "About Taxicyprus24 — Trusted Cyprus Airport Transfers Since 2010" },
      { property: "og:description", content: "Family-run private Cyprus airport transfer company. Fixed prices, professional English-speaking drivers, free child seats and 24/7 service from Larnaca and Paphos Airports." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About Taxicyprus24 — Cyprus Airport Transfers Since 2010" },
      { name: "twitter:description", content: "Family-run private Cyprus taxi service. Fixed prices, 4.9★ rated, 24/7 airport transfers." },
      { name: "twitter:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "https://taxicyprus24.com/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Taxicyprus24",
          url: "https://taxicyprus24.com/about",
          description:
            "Taxicyprus24 is a family-run private airport transfer company in Cyprus, providing fixed-price taxi services from Larnaca and Paphos Airports since 2010.",
          mainEntity: {
            "@type": "LocalBusiness",
            "@id": "https://taxicyprus24.com/#business",
            name: "Taxicyprus24",
            image: heroImg,
            telephone: "+35796626844",
            url: "https://taxicyprus24.com",
            priceRange: "€€",
            areaServed: { "@type": "Country", name: "Cyprus" },
            address: { "@type": "PostalAddress", addressCountry: "CY" },
            foundingDate: "2010",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "120",
            },
          },
        }),
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: ShieldCheck, title: "Trust", desc: "Licensed, insured and DBS-checked drivers — fully transparent fixed-price taxi service across Cyprus." },
  { icon: Award, title: "Quality", desc: "Clean and luxury vehicles, English-speaking drivers and meticulous attention to detail on every airport transfer." },
  { icon: Heart, title: "Care", desc: "We treat every guest like family — from your first booking enquiry to door-to-door drop-off." },
  { icon: Clock, title: "Reliability", desc: "Punctual every time, with real-time flight tracking, meet & greet and 24/7 customer support." },
];


function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Taxicyprus24"
        title="Trusted Cyprus Airport Transfers Since 2010"
        subtitle="Taxicyprus24 is a family-run private airport transfer company providing reliable, fixed-price taxi services from Larnaca Airport, Paphos Airport and across Cyprus. Over a decade of experience, 5,000+ happy customers and a 4.9★ rating."
        image={heroImg}
        showForm={false}
      />

      <TrustBar />

      <section id="our-story" className="container-tight py-20 scroll-mt-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="self-start overflow-hidden rounded-3xl shadow-elegant">
            <img
              src={meetGreetImg}
              alt="Professional Taxicyprus24 driver providing meet & greet service at Larnaca Airport arrivals"
              loading="lazy"
              width={1280}
              height={896}
              className="aspect-[10/7] w-full object-cover"
            />
          </div>
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/60">Our story</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">
              A Cyprus airport taxi service built on trust
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Founded in 2010 by Vladimir — known by many loyal customers as <strong>"Vladimir Taxi"</strong> — Taxicyprus24 started with one Mercedes E-Class and a simple mission: to provide reliable, professional, and comfortable Cyprus taxi and airport transfer services for every traveller arriving on the island.
              </p>
              <p>
                Today, after more than 5,000 successful transfers, Taxicyprus24 has become one of the trusted names for Paphos taxi, Larnaca Airport transfers, and private transportation across Cyprus. Whether you are searching for a taxi in Paphos near me, a private airport transfer, or an executive chauffeur service, we provide safe, punctual, and stress-free travel 24/7.
              </p>
              <p>
                Our professional drivers offer fixed-price Cyprus airport taxi services with no hidden charges, including:
              </p>
              <ul className="ml-5 list-disc space-y-1.5">
                <li>Free baby and child seats</li>
                <li>Complimentary meet &amp; greet at Larnaca and Paphos Airports</li>
                <li>Flight monitoring for delayed arrivals</li>
                <li>Door-to-door private transfers</li>
                <li>Luxury and executive vehicle options</li>
              </ul>
              <p>
                <strong>Vladimir Taxi Cyprus</strong> proudly serves travellers from the UK, Europe, and around the world, including families, couples, business travellers, honeymooners, and private groups. We provide reliable transfers from Paphos Airport and Larnaca Airport to all major Cyprus destinations, including:
              </p>
              <ul className="ml-5 list-disc space-y-1.5">
                <li>Paphos</li>
                <li>Coral Bay</li>
                <li>Peyia</li>
                <li>Limassol</li>
                <li>Ayia Napa</li>
                <li>Protaras</li>
                <li>Nicosia</li>
                <li>Latchi</li>
                <li>Polis</li>
                <li>All resorts and hotels across Cyprus</li>
              </ul>
              <p>
                With a <strong>4.9-star TripAdvisor rating</strong> and 120+ verified reviews, Taxicyprus24 is recognised for outstanding customer service, clean vehicles, professional drivers, and dependable airport transportation.
              </p>
              <p>
                Whether you need a Paphos airport taxi, a luxury taxi in Paphos, a transfer from Larnaca Airport, or a trusted Cyprus taxi service, Taxicyprus24 and Vladimir Taxi are committed to delivering premium travel experiences every time.
              </p>
            </div>
            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-[color:var(--navy-foreground)]"
            >
              Book your Cyprus airport transfer <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-tight">
          <h2 className="text-center font-display text-3xl font-bold text-navy md:text-4xl">
            Why travellers choose Taxicyprus24
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-muted-foreground">
            Four core values guide every Cyprus airport transfer we provide — from your first booking enquiry to door-to-door drop-off at your hotel, villa or apartment.
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
