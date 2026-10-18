import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import katoPaphosImg from "@/assets/dest-paphos.jpg";
import { TransferPage } from "@/components/TransferPage";

const katoPaphosFAQs = [
  {
    q: "Wie viel kostet ein Taxi vom Flughafen Paphos nach Kato Paphos?",
    a: "Ein privates Taxi vom Flughafen Paphos nach Kato Paphos oder Paphos-Stadt kostet einen Festpreis von 35 € im 4-Sitzer (bis zu 4 Fahrgäste), 50 € im 6-Sitzer-Van und 80 € im 12-Sitzer-Van. Der Preis gilt pro Fahrzeug und beinhaltet Meet & Greet, Flugüberwachung, Gepäck und kostenlose Kindersitze.",
  },
  {
    q: "Wie lange dauert die Fahrt vom Flughafen Paphos nach Kato Paphos?",
    a: "Etwa 20 Minuten bei normalem Verkehr – der Flughafen liegt nur rund 15 km von der Uferpromenade in Kato Paphos entfernt. Für Hotels am nördlichen Ende der Promenade planen Sie ein paar Minuten mehr ein.",
  },
  {
    q: "Wie viel kostet ein Taxi ins Gebiet der Königsgräber?",
    a: "Für Hotels und Apartments rund um die Königsgräber gilt ein eigener Festpreis ab Flughafen Paphos: 40 € im 4-Sitzer, 50 € im 6-Sitzer-Van und 80 € im 12-Sitzer-Van.",
  },
  {
    q: "Kann ich die Rückfahrt von Kato Paphos zum Flughafen Paphos buchen?",
    a: "Ja. Die Rückfahrt von Kato Paphos zum Flughafen Paphos kostet denselben Festpreis wie die Ankunft. Nennen Sie uns Ihre Abflugzeit, und wir schlagen Ihnen eine Abholzeit am Hotel vor, mit der Sie entspannt am Flughafen ankommen.",
  },
  {
    q: "Fahren Sie auch nach Kamares und Tsada?",
    a: "Ja. Villen in den Hügeln oberhalb von Paphos erreichen Sie zum Festpreis ab Flughafen Paphos: Kamares 55 € und Tsada 60 € im 4-Sitzer; für beide Orte 70 € im 6-Sitzer-Van und 90 € im 12-Sitzer-Van.",
  },
  {
    q: "Wie viel kostet ein Taxi vom Flughafen Larnaka nach Paphos-Stadt?",
    a: "Vom Flughafen Larnaka nach Paphos-Stadt beträgt der Festpreis 140 € im 4-Sitzer, 180 € im 6-Sitzer-Van und 240 € im 12-Sitzer-Van. Die Fahrt dauert etwa 1 Stunde 30 Minuten.",
  },
  {
    q: "Wo treffe ich den Fahrer am Flughafen Paphos?",
    a: "Im Ankunftsbereich, mit einem Schild mit Ihrem Namen. Bis zu 60 Minuten Wartezeit nach der Landung sind kostenlos, und wir verfolgen Ihren Flug – Verspätungen kosten nie extra.",
  },
  {
    q: "Gibt es auch bei späten Flügen ein Taxi nach Kato Paphos?",
    a: "Ja. Wir sind rund um die Uhr im Einsatz, und späte oder sehr frühe Ankünfte kosten denselben Festpreis – ohne Nachtzuschlag.",
  },
];

