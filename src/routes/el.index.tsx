import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck, Clock, BadgeCheck, Plane, Baby, CreditCard,
  Star, ArrowRight, MapPin,
} from "lucide-react";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import meetGreetImg from "@/assets/meet-greet.jpg";
import sedanImg from "@/assets/fleet-sedan.jpg";
import vanImg from "@/assets/fleet-van.jpg";

import coralBayImg from "@/assets/dest-coral-bay.jpg";
import paphosImg from "@/assets/dest-paphos.jpg";
import limassolImg from "@/assets/dest-limassol.jpg";
import larnacaImg from "@/assets/dest-larnaca.jpg";
import peyiaImg from "@/assets/dest-peyia.jpg";
import chlorakaImg from "@/assets/dest-chloraka.jpg";
import { BookingForm } from "@/components/BookingForm";
import { TrustBar } from "@/components/TrustBar";
import { FAQAccordion } from "@/components/FAQAccordion";
import { sharedFAQsEl } from "@/lib/faqs.el";
import { popularRoutes } from "@/lib/routes-data";
import { CTASection } from "@/components/CTASection";
import { StructuredData } from "@/components/StructuredData";

export const Route = createFileRoute("/el/")({
  head: () => ({
    meta: [
      { title: "Ταξί Αεροδρομίου Κύπρου | Taxi Cyprus 24" },
      {
        name: "description",
        content:
          "Premium ιδιωτικές μεταφορές από αεροδρόμια Λάρνακας και Πάφου σε όλους τους προορισμούς της Κύπρου. Σταθερές τιμές, επαγγελματίες οδηγοί, δωρεάν υπηρεσία υποδοχής, κράτηση 24/7.",
      },
      { property: "og:title", content: "Ταξί Αεροδρομίου Κύπρου | Taxi Cyprus 24" },
      {
        property: "og:description",
        content:
          "Premium ιδιωτικές μεταφορές από αεροδρόμια της Κύπρου. Σταθερές τιμές, δωρεάν υποδοχή, 24/7.",
      },
      { property: "og:image", content: heroImg },
      { property: "og:locale", content: "el_GR" },
      { name: "twitter:image", content: heroImg },
      { name: "keywords", content: "ταξί Κύπρος, αεροδρόμιο Λάρνακας ταξί, αεροδρόμιο Πάφου ταξί, μεταφορά αεροδρομίου Κύπρου, ιδιωτικό ταξί Κύπρος" },
    ],
    links: [{ rel: "canonical", href: "https://taxicyprus24.com/el" }],
  }),
  component: HomePage,
});

const destinations = [
  { name: "Πάφος", img: paphosImg, slug: "/el/paphos-airport-transfers", desc: "Παλιό λιμάνι, Τάφοι των Βασιλέων & θέρετρα" },
  { name: "Coral Bay", img: coralBayImg, slug: "/el/taxi-to-coral-bay", desc: "Παραλιακά θέρετρα & τιρκουάζ νερά" },
  { name: "Λεμεσός", img: limassolImg, slug: "/el/taxi-to-limassol", desc: "Marina, ξενοδοχεία και νυχτερινή ζωή" },
  { name: "Λάρνακα", img: larnacaImg, slug: "/el/larnaca-airport-transfers", desc: "Παραλία Φοινικούδες & μαρίνα" },
  { name: "Πέγεια", img: peyiaImg, slug: "/el/taxi-to-peyia", desc: "Βίλες με θέα στη θάλασσα" },
  { name: "Χλώρακα", img: chlorakaImg, slug: "/el/taxi-to-chloraka", desc: "Ήσυχη παραλιακή ζώνη κοντά στην Πάφο" },
];

const features = [
  { icon: BadgeCheck, title: "Σταθερές τιμές", desc: "Σταθερές τιμές μεταφοράς χωρίς κρυφές χρεώσεις, χωρίς υπερτιμολόγηση και με εγγυημένα διαφανή κόστη." },
  { icon: Plane, title: "Παρακολούθηση πτήσης", desc: "Παρακολούθηση πτήσης σε πραγματικό χρόνο για όλες τις μεταφορές, συμπεριλαμβανομένων των καθυστερημένων αφίξεων." },
  { icon: Baby, title: "Δωρεάν παιδικά καθίσματα", desc: "Δωρεάν βρεφικά, παιδικά και booster καθίσματα με κάθε ιδιωτική μεταφορά." },
  { icon: ShieldCheck, title: "Αδειούχοι οδηγοί", desc: "Επαγγελματίες αγγλόφωνοι αδειούχοι οδηγοί που προσφέρουν ασφαλείς και άνετες μεταφορές." },
  { icon: Clock, title: "Υπηρεσία 24/7", desc: "Διαθέσιμη υπηρεσία ταξί 24 ώρες την ημέρα, καθημερινά, συμπεριλαμβανομένων των αργιών." },
  { icon: CreditCard, title: "Πληρωμή με τον τρόπο σας", desc: "Πληρωμή online με κάρτα, τραπεζικό έμβασμα ή μετρητά σε EUR ή GBP." },
];

