import { Users } from "lucide-react";
import type { AirportPricing } from "@/lib/pricing";

interface Props {
  pricing: AirportPricing;
  title?: string;
  subtitle?: string;
}

export function PriceTable({ pricing, title, subtitle }: Props) {
  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-card-soft md:p-8">
      <div className="flex flex-col gap-2 border-b border-border pb-5 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/60">
            From {pricing.airport}
          </span>
          <h3 className="mt-1 font-display text-2xl font-bold text-navy md:text-3xl">
            {title ?? `Fixed prices from ${pricing.airport}`}
          </h3>
          {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
        </div>
        <p className="text-xs text-muted-foreground">
          Total per vehicle · incl. tolls, child seats & meet & greet
        </p>
      </div>

      {/* Desktop table */}
      <div className="mt-5 hidden overflow-hidden rounded-2xl border border-border md:block">
        <table className="w-full text-sm">
          <thead className="bg-secondary/60 text-left">
            <tr className="text-[11px] font-semibold uppercase tracking-wider text-navy/70">
              <th className="px-5 py-3">Destination</th>
              <th className="px-5 py-3">
                <span className="inline-flex items-center gap-1.5"><Users className="h-3.5 w-3.5" /> 4 Seater</span>
              </th>
              <th className="px-5 py-3">
                <span className="inline-flex items-center gap-1.5"><Users className="h-3.5 w-3.5" /> 6 Seater</span>
              </th>
              <th className="px-5 py-3">
                <span className="inline-flex items-center gap-1.5"><Users className="h-3.5 w-3.5" /> 12 Seater</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {pricing.destinations.map((d, i) => (
              <tr key={d.destination} className={i % 2 === 0 ? "bg-card" : "bg-secondary/20"}>
                <td className="px-5 py-3.5">
                  <div className="font-semibold text-navy">{d.destination}</div>
                  {d.note && <div className="text-xs text-muted-foreground">{d.note}</div>}
                </td>
                <td className="px-5 py-3.5 font-display text-base font-bold text-navy">€{d.prices["4 Seater"]}</td>
                <td className="px-5 py-3.5 font-display text-base font-bold text-navy">€{d.prices["6 Seater"]}</td>
                <td className="px-5 py-3.5 font-display text-base font-bold text-navy">€{d.prices["12 Seater"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="mt-5 space-y-3 md:hidden">
        {pricing.destinations.map((d) => (
          <div key={d.destination} className="rounded-xl border border-border bg-secondary/20 p-4">
            <div className="font-semibold text-navy">{d.destination}</div>
            {d.note && <div className="text-xs text-muted-foreground">{d.note}</div>}
            <div className="mt-3 grid grid-cols-3 gap-2 text-center">
              {(["4 Seater", "6 Seater", "12 Seater"] as const).map((v) => (
                <div key={v} className="rounded-lg bg-card p-2">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{v}</div>
                  <div className="mt-0.5 font-display text-base font-bold text-navy">€{d.prices[v]}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
