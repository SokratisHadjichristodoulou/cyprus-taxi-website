import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, ArrowRight, ExternalLink } from "lucide-react";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { StructuredData } from "@/components/StructuredData";
import {
  aggregateRating,
  GOOGLE_MAPS_URL,
  GOOGLE_REVIEW_STATS,
  googleReviews,
  GOOGLE_WRITE_REVIEW_URL,
} from "@/lib/reviews";

const TRIPADVISOR_URL =
  "https://www.tripadvisor.com/Attraction_Review-g190384-d8567084-Reviews-Taxi_Cyprus_Paphos-Paphos_Paphos_District.html";

export const Route = createFileRoute("/de/reviews")({
  head: () => ({
    meta: [
      { title: "Bewertungen – 4,9★ auf TripAdvisor (über 120 Bewertungen) | Taxi Cyprus 24" },
      {
        name: "description",
        content:
          "Bewertungen von Taxi Cyprus 24: 4,9★ aus über 120 TripAdvisor-Bewertungen, dazu Bewertungen auf Google. Erfahrungen echter Fahrgäste mit unseren Flughafentransfers auf Zypern.",
      },
      { property: "og:title", content: "Bewertungen – Taxi Cyprus 24" },
      {
        property: "og:description",
        content: "4,9★ auf TripAdvisor – Bewertungen unserer Flughafentransfers auf Zypern.",
      },
      { property: "og:image", content: heroImg },
      { property: "og:locale", content: "de_DE" },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: ReviewsPage,
});

// Verified TripAdvisor reviews, shown in their original language (English) — sourced from
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
    date: "Okt 2025",
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
    from: "County Limerick, Irland · TripAdvisor",
    date: "Jun 2025",
    title: "Great Taxi Service in Paphos",
    text: "Vladimiros is a great safe driver, always on time, reasonably priced and has a new people carrier. We used his services throughout our entire stay both for the pick up at the airport and our hotel. Few hours notice and he was able to accommodate our request for transport. Highly recommend.",
  },
  {
    name: "Rayaa K",
    from: "TripAdvisor",
    date: "Mai 2025",
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
          "@id": "https://taxicyprus24.com/#business",
          name: "Taxi Cyprus 24",
          telephone: "+35796626844",
          url: "https://taxicyprus24.com",
          areaServed: { "@type": "Country", name: "Cyprus" },
          aggregateRating,
        }}
      />

      <PageHero
        eyebrow="Bewertungen"
        title="4,9★ auf TripAdvisor – über 120 Bewertungen"
        subtitle="Lesen Sie, was Fahrgäste aus Großbritannien, Europa und der ganzen Welt über ihre Transfers mit uns schreiben. Die Bewertungen erscheinen in ihrer Originalsprache."
        image={heroImg}
        showForm={false}
      />

      {/* Rating summary */}
      <section className="container-tight pt-16 md:pt-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-card p-8 shadow-card-soft md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-[auto_1fr_auto]">
            <div className="text-center md:text-left">
              <div className="font-display text-6xl font-bold text-navy md:text-7xl">4,9</div>
              <div className="mt-2 flex justify-center gap-0.5 md:justify-start">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>
              <div className="mt-1 text-xs font-medium text-muted-foreground">
                120 TripAdvisor-Bewertungen
              </div>
            </div>

            <div className="space-y-1.5 text-sm">
              {[
                { label: "Ausgezeichnet", count: 117, total: 120 },
                { label: "Sehr gut", count: 1, total: 120 },
                { label: "Befriedigend", count: 0, total: 120 },
                { label: "Mangelhaft", count: 1, total: 120 },
                { label: "Ungenügend", count: 1, total: 120 },
              ].map((row) => (
                <div key={row.label} className="flex items-center gap-3">
                  <span className="w-24 shrink-0 text-xs font-medium text-muted-foreground">
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
              Auf TripAdvisor ansehen <ExternalLink className="h-4 w-4" />
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
              <h3 lang="en" className="mt-4 font-display text-base font-bold text-navy">
                {r.title}
              </h3>
              <p lang="en" className="mt-2 flex-1 text-[15px] leading-relaxed text-foreground">
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
            Alle 120 Bewertungen auf TripAdvisor <ExternalLink className="h-4 w-4" />
          </a>
          <Link
            to="/de/contact"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-[color:var(--navy-foreground)]"
          >
            Transfer buchen <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Google reviews */}
      <section className="container-tight pb-16 md:pb-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-card p-8 shadow-card-soft md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-[auto_1fr]">
            <div className="text-center md:text-left">
              <h2 className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                Google-Bewertungen
              </h2>
              <div className="mt-2 font-display text-5xl font-bold text-navy">
                {GOOGLE_REVIEW_STATS.rating}/5
              </div>
              <div className="mt-2 flex justify-center gap-0.5 md:justify-start">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>
              <div className="mt-1 text-xs font-medium text-muted-foreground">
                {`${GOOGLE_REVIEW_STATS.count} ${GOOGLE_REVIEW_STATS.count === 1 ? "Bewertung" : "Bewertungen"} auf Google`}
              </div>
            </div>

            <div className="space-y-6">
              {googleReviews.map((r) => (
                <figure key={r.name}>
                  <blockquote lang="en" className="text-[15px] leading-relaxed text-foreground">
                    "{r.text}"
                  </blockquote>
                  <figcaption className="mt-3 text-sm">
                    <span className="font-semibold text-navy">{r.name}</span>
                    <span className="text-xs text-muted-foreground"> · Google</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 border-t border-border pt-6 md:justify-start">
            <a
              href={GOOGLE_WRITE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-[color:var(--navy-foreground)] transition-transform hover:scale-[1.02]"
            >
              <Star className="h-4 w-4 fill-gold text-gold" /> Bewertung auf Google schreiben
            </a>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/20 bg-secondary/50 px-5 py-3 text-sm font-semibold text-navy transition-colors hover:bg-secondary"
            >
              Auf Google Maps ansehen <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
