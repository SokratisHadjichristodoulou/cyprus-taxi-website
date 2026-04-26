import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import larnacaImg from "@/assets/dest-larnaca.jpg";
import { TransferPage } from "@/components/TransferPage";
import { PriceTable } from "@/components/PriceTable";
import { pricingFromLarnaca } from "@/lib/pricing";
import { sharedFAQsEl } from "@/lib/faqs.el";

export const Route = createFileRoute("/el/larnaca-airport-transfers")({
  head: () => ({
    meta: [
      { title: "Μεταφορές & Ταξί Αεροδρομίου Λάρνακας από €35 | Taxi Cyprus 24" },
      { name: "description", content: "Ιδιωτικές μεταφορές από Αεροδρόμιο Λάρνακας (LCA) προς Πάφο, Λεμεσό, Αγία Νάπα, Πρωταρά, Λευκωσία και όλη την Κύπρο. Σταθερές τιμές, υποδοχή, 24/7." },
      { property: "og:title", content: "Μεταφορές Αεροδρομίου Λάρνακας από €35" },
      { property: "og:description", content: "Premium ταξί από το Αεροδρόμιο Λάρνακας προς όλους τους προορισμούς της Κύπρου." },
      { property: "og:image", content: larnacaImg },
      { property: "og:locale", content: "el_GR" },
      { name: "twitter:image", content: larnacaImg },
    ],
    links: [{ rel: "canonical", href: "https://taxicyprus24.com/el/larnaca-airport-transfers" }],
  }),
  component: () => (
    <>
      <TransferPage
        eyebrow="Αεροδρόμιο Λάρνακας (LCA)"
        title="Μεταφορές Αεροδρομίου Λάρνακας & Ιδιωτικό Ταξί"
        subtitle="Ιδιωτικές μεταφορές με σταθερή τιμή από το Διεθνές Αεροδρόμιο Λάρνακας προς Πάφο, Λεμεσό, Αγία Νάπα, Πρωταρά, Λευκωσία και κάθε προορισμό στην Κύπρο."
        heroImage={heroImg}
        galleryImage={larnacaImg}
        defaultPickup="Αεροδρόμιο Λάρνακας"
        fromLocation="Αεροδρόμιο Λάρνακας"
        toLocation="Όλη η Κύπρος"
        duration="15 λ – 1ω 45λ"
        distance="10–180 χλμ"
        intro="Το Διεθνές Αεροδρόμιο Λάρνακας (LCA) είναι το μεγαλύτερο και πιο πολυσύχναστο αεροδρόμιο της Κύπρου, εξυπηρετώντας εκατομμύρια διεθνών ταξιδιωτών από Ηνωμένο Βασίλειο και Ευρώπη κάθε χρόνο. Η Taxicyprus24 παρέχει premium ιδιωτικές μεταφορές από το Αεροδρόμιο Λάρνακας με σταθερές τιμές, επαγγελματίες οδηγούς, παρακολούθηση πτήσης και υπηρεσία 24/7 σε όλη την Κύπρο."
        bodyParagraphs={[
          "Παραλείψτε τις μεγάλες ουρές ταξί, τα γεμάτα λεωφορεία και τα ακριβά ταξί της τελευταίας στιγμής. Η ιδιωτική μας υπηρεσία προσφέρει απευθείας μεταφορά door-to-door σε ξενοδοχεία, βίλες, διαμερίσματα και θέρετρα οπουδήποτε στο νησί.",
          "Ο επαγγελματίας οδηγός σας θα σας υποδεχθεί στις αφίξεις με προσωπική πινακίδα ονόματος, θα βοηθήσει με τις αποσκευές και θα σας συνοδεύσει σε ένα καθαρό, κλιματιζόμενο όχημα Mercedes. Παρακολουθούμε την πτήση σας σε πραγματικό χρόνο, ώστε οι καθυστερήσεις να μην επηρεάζουν την κράτησή σας.",
          "Δημοφιλείς χρόνοι μεταφοράς από το Αεροδρόμιο Λάρνακας: Λάρνακα πόλη (περίπου 15 λεπτά), Λευκωσία (περίπου 40 λεπτά), Λεμεσός (περίπου 45 λεπτά), Αγία Νάπα & Πρωταράς (περίπου 45 λεπτά), Πάφος (περίπου 1ω 30λ) και Coral Bay (περίπου 1ω 40λ).",
          "Κάθε μεταφορά περιλαμβάνει σταθερές τιμές, υπηρεσία υποδοχής, παρακολούθηση πτήσης σε πραγματικό χρόνο, δωρεάν παιδικά καθίσματα, εμφιαλωμένο νερό και επιλογές πληρωμής με κάρτα, τραπεζικό έμβασμα ή μετρητά σε EUR ή GBP.",
          "Είτε χρειάζεστε ταξί από Λάρνακα προς Λεμεσό, Πάφο, Coral Bay, Αγία Νάπα, Λευκωσία ή οπουδήποτε αλλού στην Κύπρο, η Taxicyprus24 εγγυάται αξιόπιστες, άνετες και χωρίς άγχος μεταφορές χωρίς κρυφές χρεώσεις.",
        ]}
        highlights={["Απευθείας από Αεροδρόμιο Λάρνακας", "Υποδοχή στις αφίξεις", "Καθαρά και πολυτελή αυτοκίνητα", "Δωρεάν παιδικά καθίσματα", "Παρακολούθηση πτήσης", "Πληρωμή μετρητά ή κάρτα"]}
        prices={[
          { type: "LCA προς Πισσούρι", pax: "Έως 4 επιβάτες", price: "€120" },
          { type: "LCA προς Πάφο", pax: "Έως 4 επιβάτες", price: "€130" },
          { type: "LCA προς Coral Bay", pax: "Έως 4 επιβάτες", price: "€150" },
        ]}
        nearbyAreas={["Λάρνακα", "Λεμεσός", "Αγία Νάπα", "Πρωταράς", "Λευκωσία", "Πάφος", "Coral Bay", "Πέγεια", "Πισσούρι"]}
        faqs={sharedFAQsEl}
        relatedLinks={[
          { to: "/larnaca-airport-to-paphos", label: "LCA προς Πάφο" },
          { to: "/taxi-to-limassol", label: "LCA προς Λεμεσό" },
          { to: "/taxi-to-coral-bay", label: "LCA προς Coral Bay" },
          { to: "/cyprus-airport-transfers", label: "Όλες οι διαδρομές" },
        ]}
      />
      <section className="container-tight pb-16 md:pb-20">
        <PriceTable
          pricing={pricingFromLarnaca}
          subtitle="Σύνολο ανά όχημα. Ίδια σταθερή τιμή 24/7 — παρακολούθηση πτήσης και υποδοχή περιλαμβάνονται."
        />
      </section>
    </>
  ),
});
