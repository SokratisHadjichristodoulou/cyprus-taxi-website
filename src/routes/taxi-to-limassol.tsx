import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import limassolImg from "@/assets/dest-limassol.jpg";
import { TransferPage } from "@/components/TransferPage";
import { sharedFAQs } from "@/lib/faqs";

export const Route = createFileRoute("/taxi-to-limassol")({
  head: () => ({
    meta: [
      { title: "Taxi to Limassol — Airport Transfer from €55 | Taxi Cyprus 24" },
      { name: "description", content: "Private taxi to Limassol from Larnaca Airport (€55) and Paphos Airport (€65). Fixed price, Mercedes-Benz, meet & greet, 24/7." },
      { property: "og:title", content: "Limassol Airport Transfer from €55" },
      { property: "og:description", content: "Private fixed-price airport taxi to Limassol, Cyprus." },
      { property: "og:image", content: limassolImg },
      { name: "twitter:image", content: limassolImg },
      { name: "keywords", content: "Limassol airport transfer, taxi to Limassol, Larnaca to Limassol taxi" },
    ],
  }),
  component: () => (
    <TransferPage
      eyebrow="Airport to Limassol"
      title="Private Taxi Transfer to Limassol"
      subtitle="Fixed-price airport transfers to Limassol from Larnaca and Paphos airports. Premium Mercedes-Benz vehicles for business and leisure travellers."
      heroImage={heroImg}
      galleryImage={limassolImg}
      defaultDropoff="Limassol"
      fromLocation="Larnaca / Paphos"
      toLocation="Limassol"
      duration="45 min / 50 min"
      distance="70 km / 65 km"
      intro="Limassol is the second-largest city in Cyprus and a major business, marina and resort destination. Our private taxi to Limassol delivers you directly to your business hotel, marina apartment or beachfront resort in comfort."
      bodyParagraphs={[
        "From Larnaca Airport, Limassol is around 45 minutes via the A1/A5 motorway. From Paphos Airport, the journey is approximately 50 minutes via the A6.",
        "We cover all areas of Limassol including Limassol Marina, Old Town, Germasogeia, Amathus tourist strip, Mouttagiaka and Pyrgos. Business travellers can pre-book S-Class luxury sedans for the highest level of comfort.",
      ]}
      highlights={["Direct to Limassol hotel or marina", "Premium Mercedes-Benz", "Ideal for business travellers", "Fixed price guarantee", "Meet & greet at airport", "24/7 service"]}
      prices={[
        { type: "Larnaca Airport to Limassol", pax: "Up to 3 passengers", price: "€55" },
        { type: "Paphos Airport to Limassol", pax: "Up to 3 passengers", price: "€65" },
        { type: "Luxury S-Class", pax: "Up to 3 passengers", price: "€95+" },
      ]}
      nearbyAreas={["Limassol Marina", "Limassol Old Town", "Germasogeia", "Amathus", "Mouttagiaka", "Pissouri", "Governor's Beach"]}
      faqs={sharedFAQs.slice(0, 6)}
      relatedLinks={[
        { to: "/larnaca-airport-transfers", label: "Larnaca Airport Transfers" },
        { to: "/paphos-airport-transfers", label: "Paphos Airport Transfers" },
        { to: "/cyprus-airport-transfers", label: "All Routes" },
      ]}
    />
  ),
});
