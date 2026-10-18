import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import peyiaImg from "@/assets/dest-peyia.jpg";
import { TransferPage } from "@/components/TransferPage";

const peyiaFAQs = [
  {
    q: "How much is a taxi from Paphos Airport to Peyia?",
    a: "A private taxi from Paphos Airport to Peyia costs a fixed €65 in a 4-seater car (up to 4 passengers), €85 in a 6-seater van and €120 in a 12-seater van. That is the total for the whole vehicle, including meet & greet, flight tracking, luggage and free child seats.",
  },
  {
    q: "How much is a taxi from Larnaca Airport to Peyia?",
    a: "From Larnaca Airport the fixed price to Peyia is €170 in a 4-seater car, €200 in a 6-seater van and €270 in a 12-seater van, with meet & greet and flight tracking included.",
  },
  {
    q: "How long does it take from Paphos Airport to Peyia?",
    a: "About 30 minutes, depending on traffic and where your villa is. From Larnaca Airport the drive to Peyia takes around 1 hour 45 minutes.",
  },
  {
    q: "Can your driver find my villa in Peyia?",
    a: "Yes. Many Peyia villas are on hillside roads and quiet residential streets, and our local drivers know the area well. Send us the villa name and address, or a Google Maps pin, when you book and your driver will take you right to the door.",
  },
  {
    q: "Do you cover the Sea Caves and St George areas?",
    a: "Yes — we cover the whole Peyia area, including the Sea Caves, St George, the upper hillside villas and the village centre. Give us your exact address when booking so we can confirm your fixed price.",
  },
  {
    q: "Can I book a return transfer from Peyia to Paphos Airport?",
    a: "Yes. The return trip from Peyia to Paphos Airport costs the same fixed price as the arrival, and we schedule the pickup from your villa so you reach the airport in good time for your flight.",
  },
  {
    q: "Is the price per person or per vehicle?",
    a: "Per vehicle. €65 covers up to 4 passengers in the car, €85 up to 6 in the van and €120 up to 12 in the large van, so the cost per person drops as your group grows.",
  },
  {
    q: "Do you meet late-night flights for Peyia?",
    a: "Yes. We work 24/7, and late-night or early-morning arrivals at Paphos Airport cost the same fixed price — no night surcharge.",
  },
];

export const Route = createFileRoute("/taxi-to-peyia")({
  head: () => ({
    meta: [
      { title: "Paphos Airport to Peyia Taxi – Fixed €65 | Taxi Cyprus 24" },
      {
        name: "description",
        content:
          "Taxi from Paphos Airport to Peyia at a fixed €65 (4 seats) or €85 (6 seats); from Larnaca Airport €170. Door-to-door to your villa, free child seats, 24/7.",
      },
      { property: "og:title", content: "Paphos Airport to Peyia Taxi – Fixed €65" },
      {
        property: "og:description",
        content:
          "Private fixed-price taxi from Paphos Airport and Larnaca Airport to Peyia villas and hotels.",
      },
      { property: "og:image", content: peyiaImg },
      { name: "twitter:image", content: peyiaImg },
    ],
  }),
  component: () => (
    <TransferPage
      eyebrow="Airport to Peyia"
      title="Paphos Airport to Peyia Taxi Transfer"
      subtitle="Fixed-price airport transfers to Peyia village and the surrounding hillside villas. Private Mercedes-Benz, meet & greet, no surprises."
      heroImage={heroImg}
      galleryImage={peyiaImg}
      defaultDropoff="Peyia"
      fromLocation="Paphos / Larnaca"
      toLocation="Peyia"
      duration="30 min / 1h 45m"
      distance="22 km / 152 km"
      intro="Peyia is one of the most popular holiday villa destinations in western Cyprus, known for panoramic sea views, luxury private villas, traditional tavernas, and its peaceful location above Coral Bay. Taxicyprus24 provides reliable private airport transfers from/to Paphos and across Cyprus to Peyia from both Paphos Airport and Larnaca Airport with fixed prices, professional drivers, and 24/7 service."
      bodyParagraphs={[
        "Our private Cyprus airport taxi service takes you directly to your villa, hotel, apartment, or holiday accommodation — with no waiting, no shared rides, and no hidden charges. Many Peyia villas are located on hillside roads and quieter residential areas, but our experienced local drivers know the region in detail and navigate directly to your exact GPS location.",
        "Transfer times to Peyia: from Paphos Airport approximately 30 minutes, and from Larnaca Airport approximately 1 hour 45 minutes. We provide airport transfers across the entire Peyia region including Sea Caves, the Coral Bay area, the St George area, the upper hillside villas, and Peyia village centre.",
        "Every Peyia airport transfer includes fixed-price private taxi service, meet & greet at the airport, real-time flight tracking, free baby and child seats, clean and luxury air-conditioned vehicles, and flexible payment by card, bank transfer, or cash in EUR or GBP.",
        "Whether you need a taxi from Paphos Airport to Peyia, a private transfer from Larnaca Airport to Coral Bay, or transport to a luxury villa in western Cyprus, Taxicyprus24 guarantees comfortable, safe, and stress-free airport transfers with no hidden fees.",
      ]}
      highlights={["Direct to your Peyia villa", "Drivers know all hillside roads", "Clean and Luxury cars", "Fixed price", "Free child seats", "24/7 booking"]}
      prices={[
        { type: "Paphos Airport to Peyia (Sedan)", pax: "Up to 4 passengers", price: "€65" },
        { type: "Paphos Airport to Peyia (Van)", pax: "Up to 6 passengers", price: "€85" },
        { type: "Larnaca Airport to Peyia (Sedan)", pax: "Up to 4 passengers", price: "€170" },
        { type: "Larnaca Airport to Peyia (Van)", pax: "Up to 6 passengers", price: "€200" },
      ]}
      nearbyAreas={["Sea Caves", "St George Peyia", "Coral Bay", "Akamas", "Kissonerga"]}
      faqs={peyiaFAQs}
      relatedLinks={[
        { to: "/taxi-to-coral-bay", label: "Taxi to Coral Bay" },
        { to: "/taxi-to-chloraka", label: "Taxi to Chloraka" },
        { to: "/paphos-airport-transfers", label: "Paphos Airport Transfers" },
      ]}
    />
  ),
});
