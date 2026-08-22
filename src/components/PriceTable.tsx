import { Users } from "lucide-react";
import type { AirportPricing } from "@/lib/pricing";
import { useI18n } from "@/lib/i18n";

interface Props {
  pricing: AirportPricing;
  title?: string;
  subtitle?: string;
}

export function PriceTable({ pricing, title, subtitle }: Props) {
  const { t } = useI18n();
  const airportLabel =
    pricing.airport === "Paphos Airport" ? t("airport.paphos") : t("airport.larnaca");

  const seater4 = t("price.seater4");
  const seater6 = t("price.seater6");
  const seater12 = t("price.seater12");

  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-card-soft md:p-8">
      <div className="flex flex-col gap-2 border-b border-border pb-5 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/60">
            {t("price.from")} {airportLabel}
          </span>
          <h3 className="mt-1 font-display text-2xl font-bold text-navy md:text-3xl">
            {title ?? `${t("price.fixedFrom")} ${airportLabel}`}
          </h3>
          {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
        </div>
        <p className="text-xs text-muted-foreground">{t("price.totalPerVehicle")}</p>
      </div>

      {/* Desktop table */}
      <div className="mt-5 hidden overflow-hidden rounded-2xl border border-border md:block">
        <table className="w-full text-sm">
          <thead className="bg-secondary/60 text-left">
            <tr className="text-[11px] font-semibold uppercase tracking-wider text-navy/70">
              <th className="px-5 py-3">{t("price.destination")}</th>
              <th className="px-5 py-3">
                <span className="inline-flex items-center gap-1.5"><Users className="h-3.5 w-3.5" /> {seater4}</span>
              </th>
              <th className="px-5 py-3">
                <span className="inline-flex items-center gap-1.5"><Users className="h-3.5 w-3.5" /> {seater6}</span>
              </th>
              <th className="px-5 py-3">
                <span className="inline-flex items-center gap-1.5"><Users className="h-3.5 w-3.5" /> {seater12}</span>
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
                <td className="px-5 py-3.5 font-display text-base font-bold text-navy">{d.prices["4 Seater"] > 0 ? `€${d.prices["4 Seater"]}` : "—"}</td>
                <td className="px-5 py-3.5 font-display text-base font-bold text-navy">{d.prices["6 Seater"] > 0 ? `€${d.prices["6 Seater"]}` : "—"}</td>
                <td className="px-5 py-3.5 font-display text-base font-bold text-navy">{d.prices["12 Seater"] > 0 ? `€${d.prices["12 Seater"]}` : "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="mt-5 space-y-3 md:hidden">
        {pricing.destinations.map((d) => {
          const seaterLabels: Record<"4 Seater" | "6 Seater" | "12 Seater", string> = {
            "4 Seater": seater4,
            "6 Seater": seater6,
            "12 Seater": seater12,
          };
          return (
            <div key={d.destination} className="rounded-xl border border-border bg-secondary/20 p-4">
              <div className="font-semibold text-navy">{d.destination}</div>
              {d.note && <div className="text-xs text-muted-foreground">{d.note}</div>}
              <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                {(["4 Seater", "6 Seater", "12 Seater"] as const).map((v) => (
                  <div key={v} className="rounded-lg bg-card p-2">
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{seaterLabels[v]}</div>
                    <div className="mt-0.5 font-display text-base font-bold text-navy">{d.prices[v] > 0 ? `€${d.prices[v]}` : "—"}</div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
