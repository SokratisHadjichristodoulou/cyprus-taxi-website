import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  q: string;
  a: string;
}

interface Props {
  items: FAQItem[];
  className?: string;
}

export function FAQAccordion({ items, className = "" }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={`divide-y divide-border rounded-2xl border border-border bg-card ${className}`}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-7 md:py-6"
              aria-expanded={isOpen}
            >
              <span className="font-display text-base font-semibold text-navy md:text-lg">
                {item.q}
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-navy transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`px-5 text-[15px] leading-relaxed text-muted-foreground md:px-7 ${isOpen ? "pb-5 md:pb-7" : "h-0 overflow-hidden pb-0"}`}
              aria-hidden={!isOpen}
            >
              {item.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
