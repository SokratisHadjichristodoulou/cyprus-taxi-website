export interface Route {
  slug: string;
  name: string;
  fromAirport: string;
  duration: string;
  distance: string;
  priceFrom: number;
}

export const popularRoutes: Route[] = [
  { slug: "/larnaca-airport-to-paphos", name: "Larnaca Airport to Paphos", fromAirport: "Larnaca", duration: "1h 30m", distance: "140 km", priceFrom: 140 },
  { slug: "/taxi-to-coral-bay", name: "Paphos Airport to Coral Bay", fromAirport: "Paphos", duration: "30 min", distance: "25 km", priceFrom: 65 },
  { slug: "/taxi-to-peyia", name: "Paphos Airport to Peyia", fromAirport: "Paphos", duration: "30 min", distance: "22 km", priceFrom: 65 },
  { slug: "/taxi-to-chloraka", name: "Paphos Airport to Chloraka", fromAirport: "Paphos", duration: "25 min", distance: "20 km", priceFrom: 45 },
  { slug: "/taxi-to-limassol", name: "Paphos Airport to Limassol", fromAirport: "Paphos", duration: "50 min", distance: "65 km", priceFrom: 90 },
  { slug: "/larnaca-airport-transfers", name: "Larnaca Airport Transfers", fromAirport: "Larnaca", duration: "Varies", distance: "Cyprus-wide", priceFrom: 130 },
];
