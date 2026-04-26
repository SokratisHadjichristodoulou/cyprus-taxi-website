import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import coralBayImg from "@/assets/dest-coral-bay.jpg";
import { TransferPage } from "@/components/TransferPage";
import { sharedFAQsEl } from "@/lib/faqs.el";

export const Route = createFileRoute("/el/taxi-to-coral-bay")({
  head: () => ({
    meta: [
      { title: "Ταξί προς Coral Bay από €65 — Μεταφορές Αεροδρομίου | Taxi Cyprus 24" },
      { name: "description", content: "Ιδιωτικό ταξί προς Coral Bay από Αεροδρόμιο Πάφου (€65) και Αεροδρόμιο Λάρνακας (€170). Σταθερή τιμή, υποδοχή, δωρεάν παιδικά καθίσματα, 24/7." },
      { property: "og:title", content: "Ταξί προς Coral Bay από €65" },
      { property: "og:description", content: "Ιδιωτικό ταξί σταθερής τιμής προς Coral Bay, Κύπρος." },
      { property: "og:image", content: coralBayImg },
      { property: "og:locale", content: "el_GR" },
      { name: "twitter:image", content: coralBayImg },
    ],
    links: [{ rel: "canonical", href: "https://taxicyprus24.com/el/taxi-to-coral-bay" }],
  }),
  component: () => (
    <TransferPage
      eyebrow="Αεροδρόμιο προς Coral Bay"
      title="Ιδιωτικό Ταξί προς Coral Bay"
      subtitle="Μεταφορές αεροδρομίου σταθερής τιμής προς Coral Bay από αεροδρόμια Πάφου και Λάρνακας. Ιδιωτικό Mercedes-Benz, υποδοχή, δωρεάν παιδικά καθίσματα."
      heroImage={heroImg}
      galleryImage={coralBayImg}
      defaultDropoff="Coral Bay"
      fromLocation="Πάφος / Λάρνακα"
      toLocation="Coral Bay"
      duration="25 λ / 1ω 40λ"
      distance="25 χλμ / 150 χλμ"
      intro="Το Coral Bay είναι ένα από τα πιο δημοφιλή παραθαλάσσια θέρετρα στην Κύπρο, γνωστό για τα τιρκουάζ νερά, τις αμμώδεις παραλίες, τις πολυτελείς βίλες και τα οικογενειακά ξενοδοχεία. Η Taxicyprus24 παρέχει αξιόπιστες ιδιωτικές μεταφορές προς Coral Bay από τα αεροδρόμια Πάφου και Λάρνακας με σταθερές τιμές, επαγγελματίες οδηγούς και υπηρεσία 24/7."
      bodyParagraphs={[
        "Αποφύγετε τις μεγάλες ουρές ταξί και τις κοινόχρηστες μεταφορές. Η ιδιωτική μας υπηρεσία προσφέρει απευθείας μεταφορά door-to-door στο ξενοδοχείο, βίλα, διαμέρισμα ή θέρετρό σας οπουδήποτε στην περιοχή Coral Bay.",
        "Από το Αεροδρόμιο Πάφου, το Coral Bay απέχει περίπου 25 λεπτά μέσω του γραφικού παραλιακού δρόμου. Από το Αεροδρόμιο Λάρνακας, η διαδρομή διαρκεί συνήθως περίπου 1 ώρα και 40 λεπτά μέσω του αυτοκινητοδρόμου Α6.",
        "Παρέχουμε μεταφορές σε όλα τα ξενοδοχεία του Coral Bay: Coral Beach Hotel & Resort, Mayfair Hotel, Corallia Beach Hotel, Coral Star Apartments και ιδιωτικές βίλες σε όλο το Coral Bay, την Πέγεια και την ευρύτερη περιοχή της Πάφου.",
        "Κάθε μεταφορά περιλαμβάνει σταθερές τιμές χωρίς κρυφές χρεώσεις, υποδοχή στο αεροδρόμιο, παρακολούθηση πτήσης, δωρεάν παιδικά καθίσματα, άνετα κλιματιζόμενα οχήματα και πληρωμή με κάρτα, τραπεζικό έμβασμα ή μετρητά σε EUR ή GBP.",
        "Είτε χρειάζεστε ταξί από Αεροδρόμιο Πάφου προς Coral Bay είτε ιδιωτική μεταφορά από Λάρνακα, η Taxicyprus24 εγγυάται ασφαλές, άνετο και χωρίς άγχος ταξίδι σε όλη την Κύπρο.",
      ]}
      highlights={["Απευθείας στο ξενοδοχείο σας στο Coral Bay", "Καθαρά και πολυτελή αυτοκίνητα", "Εγγύηση σταθερής τιμής", "Δωρεάν παιδικά καθίσματα", "Νυχτερινές αφίξεις 24/7", "Υποδοχή"]}
      prices={[
        { type: "Αεροδρόμιο Πάφου προς Coral Bay (Sedan)", pax: "Έως 4 επιβάτες", price: "€65" },
        { type: "Αεροδρόμιο Πάφου προς Coral Bay (Van)", pax: "Έως 6 επιβάτες", price: "€85" },
        { type: "Αεροδρόμιο Λάρνακας προς Coral Bay (Sedan)", pax: "Έως 4 επιβάτες", price: "€170" },
        { type: "Αεροδρόμιο Λάρνακας προς Coral Bay (Van)", pax: "Έως 6 επιβάτες", price: "€200" },
      ]}
      nearbyAreas={["Coral Beach Hotel", "Mayfair Coral Bay", "Corallia Beach", "Χερσόνησος Ακάμα", "Θαλάσσιες Σπηλιές", "Πέγεια"]}
      faqs={sharedFAQsEl.slice(0, 6)}
      relatedLinks={[
        { to: "/taxi-to-peyia", label: "Ταξί προς Πέγεια" },
        { to: "/taxi-to-chloraka", label: "Ταξί προς Χλώρακα" },
        { to: "/paphos-airport-transfers", label: "Μεταφορές Αεροδρομίου Πάφου" },
      ]}
    />
  ),
});
