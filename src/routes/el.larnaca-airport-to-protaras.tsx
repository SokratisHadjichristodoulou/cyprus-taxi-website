import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import larnacaImg from "@/assets/dest-larnaca.jpg";
import { TransferPage } from "@/components/TransferPage";
import { sharedFAQsEl } from "@/lib/faqs.el";

export const Route = createFileRoute("/el/larnaca-airport-to-protaras")({
  head: () => ({
    meta: [
      { title: "Ταξί Αεροδρόμιο Λάρνακας — Πρωταράς €60 | Taxi Cyprus 24" },
      { name: "description", content: "Ιδιωτικό ταξί από Αεροδρόμιο Λάρνακας προς Πρωταρά από €60. Σταθερή τιμή, υποδοχή, δωρεάν παιδικά καθίσματα, παρακολούθηση πτήσης. Κράτηση 24/7." },
      { property: "og:title", content: "Ταξί Λάρνακα Αεροδρόμιο — Πρωταράς από €60" },
      { property: "og:description", content: "Ιδιωτική μεταφορά σταθερής τιμής από Λάρνακα προς Πρωταρά." },
      { property: "og:image", content: larnacaImg },
      { property: "og:locale", content: "el_GR" },
      { name: "twitter:image", content: larnacaImg },
    ],
  }),
  component: () => (
    <TransferPage
      eyebrow="Αεροδρόμιο Λάρνακας προς Πρωταρά"
      title="Ταξί Αεροδρόμιο Λάρνακας προς Πρωταρά"
      subtitle="Ιδιωτικές μεταφορές σταθερής τιμής από το Διεθνές Αεροδρόμιο Λάρνακας προς Πρωταρά σε πολυτελές Mercedes-Benz. Υποδοχή στις αφίξεις, δωρεάν παιδικά καθίσματα, παρακολούθηση πτήσης."
      heroImage={heroImg}
      galleryImage={larnacaImg}
      defaultPickup="Αεροδρόμιο Λάρνακας"
      defaultDropoff="Πρωταράς"
      fromLocation="Αεροδρόμιο Λάρνακας"
      toLocation="Πρωταράς"
      duration="50 λεπτά"
      distance="65 χλμ"
      intro="Η διαδρομή από το Διεθνές Αεροδρόμιο Λάρνακας (LCA) στον Πρωταρά καλύπτει περίπου 65 χιλιόμετρα κατά μήκος του αυτοκινητοδρόμου Α3 και διαρκεί περίπου 50 λεπτά σε κανονική κίνηση. Η Λάρνακα είναι το πιο κοντινό αεροδρόμιο στον Πρωταρά και την Περνέρα — μια ιδιωτική μεταφορά είναι ο γρηγορότερος, πιο άνετος τρόπος να φτάσετε στο ξενοδοχείό σας."
      bodyParagraphs={[
        "Ο οδηγός σας θα περιμένει στην αίθουσα αφίξεων με πινακίδα ονόματος και θα σας βοηθήσει με τις αποσκευές μέχρι το αυτοκίνητο. Παρακολουθούμε την πτήση σας σε πραγματικό χρόνο, οπότε τυχόν καθυστέρηση δεν επηρεάζει τη σταθερή τιμή.",
        "Καλύπτουμε όλο τον Πρωταρά, την Περνέρα, τον Καππάρη, το Fig Tree Bay και τη γύρω παραλιακή ζώνη της Αμμοχώστου. Η ίδια σταθερή τιμή ισχύει είτε μένετε σε παραθαλάσσιο ξενοδοχείο είτε σε ιδιωτική βίλα.",
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
        { type: "Executive Sedan", pax: "Έως 4 επιβάτες", price: "€60" },
        { type: "Premium Van (6 θέσεων)", pax: "Έως 6 επιβάτες", price: "€80" },
        { type: "Μεγάλο Van (12 θέσεων)", pax: "Έως 12 επιβάτες", price: "€110" },
      ]}
      nearbyAreas={["Πρωταράς", "Περνέρα", "Fig Tree Bay", "Καππάρης", "Αγία Νάπα", "Κάβο Γκρέκο", "Παραλίμνι", "Σωτήρα"]}
      faqs={sharedFAQsEl.slice(0, 6)}
      relatedLinks={[
        { to: "/larnaca-airport-to-ayia-napa", label: "Λάρνακα προς Αγία Νάπα" },
        { to: "/larnaca-airport-transfers", label: "Όλες οι Μεταφορές Λάρνακας" },
        { to: "/cyprus-airport-transfers", label: "Όλες οι Διαδρομές Κύπρου" },
      ]}
    />
  ),
});
