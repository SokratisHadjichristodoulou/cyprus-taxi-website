import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import kissonergaImg from "@/assets/dest-peyia.jpg";
import { TransferPage } from "@/components/TransferPage";

const kissonergaFAQs = [
  {
    q: "Wie viel kostet ein Taxi vom Flughafen Paphos nach Kissonerga?",
    a: "Ein privates Taxi vom Flughafen Paphos nach Kissonerga kostet einen Festpreis von 55 € im 4-Sitzer (bis zu 4 Fahrgäste), 70 € im 6-Sitzer-Van und 85 € im 12-Sitzer-Van. Der Preis gilt pro Fahrzeug und beinhaltet Meet & Greet, Flugüberwachung, Gepäck und kostenlose Kindersitze.",
  },
  {
    q: "Gilt derselbe Preis für Tala?",
    a: "Ja. Für Kissonerga und Tala gilt derselbe Festpreis ab Flughafen Paphos: 55 €, 70 € oder 85 € je nach Fahrzeug. Für Kamares, gleich neben Tala, gelten 55 € im 4-Sitzer, 70 € im 6-Sitzer-Van und 90 € im 12-Sitzer-Van.",
  },
  {
    q: "Wie viel kostet ein Taxi vom Flughafen Larnaka nach Kissonerga oder Tala?",
    a: "Ab Flughafen Larnaka beträgt der Festpreis 140 € im 4-Sitzer, 180 € im 6-Sitzer-Van und 240 € im 12-Sitzer-Van, bei einer Fahrzeit von rund 1 Stunde 40 Minuten.",
  },
  {
    q: "Wie lange dauert der Transfer vom Flughafen Paphos nach Kissonerga?",
    a: "Etwa 30 Minuten bei normalem Verkehr. Nach Tala dauert es ähnlich lange, da das letzte Stück der Fahrt den Hügel hinaufführt.",
  },
  {
    q: "Findet der Fahrer meine Villa?",
    a: "Ja. Senden Sie uns bei der Buchung Namen und Adresse der Villa oder einen Google-Maps-Pin, und Ihr Fahrer bringt Sie bis vor die Tür – auch in ruhigen Wohnstraßen.",
  },
  {
    q: "Kann ich die Rückfahrt von Kissonerga oder Tala zum Flughafen Paphos buchen?",
    a: "Ja. Die Rückfahrt kostet denselben Festpreis, und wir planen die Abholung an Ihrer Villa so, dass Sie rechtzeitig zu Ihrem Flug am Flughafen sind.",
  },
  {
    q: "Welches Fahrzeug brauche ich?",
    a: "Bis zu 4 Fahrgäste fahren im 4-Sitzer (55 €), 5–6 Fahrgäste im 6-Sitzer-Van (70 €) und Gruppen von 7–12 Personen im 12-Sitzer-Van (85 €). Babyschalen, Kindersitze und Sitzerhöhungen sind kostenlos.",
  },
  {
    q: "Holen Sie auch von späten Flügen ab?",
    a: "Ja. Wir sind rund um die Uhr im Einsatz, und Transfers nach Kissonerga und Tala in der Nacht kosten genau denselben Festpreis.",
  },
];

