import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import paphosImg from "@/assets/dest-paphos.jpg";
import coralBayImg from "@/assets/dest-coral-bay.jpg";
import larnacaImg from "@/assets/dest-larnaca.jpg";
import limassolImg from "@/assets/dest-limassol.jpg";
import peyiaImg from "@/assets/dest-peyia.jpg";
import chlorakaImg from "@/assets/dest-chloraka.jpg";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/el/blog")({
  head: () => ({
    meta: [
      { title: "Ταξιδιωτικός Οδηγός Κύπρου & Blog | Taxi Cyprus 24" },
      { name: "description", content: "Ταξιδιωτικός οδηγός Κύπρου — οι καλύτερες παραλίες της Πάφου, τι να κάνετε στο Coral Bay, πώς να μετακινηθείτε από Λάρνακα σε Πάφο, συμβουλές και έμπνευση." },
      { property: "og:title", content: "Ταξιδιωτικός Οδηγός Κύπρου | Taxi Cyprus 24" },
      { property: "og:description", content: "Οδηγοί και συμβουλές για επίσκεψη στην Κύπρο." },
      { property: "og:image", content: heroImg },
      { property: "og:locale", content: "el_GR" },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: BlogPage,
});

const posts = [
  { img: coralBayImg, title: "Καλύτερες παραλίες σε Πάφο & Coral Bay", excerpt: "Η Πάφος και το Coral Bay φιλοξενούν μερικές από τις πιο όμορφες παραλίες της Κύπρου, με κρυστάλλινα νερά, χρυσή άμμο και εκπληκτική θέα στις ακτές. Είτε ψάχνετε για παραλία φιλική προς οικογένειες, κρυμμένες τοποθεσίες ή το τέλειο ηλιοβασίλεμα, η δυτική ακτή έχει κάτι για όλους.", date: "Απρίλιος 2025", read: "6 λεπτά", to: "/blog/best-beaches-paphos-coral-bay" as const },
  { img: heroImg, title: "Πώς να ταξιδέψετε από το Αεροδρόμιο Λάρνακας στην Πάφο", excerpt: "Η μετακίνηση από το Διεθνές Αεροδρόμιο Λάρνακας στην Πάφο είναι μία από τις πιο συνηθισμένες διαδρομές για επισκέπτες στην Κύπρο. Η απόσταση είναι περίπου 135 χλμ, με μέσο χρόνο ταξιδιού περίπου 1 ώρα και 30 λεπτά ανάλογα με την κίνηση και την επιλογή μεταφοράς.", date: "Απρίλιος 2025", read: "5 λεπτά", to: "/blog/larnaca-airport-to-paphos-travel-guide" as const },
  { img: peyiaImg, title: "Κορυφαία ξενοδοχεία & βίλες σε Coral Bay και Πέγεια", excerpt: "Το Coral Bay και η Πέγεια είναι από τους πιο δημοφιλείς προορισμούς διακοπών στη δυτική ακτή της Κύπρου. Γνωστά για τις όμορφες παραλίες, τις πολυτελείς βίλες, τα οικογενειακά θέρετρα και τα εκπληκτικά μεσογειακά ηλιοβασιλέματα.", date: "Μάρτιος 2025", read: "8 λεπτά", to: "/blog/top-hotels-villas-coral-bay-peyia" as const },
  { img: paphosImg, title: "Πράγματα να κάνετε στην Πάφο — τοπικός οδηγός", excerpt: "Η Πάφος είναι ένας από τους πιο δημοφιλείς προορισμούς διακοπών στην Κύπρο, διάσημη για τις παραλίες, την αρχαία ιστορία, τα παραδοσιακά χωριά και το ζωντανό λιμάνι της. Είτε επισκέπτεστε για χαλαρές διακοπές, είτε για περιήγηση, είτε για τοπική γαστρονομία, η Πάφος προσφέρει κάτι για κάθε ταξιδιώτη.", date: "Μάρτιος 2025", read: "7 λεπτά", to: "/blog/things-to-do-in-paphos" as const },
  { img: larnacaImg, title: "Συμβουλές ταξιδιού Κύπρου για πρώτη φορά", excerpt: "Η Κύπρος είναι ένας από τους πιο δημοφιλείς μεσογειακούς προορισμούς για Βρετανούς και Ευρωπαίους ταξιδιώτες, προσφέροντας όμορφες παραλίες, ζεστό κλίμα, ιστορικά αξιοθέατα και φιλόξενο πολιτισμό. Αν επισκέπτεστε την Κύπρο για πρώτη φορά, λίγες συμβουλές βοηθούν να κάνετε τις διακοπές σας πιο ομαλές.", date: "Φεβρουάριος 2025", read: "6 λεπτά", to: "/blog/cyprus-travel-tips-first-time-visitors" as const },
  { img: limassolImg, title: "Ο πλήρης οδηγός μεταφορών αεροδρομίου Κύπρου", excerpt: "Ταξιδεύετε στην Κύπρο για διακοπές ή επαγγελματικά; Η σωστή επιλογή μεταφοράς από το αεροδρόμιο μπορεί να κάνει την άφιξή σας ταχύτερη και λιγότερο αγχωτική. Είτε προσγειώνεστε στη Λάρνακα είτε στην Πάφο, αυτός ο οδηγός συγκρίνει ταξί, ιδιωτικές μεταφορές, ενοικιάσεις και δημόσια μέσα.", date: "Φεβρουάριος 2025", read: "9 λεπτά", to: "/blog/complete-cyprus-airport-transfer-guide" as const },
  { img: chlorakaImg, title: "Κρυμμένα διαμάντια κοντά σε Χλώρακα και Κισσόνεργα", excerpt: "Η Χλώρακα και η Κισσόνεργα είναι δύο από τις πιο υποτιμημένες παράκτιες περιοχές της δυτικής Κύπρου. Βρίσκονται μεταξύ Πάφου και Coral Bay, και προσφέρουν ήσυχες παραλίες, γραφικά σημεία, τοπικές ταβέρνες και πιο αυθεντική εμπειρία.", date: "Ιανουάριος 2025", read: "5 λεπτά", to: "/blog/hidden-gems-chloraka-kissonerga" as const },
];

function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Ταξιδιωτικός οδηγός"
        title="Οδηγός & Έμπνευση για την Κύπρο"
        subtitle="Ανακαλύψτε τοπικούς οδηγούς για Πάφο, Coral Bay, Λεμεσό, Λάρνακα και προορισμούς σε όλη την Κύπρο — γραμμένους από ανθρώπους που γνωρίζουν πραγματικά το νησί. Από κρυμμένες παραλίες και παραδοσιακά χωριά μέχρι συμβουλές μεταφορών αεροδρομίου, εστιατόρια και οικογενειακά αξιοθέατα."
        image={heroImg}
        showForm={false}
      />

      <section className="container-tight py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link key={p.title} to={p.to} className="block">
              <article className="group h-full overflow-hidden rounded-2xl border border-border bg-card shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elegant">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> {p.date}</span>
                    <span>· {p.read}</span>
                  </div>
                  <h2 className="mt-3 font-display text-lg font-bold text-navy">{p.title}</h2>
                  <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{p.excerpt}</p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
                    Διαβάστε περισσότερα <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/el/contact" className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-[color:var(--navy-foreground)]">
            Κράτηση μεταφοράς <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
