import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import paphosImg from "@/assets/dest-paphos.jpg";
import { TransferPage } from "@/components/TransferPage";
import { PriceTable } from "@/components/PriceTable";
import { pricingFromPaphos } from "@/lib/pricing";
import { paphosRouteLinks } from "@/lib/route-links";

const paphosAirportFAQs = [
  {
    q: "Wo treffe ich meinen Fahrer am Flughafen Paphos?",
    a: "Ihr Fahrer erwartet Sie in der Ankunftshalle des internationalen Flughafens Paphos (PFO) mit einem Schild mit Ihrem Namen. Sobald Sie Ihr Gepäck abgeholt haben, halten Sie nach Ihrem Namen Ausschau – der Fahrer hilft Ihnen mit den Koffern und begleitet Sie direkt zum Fahrzeug. Bis zu 60 Minuten Wartezeit nach der Landung sind kostenlos.",
  },
  {
    q: "Was kostet ein Taxi vom Flughafen Paphos?",
    a: "Die Festpreise beginnen bei 35 € nach Paphos-Stadt und Kato Paphos im 4-Sitzer. Weitere beliebte Festpreise ab Flughafen Paphos (4-Sitzer): Chloraka 45 €, Coral Bay und Peyia 65 €, Limassol 90 €, Larnaka 140 € und Nikosia 150 €. Jeder Preis gilt pro Fahrzeug, nicht pro Person – die Preise für 6- und 12-Sitzer finden Sie in der Tabelle unten.",
  },
  {
    q: "Was passiert, wenn mein Flug nach Paphos Verspätung hat?",
    a: "Wir verfolgen Ihren Flug anhand der Flugnummer in Echtzeit, sodass Ihr Fahrer die Abholung an die tatsächliche Landezeit anpasst. Verspätungen – auch von mehreren Stunden – kosten nichts extra: Sie zahlen genau den gebuchten Preis.",
  },
  {
    q: "Holen Sie mich auch spät abends oder früh morgens ab?",
    a: "Ja. Taxicyprus24 ist 24 Stunden am Tag, 7 Tage die Woche im Einsatz, auch an Wochenenden und Feiertagen. Ankünfte in der Nacht am Flughafen Paphos kosten denselben Festpreis – ohne Nachtzuschlag.",
  },
  {
    q: "Welches Fahrzeug brauche ich für meine Gruppe?",
    a: "Wählen Sie nach Anzahl der Fahrgäste: 4-Sitzer für bis zu 4 Personen, 6-Sitzer-Van für 5–6 Personen und 12-Sitzer-Van für 7–12 Personen. Der Festpreis gilt pro Fahrzeug, daher zahlen größere Gruppen oft weniger pro Person. Geben Sie sperriges Gepäck wie Golftaschen oder Kinderwagen bitte bei der Buchung an.",
  },
  {
    q: "Wie bezahle ich meinen Transfer vom Flughafen Paphos?",
    a: "Sie können sicher online per Kredit- oder Debitkarte, per Banküberweisung oder bar beim Fahrer am Ende der Fahrt bezahlen. Wir akzeptieren EUR und GBP.",
  },
  {
    q: "Sind Kindersitze inklusive?",
    a: "Ja – Babyschalen, Kindersitze und Sitzerhöhungen sind bei jedem Transfer ab Flughafen Paphos kostenlos. Nennen Sie uns bei der Buchung einfach Anzahl und Alter der Kinder.",
  },
  {
    q: "Kann ich meine Buchung stornieren?",
    a: "Ja. Bis 24 Stunden vor der Abholzeit ist die Stornierung kostenlos. Bei Stornierungen weniger als 24 Stunden vor dem Transfer werden 50 % des Preises berechnet, bei Nichterscheinen der volle Preis.",
  },
];

