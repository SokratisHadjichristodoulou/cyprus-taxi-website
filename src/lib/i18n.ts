// Centralized i18n for English / Greek / Russian
// Usage:
//   const { t, locale, switchPath } = useI18n();

import { useRouterState } from "@tanstack/react-router";

export type Locale = "en" | "el" | "ru";

export const LOCALES: Locale[] = ["en", "el", "ru"];

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  el: "ΕΛ",
  ru: "RU",
};

export const localeFullNames: Record<Locale, string> = {
  en: "English",
  el: "Ελληνικά",
  ru: "Русский",
};

// Detect locale from a pathname
export function getLocaleFromPath(pathname: string): Locale {
  if (pathname === "/el" || pathname.startsWith("/el/")) return "el";
  if (pathname === "/ru" || pathname.startsWith("/ru/")) return "ru";
  return "en";
}

// Strip locale prefix from a pathname
// "/el/about" -> "/about", "/ru" -> "/", "/about" -> "/about"
export function stripLocale(pathname: string): string {
  if (pathname === "/el" || pathname === "/ru") return "/";
  if (pathname.startsWith("/el/")) return pathname.slice(3);
  if (pathname.startsWith("/ru/")) return pathname.slice(3);
  return pathname;
}

// Add locale prefix to a (locale-less) path
export function withLocale(locale: Locale, path: string): string {
  if (locale === "en") return path;
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
  "nav.home": { en: "Home", el: "Αρχική", ru: "Главная" },
  "nav.transfers": { en: "Transfers", el: "Μεταφορές", ru: "Трансферы" },
  "nav.pricing": { en: "Pricing", el: "Τιμές", ru: "Цены" },
  "nav.fleet": { en: "Fleet", el: "Στόλος", ru: "Автопарк" },
  "nav.reviews": { en: "Reviews", el: "Κριτικές", ru: "Отзывы" },
  "nav.blog": { en: "Travel Guide", el: "Οδηγός Ταξιδιού", ru: "Путеводитель" },
  "nav.about": { en: "About", el: "Σχετικά", ru: "О нас" },
  "nav.faq": { en: "FAQ", el: "Συχνές Ερωτήσεις", ru: "Вопросы" },
  "nav.contact": { en: "Contact", el: "Επικοινωνία", ru: "Контакты" },

  // CTAs
  "cta.bookNow": { en: "Book Now", el: "Κράτηση", ru: "Заказать" },
  "cta.bookYourTransfer": { en: "Book Your Transfer", el: "Κάντε Κράτηση", ru: "Забронировать трансфер" },
  "cta.callUs": { en: "Call Us", el: "Καλέστε μας", ru: "Позвонить" },
  "cta.whatsappQuote": { en: "WhatsApp Quote", el: "Προσφορά WhatsApp", ru: "WhatsApp" },
  "cta.readyWhenYouAre": { en: "Ready when you are", el: "Έτοιμοι όταν είστε", ru: "Готовы, когда вы готовы" },
  "cta.bookHeadline": {
    en: "Book your Cyprus airport transfer",
    el: "Κλείστε τη μεταφορά σας από το αεροδρόμιο της Κύπρου",
    ru: "Закажите трансфер из аэропорта Кипра",
  },
  "cta.bookSubcopy": {
    en: "Taxicyprus24 combines fixed-price Cyprus airport transfers, free cancellation, professional English-speaking drivers, and reliable meet & greet service on every booking. Whether you need a taxi from Larnaca Airport, Paphos Airport, Limassol, or anywhere in Cyprus, we guarantee comfortable private transfers with no hidden fees, no surge pricing, and 24/7 customer support — every time.",
    el: "Η Taxicyprus24 προσφέρει μεταφορές από αεροδρόμια της Κύπρου με σταθερή τιμή, δωρεάν ακύρωση, επαγγελματίες αγγλόφωνους οδηγούς και υπηρεσία υποδοχής σε κάθε κράτηση. Είτε χρειάζεστε ταξί από το αεροδρόμιο Λάρνακας, το αεροδρόμιο Πάφου, τη Λεμεσό ή οπουδήποτε στην Κύπρο, εγγυόμαστε άνετες ιδιωτικές μεταφορές χωρίς κρυφές χρεώσεις, χωρίς υπερτιμολόγηση και με υποστήριξη 24/7 — κάθε φορά.",
    ru: "Taxicyprus24 предлагает трансферы из аэропортов Кипра по фиксированным ценам, бесплатную отмену, профессиональных англоговорящих водителей и надёжную услугу встречи в аэропорту при каждом бронировании. Нужен ли вам трансфер из аэропорта Ларнаки, Пафоса, Лимассола или в любую точку Кипра — мы гарантируем комфортные частные поездки без скрытых платежей, без повышения тарифов и круглосуточную поддержку — каждый раз.",
  },

  // Footer
  "footer.tagline": {
    en: "Taxicyprus24 provides premium private airport transfers across Cyprus with fixed prices, professional drivers, and reliable 24/7 taxi service. Whether you need a private transfer from Larnaca Airport, Paphos Airport, Limassol, Nicosia, or any destination in Cyprus, we guarantee comfortable vehicles, meet & greet service, flight monitoring, and transparent pricing with no hidden fees.",
    el: "Η Taxicyprus24 παρέχει premium ιδιωτικές μεταφορές από αεροδρόμια σε όλη την Κύπρο με σταθερές τιμές, επαγγελματίες οδηγούς και αξιόπιστη υπηρεσία ταξί 24/7. Είτε χρειάζεστε ιδιωτική μεταφορά από το αεροδρόμιο Λάρνακας, το αεροδρόμιο Πάφου, τη Λεμεσό, τη Λευκωσία ή οποιονδήποτε προορισμό στην Κύπρο, εγγυόμαστε άνετα οχήματα, υπηρεσία υποδοχής, παρακολούθηση πτήσεων και διαφανή τιμολόγηση χωρίς κρυφές χρεώσεις.",
    ru: "Taxicyprus24 предоставляет премиальные частные трансферы из аэропортов по всему Кипру с фиксированными ценами, профессиональными водителями и надёжной службой такси 24/7. Нужен ли вам частный трансфер из аэропорта Ларнаки, Пафоса, Лимассола, Никосии или в любое место на Кипре — мы гарантируем комфортные автомобили, встречу в аэропорту, отслеживание рейсов и прозрачные цены без скрытых платежей.",
  },
  "footer.transfers": { en: "Transfers", el: "Μεταφορές", ru: "Трансферы" },
  "footer.company": { en: "Company", el: "Εταιρεία", ru: "Компания" },
  "footer.contact": { en: "Contact", el: "Επικοινωνία", ru: "Контакты" },
  "footer.aboutUs": { en: "About Us", el: "Σχετικά με εμάς", ru: "О нас" },
  "footer.ourFleet": { en: "Our Fleet", el: "Ο Στόλος μας", ru: "Наш автопарк" },
  "footer.travelGuide": { en: "Travel Guide", el: "Οδηγός Ταξιδιού", ru: "Путеводитель" },
  "footer.serving": {
    en: "Serving Larnaca & Paphos airports, all Cyprus",
    el: "Εξυπηρετούμε τα αεροδρόμια Λάρνακας & Πάφου, όλη την Κύπρο",
    ru: "Обслуживаем аэропорты Ларнаки и Пафоса, весь Кипр",
  },
  "footer.rights": {
    en: "All rights reserved.",
    el: "Με την επιφύλαξη παντός δικαιώματος.",
    ru: "Все права защищены.",
  },
  "footer.licensed": {
    en: "Licensed transportation provider · Cyprus",
    el: "Αδειοδοτημένος πάροχος μεταφορών · Κύπρος",
    ru: "Лицензированный перевозчик · Кипр",
  },

  // Header
  "header.premiumTransfers": {
    en: "Premium Transfers",
    el: "Premium Μεταφορές",
    ru: "Премиум трансферы",
  },

  // Booking form
  "form.pickupLocation": { en: "Pickup location", el: "Σημείο παραλαβής", ru: "Место подачи" },
  "form.dropoffLocation": { en: "Drop-off location", el: "Σημείο άφιξης", ru: "Место назначения" },
  "form.date": { en: "Date", el: "Ημερομηνία", ru: "Дата" },
  "form.time": { en: "Time", el: "Ώρα", ru: "Время" },
  "form.passengers": { en: "Passengers", el: "Επιβάτες", ru: "Пассажиры" },
  "form.flightNumber": { en: "Flight number", el: "Αριθμός πτήσης", ru: "Номер рейса" },
  "form.name": { en: "Your name", el: "Ονοματεπώνυμο", ru: "Ваше имя" },
  "form.email": { en: "Email", el: "Email", ru: "Email" },
  "form.phone": { en: "Phone", el: "Τηλέφωνο", ru: "Телефон" },
  "form.notes": { en: "Notes", el: "Σημειώσεις", ru: "Примечания" },
  "form.requestQuote": { en: "Request a Quote", el: "Ζητήστε Προσφορά", ru: "Запросить расчёт" },
  "form.bookYourTransfer": { en: "Book your transfer", el: "Κάντε κράτηση", ru: "Забронировать трансфер" },
  "form.optional": { en: "Optional", el: "Προαιρετικό", ru: "Необязательно" },
  "form.thankYou": { en: "Thank you!", el: "Ευχαριστούμε!", ru: "Спасибо!" },
  "form.weWillContact": {
    en: "We will contact you shortly to confirm your transfer.",
    el: "Θα επικοινωνήσουμε σύντομα μαζί σας για να επιβεβαιώσουμε τη μεταφορά σας.",
    ru: "Мы свяжемся с вами в ближайшее время, чтобы подтвердить ваш трансфер.",
  },

  // Common transfer-page strings
  "common.from": { en: "From", el: "Από", ru: "Откуда" },
  "common.to": { en: "To", el: "Προς", ru: "Куда" },
  "common.duration": { en: "Duration", el: "Διάρκεια", ru: "Время в пути" },
  "common.distance": { en: "Distance", el: "Απόσταση", ru: "Расстояние" },
  "common.fixedPrices": { en: "Fixed prices", el: "Σταθερές τιμές", ru: "Фиксированные цены" },
  "common.transferPrices": { en: "Transfer prices", el: "Τιμές μεταφοράς", ru: "Стоимость трансфера" },
  "common.allInclusive": {
    en: "All prices include tolls, taxes, child seats and meet & greet.",
    el: "Όλες οι τιμές περιλαμβάνουν διόδια, φόρους, παιδικά καθίσματα και υπηρεσία υποδοχής.",
    ru: "Все цены включают платные дороги, налоги, детские кресла и встречу в аэропорту.",
  },
  "common.upToPassengers": { en: "Up to passengers", el: "Έως επιβάτες", ru: "До пассажиров" },
  "common.faq": { en: "FAQ", el: "Συχνές ερωτήσεις", ru: "Вопросы и ответы" },
  "common.commonQuestions": { en: "Common questions", el: "Συνήθεις ερωτήσεις", ru: "Частые вопросы" },
  "common.relatedTransfers": { en: "Related transfers", el: "Σχετικές μεταφορές", ru: "Похожие трансферы" },
  "common.nearbyAreas": {
    en: "Nearby areas we serve",
    el: "Κοντινές περιοχές που εξυπηρετούμε",
    ru: "Ближайшие районы обслуживания",
  },
  "common.whyUs": {
    en: "We provide private transfers to all hotels, villas and resorts in:",
    el: "Παρέχουμε ιδιωτικές μεταφορές σε όλα τα ξενοδοχεία, βίλες και θέρετρα στις:",
    ru: "Мы предоставляем частные трансферы во все отели, виллы и курорты в:",
  },
  "common.flightTracked": { en: "Flight tracked", el: "Παρακολούθηση πτήσης", ru: "Отслеживание рейса" },
  "common.licensedDrivers": { en: "Licensed drivers", el: "Αδειούχοι οδηγοί", ru: "Лицензированные водители" },
  "common.freeChildSeats": { en: "Free child seats", el: "Δωρεάν παιδικά καθίσματα", ru: "Бесплатные детские кресла" },
  "common.whatToExpect": { en: "what to expect", el: "τι να περιμένετε", ru: "что вас ждёт" },

  // Trust bar
  "trust.fixedPrices": { en: "Fixed prices", el: "Σταθερές τιμές", ru: "Фиксированные цены" },
  "trust.meetGreet": { en: "Meet & greet", el: "Υπηρεσία υποδοχής", ru: "Встреча в аэропорту" },
  "trust.support247": { en: "24/7 support", el: "Υποστήριξη 24/7", ru: "Поддержка 24/7" },
  "trust.freeCancel": { en: "Free cancellation", el: "Δωρεάν ακύρωση", ru: "Бесплатная отмена" },
};

export function translate(key: TranslationKey, locale: Locale): string {
  return translations[key]?.[locale] ?? key;
}

// React hook
export function useI18n() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const locale = getLocaleFromPath(pathname);
  const basePath = stripLocale(pathname);

  // Build a switch map for every other locale
  const switchPaths: Record<Locale, string> = {
    en: withLocale("en", basePath),
    el: withLocale("el", basePath),
    ru: withLocale("ru", basePath),
  };

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
  };
}
