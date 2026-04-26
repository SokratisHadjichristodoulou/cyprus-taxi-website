import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Award, Heart, Clock, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import meetGreetImg from "@/assets/meet-greet.jpg";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { TrustBar } from "@/components/TrustBar";

export const Route = createFileRoute("/el/about")({
  head: () => ({
    meta: [
      { title: "Σχετικά με την Taxicyprus24 — Αξιόπιστες Μεταφορές Αεροδρομίου από το 2010" },
      { name: "description", content: "Γνωρίστε την Taxicyprus24 — οικογενειακή εταιρεία ιδιωτικών μεταφορών αεροδρομίου στην Κύπρο από το 2010. Σταθερές τιμές από Λάρνακα & Πάφο, 5.000+ ευχαριστημένοι πελάτες, αξιολόγηση 4.9★, 24/7." },
      { name: "keywords", content: "σχετικά Taxicyprus24, εταιρεία μεταφορών αεροδρομίου Κύπρος, ιδιωτικό ταξί Κύπρος, ταξί αεροδρομίου Λάρνακας, ταξί αεροδρομίου Πάφου, οικογενειακή υπηρεσία ταξί Κύπρος" },
      { property: "og:title", content: "Σχετικά με την Taxicyprus24 — Αξιόπιστες Μεταφορές Αεροδρομίου από το 2010" },
      { property: "og:description", content: "Οικογενειακή εταιρεία ιδιωτικών μεταφορών αεροδρομίου Κύπρου. Σταθερές τιμές, επαγγελματίες οδηγοί, δωρεάν παιδικά καθίσματα και 24/7 από Λάρνακα και Πάφο." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImg },
      { property: "og:locale", content: "el_GR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Σχετικά με την Taxicyprus24 — Μεταφορές Αεροδρομίου από το 2010" },
      { name: "twitter:description", content: "Οικογενειακή υπηρεσία ταξί Κύπρου. Σταθερές τιμές, αξιολόγηση 4.9★, μεταφορές αεροδρομίου 24/7." },
      { name: "twitter:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "https://taxicyprus24.com/el/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: ShieldCheck, title: "Εμπιστοσύνη", desc: "Αδειούχοι και ασφαλισμένοι οδηγοί — απόλυτα διαφανής υπηρεσία ταξί με σταθερή τιμή σε όλη την Κύπρο." },
  { icon: Award, title: "Ποιότητα", desc: "Καθαρά και πολυτελή οχήματα, αγγλόφωνοι οδηγοί και προσοχή στη λεπτομέρεια σε κάθε μεταφορά αεροδρομίου." },
  { icon: Heart, title: "Φροντίδα", desc: "Αντιμετωπίζουμε κάθε επισκέπτη σαν οικογένεια — από την πρώτη κράτηση μέχρι την παράδοση από πόρτα σε πόρτα." },
  { icon: Clock, title: "Αξιοπιστία", desc: "Πάντα στην ώρα μας, με παρακολούθηση πτήσης σε πραγματικό χρόνο, υποδοχή και υποστήριξη πελατών 24/7." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Σχετικά με την Taxicyprus24"
        title="Αξιόπιστες Μεταφορές Αεροδρομίου Κύπρου από το 2010"
        subtitle="Η Taxicyprus24 είναι μια οικογενειακή εταιρεία ιδιωτικών μεταφορών αεροδρομίου που παρέχει αξιόπιστες υπηρεσίες ταξί με σταθερή τιμή από το Αεροδρόμιο Λάρνακας, το Αεροδρόμιο Πάφου και σε όλη την Κύπρο. Πάνω από μια δεκαετία εμπειρίας, 5.000+ ευχαριστημένοι πελάτες και αξιολόγηση 4.9★."
        image={heroImg}
        showForm={false}
      />

      <TrustBar />

      <section id="our-story" className="container-tight py-20 scroll-mt-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="self-start overflow-hidden rounded-3xl shadow-elegant">
            <img
              src={meetGreetImg}
              alt="Επαγγελματίας οδηγός Taxicyprus24 με υπηρεσία υποδοχής στις αφίξεις του Αεροδρομίου Λάρνακας"
              loading="lazy"
              width={1280}
              height={896}
              className="aspect-[10/7] w-full object-cover"
            />
          </div>
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/60">Η ιστορία μας</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">
              Μια υπηρεσία ταξί αεροδρομίου Κύπρου χτισμένη πάνω στην εμπιστοσύνη
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Η Taxicyprus24 ξεκίνησε το 2010 με μια Mercedes E-Class και μια απλή υπόσχεση: κάθε ταξιδιώτης που φτάνει στην Κύπρο θα παραλαμβάνεται στην ώρα του, σε ένα καθαρό και πολυτελές αυτοκίνητο, από έναν επαγγελματία αγγλόφωνο οδηγό που νοιάζεται πραγματικά.
              </p>
              <p>
                Πάνω από μια δεκαετία και 5.000+ ιδιωτικές μεταφορές αεροδρομίου αργότερα, αυτή η υπόσχεση εξακολουθεί να ορίζει τον τρόπο που λειτουργούμε. Το μοντέλο σταθερής τιμής, τα δωρεάν παιδικά καθίσματα, η δωρεάν υποδοχή στα αεροδρόμια Λάρνακας και Πάφου και η διαθεσιμότητα 24/7 δεν είναι προαιρετικά — είναι ο κανόνας σε κάθε κράτηση.
              </p>
              <p>
                Σήμερα εξυπηρετούμε επισκέπτες από Ηνωμένο Βασίλειο, Ευρώπη και ολόκληρο τον κόσμο — επαγγελματίες, οικογένειες, νεόνυμφους και ομάδες. Από το Αεροδρόμιο Λάρνακας προς Πάφο, Coral Bay, Πέγεια, Λεμεσό, Αγία Νάπα, Πρωταρά και Λευκωσία, καλύπτουμε κάθε προορισμό στην Κύπρο με την ίδια επαγγελματική υπηρεσία door-to-door.
              </p>
              <p>
                Η αξιολόγηση 4.9 αστέρων στο TripAdvisor και οι 120+ επιβεβαιωμένες κριτικές πελατών μιλούν για την εμπειρία. Είτε χρειάζεστε ιδιωτικό ταξί από το Αεροδρόμιο Λάρνακας, είτε μεταφορά από το Αεροδρόμιο Πάφου στη βίλα σας, είτε εκτελεστική υπηρεσία σοφέρ σε όλο το νησί, η Taxicyprus24 προσφέρει άνετο, ασφαλές και χωρίς άγχος ταξίδι — κάθε φορά.
              </p>
            </div>
            <Link
              to="/el/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-[color:var(--navy-foreground)]"
            >
              Κρατήστε τη μεταφορά σας <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-tight">
          <h2 className="text-center font-display text-3xl font-bold text-navy md:text-4xl">
            Γιατί οι ταξιδιώτες επιλέγουν την Taxicyprus24
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-muted-foreground">
            Τέσσερις βασικές αξίες καθοδηγούν κάθε μεταφορά — από την πρώτη κράτηση μέχρι την παράδοση από πόρτα σε πόρτα στο ξενοδοχείο, τη βίλα ή το διαμέρισμά σας.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-7 shadow-card-soft">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-[color:var(--navy-foreground)]">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-navy">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
