import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import chlorakaImg from "@/assets/dest-chloraka.jpg";
import { TransferPage } from "@/components/TransferPage";

const chlorakaFAQs = [
  {
    q: "How much is a taxi from Larnaca Airport to Chloraka?",
    a: "Taxicyprus24 offers fixed-price private transfers from Larnaca International Airport to Chloraka from €140 in a Mercedes E-Class sedan (up to 4 passengers) and from €180 in a 6-seater premium van. The price includes motorway tolls, luggage, free child seats, flight monitoring and meet & greet at the airport — no hidden fees.",
  },
  {
    q: "How much is a taxi from Paphos Airport to Chloraka?",
    a: "A private taxi from Paphos International Airport to Chloraka starts from €45 in a Mercedes E-Class sedan (up to 4 passengers) and from €60 in a 6-seater premium van. All Taxicyprus24 quotes are fixed and include tolls, luggage, free child seats and meet & greet — exactly the price you book is the price you pay.",
  },
  {
    q: "How long does the transfer to Chloraka take?",
    a: "From Paphos Airport to Chloraka the journey is approximately 25 minutes via the coastal road. From Larnaca Airport, the drive to Chloraka takes around 1 hour and 40 minutes via the A6 motorway, depending on traffic.",
  },
  {
    q: "Do you drop off at villas and private addresses in Chloraka?",
    a: "Yes — every Taxicyprus24 transfer is door-to-door. Our drivers deliver you directly to your villa, hotel or apartment in Chloraka, including Coralia Beach, Azia Resort, Aphrodite Beach Hotel and all residential streets in the village.",
  },
  {
    q: "Is meet & greet included for arrivals at Larnaca and Paphos airports?",
    a: "Yes. Your driver tracks your flight in real time and waits in the arrivals hall with a personalised name sign. There is no extra charge for meet & greet, flight monitoring or short delays — included in every Chloraka airport transfer.",
  },
  {
    q: "Can I book a return transfer from Chloraka to the airport?",
    a: "Absolutely. Most of our customers book both arrival and return transfers at the same time. Return transfers from Chloraka to Larnaca or Paphos Airport are at the same fixed price, with on-time pickup guaranteed for early-morning and late-night flights.",
  },
  {
    q: "Are child seats included for free?",
    a: "Yes — baby seats, child seats and booster seats are provided completely free for every Chloraka airport transfer. Just tell us the number of children and their ages when booking.",
  },
  {
    q: "How do I pay for my Chloraka transfer?",
    a: "You can pay securely online by credit or debit card, by bank transfer, or in cash to the driver at the end of the journey. Both EUR and GBP are accepted.",
  },
];

export const Route = createFileRoute("/taxi-to-chloraka")({
  head: () => ({
    meta: [
      {
        title:
          "Taxi to Chloraka from €45 — Larnaca & Paphos Airport Transfers | Taxi Cyprus 24",
      },
      {
        name: "description",
        content:
          "Fixed-price private taxi to Chloraka from Paphos Airport (€45) and Larnaca Airport (€140). Meet & greet, flight monitoring, free child seats, 24/7 booking.",
      },
      { property: "og:title", content: "Taxi to Chloraka from €45 — Cyprus Airport Transfers" },
      {
        property: "og:description",
        content:
          "Fixed-price private taxi transfers to Chloraka from Larnaca and Paphos airports. Book online in minutes.",
      },
      { property: "og:image", content: chlorakaImg },
      { name: "twitter:image", content: chlorakaImg },
      {
        name: "keywords",
        content:
          "Chloraka airport taxi, Larnaca airport to Chloraka, Paphos airport to Chloraka, Chloraka taxi transfer, taxi to Chloraka villa, Cyprus airport transfer Chloraka",
      },
    ],
  }),
  component: () => (
    <TransferPage
      eyebrow="Larnaca & Paphos airport to Chloraka"
      title="Private Taxi Transfer to Chloraka"
      subtitle="Fixed-price airport transfers from Larnaca and Paphos to Chloraka in a luxury Mercedes-Benz. Door-to-door, meet & greet, free child seats — book in minutes."
      heroImage={heroImg}
      galleryImage={chlorakaImg}
      defaultDropoff="Chloraka"
      fromLocation="Paphos / Larnaca"
      toLocation="Chloraka"
      duration="25 min / 1h 40m"
      distance="20 km / 150 km"
      intro="Looking for a private taxi to Chloraka from Larnaca or Paphos Airport? Taxicyprus24 offers fixed-price Cyprus airport transfers to Chloraka from only €45 in a Mercedes E-Class sedan and €60 in a premium 6-seater van. Our 24/7 service includes meet & greet, real-time flight monitoring, free child seats, professional English-speaking drivers and direct door-to-door delivery to your Chloraka villa, hotel or apartment — with no hidden fees."
      bodyParagraphs={[
        "Chloraka is a quiet seaside village just north of Paphos, popular with British and European holidaymakers thanks to its sandy beaches, family-friendly resorts and high-quality holiday villas. From Paphos International Airport, the drive to Chloraka takes about 25 minutes via the scenic coastal road. From Larnaca International Airport, the journey to Chloraka is approximately 135 km (around 1 hour and 40 minutes) via the A6 motorway.",
        "We serve every part of Chloraka — including the seafront resorts, the Saint George area, the village centre and the residential streets where most private holiday villas are located. Our Mercedes-Benz E-Class sedans and 7-seater premium vans are perfect for couples, families and groups travelling with luggage.",
        "Booking your Chloraka airport transfer with Taxicyprus24 is quick and easy: complete the online booking form, send us a message on WhatsApp at +357 96 626 844, or call our team. You'll receive a fast confirmation and a fixed total price with no hidden charges.",
      ]}
      highlights={[
        "Fixed-price Larnaca & Paphos to Chloraka",
        "Direct door-to-door to your villa or hotel",
        "Mercedes-Benz E-Class & 7-seater vans",
        "Free child & booster seats",
        "Meet & greet with name sign",
        "Real-time flight monitoring",
        "24/7 booking and arrivals",
        "Pay online, by card or cash",
      ]}
      prices={[
        { type: "Paphos Airport to Chloraka (Sedan)", pax: "Up to 4 passengers", price: "€45" },
        { type: "Paphos Airport to Chloraka (Van)", pax: "Up to 6 passengers", price: "€60" },
        { type: "Larnaca Airport to Chloraka (Sedan)", pax: "Up to 4 passengers", price: "€140" },
        { type: "Larnaca Airport to Chloraka (Van)", pax: "Up to 6 passengers", price: "€180" },
      ]}
      nearbyAreas={[
        "Kissonerga",
        "Lemba",
        "Kato Paphos",
        "Coral Bay",
        "Peyia",
        "Tombs of the Kings",
        "Saint George",
      ]}
      faqs={chlorakaFAQs}
      relatedLinks={[
        { to: "/taxi-to-coral-bay", label: "Taxi to Coral Bay" },
        { to: "/taxi-to-peyia", label: "Taxi to Peyia" },
        { to: "/paphos-airport-transfers", label: "Paphos Airport Transfers" },
        { to: "/larnaca-airport-transfers", label: "Larnaca Airport Transfers" },
        { to: "/larnaca-airport-to-paphos", label: "Larnaca Airport to Paphos" },
      ]}
    />
  ),
});
