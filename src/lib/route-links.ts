// Destination (pricing.ts key) → dedicated route page. PriceTable uses these to link each row
// to its page, so every price table (Paphos hub, Larnaca hub, /pricing) links the same way.
// Add a row here when a new destination page is created.

export const paphosRouteLinks: Record<string, string> = {
  "Paphos Town / Kato Paphos": "/taxi-to-kato-paphos",
  "Tomb of the Kings": "/taxi-to-kato-paphos",
  "Chlorakas / Empa": "/taxi-to-chloraka",
  "Kissonerga / Tala": "/taxi-to-kissonerga",
  "Coral Bay": "/taxi-to-coral-bay",
  Peyia: "/taxi-to-peyia",
  "Polis – Lachi": "/taxi-to-polis-latchi",
  "Intercontinental Hotel (Aphrodite Hills)": "/taxi-to-aphrodite-hills",
  Pissouri: "/taxi-to-pissouri",
  Limassol: "/taxi-to-limassol",
  Nicosia: "/paphos-airport-to-nicosia",
  Larnaka: "/paphos-airport-to-larnaca",
};

export const larnacaRouteLinks: Record<string, string> = {
  "Paphos Town": "/larnaca-airport-to-paphos",
  "Chlorakas / Empa": "/taxi-to-chloraka",
  "Kissonerga / Tala": "/taxi-to-kissonerga",
  "Coral Bay": "/taxi-to-coral-bay",
  Peyia: "/taxi-to-peyia",
  "Intercontinental Hotel (Aphrodite Hills)": "/taxi-to-aphrodite-hills",
  Pissouri: "/taxi-to-pissouri",
  "Ayia Napa": "/larnaca-airport-to-ayia-napa",
  Protaras: "/larnaca-airport-to-protaras",
  "Polis – Lachi": "/taxi-to-polis-latchi",
};
