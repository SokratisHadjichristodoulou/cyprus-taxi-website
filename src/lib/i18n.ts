// Centralized i18n for English / Greek
// Usage:
//   const { t, locale, otherLocale, switchPath } = useI18n();

import { useRouterState } from "@tanstack/react-router";

export type Locale = "en" | "el";

export const LOCALES: Locale[] = ["en", "el"];

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  el: "ΕΛ",
};

export const localeFullNames: Record<Locale, string> = {
  en: "English",
  el: "Ελληνικά",
};

// Detect locale from a pathname (e.g. "/el/about" -> "el")
export function getLocaleFromPath(pathname: string): Locale {
  return pathname === "/el" || pathname.startsWith("/el/") ? "el" : "en";
}

// Strip locale prefix from a pathname
// "/el/about" -> "/about", "/el" -> "/", "/about" -> "/about"
export function stripLocale(pathname: string): string {
  if (pathname === "/el") return "/";
  if (pathname.startsWith("/el/")) return pathname.slice(3);
  return pathname;
}

// Add locale prefix to a (locale-less) path
// "en", "/about" -> "/about"
// "el", "/about" -> "/el/about"
// "el", "/" -> "/el"
export function withLocale(locale: Locale, path: string): string {
  if (locale === "en") return path;
  if (path === "/") return "/el";
  return `/el${path}`;
}

// Translation dictionaries — shared UI strings
type TranslationKey =
 | "nav.home"
 | "nav.transfers"
 | "nav.pricing"
 | "nav.fleet"
 | "nav.reviews"
 | "nav.blog"
 | "nav.about"
 | "nav.faq"
 | "nav.contact"
  | "cta.bookNow"
  | "cta.bookYourTransfer"
  | "cta.callUs"
  | "cta.whatsappQuote"
  | "cta.readyWhenYouAre"
  | "cta.bookHeadline"
  | "cta.bookSubcopy"
  | "footer.tagline"
  | "footer.transfers"
  | "footer.company"
  | "footer.contact"
  | "footer.aboutUs"
  | "footer.ourFleet"
  | "footer.travelGuide"
  | "footer.serving"
  | "footer.rights"
  | "footer.licensed"
  | "header.premiumTransfers"
  | "form.pickupLocation"
  | "form.dropoffLocation"
  | "form.date"
  | "form.time"
  | "form.passengers"
  | "form.flightNumber"
  | "form.name"
  | "form.email"
  | "form.phone"
  | "form.notes"
  | "form.requestQuote"
  | "form.bookYourTransfer"
  | "form.optional"
  | "form.thankYou"
  | "form.weWillContact"
  | "common.from"
  | "common.to"
  | "common.duration"
  | "common.distance"
  | "common.fixedPrices"
  | "common.transferPrices"
  | "common.allInclusive"
  | "common.upToPassengers"
  | "common.faq"
  | "common.commonQuestions"
  | "common.relatedTransfers"
  | "common.nearbyAreas"
  | "common.whyUs"
  | "common.flightTracked"
  | "common.licensedDrivers"
  | "common.freeChildSeats"
  | "common.whatToExpect"
  | "trust.fixedPrices"
  | "trust.meetGreet"
  | "trust.support247"
  | "trust.freeCancel";

