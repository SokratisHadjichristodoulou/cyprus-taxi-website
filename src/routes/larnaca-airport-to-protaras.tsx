import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import larnacaImg from "@/assets/dest-larnaca.jpg";
import { TransferPage } from "@/components/TransferPage";
import { sharedFAQs } from "@/lib/faqs";

export const Route = createFileRoute("/larnaca-airport-to-protaras")({
  head: () => ({
    meta: [
      { title: "Larnaca Airport to Protaras Taxi — Fixed €60 | Taxi Cyprus 24" },
      { name: "description", content: "Private Larnaca Airport to Protaras taxi from €60. Fixed price, meet & greet, free child seats, flight tracking. 24/7 booking." },
      { property: "og:title", content: "Larnaca Airport to Protaras Taxi from €60" },
      { property: "og:description", content: "Private fixed-price Larnaca Airport to Protaras transfer with meet & greet." },
      { property: "og:image", content: larnacaImg },
      { name: "twitter:image", content: larnacaImg },
      { name: "keywords", content: "Larnaca airport to Protaras taxi, Larnaca to Protaras transfer, taxi from Larnaca airport to Protaras" },
    ],
  }),
  component: () => (
    <TransferPage
      eyebrow="Larnaca Airport to Protaras"
      title="Larnaca Airport to Protaras Taxi Transfer"
      subtitle="Private fixed-price transfers from Larnaca International Airport to Protaras in a luxury Mercedes-Benz. Meet & greet at arrivals, free child seats, flight tracking included."
      heroImage={heroImg}
      galleryImage={larnacaImg}
      defaultPickup="Larnaca Airport"
      defaultDropoff="Protaras"
      fromLocation="Larnaca Airport"
      toLocation="Protaras"
      duration="50 min"
      distance="65 km"
      intro="The drive from Larnaca International Airport (LCA) to Protaras covers around 65 kilometres along the A3 motorway and takes approximately 50 minutes in normal traffic. Larnaca is the closest airport to Protaras and Pernera, so a private taxi transfer is the quickest and most comfortable way to reach your hotel — door-to-door, with no shared stops."
      bodyParagraphs={[
        "Your driver will be waiting inside the arrivals hall with a personalised name sign and will help with luggage straight to the car. We track your flight in real time, so any delay is automatically handled — your fixed price doesn't change.",
        "We cover all of Protaras, Pernera, Kapparis, Fig Tree Bay and the surrounding Famagusta coastline. The same fixed price applies whether you're staying in a beachfront hotel, a private villa or a family apartment.",
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
        { type: "Executive Sedan", pax: "Up to 4 passengers", price: "€60" },
        { type: "Premium Van (6 seats)", pax: "Up to 6 passengers", price: "€80" },
        { type: "Large Van (12 seats)", pax: "Up to 12 passengers", price: "€110" },
      ]}
      nearbyAreas={["Protaras", "Pernera", "Fig Tree Bay", "Kapparis", "Ayia Napa", "Cape Greco", "Paralimni", "Sotira"]}
      faqs={sharedFAQs.slice(0, 6)}
      relatedLinks={[
        { to: "/larnaca-airport-to-ayia-napa", label: "Larnaca to Ayia Napa" },
        { to: "/larnaca-airport-transfers", label: "All Larnaca Transfers" },
        { to: "/cyprus-airport-transfers", label: "All Cyprus Routes" },
      ]}
    />
  ),
});
