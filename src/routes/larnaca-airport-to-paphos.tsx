import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import paphosImg from "@/assets/dest-paphos.jpg";
import { TransferPage } from "@/components/TransferPage";
import { sharedFAQs } from "@/lib/faqs";

export const Route = createFileRoute("/larnaca-airport-to-paphos")({
  head: () => ({
    meta: [
      { title: "Larnaca Airport to Paphos Taxi — Fixed €140 | Taxi Cyprus 24" },
      { name: "description", content: "Private Larnaca Airport to Paphos taxi from €140. Fixed price, meet & greet, free child seats, flight tracking. 24/7 booking, 5,000+ happy customers." },
      { property: "og:title", content: "Larnaca Airport to Paphos Taxi from €140" },
      { property: "og:description", content: "Private fixed-price Larnaca Airport to Paphos transfer with meet & greet." },
      { property: "og:image", content: paphosImg },
      { name: "twitter:image", content: paphosImg },
      { name: "keywords", content: "Larnaca airport to Paphos taxi, taxi from Larnaca airport to Paphos, Larnaca Paphos transfer" },
    ],
  }),
  component: () => (
    <TransferPage
      eyebrow="Larnaca Airport to Paphos"
      title="Larnaca Airport to Paphos Taxi Transfer"
      subtitle="Private fixed-price transfers from Larnaca International Airport to Paphos in a luxury Mercedes-Benz. Meet & greet at arrivals, free child seats, flight tracking included."
      heroImage={heroImg}
      galleryImage={paphosImg}
      defaultPickup="Larnaca Airport"
      defaultDropoff="Paphos"
      fromLocation="Larnaca Airport"
      toLocation="Paphos"
      duration="1h 30m"
      distance="140 km"
      intro="The drive from Larnaca International Airport (LCA) to Paphos covers around 140 kilometres along the A5 and A6 motorways and takes approximately 1 hour 30 minutes in normal traffic. Our professional drivers know every shortcut and will get you to your hotel, villa or resort in Paphos quickly, comfortably and safely — in a spotlessly clean Mercedes-Benz."
      bodyParagraphs={[
        "Whether you are landing late at night or early in the morning, your driver will already be waiting in the arrivals hall with a name sign. We track your flight in real time using your flight number, so even if you are delayed for hours, your transfer is guaranteed.",
        "We cover all hotels and resorts in Paphos including Coral Bay, Peyia, Chloraka, Kato Paphos, Tombs of the Kings area, Paphos Harbour, Geroskipou and the Paphos Old Town. The price is the same whether you are staying in a 5-star resort or a private villa.",
      ]}
      highlights={[
        "Fixed total price — no extras",
        "Meet & greet at Larnaca arrivals",
        "Clean and Luxury cars",
        "Free baby and child seats",
        "Real-time flight tracking",
        "Cash or card accepted",
      ]}
      prices={[
        { type: "Executive Sedan", pax: "Up to 4 passengers", price: "€140" },
        { type: "Premium Van (6 seats)", pax: "Up to 6 passengers", price: "€180" },
        { type: "Large Van (12 seats)", pax: "Up to 12 passengers", price: "€240" },
      ]}
      nearbyAreas={["Coral Bay", "Peyia", "Chloraka", "Kato Paphos", "Tombs of the Kings", "Geroskipou", "Paphos Harbour", "Latchi", "Polis"]}
      faqs={sharedFAQs.slice(0, 6)}
      relatedLinks={[
        { to: "/taxi-to-coral-bay", label: "Larnaca to Coral Bay" },
        { to: "/taxi-to-peyia", label: "Larnaca to Peyia" },
        { to: "/taxi-to-limassol", label: "Larnaca to Limassol" },
        { to: "/paphos-airport-transfers", label: "Paphos Airport Transfers" },
      ]}
    />
  ),
});
