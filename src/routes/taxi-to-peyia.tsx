import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import peyiaImg from "@/assets/dest-peyia.jpg";
import { TransferPage } from "@/components/TransferPage";
import { sharedFAQs } from "@/lib/faqs";

export const Route = createFileRoute("/taxi-to-peyia")({
  head: () => ({
    meta: [
      { title: "Taxi to Peyia from €35 — Airport Transfers | Taxi Cyprus 24" },
      { name: "description", content: "Private taxi to Peyia from Paphos Airport (€35) and Larnaca Airport (€115). Fixed price, professional driver, free child seats, 24/7." },
      { property: "og:title", content: "Taxi to Peyia from €35" },
      { property: "og:description", content: "Private fixed-price taxi transfer to Peyia, Cyprus." },
      { property: "og:image", content: peyiaImg },
      { name: "twitter:image", content: peyiaImg },
      { name: "keywords", content: "Peyia taxi transfer, taxi to Peyia, Paphos airport to Peyia" },
    ],
  }),
  component: () => (
    <TransferPage
      eyebrow="Airport → Peyia"
      title="Private Taxi Transfer to Peyia"
      subtitle="Fixed-price airport transfers to Peyia village and the surrounding hillside villas. Private Mercedes-Benz, meet & greet, no surprises."
      heroImage={heroImg}
      galleryImage={peyiaImg}
      defaultDropoff="Peyia"
      fromLocation="Paphos / Larnaca"
      toLocation="Peyia"
      duration="30 min / 1h 45m"
      distance="22 km / 152 km"
      intro="Peyia is a charming traditional village set on the hillside above Coral Bay, popular for its private holiday villas, sea views and family-run tavernas. Our private taxi service takes you directly to your villa, however hidden the road may be."
      bodyParagraphs={[
        "Many Peyia villas are located on narrow hillside roads — our drivers know the area inside out and will navigate to the exact GPS coordinates of your accommodation. From Paphos Airport, Peyia is around 30 minutes; from Larnaca Airport it takes about 1h 45m.",
        "We cover the entire Peyia area including Sea Caves, the area near St George's church, the upper hillside villas and the streets around Coral Bay junction.",
      ]}
      highlights={["Direct to your Peyia villa", "Drivers know all hillside roads", "Mercedes-Benz vehicles", "Fixed price", "Free child seats", "24/7 booking"]}
      prices={[
        { type: "Paphos Airport → Peyia", pax: "Up to 3 passengers", price: "€35" },
        { type: "Larnaca Airport → Peyia", pax: "Up to 3 passengers", price: "€115" },
        { type: "7-seater Premium Van", pax: "Up to 7 passengers", price: "€55+" },
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
