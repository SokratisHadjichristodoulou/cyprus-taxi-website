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
        intro="Paphos International Airport (PFO) is the second-largest airport in Cyprus and the main gateway for travellers visiting Paphos, Coral Bay, Peyia, Limassol, and western Cyprus. Taxicyprus24 provides reliable private airport taxi transfers from Paphos Airport with fixed prices, professional drivers, and 24/7 service."
        bodyParagraphs={[
          "Skip long taxi queues, crowded shuttle buses, and shared transfers. Our private Cyprus airport transfer service offers direct door-to-door transport to hotels, villas, resorts, and apartments anywhere in Cyprus — with no waiting and no shared rides.",
          "Your driver will meet you inside the arrivals hall with a personalised name sign, assist with luggage, and escort you directly to a clean, air-conditioned Mercedes-Benz vehicle. Popular transfer times from Paphos Airport include Coral Bay (approximately 25 minutes), Peyia (approximately 30 minutes), Limassol (approximately 50 minutes), and Larnaca (approximately 1 hour 45 minutes).",
          "Every Paphos Airport transfer includes free baby and child seats, complimentary bottled water, flight monitoring, and free cancellation up to 24 hours before pickup. Pay securely online by card or directly to your driver in EUR or GBP.",
          "Whether you need a taxi from Paphos Airport to Coral Bay, Peyia, Limassol, Larnaca, or any destination in Cyprus, Taxicyprus24 guarantees comfortable, fixed-price private transfers with no hidden fees.",
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
          { type: "PFO to Coral Bay", pax: "Up to 4 passengers", price: "€55" },
          { type: "PFO to Limassol", pax: "Up to 4 passengers", price: "€80" },
          { type: "PFO to Larnaca", pax: "Up to 4 passengers", price: "€130" },
        ]}
        nearbyAreas={["Coral Bay", "Peyia", "Chloraka", "Kato Paphos", "Paphos Harbour", "Tombs of the Kings", "Geroskipou", "Latchi", "Polis"]}
        faqs={sharedFAQs}
        relatedLinks={[
          { to: "/taxi-to-coral-bay", label: "PFO to Coral Bay" },
          { to: "/taxi-to-peyia", label: "PFO to Peyia" },
          { to: "/taxi-to-chloraka", label: "PFO to Chloraka" },
          { to: "/taxi-to-limassol", label: "PFO to Limassol" },
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
