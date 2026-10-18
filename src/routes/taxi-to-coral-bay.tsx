import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import coralBayImg from "@/assets/dest-coral-bay.jpg";
import { TransferPage } from "@/components/TransferPage";

const coralBayFAQs = [
  {
    q: "How much is a taxi from Paphos Airport to Coral Bay?",
    a: "A private taxi from Paphos Airport to Coral Bay costs a fixed €65 in a 4-seater car (up to 4 passengers), €85 in a 6-seater van and €120 in a 12-seater van. The price is per vehicle, not per person, and includes meet & greet, flight tracking, luggage and free child seats.",
  },
  {
    q: "How much is a taxi from Larnaca Airport to Coral Bay?",
    a: "From Larnaca Airport the fixed price to Coral Bay is €170 in a 4-seater car, €200 in a 6-seater van and €270 in a 12-seater van. Meet & greet and flight tracking are included — no hidden fees.",
  },
  {
    q: "How long is the transfer from Paphos Airport to Coral Bay?",
    a: "Around 25–30 minutes, depending on traffic and where in Coral Bay you are staying. From Larnaca Airport, allow about 1 hour 40 minutes via the A6 motorway.",
  },
  {
    q: "Can I book a return transfer from Coral Bay to Paphos Airport?",
    a: "Yes. The return trip from Coral Bay to Paphos Airport costs the same fixed price as the arrival transfer, and the same applies to Larnaca Airport. Book both legs together and we will agree a pickup time that gets you to the airport in good time for your flight.",
  },
  {
    q: "Do you drop off at hotels and villas in Coral Bay?",
    a: "Yes — every transfer is door-to-door. We take you to Coral Bay hotels such as Coral Beach Hotel & Resort, to holiday apartments and to private villas in Coral Bay and on the Peyia hillside. Send us the address or a map pin when you book.",
  },
  {
    q: "Where will the driver meet me at Paphos Airport?",
    a: "Your driver waits in the arrivals hall with a name sign, helps with your luggage and walks you to the car. Up to 60 minutes of waiting after landing is free, and we track your flight, so a delay never costs extra.",
  },
  {
    q: "Which vehicle do I need for a family or group going to Coral Bay?",
    a: "Up to 4 passengers travel in the 4-seater car (€65 from Paphos Airport), 5–6 passengers in the 6-seater van (€85) and groups of 7–12 in the 12-seater van (€120). Baby, child and booster seats are free — just tell us the children's ages.",
  },
  {
    q: "Is the Coral Bay transfer available at night?",
    a: "Yes. We operate 24/7, so late-night and early-morning flights are covered at the same fixed price — there is no night surcharge.",
  },
];

export const Route = createFileRoute("/taxi-to-coral-bay")({
  head: () => ({
    meta: [
      { title: "Paphos Airport to Coral Bay Taxi – Fixed €65 | Taxi Cyprus 24" },
      {
        name: "description",
        content:
          "Taxi from Paphos Airport to Coral Bay at a fixed €65 (4 seats) or €85 (6 seats); from Larnaca Airport €170. Meet & greet, free child seats, 24/7.",
      },
      { property: "og:title", content: "Paphos Airport to Coral Bay Taxi – Fixed €65" },
      {
        property: "og:description",
        content:
          "Private fixed-price taxi from Paphos Airport and Larnaca Airport to Coral Bay, Cyprus.",
      },
      { property: "og:image", content: coralBayImg },
      { name: "twitter:image", content: coralBayImg },
    ],
  }),
  component: () => (
    <TransferPage
      eyebrow="Airport to Coral Bay"
      title="Paphos Airport to Coral Bay Taxi Transfer"
      subtitle="Fixed-price airport transfers to Coral Bay from Paphos and Larnaca airports. Private Mercedes-Benz, meet & greet, free child seats."
      heroImage={heroImg}
      galleryImage={coralBayImg}
      defaultDropoff="Coral Bay"
      fromLocation="Paphos / Larnaca"
      toLocation="Coral Bay"
      duration="25 min / 1h 40m"
      distance="25 km / 150 km"
      intro="Coral Bay is one of the most popular beach resorts in Cyprus, known for its turquoise water, sandy beaches, luxury villas, and family-friendly hotels. Taxicyprus24 provides reliable private airport transfers from/to Paphos and across Cyprus to Coral Bay from both Paphos Airport and Larnaca Airport with fixed prices, professional drivers, and 24/7 service."
      bodyParagraphs={[
        "Avoid long taxi queues, crowded shuttle buses, and shared rides. Our private Coral Bay airport taxi service offers direct door-to-door transfers to your hotel, villa, apartment, or resort anywhere in the Coral Bay area.",
        "From Paphos Airport, Coral Bay is approximately 25 minutes away along the scenic coastal road. Transfers from Larnaca Airport to Coral Bay usually take around 1 hour 40 minutes via the A6 motorway.",
        "We provide airport transfers to all major Coral Bay hotels and accommodations, including Coral Beach Hotel & Resort, Mayfair Hotel, Corallia Beach Hotel, Coral Star Apartments, and private holiday villas throughout Coral Bay, Peyia, and the surrounding Paphos region.",
        "Every Coral Bay airport transfer includes fixed-price taxi rates with no hidden fees, meet & greet at the airport, flight monitoring for delayed arrivals, free baby and child seats, comfortable air-conditioned vehicles, and payment by card, bank transfer, or cash in EUR or GBP.",
        "Whether you need a taxi from Paphos Airport to Coral Bay or a private transfer from Larnaca Airport to Coral Bay, Taxicyprus24 guarantees safe, comfortable, and stress-free travel across Cyprus.",
      ]}
      highlights={["Direct to your Coral Bay hotel", "Clean and Luxury cars", "Fixed price guarantee", "Free child seats", "24/7 night arrivals", "Meet & greet included"]}
      prices={[
        { type: "Paphos Airport to Coral Bay (Sedan)", pax: "Up to 4 passengers", price: "€65" },
        { type: "Paphos Airport to Coral Bay (Van)", pax: "Up to 6 passengers", price: "€85" },
        { type: "Larnaca Airport to Coral Bay (Sedan)", pax: "Up to 4 passengers", price: "€170" },
        { type: "Larnaca Airport to Coral Bay (Van)", pax: "Up to 6 passengers", price: "€200" },
      ]}
      nearbyAreas={["Coral Beach Hotel", "Mayfair Coral Bay", "Corallia Beach", "Akamas Peninsula", "Sea Caves", "Peyia"]}
      faqs={coralBayFAQs}
      relatedLinks={[
        { to: "/taxi-to-peyia", label: "Taxi to Peyia" },
        { to: "/taxi-to-chloraka", label: "Taxi to Chloraka" },
        { to: "/paphos-airport-transfers", label: "Paphos Airport Transfers" },
      ]}
    />
  ),
});
