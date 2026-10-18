import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import limassolImg from "@/assets/dest-limassol.jpg";
import { TransferPage } from "@/components/TransferPage";

const limassolFAQs = [
  {
    q: "How much is a taxi from Paphos Airport to Limassol?",
    a: "A private taxi from Paphos Airport to Limassol costs a fixed €90 in a 4-seater car (up to 4 passengers), €120 in a 6-seater van and €160 in a 12-seater van. The price is per vehicle and includes meet & greet, flight tracking, luggage and free child seats.",
  },
  {
    q: "How long is the drive from Paphos Airport to Limassol?",
    a: "Usually around 50 minutes via the A6 motorway, depending on traffic and where in Limassol you are going.",
  },
  {
    q: "Can I book a return transfer from Limassol to Paphos Airport?",
    a: "Yes. The trip from Limassol back to Paphos Airport costs the same fixed price. Book it together with your arrival and we will plan the pickup time around your flight.",
  },
  {
    q: "Which parts of Limassol do you drop off in?",
    a: "All of them — including Limassol Marina, the Old Town, Germasogeia, the Amathus tourist area, Mouttagiaka and Pyrgos. We take you to the door of your hotel, apartment, villa or office.",
  },
  {
    q: "Is this transfer a good option for business travellers?",
    a: "Yes. Your driver tracks your flight, meets you in arrivals with a name sign and takes you straight to your hotel or office with no shared stops. Teams travelling together can book the 6-seater van (€120) or the 12-seater van (€160).",
  },
  {
    q: "Is the price per person?",
    a: "No — the fixed price is for the whole vehicle: €90 for up to 4 passengers, €120 for up to 6 and €160 for up to 12.",
  },
  {
    q: "What happens if my flight is delayed?",
    a: "Nothing changes for you. We monitor your flight in real time and your driver waits for your actual arrival — delays never cost extra.",
  },
  {
    q: "How do I pay for the Limassol transfer?",
    a: "Pay online by card, by bank transfer, or in cash to your driver in EUR or GBP.",
  },
];

export const Route = createFileRoute("/taxi-to-limassol")({
  head: () => ({
    meta: [
      { title: "Paphos Airport to Limassol Taxi – Fixed €90 | Taxi Cyprus 24" },
      {
        name: "description",
        content:
          "Taxi from Paphos Airport to Limassol at a fixed €90 (4 seats), €120 (6 seats) or €160 (12 seats). About 50 minutes via the A6, meet & greet, 24/7.",
      },
      { property: "og:title", content: "Paphos Airport to Limassol Taxi – Fixed €90" },
      {
        property: "og:description",
        content:
          "Private fixed-price taxi from Paphos Airport to Limassol hotels, the marina and business districts.",
      },
      { property: "og:image", content: limassolImg },
      { name: "twitter:image", content: limassolImg },
    ],
  }),
  component: () => (
    <TransferPage
      eyebrow="Paphos Airport to Limassol"
      title="Paphos Airport to Limassol Taxi Transfer"
      subtitle="Fixed-price airport transfers to Limassol from Paphos Airport. Premium Clean and Luxury cars for business and leisure travellers."
      heroImage={heroImg}
      galleryImage={limassolImg}
      defaultDropoff="Limassol"
      fromLocation="Paphos"
      toLocation="Limassol"
      duration="50 min"
      distance="65 km"
      intro="Limassol is the second-largest city in Cyprus and one of the island's top destinations for business travel, luxury resorts, beaches, and marina lifestyle. Taxicyprus24 provides reliable private transfers from/to Paphos and Limassol with fixed prices, professional drivers, and 24/7 service across Cyprus."
      bodyParagraphs={[
        "Our private Limassol airport taxi service offers direct door-to-door transfers to hotels, marina apartments, business centres, villas, and beachfront resorts — with no waiting, no shared rides, and no hidden fees.",
        "From Paphos Airport to Limassol the journey usually takes around 50 minutes via the A6 motorway.",
        "We cover all Limassol areas including Limassol Marina, Old Town Limassol, Germasogeia, Amathus tourist area, Mouttagiaka, and Pyrgos. Business travellers and VIP guests can also pre-book a 6-seater Mercedes van for executive travel and group transfers across Cyprus.",
        "Every Limassol airport transfer includes fixed-price taxi rates, meet & greet at the airport, real-time flight tracking, free baby and child seats, air-conditioned Mercedes vehicles, and card, bank transfer, or cash payment options in EUR or GBP.",
        "Whether you need a private taxi from Paphos Airport to Limassol or executive chauffeur service in Cyprus, Taxicyprus24 guarantees comfortable, professional, and stress-free travel.",
      ]}
      highlights={["Direct to Limassol hotel or marina", "Premium Mercedes-Benz", "Ideal for business travellers", "Fixed price guarantee", "Meet & greet at airport", "24/7 service"]}
      prices={[
        { type: "Paphos Airport to Limassol (Sedan)", pax: "Up to 4 passengers", price: "€90" },
        { type: "Paphos Airport to Limassol (Van)", pax: "Up to 6 passengers", price: "€120" },
      ]}
      nearbyAreas={["Limassol Marina", "Limassol Old Town", "Germasogeia", "Amathus", "Mouttagiaka", "Pissouri", "Governor's Beach"]}
      faqs={limassolFAQs}
      relatedLinks={[
        { to: "/paphos-airport-transfers", label: "Paphos Airport Transfers" },
        { to: "/cyprus-airport-transfers", label: "All Routes" },
      ]}
    />
  ),
});
