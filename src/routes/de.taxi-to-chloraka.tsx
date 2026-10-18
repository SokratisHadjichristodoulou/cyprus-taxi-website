import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import chlorakaImg from "@/assets/dest-chloraka.jpg";
import { TransferPage } from "@/components/TransferPage";

const chlorakaFAQs = [
  {
    q: "Wie viel kostet ein Taxi vom Flughafen Larnaka nach Chloraka?",
    a: "Taxicyprus24 bietet Privattransfers zum Festpreis vom internationalen Flughafen Larnaka nach Chloraka ab 140 € in der Mercedes E-Klasse (bis zu 4 Fahrgäste) und ab 180 € im Premium-Van mit 6 Sitzen. Der Preis beinhaltet Gepäck, kostenlose Kindersitze, Flugüberwachung und Meet & Greet am Flughafen – ohne versteckte Kosten.",
  },
  {
    q: "Wie viel kostet ein Taxi vom Flughafen Paphos nach Chloraka?",
    a: "Ein privates Taxi vom internationalen Flughafen Paphos nach Chloraka kostet ab 45 € in der Mercedes E-Klasse (bis zu 4 Fahrgäste) und ab 60 € im Premium-Van mit 6 Sitzen. Alle Angebote von Taxicyprus24 sind Festpreise inklusive Gepäck, kostenloser Kindersitze und Meet & Greet – Sie zahlen genau den gebuchten Preis.",
  },
  {
    q: "Wie lange dauert der Transfer nach Chloraka?",
    a: "Vom Flughafen Paphos nach Chloraka dauert die Fahrt etwa 25 Minuten über die Küstenstraße. Vom Flughafen Larnaka sind es je nach Verkehr rund 1 Stunde 40 Minuten über die Autobahn A6.",
  },
  {
    q: "Fahren Sie bis zu Villen und Privatadressen in Chloraka?",
    a: "Ja – jeder Transfer von Taxicyprus24 geht von Tür zu Tür. Unsere Fahrer bringen Sie direkt zu Ihrer Villa, Ihrem Hotel oder Ihrer Wohnung in Chloraka, einschließlich Coralia Beach, Azia Resort, Aphrodite Beach Hotel und aller Wohnstraßen im Dorf.",
  },
  {
    q: "Ist Meet & Greet bei Ankunft in Larnaka und Paphos inklusive?",
    a: "Ja. Ihr Fahrer verfolgt Ihren Flug in Echtzeit und wartet in der Ankunftshalle mit einem persönlichen Namensschild. Meet & Greet, Flugüberwachung und kurze Verspätungen kosten nichts extra.",
  },
  {
    q: "Kann ich die Rückfahrt von Chloraka zum Flughafen buchen?",
    a: "Selbstverständlich. Die meisten Kunden buchen An- und Rückreise gleichzeitig. Rücktransfers von Chloraka zum Flughafen Larnaka oder Paphos kosten denselben Festpreis – mit pünktlicher Abholung auch für sehr frühe und späte Flüge.",
  },
  {
    q: "Sind Kindersitze kostenlos?",
    a: "Ja – Babyschalen, Kindersitze und Sitzerhöhungen sind bei jedem Transfer nach Chloraka kostenlos. Nennen Sie uns bei der Buchung einfach Anzahl und Alter der Kinder.",
  },
  {
    q: "Wie bezahle ich meinen Transfer nach Chloraka?",
    a: "Sie können sicher online per Kredit- oder Debitkarte, per Banküberweisung oder bar beim Fahrer am Ende der Fahrt bezahlen. Wir akzeptieren EUR und GBP.",
  },
];

