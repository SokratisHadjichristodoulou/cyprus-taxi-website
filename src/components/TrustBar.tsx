import { Star } from "lucide-react";

export function TrustBar() {
  return (
    <div className="border-y border-border bg-secondary/40">
      <div className="container-tight grid grid-cols-2 gap-y-6 py-7 text-center md:grid-cols-4">
        <Stat label="Happy customers" value="5,000+" />
        <Stat
          label="TripAdvisor rating"
          value={
            <a
              href="https://www.tripadvisor.com/Attraction_Review-g190384-d8567084-Reviews-Taxi_Cyprus_Paphos-Paphos_Paphos_District.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 transition-opacity hover:opacity-80"
            >
              4.9
              <Star className="h-4 w-4 fill-gold text-gold" />
            </a>
          }
        />
        <Stat label="Available" value="24 / 7" />
        <Stat label="Pricing" value="Fixed" />
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <div className="font-display text-2xl font-bold text-navy md:text-3xl">{value}</div>
      <div className="mt-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
    </div>
  );
}
