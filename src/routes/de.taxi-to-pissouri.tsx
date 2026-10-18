import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import pissouriImg from "@/assets/dest-coral-bay.jpg";
import { TransferPage } from "@/components/TransferPage";

const pissouriFAQs = [
  {
    q: "Wie viel kostet ein Taxi vom Flughafen Paphos nach Pissouri?",
    a: "Ein privates Taxi vom Flughafen Paphos nach Pissouri kostet einen Festpreis von 60 € im 4-Sitzer (bis zu 4 Fahrgäste), 80 € im 6-Sitzer-Van und 120 € im 12-Sitzer-Van. Der Preis gilt pro Fahrzeug und beinhaltet Meet & Greet, Flugüberwachung, Gepäck und kostenlose Kindersitze.",
  },
  {
    q: "Wie viel kostet ein Taxi vom Flughafen Larnaka nach Pissouri?",
    a: "Ab Flughafen Larnaka beträgt der Festpreis nach Pissouri 130 € im 4-Sitzer, 180 € im 6-Sitzer-Van und 240 € im 12-Sitzer-Van.",
  },
  {
    q: "Welcher Flughafen liegt näher an Pissouri?",
    a: "Der Flughafen Paphos. Der Transfer vom Flughafen Paphos nach Pissouri dauert etwa 30 Minuten, vom Flughafen Larnaka rund 1 Stunde 10 Minuten – beide Strecken fahren wir zum Festpreis.",
  },
  {
    q: "Fahren Sie in die Pissouri-Bucht und ins alte Dorf?",
    a: "Ja. Wir fahren zu Hotels und Apartments in der Pissouri-Bucht, zu Häusern im alten Dorf und zu Villen am Hang dazwischen. Senden Sie uns bei der Buchung Ihre Adresse oder einen Kartenpunkt.",
  },
  {
    q: "Kann ich die Rückfahrt von Pissouri zum Flughafen Paphos buchen?",
    a: "Ja. Die Rückfahrt von Pissouri zum Flughafen Paphos kostet denselben Festpreis, und wir planen die Abholung an Ihrer Unterkunft passend zu Ihrem Flug.",
  },
  {
    q: "Gilt der Preis pro Person oder pro Fahrzeug?",
    a: "Pro Fahrzeug: 60 € gelten für bis zu 4 Fahrgäste, 80 € für bis zu 6 und 120 € für bis zu 12 – je größer die Gruppe, desto geringer der Preis pro Person.",
  },
  {
    q: "Was passiert, wenn mein Flug nach Paphos Verspätung hat?",
    a: "Wir verfolgen Ihren Flug in Echtzeit, und Ihr Fahrer wartet auf die tatsächliche Landezeit. Verspätungen kosten nie extra, und bis zu 60 Minuten Wartezeit nach der Landung sind kostenlos.",
  },
  {
    q: "Fahren Sie uns während des Urlaubs auch an andere Orte?",
    a: "Ja – neben Flughafentransfers bieten wir Fahrten mit Chauffeur auf Stundenbasis und private Tagesausflüge an, zum Beispiel nach Limassol oder entlang der Küste. Schreiben Sie uns Ihre Pläne, und wir erstellen Ihnen ein Angebot.",
  },
];

