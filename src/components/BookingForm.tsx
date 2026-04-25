import { useState } from "react";
import { MapPin, Calendar, Users, Plane, ArrowRight } from "lucide-react";
import { z } from "zod";

const pickupLocations = ["Paphos Airport", "Larnaca Airport"];

const dropoffByPickup: Record<string, string[]> = {
  "Paphos Airport": [
    "Paphos Town / Kato Paphos",
    "Tomb of the Kings",
    "Chlorakas / Empa",
    "Kissonerga / Tala",
    "Kamares",
    "Tsada",
    "Coral Bay",
    "Peyia",
    "Polis – Lachi",
    "Intercontinental Hotel (Aphrodite Hills)",
    "Pissouri",
    "Limassol",
    "Nicosia",
    "Larnaka",
    "Ayia Napa / Protaras",
  ],
  "Larnaca Airport": [
    "Paphos Town",
    "Chlorakas / Empa",
    "Kissonerga / Tala",
    "Kamares",
    "Tsada",
    "Coral Bay",
    "Peyia",
    "Intercontinental Hotel (Aphrodite Hills)",
    "Pissouri",
    "Polis – Lachi",
  ],
};

const passengerOptions = [
  "1 Passenger",
  "2 Passengers",
  "3 Passengers",
  "4 Passengers",
  "5 Passengers",
  "6 Passengers",
  "7–8 Passengers",
  "9–12 Passengers",
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
  const [pickup, setPickup] = useState(defaultPickup || "Paphos Airport");
  const [dropoff, setDropoff] = useState(defaultDropoff);
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState("2 Passengers");
  const [flight, setFlight] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const dropoffOptions = dropoffByPickup[pickup] ?? [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = bookingSchema.safeParse({ pickup, dropoff, date, passengers, flight });
    if (!result.success) {
      setError("Please complete all required fields.");
      return;
    }
    setError(null);
    setSubmitted(true);
    const msg = encodeURIComponent(
      `Hi! I'd like to book a transfer:\n• From: ${pickup}\n• To: ${dropoff}\n• Date: ${date}\n• Passengers: ${passengers}${flight ? `\n• Flight: ${flight}` : ""}`,
    );
    window.open(`https://wa.me/35799000000?text=${msg}`, "_blank");
  };

  const isHero = variant === "hero";

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full rounded-2xl border border-border bg-card p-5 shadow-elegant md:p-7 ${isHero ? "" : ""}`}
    >
      <div className="mb-5 flex items-center justify-between">
        <h3 className="font-display text-lg font-bold text-navy md:text-xl">Get an Instant Quote</h3>
        <span className="hidden rounded-full bg-[color:var(--success)]/10 px-3 py-1 text-xs font-semibold text-[color:var(--success)] sm:inline">
          Fixed price
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Pickup location" icon={<MapPin className="h-4 w-4" />}>
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
        <Field label="Drop-off location" icon={<MapPin className="h-4 w-4" />}>
          <select
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
            className="w-full bg-transparent text-sm font-medium text-foreground outline-none"
          >
            <option value="">Select destination…</option>
            {dropoffOptions.map((l) => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
        </Field>
        <Field label="Date & time" icon={<Calendar className="h-4 w-4" />}>
          <input
            type="datetime-local"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full bg-transparent text-sm font-medium text-foreground outline-none"
          />
        </Field>
        <Field label="Passengers" icon={<Users className="h-4 w-4" />}>
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
          <Field label="Flight number (optional)" icon={<Plane className="h-4 w-4" />}>
            <input
              value={flight}
              onChange={(e) => setFlight(e.target.value)}
              placeholder="e.g. BA2658"
              maxLength={20}
              className="w-full bg-transparent text-sm font-medium text-foreground outline-none placeholder:text-muted-foreground/70"
            />
          </Field>
        </div>
      </div>

      {error && (
        <p className="mt-3 text-sm font-medium text-destructive">{error}</p>
      )}

      <button
        type="submit"
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-navy px-6 py-4 text-sm font-semibold text-[color:var(--navy-foreground)] shadow-elegant transition-all hover:scale-[1.01] hover:shadow-glow"
      >
        {submitted ? "Sending…" : "Get Instant Quote"}
        <ArrowRight className="h-4 w-4" />
      </button>

      <p className="mt-3 text-center text-xs text-muted-foreground">
        Free cancellation · No credit card required · Reply within minutes
      </p>
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
