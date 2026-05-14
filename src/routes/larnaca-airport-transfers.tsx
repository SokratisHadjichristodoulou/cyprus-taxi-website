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
      { title: "Larnaca Airport Transfers & Taxi from €130 | Taxi Cyprus 24" },
      { name: "description", content: "Private Larnaca Airport (LCA) taxi transfers to Paphos, Ayia Napa, Protaras, Nicosia and all Cyprus. Fixed prices, meet & greet, 24/7." },
      { property: "og:title", content: "Larnaca Airport Transfers from €130" },
      { property: "og:description", content: "Premium Larnaca Airport taxi to all Cyprus destinations." },
      { property: "og:image", content: larnacaImg },
      { name: "twitter:image", content: larnacaImg },
      { name: "keywords", content: "Larnaca airport taxi, Larnaca airport transfers, taxi from Larnaca airport" },
    ],
  }),
  component: () => (
    <>
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
        intro="Larnaca International Airport (LCA) is the largest and busiest airport in Cyprus, serving millions of international travellers from the UK and Europe every year. Taxicyprus24 provides premium private airport transfers from Larnaca Airport with fixed prices, professional drivers, flight tracking, and 24/7 service across Cyprus."
        bodyParagraphs={[
          "Skip long taxi queues, crowded shuttle buses, and expensive last-minute airport taxis. Our private Cyprus airport transfer service offers direct door-to-door transport to hotels, villas, apartments, resorts, and business destinations anywhere on the island.",
          "Your professional driver will meet you inside the arrivals hall with a personalised name sign, assist with luggage, and escort you directly to a clean, air-conditioned Mercedes vehicle. We monitor your flight in real time, so delayed arrivals never affect your airport transfer booking.",
          "Popular transfer times from Larnaca Airport include Larnaca city (approximately 15 minutes), Nicosia (approximately 40 minutes), Limassol (approximately 45 minutes), Ayia Napa & Protaras (approximately 45 minutes), Paphos (approximately 1 hour 30 minutes), and Coral Bay (approximately 1 hour 40 minutes).",
          "Every Larnaca Airport taxi transfer includes fixed-price airport taxi rates, meet & greet service, real-time flight monitoring, free baby and child seats, complimentary bottled water, and card, bank transfer, or cash payment options in EUR or GBP.",
          "Whether you need a taxi from Larnaca Airport to Limassol, Paphos, Coral Bay, Ayia Napa, Nicosia, or anywhere else in Cyprus, Taxicyprus24 guarantees reliable, comfortable, and stress-free private airport transfers with no hidden fees.",
        ]}
        highlights={["Direct from Larnaca Airport (LCA)", "Meet & greet at arrivals", "Clean and Luxury cars", "Free child seats", "Flight tracking included", "Pay cash or card"]}
        prices={[
          { type: "LCA to Pissouri", pax: "Up to 4 passengers", price: "€130" },
          { type: "LCA to Paphos", pax: "Up to 4 passengers", price: "€140" },
          { type: "LCA to Coral Bay", pax: "Up to 4 passengers", price: "€170" },
        ]}
        nearbyAreas={["Larnaca City", "Ayia Napa", "Protaras", "Nicosia", "Paphos", "Coral Bay", "Peyia", "Pissouri"]}
        faqs={sharedFAQs}
        relatedLinks={[
          { to: "/larnaca-airport-to-paphos", label: "LCA to Paphos" },
          { to: "/larnaca-airport-to-ayia-napa", label: "LCA to Ayia Napa" },
          { to: "/larnaca-airport-to-protaras", label: "LCA to Protaras" },
          { to: "/taxi-to-coral-bay", label: "LCA to Coral Bay" },
          { to: "/cyprus-airport-transfers", label: "All Routes" },
        ]}
      />
      <section className="container-tight pb-16 md:pb-20">
        <PriceTable
          pricing={pricingFromLarnaca}
          subtitle="Total per vehicle. Same fixed price 24/7 — flight tracking and meet & greet included."
        />
      </section>
    </>
  ),
});
