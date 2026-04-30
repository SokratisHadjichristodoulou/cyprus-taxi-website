import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck, Clock, BadgeCheck, Plane, Baby, CreditCard,
  Star, ArrowRight, MapPin,
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
import { sharedFAQs } from "@/lib/faqs";
import { popularRoutes } from "@/lib/routes-data";
import { CTASection } from "@/components/CTASection";
import { StructuredData } from "@/components/StructuredData";
import { SocialSection } from "@/components/SocialSection";
import { INSTAGRAM_URL, FACEBOOK_URL } from "@/lib/social";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cyprus Airport Taxi & Transfers | Taxi Cyprus 24" },
      {
        name: "description",
        content:
          "Premium private Cyprus airport transfers from Larnaca and Paphos to all destinations. Fixed prices, professional drivers, free meet & greet, 24/7 booking.",
      },
      { property: "og:title", content: "Cyprus Airport Taxi & Transfers | Taxi Cyprus 24" },
      {
        property: "og:description",
        content:
          "Premium private Cyprus airport transfers. Fixed prices, free meet & greet, 24/7.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
      { name: "keywords", content: "Cyprus airport taxi, Larnaca airport taxi, Paphos airport transfer, Cyprus taxi service, Larnaca to Paphos taxi" },
    ],
  }),
  component: HomePage,
});

const destinations = [
  { name: "Paphos", img: paphosImg, slug: "/paphos-airport-transfers", desc: "Old harbour, Tombs of the Kings & resorts" },
  { name: "Coral Bay", img: coralBayImg, slug: "/taxi-to-coral-bay", desc: "Beach resorts & turquoise water" },
  { name: "Limassol", img: limassolImg, slug: "/taxi-to-limassol", desc: "Marina, business hotels & nightlife" },
  { name: "Larnaca", img: larnacaImg, slug: "/larnaca-airport-transfers", desc: "Palm-lined seafront & Finikoudes" },
  { name: "Peyia", img: peyiaImg, slug: "/taxi-to-peyia", desc: "Hilltop villas with sea views" },
  { name: "Chloraka", img: chlorakaImg, slug: "/taxi-to-chloraka", desc: "Quiet coastline near Paphos" },
];

const features = [
  { icon: BadgeCheck, title: "Fixed prices", desc: "Fixed-price Cyprus airport transfers with no hidden fees, no surge pricing, and guaranteed transparent taxi rates." },
  { icon: Plane, title: "Flight tracking", desc: "Real-time flight tracking for all Larnaca and Paphos airport taxi transfers, including delayed arrivals." },
  { icon: Baby, title: "Free child seats", desc: "Free baby seats, child seats, and booster seats included with every private Cyprus airport transfer." },
  { icon: ShieldCheck, title: "Licensed drivers", desc: "Professional licensed English-speaking drivers providing safe, reliable, and comfortable Cyprus taxi transfers." },
  { icon: Clock, title: "24/7 service", desc: "24/7 Cyprus airport taxi service available day and night, including weekends and public holidays." },
  { icon: CreditCard, title: "Pay your way", desc: "Pay online by card, bank transfer, or cash in EUR or GBP for any Cyprus private taxi transfer." },
];

const fleet = [
  { img: sedanImg, name: "Executive Sedan", capacity: "Up to 3 passengers · 3 bags", model: "Mercedes E-Class or similar", priceFrom: "from €35" },
  { img: vanImg, name: "Premium 7-Seater Van", capacity: "Up to 8 passengers · 10 big luggages", model: "Ford Tourneo Custom or similar", priceFrom: "from €60" },
];

