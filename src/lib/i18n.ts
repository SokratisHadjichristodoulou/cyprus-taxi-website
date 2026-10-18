// Centralized i18n for English / Greek / Russian / German (German covers a subset of pages)
// Usage:
//   const { t, locale, switchPath } = useI18n();

import { useRouterState } from "@tanstack/react-router";

export type Locale = "en" | "el" | "ru" | "de";

export const LOCALES: Locale[] = ["en", "el", "ru", "de"];

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  el: "ΕΛ",
  ru: "RU",
  de: "DE",
};

export const localeFullNames: Record<Locale, string> = {
  en: "English",
  el: "Ελληνικά",
  ru: "Русский",
  de: "Deutsch",
};

// Base paths that have a German version (src/routes/de.*.tsx). German links to any other
// path fall back to the English page, so no link ever 404s. Add a path here when its
// German route is created.
export const GERMAN_PATHS = new Set<string>([
  "/",
  "/contact",
  "/faq",
  "/fleet",
  "/larnaca-airport-to-paphos",
  "/larnaca-airport-transfers",
  "/paphos-airport-to-larnaca",
  "/paphos-airport-to-nicosia",
  "/paphos-airport-transfers",
  "/pricing",
  "/taxi-to-aphrodite-hills",
  "/taxi-to-chloraka",
  "/taxi-to-coral-bay",
  "/taxi-to-kato-paphos",
  "/taxi-to-kissonerga",
  "/taxi-to-limassol",
  "/taxi-to-peyia",
  "/taxi-to-pissouri",
  "/taxi-to-polis-latchi",
]);

// Whether a (locale-less) path exists in the given locale. en/el/ru cover every page.
export function hasLocalePage(locale: Locale, path: string): boolean {
  return locale !== "de" || GERMAN_PATHS.has(path);
}

// Detect locale from a pathname
export function getLocaleFromPath(pathname: string): Locale {
  for (const l of LOCALES) {
    if (l !== "en" && (pathname === `/${l}` || pathname.startsWith(`/${l}/`))) return l;
  }
  return "en";
}

// Strip locale prefix from a pathname
// "/el/about" -> "/about", "/ru" -> "/", "/about" -> "/about"
export function stripLocale(pathname: string): string {
  const locale = getLocaleFromPath(pathname);
  if (locale === "en") return pathname;
  return pathname.slice(locale.length + 1) || "/";
}

