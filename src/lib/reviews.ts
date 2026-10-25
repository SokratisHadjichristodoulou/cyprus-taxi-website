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

// Google Business Profile ("Vladimir TaxiCyprus24"), linked by its Maps CID (0x1eae908731da3cae).
// Figures and review copied from the listing on 2026-10-25: 5/5 from 1 review.
// Update both when the listing gets more reviews; reviews are quoted verbatim, never edited.
export const GOOGLE_MAPS_URL = "https://www.google.com/maps?cid=2210863377416862894";

export const GOOGLE_REVIEW_STATS = { rating: 5, count: 1 } as const;

export const googleReviews = [
  {
    name: "Grigorios Paraskevopoulos",
    text: "Just took Taxi with Vladimiros—car was spotless, he arrived early, helped with my bags, and the fare was exactly as promised. Perfect ride!",
  },
];

// Where "Leave a Google review" buttons point. For a link that opens the review form directly,
// replace this with the Business Profile's "Ask for reviews" link (https://g.page/r/…/review).
export const GOOGLE_WRITE_REVIEW_URL = GOOGLE_MAPS_URL;
