import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import larnacaImg from "@/assets/dest-larnaca.jpg";
import { TransferPage } from "@/components/TransferPage";

const paphosToLarnacaFAQs = [
  {
    q: "Wie viel kostet ein Taxi vom Flughafen Paphos nach Larnaka?",
    a: "Ein privates Taxi vom Flughafen Paphos nach Larnaka kostet einen Festpreis von 140 € im 4-Sitzer (bis zu 4 Fahrgäste), 180 € im 6-Sitzer-Van und 240 € im 12-Sitzer-Van. Der Preis gilt für das ganze Fahrzeug und beinhaltet Meet & Greet, Flugüberwachung, Gepäck und kostenlose Kindersitze.",
  },
  {
    q: "Wie lange dauert die Fahrt vom Flughafen Paphos nach Larnaka?",
    a: "Etwa 1 Stunde 30 Minuten für die 140 km lange Strecke, fast vollständig über die Autobahnen A6, A1 und A5.",
  },
  {
    q: "Kann ich ein Taxi von Larnaka zum Flughafen Paphos buchen?",
    a: "Ja. Die Gegenrichtung – von Larnaka zum Flughafen Paphos – kostet denselben Festpreis. Wir vereinbaren eine Abholzeit mit ausreichend Puffer für den Check-in in Paphos.",
  },
  {
    q: "Fahren Sie auch vom Flughafen Larnaka nach Paphos?",
    a: "Ja. Wenn Sie am Flughafen Larnaka landen, kostet unser Transfer nach Paphos 140 € im 4-Sitzer und 180 € im 6-Sitzer-Van; Ihr Fahrer erwartet Sie in der Ankunftshalle in Larnaka.",
  },
  {
    q: "Gilt der Preis pro Person?",
    a: "Nein. Es ist ein fester Gesamtpreis für das Fahrzeug: 140 € für bis zu 4 Fahrgäste, 180 € für bis zu 6 und 240 € für bis zu 12.",
  },
  {
    q: "Was passiert, wenn mein Flug nach Paphos Verspätung hat?",
    a: "Ihr Fahrer verfolgt den Flug in Echtzeit und wartet auf die tatsächliche Landezeit. Verspätungen kosten nie extra, und bis zu 60 Minuten Wartezeit nach der Landung sind kostenlos.",
  },
  {
    q: "Wohin in Larnaka können Sie mich bringen?",
    a: "Überall in Larnaka hin: zu Hotels an der Promenade Finikoudes und am Mackenzie Beach, ins Zentrum, in die Gegend um die Marina und zu Wohnadressen. Nennen Sie uns bei der Buchung die vollständige Adresse, damit wir Ihnen den Festpreis bestätigen können.",
  },
  {
    q: "Können wir auch nachts fahren?",
    a: "Ja. Wir sind rund um die Uhr im Einsatz, und späte oder sehr frühe Transfers nach Larnaka kosten denselben Festpreis.",
  },
];