export const Route = createFileRoute("/de/taxi-to-pissouri")({
  head: () => ({
    meta: [
      { title: "Taxi Flughafen Paphos – Pissouri: Festpreis 60 € | Taxi Cyprus 24" },
      {
        name: "description",
        content:
          "Taxi vom Flughafen Paphos nach Pissouri und in die Pissouri-Bucht zum Festpreis: 60 € (4 Sitze) oder 80 € (6 Sitze); ab Flughafen Larnaka 130 €. Meet & Greet, 24/7.",
      },
      { property: "og:title", content: "Taxi Flughafen Paphos – Pissouri: Festpreis 60 €" },
      {
        property: "og:description",
        content:
          "Privattaxi zum Festpreis von den Flughäfen Paphos und Larnaka in das Dorf Pissouri, die Pissouri-Bucht und zu Villen in der Umgebung.",
      },
      { property: "og:image", content: pissouriImg },
      { property: "og:locale", content: "de_DE" },
      { name: "twitter:image", content: pissouriImg },
    ],
  }),
  component: () => (
    <TransferPage
      eyebrow="Flughafen Paphos nach Pissouri"
      title="Taxi vom Flughafen Paphos nach Pissouri"
      subtitle="Privattaxi zum Festpreis von den Flughäfen Paphos und Larnaka in die Pissouri-Bucht und das Dorf Pissouri – von Tür zu Tür, mit Meet & Greet und kostenlosen Kindersitzen."
      heroImage={heroImg}
      galleryImage={pissouriImg}
      defaultDropoff="Pissouri"
      fromLocation="Paphos / Larnaka"
      toLocation="Pissouri"
      duration="30 Min. / 1 Std. 10 Min."
      distance="35 km / 100 km"
      intro="Pissouri ist ein Ort an der Küste zwischen Paphos und Limassol und besteht aus zwei Teilen: dem traditionellen alten Dorf am Hang mit Dorfplatz und Tavernen und der Pissouri-Bucht darunter mit langem Strand, Hotels und Ferienwohnungen. Taxicyprus24 bietet Ihnen ein privates Taxi vom Flughafen Paphos nach Pissouri zum Festpreis von 60 € – etwa 30 Minuten über die Autobahn A6 – mit Meet & Greet, kostenlosen Kindersitzen und Fahrt bis vor die Tür."
      bodyParagraphs={[
        "Pissouri gehört zwar zum Bezirk Limassol, doch für die meisten Gäste ist der Flughafen Paphos der nähere Flughafen. Der Transfer dauert etwa 30 Minuten und führt über rund 35 km: auf der Autobahn A6 Richtung Osten an Aphrodite Hills vorbei und dann hinunter zur Bucht oder hinauf ins Dorf – je nachdem, wo Sie wohnen. Viele Gäste mieten Villen und Apartments am Hang dazwischen, und Ihr Fahrer bringt Sie zur genauen Adresse.",
        "Die Pissouri-Bucht ist bekannt für ihren langen Strand und die Tavernen am Wasser, das alte Dorf darüber für seinen Hauptplatz, seine Tavernen und den Blick auf die Küste. Westlich der Bucht erheben sich die weißen Klippen von Kap Aspro, und Petra tou Romiou, der Felsen der Aphrodite, liegt nur eine kurze Fahrt weiter an der alten Küstenstraße Richtung Paphos.",
        "Die Festpreise vom Flughafen Paphos nach Pissouri betragen 60 € im 4-Sitzer, 80 € im 6-Sitzer-Van und 120 € im 12-Sitzer-Van. Ab Flughafen Larnaka beträgt der Festpreis 130 € im 4-Sitzer und 180 € im 6-Sitzer-Van, bei einer Fahrzeit von etwa 1 Stunde 10 Minuten. Der Preis gilt pro Fahrzeug und ändert sich weder bei Nachtflügen noch bei Verspätungen.",
        "Pissouri ist auch ein guter Ausgangspunkt, um die Südwestküste zu erkunden. Limassol liegt etwa 30 Minuten östlich, und auf dem Weg dorthin thront die antike Stätte Kourion auf den Klippen über Episkopi. Wenn Sie die Gegend entdecken möchten, bieten wir auch Fahrten mit Chauffeur auf Stundenbasis und private Tagesausflüge an – fragen Sie nach einem Angebot.",
        "Jeder Transfer beinhaltet Flugüberwachung in Echtzeit, bis zu 60 Minuten kostenlose Wartezeit nach der Landung, Hilfe beim Gepäck, kostenlose Babyschalen und Sitzerhöhungen sowie Bezahlung per Karte, Überweisung oder bar in EUR oder GBP. Die Buchung dauert online, per WhatsApp oder telefonisch nur wenige Minuten, und Sie erhalten schnell eine Bestätigung mit Ihrem Festpreis.",
      ]}
      highlights={[
        "Festpreis 60 € ab Flughafen Paphos",
        "Etwa 30 Minuten über die A6",
        "Pissouri-Bucht und altes Dorf",
        "Meet & Greet in der Ankunftshalle",
        "Kostenlose Kindersitze & Sitzerhöhungen",
        "Vans für Familien und Gruppen",
        "Rund um die Uhr, nachts gleicher Preis",
      ]}
      prices={[
        {
          type: "Flughafen Paphos – Pissouri (Limousine)",
          pax: "Bis zu 4 Fahrgäste",
          price: "60 €",
        },
        { type: "Flughafen Paphos – Pissouri (Van)", pax: "Bis zu 6 Fahrgäste", price: "80 €" },
        {
          type: "Flughafen Larnaka – Pissouri (Limousine)",
          pax: "Bis zu 4 Fahrgäste",
          price: "130 €",
        },
        { type: "Flughafen Larnaka – Pissouri (Van)", pax: "Bis zu 6 Fahrgäste", price: "180 €" },
      ]}
      nearbyAreas={[
        "Pissouri-Bucht",
        "Dorf Pissouri",
        "Kap Aspro",
        "Petra tou Romiou",
        "Aphrodite Hills",
        "Kourion",
      ]}
      faqs={pissouriFAQs}
      relatedLinks={[
        { to: "/paphos-airport-transfers", label: "Flughafentransfer Paphos" },
        { to: "/taxi-to-aphrodite-hills", label: "Flughafen Paphos – Aphrodite Hills" },
        { to: "/taxi-to-limassol", label: "Flughafen Paphos – Limassol" },
        { to: "/taxi-to-kato-paphos", label: "Flughafen Paphos – Kato Paphos" },
        { to: "/larnaca-airport-to-paphos", label: "Flughafen Larnaka – Paphos" },
      ]}
    />
  ),
});