export const Route = createFileRoute("/de/paphos-airport-transfers")({
  head: () => ({
    meta: [
      { title: "Flughafentransfer Paphos (PFO) – Privattaxi ab 35 € | Taxi Cyprus 24" },
      {
        name: "description",
        content:
          "Flughafentransfer Paphos zum Festpreis: Taxi vom Flughafen Paphos nach Kato Paphos ab 35 €, Coral Bay 65 €, Limassol 90 €. Meet & Greet, Kindersitze inklusive, 24/7.",
      },
      { property: "og:title", content: "Flughafentransfer Paphos (PFO) – Privattaxi ab 35 €" },
      {
        property: "og:description",
        content:
          "Privattaxi zum Festpreis vom Flughafen Paphos nach Kato Paphos, Coral Bay, Peyia, Limassol und in ganz Zypern.",
      },
      { property: "og:image", content: paphosImg },
      { property: "og:locale", content: "de_DE" },
      { name: "twitter:image", content: paphosImg },
    ],
  }),
  component: () => (
    <>
      <TransferPage
        eyebrow="Flughafen Paphos (PFO)"
        title="Flughafentransfer Paphos & Privattaxi"
        subtitle="Privattransfers zum Festpreis vom internationalen Flughafen Paphos nach Coral Bay, Peyia, Chloraka, Kato Paphos und zu jedem Ziel auf Zypern."
        heroImage={heroImg}
        galleryImage={paphosImg}
        defaultPickup="Paphos Airport"
        fromLocation="Flughafen Paphos"
        toLocation="Ganz Zypern"
        duration="20 Min. – 2 Std."
        distance="20–250 km"
        intro="Der internationale Flughafen Paphos (PFO) ist der zweitgrößte Flughafen Zyperns und das Tor für Reisende nach Paphos, Coral Bay, Peyia, Limassol und in den Westen der Insel. Taxicyprus24 ist auf private Taxitransfers ab und nach Paphos spezialisiert und fährt Sie zum Festpreis, mit professionellen Fahrern und rund um die Uhr an jedes Ziel auf Zypern."
        bodyParagraphs={[
          "Keine langen Taxi-Schlangen, keine vollen Shuttle-Busse, keine geteilten Fahrten: Unser privater Flughafentransfer bringt Sie direkt von Tür zu Tür zu Hotels, Villen, Resorts und Ferienwohnungen überall auf Zypern – ohne Wartezeit.",
          "Ihr Fahrer erwartet Sie in der Ankunftshalle mit einem Namensschild, hilft beim Gepäck und begleitet Sie zu einem sauberen, klimatisierten Fahrzeug. Typische Fahrzeiten ab Flughafen Paphos: Coral Bay etwa 25 Minuten, Peyia etwa 30 Minuten, Limassol etwa 50 Minuten und Larnaka etwa 1 Stunde 30 Minuten.",
          "Jeder Transfer ab Flughafen Paphos beinhaltet kostenlose Baby- und Kindersitze, Wasser an Bord, Flugüberwachung und kostenlose Stornierung bis 24 Stunden vor der Abholung. Bezahlen Sie sicher online per Karte oder direkt beim Fahrer in EUR oder GBP.",
          "Ob Taxi vom Flughafen Paphos nach Coral Bay, Peyia, Limassol, Larnaka, Nikosia oder an ein anderes Ziel auf Zypern – Taxicyprus24 garantiert komfortable Privattransfers zum Festpreis ohne versteckte Kosten.",
          "Für die Strecke Flughafen Paphos – Nikosia gilt in unserer Preistabelle ein Festpreis von 150 € im 4-Sitzer. Größere Fahrzeuge und alle weiteren Ziele finden Sie in der vollständigen Tabelle.",
        ]}
        highlights={[
          "Direkt ab Flughafen Paphos (PFO)",
          "Meet & Greet in der Ankunftshalle",
          "Saubere, komfortable Fahrzeuge",
          "Festpreise – keine Aufschläge",
          "Auch nachts rund um die Uhr",
          "Kostenlose Flugüberwachung",
        ]}
        prices={[
          { type: "PFO – Coral Bay", pax: "Bis zu 4 Fahrgäste", price: "65 €" },
          { type: "PFO – Limassol", pax: "Bis zu 4 Fahrgäste", price: "90 €" },
          { type: "PFO – Larnaka", pax: "Bis zu 4 Fahrgäste", price: "140 €" },
          { type: "PFO – Nikosia", pax: "Bis zu 4 Fahrgäste", price: "150 €" },
        ]}
        nearbyAreas={[
          "Coral Bay",
          "Peyia",
          "Chloraka",
          "Kato Paphos",
          "Hafen von Paphos",
          "Königsgräber",
          "Geroskipou",
          "Latchi",
          "Polis",
        ]}
        faqs={paphosAirportFAQs}
        relatedLinks={[
          { to: "/taxi-to-kato-paphos", label: "Flughafen Paphos – Kato Paphos" },
          { to: "/taxi-to-coral-bay", label: "Flughafen Paphos – Coral Bay" },
          { to: "/taxi-to-peyia", label: "Flughafen Paphos – Peyia" },
          { to: "/taxi-to-chloraka", label: "Flughafen Paphos – Chloraka" },
          { to: "/taxi-to-kissonerga", label: "Flughafen Paphos – Kissonerga" },
          { to: "/taxi-to-polis-latchi", label: "Flughafen Paphos – Polis & Latchi" },
          { to: "/taxi-to-aphrodite-hills", label: "Flughafen Paphos – Aphrodite Hills" },
          { to: "/taxi-to-pissouri", label: "Flughafen Paphos – Pissouri" },
          { to: "/taxi-to-limassol", label: "Flughafen Paphos – Limassol" },
          { to: "/paphos-airport-to-larnaca", label: "Flughafen Paphos – Larnaka" },
          { to: "/paphos-airport-to-nicosia", label: "Flughafen Paphos – Nikosia" },
        ]}
      />
      <section className="container-tight pb-16 md:pb-20">
        <PriceTable
          pricing={pricingFromPaphos}
          linkMap={paphosRouteLinks}
          subtitle="Gesamtpreis pro Fahrzeug. Wählen Sie das Fahrzeug, das zu Ihrer Gruppe passt – gleicher Festpreis, keine Aufschläge."
        />
      </section>
    </>
  ),
});
