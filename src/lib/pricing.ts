// Centralised transfer pricing.
// All prices are total fixed prices in EUR per vehicle (not per person).

export type VehicleClass = "4 Seater" | "6 Seater" | "12 Seater";

export interface DestinationPricing {
  destination: string;
  prices: Record<VehicleClass, number>;
  note?: string;
}

export interface AirportPricing {
  airport: "Paphos Airport" | "Larnaca Airport";
  destinations: DestinationPricing[];
}

export const pricingFromPaphos: AirportPricing = {
  airport: "Paphos Airport",
  destinations: [
    { destination: "Paphos Town / Kato Paphos", prices: { "4 Seater": 35, "6 Seater": 50, "12 Seater": 80 } },
    { destination: "Tomb of the Kings", prices: { "4 Seater": 40, "6 Seater": 50, "12 Seater": 80 } },
    {
      destination: "Chlorakas / Empa",
      prices: { "4 Seater": 45, "6 Seater": 60, "12 Seater": 80 },
      note: "Out of Paphos",
    },
    {
      destination: "Kissonerga / Tala",
      prices: { "4 Seater": 55, "6 Seater": 70, "12 Seater": 85 },
      note: "Out of Paphos",
    },
    { destination: "Kamares", prices: { "4 Seater": 55, "6 Seater": 70, "12 Seater": 90 } },
    { destination: "Tsada", prices: { "4 Seater": 60, "6 Seater": 70, "12 Seater": 90 } },
    { destination: "Coral Bay", prices: { "4 Seater": 65, "6 Seater": 85, "12 Seater": 120 }, note: "Out of Paphos" },
    { destination: "Peyia", prices: { "4 Seater": 65, "6 Seater": 85, "12 Seater": 120 } },
    { destination: "Polis – Lachi", prices: { "4 Seater": 95, "6 Seater": 120, "12 Seater": 160 } },
    {
      destination: "Intercontinental Hotel (Aphrodite Hills)",
      prices: { "4 Seater": 45, "6 Seater": 60, "12 Seater": 80 },
    },
    { destination: "Pissouri", prices: { "4 Seater": 60, "6 Seater": 80, "12 Seater": 120 } },
    { destination: "Limassol", prices: { "4 Seater": 90, "6 Seater": 120, "12 Seater": 160 } },
    { destination: "Nicosia", prices: { "4 Seater": 150, "6 Seater": 180, "12 Seater": 240 } },
    { destination: "Larnaka", prices: { "4 Seater": 140, "6 Seater": 180, "12 Seater": 240 } },
    { destination: "Ayia Napa / Protaras", prices: { "4 Seater": 200, "6 Seater": 240, "12 Seater": 300 } },
  ],
};

export const pricingFromLarnaca: AirportPricing = {
  airport: "Larnaca Airport",
  destinations: [
    { destination: "Paphos Town", prices: { "4 Seater": 140, "6 Seater": 180, "12 Seater": 240 } },
    {
      destination: "Chlorakas / Empa",
      prices: { "4 Seater": 140, "6 Seater": 180, "12 Seater": 240 },
      note: "Out of Paphos",
    },
    {
      destination: "Kissonerga / Tala",
      prices: { "4 Seater": 140, "6 Seater": 180, "12 Seater": 240 },
      note: "Out of Paphos",
    },
    { destination: "Kamares", prices: { "4 Seater": 150, "6 Seater": 180, "12 Seater": 240 } },
    { destination: "Tsada", prices: { "4 Seater": 150, "6 Seater": 180, "12 Seater": 240 } },
    { destination: "Coral Bay", prices: { "4 Seater": 170, "6 Seater": 200, "12 Seater": 270 }, note: "Out of Paphos" },
    { destination: "Peyia", prices: { "4 Seater": 170, "6 Seater": 200, "12 Seater": 270 } },
    {
      destination: "Intercontinental Hotel (Aphrodite Hills)",
      prices: { "4 Seater": 130, "6 Seater": 180, "12 Seater": 240 },
    },
    { destination: "Pissouri", prices: { "4 Seater": 130, "6 Seater": 180, "12 Seater": 240 } },
    { destination: "Polis – Lachi", prices: { "4 Seater": 200, "6 Seater": 250, "12 Seater": 320 } },
  ],
};

export const allPricing: AirportPricing[] = [pricingFromPaphos, pricingFromLarnaca];

/**
 * Map the booking form's passenger label to the matching vehicle class tier.
 * 1–4 → 4 Seater, 5–6 → 6 Seater, 7+ → 12 Seater.
 */
export function passengerLabelToVehicle(label: string): VehicleClass {
  if (label.startsWith("7") || label.startsWith("9")) return "12 Seater";
  if (label.startsWith("5") || label.startsWith("6")) return "6 Seater";
  return "4 Seater";
}

export function findPrice(pickup: string, dropoff: string, vehicle: VehicleClass): number | null {
  const pricing = allPricing.find((p) => p.airport === pickup);
  if (!pricing) return null;
  const dest = pricing.destinations.find((d) => d.destination === dropoff);
  if (!dest) return null;
  return dest.prices[vehicle] ?? null;
}
