import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import paphosImg from "@/assets/dest-paphos.jpg";
import { TransferPage } from "@/components/TransferPage";
import { sharedFAQsDe } from "@/lib/faqs.de";

export const Route = createFileRoute("/de/larnaca-airport-to-paphos")({
  head: () => ({
    meta: [
      { title: "Taxi Flughafen Larnaka – Paphos: Festpreis 140 € | Taxi Cyprus 24" },
      {
        name: "description",
        content:
          "Privattaxi vom Flughafen Larnaka nach Paphos zum Festpreis: 140 € (4 Sitze), 180 € (6 Sitze) oder 240 € (12 Sitze). Meet & Greet, Kindersitze, Flugüberwachung, 24/7.",
      },
      { property: "og:title", content: "Taxi Flughafen Larnaka – Paphos: Festpreis 140 €" },
      {
        property: "og:description",
        content:
          "Privater Transfer zum Festpreis vom Flughafen Larnaka nach Paphos mit Meet & Greet.",
      },
      { property: "og:image", content: paphosImg },
      { property: "og:locale", content: "de_DE" },
      { name: "twitter:image", content: paphosImg },
    ],
  }),
  component: () => (
    <TransferPage
      eyebrow="Flughafen Larnaka nach Paphos"
      title="Taxi vom Flughafen Larnaka nach Paphos"
      subtitle="Privattransfers zum Festpreis vom internationalen Flughafen Larnaka nach Paphos. Meet & Greet in der Ankunftshalle, kostenlose Kindersitze und Flugüberwachung inklusive."
      heroImage={heroImg}
      galleryImage={paphosImg}
      defaultPickup="Larnaca Airport"
      defaultDropoff="Paphos Town"
      fromLocation="Flughafen Larnaka"
      toLocation="Paphos"
      duration="1 Std. 30 Min."
      distance="140 km"
      intro="Die Fahrt vom internationalen Flughafen Larnaka (LCA) nach Paphos führt über rund 140 Kilometer auf den Autobahnen A5 und A6 und dauert bei normalem Verkehr etwa 1 Stunde 30 Minuten. Unsere professionellen Fahrer bringen Sie schnell, bequem und sicher zu Ihrem Hotel, Ihrer Villa oder Ihrem Resort in Paphos – in einem sauberen, gepflegten Fahrzeug."
      bodyParagraphs={[
        "Ob Sie spät in der Nacht oder früh am Morgen landen: Ihr Fahrer wartet bereits mit einem Namensschild in der Ankunftshalle. Wir verfolgen Ihren Flug in Echtzeit anhand der Flugnummer – selbst bei stundenlanger Verspätung ist Ihr Transfer garantiert.",
        "Wir fahren zu allen Hotels und Resorts in der Region Paphos, darunter Coral Bay, Peyia, Chloraka, Kato Paphos, das Gebiet der Königsgräber, der Hafen von Paphos, Geroskipou und die Altstadt von Paphos. Der Preis ist derselbe, ob Sie in einem Fünf-Sterne-Resort oder in einer Privatvilla wohnen.",
      ]}
      highlights={[
        "Fester Gesamtpreis – keine Extras",
        "Meet & Greet in der Ankunftshalle Larnaka",
        "Saubere, komfortable Fahrzeuge",
        "Kostenlose Baby- und Kindersitze",
        "Flugüberwachung in Echtzeit",
        "Bezahlung bar oder per Karte",
      ]}
      prices={[
        { type: "Executive-Limousine", pax: "Bis zu 4 Fahrgäste", price: "140 €" },
        { type: "Premium-Van (6 Sitze)", pax: "Bis zu 6 Fahrgäste", price: "180 €" },
        { type: "Großer Van (12 Sitze)", pax: "Bis zu 12 Fahrgäste", price: "240 €" },
      ]}
      nearbyAreas={[
        "Coral Bay",
        "Peyia",
        "Chloraka",
        "Kato Paphos",
        "Königsgräber",
        "Geroskipou",
        "Hafen von Paphos",
        "Latchi",
        "Polis",
      ]}
      faqs={sharedFAQsDe.slice(0, 6)}
      relatedLinks={[
        { to: "/taxi-to-coral-bay", label: "Larnaka – Coral Bay" },
        { to: "/taxi-to-peyia", label: "Larnaka – Peyia" },
        { to: "/taxi-to-limassol", label: "Flughafen Paphos – Limassol" },
        { to: "/paphos-airport-transfers", label: "Flughafentransfer Paphos" },
      ]}
    />
  ),
});
