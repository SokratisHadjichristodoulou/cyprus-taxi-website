import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import coralBayImg from "@/assets/dest-coral-bay.jpg";
import { TransferPage } from "@/components/TransferPage";

const coralBayFAQs = [
  {
    q: "Wie viel kostet ein Taxi vom Flughafen Paphos nach Coral Bay?",
    a: "Ein privates Taxi vom Flughafen Paphos nach Coral Bay kostet einen Festpreis von 65 € im 4-Sitzer (bis zu 4 Fahrgäste), 85 € im 6-Sitzer-Van und 120 € im 12-Sitzer-Van. Der Preis gilt pro Fahrzeug, nicht pro Person, und beinhaltet Meet & Greet, Flugüberwachung, Gepäck und kostenlose Kindersitze.",
  },
  {
    q: "Wie viel kostet ein Taxi vom Flughafen Larnaka nach Coral Bay?",
    a: "Ab Flughafen Larnaka beträgt der Festpreis nach Coral Bay 170 € im 4-Sitzer, 200 € im 6-Sitzer-Van und 270 € im 12-Sitzer-Van. Meet & Greet und Flugüberwachung sind inklusive – ohne versteckte Kosten.",
  },
  {
    q: "Wie lange dauert der Transfer vom Flughafen Paphos nach Coral Bay?",
    a: "Etwa 25–30 Minuten, je nach Verkehr und Lage Ihrer Unterkunft in Coral Bay. Ab Flughafen Larnaka sollten Sie rund 1 Stunde 40 Minuten über die Autobahn A6 einplanen.",
  },
  {
    q: "Kann ich auch die Rückfahrt von Coral Bay zum Flughafen Paphos buchen?",
    a: "Ja. Die Rückfahrt von Coral Bay zum Flughafen Paphos kostet denselben Festpreis wie die Hinfahrt; das gilt auch für den Flughafen Larnaka. Buchen Sie beide Fahrten zusammen – wir vereinbaren eine Abholzeit, mit der Sie rechtzeitig zu Ihrem Flug kommen.",
  },
  {
    q: "Fahren Sie bis zu Hotels und Villen in Coral Bay?",
    a: "Ja – jeder Transfer geht von Tür zu Tür. Wir bringen Sie zu Hotels in Coral Bay wie dem Coral Beach Hotel & Resort, zu Ferienwohnungen und zu Privatvillen in Coral Bay und an den Hängen von Peyia. Senden Sie uns bei der Buchung die Adresse oder einen Kartenpunkt.",
  },
  {
    q: "Wo treffe ich den Fahrer am Flughafen Paphos?",
    a: "Ihr Fahrer wartet in der Ankunftshalle mit einem Namensschild, hilft Ihnen mit dem Gepäck und begleitet Sie zum Fahrzeug. Bis zu 60 Minuten Wartezeit nach der Landung sind kostenlos, und wir verfolgen Ihren Flug – eine Verspätung kostet nie extra.",
  },
  {
    q: "Welches Fahrzeug brauche ich für eine Familie oder Gruppe nach Coral Bay?",
    a: "Bis zu 4 Fahrgäste fahren im 4-Sitzer (65 € ab Flughafen Paphos), 5–6 Fahrgäste im 6-Sitzer-Van (85 €) und Gruppen von 7–12 Personen im 12-Sitzer-Van (120 €). Babyschalen, Kindersitze und Sitzerhöhungen sind kostenlos – nennen Sie uns einfach das Alter der Kinder.",
  },
  {
    q: "Ist der Transfer nach Coral Bay auch nachts möglich?",
    a: "Ja. Wir sind rund um die Uhr im Einsatz, daher kosten späte und sehr frühe Flüge denselben Festpreis – ohne Nachtzuschlag.",
  },
];