function HomePage() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": ["LocalBusiness", "TaxiService"],
              "@id": "https://taxicyprus24.com/#business",
              name: "Taxi Cyprus 24",
              alternateName: ["Taxicyprus24", "Cyprus Airport Taxi"],
              description:
                "Premium private Cyprus airport taxi transfers from Larnaca International Airport (LCA) and Paphos International Airport (PFO) to every destination in Cyprus. Fixed prices, meet & greet, free child seats, 24/7.",
              telephone: "+35796626844",
              url: "https://taxicyprus24.com",
              image: "https://storage.googleapis.com/gpt-engineer-file-uploads/wmsz0aV3y5YpI4DtnooPQnlf3LG3/social-images/social-1777198205711-taxicyprus24Social.webp",
              logo: "https://taxicyprus24.com/favicon.ico",
              priceRange: "€€",
              currenciesAccepted: "EUR, GBP",
              paymentAccepted: "Cash, Credit Card, Debit Card, Bank Transfer",
              openingHours: "Mo-Su 00:00-23:59",
              address: {
                "@type": "PostalAddress",
                addressCountry: "CY",
                addressRegion: "Paphos",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 34.9003,
                longitude: 33.6232,
              },
              areaServed: [
                { "@type": "Country", name: "Cyprus" },
                { "@type": "City", name: "Paphos" },
                { "@type": "City", name: "Larnaca" },
                { "@type": "City", name: "Limassol" },
                { "@type": "City", name: "Nicosia" },
                { "@type": "City", name: "Ayia Napa" },
                { "@type": "City", name: "Protaras" },
                { "@type": "Place", name: "Coral Bay" },
                { "@type": "Place", name: "Peyia" },
                { "@type": "Place", name: "Chloraka" },
                { "@type": "Place", name: "Aphrodite Hills" },
                { "@type": "Place", name: "Pissouri" },
                { "@type": "Place", name: "Polis – Latchi" },
              ],
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: { "@type": "GeoCoordinates", latitude: 34.9003, longitude: 33.6232 },
                geoRadius: "120000",
              },
              knowsLanguage: ["en", "el", "ru"],
              sameAs: ["https://wa.me/35796626844", INSTAGRAM_URL, FACEBOOK_URL],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "1247",
                bestRating: "5",
                worstRating: "1",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Cyprus Airport Transfer Routes",
                itemListElement: [
                  { "@type": "Offer", priceCurrency: "EUR", price: "35", itemOffered: { "@type": "Service", name: "Paphos Airport to Paphos Town transfer" } },
                  { "@type": "Offer", priceCurrency: "EUR", price: "65", itemOffered: { "@type": "Service", name: "Paphos Airport to Coral Bay transfer" } },
                  { "@type": "Offer", priceCurrency: "EUR", price: "90", itemOffered: { "@type": "Service", name: "Paphos Airport to Limassol transfer" } },
                  { "@type": "Offer", priceCurrency: "EUR", price: "140", itemOffered: { "@type": "Service", name: "Larnaca Airport to Paphos transfer" } },
                  { "@type": "Offer", priceCurrency: "EUR", price: "150", itemOffered: { "@type": "Service", name: "Paphos Airport to Nicosia transfer" } },
                ],
              },
            },
            {
              "@type": "WebSite",
              "@id": "https://taxicyprus24.com/#website",
              url: "https://taxicyprus24.com",
              name: "Taxi Cyprus 24",
              inLanguage: ["en", "el", "ru"],
              publisher: { "@id": "https://taxicyprus24.com/#business" },
            },
            {
              "@type": "Organization",
              "@id": "https://taxicyprus24.com/#organization",
              name: "Taxi Cyprus 24",
              url: "https://taxicyprus24.com",
              telephone: "+35796626844",
              areaServed: { "@type": "Country", name: "Cyprus" },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+35796626844",
                contactType: "reservations",
                areaServed: "CY",
                availableLanguage: ["English", "Greek", "Russian"],
              },
            },
          ],
        }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Luxury Mercedes Cyprus airport transfer driving the Mediterranean coast" className="h-full w-full object-cover object-[65%_center] lg:object-center" loading="eager" width={1920} height={1080} />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        <div className="relative container-tight grid gap-10 py-16 md:py-24 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:py-32">
          <div className="text-white animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Premium private transfers in Cyprus
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance text-white md:text-5xl lg:text-[64px]">
              Private Cyprus Airport Taxi Transfers
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
              Looking for a reliable taxi near me in Cyprus? Taxicyprus24 offers fixed-price private airport transfers, 24/7 taxi service, and professional drivers across Larnaca, Paphos, Limassol, Coral Bay, and all Cyprus destinations.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-navy shadow-elegant transition-transform hover:scale-[1.02]">
                Book Your Transfer <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="https://wa.me/35796626844" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20">
                Get Instant Quote
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-white/85">
              <Link to="/reviews" className="flex items-center gap-2 transition-opacity hover:opacity-80">
                <div className="flex">
                  {[0,1,2,3,4].map((i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}
                </div>
                <span><strong className="font-semibold text-white">4.9</strong> · 120+ TripAdvisor reviews</span>
              </Link>
              <div className="hidden h-4 w-px bg-white/20 sm:block" />
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-gold" /> Licensed & insured</div>
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
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/60">Why Taxi Cyprus 24</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-5xl">
            The premium way to travel in Cyprus
          </h2>
          <p className="mt-4 text-pretty text-base text-muted-foreground md:text-lg">
            We've built our reputation on punctuality, quality vehicles and total transparency —
            the way airport transfers should feel.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-border bg-card p-7 shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elegant">
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
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/60">Popular routes</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">
                Cyprus airport transfer prices
              </h2>
            </div>
            <Link to="/cyprus-airport-transfers" className="hidden text-sm font-semibold text-navy hover:underline md:inline-flex">
              View all routes →
            </Link>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-card-soft">
            <table className="w-full">
              <thead className="bg-secondary/60">
                <tr className="text-left text-[11px] uppercase tracking-wider text-muted-foreground">
                  <th className="px-5 py-4 md:px-7">Route</th>
                  <th className="hidden px-5 py-4 md:table-cell">Distance</th>
                  <th className="hidden px-5 py-4 sm:table-cell">Duration</th>
                  <th className="px-5 py-4 text-right md:px-7">From</th>
                </tr>
              </thead>
              <tbody>
                {popularRoutes.map((r) => (
                  <tr key={r.slug} className="border-t border-border transition-colors hover:bg-secondary/30">
                    <td className="px-5 py-5 md:px-7">
                      <Link to={r.slug} className="block">
                        <div className="font-semibold text-navy">{r.name}</div>
                        <div className="mt-0.5 text-xs text-muted-foreground sm:hidden">{r.duration} · {r.distance}</div>
                      </Link>
                    </td>
                    <td className="hidden px-5 py-5 text-sm text-muted-foreground md:table-cell">{r.distance}</td>
                    <td className="hidden px-5 py-5 text-sm text-muted-foreground sm:table-cell">{r.duration}</td>
                    <td className="px-5 py-5 text-right md:px-7">
                      <span className="font-display text-lg font-bold text-navy">€{r.priceFrom}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>


      <section className="container-tight py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/60">Destinations</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-5xl">
            Transfers to every corner of Cyprus
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d) => (
            <Link key={d.name} to={d.slug} className="group relative block overflow-hidden rounded-2xl shadow-card-soft">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={d.img} alt={`Cyprus airport transfer to ${d.name}`} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-gold">
                  <MapPin className="h-3 w-3" /> Cyprus
                </div>
                <h3 className="mt-2 font-display text-2xl font-bold text-white">{d.name}</h3>
                <p className="mt-1 text-sm text-white/80">{d.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                  Book transfer <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">Our fleet</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-5xl">
              Travel in Mercedes-Benz comfort
            </h2>
            <p className="mt-4 text-pretty text-base text-white/70 md:text-lg">
              From executive Mercedes-Benz sedans to spacious 7-seater vans — choose the
              vehicle that fits your party.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {fleet.map((v) => (
              <div key={v.name} className="group overflow-hidden rounded-2xl bg-white text-foreground shadow-elegant transition-transform hover:-translate-y-1">
                <div className="aspect-[4/3] bg-secondary/60 p-6">
                  <img src={v.img} alt={v.name} loading="lazy" width={1024} height={768} className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="border-t border-border p-6">
                  <h3 className="font-display text-xl font-bold text-navy">{v.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{v.model}</p>
                  <p className="mt-3 text-sm font-medium text-foreground">{v.capacity}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-display text-lg font-bold text-navy">{v.priceFrom}</span>
                    <Link to="/fleet" className="text-sm font-semibold text-navy hover:underline">Details →</Link>
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
            <img src={meetGreetImg} alt="Driver meet and greet at Cyprus airport arrivals" loading="lazy" width={1280} height={896} className="h-full w-full object-cover" />
          </div>
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/60">Meet & greet included</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-5xl">
              Your driver is waiting at arrivals
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              No queues, no confusion. Your professional driver will be in the arrivals hall
              with a name sign — even if your flight is delayed. We'll help with your luggage
              and walk you straight to the vehicle.
            </p>
            <ul className="mt-7 space-y-3 text-sm text-foreground">
              {[
                "Real-time flight tracking using your flight number",
                "Personal name sign in arrivals hall",
                "Help with luggage included",
                "Complimentary bottled water on board",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--success)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-[color:var(--navy-foreground)] shadow-elegant transition-transform hover:scale-[1.02]">
              Book Your Transfer <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/60">
              TripAdvisor reviews
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-5xl">
              4.9★ on TripAdvisor — 120+ reviews
            </h2>
            <p className="mt-4 text-sm text-muted-foreground md:text-base">
              Ranked #6 of 94 Transportation in Paphos. Verified reviews from real travellers.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Dmitry O",
                from: "County Limerick, Ireland · TripAdvisor",
                date: "Jun 2025",
                text: "Vladimiros is a great safe driver, always on time, reasonably priced and has a new people carrier. We used his services throughout our entire stay both for the pick up at the airport and our hotel. Highly recommend.",
              },
              {
                name: "Rayaa K",
                from: "TripAdvisor",
                date: "May 2025",
                text: "Thank you Vlad! Very kind and friendly, excellent timing and took good care of the whole trip. 10/10 definitely recommend.",
              },
              {
                name: "Joep D",
                from: "TripAdvisor",
                date: "Jul 2025",
                text: "It was a very good experience — we have had this taxi multiple times, always on time, and he gave some good advice for our stay at different cities.",
              },
            ].map((t) => (
              <div key={t.name} className="rounded-2xl border border-border bg-card p-7 shadow-card-soft">
                <div className="flex items-center justify-between">
                  <div className="flex">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">{t.date}</span>
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-foreground">"{t.text}"</p>
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
              Read all 120+ TripAdvisor reviews <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-tight py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/60">FAQ</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-5xl">
              Frequently asked questions
            </h2>
            <p className="mt-5 text-base text-muted-foreground">
              Everything you need to know about Cyprus airport taxi transfers.
            </p>
            <div className="mt-8 hidden lg:block">
              <Link to="/faq" className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:underline">
                See all FAQs <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <FAQAccordion items={sharedFAQs.slice(0, 6)} />
        </div>
      </section>

      <SocialSection />

      <CTASection />
    </>
  );
}
