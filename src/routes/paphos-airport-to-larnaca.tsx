import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import larnacaImg from "@/assets/dest-larnaca.jpg";
import { TransferPage } from "@/components/TransferPage";

const paphosToLarnacaFAQs = [
  {
    q: "How much is a taxi from Paphos Airport to Larnaca?",
    a: "A private taxi from Paphos Airport to Larnaca costs a fixed €140 in a 4-seater car (up to 4 passengers), €180 in a 6-seater van and €240 in a 12-seater van. The price is for the whole vehicle and includes meet & greet, flight tracking, luggage and free child seats.",
  },
  {
    q: "How long does it take to drive from Paphos Airport to Larnaca?",
    a: "Approximately 1 hour 30 minutes for the 140 km journey, almost all of it on the A6, A1 and A5 motorways.",
  },
  {
    q: "Can I book a taxi from Larnaca to Paphos Airport?",
    a: "Yes. The return direction — from Larnaca to Paphos Airport — costs the same fixed price. We will agree a pickup time that leaves plenty of margin for check-in at Paphos.",
  },
  {
    q: "Do you also drive from Larnaca Airport to Paphos?",
    a: "Yes. If you land at Larnaca Airport, our Larnaca Airport to Paphos transfer costs €140 in a 4-seater car and €180 in a 6-seater van, with your driver waiting in the Larnaca arrivals hall.",
  },
  {
    q: "Is the price per person?",
    a: "No. It is a fixed total for the vehicle: €140 for up to 4 passengers, €180 for up to 6 and €240 for up to 12.",
  },
  {
    q: "What happens if my flight to Paphos is delayed?",
    a: "Your driver tracks the flight in real time and waits for the actual landing time. Delays never cost extra, and up to 60 minutes of waiting after landing is free.",
  },
  {
    q: "Where in Larnaca can you drop me off?",
    a: "Anywhere in Larnaca: hotels on the Finikoudes seafront and Mackenzie Beach, the town centre, the marina area and residential addresses. Give us the full address when you book so we can confirm your fixed price.",
  },
  {
    q: "Can we travel at night?",
    a: "Yes. We operate 24/7, and late-night or early-morning transfers to Larnaca cost the same fixed price.",
  },
];

export const Route = createFileRoute("/paphos-airport-to-larnaca")({
  head: () => ({
    meta: [
      { title: "Paphos Airport to Larnaca Taxi – Fixed €140 | Taxi Cyprus 24" },
      {
        name: "description",
        content:
          "Taxi from Paphos Airport to Larnaca at a fixed €140 (4 seats), €180 (6 seats) or €240 (12 seats). About 1h 30m by motorway, meet & greet, 24/7.",
      },
      { property: "og:title", content: "Paphos Airport to Larnaca Taxi – Fixed €140" },
      {
        property: "og:description",
        content:
          "Private fixed-price taxi from Paphos Airport to Larnaca hotels, apartments and the seafront.",
      },
      { property: "og:image", content: larnacaImg },
      { name: "twitter:image", content: larnacaImg },
    ],
  }),
  component: () => (
    <TransferPage
      eyebrow="Paphos Airport to Larnaca"
      title="Paphos Airport to Larnaca Taxi Transfer"
      subtitle="Private fixed-price taxi from Paphos International Airport to Larnaca — about 1 hour 30 minutes by motorway, with meet & greet, flight tracking and free child seats."
      heroImage={heroImg}
      galleryImage={larnacaImg}
      defaultPickup="Paphos Airport"
      defaultDropoff="Larnaka"
      fromLocation="Paphos Airport"
      toLocation="Larnaca"
      duration="1h 30m"
      distance="140 km"
      intro="Flying into Paphos but staying in Larnaca? A private taxi is the simplest way across the island: no timetables and no hire-car paperwork after your flight — just a driver waiting for you in arrivals. Taxicyprus24 drives from Paphos International Airport to Larnaca at a fixed €140 in a 4-seater car, with meet & greet, real-time flight tracking, free child seats and drop-off at your hotel, apartment or home, at the same price day or night."
      bodyParagraphs={[
        "The drive from Paphos Airport to Larnaca covers around 140 km and takes approximately 1 hour 30 minutes, almost all of it on motorway: the A6 east to Limassol, then the A1 and the A5 towards Larnaca. It is the same distance as our popular Larnaca Airport to Paphos route, and a private car means no stops for other passengers along the way.",
        "Travellers take this route for many reasons: holidays split between the west and east of Cyprus, family visits, business meetings in Larnaca, or flights that land in Paphos while accommodation is booked near Larnaca. Whatever the reason, the fixed price stays the same — €140 in a 4-seater car, €180 in a 6-seater van and €240 in a 12-seater van — with no extra charge for night arrivals or flight delays.",
        "We drop off across Larnaca — hotels along the Finikoudes seafront and Mackenzie Beach, apartments in the town centre and around the marina, and residential addresses in the suburbs. Send us the full address when you book so we can confirm your fixed price and your driver can take you straight to the door.",
        "On a longer transfer like this, comfort matters. You travel in a clean, air-conditioned private vehicle reserved only for your group, with bottled water on board and room for your suitcases — the 6-seater and 12-seater vans suit families and groups with extra luggage.",
        "Need to go the other way? A taxi from Larnaca back to Paphos Airport costs the same fixed price, and our Larnaca Airport to Paphos transfer covers arrivals at Larnaca Airport. Every journey includes meet & greet, free baby and booster seats, help with luggage and payment by card, bank transfer or cash in EUR or GBP.",
      ]}
      highlights={[
        "Fixed €140 from Paphos Airport",
        "About 1h 30m by motorway",
        "Door-to-door anywhere in Larnaca",
        "Meet & greet in arrivals",
        "Flight tracking — delays cost nothing",
        "Free child & booster seats",
        "Vans for 6 and 12 passengers",
      ]}
      prices={[
        { type: "Paphos Airport to Larnaca (Sedan)", pax: "Up to 4 passengers", price: "€140" },
        { type: "Paphos Airport to Larnaca (Van)", pax: "Up to 6 passengers", price: "€180" },
      ]}
      nearbyAreas={[
        "Finikoudes seafront",
        "Mackenzie Beach",
        "Larnaca Marina",
        "Larnaca town centre",
        "Dhekelia Road",
        "Oroklini",
      ]}
      faqs={paphosToLarnacaFAQs}
      relatedLinks={[
        { to: "/paphos-airport-transfers", label: "Paphos Airport Transfers" },
        { to: "/paphos-airport-to-nicosia", label: "Paphos Airport to Nicosia" },
        { to: "/taxi-to-limassol", label: "Paphos Airport to Limassol" },
        { to: "/larnaca-airport-to-paphos", label: "Larnaca Airport to Paphos" },
        { to: "/larnaca-airport-transfers", label: "Larnaca Airport Transfers" },
      ]}
    />
  ),
});
