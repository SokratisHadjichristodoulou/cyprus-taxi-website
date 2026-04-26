import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import peyiaImg from "@/assets/dest-peyia.jpg";
import { TransferPage } from "@/components/TransferPage";
import { sharedFAQs } from "@/lib/faqs";

export const Route = createFileRoute("/taxi-to-peyia")({
  head: () => ({
    meta: [
      { title: "Taxi to Peyia from €65 — Airport Transfers | Taxi Cyprus 24" },
      { name: "description", content: "Private taxi to Peyia from Paphos Airport (€65) and Larnaca Airport (€170). Fixed price, professional driver, free child seats, 24/7." },
      { property: "og:title", content: "Taxi to Peyia from €65" },
      { property: "og:description", content: "Private fixed-price taxi transfer to Peyia, Cyprus." },
      { property: "og:image", content: peyiaImg },
      { name: "twitter:image", content: peyiaImg },
      { name: "keywords", content: "Peyia taxi transfer, taxi to Peyia, Paphos airport to Peyia" },
    ],
  }),
  component: () => (
    <TransferPage
      eyebrow="Airport to Peyia"
      title="Private Taxi Transfer to Peyia"
      subtitle="Fixed-price airport transfers to Peyia village and the surrounding hillside villas. Private Mercedes-Benz, meet & greet, no surprises."
      heroImage={heroImg}
      galleryImage={peyiaImg}
      defaultDropoff="Peyia"
      fromLocation="Paphos / Larnaca"
      toLocation="Peyia"
      duration="30 min / 1h 45m"
      distance="22 km / 152 km"
      intro="Peyia is one of the most popular holiday villa destinations in western Cyprus, known for panoramic sea views, luxury private villas, traditional tavernas, and its peaceful location above Coral Bay. Taxicyprus24 provides reliable private airport transfers to Peyia from both Paphos Airport and Larnaca Airport with fixed prices, professional drivers, and 24/7 service."
      bodyParagraphs={[
        "Our private Cyprus airport taxi service takes you directly to your villa, hotel, apartment, or holiday accommodation — with no waiting, no shared rides, and no hidden charges. Many Peyia villas are located on hillside roads and quieter residential areas, but our experienced local drivers know the region in detail and navigate directly to your exact GPS location.",
        "Transfer times to Peyia: from Paphos Airport approximately 30 minutes, and from Larnaca Airport approximately 1 hour 45 minutes. We provide airport transfers across the entire Peyia region including Sea Caves, the Coral Bay area, the St George area, the upper hillside villas, and Peyia village centre.",
        "Every Peyia airport transfer includes fixed-price private taxi service, meet & greet at the airport, real-time flight tracking, free baby and child seats, clean and luxury air-conditioned vehicles, and flexible payment by card, bank transfer, or cash in EUR or GBP.",
        "Whether you need a taxi from Paphos Airport to Peyia, a private transfer from Larnaca Airport to Coral Bay, or transport to a luxury villa in western Cyprus, Taxicyprus24 guarantees comfortable, safe, and stress-free airport transfers with no hidden fees.",
      ]}
      highlights={["Direct to your Peyia villa", "Drivers know all hillside roads", "Clean and Luxury cars", "Fixed price", "Free child seats", "24/7 booking"]}
      prices={[
        { type: "Paphos Airport to Peyia (Sedan)", pax: "Up to 4 passengers", price: "€65" },
        { type: "Paphos Airport to Peyia (Van)", pax: "Up to 6 passengers", price: "€85" },
        { type: "Larnaca Airport to Peyia (Sedan)", pax: "Up to 4 passengers", price: "€170" },
        { type: "Larnaca Airport to Peyia (Van)", pax: "Up to 6 passengers", price: "€200" },
      ]}
      nearbyAreas={["Sea Caves", "St George Peyia", "Coral Bay", "Akamas", "Kissonerga"]}
      faqs={sharedFAQs.slice(0, 6)}
      relatedLinks={[
        { to: "/taxi-to-coral-bay", label: "Taxi to Coral Bay" },
        { to: "/taxi-to-chloraka", label: "Taxi to Chloraka" },
        { to: "/paphos-airport-transfers", label: "Paphos Airport Transfers" },
      ]}
    />
  ),
});
