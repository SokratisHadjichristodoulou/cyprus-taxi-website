import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle } from "lucide-react";
import { useI18n, withLocale, type Locale } from "@/lib/i18n";

const LABELS: Record<Locale, { call: string; book: string }> = {
  en: { call: "Call", book: "Book Transfer" },
  el: { call: "Κλήση", book: "Κράτηση" },
  ru: { call: "Позвонить", book: "Заказать" },
  de: { call: "Anrufen", book: "Transfer buchen" },
};

export function MobileBookingBar() {
  const { locale } = useI18n();
  const labels = LABELS[locale];
  const contactPath = withLocale(locale, "/contact");

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 border-t border-border bg-background/95 backdrop-blur-md md:hidden">
      <div className="flex items-center gap-2 p-3">
        <a
          href="tel:+35796626844"
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-background px-4 py-3 text-sm font-semibold text-navy"
        >
          <Phone className="h-4 w-4" /> {labels.call}
        </a>
        <a
          href="https://wa.me/35796626844"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-background px-4 py-3 text-sm font-semibold text-[#128C7E]"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
        <Link
          to={contactPath}
          className="flex flex-[1.4] items-center justify-center rounded-full bg-navy px-4 py-3 text-sm font-semibold text-[color:var(--navy-foreground)]"
        >
          {labels.book}
        </Link>
      </div>
    </div>
  );
}
