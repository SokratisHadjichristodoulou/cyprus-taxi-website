import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import aphroditeHillsImg from "@/assets/dest-coral-bay.jpg";
import { TransferPage } from "@/components/TransferPage";

const aphroditeHillsFAQs = [
  {
    q: "How much is a taxi from Paphos Airport to Aphrodite Hills?",
    a: "A private taxi from Paphos Airport to the InterContinental Aphrodite Hills costs a fixed €45 in a 4-seater car (up to 4 passengers), €60 in a 6-seater van and €80 in a 12-seater van. The price is per vehicle and includes meet & greet, flight tracking, luggage and free child seats.",
  },
  {
    q: "How much is a taxi from Larnaca Airport to Aphrodite Hills?",
    a: "From Larnaca Airport the fixed price to the InterContinental Aphrodite Hills is €130 in a 4-seater car, €180 in a 6-seater van and €240 in a 12-seater van. The drive takes around 1 hour 15 minutes.",
  },
  {
    q: "How long does the transfer from Paphos Airport to Aphrodite Hills take?",
    a: "Approximately 20 minutes via the A6 motorway, depending on traffic and where in the resort you are staying.",
  },
  {
    q: "Is the price the same for villas and apartments in the resort?",
    a: "Our listed fixed price is for the InterContinental Aphrodite Hills Resort Hotel. For private villas and apartments elsewhere in Aphrodite Hills, send us the address when you book and we will confirm your fixed price before you travel.",
  },
  {
    q: "Can you carry golf bags?",
    a: "Yes. Let us know how many golf bags you are bringing when you book. For groups with clubs and suitcases, the 6-seater van (€60 from Paphos Airport) or the 12-seater van (€80) gives you more space.",
  },
  {
    q: "Can I book a return transfer from Aphrodite Hills to Paphos Airport?",
    a: "Yes. The return trip from Aphrodite Hills to Paphos Airport costs the same fixed price, and we pick you up from the hotel entrance or your villa at the agreed time.",
  },
  {
    q: "Where will my driver meet me at Paphos Airport?",
    a: "In the arrivals hall, with a sign showing your name. Up to 60 minutes of waiting after landing is free and we track your flight, so a delay never costs extra.",
  },
  {
    q: "Can you also take us to Petra tou Romiou or other sights?",
    a: "Yes — as well as airport transfers we offer hourly hire and private day trips around Cyprus. Contact us with your plans for a custom quote.",
  },
];

