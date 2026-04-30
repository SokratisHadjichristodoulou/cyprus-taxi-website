import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";
import paphosImg from "@/assets/dest-paphos.jpg";
import { CTASection } from "@/components/CTASection";
import { StructuredData } from "@/components/StructuredData";

export const Route = createFileRoute("/blog_/things-to-do-in-paphos")({
  head: () => ({
    meta: [
      { title: "Things to Do in Paphos — Local Guide | Taxi Cyprus 24" },
      {
        name: "description",
        content:
          "Local guide to Paphos — Tombs of the Kings, Paphos Mosaics, the Old Harbour, Coral Bay, Sea Caves and traditional Cypriot villages.",
      },
      { property: "og:title", content: "Things to Do in Paphos — Local Guide" },
      {
        property: "og:description",
        content: "Top attractions, beaches and traditional villages around Paphos in Cyprus.",
      },
      { property: "og:image", content: paphosImg },
      { name: "twitter:image", content: paphosImg },
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
          headline: "Things to Do in Paphos — Local Guide",
          image: [paphosImg],
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
            src={paphosImg}
            alt="Paphos Harbour and coastline in Cyprus"
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
              Things to Do in Paphos — Local Guide
            </h1>
            <div className="mt-5 flex items-center gap-3 text-sm text-white/80">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> March 2025
              </span>
              <span>· 7 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="container-tight py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Paphos is one of the most popular holiday destinations in Cyprus, famous for its
            beaches, ancient history, traditional villages, and vibrant harbour area. Whether
            you are visiting for a relaxing beach holiday, sightseeing, or local food
            experiences, Paphos offers something for every traveller.
          </p>

          <h2 className="mt-12 font-display text-2xl font-bold text-navy md:text-3xl">
            Visit the Tombs of the Kings
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            One of the most famous historical attractions in Cyprus is Tombs of the Kings. This
            UNESCO World Heritage Site features impressive underground tombs carved directly
            into rock dating back more than 2,000 years. The site is one of the top things to
            see in Paphos for visitors interested in ancient history and archaeology.
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold text-navy md:text-3xl">
            Explore the Paphos Mosaics
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Located inside Paphos Archaeological Park, the famous Paphos mosaics are considered
            some of the best-preserved Roman mosaics in the Mediterranean. The detailed artwork
            and ancient villas make this one of the most important cultural attractions in
            Cyprus.
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold text-navy md:text-3xl">
            Walk Around Paphos Harbour
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Paphos Harbour is one of the best places to spend an evening in Cyprus. The harbour
            area is filled with restaurants, cafés, bars, and seaside walking paths overlooking
            the Mediterranean Sea. Visitors can enjoy fresh seafood, sunset views, and boat
            tours departing from the marina.
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold text-navy md:text-3xl">
            Visit Pafos Zoo
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Pafos Zoo is one of the top family attractions in Paphos and one of the most visited
            zoos in Cyprus. Located near Coral Bay and Peyia, Pafos Zoo is home to a wide
            variety of animals including giraffes, monkeys, reptiles, parrots, flamingos, and
            exotic birds from around the world.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            The zoo is especially popular with families visiting Paphos with children, offering
            daily parrot shows, animal experiences, and large outdoor areas with beautiful views
            of the Mediterranean coastline. Many tourists visiting Coral Bay, Sea Caves, and
            Peyia combine their trip with a visit to Pafos Zoo for a full day of sightseeing and
            family activities in Cyprus.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Pafos Zoo is easily accessible from Paphos Harbour, Coral Bay, Peyia, and nearby
            tourist areas by private taxi or transfer service. Taxicyprus24 provides reliable
            taxi transfers to Pafos Zoo from hotels, airports, resorts, and attractions across
            Cyprus.
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold text-navy md:text-3xl">
            Discover Coral Bay & Sea Caves
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            A short drive from Paphos takes you to Coral Bay and the famous Peyia Sea Caves.
            These coastal areas are ideal for swimming, snorkeling, photography, and relaxing by
            the sea. The Sea Caves area is especially popular for sunset views and cliffside
            scenery.
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold text-navy md:text-3xl">
            Visit Traditional Villages & Local Taverns
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            The villages surrounding Paphos offer a more authentic Cyprus experience away from
            busy tourist resorts. Areas like Kathikas and Peyia are known for traditional
            tavernas, local wine, and mountain views. Many visitors enjoy exploring these
            villages for Cypriot food, local culture, and quieter surroundings.
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold text-navy md:text-3xl">
            Best Way to Get Around Paphos
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Many of the best attractions around Paphos are easiest to reach by private taxi or
            airport transfer service. Taxicyprus24 provides reliable fixed-price taxi transfers
            from Larnaca Airport, Paphos Airport, Coral Bay, Peyia, Limassol, and across Cyprus.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            With professional drivers, 24/7 service, and comfortable vehicles, private transfers
            are one of the most convenient ways to explore Paphos and the surrounding region
            during your Cyprus holiday.
          </p>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-[color:var(--navy-foreground)] transition-transform hover:scale-[1.02]"
            >
              Book a Paphos transfer <ArrowRight className="h-4 w-4" />
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
