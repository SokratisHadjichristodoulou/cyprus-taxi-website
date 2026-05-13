import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Check } from "lucide-react";
import limassolImg from "@/assets/dest-limassol.jpg";
import { CTASection } from "@/components/CTASection";
import { StructuredData } from "@/components/StructuredData";

export const Route = createFileRoute("/blog_/complete-cyprus-airport-transfer-guide")({
  head: () => ({
    meta: [
      { title: "The Complete Cyprus Airport Transfer Guide | Taxi Cyprus 24" },
      {
        name: "description",
        content:
          "Compare taxis, private transfers and rental cars from Larnaca and Paphos airports — prices, travel times and the best option for your Cyprus trip.",
      },
      { property: "og:title", content: "The Complete Cyprus Airport Transfer Guide" },
      { property: "og:type", content: "article" },
      {
        property: "og:description",
        content: "Prices, travel times and tips for Larnaca and Paphos airport transfers.",
      },
      { property: "og:image", content: limassolImg },
      { name: "twitter:image", content: limassolImg },
    ],
  }),
  component: ArticlePage,
});

const transferTimes = [
  { route: "Larnaca Airport to Limassol", time: "45 minutes" },
  { route: "Larnaca Airport to Paphos", time: "1h 30m" },
  { route: "Paphos Airport to Coral Bay", time: "30 minutes" },
  { route: "Larnaca Airport to Ayia Napa", time: "40–50 minutes" },
  { route: "Paphos Airport to Peyia", time: "25–30 minutes" },
];

const transferFeatures = [
  "Meet & greet at the airport",
  "Flight monitoring",
  "Professional English-speaking drivers",
  "Free child seats",
  "24/7 service",
  "No hidden charges",
];

const popularSearches = [
  "Larnaca Airport taxi",
  "Paphos Airport transfer",
  "Taxi from Larnaca Airport to Limassol",
  "Cyprus private airport transfer",
  "24/7 Cyprus taxi service",
];

const carRentalNotes = [
  "Cyprus drives on the left-hand side",
  "Parking can be difficult in busy tourist areas",
  "Insurance and fuel costs may increase total price",
];

const fixedPrices = [
  "Larnaca Airport to Paphos: from €140",
  "Paphos Airport to Limassol: from €90",
  "Paphos Airport to Coral Bay: from €65",
];

const idealFor = [
  "Families with children",
  "Groups with luggage",
  "Business travellers",
  "Late-night arrivals",
  "Visitors unfamiliar with Cyprus roads",
];

function ArticlePage() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "The Complete Cyprus Airport Transfer Guide",
          image: [limassolImg],
          datePublished: "2025-02-01",
          author: { "@type": "Organization", name: "Taxi Cyprus 24" },
          publisher: {
            "@type": "Organization",
            name: "Taxi Cyprus 24",
            url: "https://taxicyprus24.com",
          },
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={limassolImg}
            alt="Cyprus coastal motorway between airports"
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative container-tight py-20 md:py-28 lg:py-32">
          <div className="max-w-3xl text-white animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Cyprus travel guide
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
              The Complete Cyprus Airport Transfer Guide
            </h1>
            <div className="mt-5 flex items-center gap-3 text-sm text-white/80">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> February 2025
              </span>
              <span>· 9 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="container-tight py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Travelling to Cyprus for a holiday or business trip? Choosing the right airport
            transfer can make your arrival faster, easier, and far less stressful. Whether you
            land at Larnaca International Airport or Paphos International Airport, this guide
            compares taxis, private airport transfers, rental cars, and public transport options
            across Cyprus.
          </p>

          <h2 className="mt-12 font-display text-2xl font-bold text-navy md:text-3xl">
            Main Airports in Cyprus
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Cyprus has two major international airports:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-muted-foreground">
            <li>
              <strong>Larnaca International Airport</strong> — the busiest airport in Cyprus,
              serving most international flights
            </li>
            <li>
              <strong>Paphos International Airport</strong> — popular for tourists travelling to
              Paphos, Coral Bay, and western Cyprus
            </li>
          </ul>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Most visitors travel onward to destinations such as Limassol, Paphos, Ayia Napa,
            Nicosia, and Coral Bay.
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold text-navy md:text-3xl">
            Private Airport Transfers in Cyprus
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Private airport transfers are one of the most popular transport options for tourists
            visiting Cyprus. Companies like Taxicyprus24 offer fixed-price taxi transfers with:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {transferFeatures.map((f) => (
              <li
                key={f}
                className="flex items-start gap-2 rounded-xl border border-border bg-card p-3 text-sm text-foreground"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--success)]" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Unlike shared shuttle buses, private transfers provide direct door-to-door travel
            with no waiting for other passengers.
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold text-navy md:text-3xl">
            Average Transfer Times
          </h2>
          <div className="mt-4 overflow-hidden rounded-2xl border border-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-secondary/60 text-navy">
                <tr>
                  <th className="px-4 py-3 font-semibold">Route</th>
                  <th className="px-4 py-3 font-semibold">Approximate Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-card">
                {transferTimes.map((t) => (
                  <tr key={t.route}>
                    <td className="px-4 py-3 text-foreground">{t.route}</td>
                    <td className="px-4 py-3 text-muted-foreground">{t.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="mt-10 font-display text-2xl font-bold text-navy md:text-3xl">
            Taxi Services from Cyprus Airports
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Standard airport taxis are available outside both airports. However, prices can vary
            depending on traffic, luggage, time of day, and final destination. Many travellers
            prefer pre-booked airport taxi services because they offer fixed pricing and
            guaranteed availability.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">Popular searches include:</p>
          <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-muted-foreground">
            {popularSearches.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>

          <h2 className="mt-10 font-display text-2xl font-bold text-navy md:text-3xl">
            Renting a Car in Cyprus
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Rental cars are widely available at both airports and can be useful for travellers
            planning to explore multiple areas of Cyprus. Visitors should remember:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-muted-foreground">
            {carRentalNotes.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            For many families and groups, private airport transfers are often more convenient
            after long flights.
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold text-navy md:text-3xl">
            Public Transport in Cyprus
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Public buses are the cheapest way to travel across Cyprus, but routes between
            airports and tourist areas may require multiple changes and longer travel times. Bus
            services are more limited late at night and early in the morning.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Travellers arriving with luggage, children, or late-night flights often choose
            airport transfers for comfort and convenience.
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold text-navy md:text-3xl">
            How Much Does a Cyprus Airport Transfer Cost?
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Prices depend on the destination, vehicle type, and number of passengers. Typical
            fixed-price airport transfer costs include:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-muted-foreground">
            {fixedPrices.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Most private airport transfer services include luggage, motorway fees, child seats,
            and meet & greet in the quoted price.
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold text-navy md:text-3xl">
            Why Many Travellers Choose Private Transfers
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Private Cyprus airport transfers are ideal for:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-muted-foreground">
            {idealFor.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Taxicyprus24 provides reliable 24/7 airport taxi services across Cyprus with fixed
            prices, comfortable vehicles, and professional drivers to ensure a smooth arrival
            anywhere on the island.
          </p>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-[color:var(--navy-foreground)] transition-transform hover:scale-[1.02]"
            >
              Book a Cyprus airport transfer <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-secondary"
            >
              Back to blog
            </Link>
          </div>
        </div>
      </article>

      <CTASection />
    </>
  );
}
