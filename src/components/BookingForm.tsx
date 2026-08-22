import { useMemo, useState } from "react";
import { MapPin, Calendar, Users, Plane, ArrowRight } from "lucide-react";
import { z } from "zod";
import { allPricing, findPrice, passengerLabelToVehicle } from "@/lib/pricing";
import { useI18n } from "@/lib/i18n";

const airportLocations: string[] = allPricing.map((p) => p.airport);

// Unique destinations from all airports
const allDestinations = Array.from(
  new Set(allPricing.flatMap((p) => p.destinations.map((d) => d.destination))),
).sort((a, b) => a.localeCompare(b));

// Area presets (broad regions) — labels shown as plain city names
const areaLocations = ["Paphos", "Limassol", "Larnaca", "Nicosia"];

// All pickup options: airports first, then areas, then specific destinations
const pickupLocations = [...airportLocations, ...areaLocations, ...allDestinations];

// For dropoff: always include both airports. If pickup is an airport, also include
// that airport's destinations + areas. Otherwise (area/destination pickup), only airports.
function getDropoffOptions(pickup: string): string[] {
  const airportPricing = allPricing.find((p) => p.airport === pickup);
  const base = airportPricing
    ? [...airportLocations, ...airportPricing.destinations.map((d) => d.destination), ...areaLocations]
    : airportLocations;
  // Remove duplicates (e.g. Nicosia appearing as both a destination and an area)
  return Array.from(new Set(base));
}

// Resolve a price for any pickup/dropoff combo by normalizing to airport→destination lookup.
function resolvePrice(
  pickup: string,
  dropoff: string,
  vehicle: ReturnType<typeof passengerLabelToVehicle>,
): number | null {
  // Direct: pickup is airport
  if (airportLocations.includes(pickup)) {
    return findPrice(pickup, dropoff, vehicle);
  }
  // Reverse: dropoff is airport
  if (airportLocations.includes(dropoff)) {
    return findPrice(dropoff, pickup, vehicle);
  }
  return null;
}

const passengerOptionsEn = [
  "1 Passenger",
  "2 Passengers",
  "3 Passengers",
  "4 Passengers",
  "5 Passengers",
  "6 Passengers",
  "7–8 Passengers",
  "9–12 Passengers",
];

const passengerOptionsEl = [
  "1 Επιβάτης",
  "2 Επιβάτες",
  "3 Επιβάτες",
  "4 Επιβάτες",
  "5 Επιβάτες",
  "6 Επιβάτες",
  "7–8 Επιβάτες",
  "9–12 Επιβάτες",
];

const bookingSchema = z.object({
  pickup: z.string().trim().min(2).max(80),
  dropoff: z.string().trim().min(2).max(80),
  date: z.string().min(1),
  passengers: z.string().min(1),
  flight: z.string().trim().max(20).optional(),
});

interface Props {
  variant?: "hero" | "page";
  defaultPickup?: string;
  defaultDropoff?: string;
}

