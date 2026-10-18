import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import polisLatchiImg from "@/assets/dest-chloraka.jpg";
import { TransferPage } from "@/components/TransferPage";

const polisLatchiFAQs = [
  {
    q: "Wie viel kostet ein Taxi vom Flughafen Paphos nach Polis und Latchi?",
    a: "Ein privates Taxi vom Flughafen Paphos nach Polis oder Latchi kostet einen Festpreis von 95 € im 4-Sitzer (bis zu 4 Fahrgäste), 120 € im 6-Sitzer-Van und 160 € im 12-Sitzer-Van. Das ist der Gesamtpreis für das Fahrzeug, inklusive Meet & Greet, Flugüberwachung, Gepäck und kostenloser Kindersitze.",
  },
  {
    q: "Wie viel kostet ein Taxi vom Flughafen Larnaka nach Polis und Latchi?",
    a: "Ab Flughafen Larnaka beträgt der Festpreis nach Polis und Latchi 200 € im 4-Sitzer, 250 € im 6-Sitzer-Van und 320 € im 12-Sitzer-Van. Die Fahrt dauert rund 2 Stunden 15 Minuten.",
  },
  {
    q: "Wie lange dauert die Fahrt vom Flughafen Paphos nach Latchi?",
    a: "Etwa 1 Stunde, je nach Verkehr und genauer Adresse. Latchi liegt rund 2 km hinter Polis, die Fahrzeit ist für beide Orte daher ähnlich.",
  },
  {
    q: "Fahren Sie zu Villen in Neo Chorio, Prodromi und Argaka?",
    a: "Ja – wir fahren zu Villen und Ferienhäusern rund um Polis und Latchi, auch in die umliegenden Dörfer. Senden Sie uns bei der Buchung die Adresse oder einen Kartenpunkt, damit wir Ihnen den Festpreis für Ihr genaues Ziel bestätigen können.",
  },
  {
    q: "Kann ich die Rückfahrt von Polis oder Latchi zum Flughafen Paphos buchen?",
    a: "Ja. Die Rückfahrt zum Flughafen Paphos kostet denselben Festpreis. Da die Fahrt etwa eine Stunde dauert, vereinbaren wir mit Ihnen eine Abholzeit mit ausreichend Puffer für den Check-in.",
  },
  {
    q: "Welches Fahrzeug sollte ich für einen Familienurlaub in Latchi buchen?",
    a: "Bis zu 4 Fahrgäste passen in den 4-Sitzer (95 € ab Flughafen Paphos); Familien oder Gruppen von 5–6 Personen buchen den 6-Sitzer-Van (120 €), größere Gruppen bis 12 Personen den 12-Sitzer-Van (160 €). Kindersitze sind kostenlos.",
  },
  {
    q: "Wo treffe ich den Fahrer am Flughafen Paphos?",
    a: "Im Ankunftsbereich, mit einem Schild mit Ihrem Namen. Bis zu 60 Minuten Wartezeit nach der Landung sind kostenlos, und wir verfolgen Ihren Flug – Verspätungen kosten nie extra.",
  },
  {
    q: "Holen Sie mich auch von späten Flügen ab?",
    a: "Ja – wir sind rund um die Uhr im Einsatz, und ein Transfer nach Polis oder Latchi in der Nacht kostet genau denselben Festpreis. Ihr Fahrer verfolgt Ihren Flug und wartet auf Sie, auch wenn Sie spät landen.",
  },
];

