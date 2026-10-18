// Review figures used in structured data (JSON-LD) on every page.
// Source: the public TripAdvisor listing — 4.9 / 126 reviews (checked 2026-10-18).
// Only raise these numbers with a documented source (e.g. a combined TripAdvisor + Google count).

export const TRIPADVISOR_URL =
  "https://www.tripadvisor.com/Attraction_Review-g190384-d8567084-Reviews-Taxi_Cyprus_Paphos-Paphos_Paphos_District.html";

export const REVIEW_STATS = { rating: 4.9, count: 126, source: "TripAdvisor" } as const;

export const aggregateRating = {
  "@type": "AggregateRating",
  ratingValue: String(REVIEW_STATS.rating),
  reviewCount: String(REVIEW_STATS.count),
  bestRating: "5",
  worstRating: "1",
};
