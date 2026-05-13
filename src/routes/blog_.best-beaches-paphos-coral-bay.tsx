import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";
import coralBayImg from "@/assets/dest-coral-bay.jpg";
import { CTASection } from "@/components/CTASection";
import { StructuredData } from "@/components/StructuredData";

export const Route = createFileRoute("/blog_/best-beaches-paphos-coral-bay")({
  head: () => ({
    meta: [
      { title: "Best Beaches in Paphos & Coral Bay | Taxi Cyprus 24" },
      {
        name: "description",
        content:
          "Discover the best beaches in Paphos and Coral Bay — Coral Bay Beach, Lara Beach, Potima Bay and Sea Caves. The ultimate Cyprus west coast beach guide.",
      },
      { property: "og:title", content: "Best Beaches in Paphos & Coral Bay" },
      { property: "og:type", content: "article" },
      {
        property: "og:description",
        content: "The ultimate guide to the most beautiful beaches around Paphos and Coral Bay in Cyprus.",
      },
      { property: "og:image", content: coralBayImg },
      { name: "twitter:image", content: coralBayImg },
    ],
  }),
  component: BeachesArticle,
});

function BeachesArticle() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Best Beaches in Paphos & Coral Bay",
          image: [coralBayImg],
          datePublished: "2025-04-01",
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
            src={coralBayImg}
            alt="Coral Bay Beach in Paphos, Cyprus"
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
              Best Beaches in Paphos & Coral Bay
            </h1>
            <div className="mt-5 flex items-center gap-3 text-sm text-white/80">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> April 2025
              </span>
              <span>· 6 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="container-tight py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Paphos and Coral Bay are home to some of the most beautiful beaches in Cyprus,
            attracting visitors with crystal-clear waters, golden sand, and stunning coastal
            views. Whether you are looking for a family-friendly beach, hidden swimming spots,
            or the perfect sunset location, the west coast of Cyprus has something for everyone.
          </p>

          <h2 className="mt-12 font-display text-2xl font-bold text-navy md:text-3xl">
            Coral Bay Beach
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Coral Bay is one of the most popular beaches in Cyprus thanks to its soft golden
            sand, calm shallow waters, and excellent facilities. Located just a short drive from
            Paphos, Coral Bay is perfect for swimming, sunbathing, water sports, and family
            holidays. The area is also surrounded by restaurants, cafés, and hotels, making it
            ideal for a full beach day.
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold text-navy md:text-3xl">
            Lara Beach
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            For a quieter and more natural experience, Lara Beach offers a unique escape
            surrounded by protected nature. Famous for its turtle conservation area, Lara Beach
            is one of the most scenic hidden beaches near Paphos. Its untouched coastline and
            peaceful atmosphere make it perfect for visitors looking to avoid busy tourist areas.
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold text-navy md:text-3xl">
            Potima Bay
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Potima Beach is known for its dramatic coastal scenery and spectacular sunsets.
            Located between Coral Bay and Kissonerga, this beach is popular with both locals and
            tourists who want a more relaxed beach experience away from crowded resorts.
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold text-navy md:text-3xl">
            Sea Caves & Hidden Coves
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            The Sea Caves area near Peyia Sea Caves features stunning rock formations, hidden
            coves, and crystal-clear waters ideal for exploring and photography. It is one of
            the best coastal spots in Cyprus for adventure lovers and sunset views.
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold text-navy md:text-3xl">
            Getting Around Paphos & Coral Bay
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Many of the best beaches around Paphos and Coral Bay are easiest to reach by private
            taxi transfer. Taxicyprus24 offers reliable fixed-price taxi services from Larnaca
            Airport, Paphos Airport, Limassol, and across Cyprus, making beach travel
            comfortable and stress-free throughout your holiday.
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
