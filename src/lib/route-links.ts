// Destination (pricing.ts key) → dedicated route page. PriceTable uses these to link each row
// to its page, so every price table (Paphos hub, Larnaca hub, /pricing) links the same way.
// Add a row here when a new destination page is created.

export const paphosRouteLinks: Record<string, string> = {
  "Chlorakas / Empa": "/taxi-to-chloraka",
  "Coral Bay": "/taxi-to-coral-bay",
  Peyia: "/taxi-to-peyia",
  Limassol: "/taxi-to-limassol",
};

export const larnacaRouteLinks: Record<string, string> = {
  "Paphos Town": "/larnaca-airport-to-paphos",
  "Chlorakas / Empa": "/taxi-to-chloraka",
  "Coral Bay": "/taxi-to-coral-bay",
  Peyia: "/taxi-to-peyia",
  "Ayia Napa": "/larnaca-airport-to-ayia-napa",
  Protaras: "/larnaca-airport-to-protaras",
};
