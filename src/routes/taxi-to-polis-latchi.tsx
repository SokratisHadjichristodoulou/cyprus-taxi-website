import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import polisLatchiImg from "@/assets/dest-chloraka.jpg";
import { TransferPage } from "@/components/TransferPage";

const polisLatchiFAQs = [
  {
    q: "How much is a taxi from Paphos Airport to Polis and Latchi?",
    a: "A private taxi from Paphos Airport to Polis or Latchi costs a fixed €95 in a 4-seater car (up to 4 passengers), €120 in a 6-seater van and €160 in a 12-seater van. That is the total for the vehicle, including meet & greet, flight tracking, luggage and free child seats.",
  },
  {
    q: "How much is a taxi from Larnaca Airport to Polis and Latchi?",
    a: "From Larnaca Airport the fixed price to Polis and Latchi is €200 in a 4-seater car, €250 in a 6-seater van and €320 in a 12-seater van. The drive takes around 2 hours 15 minutes.",
  },
  {
    q: "How long is the drive from Paphos Airport to Latchi?",
    a: "Approximately 1 hour, depending on traffic and where exactly you are staying. Latchi is about 2 km beyond Polis, so the journey time to both is similar.",
  },
  {
    q: "Do you drop off at villas in Neo Chorio, Prodromi and Argaka?",
    a: "Yes — we drive to villas and holiday homes all around Polis and Latchi, including the surrounding villages. Send us the address or a map pin when you book so we can confirm the fixed price for your exact location.",
  },
  {
    q: "Can I book a return transfer from Polis or Latchi to Paphos Airport?",
    a: "Yes. The return trip to Paphos Airport costs the same fixed price. Because the drive takes about an hour, we will agree a pickup time with you that leaves plenty of margin for check-in.",
  },
  {
    q: "Which vehicle should I book for a family holiday in Latchi?",
    a: "Up to 4 passengers fit in the 4-seater car (€95 from Paphos Airport); families or groups of 5–6 should book the 6-seater van (€120), and larger groups of up to 12 the 12-seater van (€160). Child seats are free.",
  },
  {
    q: "Where will the driver meet me at Paphos Airport?",
    a: "Inside the arrivals hall, holding a sign with your name. Up to 60 minutes of waiting after landing is free, and we track your flight, so delays never cost extra.",
  },
  {
    q: "Do you pick up from late-night flights?",
    a: "Yes — we operate 24/7, and a night-time transfer to Polis or Latchi costs exactly the same fixed price. Your driver tracks your flight and waits for you even if it lands late.",
  },
];

