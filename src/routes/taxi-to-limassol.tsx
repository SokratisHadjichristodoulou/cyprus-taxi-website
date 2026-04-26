import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import limassolImg from "@/assets/dest-limassol.jpg";
import { TransferPage } from "@/components/TransferPage";
import { sharedFAQs } from "@/lib/faqs";

export const Route = createFileRoute("/taxi-to-limassol")({
  head: () => ({
    meta: [
      { title: "Taxi to Limassol — Paphos Airport Transfer from €90 | Taxi Cyprus 24" },
      { name: "description", content: "Private taxi to Limassol from Paphos Airport (€90). Fixed price, Mercedes-Benz, meet & greet, 24/7." },
      { property: "og:title", content: "Limassol Airport Transfer from €90" },
      { property: "og:description", content: "Private fixed-price airport taxi to Limassol, Cyprus." },
      { property: "og:image", content: limassolImg },
      { name: "twitter:image", content: limassolImg },
      { name: "keywords", content: "Limassol airport transfer, taxi to Limassol, Larnaca to Limassol taxi" },
    ],
  }),
  component: () => (
    <TransferPage
      eyebrow="Paphos Airport to Limassol"
      title="Private Taxi Transfer to Limassol"
      subtitle="Fixed-price airport transfers to Limassol from Paphos Airport. Premium Clean and Luxury cars for business and leisure travellers."
      heroImage={heroImg}
      galleryImage={limassolImg}
      defaultDropoff="Limassol"
      fromLocation="Paphos"
      toLocation="Limassol"
      duration="50 min"
      distance="65 km"
      intro="Limassol is the second-largest city in Cyprus and one of the island's top destinations for business travel, luxury resorts, beaches, and marina lifestyle. Taxicyprus24 provides reliable private airport transfers to Limassol from Paphos Airport with fixed prices, professional drivers, and 24/7 service."
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
      faqs={sharedFAQs.slice(0, 6)}
      relatedLinks={[
        { to: "/paphos-airport-transfers", label: "Paphos Airport Transfers" },
        { to: "/cyprus-airport-transfers", label: "All Routes" },
      ]}
    />
  ),
});