export const Route = createFileRoute("/de/paphos-airport-to-larnaca")({
  head: () => ({
    meta: [
      { title: "Taxi Flughafen Paphos – Larnaka: Festpreis 140 € | Taxi Cyprus 24" },
      {
        name: "description",
        content:
          "Taxi vom Flughafen Paphos nach Larnaka zum Festpreis: 140 € (4 Sitze), 180 € (6 Sitze) oder 240 € (12 Sitze). Etwa 1 Std. 30 Min. über die Autobahn, Meet & Greet, 24/7.",
      },
      { property: "og:title", content: "Taxi Flughafen Paphos – Larnaka: Festpreis 140 €" },
      {
        property: "og:description",
        content:
          "Privattaxi zum Festpreis vom Flughafen Paphos zu Hotels, Wohnungen und der Uferpromenade in Larnaka.",
      },
      { property: "og:image", content: larnacaImg },
      { property: "og:locale", content: "de_DE" },
      { name: "twitter:image", content: larnacaImg },
    ],
  }),
  component: () => (
    <TransferPage
      eyebrow="Flughafen Paphos nach Larnaka"
      title="Taxi vom Flughafen Paphos nach Larnaka"
      subtitle="Privattaxi zum Festpreis vom internationalen Flughafen Paphos nach Larnaka – etwa 1 Stunde 30 Minuten über die Autobahn, mit Meet & Greet, Flugüberwachung und kostenlosen Kindersitzen."
      heroImage={heroImg}
      galleryImage={larnacaImg}
      defaultPickup="Paphos Airport"
      defaultDropoff="Larnaka"
      fromLocation="Flughafen Paphos"
      toLocation="Larnaka"
      duration="1 Std. 30 Min."
      distance="140 km"
      intro="Sie landen in Paphos, wohnen aber in Larnaka? Ein privates Taxi ist der einfachste Weg quer über die Insel: keine Fahrpläne, keine Formalitäten für einen Mietwagen nach dem Flug – nur ein Fahrer, der in der Ankunftshalle auf Sie wartet. Taxicyprus24 fährt Sie vom internationalen Flughafen Paphos nach Larnaka zum Festpreis von 140 € im 4-Sitzer – mit Meet & Greet, Flugüberwachung in Echtzeit, kostenlosen Kindersitzen und Fahrt bis zu Ihrem Hotel, Ihrer Wohnung oder Ihrem Zuhause, zum gleichen Preis bei Tag und Nacht."
      bodyParagraphs={[
        "Die Strecke vom Flughafen Paphos nach Larnaka ist rund 140 km lang und dauert etwa 1 Stunde 30 Minuten, fast vollständig auf der Autobahn: auf der A6 nach Osten bis Limassol, dann über die A1 und die A5 Richtung Larnaka. Es ist dieselbe Entfernung wie auf unserer beliebten Strecke vom Flughafen Larnaka nach Paphos, und im Privatwagen gibt es keine Stopps für andere Fahrgäste.",
        "Reisende nutzen diese Strecke aus vielen Gründen: Urlaub, der sich zwischen dem Westen und Osten Zyperns aufteilt, Familienbesuche, Geschäftstermine in Larnaka oder Flüge, die in Paphos landen, während die Unterkunft bei Larnaka gebucht ist. Der Festpreis bleibt immer gleich – 140 € im 4-Sitzer, 180 € im 6-Sitzer-Van und 240 € im 12-Sitzer-Van – ohne Aufschlag für Ankünfte in der Nacht oder Flugverspätungen.",
        "Wir fahren Sie überall in Larnaka hin – zu Hotels an der Promenade Finikoudes und am Mackenzie Beach, zu Wohnungen im Zentrum und rund um die Marina sowie zu Wohnadressen in den Vororten. Senden Sie uns bei der Buchung die vollständige Adresse, damit wir Ihnen den Festpreis bestätigen und Ihr Fahrer Sie direkt bis vor die Tür bringt.",
        "Auf einer längeren Strecke zählt Komfort. Sie fahren in einem sauberen, klimatisierten Privatfahrzeug, das nur für Ihre Gruppe reserviert ist, mit Wasser an Bord und Platz für Ihre Koffer – der 6- und der 12-Sitzer-Van eignen sich für Familien und Gruppen mit mehr Gepäck.",
        "Sie brauchen die Gegenrichtung? Ein Taxi von Larnaka zurück zum Flughafen Paphos kostet denselben Festpreis, und für Ankünfte am Flughafen Larnaka gibt es unseren Transfer vom Flughafen Larnaka nach Paphos. Jede Fahrt beinhaltet Meet & Greet, kostenlose Babyschalen und Sitzerhöhungen, Hilfe beim Gepäck und Bezahlung per Karte, Überweisung oder bar in EUR oder GBP.",
      ]}
      highlights={[
        "Festpreis 140 € ab Flughafen Paphos",
        "Etwa 1 Std. 30 Min. über die Autobahn",
        "Bis vor die Tür, überall in Larnaka",
        "Meet & Greet in der Ankunftshalle",
        "Flugüberwachung – Verspätungen kostenlos",
        "Kostenlose Kindersitze & Sitzerhöhungen",
        "Vans für 6 und 12 Fahrgäste",
      ]}
      prices={[
        {
          type: "Flughafen Paphos – Larnaka (Limousine)",
          pax: "Bis zu 4 Fahrgäste",
          price: "140 €",
        },
        { type: "Flughafen Paphos – Larnaka (Van)", pax: "Bis zu 6 Fahrgäste", price: "180 €" },
      ]}
      nearbyAreas={[
        "Promenade Finikoudes",
        "Mackenzie Beach",
        "Marina Larnaka",
        "Zentrum von Larnaka",
        "Dhekelia Road",
        "Oroklini",
      ]}
      faqs={paphosToLarnacaFAQs}
      relatedLinks={[
        { to: "/paphos-airport-transfers", label: "Flughafentransfer Paphos" },
        { to: "/paphos-airport-to-nicosia", label: "Flughafen Paphos – Nikosia" },
        { to: "/taxi-to-limassol", label: "Flughafen Paphos – Limassol" },
        { to: "/larnaca-airport-to-paphos", label: "Flughafen Larnaka – Paphos" },
        { to: "/larnaca-airport-transfers", label: "Flughafentransfer Larnaka" },
      ]}
    />
  ),
});
