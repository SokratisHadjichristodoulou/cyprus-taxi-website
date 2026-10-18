import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import aphroditeHillsImg from "@/assets/dest-coral-bay.jpg";
import { TransferPage } from "@/components/TransferPage";

const aphroditeHillsFAQs = [
  {
    q: "Wie viel kostet ein Taxi vom Flughafen Paphos nach Aphrodite Hills?",
    a: "Ein privates Taxi vom Flughafen Paphos zum InterContinental Aphrodite Hills kostet einen Festpreis von 45 € im 4-Sitzer (bis zu 4 Fahrgäste), 60 € im 6-Sitzer-Van und 80 € im 12-Sitzer-Van. Der Preis gilt pro Fahrzeug und beinhaltet Meet & Greet, Flugüberwachung, Gepäck und kostenlose Kindersitze.",
  },
  {
    q: "Wie viel kostet ein Taxi vom Flughafen Larnaka nach Aphrodite Hills?",
    a: "Ab Flughafen Larnaka beträgt der Festpreis zum InterContinental Aphrodite Hills 130 € im 4-Sitzer, 180 € im 6-Sitzer-Van und 240 € im 12-Sitzer-Van. Die Fahrt dauert etwa 1 Stunde 15 Minuten.",
  },
  {
    q: "Wie lange dauert der Transfer vom Flughafen Paphos nach Aphrodite Hills?",
    a: "Etwa 20 Minuten über die Autobahn A6, je nach Verkehr und Lage Ihrer Unterkunft im Resort.",
  },
  {
    q: "Gilt derselbe Preis für Villen und Apartments im Resort?",
    a: "Unser angegebener Festpreis gilt für das InterContinental Aphrodite Hills Resort Hotel. Für Privatvillen und Apartments an anderer Stelle in Aphrodite Hills senden Sie uns bei der Buchung bitte die Adresse – wir bestätigen Ihnen den Festpreis vor der Reise.",
  },
  {
    q: "Können Sie Golftaschen mitnehmen?",
    a: "Ja. Nennen Sie uns bei der Buchung die Anzahl Ihrer Golftaschen. Für Gruppen mit Schlägern und Koffern bietet der 6-Sitzer-Van (60 € ab Flughafen Paphos) oder der 12-Sitzer-Van (80 €) mehr Platz.",
  },
  {
    q: "Kann ich die Rückfahrt von Aphrodite Hills zum Flughafen Paphos buchen?",
    a: "Ja. Die Rückfahrt von Aphrodite Hills zum Flughafen Paphos kostet denselben Festpreis, und wir holen Sie zur vereinbarten Zeit am Hoteleingang oder an Ihrer Villa ab.",
  },
  {
    q: "Wo treffe ich den Fahrer am Flughafen Paphos?",
    a: "Im Ankunftsbereich, mit einem Schild mit Ihrem Namen. Bis zu 60 Minuten Wartezeit nach der Landung sind kostenlos, und wir verfolgen Ihren Flug – Verspätungen kosten nie extra.",
  },
  {
    q: "Fahren Sie uns auch zu Petra tou Romiou oder anderen Sehenswürdigkeiten?",
    a: "Ja – neben Flughafentransfers bieten wir Fahrten mit Chauffeur auf Stundenbasis und private Tagesausflüge auf Zypern an. Schreiben Sie uns Ihre Pläne, und wir erstellen Ihnen ein Angebot.",
  },
];

