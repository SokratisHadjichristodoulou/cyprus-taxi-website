export interface Route {
  slug: string;
  name: string;
  fromAirport: string;
  duration: string;
  distance: string;
  priceFrom: number;
}

export const popularRoutes: Route[] = [
  { slug: "/larnaca-airport-to-paphos", name: "Larnaca Airport → Paphos", fromAirport: "Larnaca", duration: "1h 30m", distance: "140 km", priceFrom: 95 },
  { slug: "/taxi-to-limassol", name: "Larnaca Airport → Limassol", fromAirport: "Larnaca", duration: "45 min", distance: "70 km", priceFrom: 55 },
  { slug: "/taxi-to-coral-bay", name: "Paphos Airport → Coral Bay", fromAirport: "Paphos", duration: "30 min", distance: "25 km", priceFrom: 35 },
  { slug: "/taxi-to-peyia", name: "Paphos Airport → Peyia", fromAirport: "Paphos", duration: "30 min", distance: "22 km", priceFrom: 35 },
  { slug: "/taxi-to-chloraka", name: "Paphos Airport → Chloraka", fromAirport: "Paphos", duration: "25 min", distance: "20 km", priceFrom: 32 },
  { slug: "/larnaca-airport-transfers", name: "Larnaca Airport Transfers", fromAirport: "Larnaca", duration: "Varies", distance: "Cyprus-wide", priceFrom: 35 },
];
