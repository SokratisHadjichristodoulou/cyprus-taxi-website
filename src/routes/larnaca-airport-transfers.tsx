import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import larnacaImg from "@/assets/dest-larnaca.jpg";
import { TransferPage } from "@/components/TransferPage";
import { PriceTable } from "@/components/PriceTable";
import { pricingFromLarnaca } from "@/lib/pricing";
import { sharedFAQs } from "@/lib/faqs";

export const Route = createFileRoute("/larnaca-airport-transfers")({
  head: () => ({
    meta: [
      { title: "Larnaca Airport Transfers & Taxi from €35 | Taxi Cyprus 24" },
      { name: "description", content: "Private Larnaca Airport (LCA) taxi transfers to Paphos, Limassol, Ayia Napa, Protaras, Nicosia and all Cyprus. Fixed prices, meet & greet, 24/7." },
      { property: "og:title", content: "Larnaca Airport Transfers from €35" },
      { property: "og:description", content: "Premium Larnaca Airport taxi to all Cyprus destinations." },
      { property: "og:image", content: larnacaImg },
      { name: "twitter:image", content: larnacaImg },
      { name: "keywords", content: "Larnaca airport taxi, Larnaca airport transfers, taxi from Larnaca airport" },
    ],
  }),
  component: () => (
    <TransferPage
      eyebrow="Larnaca Airport (LCA)"
      title="Larnaca Airport Transfers & Private Taxi"
      subtitle="Fixed-price private transfers from Larnaca International Airport to Paphos, Limassol, Ayia Napa, Protaras, Nicosia and every destination in Cyprus."
      heroImage={heroImg}
      galleryImage={larnacaImg}
      defaultPickup="Larnaca Airport"
      fromLocation="Larnaca Airport"
      toLocation="All Cyprus"
      duration="15 min – 1h 45m"
      distance="10–180 km"
      intro="Larnaca International Airport (LCA) is the main gateway to Cyprus, handling the majority of international arrivals from the UK and Europe. Our premium airport transfer service makes your onward journey effortless — from the moment you land to the moment you check in to your hotel."
      bodyParagraphs={[
        "Your professional driver will be waiting in the arrivals hall with a personal name sign, ready to help with your luggage. We monitor your flight live, so delays never affect your booking. Just walk out, meet your driver, and relax.",
        "From Larnaca Airport we cover Larnaca city (15 min), Limassol (45 min), Ayia Napa & Protaras (45 min), Nicosia (40 min), Paphos (1h 30m), Coral Bay (1h 40m) and every village in between — all at a fixed total price.",
      ]}
      highlights={["Direct from Larnaca Airport (LCA)", "Meet & greet at arrivals", "Mercedes-Benz vehicles", "Free child seats", "Flight tracking included", "Pay cash or card"]}
      prices={[
        { type: "LCA → Larnaca City", pax: "Up to 3 passengers", price: "€20" },
        { type: "LCA → Limassol", pax: "Up to 3 passengers", price: "€55" },
        { type: "LCA → Paphos", pax: "Up to 3 passengers", price: "€95" },
      ]}
      nearbyAreas={["Larnaca City", "Limassol", "Ayia Napa", "Protaras", "Nicosia", "Paphos", "Coral Bay", "Peyia", "Pissouri"]}
      faqs={sharedFAQs}
      relatedLinks={[
        { to: "/larnaca-airport-to-paphos", label: "LCA → Paphos" },
        { to: "/taxi-to-limassol", label: "LCA → Limassol" },
        { to: "/taxi-to-coral-bay", label: "LCA → Coral Bay" },
        { to: "/cyprus-airport-transfers", label: "All Routes" },
      ]}
    />
  ),
});