export function BookingForm({ variant = "hero", defaultPickup = "", defaultDropoff = "" }: Props) {
  const { isGreek } = useI18n();
  const passengerOptions = isGreek ? passengerOptionsEl : passengerOptionsEn;

  const [pickup, setPickup] = useState(defaultPickup || "Paphos Airport");
  const [dropoff, setDropoff] = useState(defaultDropoff);
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState(passengerOptions[1]);
  const [flight, setFlight] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const dropoffOptions: string[] = getDropoffOptions(pickup);

  const quote = useMemo(() => {
    if (!dropoff) return null;
    // map either language passenger label back to vehicle index
    const idx = passengerOptions.indexOf(passengers);
    const englishLabel = idx >= 0 ? passengerOptionsEn[idx] : passengers;
    const vehicle = passengerLabelToVehicle(englishLabel);
    const price = resolvePrice(pickup, dropoff, vehicle);
    if (price == null) return null;
    return { price, vehicle };
  }, [pickup, dropoff, passengers, passengerOptions]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = bookingSchema.safeParse({ pickup, dropoff, date, passengers, flight });
    if (!result.success) {
      setError(isGreek ? "Παρακαλώ συμπληρώστε όλα τα απαραίτητα πεδία." : "Please complete all required fields.");
      return;
    }
    setError(null);
    setSubmitted(true);
    const priceLine = quote ? `\n• Vehicle: ${quote.vehicle}\n• Price: €${quote.price} (fixed total)` : "";
    const msg = encodeURIComponent(
      isGreek
        ? `Γεια σας! Θα ήθελα να κλείσω μεταφορά:\n• Από: ${pickup}\n• Προς: ${dropoff}\n• Ημερομηνία: ${date}\n• Επιβάτες: ${passengers}${priceLine}${flight ? `\n• Πτήση: ${flight}` : ""}`
        : `Hi! I'd like to book a transfer:\n• From: ${pickup}\n• To: ${dropoff}\n• Date: ${date}\n• Passengers: ${passengers}${priceLine}${flight ? `\n• Flight: ${flight}` : ""}`,
    );
    window.open(`https://wa.me/35796626844?text=${msg}`, "_blank");
  };

  const isHero = variant === "hero";

  // labels
  const L = isGreek
    ? {
        title: "Άμεση Προσφορά",
        fixedPrice: "Σταθερή τιμή",
        pickup: "Σημείο παραλαβής",
        dropoff: "Σημείο άφιξης",
        selectDest: "Επιλέξτε προορισμό…",
        dateTime: "Ημερομηνία & ώρα",
        passengers: "Επιβάτες",
        flight: "Αριθμός πτήσης (προαιρετικό)",
        flightPh: "π.χ. BA2658",
        yourFixedPrice: "Η σταθερή σας τιμή",
        allInclusive: "συμπεριλαμβανομένων όλων",
        sending: "Αποστολή…",
        bookFor: (p: number) => `Κράτηση για €${p}`,
        getQuote: "Άμεση Προσφορά",
        footer: "Δωρεάν ακύρωση · Χωρίς πιστωτική κάρτα · Απάντηση σε λίγα λεπτά",
      }
    : {
        title: "Get an Instant Quote",
        fixedPrice: "Fixed price",
        pickup: "Pickup location",
        dropoff: "Drop-off location",
        selectDest: "Select destination…",
        dateTime: "Date & time",
        passengers: "Passengers",
        flight: "Flight number (optional)",
        flightPh: "e.g. BA2658",
        yourFixedPrice: "Your fixed price",
        allInclusive: "all-inclusive",
        sending: "Sending…",
        bookFor: (p: number) => `Book for €${p}`,
        getQuote: "Get Instant Quote",
        footer: "Free cancellation · No credit card required · Reply within minutes",
      };

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full rounded-2xl border border-border bg-card p-5 shadow-elegant md:p-7 ${isHero ? "" : ""}`}
    >
      <div className="mb-5 flex items-center justify-between">
        <h3 className="font-display text-lg font-bold text-navy md:text-xl">{L.title}</h3>
        <span className="hidden rounded-full bg-[color:var(--success)]/10 px-3 py-1 text-xs font-semibold text-[color:var(--success)] sm:inline">
          {L.fixedPrice}
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field label={L.pickup} icon={<MapPin className="h-4 w-4" />}>
          <select
            value={pickup}
            onChange={(e) => {
              setPickup(e.target.value);
              setDropoff("");
            }}
            className="w-full bg-transparent text-sm font-medium text-foreground outline-none"
          >
            {pickupLocations.map((l) => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
        </Field>
        <Field label={L.dropoff} icon={<MapPin className="h-4 w-4" />}>
          <select
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
            className="w-full bg-transparent text-sm font-medium text-foreground outline-none"
          >
            <option value="">{L.selectDest}</option>
            {dropoffOptions.map((l) => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
        </Field>
        <Field label={L.dateTime} icon={<Calendar className="h-4 w-4" />}>
          <input
            type="datetime-local"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full bg-transparent text-sm font-medium text-foreground outline-none"
          />
        </Field>
        <Field label={L.passengers} icon={<Users className="h-4 w-4" />}>
          <select
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
            className="w-full bg-transparent text-sm font-medium text-foreground outline-none"
          >
            {passengerOptions.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </Field>
        <div className="md:col-span-2">
          <Field label={L.flight} icon={<Plane className="h-4 w-4" />}>
            <input
              value={flight}
              onChange={(e) => setFlight(e.target.value)}
              placeholder={L.flightPh}
              maxLength={20}
              className="w-full bg-transparent text-sm font-medium text-foreground outline-none placeholder:text-muted-foreground/70"
            />
          </Field>
        </div>
      </div>

      {error && (
        <p className="mt-3 text-sm font-medium text-destructive">{error}</p>
      )}

      {quote && (
        <div className="mt-5 flex items-center justify-between rounded-xl border border-navy/15 bg-secondary/40 px-4 py-3">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-wider text-navy/60">{L.yourFixedPrice}</div>
            <div className="text-xs text-muted-foreground">{quote.vehicle} · {L.allInclusive}</div>
          </div>
          <div className="font-display text-3xl font-bold text-navy">€{quote.price}</div>
        </div>
      )}

      <button
        type="submit"
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-navy px-6 py-4 text-sm font-semibold text-[color:var(--navy-foreground)] shadow-elegant transition-all hover:scale-[1.01] hover:shadow-glow"
      >
        {submitted ? L.sending : quote ? L.bookFor(quote.price) : L.getQuote}
        <ArrowRight className="h-4 w-4" />
      </button>

      <p className="mt-3 text-center text-xs text-muted-foreground">{L.footer}</p>
    </form>
  );
}

function Field({
  label,
  icon,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <label className="block rounded-xl border border-border bg-secondary/50 px-4 py-2.5 transition-colors focus-within:border-navy focus-within:bg-background">
      <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
        <span className="text-navy/60">{icon}</span>
        {label}
      </span>
      <div className="mt-1">{children}</div>
    </label>
  );
}