export const Route = createFileRoute("/de/taxi-to-kissonerga")({
  head: () => ({
    meta: [
      { title: "Taxi Flughafen Paphos – Kissonerga: Festpreis 55 € | Taxi Cyprus 24" },
      {
        name: "description",
        content:
          "Taxi vom Flughafen Paphos nach Kissonerga und Tala zum Festpreis: 55 € (4 Sitze) oder 70 € (6 Sitze); ab Flughafen Larnaka 140 €. Von Tür zu Tür, Meet & Greet, 24/7.",
      },
      { property: "og:title", content: "Taxi Flughafen Paphos – Kissonerga: Festpreis 55 €" },
      {
        property: "og:description",
        content:
          "Privattaxi zum Festpreis von den Flughäfen Paphos und Larnaka nach Kissonerga, Tala und zu den Villen nördlich von Paphos.",
      },
      { property: "og:image", content: kissonergaImg },
      { property: "og:locale", content: "de_DE" },
      { name: "twitter:image", content: kissonergaImg },
    ],
  }),
  component: () => (
    <TransferPage
      eyebrow="Flughafen Paphos nach Kissonerga & Tala"
      title="Taxi vom Flughafen Paphos nach Kissonerga"
      subtitle="Privattaxi zum Festpreis von den Flughäfen Paphos und Larnaka nach Kissonerga, Tala und zu den Villen nördlich von Paphos – von Tür zu Tür, mit Meet & Greet und kostenlosen Kindersitzen."
      heroImage={heroImg}
      galleryImage={kissonergaImg}
      defaultDropoff="Kissonerga / Tala"
      fromLocation="Paphos / Larnaka"
      toLocation="Kissonerga & Tala"
      duration="30 Min. / 1 Std. 40 Min."
      distance="25 km / 150 km"
      intro="Kissonerga ist ein Küstendorf zwischen Chloraka und Coral Bay, umgeben von Bananenplantagen und einem ruhigen Küstenabschnitt, der bei Villenurlaubern beliebt ist. Im Hinterland liegt das Dorf Tala auf den Hügeln über Paphos, mit Blick bis aufs Meer. Für beide gilt bei Taxicyprus24 derselbe Festpreis: Ein privates Taxi vom Flughafen Paphos nach Kissonerga oder Tala kostet 55 € im 4-Sitzer – mit Meet & Greet, kostenlosen Kindersitzen und Fahrt bis vor die Tür Ihrer Villa oder Wohnung."
      bodyParagraphs={[
        "Der Transfer vom Flughafen Paphos nach Kissonerga dauert etwa 30 Minuten und führt über rund 25 km auf der Küstenstraße nach Norden durch Paphos und Chloraka. Tala erreichen Sie in ähnlicher Zeit, doch der Ort liegt höher, auf den Hügeln nördlich von Paphos, und das letzte Stück der Fahrt führt bergauf durch Wohnstraßen. Ihr Fahrer bringt Sie zur genauen Adresse – Sie müssen weder ein Taxi suchen noch Gepäck den Hang hinauftragen.",
        "Kissonerga hat sich trotz der Nähe zu Paphos seinen dörflichen Charakter bewahrt: Bananenplantagen reichen bis ans Meer, im Dorfzentrum gibt es Tavernen und am Rand der Felder Ferienvillen. Die Küste ist hier felsig mit kleinen Buchten, und der Sandstrand von Coral Bay liegt nur wenige Minuten weiter nördlich.",
        "Tala ist ein Dorf auf den Hügeln, bekannt für seinen Dorfplatz und den Blick auf die Küste; in seinen Straßen stehen viele Ferienvillen und Häuser von Langzeitbewohnern. Das Kloster Agios Neophytos, im 12. Jahrhundert rund um die in den Fels gehauene Klause des Einsiedlers gegründet, ist nur eine kurze Fahrt entfernt. Für das benachbarte Kamares gilt ein eigener Festpreis ab Flughafen Paphos – 55 € im 4-Sitzer.",
        "Die Festpreise vom Flughafen Paphos nach Kissonerga oder Tala betragen 55 € im 4-Sitzer, 70 € im 6-Sitzer-Van und 85 € im 12-Sitzer-Van. Ab Flughafen Larnaka beträgt der Festpreis 140 € im 4-Sitzer und 180 € im 6-Sitzer-Van, bei einer Fahrzeit von etwa 1 Stunde 40 Minuten über die Autobahn A6.",
        "Jeder Transfer beinhaltet Flugüberwachung in Echtzeit, bis zu 60 Minuten kostenlose Wartezeit nach der Landung, Hilfe beim Gepäck, kostenlose Babyschalen und Sitzerhöhungen sowie Wasser an Bord. Bezahlen Sie online per Karte, per Überweisung oder bar beim Fahrer in EUR oder GBP – der Preis ändert sich weder bei Nachtflügen noch bei Verspätungen.",
      ]}
      highlights={[
        "Festpreis 55 € ab Flughafen Paphos",
        "Gleicher Preis für Kissonerga und Tala",
        "Bis vor die Tür von Villa & Wohnung",
        "Fahrer kennen die Hangstraßen",
        "Meet & Greet in der Ankunftshalle",
        "Kostenlose Kindersitze & Sitzerhöhungen",
        "Rund um die Uhr, nachts gleicher Preis",
      ]}
      prices={[
        {
          type: "Flughafen Paphos – Kissonerga / Tala (Limousine)",
          pax: "Bis zu 4 Fahrgäste",
          price: "55 €",
        },
        {
          type: "Flughafen Paphos – Kissonerga / Tala (Van)",
          pax: "Bis zu 6 Fahrgäste",
          price: "70 €",
        },
        {
          type: "Flughafen Larnaka – Kissonerga / Tala (Limousine)",
          pax: "Bis zu 4 Fahrgäste",
          price: "140 €",
        },
        {
          type: "Flughafen Larnaka – Kissonerga / Tala (Van)",
          pax: "Bis zu 6 Fahrgäste",
          price: "180 €",
        },
      ]}
      nearbyAreas={[
        "Dorf Kissonerga",
        "Tala",
        "Kamares",
        "Kloster Agios Neophytos",
        "Chloraka",
        "Coral Bay",
        "Lemba",
      ]}
      faqs={kissonergaFAQs}
      relatedLinks={[
        { to: "/paphos-airport-transfers", label: "Flughafentransfer Paphos" },
        { to: "/taxi-to-chloraka", label: "Flughafen Paphos – Chloraka" },
        { to: "/taxi-to-coral-bay", label: "Flughafen Paphos – Coral Bay" },
        { to: "/taxi-to-peyia", label: "Flughafen Paphos – Peyia" },
        { to: "/larnaca-airport-to-paphos", label: "Flughafen Larnaka – Paphos" },
      ]}
    />
  ),
});