export const Route = createFileRoute("/de/taxi-to-kato-paphos")({
  head: () => ({
    meta: [
      { title: "Taxi Flughafen Paphos – Kato Paphos: Festpreis 35 € | Taxi Cyprus 24" },
      {
        name: "description",
        content:
          "Taxi vom Flughafen Paphos nach Kato Paphos und Paphos-Stadt zum Festpreis: 35 € (4 Sitze) oder 50 € (6 Sitze); ab Flughafen Larnaka nach Paphos 140 €. Meet & Greet, 24/7.",
      },
      { property: "og:title", content: "Taxi Flughafen Paphos – Kato Paphos: Festpreis 35 €" },
      {
        property: "og:description",
        content:
          "Privattaxi zum Festpreis vom Flughafen Paphos zu Hotels in Kato Paphos, zum Hafen und in die Stadt Paphos.",
      },
      { property: "og:image", content: katoPaphosImg },
      { property: "og:locale", content: "de_DE" },
      { name: "twitter:image", content: katoPaphosImg },
    ],
  }),
  component: () => (
    <TransferPage
      eyebrow="Flughafen Paphos nach Kato Paphos"
      title="Taxi vom Flughafen Paphos nach Kato Paphos"
      subtitle="Taxi zum Festpreis vom Flughafen Paphos zu Ihrem Hotel oder Ihrer Wohnung in Kato Paphos und Paphos-Stadt – etwa 20 Minuten, mit Meet & Greet und kostenlosen Kindersitzen."
      heroImage={heroImg}
      galleryImage={katoPaphosImg}
      defaultDropoff="Paphos Town / Kato Paphos"
      fromLocation="Paphos / Larnaka"
      toLocation="Kato Paphos"
      duration="20 Min. / 1 Std. 30 Min."
      distance="15 km / 140 km"
      intro="Kato Paphos ist das Herz von Paphos am Meer: der Hafen mit seiner mittelalterlichen Festung, der zum UNESCO-Welterbe gehörende Archäologische Park von Paphos und eine lange Uferpromenade mit Hotels, Cafés und Restaurants. Es ist zudem eines der Urlaubsgebiete, die dem internationalen Flughafen Paphos am nächsten liegen. Taxicyprus24 bietet Ihnen ein privates Taxi vom Flughafen Paphos nach Kato Paphos zum Festpreis ab 35 € – mit Fahrer in der Ankunftshalle, kostenlosen Kindersitzen und Fahrt bis vor die Tür Ihres Hotels, Ihrer Wohnung oder Villa, bei Tag und bei Nacht."
      bodyParagraphs={[
        "Die Fahrt vom Flughafen Paphos nach Kato Paphos ist kurz – etwa 20 Minuten und rund 15 km über die Küstenstraße via Geroskipou nach Paphos. Ein angenehmer erster Transfer nach dem Flug: Ihr Fahrer setzt Sie am Haupteingang eines Strandhotels, an einem Apartmenthaus in einer Seitenstraße oder an einer Ferienvilla am Stadtrand ab. Ankünfte in der Nacht kosten denselben Festpreis.",
        "Die meisten Hotels in Kato Paphos liegen entlang der Uferpromenade zwischen dem Hafen und den Königsgräbern. Nennen Sie uns daher bei der Buchung bitte den Namen des Hotels oder die Adresse. Für Hotels im Gebiet der Königsgräber, etwas weiter nördlich an der Küste, gilt ein eigener Festpreis ab Flughafen Paphos: 40 € im 4-Sitzer und 50 € im 6-Sitzer-Van.",
        "Vor Ort lässt sich Kato Paphos bequem zu Fuß erkunden. Am südlichen Ende der Promenade liegen der Hafen von Paphos und die mittelalterliche Festung, gleich daneben der Archäologische Park mit seinen römischen Mosaiken und dem antiken Odeon. Weiter nördlich befinden sich die Königsgräber, eine große, in den Fels gehauene antike Nekropole. Die Oberstadt (Ktima) mit Markthalle und Altstadt erreichen Sie mit dem Auto in wenigen Minuten.",
        "Sie wohnen außerhalb des Zentrums? Viele Ferienvillen liegen in den Hügeln oberhalb von Paphos, und auch dorthin fahren wir zum Festpreis: Kamares ab 55 € und Tsada ab 60 € im 4-Sitzer oder 70 € für beide Orte im 6-Sitzer-Van. Weiter nördlich an der Küste haben Chloraka, Kissonerga, Coral Bay und Peyia jeweils eine eigene Seite mit allen Preisen.",
        "Sie landen stattdessen in Larnaka? Ein privates Taxi vom Flughafen Larnaka nach Paphos-Stadt kostet 140 € im 4-Sitzer und 180 € im 6-Sitzer-Van; die Fahrt über die Autobahn dauert etwa 1 Stunde 30 Minuten. Jeder Transfer beinhaltet Meet & Greet, Flugüberwachung, kostenlose Kindersitze und Bezahlung per Karte, Überweisung oder bar in EUR oder GBP.",
      ]}
      highlights={[
        "Festpreis 35 € ab Flughafen Paphos",
        "Etwa 20 Minuten bis Kato Paphos",
        "Bis vor die Tür von Hotel & Wohnung",
        "Gebiet Königsgräber ab 40 €",
        "Meet & Greet in der Ankunftshalle",
        "Kostenlose Kindersitze & Sitzerhöhungen",
        "Gleicher Preis bei Nachtflügen",
        "Bezahlung per Karte, Überweisung oder bar",
      ]}
      prices={[
        {
          type: "Flughafen Paphos – Kato Paphos (Limousine)",
          pax: "Bis zu 4 Fahrgäste",
          price: "35 €",
        },
        { type: "Flughafen Paphos – Kato Paphos (Van)", pax: "Bis zu 6 Fahrgäste", price: "50 €" },
        {
          type: "Flughafen Paphos – Königsgräber (Limousine)",
          pax: "Bis zu 4 Fahrgäste",
          price: "40 €",
        },
        { type: "Flughafen Paphos – Königsgräber (Van)", pax: "Bis zu 6 Fahrgäste", price: "50 €" },
        {
          type: "Flughafen Larnaka – Paphos-Stadt (Limousine)",
          pax: "Bis zu 4 Fahrgäste",
          price: "140 €",
        },
        {
          type: "Flughafen Larnaka – Paphos-Stadt (Van)",
          pax: "Bis zu 6 Fahrgäste",
          price: "180 €",
        },
      ]}
      nearbyAreas={[
        "Hafen von Paphos",
        "Festung von Paphos",
        "Archäologischer Park Paphos",
        "Königsgräber",
        "Altstadt (Ktima)",
        "Kamares",
        "Tsada",
        "Geroskipou",
      ]}
      faqs={katoPaphosFAQs}
      relatedLinks={[
        { to: "/paphos-airport-transfers", label: "Flughafentransfer Paphos" },
        { to: "/taxi-to-chloraka", label: "Flughafen Paphos – Chloraka" },
        { to: "/taxi-to-kissonerga", label: "Flughafen Paphos – Kissonerga" },
        { to: "/taxi-to-coral-bay", label: "Flughafen Paphos – Coral Bay" },
        { to: "/larnaca-airport-to-paphos", label: "Flughafen Larnaka – Paphos" },
      ]}
    />
  ),
});