const fleet = [
  { img: sedanImg, name: "Executive Sedan", capacity: "Έως 3 επιβάτες · 3 αποσκευές", model: "Mercedes E-Class ή παρόμοιο", priceFrom: "από €35" },
  { img: vanImg, name: "Premium 7θέσιο Βαν", capacity: "Έως 7 επιβάτες · 7 αποσκευές", model: "Ford Tourneo Custom ή παρόμοιο", priceFrom: "από €60" },
];

function HomePage() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "TaxiService",
          name: "Ταξί Αεροδρομίου Κύπρου",
          description: "Ιδιωτικές μεταφορές με σταθερές τιμές από τα αεροδρόμια Λάρνακας (LCA) και Πάφου (PFO) σε όλη την Κύπρο.",
          areaServed: { "@type": "Country", name: "Cyprus" },
          provider: {
            "@type": "LocalBusiness",
            name: "Taxi Cyprus 24",
            telephone: "+35796626844",
            url: "https://taxicyprus24.com",
            aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "1247" },
          },
        }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Πολυτελής μεταφορά Mercedes από αεροδρόμιο Κύπρου" className="h-full w-full object-cover object-[65%_center] lg:object-center" loading="eager" width={1920} height={1080} />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        <div className="relative container-tight grid gap-10 py-16 md:py-24 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:py-32">
          <div className="text-white animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Premium ιδιωτικές μεταφορές στην Κύπρο
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance text-white md:text-5xl lg:text-[64px]">
              Ιδιωτικές Μεταφορές από Αεροδρόμια Κύπρου
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
              Ψάχνετε αξιόπιστο ταξί στην Κύπρο; Η Taxicyprus24 προσφέρει αξιόπιστες υπηρεσίες ταξί Κύπρου σταθερής τιμής και ιδιωτικές μεταφορές αεροδρομίου διαθέσιμες 24/7. Εξειδικευόμαστε σε επαγγελματικές υπηρεσίες ταξί Πάφου, μεταφορές από το αεροδρόμιο Λάρνακας και άνετη μεταφορά από πόρτα σε πόρτα σε όλη την Κύπρο, συμπεριλαμβανομένων Λεμεσού, Coral Bay, Πέγειας, Αγίας Νάπας, Πρωταρά, Λευκωσίας και κοντινών προορισμών.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
              Είτε χρειάζεστε ταξί κοντά στην Πάφο, ιδιωτική μεταφορά από το αεροδρόμιο Λάρνακας ή υπηρεσία executive chauffeur οπουδήποτε στην Κύπρο, οι έμπειροι οδηγοί μας εγγυώνται ασφαλή, ακριβή και χωρίς άγχος ταξίδια. Η Taxicyprus24 είναι η εμπιστοσύνη τουριστών, οικογενειών, επαγγελματιών και επισκεπτών που αναζητούν αξιόπιστες υπηρεσίες Vladimir Taxi Cyprus, πολυτελή οχήματα, υποδοχή στο αεροδρόμιο, μεταφορές σε κοντινές πόλεις και διαφανείς τιμές χωρίς κρυφές χρεώσεις.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/el/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-navy shadow-elegant transition-transform hover:scale-[1.02]">
                Κάντε Κράτηση <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="https://wa.me/35796626844" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20">
                Άμεση Προσφορά
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-white/85">
              <Link to="/el/reviews" className="flex items-center gap-2 transition-opacity hover:opacity-80">
                <div className="flex">
                  {[0,1,2,3,4].map((i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}
                </div>
                <span><strong className="font-semibold text-white">4.9</strong> · 120+ κριτικές TripAdvisor</span>
              </Link>
              <div className="hidden h-4 w-px bg-white/20 sm:block" />
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-gold" /> Αδειούχοι & ασφαλισμένοι</div>
            </div>
          </div>

          <div className="animate-fade-up delay-200">
            <BookingForm />
          </div>
        </div>
      </section>

      <TrustBar />

      {/* WHY CHOOSE US */}
      <section className="container-tight py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/60">Γιατί Taxi Cyprus 24</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-5xl">
            Ο premium τρόπος να ταξιδέψετε στην Κύπρο
          </h2>
          <p className="mt-4 text-pretty text-base text-muted-foreground md:text-lg">
            Έχουμε χτίσει τη φήμη μας στη συνέπεια, στα ποιοτικά οχήματα και στην απόλυτη διαφάνεια — έτσι ακριβώς όπως πρέπει να είναι οι μεταφορές αεροδρομίου.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-border bg-card p-7 shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-[color:var(--navy-foreground)]">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-navy">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* POPULAR ROUTES */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="container-tight">
          <div className="flex items-end justify-between gap-6">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/60">Δημοφιλείς διαδρομές</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">
                Τιμές μεταφοράς από αεροδρόμιο Κύπρου
              </h2>
            </div>
            <Link to="/el/cyprus-airport-transfers" className="hidden text-sm font-semibold text-navy hover:underline md:inline-flex">
              Όλες οι διαδρομές →
            </Link>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-card-soft">
            <table className="w-full">
              <thead className="bg-secondary/60">
                <tr className="text-left text-[11px] uppercase tracking-wider text-muted-foreground">
                  <th className="px-5 py-4 md:px-7">Διαδρομή</th>
                  <th className="hidden px-5 py-4 md:table-cell">Απόσταση</th>
                  <th className="hidden px-5 py-4 sm:table-cell">Διάρκεια</th>
                  <th className="px-5 py-4 text-right md:px-7">Από</th>
                </tr>
              </thead>
              <tbody>
                {popularRoutes.map((r) => (
                  <tr key={r.slug} className="border-t border-border transition-colors hover:bg-secondary/30">
                    <td className="px-5 py-5 md:px-7">
                      <Link to={`/el${r.slug}` as string} className="block">
                        <div className="font-semibold text-navy">{r.name}</div>
                        <div className="mt-0.5 text-xs text-muted-foreground sm:hidden">{r.duration} · {r.distance}</div>
                      </Link>
                    </td>
                    <td className="hidden px-5 py-5 text-sm text-muted-foreground md:table-cell">{r.distance}</td>
                    <td className="hidden px-5 py-5 text-sm text-muted-foreground sm:table-cell">{r.duration}</td>
                    <td className="px-5 py-5 text-right md:px-7">
                      <span className="font-display text-lg font-bold text-navy">€{r.priceFrom}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="container-tight py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/60">Προορισμοί</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-5xl">
            Μεταφορές σε κάθε γωνιά της Κύπρου
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d) => (
            <Link key={d.name} to={d.slug} className="group relative block overflow-hidden rounded-2xl shadow-card-soft">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={d.img} alt={`Μεταφορά αεροδρομίου Κύπρου προς ${d.name}`} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-gold">
                  <MapPin className="h-3 w-3" /> Κύπρος
                </div>
                <h3 className="mt-2 font-display text-2xl font-bold text-white">{d.name}</h3>
                <p className="mt-1 text-sm text-white/80">{d.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                  Κράτηση <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FLEET */}
      <section className="bg-navy py-20 text-[color:var(--navy-foreground)] md:py-28">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">Ο στόλος μας</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-5xl">
              Ταξιδέψτε με άνεση Mercedes-Benz
            </h2>
            <p className="mt-4 text-pretty text-base text-white/85 md:text-lg">
              Από executive sedans μέχρι ευρύχωρα 7θέσια βαν — επιλέξτε το όχημα που ταιριάζει στην παρέα σας.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {fleet.map((v) => (
              <div key={v.name} className="group overflow-hidden rounded-2xl bg-white text-foreground shadow-elegant transition-transform hover:-translate-y-1">
                <div className="aspect-[4/3] bg-secondary/60 p-6">
                  <img src={v.img} alt={v.name} loading="lazy" width={1024} height={768} className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="border-t border-border p-6">
                  <h3 className="font-display text-xl font-bold text-navy">{v.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{v.model}</p>
                  <p className="mt-3 text-sm font-medium text-foreground">{v.capacity}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-display text-lg font-bold text-navy">{v.priceFrom}</span>
                    <Link to="/el/fleet" className="text-sm font-semibold text-navy hover:underline">Λεπτομέρειες →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEET & GREET */}
      <section className="container-tight py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-3xl shadow-elegant">
            <img src={meetGreetImg} alt="Υπηρεσία υποδοχής οδηγού στις αφίξεις του αεροδρομίου Κύπρου" loading="lazy" width={1280} height={896} className="h-full w-full object-cover" />
          </div>
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/60">Συμπεριλαμβάνεται υπηρεσία υποδοχής</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-5xl">
              Ο οδηγός σας περιμένει στις αφίξεις
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              Χωρίς ουρές, χωρίς σύγχυση. Ο επαγγελματίας οδηγός σας θα είναι στην αίθουσα αφίξεων με πινακίδα ονόματος — ακόμη και αν η πτήση σας καθυστερήσει. Θα σας βοηθήσει με τις αποσκευές και θα σας οδηγήσει απευθείας στο όχημα.
            </p>
            <ul className="mt-7 space-y-3 text-sm text-foreground">
              {[
                "Παρακολούθηση πτήσης σε πραγματικό χρόνο με τον αριθμό πτήσης σας",
                "Προσωπική πινακίδα ονόματος στην αίθουσα αφίξεων",
                "Συμπεριλαμβάνεται βοήθεια με τις αποσκευές",
                "Δωρεάν εμφιαλωμένο νερό μέσα στο όχημα",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--success)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/el/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-[color:var(--navy-foreground)] shadow-elegant transition-transform hover:scale-[1.02]">
              Κάντε Κράτηση <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/60">
              Κριτικές TripAdvisor
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-5xl">
              4.9★ στο TripAdvisor — 120+ κριτικές
            </h2>
            <p className="mt-4 text-sm text-muted-foreground md:text-base">
              #6 από 94 Μεταφορές στην Πάφο. Επαληθευμένες κριτικές από πραγματικούς ταξιδιώτες.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Dmitry O",
                from: "Κομητεία Limerick, Ιρλανδία · TripAdvisor",
                date: "Ιούν 2025",
                text: "Ο Βλαδίμηρος είναι εξαιρετικός και ασφαλής οδηγός, πάντα στην ώρα του, σε λογικές τιμές και με καινούριο μίνι βαν. Χρησιμοποιήσαμε τις υπηρεσίες του σε όλη τη διάρκεια της διαμονής μας, τόσο για την παραλαβή στο αεροδρόμιο όσο και στο ξενοδοχείο. Συνιστάται ανεπιφύλακτα.",
              },
              {
                name: "Rayaa K",
                from: "TripAdvisor",
                date: "Μάι 2025",
                text: "Ευχαριστούμε Vlad! Πολύ ευγενικός και φιλικός, εξαιρετική συνέπεια στον χρόνο και άριστη φροντίδα σε όλο το ταξίδι. 10/10 το συνιστώ ανεπιφύλακτα.",
              },
              {
                name: "Joep D",
                from: "TripAdvisor",
                date: "Ιούλ 2025",
                text: "Ήταν πολύ καλή εμπειρία — έχουμε χρησιμοποιήσει αυτό το ταξί πολλές φορές, πάντα στην ώρα του, και μας έδωσε καλές συμβουλές για τη διαμονή μας σε διαφορετικές πόλεις.",
              },
            ].map((t) => (
              <div key={t.name} className="rounded-2xl border border-border bg-card p-7 shadow-card-soft">
                <div className="flex items-center justify-between">
                  <div className="flex">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">{t.date}</span>
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-foreground">"{t.text}"</p>
                <div className="mt-5 border-t border-border pt-4">
                  <div className="font-semibold text-navy">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.from}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/el/reviews"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:underline"
            >
              Διαβάστε όλες τις 120+ κριτικές TripAdvisor <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-tight py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/60">Συχνές ερωτήσεις</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-5xl">
              Συχνές ερωτήσεις
            </h2>
            <p className="mt-5 text-base text-muted-foreground">
              Όλα όσα πρέπει να γνωρίζετε για τις μεταφορές αεροδρομίου στην Κύπρο.
            </p>
            <div className="mt-8 hidden lg:block">
              <Link to="/el/faq" className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:underline">
                Όλες οι συχνές ερωτήσεις <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <FAQAccordion items={sharedFAQsEl.slice(0, 6)} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