export const Route = createFileRoute("/de/taxi-to-coral-bay")({
  head: () => ({
    meta: [
      { title: "Taxi Flughafen Paphos – Coral Bay: Festpreis 65 € | Taxi Cyprus 24" },
      {
        name: "description",
        content:
          "Taxi vom Flughafen Paphos nach Coral Bay zum Festpreis: 65 € (4 Sitze) oder 85 € (6 Sitze); ab Flughafen Larnaka 170 €. Meet & Greet, Kindersitze inklusive, 24/7.",
      },
      { property: "og:title", content: "Taxi Flughafen Paphos – Coral Bay: Festpreis 65 €" },
      {
        property: "og:description",
        content:
          "Privattaxi zum Festpreis von den Flughäfen Paphos und Larnaka nach Coral Bay, Zypern.",
      },
      { property: "og:image", content: coralBayImg },
      { property: "og:locale", content: "de_DE" },
      { name: "twitter:image", content: coralBayImg },
    ],
  }),
  component: () => (
    <TransferPage
      eyebrow="Flughafen nach Coral Bay"
      title="Taxi vom Flughafen Paphos nach Coral Bay"
      subtitle="Flughafentransfers zum Festpreis nach Coral Bay ab den Flughäfen Paphos und Larnaka. Privatfahrzeug, Meet & Greet, kostenlose Kindersitze."
      heroImage={heroImg}
      galleryImage={coralBayImg}
      defaultDropoff="Coral Bay"
      fromLocation="Paphos / Larnaka"
      toLocation="Coral Bay"
      duration="25 Min. / 1 Std. 40 Min."
      distance="25 km / 150 km"
      intro="Coral Bay ist einer der beliebtesten Badeorte Zyperns – bekannt für türkisfarbenes Wasser, Sandstrände, Luxusvillen und familienfreundliche Hotels. Taxicyprus24 bietet zuverlässige private Flughafentransfers nach Coral Bay ab dem Flughafen Paphos und dem Flughafen Larnaka – zum Festpreis, mit professionellen Fahrern und rund um die Uhr."
      bodyParagraphs={[
        "Keine langen Taxi-Schlangen, keine vollen Shuttle-Busse, keine geteilten Fahrten: Unser privater Transfer bringt Sie direkt von Tür zu Tür zu Ihrem Hotel, Ihrer Villa, Ihrer Ferienwohnung oder Ihrem Resort in Coral Bay.",
        "Vom Flughafen Paphos sind es etwa 25 Minuten auf der malerischen Küstenstraße bis Coral Bay. Vom Flughafen Larnaka dauert die Fahrt über die Autobahn A6 in der Regel rund 1 Stunde 40 Minuten.",
        "Wir fahren zu allen großen Hotels und Unterkünften in Coral Bay, darunter das Coral Beach Hotel & Resort, das Mayfair Hotel, das Corallia Beach Hotel und die Coral Star Apartments, sowie zu Ferienvillen in Coral Bay, Peyia und der Region Paphos.",
        "Jeder Transfer nach Coral Bay beinhaltet Festpreise ohne versteckte Kosten, Meet & Greet am Flughafen, Flugüberwachung bei Verspätungen, kostenlose Baby- und Kindersitze, klimatisierte Fahrzeuge und Bezahlung per Karte, Überweisung oder bar in EUR oder GBP.",
        "Ob Taxi vom Flughafen Paphos nach Coral Bay oder Privattransfer vom Flughafen Larnaka nach Coral Bay – Taxicyprus24 sorgt für eine sichere, komfortable und entspannte Fahrt.",
      ]}
      highlights={[
        "Direkt zu Ihrem Hotel in Coral Bay",
        "Saubere, komfortable Fahrzeuge",
        "Festpreisgarantie",
        "Kostenlose Kindersitze",
        "Auch Ankünfte in der Nacht",
        "Meet & Greet inklusive",
      ]}
      prices={[
        {
          type: "Flughafen Paphos – Coral Bay (Limousine)",
          pax: "Bis zu 4 Fahrgäste",
          price: "65 €",
        },
        { type: "Flughafen Paphos – Coral Bay (Van)", pax: "Bis zu 6 Fahrgäste", price: "85 €" },
        {
          type: "Flughafen Larnaka – Coral Bay (Limousine)",
          pax: "Bis zu 4 Fahrgäste",
          price: "170 €",
        },
        { type: "Flughafen Larnaka – Coral Bay (Van)", pax: "Bis zu 6 Fahrgäste", price: "200 €" },
      ]}
      nearbyAreas={[
        "Coral Beach Hotel",
        "Mayfair Coral Bay",
        "Corallia Beach",
        "Halbinsel Akamas",
        "Sea Caves",
        "Peyia",
      ]}
      faqs={coralBayFAQs}
      relatedLinks={[
        { to: "/taxi-to-peyia", label: "Taxi nach Peyia" },
        { to: "/taxi-to-chloraka", label: "Taxi nach Chloraka" },
        { to: "/paphos-airport-transfers", label: "Flughafentransfer Paphos" },
      ]}
    />
  ),
});
