import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import katoPaphosImg from "@/assets/dest-paphos.jpg";
import { TransferPage } from "@/components/TransferPage";

const katoPaphosFAQs = [
  {
    q: "How much is a taxi from Paphos Airport to Kato Paphos?",
    a: "A private taxi from Paphos Airport to Kato Paphos or Paphos town costs a fixed €35 in a 4-seater car (up to 4 passengers), €50 in a 6-seater van and €80 in a 12-seater van. The price is per vehicle and includes meet & greet, flight tracking, luggage and free child seats.",
  },
  {
    q: "How long does it take to get from Paphos Airport to Kato Paphos?",
    a: "Approximately 20 minutes in normal traffic — the airport is only around 15 km from the Kato Paphos seafront. Allow a few minutes more for hotels at the northern end of the promenade.",
  },
  {
    q: "How much is a taxi to the Tomb of the Kings area?",
    a: "Hotels and apartments around the Tombs of the Kings have their own fixed price from Paphos Airport: €40 in a 4-seater car, €50 in a 6-seater van and €80 in a 12-seater van.",
  },
  {
    q: "Can I book a return transfer from Kato Paphos to Paphos Airport?",
    a: "Yes. The return trip from Kato Paphos to Paphos Airport costs the same fixed price as the arrival transfer. Tell us your flight time and we will suggest a pickup time from your hotel that gets you to the airport comfortably.",
  },
  {
    q: "Do you also drive to Kamares and Tsada?",
    a: "Yes. Villas in the hills above Paphos are covered at fixed prices from Paphos Airport: Kamares €55 and Tsada €60 in a 4-seater car, €70 in a 6-seater van and €90 in a 12-seater van for either village.",
  },
  {
    q: "How much is a taxi from Larnaca Airport to Paphos town?",
    a: "From Larnaca Airport to Paphos town the fixed price is €140 in a 4-seater car, €180 in a 6-seater van and €240 in a 12-seater van. The journey takes about 1 hour 30 minutes.",
  },
  {
    q: "Where does the driver meet me at Paphos Airport?",
    a: "Inside the arrivals hall, holding a sign with your name. Up to 60 minutes of waiting after landing is free, and we track your flight so delays never cost extra.",
  },
  {
    q: "Is a taxi to Kato Paphos available for late-night flights?",
    a: "Yes. We operate 24/7 and late-night or early-morning arrivals are charged at the same fixed price, with no night surcharge.",
  },
];

