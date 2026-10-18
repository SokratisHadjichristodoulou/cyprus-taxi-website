import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import peyiaImg from "@/assets/dest-peyia.jpg";
import { TransferPage } from "@/components/TransferPage";

const peyiaFAQs = [
  {
    q: "Wie viel kostet ein Taxi vom Flughafen Paphos nach Peyia?",
    a: "Ein privates Taxi vom Flughafen Paphos nach Peyia kostet einen Festpreis von 65 € im 4-Sitzer (bis zu 4 Fahrgäste), 85 € im 6-Sitzer-Van und 120 € im 12-Sitzer-Van. Das ist der Gesamtpreis für das Fahrzeug, inklusive Meet & Greet, Flugüberwachung, Gepäck und kostenloser Kindersitze.",
  },
  {
    q: "Wie viel kostet ein Taxi vom Flughafen Larnaka nach Peyia?",
    a: "Ab Flughafen Larnaka beträgt der Festpreis nach Peyia 170 € im 4-Sitzer, 200 € im 6-Sitzer-Van und 270 € im 12-Sitzer-Van – Meet & Greet und Flugüberwachung inklusive.",
  },
  {
    q: "Wie lange dauert die Fahrt vom Flughafen Paphos nach Peyia?",
    a: "Etwa 30 Minuten, je nach Verkehr und Lage Ihrer Villa. Vom Flughafen Larnaka nach Peyia dauert die Fahrt rund 1 Stunde 45 Minuten.",
  },
  {
    q: "Findet der Fahrer meine Villa in Peyia?",
    a: "Ja. Viele Villen in Peyia liegen an Hangstraßen und in ruhigen Wohnstraßen, und unsere ortskundigen Fahrer kennen die Gegend gut. Senden Sie uns bei der Buchung Namen und Adresse der Villa oder einen Google-Maps-Pin, und Ihr Fahrer bringt Sie bis vor die Tür.",
  },
  {
    q: "Fahren Sie auch zu den Sea Caves und nach St. George?",
    a: "Ja – wir fahren in die gesamte Gegend von Peyia, einschließlich Sea Caves, St. George, der Villen in den oberen Hanglagen und des Dorfzentrums. Nennen Sie uns bei der Buchung die genaue Adresse, damit wir Ihnen den Festpreis bestätigen können.",
  },
  {
    q: "Kann ich die Rückfahrt von Peyia zum Flughafen Paphos buchen?",
    a: "Ja. Die Rückfahrt von Peyia zum Flughafen Paphos kostet denselben Festpreis wie die Ankunft, und wir planen die Abholung an Ihrer Villa so, dass Sie rechtzeitig zu Ihrem Flug kommen.",
  },
  {
    q: "Gilt der Preis pro Person oder pro Fahrzeug?",
    a: "Pro Fahrzeug. 65 € gelten für bis zu 4 Fahrgäste im Pkw, 85 € für bis zu 6 im Van und 120 € für bis zu 12 im großen Van – je größer die Gruppe, desto geringer der Preis pro Person.",
  },
  {
    q: "Holen Sie auch Fahrgäste von späten Flügen nach Peyia ab?",
    a: "Ja. Wir sind rund um die Uhr im Einsatz, und späte oder sehr frühe Ankünfte am Flughafen Paphos kosten denselben Festpreis – ohne Nachtzuschlag.",
  },
];

