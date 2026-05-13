import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";
import chlorakaImg from "@/assets/dest-chloraka.jpg";
import { CTASection } from "@/components/CTASection";
import { StructuredData } from "@/components/StructuredData";

export const Route = createFileRoute("/blog_/hidden-gems-chloraka-kissonerga")({
  head: () => ({
    meta: [
      { title: "Hidden Gems Near Chloraka and Kissonerga | Taxi Cyprus 24" },
      {
        name: "description",
        content:
          "Quiet beaches, sunset viewpoints and traditional tavernas in Chloraka and Kissonerga — the hidden side of western Cyprus near Paphos and Coral Bay.",
      },
      { property: "og:title", content: "Hidden Gems Near Chloraka and Kissonerga" },
      { property: "og:type", content: "article" },
      {
        property: "og:description",
        content: "Quiet beaches, viewpoints and tavernas in this peaceful corner of Paphos.",
      },
      { property: "og:image", content: chlorakaImg },
      { name: "twitter:image", content: chlorakaImg },
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
          headline: "Hidden Gems Near Chloraka and Kissonerga",
          image: [chlorakaImg],
          datePublished: "2025-01-01",
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
            src={chlorakaImg}
            alt="Coastline near Chloraka and Kissonerga in Cyprus"
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
              Hidden Gems Near Chloraka and Kissonerga
            </h1>
            <div className="mt-5 flex items-center gap-3 text-sm text-white/80">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> January 2025
              </span>
              <span>· 5 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="container-tight py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Chloraka and Kissonerga are two of the most underrated coastal areas in western
            Cyprus. Located between Paphos and Coral Bay, these peaceful seaside villages offer
            quiet beaches, scenic viewpoints, local tavernas, and a more authentic Cyprus
            experience away from crowded tourist resorts.
          </p>

          <h2 className="mt-12 font-display text-2xl font-bold text-navy md:text-3xl">
            Quiet Beaches Away from the Crowds
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            While many visitors head directly to Coral Bay, the coastline around Chloraka and
            Kissonerga hides several smaller beaches and swimming spots with crystal-clear water
            and beautiful sunset views.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Potima Beach is one of the best hidden beaches near Paphos, popular for its relaxed
            atmosphere, dramatic coastline, and sunset cafés overlooking the Mediterranean Sea.
            The area is perfect for travellers looking to avoid busy tourist beaches during peak
            summer months.
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold text-navy md:text-3xl">
            Scenic Coastal Viewpoints
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            The road connecting Paphos, Chloraka, and Kissonerga offers some of the most
            beautiful sea views in Cyprus. Visitors can stop along the coastline to enjoy
            panoramic sunsets, rocky cliffs, and peaceful walking areas overlooking the
            Mediterranean.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            The nearby Peyia Sea Caves area is also only a short drive away and remains one of
            the top hidden attractions in the Paphos region for photography and coastal
            exploration.
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold text-navy md:text-3xl">
            Traditional Taverns & Local Food
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Chloraka and Kissonerga are home to many family-run tavernas serving authentic
            Cypriot food, fresh seafood, grilled meats, and local wine. Unlike busier tourist
            areas, these villages offer a more traditional dining experience with quieter
            surroundings and friendly local hospitality.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Visitors staying in nearby villas or apartments often choose these areas for evening
            meals and relaxed seaside dining.
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold text-navy md:text-3xl">
            Ideal Location for Exploring Paphos
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Both villages are ideally located for exploring western Cyprus. From Chloraka and
            Kissonerga, visitors can easily reach:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-muted-foreground">
            <li>Coral Bay</li>
            <li>Paphos Harbour</li>
            <li>Lara Beach</li>
            <li>Akamas Peninsula National Park</li>
          </ul>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            The area combines peaceful coastal living with easy access to beaches, restaurants,
            and sightseeing attractions across Paphos.
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold text-navy md:text-3xl">
            Airport Transfers to Chloraka & Kissonerga
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            The easiest way to travel to Chloraka and Kissonerga from Larnaca International
            Airport or Paphos International Airport is by private airport transfer.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Taxicyprus24 provides fixed-price Cyprus airport taxi services with professional
            drivers, flight monitoring, meet & greet service, and comfortable vehicles available
            24/7. Whether you are travelling to a private villa, hotel, or holiday apartment,
            private transfers offer a reliable and stress-free way to reach western Cyprus.
          </p>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-[color:var(--navy-foreground)] transition-transform hover:scale-[1.02]"
            >
              Book a Chloraka transfer <ArrowRight className="h-4 w-4" />
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