export const Route = createFileRoute("/taxi-to-kato-paphos")({
  head: () => ({
    meta: [
      { title: "Paphos Airport to Kato Paphos Taxi – Fixed €35 | Taxi Cyprus 24" },
      {
        name: "description",
        content:
          "Taxi from Paphos Airport to Kato Paphos and Paphos town at a fixed €35 (4 seats) or €50 (6 seats); Larnaca Airport to Paphos town €140. Meet & greet, 24/7.",
      },
      { property: "og:title", content: "Paphos Airport to Kato Paphos Taxi – Fixed €35" },
      {
        property: "og:description",
        content:
          "Private fixed-price taxi from Paphos Airport to Kato Paphos hotels, the harbour and Paphos town.",
      },
      { property: "og:image", content: katoPaphosImg },
      { name: "twitter:image", content: katoPaphosImg },
    ],
  }),
  component: () => (
    <TransferPage
      eyebrow="Paphos Airport to Kato Paphos"
      title="Paphos Airport to Kato Paphos Taxi Transfer"
      subtitle="Fixed-price taxi from Paphos Airport to your hotel or apartment in Kato Paphos and Paphos town — about 20 minutes, with meet & greet and free child seats."
      heroImage={heroImg}
      galleryImage={katoPaphosImg}
      defaultDropoff="Paphos Town / Kato Paphos"
      fromLocation="Paphos / Larnaca"
      toLocation="Kato Paphos"
      duration="20 min / 1h 30m"
      distance="15 km / 140 km"
      intro="Kato Paphos is the seafront heart of Paphos: the harbour with its medieval fort, the UNESCO-listed Paphos Archaeological Park and a long promenade lined with hotels, cafés and restaurants. It is also one of the closest resort areas to Paphos International Airport. Taxicyprus24 offers a private fixed-price taxi from Paphos Airport to Kato Paphos from €35, with a driver waiting in arrivals, free child seats and door-to-door drop-off at your hotel, apartment or villa — day or night."
      bodyParagraphs={[
        "The drive from Paphos Airport to Kato Paphos is short — approximately 20 minutes and around 15 km — following the coast road past Geroskipou into Paphos. It is an easy first transfer after a flight, and your driver can drop you at the main door of a seafront hotel, at an apartment block in a side street or at a holiday villa on the edge of town. Night arrivals are charged at the same fixed price.",
        "Most Kato Paphos hotels are spread along the seafront promenade between the harbour and the Tombs of the Kings, so it helps to give us the hotel name or address when you book. Hotels in the Tomb of the Kings area, a little further north along the coast, have their own fixed price from Paphos Airport: €40 in a 4-seater car and €50 in a 6-seater van.",
        "Kato Paphos is easy to enjoy on foot once you arrive. Paphos Harbour and the medieval Paphos Castle are at the southern end of the promenade, next to the Paphos Archaeological Park with its Roman mosaics and ancient odeon. Further north, the Tombs of the Kings is a large ancient necropolis cut into the rock. The upper town (Ktima), with the municipal market and old quarter, is a short drive up the hill.",
        "Staying outside the town centre? Many holiday villas are in the hills above Paphos, and we drive there at fixed prices too: Kamares from €55 and Tsada from €60 in a 4-seater car, or €70 for either in a 6-seater van. Along the coast to the north, Chloraka, Kissonerga, Coral Bay and Peyia each have their own transfer page with full prices.",
        "Arriving at Larnaca Airport instead? A private taxi from Larnaca Airport to Paphos town costs €140 in a 4-seater car and €180 in a 6-seater van and takes about 1 hour 30 minutes via the motorway. Every transfer includes meet & greet, flight tracking, free child seats and payment by card, bank transfer or cash in EUR or GBP.",
      ]}
      highlights={[
        "Fixed €35 from Paphos Airport",
        "About 20 minutes to Kato Paphos",
        "Door-to-door to hotels & apartments",
        "Tomb of the Kings area from €40",
        "Meet & greet in arrivals",
        "Free child & booster seats",
        "Same price for night flights",
        "Pay by card, bank transfer or cash",
      ]}
      prices={[
        { type: "Paphos Airport to Kato Paphos (Sedan)", pax: "Up to 4 passengers", price: "€35" },
        { type: "Paphos Airport to Kato Paphos (Van)", pax: "Up to 6 passengers", price: "€50" },
        {
          type: "Paphos Airport to Tomb of the Kings (Sedan)",
          pax: "Up to 4 passengers",
          price: "€40",
        },
        {
          type: "Paphos Airport to Tomb of the Kings (Van)",
          pax: "Up to 6 passengers",
          price: "€50",
        },
        {
          type: "Larnaca Airport to Paphos Town (Sedan)",
          pax: "Up to 4 passengers",
          price: "€140",
        },
        { type: "Larnaca Airport to Paphos Town (Van)", pax: "Up to 6 passengers", price: "€180" },
      ]}
      nearbyAreas={[
        "Paphos Harbour",
        "Paphos Castle",
        "Paphos Archaeological Park",
        "Tombs of the Kings",
        "Paphos Old Town (Ktima)",
        "Kamares",
        "Tsada",
        "Geroskipou",
      ]}
      faqs={katoPaphosFAQs}
      relatedLinks={[
        { to: "/paphos-airport-transfers", label: "Paphos Airport Transfers" },
        { to: "/taxi-to-chloraka", label: "Paphos Airport to Chloraka" },
        { to: "/taxi-to-kissonerga", label: "Paphos Airport to Kissonerga" },
        { to: "/taxi-to-coral-bay", label: "Paphos Airport to Coral Bay" },
        { to: "/larnaca-airport-to-paphos", label: "Larnaca Airport to Paphos" },
      ]}
    />
  ),
});
