import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import paphosImg from "@/assets/dest-paphos.jpg";
import { TransferPage } from "@/components/TransferPage";
import { PriceTable } from "@/components/PriceTable";
import { pricingFromPaphos } from "@/lib/pricing";
import { paphosRouteLinks } from "@/lib/route-links";

const paphosAirportFAQs = [
  {
    q: "Where will my driver meet me at Paphos Airport?",
    a: "Your driver waits for you in the arrivals hall at Paphos International Airport (PFO) with a personalised name sign. Once you have collected your luggage, look for your name — the driver will help with your bags and walk you straight to the car. Up to 60 minutes of waiting time after landing is included free of charge.",
  },
  {
    q: "How much is a taxi from Paphos Airport?",
    a: "Fixed prices start at €35 to Paphos Town and Kato Paphos in a 4-seater car. Other popular fixed prices from Paphos Airport (4-seater): Chloraka €45, Coral Bay and Peyia €65, Limassol €90, Larnaca €140 and Nicosia €150. Every price is the total per vehicle, not per person — the full table below lists the 6-seater and 12-seater prices.",
  },
  {
    q: "What happens if my flight to Paphos is delayed?",
    a: "We track your flight in real time using your flight number, so your driver adjusts the pickup to your actual landing time. Delays, even of several hours, cost nothing extra — the price you booked is the price you pay.",
  },
  {
    q: "Can you pick me up from a late-night or early-morning flight?",
    a: "Yes. Taxicyprus24 operates 24 hours a day, 7 days a week, including weekends and public holidays. Night-time arrivals at Paphos Airport are charged at the same fixed price, with no night surcharge.",
  },
  {
    q: "Which vehicle do I need for my group?",
    a: "Choose by the number of passengers: a 4-seater car for up to 4 passengers, a 6-seater van for 5–6 passengers and a 12-seater van for 7–12 passengers. The fixed price is per vehicle, so larger groups often pay less per person. Tell us about bulky luggage such as golf bags or pushchairs when you book.",
  },
  {
    q: "How do I pay for my Paphos Airport transfer?",
    a: "You can pay securely online by credit or debit card, by bank transfer, or in cash to your driver at the end of the journey. We accept both EUR and GBP.",
  },
  {
    q: "Are child seats included?",
    a: "Yes — baby seats, child seats and booster seats are free on every Paphos Airport transfer. Just tell us how many children are travelling and their ages when you book.",
  },
  {
    q: "Can I cancel my booking?",
    a: "Yes. Cancellation is free up to 24 hours before your pickup time. Cancellations made less than 24 hours before the transfer are charged 50% of the fare, and no-shows are charged in full.",
  },
];

export const Route = createFileRoute("/paphos-airport-transfers")({
  head: () => ({
    meta: [
      { title: "Paphos Airport Taxi & Transfers from €35 | Taxi Cyprus 24" },
      {
        name: "description",
        content:
          "Paphos Airport taxi and private transfers at fixed prices: Kato Paphos €35, Coral Bay €65, Limassol €90. Meet & greet in arrivals, free child seats, 24/7.",
      },
      { property: "og:title", content: "Paphos Airport Taxi & Transfers from €35" },
      {
        property: "og:description",
        content:
          "Fixed-price private taxi from Paphos Airport (PFO) to Kato Paphos, Coral Bay, Peyia, Limassol and all of Cyprus. Meet & greet, free child seats, 24/7.",
      },
      { property: "og:image", content: paphosImg },
      { name: "twitter:image", content: paphosImg },
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
        intro="Paphos International Airport (PFO) is the second-largest airport in Cyprus and the main gateway for travellers visiting Paphos, Coral Bay, Peyia, Limassol, and western Cyprus. Taxicyprus24 specialises in private taxi transfers from/to Paphos, covering the whole of Cyprus with fixed prices, professional drivers, and 24/7 service."
        bodyParagraphs={[
          "Skip long taxi queues, crowded shuttle buses, and shared transfers. Our private Cyprus airport transfer service offers direct door-to-door transport to hotels, villas, resorts, and apartments anywhere in Cyprus — with no waiting and no shared rides.",
          "Your driver will meet you inside the arrivals hall with a personalised name sign, assist with luggage, and escort you directly to a clean, air-conditioned Mercedes-Benz vehicle. Popular transfer times from Paphos Airport include Coral Bay (approximately 25 minutes), Peyia (approximately 30 minutes), Limassol (approximately 50 minutes), and Larnaca (approximately 1 hour 30 minutes).",
          "Every Paphos Airport transfer includes free baby and child seats, complimentary bottled water, flight monitoring, and free cancellation up to 24 hours before pickup. Pay securely online by card or directly to your driver in EUR or GBP.",
          "Whether you need a taxi from Paphos Airport to Coral Bay, Peyia, Limassol, Larnaca, Nicosia, or any destination in Cyprus, Taxicyprus24 guarantees comfortable, fixed-price private transfers with no hidden fees.",
          "Paphos Airport to Nicosia is listed at €150 for a 4-seater vehicle in our fixed-price table. See the full pricing table for larger vehicle options and other destinations.",
        ]}
        highlights={[
          "Direct from Paphos Airport (PFO)",
          "Meet & greet at arrivals",
          "Clean and Luxury cars",
          "Fixed prices — no surge",
          "24/7 night-time arrivals",
          "Free flight tracking",
        ]}
        prices={[
          { type: "PFO to Coral Bay", pax: "Up to 4 passengers", price: "€65" },
          { type: "PFO to Limassol", pax: "Up to 4 passengers", price: "€90" },
          { type: "PFO to Larnaca", pax: "Up to 4 passengers", price: "€140" },
          { type: "PFO to Nicosia", pax: "Up to 4 passengers", price: "€150" },
        ]}
        nearbyAreas={["Coral Bay", "Peyia", "Chloraka", "Kato Paphos", "Paphos Harbour", "Tombs of the Kings", "Geroskipou", "Latchi", "Polis"]}
        faqs={paphosAirportFAQs}
        relatedLinks={[
          { to: "/taxi-to-coral-bay", label: "Paphos Airport to Coral Bay" },
          { to: "/taxi-to-peyia", label: "Paphos Airport to Peyia" },
          { to: "/taxi-to-chloraka", label: "Paphos Airport to Chloraka" },
          { to: "/taxi-to-limassol", label: "Paphos Airport to Limassol" },
        ]}
      />
      <section className="container-tight pb-16 md:pb-20">
        <PriceTable
          pricing={pricingFromPaphos}
          linkMap={paphosRouteLinks}
          subtitle="Total per vehicle. Choose the seater that fits your group — same fixed price, no surge."
        />
      </section>
    </>
  ),
});
