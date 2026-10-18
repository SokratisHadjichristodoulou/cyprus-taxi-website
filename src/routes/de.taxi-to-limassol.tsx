import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import limassolImg from "@/assets/dest-limassol.jpg";
import { TransferPage } from "@/components/TransferPage";

const limassolFAQs = [
  {
    q: "Wie viel kostet ein Taxi vom Flughafen Paphos nach Limassol?",
    a: "Ein privates Taxi vom Flughafen Paphos nach Limassol kostet einen Festpreis von 90 € im 4-Sitzer (bis zu 4 Fahrgäste), 120 € im 6-Sitzer-Van und 160 € im 12-Sitzer-Van. Der Preis gilt pro Fahrzeug und beinhaltet Meet & Greet, Flugüberwachung, Gepäck und kostenlose Kindersitze.",
  },
  {
    q: "Wie lange dauert die Fahrt vom Flughafen Paphos nach Limassol?",
    a: "In der Regel etwa 50 Minuten über die Autobahn A6, je nach Verkehr und Ziel in Limassol.",
  },
  {
    q: "Kann ich die Rückfahrt von Limassol zum Flughafen Paphos buchen?",
    a: "Ja. Die Fahrt von Limassol zurück zum Flughafen Paphos kostet denselben Festpreis. Buchen Sie sie zusammen mit Ihrer Ankunft, und wir planen die Abholzeit passend zu Ihrem Flug.",
  },
  {
    q: "In welche Stadtteile von Limassol fahren Sie?",
    a: "In alle – unter anderem Limassol Marina, die Altstadt, Germasogeia, das Touristengebiet Amathus, Mouttagiaka und Pyrgos. Wir bringen Sie bis vor die Tür Ihres Hotels, Apartments, Ihrer Villa oder Ihres Büros.",
  },
  {
    q: "Eignet sich der Transfer für Geschäftsreisende?",
    a: "Ja. Ihr Fahrer verfolgt Ihren Flug, empfängt Sie mit Namensschild in der Ankunftshalle und bringt Sie ohne Zwischenstopps direkt zu Hotel oder Büro. Teams können den 6-Sitzer-Van (120 €) oder den 12-Sitzer-Van (160 €) buchen.",
  },
  {
    q: "Gilt der Preis pro Person?",
    a: "Nein – der Festpreis gilt für das ganze Fahrzeug: 90 € für bis zu 4 Fahrgäste, 120 € für bis zu 6 und 160 € für bis zu 12.",
  },
  {
    q: "Was passiert, wenn mein Flug Verspätung hat?",
    a: "Für Sie ändert sich nichts. Wir verfolgen Ihren Flug in Echtzeit, und Ihr Fahrer wartet auf Ihre tatsächliche Ankunft – Verspätungen kosten nie extra.",
  },
  {
    q: "Wie bezahle ich den Transfer nach Limassol?",
    a: "Online per Karte, per Banküberweisung oder bar beim Fahrer in EUR oder GBP.",
  },
];

export const Route = createFileRoute("/de/taxi-to-limassol")({
  head: () => ({
    meta: [
      { title: "Taxi Flughafen Paphos – Limassol: Festpreis 90 € | Taxi Cyprus 24" },
      {
        name: "description",
        content:
          "Taxi vom Flughafen Paphos nach Limassol zum Festpreis: 90 € (4 Sitze), 120 € (6 Sitze) oder 160 € (12 Sitze). Etwa 50 Minuten über die A6, Meet & Greet, 24/7.",
      },
      { property: "og:title", content: "Taxi Flughafen Paphos – Limassol: Festpreis 90 €" },
      {
        property: "og:description",
        content:
          "Privattaxi zum Festpreis vom Flughafen Paphos zu Hotels, Marina und Geschäftsvierteln in Limassol.",
      },
      { property: "og:image", content: limassolImg },
      { property: "og:locale", content: "de_DE" },
      { name: "twitter:image", content: limassolImg },
    ],
  }),
  component: () => (
    <TransferPage
      eyebrow="Flughafen Paphos nach Limassol"
      title="Taxi vom Flughafen Paphos nach Limassol"
      subtitle="Flughafentransfers zum Festpreis vom Flughafen Paphos nach Limassol. Saubere, komfortable Fahrzeuge für Geschäfts- und Urlaubsreisende."
      heroImage={heroImg}
      galleryImage={limassolImg}
      defaultDropoff="Limassol"
      fromLocation="Paphos"
      toLocation="Limassol"
      duration="50 Min."
      distance="65 km"
      intro="Limassol ist die zweitgrößte Stadt Zyperns und eines der wichtigsten Ziele der Insel für Geschäftsreisen, Luxusresorts, Strände und das Leben an der Marina. Taxicyprus24 bietet zuverlässige Privattransfers zwischen Paphos und Limassol – zum Festpreis, mit professionellen Fahrern und rund um die Uhr."
      bodyParagraphs={[
        "Unser privater Taxiservice nach Limassol bringt Sie direkt von Tür zu Tür zu Hotels, Apartments an der Marina, Bürogebäuden, Villen und Strandresorts – ohne Wartezeit, ohne geteilte Fahrten und ohne versteckte Kosten.",
        "Vom Flughafen Paphos nach Limassol dauert die Fahrt über die Autobahn A6 in der Regel etwa 50 Minuten.",
        "Wir fahren in alle Stadtteile von Limassol, darunter Limassol Marina, die Altstadt, Germasogeia, das Touristengebiet Amathus, Mouttagiaka und Pyrgos. Geschäftsreisende und VIP-Gäste können für Firmenfahrten und Gruppentransfers auch einen Van mit 6 Sitzen vorab buchen.",
        "Jeder Transfer nach Limassol beinhaltet Festpreise, Meet & Greet am Flughafen, Flugüberwachung in Echtzeit, kostenlose Baby- und Kindersitze, klimatisierte Fahrzeuge und Bezahlung per Karte, Überweisung oder bar in EUR oder GBP.",
        "Ob privates Taxi vom Flughafen Paphos nach Limassol oder Chauffeurservice auf Zypern – Taxicyprus24 garantiert komfortable, professionelle und entspannte Fahrten.",
      ]}
      highlights={[
        "Direkt zum Hotel oder zur Marina",
        "Komfortable Premium-Fahrzeuge",
        "Ideal für Geschäftsreisende",
        "Festpreisgarantie",
        "Meet & Greet am Flughafen",
        "Service rund um die Uhr",
      ]}
      prices={[
        {
          type: "Flughafen Paphos – Limassol (Limousine)",
          pax: "Bis zu 4 Fahrgäste",
          price: "90 €",
        },
        { type: "Flughafen Paphos – Limassol (Van)", pax: "Bis zu 6 Fahrgäste", price: "120 €" },
      ]}
      nearbyAreas={[
        "Limassol Marina",
        "Altstadt von Limassol",
        "Germasogeia",
        "Amathus",
        "Mouttagiaka",
        "Pissouri",
        "Governor's Beach",
      ]}
      faqs={limassolFAQs}
      relatedLinks={[
        { to: "/paphos-airport-transfers", label: "Flughafentransfer Paphos" },
        { to: "/cyprus-airport-transfers", label: "Alle Strecken" },
      ]}
    />
  ),
});
