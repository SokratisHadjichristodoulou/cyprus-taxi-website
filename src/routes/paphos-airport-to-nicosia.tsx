import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import nicosiaImg from "@/assets/fleet-luxury.jpg";
import { TransferPage } from "@/components/TransferPage";

const paphosToNicosiaFAQs = [
  {
    q: "How much is a taxi from Paphos Airport to Nicosia?",
    a: "A private taxi from Paphos Airport to Nicosia costs a fixed €150 in a 4-seater car (up to 4 passengers), €180 in a 6-seater van and €240 in a 12-seater van. The price is per vehicle and includes meet & greet, flight tracking, luggage and free child seats.",
  },
  {
    q: "How long does the transfer from Paphos Airport to Nicosia take?",
    a: "Approximately 1 hour 50 minutes to 2 hours for the 150 km drive via the A6 and A1 motorways, depending on traffic in Nicosia.",
  },
  {
    q: "Can I book a taxi from Nicosia to Paphos Airport?",
    a: "Yes. The trip from Nicosia back to Paphos Airport costs the same fixed price. Tell us your flight time and we will agree a pickup time with a comfortable margin for check-in.",
  },
  {
    q: "Do you drop off at offices, universities and suburbs?",
    a: "Yes. We drive to hotels, offices, university campuses and homes across Nicosia, including Strovolos, Engomi, Lakatamia and Aglantzia. Send us the full address when you book.",
  },
  {
    q: "Is this a good option for business travel?",
    a: "Yes. The car is private, the price is agreed in advance, and your driver tracks your flight and meets you in arrivals with a name sign. Teams can book the 6-seater van (€180) or the 12-seater van (€240).",
  },
  {
    q: "Is the price per person?",
    a: "No — it is a fixed total for the vehicle: €150 for up to 4 passengers, €180 for up to 6 and €240 for up to 12.",
  },
  {
    q: "What if my flight lands late at night?",
    a: "No problem. We operate 24/7, late arrivals cost the same fixed price, and your driver waits for your actual landing time.",
  },
  {
    q: "How do I pay?",
    a: "Online by card, by bank transfer, or in cash to your driver at the end of the journey, in EUR or GBP.",
  },
];

export const Route = createFileRoute("/paphos-airport-to-nicosia")({
  head: () => ({
    meta: [
      { title: "Paphos Airport to Nicosia Taxi – Fixed €150 | Taxi Cyprus 24" },
      {
        name: "description",
        content:
          "Taxi from Paphos Airport to Nicosia at a fixed €150 (4 seats), €180 (6 seats) or €240 (12 seats). About 1h 50m–2h by motorway, meet & greet, 24/7.",
      },
      { property: "og:title", content: "Paphos Airport to Nicosia Taxi – Fixed €150" },
      {
        property: "og:description",
        content:
          "Private fixed-price taxi from Paphos Airport to Nicosia hotels, offices, universities and homes.",
      },
      { property: "og:image", content: nicosiaImg },
      { name: "twitter:image", content: nicosiaImg },
    ],
  }),
  component: () => (
    <TransferPage
      eyebrow="Paphos Airport to Nicosia"
      title="Paphos Airport to Nicosia Taxi Transfer"
      subtitle="Private fixed-price taxi from Paphos International Airport to Nicosia, the capital of Cyprus — about 1 hour 50 minutes to 2 hours by motorway, with meet & greet and free child seats."
      heroImage={heroImg}
      galleryImage={nicosiaImg}
      defaultPickup="Paphos Airport"
      defaultDropoff="Nicosia"
      fromLocation="Paphos Airport"
      toLocation="Nicosia"
      duration="1h 50m – 2h"
      distance="150 km"
      intro="Nicosia is the capital of Cyprus and its centre of business, government and higher education, set inland in the middle of the island. If your flight lands in Paphos, a private taxi takes you straight there — no timetables, and no long drive yourself after a flight. Taxicyprus24 offers a fixed-price taxi from Paphos Airport to Nicosia from €150, with a driver waiting in arrivals, flight tracking, free child seats and drop-off at your hotel, office or home."
      bodyParagraphs={[
        "The transfer from Paphos Airport to Nicosia covers around 150 km and takes approximately 1 hour 50 minutes to 2 hours, depending on traffic as you enter the city. The route follows the A6 motorway east to Limassol and then the A1 motorway north to Nicosia, so it is a smooth drive in a comfortable, air-conditioned car with time to rest after your flight.",
        "Business travellers use this route to reach ministries, embassies, banks and company offices in the capital, while students and staff travel to the universities and families visit relatives. Whatever brings you to Nicosia, the price is fixed in advance: €150 in a 4-seater car, €180 in a 6-seater van and €240 in a 12-seater van, with no surcharge for night arrivals or delays.",
        "We drop off anywhere in Nicosia and its suburbs — hotels in the centre, offices, university campuses and residential addresses in areas such as Strovolos, Engomi, Lakatamia and Aglantzia. Send us the full address when you book; for addresses outside the city we will confirm the fixed price in advance.",
        "Nicosia's old town lies within its 16th-century Venetian walls, with Ledra Street, museums, galleries and cafés within easy reach of many central hotels. If you have time between meetings, the Cyprus Museum and the narrow streets of the old town are well worth a visit.",
        "Going back? A taxi from Nicosia to Paphos Airport costs the same fixed price, and we will agree a pickup time that leaves a comfortable margin for check-in. Every transfer includes meet & greet, flight tracking, up to 60 minutes of free waiting after landing, free child seats and payment by card, bank transfer or cash in EUR or GBP.",
      ]}
      highlights={[
        "Fixed €150 from Paphos Airport",
        "About 1h 50m – 2h by motorway",
        "Door-to-door to hotels, offices & homes",
        "Ideal for business travellers",
        "Meet & greet in arrivals",
        "Flight tracking — delays cost nothing",
        "Free child & booster seats",
      ]}
      prices={[
        { type: "Paphos Airport to Nicosia (Sedan)", pax: "Up to 4 passengers", price: "€150" },
        { type: "Paphos Airport to Nicosia (Van)", pax: "Up to 6 passengers", price: "€180" },
      ]}
      nearbyAreas={[
        "Nicosia old town",
        "Ledra Street",
        "Strovolos",
        "Engomi",
        "Lakatamia",
        "Aglantzia",
        "University of Cyprus",
      ]}
      faqs={paphosToNicosiaFAQs}
      relatedLinks={[
        { to: "/paphos-airport-transfers", label: "Paphos Airport Transfers" },
        { to: "/paphos-airport-to-larnaca", label: "Paphos Airport to Larnaca" },
        { to: "/taxi-to-limassol", label: "Paphos Airport to Limassol" },
        { to: "/larnaca-airport-to-paphos", label: "Larnaca Airport to Paphos" },
      ]}
    />
  ),
});
