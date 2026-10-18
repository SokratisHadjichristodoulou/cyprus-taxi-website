import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import larnacaImg from "@/assets/dest-larnaca.jpg";
import { TransferPage } from "@/components/TransferPage";
import { PriceTable } from "@/components/PriceTable";
import { pricingFromLarnaca } from "@/lib/pricing";
import { larnacaRouteLinks } from "@/lib/route-links";
import { sharedFAQsDe } from "@/lib/faqs.de";

export const Route = createFileRoute("/de/larnaca-airport-transfers")({
  head: () => ({
    meta: [
      { title: "Flughafentransfer Larnaka (LCA) – Privattaxi zum Festpreis | Taxi Cyprus 24" },
      {
        name: "description",
        content:
          "Privattaxi vom Flughafen Larnaka (LCA) nach Paphos, Ayia Napa, Protaras und in ganz Zypern. Festpreise, Meet & Greet, Kindersitze inklusive, 24/7.",
      },
      { property: "og:title", content: "Flughafentransfer Larnaka – Privattaxi zum Festpreis" },
      {
        property: "og:description",
        content: "Privattaxi vom Flughafen Larnaka zu allen Zielen auf Zypern.",
      },
      { property: "og:image", content: larnacaImg },
      { property: "og:locale", content: "de_DE" },
      { name: "twitter:image", content: larnacaImg },
    ],
  }),
  component: () => (
    <>
      <TransferPage
        eyebrow="Flughafen Larnaka (LCA)"
        title="Flughafentransfer Larnaka & Privattaxi"
        subtitle="Privattransfers zum Festpreis vom internationalen Flughafen Larnaka nach Paphos, Limassol, Ayia Napa, Protaras, Nikosia und zu jedem Ziel auf Zypern."
        heroImage={heroImg}
        galleryImage={larnacaImg}
        defaultPickup="Larnaca Airport"
        fromLocation="Flughafen Larnaka"
        toLocation="Ganz Zypern"
        duration="15 Min. – 1 Std. 45 Min."
        distance="10–180 km"
        intro="Der internationale Flughafen Larnaka (LCA) ist der größte und verkehrsreichste Flughafen Zyperns und empfängt jedes Jahr Millionen Reisende aus Großbritannien und Europa. Taxicyprus24 bietet hochwertige private Flughafentransfers ab Larnaka nach Paphos und in ganz Zypern – zum Festpreis, mit professionellen Fahrern, Flugüberwachung und rund um die Uhr."
        bodyParagraphs={[
          "Keine langen Taxi-Schlangen, keine vollen Shuttle-Busse und keine teuren Last-Minute-Taxis: Unser privater Flughafentransfer bringt Sie direkt von Tür zu Tür zu Hotels, Villen, Ferienwohnungen, Resorts und Geschäftsadressen überall auf der Insel.",
          "Ihr Fahrer erwartet Sie in der Ankunftshalle mit einem Namensschild, hilft beim Gepäck und begleitet Sie zu einem sauberen, klimatisierten Fahrzeug. Wir verfolgen Ihren Flug in Echtzeit, sodass Verspätungen Ihre Buchung nie beeinträchtigen.",
          "Typische Fahrzeiten ab Flughafen Larnaka: Larnaka-Stadt etwa 15 Minuten, Nikosia etwa 40 Minuten, Limassol etwa 45 Minuten, Ayia Napa und Protaras etwa 45 Minuten, Paphos etwa 1 Stunde 30 Minuten und Coral Bay etwa 1 Stunde 40 Minuten.",
          "Jeder Transfer ab Flughafen Larnaka beinhaltet Festpreise, Meet & Greet, Flugüberwachung in Echtzeit, kostenlose Baby- und Kindersitze, Wasser an Bord und Bezahlung per Karte, Überweisung oder bar in EUR oder GBP.",
          "Ob Taxi vom Flughafen Larnaka nach Paphos, Coral Bay, Ayia Napa oder an ein anderes Ziel auf Zypern – Taxicyprus24 garantiert zuverlässige, komfortable und entspannte Privattransfers ohne versteckte Kosten.",
        ]}
        highlights={[
          "Direkt ab Flughafen Larnaka (LCA)",
          "Meet & Greet in der Ankunftshalle",
          "Saubere, komfortable Fahrzeuge",
          "Kostenlose Kindersitze",
          "Flugüberwachung inklusive",
          "Bezahlung bar oder per Karte",
        ]}
        prices={[
          { type: "LCA – Pissouri", pax: "Bis zu 4 Fahrgäste", price: "130 €" },
          { type: "LCA – Paphos", pax: "Bis zu 4 Fahrgäste", price: "140 €" },
          { type: "LCA – Coral Bay", pax: "Bis zu 4 Fahrgäste", price: "170 €" },
        ]}
        nearbyAreas={[
          "Larnaka-Stadt",
          "Ayia Napa",
          "Protaras",
          "Nikosia",
          "Paphos",
          "Coral Bay",
          "Peyia",
          "Pissouri",
        ]}
        faqs={sharedFAQsDe}
        relatedLinks={[
          { to: "/larnaca-airport-to-paphos", label: "Flughafen Larnaka – Paphos" },
          { to: "/larnaca-airport-to-ayia-napa", label: "Flughafen Larnaka – Ayia Napa" },
          { to: "/larnaca-airport-to-protaras", label: "Flughafen Larnaka – Protaras" },
          { to: "/taxi-to-coral-bay", label: "Flughafen Larnaka – Coral Bay" },
          { to: "/cyprus-airport-transfers", label: "Alle Strecken" },
        ]}
      />
      <section className="container-tight pb-16 md:pb-20">
        <PriceTable
          pricing={pricingFromLarnaca}
          linkMap={larnacaRouteLinks}
          subtitle="Gesamtpreis pro Fahrzeug. Rund um die Uhr derselbe Festpreis – Flugüberwachung und Meet & Greet inklusive."
        />
      </section>
    </>
  ),
});
