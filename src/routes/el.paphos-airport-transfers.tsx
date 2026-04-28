import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import paphosImg from "@/assets/dest-paphos.jpg";
import { TransferPage } from "@/components/TransferPage";
import { PriceTable } from "@/components/PriceTable";
import { pricingFromPaphos } from "@/lib/pricing";
import { sharedFAQsEl } from "@/lib/faqs.el";

export const Route = createFileRoute("/el/paphos-airport-transfers")({
  head: () => ({
    meta: [
      { title: "Μεταφορές & Ταξί Αεροδρομίου Πάφου από €35 | Taxi Cyprus 24" },
      { name: "description", content: "Ιδιωτικές μεταφορές από Αεροδρόμιο Πάφου (PFO) προς Coral Bay, Πέγεια, Χλώρακα, Κάτω Πάφο και όλη την Κύπρο. Σταθερές τιμές, υποδοχή, 24/7." },
      { property: "og:title", content: "Μεταφορές Αεροδρομίου Πάφου από €35" },
      { property: "og:description", content: "Premium ταξί από Αεροδρόμιο Πάφου προς όλους τους προορισμούς της Κύπρου." },
      { property: "og:image", content: paphosImg },
      { property: "og:locale", content: "el_GR" },
      { name: "twitter:image", content: paphosImg },
    ],
    links: [{ rel: "canonical", href: "https://taxicyprus24.com/el/paphos-airport-transfers" }],
  }),
  component: () => (
    <>
      <TransferPage
        eyebrow="Αεροδρόμιο Πάφου (PFO)"
        title="Μεταφορές Αεροδρομίου Πάφου & Ιδιωτικό Ταξί"
        subtitle="Ιδιωτικές μεταφορές με σταθερή τιμή από το Διεθνές Αεροδρόμιο Πάφου προς Coral Bay, Πέγεια, Χλώρακα, Κάτω Πάφο και κάθε προορισμό στην Κύπρο."
        heroImage={heroImg}
        galleryImage={paphosImg}
        defaultPickup="Αεροδρόμιο Πάφου"
        fromLocation="Αεροδρόμιο Πάφου"
        toLocation="Όλη η Κύπρος"
        duration="20 λ – 2ω"
        distance="20–250 χλμ"
        intro="Το Διεθνές Αεροδρόμιο Πάφου (PFO) είναι το δεύτερο μεγαλύτερο αεροδρόμιο της Κύπρου και η κύρια πύλη για ταξιδιώτες που επισκέπτονται Πάφο, Coral Bay, Πέγεια, Λεμεσό και τη δυτική Κύπρο. Η Taxicyprus24 παρέχει αξιόπιστες ιδιωτικές μεταφορές με σταθερές τιμές, επαγγελματίες οδηγούς και υπηρεσία 24/7."
        bodyParagraphs={[
          "Παραλείψτε τις μεγάλες ουρές ταξί, τα γεμάτα λεωφορεία και τις κοινόχρηστες μεταφορές. Η ιδιωτική μας υπηρεσία προσφέρει απευθείας μεταφορά door-to-door σε ξενοδοχεία, βίλες, θέρετρα και διαμερίσματα οπουδήποτε στην Κύπρο.",
          "Ο οδηγός σας θα σας υποδεχθεί στις αφίξεις με πινακίδα ονόματος και θα σας συνοδεύσει σε ένα καθαρό κλιματιζόμενο Mercedes-Benz. Δημοφιλείς χρόνοι: Coral Bay (περίπου 25 λεπτά), Πέγεια (περίπου 30 λεπτά), Λεμεσός (περίπου 50 λεπτά) και Λάρνακα (περίπου 1ω 45λ).",
          "Κάθε μεταφορά περιλαμβάνει δωρεάν παιδικά καθίσματα, εμφιαλωμένο νερό, παρακολούθηση πτήσης και δωρεάν ακύρωση έως 24 ώρες πριν την παραλαβή. Πληρώστε με ασφάλεια online με κάρτα ή απευθείας στον οδηγό σε EUR ή GBP.",
          "Είτε χρειάζεστε ταξί από Αεροδρόμιο Πάφου προς Coral Bay, Πέγεια, Λεμεσό, Λάρνακα ή οποιονδήποτε προορισμό στην Κύπρο, η Taxicyprus24 εγγυάται άνετες, σταθερής τιμής ιδιωτικές μεταφορές χωρίς κρυφές χρεώσεις.",
        ]}
        highlights={[
          "Απευθείας από Αεροδρόμιο Πάφου",
          "Υποδοχή στις αφίξεις",
          "Καθαρά και πολυτελή αυτοκίνητα",
          "Σταθερές τιμές — χωρίς αυξήσεις",
          "Νυχτερινές αφίξεις 24/7",
          "Δωρεάν παρακολούθηση πτήσης",
        ]}
        prices={[
          { type: "PFO προς Coral Bay", pax: "Έως 4 επιβάτες", price: "€65" },
          { type: "PFO προς Λεμεσό", pax: "Έως 4 επιβάτες", price: "€90" },
          { type: "PFO προς Λάρνακα", pax: "Έως 4 επιβάτες", price: "€140" },
        ]}
        nearbyAreas={["Coral Bay", "Πέγεια", "Χλώρακα", "Κάτω Πάφος", "Λιμάνι Πάφου", "Τάφοι των Βασιλέων", "Γεροσκήπου", "Λάτσι", "Πόλη Χρυσοχούς"]}
        faqs={sharedFAQsEl}
        relatedLinks={[
          { to: "/taxi-to-coral-bay", label: "PFO προς Coral Bay" },
          { to: "/taxi-to-peyia", label: "PFO προς Πέγεια" },
          { to: "/taxi-to-chloraka", label: "PFO προς Χλώρακα" },
          { to: "/taxi-to-limassol", label: "PFO προς Λεμεσό" },
        ]}
      />
      <section className="container-tight pb-16 md:pb-20">
        <PriceTable
          pricing={pricingFromPaphos}
          subtitle="Σύνολο ανά όχημα. Επιλέξτε το όχημα που ταιριάζει στην παρέα σας — ίδια σταθερή τιμή."
        />
      </section>
    </>
  ),
});