export const Route = createFileRoute("/de/taxi-to-chloraka")({
  head: () => ({
    meta: [
      { title: "Taxi Flughafen Paphos – Chloraka: Festpreis 45 € | Taxi Cyprus 24" },
      {
        name: "description",
        content:
          "Taxi vom Flughafen Paphos nach Chloraka zum Festpreis: 45 € (4 Sitze) oder 60 € (6 Sitze); ab Flughafen Larnaka 140 €. Von Tür zu Tür, Meet & Greet, 24/7.",
      },
      { property: "og:title", content: "Taxi Flughafen Paphos – Chloraka: Festpreis 45 €" },
      {
        property: "og:description",
        content:
          "Privattransfers zum Festpreis von den Flughäfen Larnaka und Paphos nach Chloraka – in wenigen Minuten gebucht.",
      },
      { property: "og:image", content: chlorakaImg },
      { property: "og:locale", content: "de_DE" },
      { name: "twitter:image", content: chlorakaImg },
    ],
  }),
  component: () => (
    <TransferPage
      eyebrow="Flughafen Larnaka & Paphos nach Chloraka"
      title="Taxi vom Flughafen Paphos nach Chloraka"
      subtitle="Flughafentransfers zum Festpreis von Larnaka und Paphos nach Chloraka. Von Tür zu Tür, Meet & Greet, kostenlose Kindersitze – in wenigen Minuten gebucht."
      heroImage={heroImg}
      galleryImage={chlorakaImg}
      defaultDropoff="Chlorakas / Empa"
      fromLocation="Paphos / Larnaka"
      toLocation="Chloraka"
      duration="25 Min. / 1 Std. 40 Min."
      distance="20 km / 150 km"
      intro="Sie suchen ein privates Taxi nach Chloraka ab Flughafen Larnaka oder Paphos? Taxicyprus24 bietet Flughafentransfers nach Chloraka zum Festpreis – ab 45 € in der Mercedes E-Klasse und ab 60 € im Premium-Van mit 6 Sitzen. Unser Service rund um die Uhr umfasst Meet & Greet, Flugüberwachung in Echtzeit, kostenlose Kindersitze, professionelle englischsprachige Fahrer und die Fahrt direkt bis zu Ihrer Villa, Ihrem Hotel oder Ihrer Wohnung in Chloraka – ohne versteckte Kosten."
      bodyParagraphs={[
        "Chloraka ist ein ruhiges Küstendorf nördlich von Paphos, beliebt bei britischen und europäischen Urlaubern wegen seiner Strände, familienfreundlichen Resorts und hochwertigen Ferienvillen. Vom internationalen Flughafen Paphos fahren Sie etwa 25 Minuten über die malerische Küstenstraße nach Chloraka. Vom internationalen Flughafen Larnaka sind es rund 135 km (etwa 1 Stunde 40 Minuten) über die Autobahn A6.",
        "Wir fahren in jeden Teil von Chloraka – zu den Resorts am Meer, in die Gegend um Saint George, ins Dorfzentrum und in die Wohnstraßen, in denen die meisten privaten Ferienvillen liegen. Unsere Limousinen der Mercedes E-Klasse und unsere Premium-Vans eignen sich ideal für Paare, Familien und Gruppen mit Gepäck.",
        "Die Buchung Ihres Transfers nach Chloraka ist schnell und einfach: Füllen Sie das Online-Formular aus, schreiben Sie uns per WhatsApp an +357 96 626 844 oder rufen Sie uns an. Sie erhalten schnell eine Bestätigung und einen festen Gesamtpreis ohne versteckte Kosten.",
      ]}
      highlights={[
        "Festpreis ab Larnaka & Paphos nach Chloraka",
        "Von Tür zu Tür zu Villa oder Hotel",
        "Mercedes E-Klasse & Premium-Vans",
        "Kostenlose Kindersitze & Sitzerhöhungen",
        "Meet & Greet mit Namensschild",
        "Flugüberwachung in Echtzeit",
        "Buchung und Ankünfte rund um die Uhr",
        "Bezahlung online, per Karte oder bar",
      ]}
      prices={[
        {
          type: "Flughafen Paphos – Chloraka (Limousine)",
          pax: "Bis zu 4 Fahrgäste",
          price: "45 €",
        },
        { type: "Flughafen Paphos – Chloraka (Van)", pax: "Bis zu 6 Fahrgäste", price: "60 €" },
        {
          type: "Flughafen Larnaka – Chloraka (Limousine)",
          pax: "Bis zu 4 Fahrgäste",
          price: "140 €",
        },
        { type: "Flughafen Larnaka – Chloraka (Van)", pax: "Bis zu 6 Fahrgäste", price: "180 €" },
      ]}
      nearbyAreas={[
        "Kissonerga",
        "Lemba",
        "Kato Paphos",
        "Coral Bay",
        "Peyia",
        "Königsgräber",
        "Saint George",
      ]}
      faqs={chlorakaFAQs}
      relatedLinks={[
        { to: "/taxi-to-coral-bay", label: "Taxi nach Coral Bay" },
        { to: "/taxi-to-peyia", label: "Taxi nach Peyia" },
        { to: "/paphos-airport-transfers", label: "Flughafentransfer Paphos" },
        { to: "/larnaca-airport-transfers", label: "Flughafentransfer Larnaka" },
        { to: "/larnaca-airport-to-paphos", label: "Flughafen Larnaka – Paphos" },
      ]}
    />
  ),
});