export const Route = createFileRoute("/de/taxi-to-polis-latchi")({
  head: () => ({
    meta: [
      { title: "Taxi Flughafen Paphos – Polis & Latchi: Festpreis 95 € | Taxi Cyprus 24" },
      {
        name: "description",
        content:
          "Taxi vom Flughafen Paphos nach Polis und Latchi zum Festpreis: 95 € (4 Sitze) oder 120 € (6 Sitze); ab Flughafen Larnaka 200 €. Von Tür zu Tür, Meet & Greet, 24/7.",
      },
      { property: "og:title", content: "Taxi Flughafen Paphos – Polis & Latchi: Festpreis 95 €" },
      {
        property: "og:description",
        content:
          "Privattaxi zum Festpreis vom Flughafen Paphos nach Polis Chrysochous, zum Hafen von Latchi und an die Küste der Akamas-Halbinsel.",
      },
      { property: "og:image", content: polisLatchiImg },
      { property: "og:locale", content: "de_DE" },
      { name: "twitter:image", content: polisLatchiImg },
    ],
  }),
  component: () => (
    <TransferPage
      eyebrow="Flughafen Paphos nach Polis & Latchi"
      title="Taxi vom Flughafen Paphos nach Polis & Latchi"
      subtitle="Privattaxi zum Festpreis von den Flughäfen Paphos und Larnaka nach Polis Chrysochous, Latchi und in die Dörfer an der Chrysochou-Bucht – von Tür zu Tür, mit Meet & Greet und kostenlosen Kindersitzen."
      heroImage={heroImg}
      galleryImage={polisLatchiImg}
      defaultDropoff="Polis – Lachi"
      fromLocation="Paphos / Larnaka"
      toLocation="Polis & Latchi"
      duration="1 Std. / 2 Std. 15 Min."
      distance="50 km / 175 km"
      intro="Polis Chrysochous und das Hafendorf Latchi liegen an der Chrysochou-Bucht im äußersten Nordwesten Zyperns, am Tor zur Akamas-Halbinsel. Die Gegend ist beliebt für ihr ruhiges Tempo, lange Strände, Fischtavernen und Bootsausflüge entlang der Küste der Akamas. Taxicyprus24 bietet Ihnen ein privates Taxi vom Flughafen Paphos nach Polis und Latchi zum Festpreis von 95 € – mit Meet & Greet, kostenlosen Kindersitzen und Fahrt bis vor die Tür Ihrer Villa, Ihres Hotels oder Ihrer Ferienwohnung."
      bodyParagraphs={[
        "Der Transfer vom Flughafen Paphos nach Polis und Latchi dauert etwa 1 Stunde und führt über rund 50 km. Die Straße verläuft nördlich an Paphos vorbei und durch die Hügel des Hinterlands, bevor sie zur Chrysochou-Bucht hinabführt – eine landschaftlich schöne Strecke, die im Privatwagen deutlich angenehmer ist als mit Gepäck in öffentlichen Verkehrsmitteln. Ihr Fahrer bringt Sie direkt bis vor die Tür, ob in Polis selbst, in Latchi oder zu einer Villa in einem der umliegenden Dörfer.",
        "Latchi ist ein kleiner Fischerhafen rund 2 km westlich von Polis, mit Marina, Fischrestaurants direkt am Wasser und Bootsausflügen entlang der Küste der Akamas. Etwas weiter westlich an der Küstenstraße liegen die Bäder der Aphrodite, eine natürliche Grotte mit Wasserbecken, die mit der Legende der Göttin verbunden ist, sowie der Ausgangspunkt von Wanderwegen auf die Akamas-Halbinsel.",
        "Viele Gäste der Gegend wohnen in Privatvillen in Dörfern wie Neo Chorio, Prodromi und Argaka oder in Ferienhäusern an den Hängen über der Bucht. Senden Sie uns bei der Buchung die Adresse oder einen Kartenpunkt – ländliche Adressen sind nachts schwer zu finden, und Ihr Fahrer bringt Sie bis vor die Tür. Für Dörfer außerhalb von Polis und Latchi bestätigen wir Ihnen den Festpreis im Voraus.",
        "Ab Flughafen Paphos betragen die Festpreise nach Polis und Latchi 95 € im 4-Sitzer, 120 € im 6-Sitzer-Van und 160 € im 12-Sitzer-Van. Ab Flughafen Larnaka ist es einer der längsten Transfers der Insel – rund 2 Stunden 15 Minuten – zum Festpreis von 200 € im 4-Sitzer oder 250 € im 6-Sitzer-Van, ohne Aufschlag für Ankünfte in der Nacht.",
        "Jeder Transfer nach Polis und Latchi beinhaltet Flugüberwachung in Echtzeit, bis zu 60 Minuten kostenlose Wartezeit nach der Landung, Hilfe beim Gepäck, kostenlose Babyschalen und Sitzerhöhungen sowie Wasser an Bord. Familien mit Strandausrüstung oder Kinderwagen buchen am besten den 6- oder 12-Sitzer-Van; bezahlen können Sie online per Karte, per Überweisung oder bar beim Fahrer in EUR oder GBP.",
      ]}
      highlights={[
        "Festpreis 95 € ab Flughafen Paphos",
        "Bis vor die Tür in Polis, Latchi & Dörfern",
        "Fahrer kennen die Landstraßen",
        "Meet & Greet in der Ankunftshalle",
        "Kostenlose Kindersitze & Sitzerhöhungen",
        "Vans für Familien und Gruppen",
        "Gleicher Preis bei Nachtflügen",
      ]}
      prices={[
        {
          type: "Flughafen Paphos – Polis & Latchi (Limousine)",
          pax: "Bis zu 4 Fahrgäste",
          price: "95 €",
        },
        {
          type: "Flughafen Paphos – Polis & Latchi (Van)",
          pax: "Bis zu 6 Fahrgäste",
          price: "120 €",
        },
        {
          type: "Flughafen Larnaka – Polis & Latchi (Limousine)",
          pax: "Bis zu 4 Fahrgäste",
          price: "200 €",
        },
        {
          type: "Flughafen Larnaka – Polis & Latchi (Van)",
          pax: "Bis zu 6 Fahrgäste",
          price: "250 €",
        },
      ]}
      nearbyAreas={[
        "Hafen von Latchi",
        "Polis Chrysochous",
        "Neo Chorio",
        "Prodromi",
        "Argaka",
        "Bäder der Aphrodite",
        "Akamas-Halbinsel",
      ]}
      faqs={polisLatchiFAQs}
      relatedLinks={[
        { to: "/paphos-airport-transfers", label: "Flughafentransfer Paphos" },
        { to: "/taxi-to-coral-bay", label: "Flughafen Paphos – Coral Bay" },
        { to: "/taxi-to-peyia", label: "Flughafen Paphos – Peyia" },
        { to: "/taxi-to-kissonerga", label: "Flughafen Paphos – Kissonerga" },
        { to: "/larnaca-airport-to-paphos", label: "Flughafen Larnaka – Paphos" },
      ]}
    />
  ),
});
