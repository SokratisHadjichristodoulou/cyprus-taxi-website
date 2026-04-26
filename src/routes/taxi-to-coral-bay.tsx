import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import coralBayImg from "@/assets/dest-coral-bay.jpg";
import { TransferPage } from "@/components/TransferPage";
import { sharedFAQs } from "@/lib/faqs";

export const Route = createFileRoute("/taxi-to-coral-bay")({
  head: () => ({
    meta: [
      { title: "Taxi to Coral Bay from €65 — Airport Transfers | Taxi Cyprus 24" },
      { name: "description", content: "Private taxi to Coral Bay from Paphos Airport (€65) and Larnaca Airport (€170). Fixed price, meet & greet, free child seats, 24/7 booking." },
      { property: "og:title", content: "Taxi to Coral Bay from €65" },
      { property: "og:description", content: "Private fixed-price airport taxi to Coral Bay, Cyprus." },
      { property: "og:image", content: coralBayImg },
      { name: "twitter:image", content: coralBayImg },
      { name: "keywords", content: "taxi to Coral Bay, Coral Bay airport transfer, Paphos airport to Coral Bay" },
    ],
  }),
  component: () => (
    <TransferPage
      eyebrow="Airport to Coral Bay"
      title="Private Taxi Transfer to Coral Bay"
      subtitle="Fixed-price airport transfers to Coral Bay from Paphos and Larnaca airports. Private Mercedes-Benz, meet & greet, free child seats."
      heroImage={heroImg}
      galleryImage={coralBayImg}
      defaultDropoff="Coral Bay"
      fromLocation="Paphos / Larnaca"
      toLocation="Coral Bay"
      duration="25 min / 1h 40m"
      distance="25 km / 150 km"
      intro="Coral Bay is one of the most popular beach resorts in Cyprus, known for its turquoise water, sandy beaches, luxury villas, and family-friendly hotels. Taxicyprus24 provides reliable private airport transfers to Coral Bay from both Paphos Airport and Larnaca Airport with fixed prices, professional drivers, and 24/7 service."
      bodyParagraphs={[
        "Avoid long taxi queues, crowded shuttle buses, and shared rides. Our private Coral Bay airport taxi service offers direct door-to-door transfers to your hotel, villa, apartment, or resort anywhere in the Coral Bay area.",
        "From Paphos Airport, Coral Bay is approximately 25 minutes away along the scenic coastal road. Transfers from Larnaca Airport to Coral Bay usually take around 1 hour 40 minutes via the A6 motorway.",
        "We provide airport transfers to all major Coral Bay hotels and accommodations, including Coral Beach Hotel & Resort, Mayfair Hotel, Corallia Beach Hotel, Coral Star Apartments, and private holiday villas throughout Coral Bay, Peyia, and the surrounding Paphos region.",
        "Every Coral Bay airport transfer includes fixed-price taxi rates with no hidden fees, meet & greet at the airport, flight monitoring for delayed arrivals, free baby and child seats, comfortable air-conditioned vehicles, and payment by card, bank transfer, or cash in EUR or GBP.",
        "Whether you need a taxi from Paphos Airport to Coral Bay or a private transfer from Larnaca Airport to Coral Bay, Taxicyprus24 guarantees safe, comfortable, and stress-free travel across Cyprus.",
      ]}
      highlights={["Direct to your Coral Bay hotel", "Clean and Luxury cars", "Fixed price guarantee", "Free child seats", "24/7 night arrivals", "Meet & greet included"]}
      prices={[
        { type: "Paphos Airport to Coral Bay (Sedan)", pax: "Up to 4 passengers", price: "€65" },
        { type: "Paphos Airport to Coral Bay (Van)", pax: "Up to 6 passengers", price: "€85" },
        { type: "Larnaca Airport to Coral Bay (Sedan)", pax: "Up to 4 passengers", price: "€170" },
        { type: "Larnaca Airport to Coral Bay (Van)", pax: "Up to 6 passengers", price: "€200" },
      ]}
      nearbyAreas={["Coral Beach Hotel", "Mayfair Coral Bay", "Corallia Beach", "Akamas Peninsula", "Sea Caves", "Peyia"]}
      faqs={sharedFAQs.slice(0, 6)}
      relatedLinks={[
        { to: "/taxi-to-peyia", label: "Taxi to Peyia" },
        { to: "/taxi-to-chloraka", label: "Taxi to Chloraka" },
        { to: "/paphos-airport-transfers", label: "Paphos Airport Transfers" },
      ]}
    />
  ),
});
