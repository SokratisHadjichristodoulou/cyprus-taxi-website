import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import { CTASection } from "@/components/CTASection";
import { StructuredData } from "@/components/StructuredData";

export const Route = createFileRoute("/blog_/larnaca-airport-to-paphos-travel-guide")({
  head: () => ({
    meta: [
      { title: "Larnaca Airport to Paphos: Travel Guide | Taxi Cyprus 24" },
      {
        name: "description",
        content:
          "Compare bus, rental car and private taxi transfer from Larnaca Airport to Paphos — distance, travel time, prices and the best option for families.",
      },
      { property: "og:title", content: "How to Travel from Larnaca Airport to Paphos" },
      { property: "og:type", content: "article" },
      {
        property: "og:description",
        content: "Bus, rental car or private transfer — the complete LCA to Paphos travel guide.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
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
          headline: "How to Travel from Larnaca Airport to Paphos",
          image: [heroImg],
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
            src={heroImg}
            alt="Mercedes taxi on the Cyprus coastal motorway from Larnaca to Paphos"
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
              How to Travel from Larnaca Airport to Paphos
            </h1>
            <div className="mt-5 flex items-center gap-3 text-sm text-white/80">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> April 2025
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
            Travelling from Larnaca International Airport to Paphos is one of the most common
            journeys for visitors arriving in Cyprus. The distance between Larnaca Airport and
            Paphos is approximately 135 km, with an average travel time of around 1 hour and 30
            minutes depending on traffic and the transport option you choose.
          </p>

          <h2 className="mt-12 font-display text-2xl font-bold text-navy md:text-3xl">
            Public Bus from Larnaca Airport to Paphos
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Public buses are the cheapest way to travel between Larnaca Airport and Paphos.
            However, the journey usually requires multiple bus changes and can take more than 3
            hours. This option may be suitable for budget travellers, but it can be difficult
            with luggage, children, or late-night arrivals.
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold text-navy md:text-3xl">
            Renting a Car in Cyprus
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Car rental is another popular option for tourists visiting Cyprus. Hiring a car from
            Larnaca Airport gives you flexibility to explore places like Coral Bay, Peyia, and
            the surrounding coastline at your own pace. However, visitors should remember that
            driving in Cyprus is on the left-hand side of the road, and parking in busy tourist
            areas can sometimes be challenging.
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold text-navy md:text-3xl">
            Private Airport Transfer — The Most Comfortable Option
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            For travellers looking for the easiest and most comfortable journey, a private
            airport transfer from Larnaca Airport to Paphos is often the best choice.
            Taxicyprus24 offers fixed-price private taxi transfers with professional drivers,
            flight monitoring, meet & greet service, and 24/7 availability.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Unlike buses or shared shuttles, private transfers provide direct door-to-door
            service with no waiting times or unnecessary stops. Whether you are travelling to
            Paphos Harbour, Coral Bay, Peyia, Chloraka, or nearby resorts, a private taxi
            ensures a smooth and stress-free start to your Cyprus holiday.
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold text-navy md:text-3xl">
            How Much Does a Taxi from Larnaca Airport to Paphos Cost?
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            The average fixed price for a private transfer from Larnaca Airport to Paphos starts
            from around €140 depending on the vehicle type and destination. Most airport taxi
            services include luggage, motorway fees, child seats, and meet & greet in the quoted
            price.
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold text-navy md:text-3xl">
            Best Option for Families & Groups
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Families, groups, and travellers with luggage often prefer private Cyprus airport
            transfers because they are faster, safer, and more convenient than public transport.
            With free child seats, fixed pricing, and direct transfers, Taxicyprus24 makes
            travelling across Cyprus simple and reliable.
          </p>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-[color:var(--navy-foreground)] transition-transform hover:scale-[1.02]"
            >
              Book Larnaca to Paphos transfer <ArrowRight className="h-4 w-4" />
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
