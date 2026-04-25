import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, ArrowRight, ExternalLink } from "lucide-react";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { StructuredData } from "@/components/StructuredData";

const TRIPADVISOR_URL =
  "https://www.tripadvisor.com/Attraction_Review-g190384-d8567084-Reviews-Taxi_Cyprus_Paphos-Paphos_Paphos_District.html";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — 4.9★ on TripAdvisor (120+ reviews) | Taxi Cyprus 24" },
      {
        name: "description",
        content:
          "Read verified TripAdvisor reviews of Taxi Cyprus 24 — 4.9★ from 120+ travellers. Ranked #6 of 94 Transportation in Paphos.",
      },
      { property: "og:title", content: "Reviews — Taxi Cyprus 24" },
      {
        property: "og:description",
        content: "4.9★ verified TripAdvisor reviews of Cyprus airport transfers.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: ReviewsPage,
});

// Verified TripAdvisor reviews — sourced from
// https://www.tripadvisor.com/Attraction_Review-g190384-d8567084
const reviews = [
  {
    name: "Silver C",
    from: "TripAdvisor",
    date: "Feb 2026",
    title: "Excellent",
    text: "It was a very fast and comfortable trip!! I went from the city of Paphos to the airport. Thank you very much!! Recommended.",
  },
  {
    name: "Ксения Б",
    from: "TripAdvisor",
    date: "Oct 2025",
    title: "Positive",
    text: "Very nice guys. Pitch on time, cost, comfort, I recommend. Called and ordered, but had to change the time, no problem, helping with the luggage.",
  },
  {
    name: "Aggelos A",
    from: "TripAdvisor",
    date: "Jun 2025",
    title: "Taxi Paphos",
    text: "We ordered a taxi, they met us at the airport, brought us to the city, then a couple of days later they took us to Agia Napa and also from Agia Napa then brought us to the airport, Pafos. Everything was on time. I recommended.",
  },
  {
    name: "Dmitry O",
    from: "County Limerick, Ireland · TripAdvisor",
    date: "Jun 2025",
    title: "Great Taxi Service in Paphos",
    text: "Vladimiros is a great safe driver, always on time, reasonably priced and has a new people carrier. We used his services throughout our entire stay both for the pick up at the airport and our hotel. Few hours notice and he was able to accommodate our request for transport. Highly recommend.",
  },
  {
    name: "Rayaa K",
    from: "TripAdvisor",
    date: "May 2025",
    title: "Perfect",
    text: "Thank you Vlad! Very kind and friendly, excellent timing and took good care of the whole trip. 10/10 definitely recommend.",
  },
  {
    name: "Joep D",
    from: "TripAdvisor",
    date: "Jul 2025",
    title: "Taxi drive",
    text: "It was a very good experience — we have had this taxi multiple times, always on time, and he gave some good advice for our stay at different cities.",
  },
  {
    name: "Damian V",
    from: "TripAdvisor",
    date: "Jul 2025",
    title: "Very nice and kind taxi driver",
    text: "Very nice and kind taxi driver. He brought us everywhere we wanted to go.",
  },
  {
    name: "Jermo S",
    from: "TripAdvisor",
    date: "Jul 2025",
    title: "Very nice taxi driver",
    text: "Very nice taxi driver. He brought us from Paphos to Ayia Napa.",
  },
  {
    name: "Jaap d",
    from: "TripAdvisor",
    date: "Jul 2025",
    title: "Good driver",
    text: "Great guy! Drove us multiple days and every time was very good. When we called there was a fast reaction. A wonderful driver.",
  },
];

function ReviewsPage() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Taxi Cyprus 24",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "120",
          },
        }}
      />

      <PageHero
        eyebrow="Reviews & testimonials"
        title="4.9★ on TripAdvisor — 120+ reviews"
        subtitle="Ranked #6 of 94 Transportation in Paphos. Read verified reviews from real travellers across the UK, Europe and worldwide."
        image={heroImg}
        showForm={false}
      />

      {/* Rating summary */}
      <section className="container-tight pt-16 md:pt-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-card p-8 shadow-card-soft md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-[auto_1fr_auto]">
            <div className="text-center md:text-left">
              <div className="font-display text-6xl font-bold text-navy md:text-7xl">4.9</div>
              <div className="mt-2 flex justify-center gap-0.5 md:justify-start">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>
              <div className="mt-1 text-xs font-medium text-muted-foreground">
                120 verified reviews
              </div>
            </div>

            <div className="space-y-1.5 text-sm">
              {[
                { label: "Excellent", count: 117, total: 120 },
                { label: "Good", count: 1, total: 120 },
                { label: "Average", count: 0, total: 120 },
                { label: "Poor", count: 1, total: 120 },
                { label: "Terrible", count: 1, total: 120 },
              ].map((row) => (
                <div key={row.label} className="flex items-center gap-3">
                  <span className="w-20 shrink-0 text-xs font-medium text-muted-foreground">
                    {row.label}
                  </span>
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-navy"
                      style={{ width: `${(row.count / row.total) * 100}%` }}
                    />
                  </div>
                  <span className="w-8 shrink-0 text-right text-xs font-semibold text-navy">
                    {row.count}
                  </span>
                </div>
              ))}
            </div>

            <a
              href={TRIPADVISOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/20 bg-secondary/50 px-5 py-3 text-sm font-semibold text-navy transition-colors hover:bg-secondary"
            >
              View on TripAdvisor <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="container-tight py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <article
              key={r.name + r.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-card-soft"
            >
              <div className="flex items-center justify-between">
                <div className="flex">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">{r.date}</span>
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-navy">{r.title}</h3>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-foreground">
                "{r.text}"
              </p>
              <div className="mt-5 border-t border-border pt-4">
                <div className="font-semibold text-navy">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.from}</div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <a
            href={TRIPADVISOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-card px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-secondary"
          >
            Read all 120 reviews on TripAdvisor <ExternalLink className="h-4 w-4" />
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-[color:var(--navy-foreground)]"
          >
            Book your transfer <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