const translations: Record<TranslationKey, Record<Locale, string>> = {
  // Navigation
  "nav.home": { en: "Home", el: "Αρχική" },
  "nav.transfers": { en: "Transfers", el: "Μεταφορές" },
  "nav.fleet": { en: "Fleet", el: "Στόλος" },
  "nav.reviews": { en: "Reviews", el: "Κριτικές" },
  "nav.blog": { en: "Travel Guide", el: "Οδηγός Ταξιδιού" },
  "nav.about": { en: "About", el: "Σχετικά" },
  "nav.faq": { en: "FAQ", el: "Συχνές Ερωτήσεις" },
  "nav.contact": { en: "Contact", el: "Επικοινωνία" },

  // CTAs
  "cta.bookNow": { en: "Book Now", el: "Κράτηση" },
  "cta.bookYourTransfer": { en: "Book Your Transfer", el: "Κάντε Κράτηση" },
  "cta.callUs": { en: "Call Us", el: "Καλέστε μας" },
  "cta.whatsappQuote": { en: "WhatsApp Quote", el: "Προσφορά WhatsApp" },
  "cta.readyWhenYouAre": { en: "Ready when you are", el: "Έτοιμοι όταν είστε" },
  "cta.bookHeadline": {
    en: "Book your Cyprus airport transfer",
    el: "Κλείστε τη μεταφορά σας από το αεροδρόμιο της Κύπρου",
  },
  "cta.bookSubcopy": {
    en: "Taxicyprus24 combines fixed-price Cyprus airport transfers, free cancellation, professional English-speaking drivers, and reliable meet & greet service on every booking. Whether you need a taxi from Larnaca Airport, Paphos Airport, Limassol, or anywhere in Cyprus, we guarantee comfortable private transfers with no hidden fees, no surge pricing, and 24/7 customer support — every time.",
    el: "Η Taxicyprus24 προσφέρει μεταφορές από αεροδρόμια της Κύπρου με σταθερή τιμή, δωρεάν ακύρωση, επαγγελματίες αγγλόφωνους οδηγούς και υπηρεσία υποδοχής σε κάθε κράτηση. Είτε χρειάζεστε ταξί από το αεροδρόμιο Λάρνακας, το αεροδρόμιο Πάφου, τη Λεμεσό ή οπουδήποτε στην Κύπρο, εγγυόμαστε άνετες ιδιωτικές μεταφορές χωρίς κρυφές χρεώσεις, χωρίς υπερτιμολόγηση και με υποστήριξη 24/7 — κάθε φορά.",
  },

  // Footer
  "footer.tagline": {
    en: "Taxicyprus24 provides premium private airport transfers across Cyprus with fixed prices, professional drivers, and reliable 24/7 taxi service. Whether you need a private transfer from Larnaca Airport, Paphos Airport, Limassol, Nicosia, or any destination in Cyprus, we guarantee comfortable vehicles, meet & greet service, flight monitoring, and transparent pricing with no hidden fees.",
    el: "Η Taxicyprus24 παρέχει premium ιδιωτικές μεταφορές από αεροδρόμια σε όλη την Κύπρο με σταθερές τιμές, επαγγελματίες οδηγούς και αξιόπιστη υπηρεσία ταξί 24/7. Είτε χρειάζεστε ιδιωτική μεταφορά από το αεροδρόμιο Λάρνακας, το αεροδρόμιο Πάφου, τη Λεμεσό, τη Λευκωσία ή οποιονδήποτε προορισμό στην Κύπρο, εγγυόμαστε άνετα οχήματα, υπηρεσία υποδοχής, παρακολούθηση πτήσεων και διαφανή τιμολόγηση χωρίς κρυφές χρεώσεις.",
  },
  "footer.transfers": { en: "Transfers", el: "Μεταφορές" },
  "footer.company": { en: "Company", el: "Εταιρεία" },
  "footer.contact": { en: "Contact", el: "Επικοινωνία" },
  "footer.aboutUs": { en: "About Us", el: "Σχετικά με εμάς" },
  "footer.ourFleet": { en: "Our Fleet", el: "Ο Στόλος μας" },
  "footer.travelGuide": { en: "Travel Guide", el: "Οδηγός Ταξιδιού" },
  "footer.serving": {
    en: "Serving Larnaca & Paphos airports, all Cyprus",
    el: "Εξυπηρετούμε τα αεροδρόμια Λάρνακας & Πάφου, όλη την Κύπρο",
  },
  "footer.rights": { en: "All rights reserved.", el: "Με την επιφύλαξη παντός δικαιώματος." },
  "footer.licensed": {
    en: "Licensed transportation provider · Cyprus",
    el: "Αδειοδοτημένος πάροχος μεταφορών · Κύπρος",
  },

  // Header
  "header.premiumTransfers": { en: "Premium Transfers", el: "Premium Μεταφορές" },

  // Booking form
  "form.pickupLocation": { en: "Pickup location", el: "Σημείο παραλαβής" },
  "form.dropoffLocation": { en: "Drop-off location", el: "Σημείο άφιξης" },
  "form.date": { en: "Date", el: "Ημερομηνία" },
  "form.time": { en: "Time", el: "Ώρα" },
  "form.passengers": { en: "Passengers", el: "Επιβάτες" },
  "form.flightNumber": { en: "Flight number", el: "Αριθμός πτήσης" },
  "form.name": { en: "Your name", el: "Ονοματεπώνυμο" },
  "form.email": { en: "Email", el: "Email" },
  "form.phone": { en: "Phone", el: "Τηλέφωνο" },
  "form.notes": { en: "Notes", el: "Σημειώσεις" },
  "form.requestQuote": { en: "Request a Quote", el: "Ζητήστε Προσφορά" },
  "form.bookYourTransfer": { en: "Book your transfer", el: "Κάντε κράτηση" },
  "form.optional": { en: "Optional", el: "Προαιρετικό" },
  "form.thankYou": { en: "Thank you!", el: "Ευχαριστούμε!" },
  "form.weWillContact": {
    en: "We will contact you shortly to confirm your transfer.",
    el: "Θα επικοινωνήσουμε σύντομα μαζί σας για να επιβεβαιώσουμε τη μεταφορά σας.",
  },

  // Common transfer-page strings
  "common.from": { en: "From", el: "Από" },
  "common.to": { en: "To", el: "Προς" },
  "common.duration": { en: "Duration", el: "Διάρκεια" },
  "common.distance": { en: "Distance", el: "Απόσταση" },
  "common.fixedPrices": { en: "Fixed prices", el: "Σταθερές τιμές" },
  "common.transferPrices": { en: "Transfer prices", el: "Τιμές μεταφοράς" },
  "common.allInclusive": {
    en: "All prices include tolls, taxes, child seats and meet & greet.",
    el: "Όλες οι τιμές περιλαμβάνουν διόδια, φόρους, παιδικά καθίσματα και υπηρεσία υποδοχής.",
  },
  "common.upToPassengers": { en: "Up to passengers", el: "Έως επιβάτες" },
  "common.faq": { en: "FAQ", el: "Συχνές ερωτήσεις" },
  "common.commonQuestions": { en: "Common questions", el: "Συνήθεις ερωτήσεις" },
  "common.relatedTransfers": { en: "Related transfers", el: "Σχετικές μεταφορές" },
  "common.nearbyAreas": { en: "Nearby areas we serve", el: "Κοντινές περιοχές που εξυπηρετούμε" },
  "common.whyUs": {
    en: "We provide private transfers to all hotels, villas and resorts in:",
    el: "Παρέχουμε ιδιωτικές μεταφορές σε όλα τα ξενοδοχεία, βίλες και θέρετρα στις:",
  },
  "common.flightTracked": { en: "Flight tracked", el: "Παρακολούθηση πτήσης" },
  "common.licensedDrivers": { en: "Licensed drivers", el: "Αδειούχοι οδηγοί" },
  "common.freeChildSeats": { en: "Free child seats", el: "Δωρεάν παιδικά καθίσματα" },
  "common.whatToExpect": { en: "what to expect", el: "τι να περιμένετε" },

  // Trust bar
  "trust.fixedPrices": { en: "Fixed prices", el: "Σταθερές τιμές" },
  "trust.meetGreet": { en: "Meet & greet", el: "Υπηρεσία υποδοχής" },
  "trust.support247": { en: "24/7 support", el: "Υποστήριξη 24/7" },
  "trust.freeCancel": { en: "Free cancellation", el: "Δωρεάν ακύρωση" },
};

export function translate(key: TranslationKey, locale: Locale): string {
  return translations[key]?.[locale] ?? key;
}

// React hook
export function useI18n() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const locale = getLocaleFromPath(pathname);
  const otherLocale: Locale = locale === "en" ? "el" : "en";
  const basePath = stripLocale(pathname);
  const switchPath = withLocale(otherLocale, basePath);

  return {
    locale,
    otherLocale,
    switchPath,
    t: (key: TranslationKey) => translate(key, locale),
    isGreek: locale === "el",
  };
}
