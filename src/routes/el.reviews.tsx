import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, ArrowRight, ExternalLink } from "lucide-react";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";

const TRIPADVISOR_URL =
  "https://www.tripadvisor.com/Attraction_Review-g190384-d8567084-Reviews-Taxi_Cyprus_Paphos-Paphos_Paphos_District.html";

export const Route = createFileRoute("/el/reviews")({
  head: () => ({
    meta: [
      { title: "Κριτικές — 4.9★ στο TripAdvisor (120+ κριτικές) | Taxi Cyprus 24" },
      { name: "description", content: "Διαβάστε επιβεβαιωμένες κριτικές TripAdvisor της Taxi Cyprus 24 — 4.9★ από 120+ ταξιδιώτες. Στη θέση #6 από 94 Μεταφορές στην Πάφο." },
      { property: "og:title", content: "Κριτικές — Taxi Cyprus 24" },
      { property: "og:description", content: "Επιβεβαιωμένες κριτικές 4.9★ στο TripAdvisor για μεταφορές αεροδρομίου Κύπρου." },
      { property: "og:image", content: heroImg },
      { property: "og:locale", content: "el_GR" },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: ReviewsPage,
});

const reviews = [
  { name: "Silver C", from: "TripAdvisor", date: "Φεβ 2026", title: "Εξαιρετικό", text: "Ήταν ένα πολύ γρήγορο και άνετο ταξίδι!! Πήγα από την πόλη της Πάφου στο αεροδρόμιο. Σας ευχαριστώ πολύ! Συνιστάται." },
  { name: "Ксения Б", from: "TripAdvisor", date: "Οκτ 2025", title: "Θετικό", text: "Πολύ καλά παιδιά. Στην ώρα τους, καλή τιμή, άνεση, το συνιστώ. Τηλεφώνησα και έκανα κράτηση, αλλά χρειάστηκε να αλλάξω την ώρα, χωρίς πρόβλημα, βοηθούν με τις αποσκευές." },
  { name: "Aggelos A", from: "TripAdvisor", date: "Ιουν 2025", title: "Ταξί Πάφος", text: "Παραγγείλαμε ταξί, μας συνάντησαν στο αεροδρόμιο, μας έφεραν στην πόλη, μετά λίγες μέρες αργότερα μας πήγαν στην Αγία Νάπα και επίσης από την Αγία Νάπα μας έφεραν στο αεροδρόμιο της Πάφου. Όλα στην ώρα τους. Το συνιστώ." },
  { name: "Dmitry O", from: "County Limerick, Ιρλανδία · TripAdvisor", date: "Ιουν 2025", title: "Εξαιρετική Υπηρεσία Ταξί στην Πάφο", text: "Ο Vladimiros είναι εξαιρετικός και ασφαλής οδηγός, πάντα στην ώρα του, με λογικές τιμές και έχει καινούργιο 7-θέσιο. Χρησιμοποιήσαμε τις υπηρεσίες του σε όλη τη διαμονή μας. Το συνιστώ ανεπιφύλακτα." },
  { name: "Rayaa K", from: "TripAdvisor", date: "Μάι 2025", title: "Τέλειο", text: "Σε ευχαριστώ Vlad! Πολύ ευγενικός και φιλικός, εξαιρετικός χρονισμός και φρόντισε όλο το ταξίδι. 10/10, σίγουρα συνιστάται." },
  { name: "Joep D", from: "TripAdvisor", date: "Ιουλ 2025", title: "Διαδρομή ταξί", text: "Ήταν μια πολύ καλή εμπειρία — έχουμε χρησιμοποιήσει αυτό το ταξί πολλές φορές, πάντα στην ώρα του και έδωσε καλές συμβουλές για τη διαμονή μας σε διάφορες πόλεις." },
  { name: "Damian V", from: "TripAdvisor", date: "Ιουλ 2025", title: "Πολύ ευγενικός οδηγός", text: "Πολύ ευγενικός και φιλικός οδηγός ταξί. Μας πήγε παντού όπου θέλαμε." },
  { name: "Jermo S", from: "TripAdvisor", date: "Ιουλ 2025", title: "Πολύ καλός οδηγός", text: "Πολύ καλός οδηγός ταξί. Μας πήγε από την Πάφο στην Αγία Νάπα." },
  { name: "Jaap d", from: "TripAdvisor", date: "Ιουλ 2025", title: "Καλός οδηγός", text: "Εξαιρετικός! Μας πήγε για πολλές ημέρες και κάθε φορά ήταν πολύ καλός. Όταν τηλεφωνούσαμε, υπήρχε γρήγορη απάντηση. Θαυμάσιος οδηγός." },
];

function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Κριτικές & μαρτυρίες"
        title="4.9★ στο TripAdvisor — 120+ κριτικές"
        subtitle="Στη θέση #6 από 94 Μεταφορές στην Πάφο. Διαβάστε επιβεβαιωμένες κριτικές από πραγματικούς ταξιδιώτες από Ηνωμένο Βασίλειο, Ευρώπη και όλο τον κόσμο."
        image={heroImg}
        showForm={false}
      />

      <section className="container-tight pt-16 md:pt-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-card p-8 shadow-card-soft md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-[auto_1fr_auto]">
            <div className="text-center md:text-left">
              <div className="font-display text-6xl font-bold text-navy md:text-7xl">4.9</div>
              <div className="mt-2 flex justify-center gap-0.5 md:justify-start">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>
              <div className="mt-1 text-xs font-medium text-muted-foreground">120 επιβεβαιωμένες κριτικές</div>
            </div>

            <div className="space-y-1.5 text-sm">
              {[
                { label: "Εξαιρετικό", count: 117, total: 120 },
                { label: "Καλό", count: 1, total: 120 },
                { label: "Μέτριο", count: 0, total: 120 },
                { label: "Κακό", count: 1, total: 120 },
                { label: "Απαίσιο", count: 1, total: 120 },
              ].map((row) => (
                <div key={row.label} className="flex items-center gap-3">
                  <span className="w-20 shrink-0 text-xs font-medium text-muted-foreground">{row.label}</span>
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-secondary">
                    <div className="h-full rounded-full bg-navy" style={{ width: `${(row.count / row.total) * 100}%` }} />
                  </div>
                  <span className="w-8 shrink-0 text-right text-xs font-semibold text-navy">{row.count}</span>
                </div>
              ))}
            </div>

            <a href={TRIPADVISOR_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/20 bg-secondary/50 px-5 py-3 text-sm font-semibold text-navy transition-colors hover:bg-secondary">
              Δείτε στο TripAdvisor <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="container-tight py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <article key={r.name + r.title} className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-card-soft">
              <div className="flex items-center justify-between">
                <div className="flex">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">{r.date}</span>
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-navy">{r.title}</h3>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-foreground">"{r.text}"</p>
              <div className="mt-5 border-t border-border pt-4">
                <div className="font-semibold text-navy">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.from}</div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <a href={TRIPADVISOR_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-card px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-secondary">
            Δείτε όλες τις 120 κριτικές στο TripAdvisor <ExternalLink className="h-4 w-4" />
          </a>
          <Link to="/el/contact" className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-[color:var(--navy-foreground)]">
            Κράτηση μεταφοράς <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
