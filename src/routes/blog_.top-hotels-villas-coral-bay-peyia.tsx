import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";
import peyiaImg from "@/assets/dest-peyia.jpg";
import { CTASection } from "@/components/CTASection";
import { StructuredData } from "@/components/StructuredData";

export const Route = createFileRoute("/blog_/top-hotels-villas-coral-bay-peyia")({
  head: () => ({
    meta: [
      { title: "Top Hotels & Villas in Coral Bay and Peyia | Taxi Cyprus 24" },
      {
        name: "description",
        content:
          "Where to stay in Coral Bay and Peyia — best hotels, luxury villas, sea-view resorts and tips for families visiting the western coast of Cyprus.",
      },
      { property: "og:title", content: "Top Hotels & Villas in Coral Bay and Peyia" },
      {
        property: "og:description",
        content: "Best hotels and luxury villas on Cyprus's western coast.",
      },
      { property: "og:image", content: peyiaImg },
      { name: "twitter:image", content: peyiaImg },
    ],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Top Hotels & Villas in Coral Bay and Peyia",
          image: [peyiaImg],
          datePublished: "2025-03-01",
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
            src={peyiaImg}
            alt="Luxury villas with sea views in Peyia, Cyprus"
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
              Top Hotels & Villas in Coral Bay and Peyia
            </h1>
            <div className="mt-5 flex items-center gap-3 text-sm text-white/80">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> March 2025
              </span>
              <span>· 8 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="container-tight py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Coral Bay and Peyia are among the most popular holiday destinations on the western
            coast of Cyprus. Known for beautiful beaches, luxury villas, family-friendly
            resorts, and stunning Mediterranean sunsets, both areas attract thousands of
            visitors every year looking for the perfect Cyprus holiday accommodation.
          </p>

          <h2 className="mt-12 font-display text-2xl font-bold text-navy md:text-3xl">
            Best Hotels in Coral Bay
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Coral Bay is famous for its golden sandy beach, lively atmosphere, and excellent
            selection of hotels and resorts. Visitors staying in Coral Bay are close to
            restaurants, beach bars, water sports, and popular attractions around Paphos.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Some of the best hotels in Coral Bay include beachfront resorts with swimming pools,
            spa facilities, sea-view rooms, and family entertainment. Many tourists choose Coral
            Bay hotels because they offer easy access to Coral Bay Beach and are only a short
            drive from Paphos Harbour and the Sea Caves area.
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold text-navy md:text-3xl">
            Luxury Villas in Peyia
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Peyia is one of the top locations in Cyprus for private holiday villas. Situated on
            the hills above Coral Bay, Peyia offers panoramic sea views, peaceful surroundings,
            and luxury accommodation perfect for families, couples, and groups.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Many villas in Peyia include private swimming pools, outdoor terraces, BBQ areas,
            and large living spaces ideal for longer stays in Cyprus. The area is especially
            popular with travellers looking for privacy and a more relaxed atmosphere away from
            busy tourist resorts.
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold text-navy md:text-3xl">
            Why Stay in Coral Bay or Peyia?
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Both Coral Bay and Peyia provide excellent access to some of the best attractions in
            the Paphos region, including:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-muted-foreground">
            <li>Lara Beach</li>
            <li>Peyia Sea Caves</li>
            <li>Akamas Peninsula National Park</li>
            <li>Paphos Harbour</li>
          </ul>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            These areas are ideal for beach holidays, boat trips, nature exploration, and sunset
            dining along the Cyprus coastline.
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold text-navy md:text-3xl">
            Airport Transfers to Coral Bay & Peyia
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            The easiest way to reach Coral Bay and Peyia from Larnaca International Airport or
            Paphos International Airport is by private airport transfer. Taxicyprus24 offers
            fixed-price Cyprus airport taxi services with professional drivers, meet & greet
            service, and comfortable vehicles available 24/7.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Whether you are travelling to a luxury villa in Peyia or a beachfront hotel in Coral
            Bay, private transfers provide a fast, reliable, and stress-free start to your
            Cyprus holiday.
          </p>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-[color:var(--navy-foreground)] transition-transform hover:scale-[1.02]"
            >
              Book transfer to Coral Bay or Peyia <ArrowRight className="h-4 w-4" />
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
