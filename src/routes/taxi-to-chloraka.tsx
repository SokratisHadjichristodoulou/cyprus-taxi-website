import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import chlorakaImg from "@/assets/dest-chloraka.jpg";
import { TransferPage } from "@/components/TransferPage";
import { sharedFAQs } from "@/lib/faqs";

export const Route = createFileRoute("/taxi-to-chloraka")({
  head: () => ({
    meta: [
      { title: "Taxi to Chloraka from €32 — Airport Transfers | Taxi Cyprus 24" },
      { name: "description", content: "Private taxi to Chloraka from Paphos Airport (€32) and Larnaca Airport (€110). Fixed price, professional driver, free child seats, 24/7." },
      { property: "og:title", content: "Taxi to Chloraka from €32" },
      { property: "og:description", content: "Private fixed-price taxi transfer to Chloraka, Cyprus." },
      { property: "og:image", content: chlorakaImg },
      { name: "twitter:image", content: chlorakaImg },
      { name: "keywords", content: "Chloraka airport taxi, taxi to Chloraka, Paphos airport to Chloraka" },
    ],
  }),
  component: () => (
    <TransferPage
      eyebrow="Airport → Chloraka"
      title="Private Taxi Transfer to Chloraka"
      subtitle="Fixed-price private airport transfers to Chloraka in a luxury Mercedes-Benz. Quick, comfortable and reliable."
      heroImage={heroImg}
      galleryImage={chlorakaImg}
      defaultDropoff="Chloraka"
      fromLocation="Paphos / Larnaca"
      toLocation="Chloraka"
      duration="25 min / 1h 40m"
      distance="20 km / 150 km"
      intro="Chloraka is a quiet seaside village just north of Paphos, popular with British holidaymakers and home to many high-quality holiday villas. Our private taxi service drops you directly at your villa or hotel, with no waiting and no extra charges."
      bodyParagraphs={[
        "From Paphos Airport, Chloraka is approximately 25 minutes via the coastal road. From Larnaca Airport, the journey takes around 1h 40m.",
        "We serve all areas of Chloraka including the seafront resorts, the village centre and the residential streets where most holiday villas are located.",
      ]}
      highlights={["Direct to your Chloraka villa", "Mercedes-Benz vehicles", "Fixed price guarantee", "Free child seats", "Meet & greet at airport", "Pay cash or card"]}
      prices={[
        { type: "Paphos Airport → Chloraka", pax: "Up to 3 passengers", price: "€32" },
        { type: "Larnaca Airport → Chloraka", pax: "Up to 3 passengers", price: "€110" },
        { type: "7-seater Premium Van", pax: "Up to 7 passengers", price: "€50+" },
      ]}
      nearbyAreas={["Kissonerga", "Lemba", "Kato Paphos", "Coral Bay", "Tombs of the Kings"]}
      faqs={sharedFAQs.slice(0, 6)}
      relatedLinks={[
        { to: "/taxi-to-coral-bay", label: "Taxi to Coral Bay" },
        { to: "/taxi-to-peyia", label: "Taxi to Peyia" },
        { to: "/paphos-airport-transfers", label: "Paphos Airport Transfers" },
      ]}
    />
  ),
});