export const Route = createFileRoute("/de/taxi-to-peyia")({
  head: () => ({
    meta: [
      { title: "Taxi Flughafen Paphos – Peyia: Festpreis 65 € | Taxi Cyprus 24" },
      {
        name: "description",
        content:
          "Taxi vom Flughafen Paphos nach Peyia zum Festpreis: 65 € (4 Sitze) oder 85 € (6 Sitze); ab Flughafen Larnaka 170 €. Bis vor Ihre Villa, Kindersitze inklusive, 24/7.",
      },
      { property: "og:title", content: "Taxi Flughafen Paphos – Peyia: Festpreis 65 €" },
      {
        property: "og:description",
        content:
          "Privattaxi zum Festpreis von den Flughäfen Paphos und Larnaka zu Villen und Hotels in Peyia.",
      },
      { property: "og:image", content: peyiaImg },
      { property: "og:locale", content: "de_DE" },
      { name: "twitter:image", content: peyiaImg },
    ],
  }),
  component: () => (
    <TransferPage
      eyebrow="Flughafen nach Peyia"
      title="Taxi vom Flughafen Paphos nach Peyia"
      subtitle="Flughafentransfers zum Festpreis ins Dorf Peyia und zu den Villen an den umliegenden Hängen. Privatfahrzeug, Meet & Greet, keine Überraschungen."
      heroImage={heroImg}
      galleryImage={peyiaImg}
      defaultDropoff="Peyia"
      fromLocation="Paphos / Larnaka"
      toLocation="Peyia"
      duration="30 Min. / 1 Std. 45 Min."
      distance="22 km / 152 km"
      intro="Peyia ist eines der beliebtesten Ziele für Villenurlaub im Westen Zyperns – bekannt für den Panoramablick aufs Meer, private Luxusvillen, traditionelle Tavernen und die ruhige Lage oberhalb von Coral Bay. Taxicyprus24 bietet zuverlässige private Flughafentransfers nach Peyia ab den Flughäfen Paphos und Larnaka – zum Festpreis, mit professionellen Fahrern und rund um die Uhr."
      bodyParagraphs={[
        "Unser privater Taxiservice bringt Sie direkt zu Ihrer Villa, Ihrem Hotel oder Ihrer Ferienunterkunft – ohne Wartezeit, ohne geteilte Fahrten und ohne versteckte Kosten. Viele Villen in Peyia liegen an Straßen in Hanglage und in ruhigen Wohngebieten, doch unsere ortskundigen Fahrer kennen die Gegend genau und fahren Sie direkt zu Ihrem GPS-Standort.",
        "Fahrzeiten nach Peyia: ab Flughafen Paphos etwa 30 Minuten, ab Flughafen Larnaka etwa 1 Stunde 45 Minuten. Wir fahren in die gesamte Region Peyia, darunter die Sea Caves, die Gegend um Coral Bay, das Gebiet St. George, die Villen in den oberen Hanglagen und das Dorfzentrum.",
        "Jeder Transfer nach Peyia beinhaltet einen privaten Taxiservice zum Festpreis, Meet & Greet am Flughafen, Flugüberwachung in Echtzeit, kostenlose Baby- und Kindersitze, saubere klimatisierte Fahrzeuge und flexible Bezahlung per Karte, Überweisung oder bar in EUR oder GBP.",
        "Ob Taxi vom Flughafen Paphos nach Peyia, Privattransfer vom Flughafen Larnaka nach Coral Bay oder Transfer zu einer Luxusvilla im Westen Zyperns – Taxicyprus24 garantiert komfortable, sichere und entspannte Flughafentransfers ohne versteckte Kosten.",
      ]}
      highlights={[
        "Direkt zu Ihrer Villa in Peyia",
        "Fahrer kennen alle Hangstraßen",
        "Saubere, komfortable Fahrzeuge",
        "Festpreis",
        "Kostenlose Kindersitze",
        "Buchung rund um die Uhr",
      ]}
      prices={[
        { type: "Flughafen Paphos – Peyia (Limousine)", pax: "Bis zu 4 Fahrgäste", price: "65 €" },
        { type: "Flughafen Paphos – Peyia (Van)", pax: "Bis zu 6 Fahrgäste", price: "85 €" },
        {
          type: "Flughafen Larnaka – Peyia (Limousine)",
          pax: "Bis zu 4 Fahrgäste",
          price: "170 €",
        },
        { type: "Flughafen Larnaka – Peyia (Van)", pax: "Bis zu 6 Fahrgäste", price: "200 €" },
      ]}
      nearbyAreas={["Sea Caves", "St. George (Peyia)", "Coral Bay", "Akamas", "Kissonerga"]}
      faqs={peyiaFAQs}
      relatedLinks={[
        { to: "/taxi-to-coral-bay", label: "Taxi nach Coral Bay" },
        { to: "/taxi-to-chloraka", label: "Taxi nach Chloraka" },
        { to: "/paphos-airport-transfers", label: "Flughafentransfer Paphos" },
      ]}
    />
  ),
});
