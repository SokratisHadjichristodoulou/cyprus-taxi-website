import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import nicosiaImg from "@/assets/fleet-luxury.jpg";
import { TransferPage } from "@/components/TransferPage";

const paphosToNicosiaFAQs = [
  {
    q: "Wie viel kostet ein Taxi vom Flughafen Paphos nach Nikosia?",
    a: "Ein privates Taxi vom Flughafen Paphos nach Nikosia kostet einen Festpreis von 150 € im 4-Sitzer (bis zu 4 Fahrgäste), 180 € im 6-Sitzer-Van und 240 € im 12-Sitzer-Van. Der Preis gilt pro Fahrzeug und beinhaltet Meet & Greet, Flugüberwachung, Gepäck und kostenlose Kindersitze.",
  },
  {
    q: "Wie lange dauert der Transfer vom Flughafen Paphos nach Nikosia?",
    a: "Etwa 1 Stunde 50 Minuten bis 2 Stunden für die rund 150 km über die Autobahnen A6 und A1, je nach Verkehr in Nikosia.",
  },
  {
    q: "Kann ich ein Taxi von Nikosia zum Flughafen Paphos buchen?",
    a: "Ja. Die Fahrt von Nikosia zurück zum Flughafen Paphos kostet denselben Festpreis. Nennen Sie uns Ihre Abflugzeit, und wir vereinbaren eine Abholzeit mit ausreichend Puffer für den Check-in.",
  },
  {
    q: "Fahren Sie auch zu Büros, Universitäten und in die Vororte?",
    a: "Ja. Wir fahren zu Hotels, Büros, Universitätsgeländen und Wohnadressen in ganz Nikosia, unter anderem in Strovolos, Engomi, Lakatamia und Aglantzia. Senden Sie uns bei der Buchung die vollständige Adresse.",
  },
  {
    q: "Ist das eine gute Option für Geschäftsreisen?",
    a: "Ja. Das Fahrzeug ist privat, der Preis steht vorher fest, und Ihr Fahrer verfolgt Ihren Flug und empfängt Sie mit Namensschild in der Ankunftshalle. Teams können den 6-Sitzer-Van (180 €) oder den 12-Sitzer-Van (240 €) buchen.",
  },
  {
    q: "Gilt der Preis pro Person?",
    a: "Nein – es ist ein fester Gesamtpreis für das Fahrzeug: 150 € für bis zu 4 Fahrgäste, 180 € für bis zu 6 und 240 € für bis zu 12.",
  },
  {
    q: "Was ist, wenn mein Flug spät in der Nacht landet?",
    a: "Kein Problem. Wir sind rund um die Uhr im Einsatz, späte Ankünfte kosten denselben Festpreis, und Ihr Fahrer wartet auf Ihre tatsächliche Landezeit.",
  },
  {
    q: "Wie bezahle ich?",
    a: "Online per Karte, per Banküberweisung oder bar beim Fahrer am Ende der Fahrt, in EUR oder GBP.",
  },
];