export const Route = createFileRoute("/de/taxi-to-aphrodite-hills")({
  head: () => ({
    meta: [
      { title: "Taxi Flughafen Paphos – Aphrodite Hills: Festpreis 45 € | Taxi Cyprus 24" },
      {
        name: "description",
        content:
          "Taxi vom Flughafen Paphos nach Aphrodite Hills (InterContinental) zum Festpreis: 45 € (4 Sitze) oder 60 € (6 Sitze); ab Flughafen Larnaka 130 €. Meet & Greet, 24/7.",
      },
      { property: "og:title", content: "Taxi Flughafen Paphos – Aphrodite Hills: Festpreis 45 €" },
      {
        property: "og:description",
        content:
          "Privattaxi zum Festpreis von den Flughäfen Paphos und Larnaka zum InterContinental Aphrodite Hills Resort.",
      },
      { property: "og:image", content: aphroditeHillsImg },
      { property: "og:locale", content: "de_DE" },
      { name: "twitter:image", content: aphroditeHillsImg },
    ],
  }),
  component: () => (
    <TransferPage
      eyebrow="Flughafen Paphos nach Aphrodite Hills"
      title="Taxi vom Flughafen Paphos nach Aphrodite Hills"
      subtitle="Privattaxi zum Festpreis von den Flughäfen Paphos und Larnaka zum InterContinental Aphrodite Hills sowie zu den Villen und Apartments des Resorts – mit Meet & Greet und kostenlosen Kindersitzen."
      heroImage={heroImg}
      galleryImage={aphroditeHillsImg}
      defaultDropoff="Intercontinental Hotel (Aphrodite Hills)"
      fromLocation="Paphos / Larnaka"
      toLocation="Aphrodite Hills"
      duration="20 Min. / 1 Std. 15 Min."
      distance="20 km / 120 km"
      intro="Aphrodite Hills ist ein Resort auf den Hügeln über der Küste zwischen Paphos und Limassol – mit dem Fünf-Sterne-Hotel InterContinental Aphrodite Hills Resort, einem 18-Loch-Golfplatz, Villen und Apartments. Es gehört zu den Resorts, die dem internationalen Flughafen Paphos am nächsten liegen. Taxicyprus24 bietet Ihnen ein privates Taxi vom Flughafen Paphos zum InterContinental Aphrodite Hills zum Festpreis von 45 € – mit Fahrer in der Ankunftshalle, Hilfe bei Gepäck und Golftaschen und kostenlosen Kindersitzen."
      bodyParagraphs={[
        "Die Fahrt vom Flughafen Paphos nach Aphrodite Hills dauert etwa 20 Minuten und führt über rund 20 km auf der Autobahn A6 Richtung Limassol, bevor es hinauf zum Resort geht. Ihr Fahrer setzt Sie am Hoteleingang oder vor Ihrer Villa bzw. Ihrem Apartment ab – kein Anstehen am Taxistand und kein Warten auf einen Shuttle nach dem Flug.",
        "Unser Festpreis von 45 € im 4-Sitzer (60 € im 6-Sitzer-Van, 80 € im 12-Sitzer-Van) gilt für das InterContinental Aphrodite Hills Resort Hotel. Sie wohnen in einer privaten Villa oder einem Apartment im Resort? Senden Sie uns bei der Buchung die Adresse, und wir bestätigen Ihnen den Festpreis für Ihr genaues Ziel vor der Reise.",
        "Wenn Sie zum Golfen kommen, nennen Sie uns bei der Buchung die Anzahl Ihrer Golftaschen – im 6- und 12-Sitzer-Van haben Gruppen mehr Platz für Schläger, Koffer und Kinderwagen. Familien können außerdem kostenlose Babyschalen, Kindersitze und Sitzerhöhungen für jedes Kind anfordern, die vor dem Einsteigen eingebaut werden.",
        "Das Resort liegt nahe einiger der bekanntesten Sehenswürdigkeiten dieses Küstenabschnitts. Petra tou Romiou, der Felsen der Aphrodite, an dem der Legende nach die Göttin geboren wurde, ist nur wenige Fahrminuten entfernt, und ganz in der Nähe liegt das Dorf Kouklia mit dem antiken Heiligtum der Aphrodite. Bis Kato Paphos mit Hafen und Archäologischem Park sind es etwa 25 Minuten.",
        "Vom Flughafen Larnaka dauert der Transfer nach Aphrodite Hills etwa 1 Stunde 15 Minuten und kostet 130 € im 4-Sitzer oder 180 € im 6-Sitzer-Van. Alle Transfers beinhalten Flugüberwachung in Echtzeit, bis zu 60 Minuten kostenlose Wartezeit nach der Landung und Bezahlung per Karte, Überweisung oder bar in EUR oder GBP.",
      ]}
      highlights={[
        "Festpreis 45 € zum InterContinental",
        "Etwa 20 Minuten ab Flughafen Paphos",
        "Bis vor Hotel, Villa oder Apartment",
        "Vans für Golfgruppen & Familien",
        "Meet & Greet in der Ankunftshalle",
        "Kostenlose Kindersitze & Sitzerhöhungen",
        "Rund um die Uhr zum gleichen Festpreis",
      ]}
      prices={[
        {
          type: "Flughafen Paphos – Aphrodite Hills (Limousine)",
          pax: "Bis zu 4 Fahrgäste",
          price: "45 €",
        },
        {
          type: "Flughafen Paphos – Aphrodite Hills (Van)",
          pax: "Bis zu 6 Fahrgäste",
          price: "60 €",
        },
        {
          type: "Flughafen Larnaka – Aphrodite Hills (Limousine)",
          pax: "Bis zu 4 Fahrgäste",
          price: "130 €",
        },
        {
          type: "Flughafen Larnaka – Aphrodite Hills (Van)",
          pax: "Bis zu 6 Fahrgäste",
          price: "180 €",
        },
      ]}
      nearbyAreas={[
        "InterContinental Aphrodite Hills",
        "Golfplatz Aphrodite Hills",
        "Petra tou Romiou",
        "Kouklia",
        "Heiligtum der Aphrodite",
        "Pissouri",
      ]}
      faqs={aphroditeHillsFAQs}
      relatedLinks={[
        { to: "/paphos-airport-transfers", label: "Flughafentransfer Paphos" },
        { to: "/taxi-to-pissouri", label: "Flughafen Paphos – Pissouri" },
        { to: "/taxi-to-limassol", label: "Flughafen Paphos – Limassol" },
        { to: "/taxi-to-kato-paphos", label: "Flughafen Paphos – Kato Paphos" },
        { to: "/larnaca-airport-to-paphos", label: "Flughafen Larnaka – Paphos" },
      ]}
    />
  ),
});
