import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import larnacaImg from "@/assets/dest-larnaca.jpg";
import { TransferPage } from "@/components/TransferPage";
import { sharedFAQsEl } from "@/lib/faqs.el";

export const Route = createFileRoute("/el/larnaca-airport-to-ayia-napa")({
  head: () => ({
    meta: [
      { title: "Ταξί Αεροδρόμιο Λάρνακας — Αγία Νάπα €55 | Taxi Cyprus 24" },
      { name: "description", content: "Ιδιωτικό ταξί από Αεροδρόμιο Λάρνακας προς Αγία Νάπα από €55. Σταθερή τιμή, υποδοχή, δωρεάν παιδικά καθίσματα, παρακολούθηση πτήσης. Κράτηση 24/7." },
      { property: "og:title", content: "Ταξί Λάρνακα Αεροδρόμιο — Αγία Νάπα από €55" },
      { property: "og:description", content: "Ιδιωτική μεταφορά σταθερής τιμής από Λάρνακα προς Αγία Νάπα." },
      { property: "og:image", content: larnacaImg },
      { property: "og:locale", content: "el_GR" },
      { name: "twitter:image", content: larnacaImg },
    ],
  }),
  component: () => (
    <TransferPage
      eyebrow="Αεροδρόμιο Λάρνακας προς Αγία Νάπα"
      title="Ταξί Αεροδρόμιο Λάρνακας προς Αγία Νάπα"
      subtitle="Ιδιωτικές μεταφορές σταθερής τιμής από το Διεθνές Αεροδρόμιο Λάρνακας προς Αγία Νάπα σε πολυτελές Mercedes-Benz. Υποδοχή στις αφίξεις, δωρεάν παιδικά καθίσματα, παρακολούθηση πτήσης."
      heroImage={heroImg}
      galleryImage={larnacaImg}
      defaultPickup="Αεροδρόμιο Λάρνακας"
      defaultDropoff="Αγία Νάπα"
      fromLocation="Αεροδρόμιο Λάρνακας"
      toLocation="Αγία Νάπα"
      duration="45 λεπτά"
      distance="55 χλμ"
      intro="Η διαδρομή από το Διεθνές Αεροδρόμιο Λάρνακας (LCA) στην Αγία Νάπα καλύπτει περίπου 55 χιλιόμετρα κατά μήκος του αυτοκινητοδρόμου Α3 και διαρκεί περίπου 45 λεπτά σε κανονική κίνηση. Η Λάρνακα είναι το πιο κοντινό αεροδρόμιο στην Αγία Νάπα, οπότε ένα ιδιωτικό ταξί είναι ο γρηγορότερος και πιο άνετος τρόπος να φτάσετε στο ξενοδοχείο σας."
      bodyParagraphs={[
        "Ο οδηγός σας θα περιμένει ήδη στις αφίξεις με πινακίδα ονόματος — χωρίς ουρές σε στάσεις ταξί ή λεωφορεία. Παρακολουθούμε την πτήση σας σε πραγματικό χρόνο, οπότε ακόμη και αν καθυστερήσετε, η μεταφορά σας είναι εγγυημένη στην ίδια σταθερή τιμή.",
        "Καλύπτουμε κάθε ξενοδοχείο, βίλα και διαμέρισμα σε Αγία Νάπα, Παραλία Νησί, Κάβο Γκρέκο, Περνέρα και τη γύρω περιοχή. Η τιμή είναι η ίδια είτε μένετε σε 5άστερο θέρετρο είτε σε ιδιωτική βίλα.",
      ]}
      highlights={[
        "Σταθερή συνολική τιμή — χωρίς έξτρα",
        "Υποδοχή στις αφίξεις Λάρνακας",
        "Καθαρά και πολυτελή αυτοκίνητα",
        "Δωρεάν παιδικά καθίσματα",
        "Παρακολούθηση πτήσης",
        "Δεκτά μετρητά ή κάρτα",
      ]}
      prices={[
        { type: "Executive Sedan", pax: "Έως 4 επιβάτες", price: "€55" },
        { type: "Premium Van (6 θέσεων)", pax: "Έως 6 επιβάτες", price: "€70" },
        { type: "Μεγάλο Van (12 θέσεων)", pax: "Έως 12 επιβάτες", price: "€95" },
      ]}
      nearbyAreas={["Αγία Νάπα", "Παραλία Νησί", "Πρωταράς", "Περνέρα", "Κάβο Γκρέκο", "Παραλίμνι", "Καππάρης", "Σωτήρα"]}
      faqs={sharedFAQsEl.slice(0, 6)}
      relatedLinks={[
        { to: "/larnaca-airport-transfers", label: "Όλες οι Μεταφορές Λάρνακας" },
        { to: "/larnaca-airport-to-paphos", label: "Λάρνακα προς Πάφο" },
        { to: "/cyprus-airport-transfers", label: "Όλες οι Διαδρομές Κύπρου" },
      ]}
    />
  ),
});