export const Route = createFileRoute("/de/paphos-airport-to-nicosia")({
  head: () => ({
    meta: [
      { title: "Taxi Flughafen Paphos – Nikosia: Festpreis 150 € | Taxi Cyprus 24" },
      {
        name: "description",
        content:
          "Taxi vom Flughafen Paphos nach Nikosia zum Festpreis: 150 € (4 Sitze), 180 € (6 Sitze) oder 240 € (12 Sitze). Etwa 1 Std. 50 Min. bis 2 Std. über die Autobahn, Meet & Greet, 24/7.",
      },
      { property: "og:title", content: "Taxi Flughafen Paphos – Nikosia: Festpreis 150 €" },
      {
        property: "og:description",
        content:
          "Privattaxi zum Festpreis vom Flughafen Paphos zu Hotels, Büros, Universitäten und Wohnadressen in Nikosia.",
      },
      { property: "og:image", content: nicosiaImg },
      { property: "og:locale", content: "de_DE" },
      { name: "twitter:image", content: nicosiaImg },
    ],
  }),
  component: () => (
    <TransferPage
      eyebrow="Flughafen Paphos nach Nikosia"
      title="Taxi vom Flughafen Paphos nach Nikosia"
      subtitle="Privattaxi zum Festpreis vom internationalen Flughafen Paphos nach Nikosia, in die Hauptstadt Zyperns – etwa 1 Stunde 50 Minuten bis 2 Stunden über die Autobahn, mit Meet & Greet und kostenlosen Kindersitzen."
      heroImage={heroImg}
      galleryImage={nicosiaImg}
      defaultPickup="Paphos Airport"
      defaultDropoff="Nicosia"
      fromLocation="Flughafen Paphos"
      toLocation="Nikosia"
      duration="1 Std. 50 Min. – 2 Std."
      distance="150 km"
      intro="Nikosia ist die Hauptstadt Zyperns und das Zentrum für Wirtschaft, Verwaltung und Hochschulen, mitten im Landesinneren gelegen. Wenn Ihr Flug in Paphos landet, bringt Sie ein privates Taxi direkt dorthin – ohne Fahrpläne und ohne lange Autofahrt am Steuer nach dem Flug. Taxicyprus24 bietet ein Taxi vom Flughafen Paphos nach Nikosia zum Festpreis ab 150 € – mit Fahrer in der Ankunftshalle, Flugüberwachung, kostenlosen Kindersitzen und Fahrt bis zu Ihrem Hotel, Büro oder Zuhause."
      bodyParagraphs={[
        "Der Transfer vom Flughafen Paphos nach Nikosia führt über rund 150 km und dauert etwa 1 Stunde 50 Minuten bis 2 Stunden, je nach Verkehr bei der Einfahrt in die Stadt. Die Route folgt der Autobahn A6 nach Osten bis Limassol und dann der A1 nach Norden bis Nikosia – eine ruhige Fahrt in einem komfortablen, klimatisierten Fahrzeug, bei der Sie sich nach dem Flug erholen können.",
        "Geschäftsreisende fahren auf dieser Strecke zu Ministerien, Botschaften, Banken und Firmenbüros in der Hauptstadt, Studierende und Lehrende zu den Universitäten und Familien zu Verwandten. Was Sie auch nach Nikosia führt, der Preis steht vorher fest: 150 € im 4-Sitzer, 180 € im 6-Sitzer-Van und 240 € im 12-Sitzer-Van – ohne Aufschlag für Ankünfte in der Nacht oder Verspätungen.",
        "Wir fahren Sie überall in Nikosia und seine Vororte – zu Hotels im Zentrum, zu Büros, Universitätsgeländen und Wohnadressen in Stadtteilen wie Strovolos, Engomi, Lakatamia und Aglantzia. Senden Sie uns bei der Buchung die vollständige Adresse; für Ziele außerhalb der Stadt bestätigen wir Ihnen den Festpreis im Voraus.",
        "Die Altstadt von Nikosia liegt innerhalb der venezianischen Stadtmauern aus dem 16. Jahrhundert, mit der Ledra-Straße, Museen, Galerien und Cafés in Reichweite vieler zentraler Hotels. Wenn Sie zwischen Ihren Terminen Zeit haben, lohnen sich das Zypern-Museum und die engen Gassen der Altstadt.",
        "Zurück? Ein Taxi von Nikosia zum Flughafen Paphos kostet denselben Festpreis, und wir vereinbaren eine Abholzeit mit ausreichend Puffer für den Check-in. Jeder Transfer beinhaltet Meet & Greet, Flugüberwachung, bis zu 60 Minuten kostenlose Wartezeit nach der Landung, kostenlose Kindersitze und Bezahlung per Karte, Überweisung oder bar in EUR oder GBP.",
      ]}
      highlights={[
        "Festpreis 150 € ab Flughafen Paphos",
        "Etwa 1 Std. 50 Min. – 2 Std. über die Autobahn",
        "Bis vor Hotel, Büro oder Zuhause",
        "Ideal für Geschäftsreisende",
        "Meet & Greet in der Ankunftshalle",
        "Flugüberwachung – Verspätungen kostenlos",
        "Kostenlose Kindersitze & Sitzerhöhungen",
      ]}
      prices={[
        {
          type: "Flughafen Paphos – Nikosia (Limousine)",
          pax: "Bis zu 4 Fahrgäste",
          price: "150 €",
        },
        { type: "Flughafen Paphos – Nikosia (Van)", pax: "Bis zu 6 Fahrgäste", price: "180 €" },
      ]}
      nearbyAreas={[
        "Altstadt von Nikosia",
        "Ledra-Straße",
        "Strovolos",
        "Engomi",
        "Lakatamia",
        "Aglantzia",
        "Universität Zypern",
      ]}
      faqs={paphosToNicosiaFAQs}
      relatedLinks={[
        { to: "/paphos-airport-transfers", label: "Flughafentransfer Paphos" },
        { to: "/paphos-airport-to-larnaca", label: "Flughafen Paphos – Larnaka" },
        { to: "/taxi-to-limassol", label: "Flughafen Paphos – Limassol" },
        { to: "/larnaca-airport-to-paphos", label: "Flughafen Larnaka – Paphos" },
      ]}
    />
  ),
});