export const Route = createFileRoute("/taxi-to-polis-latchi")({
  head: () => ({
    meta: [
      { title: "Paphos Airport to Polis & Latchi Taxi – Fixed €95 | Taxi Cyprus 24" },
      {
        name: "description",
        content:
          "Taxi from Paphos Airport to Polis and Latchi at a fixed €95 (4 seats) or €120 (6 seats); from Larnaca Airport €200. Door-to-door, meet & greet, 24/7.",
      },
      { property: "og:title", content: "Paphos Airport to Polis & Latchi Taxi – Fixed €95" },
      {
        property: "og:description",
        content:
          "Private fixed-price taxi from Paphos Airport to Polis Chrysochous, Latchi harbour and the Akamas coast.",
      },
      { property: "og:image", content: polisLatchiImg },
      { name: "twitter:image", content: polisLatchiImg },
    ],
  }),
  component: () => (
    <TransferPage
      eyebrow="Paphos Airport to Polis & Latchi"
      title="Paphos Airport to Polis & Latchi Taxi Transfer"
      subtitle="Fixed-price private taxi from Paphos and Larnaca airports to Polis Chrysochous, Latchi and the villages of Chrysochou Bay — door-to-door, with meet & greet and free child seats."
      heroImage={heroImg}
      galleryImage={polisLatchiImg}
      defaultDropoff="Polis – Lachi"
      fromLocation="Paphos / Larnaca"
      toLocation="Polis & Latchi"
      duration="1h / 2h 15m"
      distance="50 km / 175 km"
      intro="Polis Chrysochous and the harbour village of Latchi sit on Chrysochou Bay in the far northwest of Cyprus, at the gateway to the Akamas Peninsula. The area is loved for its slower pace, long beaches, fish tavernas and boat trips along the Akamas coast. Taxicyprus24 offers a private taxi from Paphos Airport to Polis and Latchi at a fixed €95, with meet & greet, free child seats and drop-off at the door of your villa, hotel or apartment."
      bodyParagraphs={[
        "The transfer from Paphos Airport to Polis and Latchi takes approximately 1 hour and covers around 50 km. The road heads north past Paphos and crosses the hills of the Paphos countryside before dropping down to Chrysochou Bay — a scenic drive that is far easier in a private car than with luggage on public transport. Your driver takes you straight to the door, whether you are staying in Polis itself, in Latchi or in a villa in one of the surrounding villages.",
        "Latchi is a small fishing harbour around 2 km west of Polis, with a marina, seafront fish restaurants and boat trips along the Akamas coastline. A little further west along the coast road are the Baths of Aphrodite, a natural grotto pool linked to the legend of the goddess, and the start of walking trails into the Akamas Peninsula.",
        "Many visitors to the area stay in private villas in villages such as Neo Chorio, Prodromi and Argaka, or in holiday homes on the hillsides above the bay. Send us the address or a map pin when you book — rural addresses can be hard to find at night, and your driver will take you right to the door. For villages outside Polis and Latchi we confirm the fixed price in advance.",
        "From Paphos Airport the fixed prices to Polis and Latchi are €95 in a 4-seater car, €120 in a 6-seater van and €160 in a 12-seater van. From Larnaca Airport it is one of the longest transfers on the island — around 2 hours 15 minutes — at a fixed €200 in a 4-seater car or €250 in a 6-seater van, with no surcharge for night arrivals.",
        "Every Polis and Latchi transfer includes real-time flight tracking, up to 60 minutes of free waiting after landing, help with luggage, free baby and booster seats and bottled water on board. Families with beach gear or pushchairs can book the 6-seater or 12-seater van, and you can pay online by card, by bank transfer or in cash to the driver in EUR or GBP.",
      ]}
      highlights={[
        "Fixed €95 from Paphos Airport",
        "Door-to-door in Polis, Latchi & villages",
        "Drivers who know the rural roads",
        "Meet & greet in arrivals",
        "Free child & booster seats",
        "Vans for families and groups",
        "Same price for night flights",
      ]}
      prices={[
        {
          type: "Paphos Airport to Polis & Latchi (Sedan)",
          pax: "Up to 4 passengers",
          price: "€95",
        },
        {
          type: "Paphos Airport to Polis & Latchi (Van)",
          pax: "Up to 6 passengers",
          price: "€120",
        },
        {
          type: "Larnaca Airport to Polis & Latchi (Sedan)",
          pax: "Up to 4 passengers",
          price: "€200",
        },
        {
          type: "Larnaca Airport to Polis & Latchi (Van)",
          pax: "Up to 6 passengers",
          price: "€250",
        },
      ]}
      nearbyAreas={[
        "Latchi Harbour",
        "Polis Chrysochous",
        "Neo Chorio",
        "Prodromi",
        "Argaka",
        "Baths of Aphrodite",
        "Akamas Peninsula",
      ]}
      faqs={polisLatchiFAQs}
      relatedLinks={[
        { to: "/paphos-airport-transfers", label: "Paphos Airport Transfers" },
        { to: "/taxi-to-coral-bay", label: "Paphos Airport to Coral Bay" },
        { to: "/taxi-to-peyia", label: "Paphos Airport to Peyia" },
        { to: "/taxi-to-kissonerga", label: "Paphos Airport to Kissonerga" },
        { to: "/larnaca-airport-to-paphos", label: "Larnaca Airport to Paphos" },
      ]}
    />
  ),
});