// Add locale prefix to a (locale-less) path; falls back to English when the page
// has no version in that locale.
export function withLocale(locale: Locale, path: string): string {
  if (locale === "en" || !hasLocalePage(locale, path)) return path;
  const prefix = `/${locale}`;
  if (path === "/") return prefix;
  return `${prefix}${path}`;
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
  | "trust.freeCancel"
  | "price.from"
  | "price.fromShort"
  | "price.fixedFrom"
  | "price.totalPerVehicle"
  | "price.destination"
  | "price.seater4"
  | "price.seater6"
  | "price.seater12"
  | "airport.paphos"
  | "airport.larnaca"
  | "wa.ariaLabel"
  | "wa.prefilledMessage";

const translations: Record<TranslationKey, Record<Locale, string>> = {
  // Navigation
  "nav.home": { en: "Home", el: "Αρχική", ru: "Главная", de: "Startseite" },
  "nav.transfers": { en: "Transfers", el: "Μεταφορές", ru: "Трансферы", de: "Transfers" },
  "nav.pricing": { en: "Pricing", el: "Τιμές", ru: "Цены", de: "Preise" },
  "nav.fleet": { en: "Fleet", el: "Στόλος", ru: "Автопарк", de: "Flotte" },
  "nav.reviews": { en: "Reviews", el: "Κριτικές", ru: "Отзывы", de: "Bewertungen" },
  "nav.blog": { en: "Travel Guide", el: "Οδηγός Ταξιδιού", ru: "Путеводитель", de: "Reiseführer" },
  "nav.about": { en: "About", el: "Σχετικά", ru: "О нас", de: "Über uns" },
  "nav.faq": { en: "FAQ", el: "Συχνές Ερωτήσεις", ru: "Вопросы", de: "FAQ" },
  "nav.contact": { en: "Contact", el: "Επικοινωνία", ru: "Контакты", de: "Kontakt" },

  // CTAs
  "cta.bookNow": { en: "Book Now", el: "Κράτηση", ru: "Заказать", de: "Jetzt buchen" },
  "cta.bookYourTransfer": {
    en: "Book Your Transfer",
    el: "Κάντε Κράτηση",
    ru: "Забронировать трансфер",
    de: "Transfer buchen",
  },
  "cta.callUs": { en: "Call Us", el: "Καλέστε μας", ru: "Позвонить", de: "Anrufen" },
  "cta.whatsappQuote": {
    en: "WhatsApp Quote",
    el: "Προσφορά WhatsApp",
    ru: "WhatsApp",
    de: "Angebot per WhatsApp",
  },
  "cta.readyWhenYouAre": {
    en: "Ready when you are",
    el: "Έτοιμοι όταν είστε",
    ru: "Готовы, когда вы готовы",
    de: "Bereit, wenn Sie es sind",
  },
  "cta.bookHeadline": {
    en: "Book your Cyprus airport transfer",
    el: "Κλείστε τη μεταφορά σας από το αεροδρόμιο της Κύπρου",
    ru: "Закажите трансфер из аэропорта Кипра",
    de: "Buchen Sie Ihren Flughafentransfer auf Zypern",
  },
  "cta.bookSubcopy": {
    en: "Taxicyprus24 combines fixed-price Cyprus airport transfers, free cancellation, professional English-speaking drivers, and reliable meet & greet service on every booking. Whether you need a taxi from Larnaca Airport, Paphos Airport, Limassol, or anywhere in Cyprus, we guarantee comfortable private transfers with no hidden fees, no surge pricing, and 24/7 customer support — every time.",
    el: "Η Taxicyprus24 προσφέρει μεταφορές από αεροδρόμια της Κύπρου με σταθερή τιμή, δωρεάν ακύρωση, επαγγελματίες αγγλόφωνους οδηγούς και υπηρεσία υποδοχής σε κάθε κράτηση. Είτε χρειάζεστε ταξί από το αεροδρόμιο Λάρνακας, το αεροδρόμιο Πάφου, τη Λεμεσό ή οπουδήποτε στην Κύπρο, εγγυόμαστε άνετες ιδιωτικές μεταφορές χωρίς κρυφές χρεώσεις, χωρίς υπερτιμολόγηση και με υποστήριξη 24/7 — κάθε φορά.",
    ru: "Taxicyprus24 предлагает трансферы из аэропортов Кипра по фиксированным ценам, бесплатную отмену, профессиональных англоговорящих водителей и надёжную услугу встречи в аэропорту при каждом бронировании. Нужен ли вам трансфер из аэропорта Ларнаки, Пафоса, Лимассола или в любую точку Кипра — мы гарантируем комфортные частные поездки без скрытых платежей, без повышения тарифов и круглосуточную поддержку — каждый раз.",
    de: "Taxicyprus24 bietet Flughafentransfers auf Zypern zum Festpreis, kostenlose Stornierung, professionelle englischsprachige Fahrer und einen zuverlässigen Meet & Greet bei jeder Buchung. Ob Sie ein Taxi vom Flughafen Larnaka, vom Flughafen Paphos, aus Limassol oder von einem anderen Ort auf Zypern brauchen – wir garantieren komfortable Privattransfers ohne versteckte Kosten, ohne Preisaufschläge und mit Kundenservice rund um die Uhr.",
  },

  // Footer
  "footer.tagline": {
    en: "Taxicyprus24 provides premium private airport transfers across Cyprus with fixed prices, professional drivers, and reliable 24/7 taxi service. Whether you need a private transfer from Larnaca Airport, Paphos Airport, Limassol, Nicosia, or any destination in Cyprus, we guarantee comfortable vehicles, meet & greet service, flight monitoring, and transparent pricing with no hidden fees.",
    el: "Η Taxicyprus24 παρέχει premium ιδιωτικές μεταφορές από αεροδρόμια σε όλη την Κύπρο με σταθερές τιμές, επαγγελματίες οδηγούς και αξιόπιστη υπηρεσία ταξί 24/7. Είτε χρειάζεστε ιδιωτική μεταφορά από το αεροδρόμιο Λάρνακας, το αεροδρόμιο Πάφου, τη Λεμεσό, τη Λευκωσία ή οποιονδήποτε προορισμό στην Κύπρο, εγγυόμαστε άνετα οχήματα, υπηρεσία υποδοχής, παρακολούθηση πτήσεων και διαφανή τιμολόγηση χωρίς κρυφές χρεώσεις.",
    ru: "Taxicyprus24 предоставляет премиальные частные трансферы из аэропортов по всему Кипру с фиксированными ценами, профессиональными водителями и надёжной службой такси 24/7. Нужен ли вам частный трансфер из аэропорта Ларнаки, Пафоса, Лимассола, Никосии или в любое место на Кипре — мы гарантируем комфортные автомобили, встречу в аэропорту, отслеживание рейсов и прозрачные цены без скрытых платежей.",
    de: "Taxicyprus24 bietet hochwertige private Flughafentransfers auf ganz Zypern – mit Festpreisen, professionellen Fahrern und einem zuverlässigen Taxiservice rund um die Uhr. Ob Privattransfer vom Flughafen Larnaka, vom Flughafen Paphos, aus Limassol, Nikosia oder zu jedem anderen Ziel auf Zypern: Wir garantieren komfortable Fahrzeuge, Meet & Greet, Flugüberwachung und transparente Preise ohne versteckte Kosten.",
  },
  "footer.transfers": { en: "Transfers", el: "Μεταφορές", ru: "Трансферы", de: "Transfers" },
  "footer.company": { en: "Company", el: "Εταιρεία", ru: "Компания", de: "Unternehmen" },
  "footer.contact": { en: "Contact", el: "Επικοινωνία", ru: "Контакты", de: "Kontakt" },
  "footer.aboutUs": { en: "About Us", el: "Σχετικά με εμάς", ru: "О нас", de: "Über uns" },
  "footer.ourFleet": {
    en: "Our Fleet",
    el: "Ο Στόλος μας",
    ru: "Наш автопарк",
    de: "Unsere Flotte",
  },
  "footer.travelGuide": {
    en: "Travel Guide",
    el: "Οδηγός Ταξιδιού",
    ru: "Путеводитель",
    de: "Reiseführer",
  },
  "footer.serving": {
    en: "Serving Larnaca & Paphos airports, all Cyprus",
    el: "Εξυπηρετούμε τα αεροδρόμια Λάρνακας & Πάφου, όλη την Κύπρο",
    ru: "Обслуживаем аэропорты Ларнаки и Пафоса, весь Кипр",
    de: "Flughäfen Larnaka & Paphos, ganz Zypern",
  },
  "footer.rights": {
    en: "All rights reserved.",
    el: "Με την επιφύλαξη παντός δικαιώματος.",
    ru: "Все права защищены.",
    de: "Alle Rechte vorbehalten.",
  },
  "footer.licensed": {
    en: "Licensed transportation provider · Cyprus",
    el: "Αδειοδοτημένος πάροχος μεταφορών · Κύπρος",
    ru: "Лицензированный перевозчик · Кипр",
    de: "Lizenziertes Transportunternehmen · Zypern",
  },

  // Header
  "header.premiumTransfers": {
    en: "Premium Transfers",
    el: "Premium Μεταφορές",
    ru: "Премиум трансферы",
    de: "Premium-Transfers",
  },

  // Booking form
  "form.pickupLocation": {
    en: "Pickup location",
    el: "Σημείο παραλαβής",
    ru: "Место подачи",
    de: "Abholort",
  },
  "form.dropoffLocation": {
    en: "Drop-off location",
    el: "Σημείο άφιξης",
    ru: "Место назначения",
    de: "Zielort",
  },
  "form.date": { en: "Date", el: "Ημερομηνία", ru: "Дата", de: "Datum" },
  "form.time": { en: "Time", el: "Ώρα", ru: "Время", de: "Uhrzeit" },
  "form.passengers": { en: "Passengers", el: "Επιβάτες", ru: "Пассажиры", de: "Fahrgäste" },
  "form.flightNumber": {
    en: "Flight number",
    el: "Αριθμός πτήσης",
    ru: "Номер рейса",
    de: "Flugnummer",
  },
  "form.name": { en: "Your name", el: "Ονοματεπώνυμο", ru: "Ваше имя", de: "Ihr Name" },
  "form.email": { en: "Email", el: "Email", ru: "Email", de: "E-Mail" },
  "form.phone": { en: "Phone", el: "Τηλέφωνο", ru: "Телефон", de: "Telefon" },
  "form.notes": { en: "Notes", el: "Σημειώσεις", ru: "Примечания", de: "Anmerkungen" },
  "form.requestQuote": {
    en: "Request a Quote",
    el: "Ζητήστε Προσφορά",
    ru: "Запросить расчёт",
    de: "Angebot anfordern",
  },
  "form.bookYourTransfer": {
    en: "Book your transfer",
    el: "Κάντε κράτηση",
    ru: "Забронировать трансфер",
    de: "Transfer buchen",
  },
  "form.optional": { en: "Optional", el: "Προαιρετικό", ru: "Необязательно", de: "Optional" },
  "form.thankYou": { en: "Thank you!", el: "Ευχαριστούμε!", ru: "Спасибо!", de: "Vielen Dank!" },
  "form.weWillContact": {
    en: "We will contact you shortly to confirm your transfer.",
    el: "Θα επικοινωνήσουμε σύντομα μαζί σας για να επιβεβαιώσουμε τη μεταφορά σας.",
    ru: "Мы свяжемся с вами в ближайшее время, чтобы подтвердить ваш трансфер.",
    de: "Wir melden uns in Kürze, um Ihren Transfer zu bestätigen.",
  },

  // Common transfer-page strings
  "common.from": { en: "From", el: "Από", ru: "Откуда", de: "Von" },
  "common.to": { en: "To", el: "Προς", ru: "Куда", de: "Nach" },
  "common.duration": { en: "Duration", el: "Διάρκεια", ru: "Время в пути", de: "Fahrzeit" },
  "common.distance": { en: "Distance", el: "Απόσταση", ru: "Расстояние", de: "Entfernung" },
  "common.fixedPrices": {
    en: "Fixed prices",
    el: "Σταθερές τιμές",
    ru: "Фиксированные цены",
    de: "Festpreise",
  },
  "common.transferPrices": {
    en: "Transfer prices",
    el: "Τιμές μεταφοράς",
    ru: "Стоимость трансфера",
    de: "Transferpreise",
  },
  "common.allInclusive": {
    en: "All prices include taxes, child seats and meet & greet.",
    el: "Όλες οι τιμές περιλαμβάνουν φόρους, παιδικά καθίσματα και υπηρεσία υποδοχής.",
    ru: "Все цены включают налоги, детские кресла и встречу в аэропорту.",
    de: "Alle Preise inklusive Steuern, Kindersitzen und Meet & Greet.",
  },
  "common.upToPassengers": {
    en: "Up to passengers",
    el: "Έως επιβάτες",
    ru: "До пассажиров",
    de: "Bis zu … Fahrgäste",
  },
  "common.faq": { en: "FAQ", el: "Συχνές ερωτήσεις", ru: "Вопросы и ответы", de: "FAQ" },
  "common.commonQuestions": {
    en: "Common questions",
    el: "Συνήθεις ερωτήσεις",
    ru: "Частые вопросы",
    de: "Häufige Fragen",
  },
  "common.relatedTransfers": {
    en: "Related transfers",
    el: "Σχετικές μεταφορές",
    ru: "Похожие трансферы",
    de: "Weitere Transfers",
  },
  "common.nearbyAreas": {
    en: "Nearby areas we serve",
    el: "Κοντινές περιοχές που εξυπηρετούμε",
    ru: "Ближайшие районы обслуживания",
    de: "Orte in der Nähe, die wir anfahren",
  },
  "common.whyUs": {
    en: "We provide private transfers to all hotels, villas and resorts in:",
    el: "Παρέχουμε ιδιωτικές μεταφορές σε όλα τα ξενοδοχεία, βίλες και θέρετρα στις:",
    ru: "Мы предоставляем частные трансферы во все отели, виллы и курорты в:",
    de: "Wir bieten Privattransfers zu allen Hotels, Villen und Resorts in:",
  },
  "common.flightTracked": {
    en: "Flight tracked",
    el: "Παρακολούθηση πτήσης",
    ru: "Отслеживание рейса",
    de: "Flugüberwachung",
  },
  "common.licensedDrivers": {
    en: "Licensed drivers",
    el: "Αδειούχοι οδηγοί",
    ru: "Лицензированные водители",
    de: "Lizenzierte Fahrer",
  },
  "common.freeChildSeats": {
    en: "Free child seats",
    el: "Δωρεάν παιδικά καθίσματα",
    ru: "Бесплатные детские кресла",
    de: "Kostenlose Kindersitze",
  },
  "common.whatToExpect": {
    en: "what to expect",
    el: "τι να περιμένετε",
    ru: "что вас ждёт",
    de: "das erwartet Sie",
  },

  // Trust bar
  "trust.fixedPrices": {
    en: "Fixed prices",
    el: "Σταθερές τιμές",
    ru: "Фиксированные цены",
    de: "Festpreise",
  },
  "trust.meetGreet": {
    en: "Meet & greet",
    el: "Υπηρεσία υποδοχής",
    ru: "Встреча в аэропорту",
    de: "Meet & Greet",
  },
  "trust.support247": {
    en: "24/7 support",
    el: "Υποστήριξη 24/7",
    ru: "Поддержка 24/7",
    de: "Support rund um die Uhr",
  },
  "trust.freeCancel": {
    en: "Free cancellation",
    el: "Δωρεάν ακύρωση",
    ru: "Бесплатная отмена",
    de: "Kostenlose Stornierung",
  },

  // Price table
  "price.from": { en: "From", el: "Από", ru: "Из", de: "Ab" },
  "price.fromShort": { en: "from", el: "από", ru: "от", de: "ab" },
  "price.fixedFrom": {
    en: "Fixed prices from",
    el: "Σταθερές τιμές από",
    ru: "Фиксированные цены из",
    de: "Festpreise ab",
  },
  "price.totalPerVehicle": {
    en: "Total per vehicle · incl. child seats & meet & greet",
    el: "Σύνολο ανά όχημα · παιδικά καθίσματα & υποδοχή",
    ru: "Итог за автомобиль · включая детские кресла и встречу",
    de: "Gesamtpreis pro Fahrzeug · inkl. Kindersitzen & Meet & Greet",
  },
  "price.destination": { en: "Destination", el: "Προορισμός", ru: "Направление", de: "Ziel" },
  "price.seater4": { en: "4 Seater", el: "4 θέσεων", ru: "4 места", de: "4-Sitzer" },
  "price.seater6": { en: "6 Seater", el: "6 θέσεων", ru: "6 мест", de: "6-Sitzer" },
  "price.seater12": { en: "12 Seater", el: "12 θέσεων", ru: "12 мест", de: "12-Sitzer" },

  // Airports
  "airport.paphos": {
    en: "Paphos Airport",
    el: "Αεροδρόμιο Πάφου",
    ru: "Аэропорт Пафоса",
    de: "Flughafen Paphos",
  },
  "airport.larnaca": {
    en: "Larnaca Airport",
    el: "Αεροδρόμιο Λάρνακας",
    ru: "Аэропорт Ларнаки",
    de: "Flughafen Larnaka",
  },

  // WhatsApp button
  "wa.ariaLabel": {
    en: "Chat on WhatsApp",
    el: "Συνομιλία στο WhatsApp",
    ru: "Написать в WhatsApp",
    de: "Per WhatsApp schreiben",
  },
  "wa.prefilledMessage": {
    en: "Hi! I'd like to book a Cyprus airport transfer",
    el: "Γεια σας! Θα ήθελα να κάνω κράτηση για μεταφορά από αεροδρόμιο της Κύπρου",
    ru: "Здравствуйте! Я бы хотел(а) заказать трансфер из аэропорта Кипра",
    // Messages to the business stay in English.
    de: "Hi! I'd like to book a Cyprus airport transfer",
  },
};

export function translate(key: TranslationKey, locale: Locale): string {
  return translations[key]?.[locale] ?? key;
}

// React hook
export function useI18n() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const locale = getLocaleFromPath(pathname);
  const basePath = stripLocale(pathname);

  // Build a switch map for every locale; a locale without this page links to its home page
  const switchPaths = Object.fromEntries(
    LOCALES.map((l) => [l, withLocale(l, hasLocalePage(l, basePath) ? basePath : "/")]),
  ) as Record<Locale, string>;

  // Back-compat single "other" locale (en <-> el toggle).
  // For 3-locale UI prefer switchPaths.
  const otherLocale: Locale = locale === "en" ? "el" : "en";
  const switchPath = switchPaths[otherLocale];

  return {
    locale,
    otherLocale,
    switchPath,
    switchPaths,
    t: (key: TranslationKey) => translate(key, locale),
    isGreek: locale === "el",
    isRussian: locale === "ru",
    isGerman: locale === "de",
  };
}
