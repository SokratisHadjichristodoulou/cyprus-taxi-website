import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import { PageHero } from "@/components/PageHero";
import { TrustBar } from "@/components/TrustBar";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { sharedFAQsEl } from "@/lib/faqs.el";
import { withLocale } from "@/lib/i18n";

const allRoutes = [
  { slug: "/larnaca-airport-to-paphos", name: "Αεροδρόμιο Λάρνακας προς Πάφο", fromAirport: "Λάρνακα", duration: "1ω 30λ", distance: "140 χλμ", priceFrom: 95 },
  { slug: "/taxi-to-limassol", name: "Αεροδρόμιο Λάρνακας προς Λεμεσό", fromAirport: "Λάρνακα", duration: "45 λεπτά", distance: "70 χλμ", priceFrom: 55 },
  { slug: "/taxi-to-coral-bay", name: "Αεροδρόμιο Πάφου προς Coral Bay", fromAirport: "Πάφος", duration: "30 λεπτά", distance: "25 χλμ", priceFrom: 35 },
  { slug: "/taxi-to-peyia", name: "Αεροδρόμιο Πάφου προς Πέγεια", fromAirport: "Πάφος", duration: "30 λεπτά", distance: "22 χλμ", priceFrom: 35 },
  { slug: "/taxi-to-chloraka", name: "Αεροδρόμιο Πάφου προς Χλώρακα", fromAirport: "Πάφος", duration: "25 λεπτά", distance: "20 χλμ", priceFrom: 32 },
  { slug: "/larnaca-airport-transfers", name: "Μεταφορές Αεροδρομίου Λάρνακας", fromAirport: "Λάρνακα", duration: "Ποικίλει", distance: "Όλη η Κύπρος", priceFrom: 35 },
  { slug: "/taxi-to-limassol", name: "Αεροδρόμιο Πάφου προς Λεμεσό", fromAirport: "Πάφος", duration: "50 λεπτά", distance: "65 χλμ", priceFrom: 65 },
  { slug: "/larnaca-airport-transfers", name: "Αεροδρόμιο Λάρνακας προς Αγία Νάπα", fromAirport: "Λάρνακα", duration: "45 λεπτά", distance: "55 χλμ", priceFrom: 55 },
  { slug: "/larnaca-airport-transfers", name: "Αεροδρόμιο Λάρνακας προς Πρωταρά", fromAirport: "Λάρνακα", duration: "50 λεπτά", distance: "65 χλμ", priceFrom: 60 },
  { slug: "/larnaca-airport-transfers", name: "Αεροδρόμιο Λάρνακας προς Λευκωσία", fromAirport: "Λάρνακα", duration: "40 λεπτά", distance: "50 χλμ", priceFrom: 50 },
] as const;

export const Route = createFileRoute("/el/cyprus-airport-transfers")({
  head: () => ({
    meta: [
      { title: "Μεταφορές Αεροδρομίου Κύπρου — Όλες οι Διαδρομές & Τιμές | Taxi Cyprus 24" },
      { name: "description", content: "Πλήρης λίστα διαδρομών μεταφορών αεροδρομίου Κύπρου από Λάρνακα (LCA) και Πάφο (PFO). Σταθερές τιμές προς Πάφο, Λεμεσό, Coral Bay, Αγία Νάπα, Πρωταρά, Λευκωσία." },
      { property: "og:title", content: "Μεταφορές Αεροδρομίου Κύπρου — Όλες οι Διαδρομές" },
      { property: "og:description", content: "Σταθερές τιμές μεταφορών αεροδρομίου Κύπρου σε κάθε προορισμό." },
      { property: "og:image", content: heroImg },
      { property: "og:locale", content: "el_GR" },
      { name: "twitter:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "https://taxicyprus24.com/el/cyprus-airport-transfers" }],
  }),
  component: AllTransfersPage,
});

function AllTransfersPage() {
  return (
    <>
      <PageHero
        eyebrow="Όλες οι μεταφορές αεροδρομίου Κύπρου"
        title="Μεταφορές Αεροδρομίου Κύπρου — Όλες οι Διαδρομές & Τιμές"
        subtitle="Ιδιωτικές μεταφορές με σταθερή τιμή από τα αεροδρόμια Λάρνακας (LCA) και Πάφου (PFO) προς κάθε προορισμό στην Κύπρο. Συγκρίνετε διαδρομές και κάντε κράτηση σε δευτερόλεπτα."
        image={heroImg}
      />

      <TrustBar />

      <section className="container-tight py-16 md:py-20">
        <h2 className="font-display text-3xl font-bold text-navy md:text-4xl">Όλες οι διαδρομές μεταφοράς Κύπρου</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Παρέχουμε ιδιωτικές μεταφορές αεροδρομίου σε κάθε πόλη, χωριό, ξενοδοχείο και θέρετρο στην Κύπρο.
          Όλες οι παρακάτω τιμές είναι σταθερά σύνολα — περιλαμβάνουν διόδια, παιδικά καθίσματα και υποδοχή.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {allRoutes.map((r, i) => (
            <Link key={i} to={withLocale("el", r.slug)} className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-6 shadow-card-soft transition-all hover:-translate-y-0.5 hover:shadow-elegant">
              <div>
                <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-navy/60">
                  <MapPin className="h-3 w-3" /> Από {r.fromAirport}
                </div>
                <div className="mt-1.5 font-display text-lg font-bold text-navy">{r.name}</div>
                <div className="mt-1 text-sm text-muted-foreground">{r.duration} · {r.distance}</div>
              </div>
              <div className="text-right">
                <div className="text-[11px] font-semibold uppercase text-muted-foreground">Από</div>
                <div className="font-display text-2xl font-bold text-navy">€{r.priceFrom}</div>
                <ArrowRight className="ml-auto mt-2 h-4 w-4 text-navy/60 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-tight pb-16 md:pb-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/60">Συχνές Ερωτήσεις</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">Συχνές ερωτήσεις</h2>
          </div>
          <FAQAccordion items={sharedFAQsEl} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
