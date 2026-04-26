import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import coralBayImg from "@/assets/dest-coral-bay.jpg";
import { TransferPage } from "@/components/TransferPage";
import { sharedFAQs } from "@/lib/faqs";

export const Route = createFileRoute("/taxi-to-coral-bay")({
  head: () => ({
    meta: [
      { title: "Taxi to Coral Bay from €35 — Airport Transfers | Taxi Cyprus 24" },
      { name: "description", content: "Private taxi to Coral Bay from Paphos Airport (€35) and Larnaca Airport (€110). Fixed price, meet & greet, free child seats, 24/7 booking." },
      { property: "og:title", content: "Taxi to Coral Bay from €35" },
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
      intro="Coral Bay is one of the most popular tourist resorts in western Cyprus, famous for its turquoise water, sandy beach and family-friendly hotels. Our private airport transfer to Coral Bay drops you directly at your hotel or villa, with no waiting and no shared rides."
      bodyParagraphs={[
        "From Paphos Airport, Coral Bay is just a 25-minute drive along the coastal road — a beautiful introduction to the area. From Larnaca Airport, the journey takes around 1 hour 40 minutes via the A6 motorway.",
        "We cover all hotels in Coral Bay, including Coral Beach Hotel & Resort, Mayfair Hotel, Corallia Beach Hotel, Coral Star Apartments and the dozens of private villas in the surrounding hills.",
      ]}
      highlights={["Direct to your Coral Bay hotel", "Mercedes-Benz vehicles", "Fixed price guarantee", "Free child seats", "24/7 night arrivals", "Meet & greet included"]}
      prices={[
        { type: "Paphos Airport to Coral Bay", pax: "Up to 3 passengers", price: "€35" },
        { type: "Larnaca Airport to Coral Bay", pax: "Up to 3 passengers", price: "€110" },
        { type: "7-seater (any airport)", pax: "Up to 7 passengers", price: "€55+" },
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
