import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import paphosImg from "@/assets/dest-paphos.jpg";
import { TransferPage } from "@/components/TransferPage";
import { sharedFAQsEl } from "@/lib/faqs.el";

export const Route = createFileRoute("/el/larnaca-airport-to-paphos")({
  head: () => ({
    meta: [
      { title: "Ταξί Αεροδρόμιο Λάρνακας προς Πάφο — Σταθερή τιμή €95 | Taxi Cyprus 24" },
      { name: "description", content: "Ιδιωτικό ταξί από Αεροδρόμιο Λάρνακας προς Πάφο από €95. Σταθερή τιμή, υποδοχή, δωρεάν παιδικά καθίσματα, παρακολούθηση πτήσης. Κράτηση 24/7." },
      { property: "og:title", content: "Ταξί Αεροδρόμιο Λάρνακας προς Πάφο από €95" },
      { property: "og:description", content: "Ιδιωτική μεταφορά σταθερής τιμής από Λάρνακα προς Πάφο με υποδοχή." },
      { property: "og:image", content: paphosImg },
      { property: "og:locale", content: "el_GR" },
      { name: "twitter:image", content: paphosImg },
    ],
    links: [{ rel: "canonical", href: "https://taxicyprus24.com/el/larnaca-airport-to-paphos" }],
  }),
  component: () => (
    <TransferPage
      eyebrow="Αεροδρόμιο Λάρνακας προς Πάφο"
      title="Ταξί από Αεροδρόμιο Λάρνακας προς Πάφο"
      subtitle="Ιδιωτικές μεταφορές σταθερής τιμής από το Διεθνές Αεροδρόμιο Λάρνακας προς Πάφο σε πολυτελές Mercedes-Benz. Υποδοχή στις αφίξεις, δωρεάν παιδικά καθίσματα, παρακολούθηση πτήσης."
      heroImage={heroImg}
      galleryImage={paphosImg}
      defaultPickup="Αεροδρόμιο Λάρνακας"
      defaultDropoff="Πάφος"
      fromLocation="Αεροδρόμιο Λάρνακας"
      toLocation="Πάφος"
      duration="1ω 30λ"
      distance="140 χλμ"
      intro="Η διαδρομή από το Διεθνές Αεροδρόμιο Λάρνακας (LCA) στην Πάφο καλύπτει περίπου 140 χιλιόμετρα κατά μήκος των αυτοκινητοδρόμων Α5 και Α6 και διαρκεί περίπου 1 ώρα και 30 λεπτά σε κανονική κίνηση. Οι επαγγελματίες οδηγοί μας γνωρίζουν κάθε διαδρομή και θα σας μεταφέρουν στο ξενοδοχείο, τη βίλα ή το θέρετρό σας στην Πάφο γρήγορα, άνετα και με ασφάλεια — σε ένα πεντακάθαρο Mercedes-Benz."
      bodyParagraphs={[
        "Είτε προσγειώνεστε αργά τη νύχτα είτε νωρίς το πρωί, ο οδηγός σας θα περιμένει ήδη στις αφίξεις με πινακίδα ονόματος. Παρακολουθούμε την πτήση σας σε πραγματικό χρόνο χρησιμοποιώντας τον αριθμό πτήσης, οπότε ακόμη κι αν καθυστερήσετε για ώρες, η μεταφορά σας είναι εγγυημένη.",
        "Καλύπτουμε όλα τα ξενοδοχεία και θέρετρα στην Πάφο: Coral Bay, Πέγεια, Χλώρακα, Κάτω Πάφος, περιοχή Τάφων των Βασιλέων, Λιμάνι Πάφου, Γεροσκήπου και την Παλιά Πόλη της Πάφου. Η τιμή είναι η ίδια είτε μένετε σε 5άστερο θέρετρο είτε σε ιδιωτική βίλα.",
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
        { type: "Executive Sedan", pax: "Έως 3 επιβάτες", price: "€95" },
        { type: "Premium Van", pax: "Έως 7 επιβάτες", price: "€130" },
        { type: "Πολυτελές S-Class", pax: "Έως 3 επιβάτες", price: "€160" },
      ]}
      nearbyAreas={["Coral Bay", "Πέγεια", "Χλώρακα", "Κάτω Πάφος", "Τάφοι των Βασιλέων", "Γεροσκήπου", "Λιμάνι Πάφου", "Λάτσι", "Πόλη Χρυσοχούς"]}
      faqs={sharedFAQsEl.slice(0, 6)}
      relatedLinks={[
        { to: "/taxi-to-coral-bay", label: "Λάρνακα προς Coral Bay" },
        { to: "/taxi-to-peyia", label: "Λάρνακα προς Πέγεια" },
        { to: "/taxi-to-limassol", label: "Λάρνακα προς Λεμεσό" },
        { to: "/paphos-airport-transfers", label: "Μεταφορές Αεροδρομίου Πάφου" },
      ]}
    />
  ),
});
