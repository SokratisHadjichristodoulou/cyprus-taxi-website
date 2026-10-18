import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import pissouriImg from "@/assets/dest-coral-bay.jpg";
import { TransferPage } from "@/components/TransferPage";

const pissouriFAQs = [
  {
    q: "How much is a taxi from Paphos Airport to Pissouri?",
    a: "A private taxi from Paphos Airport to Pissouri costs a fixed €60 in a 4-seater car (up to 4 passengers), €80 in a 6-seater van and €120 in a 12-seater van. The price is per vehicle and includes meet & greet, flight tracking, luggage and free child seats.",
  },
  {
    q: "How much is a taxi from Larnaca Airport to Pissouri?",
    a: "From Larnaca Airport the fixed price to Pissouri is €130 in a 4-seater car, €180 in a 6-seater van and €240 in a 12-seater van.",
  },
  {
    q: "Which airport is closer to Pissouri?",
    a: "Paphos Airport. The transfer from Paphos Airport to Pissouri takes approximately 30 minutes, compared with around 1 hour 10 minutes from Larnaca Airport — and we cover both at fixed prices.",
  },
  {
    q: "Do you drop off in Pissouri Bay and in the old village?",
    a: "Yes. We drive to hotels and apartments in Pissouri Bay, to houses in the old village and to villas on the hillside in between. Send us your address or a map pin when you book.",
  },
  {
    q: "Can I book a return transfer from Pissouri to Paphos Airport?",
    a: "Yes. The return trip from Pissouri to Paphos Airport costs the same fixed price, and we time the pickup from your accommodation around your flight.",
  },
  {
    q: "Is the price per person or per vehicle?",
    a: "Per vehicle: €60 covers up to 4 passengers, €80 up to 6 and €120 up to 12, so the price per person falls as your group gets bigger.",
  },
  {
    q: "What if my flight to Paphos is delayed?",
    a: "We track your flight in real time and your driver waits for the actual landing time. Delays never cost extra, and up to 60 minutes of waiting after landing is free.",
  },
  {
    q: "Can you also drive us around the coast during our stay?",
    a: "Yes — as well as airport transfers we offer hourly hire and private day trips, for example to Limassol or along the coast. Contact us with your plans for a quote.",
  },
];

export const Route = createFileRoute("/taxi-to-pissouri")({
  head: () => ({
    meta: [
      { title: "Paphos Airport to Pissouri Taxi – Fixed €60 | Taxi Cyprus 24" },
      {
        name: "description",
        content:
          "Taxi from Paphos Airport to Pissouri village and Pissouri Bay at a fixed €60 (4 seats) or €80 (6 seats); from Larnaca Airport €130. Meet & greet, 24/7.",
      },
      { property: "og:title", content: "Paphos Airport to Pissouri Taxi – Fixed €60" },
      {
        property: "og:description",
        content:
          "Private fixed-price taxi from Paphos and Larnaca airports to Pissouri village, Pissouri Bay and nearby villas.",
      },
      { property: "og:image", content: pissouriImg },
      { name: "twitter:image", content: pissouriImg },
    ],
  }),
  component: () => (
    <TransferPage
      eyebrow="Paphos Airport to Pissouri"
      title="Paphos Airport to Pissouri Taxi Transfer"
      subtitle="Fixed-price private taxi from Paphos and Larnaca airports to Pissouri Bay and Pissouri village — door-to-door, with meet & greet and free child seats."
      heroImage={heroImg}
      galleryImage={pissouriImg}
      defaultDropoff="Pissouri"
      fromLocation="Paphos / Larnaca"
      toLocation="Pissouri"
      duration="30 min / 1h 10m"
      distance="35 km / 100 km"
      intro="Pissouri is a village on the coast between Paphos and Limassol, in two parts: the traditional old village on the hillside, with its square and tavernas, and Pissouri Bay below, with a long beach, hotels and holiday apartments. Taxicyprus24 offers a private taxi from Paphos Airport to Pissouri at a fixed €60 — about 30 minutes along the A6 motorway — with meet & greet, free child seats and drop-off at your door."
      bodyParagraphs={[
        "Although Pissouri belongs to the Limassol district, Paphos Airport is the nearer airport for most visitors. The transfer takes approximately 30 minutes and covers around 35 km: east along the A6 motorway past Aphrodite Hills, then down to the bay or up into the village depending on where you are staying. Many visitors rent villas and apartments on the hillside between the two, and your driver will take you to the exact address.",
        "Pissouri Bay is known for its long beach and seafront tavernas, while the old village above is known for its main square, tavernas and views over the coast. The white cliffs of Cape Aspro rise to the west of the bay, and Petra tou Romiou (Aphrodite's Rock) is a short drive further along the old coast road towards Paphos.",
        "Fixed prices from Paphos Airport to Pissouri are €60 in a 4-seater car, €80 in a 6-seater van and €120 in a 12-seater van. From Larnaca Airport the fixed price is €130 in a 4-seater car and €180 in a 6-seater van, for a journey of around 1 hour 10 minutes. The price is per vehicle and never changes for night flights or delays.",
        "Pissouri is also a good base for exploring the southwest coast. Limassol is around 30 minutes to the east, and the ancient site of Kourion sits on the cliffs above Episkopi on the way. If you would like to explore, we also offer hourly hire and private day trips — ask us for a quote.",
        "Every transfer includes real-time flight tracking, up to 60 minutes of free waiting after landing, help with luggage, free baby and booster seats and payment by card, bank transfer or cash in EUR or GBP. Booking takes a couple of minutes online, on WhatsApp or by phone, and you receive a fast confirmation with your fixed price.",
      ]}
      highlights={[
        "Fixed €60 from Paphos Airport",
        "About 30 minutes via the A6",
        "Pissouri Bay and village drop-offs",
        "Meet & greet in arrivals",
        "Free child & booster seats",
        "Vans for families and groups",
        "24/7, same price at night",
      ]}
      prices={[
        { type: "Paphos Airport to Pissouri (Sedan)", pax: "Up to 4 passengers", price: "€60" },
        { type: "Paphos Airport to Pissouri (Van)", pax: "Up to 6 passengers", price: "€80" },
        { type: "Larnaca Airport to Pissouri (Sedan)", pax: "Up to 4 passengers", price: "€130" },
        { type: "Larnaca Airport to Pissouri (Van)", pax: "Up to 6 passengers", price: "€180" },
      ]}
      nearbyAreas={[
        "Pissouri Bay",
        "Pissouri village",
        "Cape Aspro",
        "Petra tou Romiou",
        "Aphrodite Hills",
        "Kourion",
      ]}
      faqs={pissouriFAQs}
      relatedLinks={[
        { to: "/paphos-airport-transfers", label: "Paphos Airport Transfers" },
        { to: "/taxi-to-aphrodite-hills", label: "Paphos Airport to Aphrodite Hills" },
        { to: "/taxi-to-limassol", label: "Paphos Airport to Limassol" },
        { to: "/taxi-to-kato-paphos", label: "Paphos Airport to Kato Paphos" },
        { to: "/larnaca-airport-to-paphos", label: "Larnaca Airport to Paphos" },
      ]}
    />
  ),
});
