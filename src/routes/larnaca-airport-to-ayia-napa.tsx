import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import larnacaImg from "@/assets/dest-larnaca.jpg";
import { TransferPage } from "@/components/TransferPage";
import { sharedFAQs } from "@/lib/faqs";

export const Route = createFileRoute("/larnaca-airport-to-ayia-napa")({
  head: () => ({
    meta: [
      { title: "Larnaca Airport to Ayia Napa Taxi — Fixed €55 | Taxi Cyprus 24" },
      { name: "description", content: "Private Larnaca Airport to Ayia Napa taxi from €55. Fixed price, meet & greet, free child seats, flight tracking. 24/7 booking." },
      { property: "og:title", content: "Larnaca Airport to Ayia Napa Taxi from €55" },
      { property: "og:description", content: "Private fixed-price Larnaca Airport to Ayia Napa transfer with meet & greet." },
      { property: "og:image", content: larnacaImg },
      { name: "twitter:image", content: larnacaImg },
      { name: "keywords", content: "Larnaca airport to Ayia Napa taxi, Larnaca to Ayia Napa transfer, taxi from Larnaca airport to Ayia Napa" },
    ],
  }),
  component: () => (
    <TransferPage
      eyebrow="Larnaca Airport to Ayia Napa"
      title="Larnaca Airport to Ayia Napa Taxi Transfer"
      subtitle="Private fixed-price transfers from Larnaca International Airport to Ayia Napa in a luxury Mercedes-Benz. Meet & greet at arrivals, free child seats, flight tracking included."
      heroImage={heroImg}
      galleryImage={larnacaImg}
      defaultPickup="Larnaca Airport"
      defaultDropoff="Ayia Napa"
      fromLocation="Larnaca Airport"
      toLocation="Ayia Napa"
      duration="45 min"
      distance="55 km"
      intro="The drive from Larnaca International Airport (LCA) to Ayia Napa covers about 55 kilometres along the A3 motorway and takes around 45 minutes in normal traffic. Larnaca is the closest airport to Ayia Napa, so a private taxi is by far the fastest and most comfortable way to reach your hotel or resort — especially after a long flight, late at night, or with kids and luggage."
      bodyParagraphs={[
        "Your driver will already be waiting in the arrivals hall with a name sign — no scrambling for a taxi rank or queueing for a shuttle bus. We track your flight in real time using your flight number, so even if you arrive hours late, your transfer is guaranteed at the same fixed price.",
        "We cover every hotel, villa and apartment in Ayia Napa, Nissi Beach, Cape Greco, Pernera and the surrounding resort area. The price is the same whether you stay at a 5-star resort on Nissi Avenue or a private villa in the harbour area.",
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
        { type: "Executive Sedan", pax: "Up to 4 passengers", price: "€55" },
        { type: "Premium Van (6 seats)", pax: "Up to 6 passengers", price: "€70" },
        { type: "Large Van (12 seats)", pax: "Up to 12 passengers", price: "€95" },
      ]}
      nearbyAreas={["Ayia Napa", "Nissi Beach", "Protaras", "Pernera", "Cape Greco", "Paralimni", "Kapparis", "Sotira"]}
      faqs={sharedFAQs.slice(0, 6)}
      relatedLinks={[
        { to: "/larnaca-airport-transfers", label: "All Larnaca Transfers" },
        { to: "/larnaca-airport-to-paphos", label: "Larnaca to Paphos" },
        { to: "/cyprus-airport-transfers", label: "All Cyprus Routes" },
      ]}
    />
  ),
});
