import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";
import larnacaImg from "@/assets/dest-larnaca.jpg";
import { CTASection } from "@/components/CTASection";
import { StructuredData } from "@/components/StructuredData";

export const Route = createFileRoute("/blog_/cyprus-travel-tips-first-time-visitors")({
  head: () => ({
    meta: [
      { title: "Cyprus Travel Tips for First-Time Visitors | Taxi Cyprus 24" },
      {
        name: "description",
        content:
          "First-time visitor guide to Cyprus — currency, driving on the left, weather, dress code, airport transfers and useful tips for UK and European travellers.",
      },
      { property: "og:title", content: "Cyprus Travel Tips for First-Time Visitors" },
      { property: "og:type", content: "article" },
      {
        property: "og:description",
        content: "Currency, driving, weather, culture and transport tips for visiting Cyprus.",
      },
      { property: "og:image", content: larnacaImg },
      { name: "twitter:image", content: larnacaImg },
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
          headline: "Cyprus Travel Tips for First-Time Visitors",
          image: [larnacaImg],
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
            src={larnacaImg}
            alt="Larnaca seafront in Cyprus"
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
              Cyprus Travel Tips for First-Time Visitors
            </h1>
            <div className="mt-5 flex items-center gap-3 text-sm text-white/80">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> February 2025
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
            Cyprus is one of the most popular Mediterranean holiday destinations for UK and
            European travellers, offering beautiful beaches, warm weather, historic sites, and
            welcoming local culture. If you are visiting Cyprus for the first time, knowing a
            few important travel tips can help make your holiday smoother, safer, and more
            enjoyable.
          </p>

          <h2 className="mt-12 font-display text-2xl font-bold text-navy md:text-3xl">
            Currency in Cyprus
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            The official currency in Cyprus is the Euro (€). Most hotels, restaurants, shops,
            and taxi services accept credit and debit cards, although carrying some cash is
            useful for smaller villages and local tavernas. ATMs are widely available across
            popular tourist areas including Paphos, Limassol, and Larnaca.
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold text-navy md:text-3xl">
            Driving in Cyprus
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            One of the most important things to know for first-time visitors is that people
            drive on the left-hand side of the road in Cyprus, similar to the UK. Road signs
            are in both Greek and English, making driving relatively easy for tourists. Car
            rental is popular, but many visitors prefer private airport transfers and taxi
            services for convenience and stress-free travel.
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold text-navy md:text-3xl">
            Weather & Best Time to Visit Cyprus
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Cyprus enjoys over 300 days of sunshine each year, making it one of the warmest
            destinations in Europe. Summer temperatures often exceed 30°C, especially in July
            and August, while spring and autumn offer more comfortable weather for sightseeing
            and outdoor activities.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Popular beach destinations like Coral Bay and Ayia Napa are busiest during the
            summer season, while winter months remain mild compared to most European countries.
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold text-navy md:text-3xl">
            Dress Code & Local Culture
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Cyprus is generally relaxed and tourist-friendly, especially in coastal resorts.
            Casual summer clothing is acceptable in most places, although visitors should dress
            modestly when visiting churches, monasteries, and religious sites.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Cypriot hospitality is an important part of local culture, and visitors will often
            find locals welcoming and helpful throughout the island.
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold text-navy md:text-3xl">
            Transport & Airport Transfers
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            The main international airports in Cyprus are Larnaca International Airport and
            Paphos International Airport. While buses are available, many tourists choose
            private airport transfers for faster and more comfortable travel across the island.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Taxicyprus24 offers fixed-price Cyprus airport taxi services with professional
            drivers, flight monitoring, meet & greet service, and 24/7 availability. Whether
            you are travelling to Limassol, Paphos, Coral Bay, Peyia, or Ayia Napa, private
            transfers provide one of the easiest ways to start your Cyprus holiday.
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold text-navy md:text-3xl">
            Useful Tips for Tourists
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-muted-foreground">
            <li>English is widely spoken across Cyprus</li>
            <li>Tap water is generally safe to drink in most areas</li>
            <li>Power sockets are UK-style Type G plugs</li>
            <li>Tipping is appreciated but not mandatory</li>
            <li>Summer sun can be very strong, so sunscreen is essential</li>
          </ul>

          <p className="mt-8 leading-relaxed text-muted-foreground">
            For first-time visitors, Cyprus combines beautiful beaches, excellent food,
            historic attractions, and easy travel, making it one of the best Mediterranean
            destinations for a relaxing holiday.
          </p>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-[color:var(--navy-foreground)] transition-transform hover:scale-[1.02]"
            >
              Book a Cyprus transfer <ArrowRight className="h-4 w-4" />
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
