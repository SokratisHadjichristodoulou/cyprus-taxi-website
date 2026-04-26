import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import { useI18n, withLocale } from "@/lib/i18n";

export function Footer() {
  const { t, locale } = useI18n();
  const wl = (p: string) => withLocale(locale, p);

  const transferLabels: Record<"en" | "el" | "ru", Record<string, string>> = {
    en: {
      "/larnaca-airport-to-paphos": "Larnaca to Paphos",
      "/larnaca-airport-transfers": "Larnaca Airport",
      "/paphos-airport-transfers": "Paphos Airport",
      "/taxi-to-limassol": "Taxi to Limassol",
      "/taxi-to-coral-bay": "Taxi to Coral Bay",
      "/taxi-to-peyia": "Taxi to Peyia",
      "/taxi-to-chloraka": "Taxi to Chloraka",
    },
    el: {
      "/larnaca-airport-to-paphos": "Λάρνακα προς Πάφο",
      "/larnaca-airport-transfers": "Αεροδρόμιο Λάρνακας",
      "/paphos-airport-transfers": "Αεροδρόμιο Πάφου",
      "/taxi-to-limassol": "Ταξί προς Λεμεσό",
      "/taxi-to-coral-bay": "Ταξί προς Coral Bay",
      "/taxi-to-peyia": "Ταξί προς Πέγεια",
      "/taxi-to-chloraka": "Ταξί προς Χλώρακα",
    },
    ru: {
      "/larnaca-airport-to-paphos": "Ларнака — Пафос",
      "/larnaca-airport-transfers": "Аэропорт Ларнаки",
      "/paphos-airport-transfers": "Аэропорт Пафоса",
      "/taxi-to-limassol": "Такси в Лимассол",
      "/taxi-to-coral-bay": "Такси в Корал-Бей",
      "/taxi-to-peyia": "Такси в Пейю",
      "/taxi-to-chloraka": "Такси в Хлораку",
    },
  };

  const labels = transferLabels[locale];
  const transferPaths = Object.keys(transferLabels.en);

  const popularSearches: Record<"en" | "el" | "ru", { path: string; label: string; hash?: string }[]> = {
    en: [
      { path: "/contact", label: "Taxi Near Me" },
      { path: "/cyprus-airport-transfers", label: "Airport Taxi Near Me" },
      { path: "/pricing", label: "24/7 Taxi Cyprus near me" },
      { path: "/fleet", label: "Private Taxi Service near me" },
      { path: "/pricing", label: "Cheap Airport Transfers Cyprus near me" },
      { path: "/about", hash: "our-story", label: "Vladimir Taxi" },
      { path: "/about", hash: "our-story", label: "Vladimir Taxi Cyprus" },
    ],
    el: [
      { path: "/contact", label: "Ταξί κοντά μου" },
      { path: "/cyprus-airport-transfers", label: "Ταξί αεροδρομίου κοντά μου" },
      { path: "/pricing", label: "Ταξί 24/7 Κύπρος κοντά μου" },
      { path: "/fleet", label: "Ιδιωτική υπηρεσία ταξί κοντά μου" },
      { path: "/pricing", label: "Φθηνές μεταφορές αεροδρομίου Κύπρος κοντά μου" },
      { path: "/about", hash: "our-story", label: "Vladimir Taxi" },
      { path: "/about", hash: "our-story", label: "Vladimir Taxi Cyprus" },
    ],
    ru: [
      { path: "/contact", label: "Такси рядом со мной" },
      { path: "/cyprus-airport-transfers", label: "Такси из аэропорта рядом" },
      { path: "/pricing", label: "Такси 24/7 на Кипре рядом со мной" },
      { path: "/fleet", label: "Частная служба такси рядом со мной" },
      { path: "/pricing", label: "Дешёвые трансферы из аэропорта Кипра рядом со мной" },
      { path: "/about", hash: "our-story", label: "Vladimir Taxi" },
      { path: "/about", hash: "our-story", label: "Vladimir Taxi Cyprus" },
    ],
  };

  const popularSearchesTitle: Record<"en" | "el" | "ru", string> = {
    en: "Popular searches",
    el: "Δημοφιλείς αναζητήσεις",
    ru: "Популярные запросы",
  };

  return (
    <footer className="mt-24 border-t border-border bg-navy text-[color:var(--navy-foreground)]">
      <div className="container-tight grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div>
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="Taxi Cyprus 24" width={36} height={36} className="h-9 w-9 object-contain" />
            <div className="font-display text-base font-bold">Taxi Cyprus 24</div>
          </div>
          <p className="mt-4 max-w-sm text-sm text-white/70">{t("footer.tagline")}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">{t("footer.transfers")}</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            {transferPaths.map((p) => (
              <li key={p}>
                <Link to={wl(p)} className="hover:text-gold">
                  {labels[p]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">{t("footer.company")}</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            <li><Link to={wl("/about")} className="hover:text-gold">{t("footer.aboutUs")}</Link></li>
            <li><Link to={wl("/fleet")} className="hover:text-gold">{t("footer.ourFleet")}</Link></li>
            <li><Link to={wl("/reviews")} className="hover:text-gold">{t("nav.reviews")}</Link></li>
            <li><Link to={wl("/blog")} className="hover:text-gold">{t("footer.travelGuide")}</Link></li>
            <li><Link to={wl("/faq")} className="hover:text-gold">{t("nav.faq")}</Link></li>
            <li><Link to={wl("/contact")} className="hover:text-gold">{t("footer.contact")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">{popularSearchesTitle[locale]}</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            {popularSearches[locale].map((s, i) => (
              <li key={`${s.path}-${i}`}>
                <Link to={wl(s.path)} hash={s.hash} className="hover:text-gold">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">{t("footer.contact")}</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href="tel:+35796626844">+357 96 626 844</a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href="mailto:bookings@taxicyprus24.com">bookings@taxicyprus24.com</a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              {t("footer.serving")}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-tight flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/60 md:flex-row">
          <div>© {new Date().getFullYear()} Taxi Cyprus 24. {t("footer.rights")}</div>
          <div>{t("footer.licensed")}</div>
        </div>
      </div>
    </footer>
  );
}