export const Route = createFileRoute("/taxi-to-aphrodite-hills")({
  head: () => ({
    meta: [
      { title: "Paphos Airport to Aphrodite Hills Taxi – Fixed €45 | Taxi Cyprus 24" },
      {
        name: "description",
        content:
          "Taxi from Paphos Airport to Aphrodite Hills (InterContinental) at a fixed €45 (4 seats) or €60 (6 seats); from Larnaca Airport €130. Meet & greet, 24/7.",
      },
      { property: "og:title", content: "Paphos Airport to Aphrodite Hills Taxi – Fixed €45" },
      {
        property: "og:description",
        content:
          "Private fixed-price taxi from Paphos and Larnaca airports to the InterContinental Aphrodite Hills resort.",
      },
      { property: "og:image", content: aphroditeHillsImg },
      { name: "twitter:image", content: aphroditeHillsImg },
    ],
  }),
  component: () => (
    <TransferPage
      eyebrow="Paphos Airport to Aphrodite Hills"
      title="Paphos Airport to Aphrodite Hills Taxi Transfer"
      subtitle="Fixed-price private taxi from Paphos and Larnaca airports to the InterContinental Aphrodite Hills and the resort's villas and apartments — with meet & greet and free child seats."
      heroImage={heroImg}
      galleryImage={aphroditeHillsImg}
      defaultDropoff="Intercontinental Hotel (Aphrodite Hills)"
      fromLocation="Paphos / Larnaca"
      toLocation="Aphrodite Hills"
      duration="20 min / 1h 15m"
      distance="20 km / 120 km"
      intro="Aphrodite Hills is a resort on the hills above the coast between Paphos and Limassol, home to the five-star InterContinental Aphrodite Hills Resort Hotel, an 18-hole golf course, villas and apartments. It is one of the closest resorts to Paphos International Airport. Taxicyprus24 offers a private taxi from Paphos Airport to the InterContinental Aphrodite Hills at a fixed €45, with your driver waiting in arrivals, help with luggage and golf bags, and free child seats."
      bodyParagraphs={[
        "The drive from Paphos Airport to Aphrodite Hills takes approximately 20 minutes and covers around 20 km, heading east along the A6 motorway towards Limassol before turning up to the resort. Your driver drops you at the hotel entrance or at the door of your villa or apartment, so there is no queue at the taxi rank and no wait for a shuttle after your flight.",
        "Our fixed price of €45 in a 4-seater car (€60 in a 6-seater van, €80 in a 12-seater van) covers the InterContinental Aphrodite Hills Resort Hotel. Staying in one of the resort's private villas or apartments? Send us the address when you book and we will confirm the fixed price for your exact drop-off point before you travel.",
        "If you are coming to play golf, tell us how many golf bags you are bringing when you book — the 6-seater and 12-seater vans give groups more room for clubs, suitcases and pushchairs. Families can also request free baby seats, child seats and boosters for every child, fitted before you get in the car.",
        "The resort sits close to some of the best-known sights on this stretch of coast. Petra tou Romiou, the sea stack known as Aphrodite's Rock and said to be the birthplace of the goddess, is a few minutes' drive along the coast, and the village of Kouklia with the ancient Sanctuary of Aphrodite is nearby. Kato Paphos, with its harbour and archaeological park, is around 25 minutes away.",
        "From Larnaca Airport the transfer to Aphrodite Hills takes around 1 hour 15 minutes and costs a fixed €130 in a 4-seater car or €180 in a 6-seater van. All transfers include real-time flight tracking, up to 60 minutes of free waiting after landing and payment by card, bank transfer or cash in EUR or GBP.",
      ]}
      highlights={[
        "Fixed €45 to the InterContinental",
        "Around 20 minutes from Paphos Airport",
        "Door-to-door to hotel, villas & apartments",
        "Vans for golf groups & families",
        "Meet & greet in arrivals",
        "Free child & booster seats",
        "24/7 at the same fixed price",
      ]}
      prices={[
        {
          type: "Paphos Airport to Aphrodite Hills (Sedan)",
          pax: "Up to 4 passengers",
          price: "€45",
        },
        {
          type: "Paphos Airport to Aphrodite Hills (Van)",
          pax: "Up to 6 passengers",
          price: "€60",
        },
        {
          type: "Larnaca Airport to Aphrodite Hills (Sedan)",
          pax: "Up to 4 passengers",
          price: "€130",
        },
        {
          type: "Larnaca Airport to Aphrodite Hills (Van)",
          pax: "Up to 6 passengers",
          price: "€180",
        },
      ]}
      nearbyAreas={[
        "InterContinental Aphrodite Hills",
        "Aphrodite Hills golf course",
        "Petra tou Romiou",
        "Kouklia",
        "Sanctuary of Aphrodite",
        "Pissouri",
      ]}
      faqs={aphroditeHillsFAQs}
      relatedLinks={[
        { to: "/paphos-airport-transfers", label: "Paphos Airport Transfers" },
        { to: "/taxi-to-pissouri", label: "Paphos Airport to Pissouri" },
        { to: "/taxi-to-limassol", label: "Paphos Airport to Limassol" },
        { to: "/taxi-to-kato-paphos", label: "Paphos Airport to Kato Paphos" },
        { to: "/larnaca-airport-to-paphos", label: "Larnaca Airport to Paphos" },
      ]}
    />
  ),
});
