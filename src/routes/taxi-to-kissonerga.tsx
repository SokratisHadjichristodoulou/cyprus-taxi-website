import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import kissonergaImg from "@/assets/dest-peyia.jpg";
import { TransferPage } from "@/components/TransferPage";

const kissonergaFAQs = [
  {
    q: "How much is a taxi from Paphos Airport to Kissonerga?",
    a: "A private taxi from Paphos Airport to Kissonerga costs a fixed €55 in a 4-seater car (up to 4 passengers), €70 in a 6-seater van and €85 in a 12-seater van. The price is per vehicle and includes meet & greet, flight tracking, luggage and free child seats.",
  },
  {
    q: "Is the price the same for Tala?",
    a: "Yes. Kissonerga and Tala share the same fixed price from Paphos Airport: €55, €70 or €85 depending on the vehicle. Kamares, next to Tala, is €55 in a 4-seater car, €70 in a 6-seater van and €90 in a 12-seater van.",
  },
  {
    q: "How much is a taxi from Larnaca Airport to Kissonerga or Tala?",
    a: "From Larnaca Airport the fixed price is €140 in a 4-seater car, €180 in a 6-seater van and €240 in a 12-seater van, for a journey of around 1 hour 40 minutes.",
  },
  {
    q: "How long does the transfer from Paphos Airport to Kissonerga take?",
    a: "Approximately 30 minutes in normal traffic. Tala takes a similar time, as the last part of the drive climbs up the hill.",
  },
  {
    q: "Can the driver find my villa?",
    a: "Yes. Send us the villa name and address or a Google Maps pin when you book, and your driver will take you right to the door — even on quiet residential roads.",
  },
  {
    q: "Can I book a return transfer from Kissonerga or Tala to Paphos Airport?",
    a: "Yes. The return trip costs the same fixed price, and we schedule the pickup from your villa so you reach the airport in good time for your flight.",
  },
  {
    q: "Which vehicle do I need?",
    a: "Up to 4 passengers travel in the 4-seater car (€55), 5–6 passengers in the 6-seater van (€70) and groups of 7–12 in the 12-seater van (€85). Child, baby and booster seats are free.",
  },
  {
    q: "Do you meet late-night flights?",
    a: "Yes. We operate 24/7, and night-time transfers to Kissonerga and Tala cost exactly the same fixed price.",
  },
];

export const Route = createFileRoute("/taxi-to-kissonerga")({
  head: () => ({
    meta: [
      { title: "Paphos Airport to Kissonerga Taxi – Fixed €55 | Taxi Cyprus 24" },
      {
        name: "description",
        content:
          "Taxi from Paphos Airport to Kissonerga and Tala at a fixed €55 (4 seats) or €70 (6 seats); from Larnaca Airport €140. Door-to-door, meet & greet, 24/7.",
      },
      { property: "og:title", content: "Paphos Airport to Kissonerga Taxi – Fixed €55" },
      {
        property: "og:description",
        content:
          "Private fixed-price taxi from Paphos and Larnaca airports to Kissonerga, Tala and the villas north of Paphos.",
      },
      { property: "og:image", content: kissonergaImg },
      { name: "twitter:image", content: kissonergaImg },
    ],
  }),
  component: () => (
    <TransferPage
      eyebrow="Paphos Airport to Kissonerga & Tala"
      title="Paphos Airport to Kissonerga Taxi Transfer"
      subtitle="Fixed-price private taxi from Paphos and Larnaca airports to Kissonerga, Tala and the villas north of Paphos — door-to-door, with meet & greet and free child seats."
      heroImage={heroImg}
      galleryImage={kissonergaImg}
      defaultDropoff="Kissonerga / Tala"
      fromLocation="Paphos / Larnaca"
      toLocation="Kissonerga & Tala"
      duration="30 min / 1h 40m"
      distance="25 km / 150 km"
      intro="Kissonerga is a coastal village between Chloraka and Coral Bay, surrounded by banana plantations and a quiet stretch of coastline popular with villa holidaymakers. Inland, the village of Tala sits on the hills above Paphos with views down to the sea. Both share the same fixed price with Taxicyprus24: a private taxi from Paphos Airport to Kissonerga or Tala costs €55 in a 4-seater car, with meet & greet, free child seats and drop-off at the door of your villa or apartment."
      bodyParagraphs={[
        "The transfer from Paphos Airport to Kissonerga takes approximately 30 minutes and covers around 25 km, following the coast road north through Paphos and Chloraka. Tala takes a similar time but sits higher up, on the hills north of Paphos, and the last part of the drive climbs through residential streets. Your driver takes you to the exact address, so there is no need to find a taxi or carry luggage up the hill.",
        "Kissonerga keeps a village feel despite being so close to Paphos: banana plantations run down towards the sea, with tavernas in the village centre and holiday villas on the edge of the fields. The coastline here is rocky with small coves, and Coral Bay's sandy beach is just a few minutes further north.",
        "Tala is a hillside village known for its square and views over the coast, and its streets are home to many holiday villas and long-stay residents. The Monastery of Agios Neophytos, founded in the 12th century around the hermit's rock-cut cell, is a short drive from the village. Neighbouring Kamares has its own fixed price from Paphos Airport — €55 in a 4-seater car.",
        "Fixed prices from Paphos Airport to Kissonerga or Tala are €55 in a 4-seater car, €70 in a 6-seater van and €85 in a 12-seater van. From Larnaca Airport the fixed price is €140 in a 4-seater car and €180 in a 6-seater van, for a drive of around 1 hour 40 minutes via the A6 motorway.",
        "Every transfer includes real-time flight tracking, up to 60 minutes of free waiting after landing, help with luggage, free baby and booster seats and bottled water on board. You can pay online by card, by bank transfer or in cash to your driver in EUR or GBP, and the price never changes for night flights or delays.",
      ]}
      highlights={[
        "Fixed €55 from Paphos Airport",
        "Same price for Kissonerga and Tala",
        "Door-to-door to villas & apartments",
        "Drivers who know the hillside roads",
        "Meet & greet in arrivals",
        "Free child & booster seats",
        "24/7, same price at night",
      ]}
      prices={[
        {
          type: "Paphos Airport to Kissonerga / Tala (Sedan)",
          pax: "Up to 4 passengers",
          price: "€55",
        },
        {
          type: "Paphos Airport to Kissonerga / Tala (Van)",
          pax: "Up to 6 passengers",
          price: "€70",
        },
        {
          type: "Larnaca Airport to Kissonerga / Tala (Sedan)",
          pax: "Up to 4 passengers",
          price: "€140",
        },
        {
          type: "Larnaca Airport to Kissonerga / Tala (Van)",
          pax: "Up to 6 passengers",
          price: "€180",
        },
      ]}
      nearbyAreas={[
        "Kissonerga village",
        "Tala",
        "Kamares",
        "Agios Neophytos Monastery",
        "Chloraka",
        "Coral Bay",
        "Lemba",
      ]}
      faqs={kissonergaFAQs}
      relatedLinks={[
        { to: "/paphos-airport-transfers", label: "Paphos Airport Transfers" },
        { to: "/taxi-to-chloraka", label: "Paphos Airport to Chloraka" },
        { to: "/taxi-to-coral-bay", label: "Paphos Airport to Coral Bay" },
        { to: "/taxi-to-peyia", label: "Paphos Airport to Peyia" },
        { to: "/larnaca-airport-to-paphos", label: "Larnaca Airport to Paphos" },
      ]}
    />
  ),
});
