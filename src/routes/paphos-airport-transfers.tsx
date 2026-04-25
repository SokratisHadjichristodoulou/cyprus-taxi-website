import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import paphosImg from "@/assets/dest-paphos.jpg";
import { TransferPage } from "@/components/TransferPage";
import { PriceTable } from "@/components/PriceTable";
import { pricingFromPaphos } from "@/lib/pricing";
import { sharedFAQs } from "@/lib/faqs";

export const Route = createFileRoute("/paphos-airport-transfers")({
  head: () => ({
    meta: [
      { title: "Paphos Airport Transfers & Taxi from €25 | Taxi Cyprus 24" },
      { name: "description", content: "Private Paphos Airport (PFO) transfers to Coral Bay, Peyia, Chloraka, Kato Paphos & all of Cyprus. Fixed prices, meet & greet, 24/7 service." },
      { property: "og:title", content: "Paphos Airport Transfers from €25" },
      { property: "og:description", content: "Premium Paphos Airport taxi to all Cyprus destinations." },
      { property: "og:image", content: paphosImg },
      { name: "twitter:image", content: paphosImg },
      { name: "keywords", content: "Paphos airport transfer, Paphos airport taxi, taxi from Paphos airport" },
    ],
  }),
  component: () => (
    <>
      <TransferPage
        eyebrow="Paphos Airport (PFO)"
        title="Paphos Airport Transfers & Private Taxi"
        subtitle="Fixed-price transfers from Paphos International Airport to Coral Bay, Peyia, Chloraka, Kato Paphos and every destination in Cyprus."
        heroImage={heroImg}
        galleryImage={paphosImg}
        defaultPickup="Paphos Airport"
        fromLocation="Paphos Airport"
        toLocation="All Cyprus"
        duration="20 min – 2h"
        distance="20–250 km"
        intro="Paphos International Airport (PFO) is the second-largest airport in Cyprus and the gateway to the western coast. Our private airport taxis offer the fastest, most comfortable transfer to your hotel or villa — with no waiting, no queues and no shared rides."
        bodyParagraphs={[
          "We meet you in the arrivals hall with a personal name sign, help with your luggage and walk you straight to a clean, air-conditioned Mercedes-Benz. From Paphos Airport, Coral Bay is around 25 minutes, Peyia around 30 minutes, Limassol around 50 minutes and Larnaca around 1h 45m.",
          "Every booking includes free child and baby seats, complimentary water on board, and free cancellation up to 24 hours before your transfer. Pay online by card or in cash to your driver in EUR or GBP.",
        ]}
        highlights={[
          "Direct from Paphos Airport (PFO)",
          "Meet & greet at arrivals",
          "Mercedes-Benz vehicles only",
          "Fixed prices — no surge",
          "24/7 night-time arrivals",
          "Free flight tracking",
        ]}
        prices={[
          { type: "PFO → Coral Bay", pax: "Up to 4 passengers", price: "€55" },
          { type: "PFO → Limassol", pax: "Up to 4 passengers", price: "€80" },
          { type: "PFO → Larnaca", pax: "Up to 4 passengers", price: "€130" },
        ]}
        nearbyAreas={["Coral Bay", "Peyia", "Chloraka", "Kato Paphos", "Paphos Harbour", "Tombs of the Kings", "Geroskipou", "Latchi", "Polis"]}
        faqs={sharedFAQs}
        relatedLinks={[
          { to: "/taxi-to-coral-bay", label: "PFO → Coral Bay" },
          { to: "/taxi-to-peyia", label: "PFO → Peyia" },
          { to: "/taxi-to-chloraka", label: "PFO → Chloraka" },
          { to: "/taxi-to-limassol", label: "PFO → Limassol" },
        ]}
      />
      <section className="container-tight pb-16 md:pb-20">
        <PriceTable
          pricing={pricingFromPaphos}
          subtitle="Total per vehicle. Choose the seater that fits your group — same fixed price, no surge."
        />
      </section>
    </>
  ),
});
