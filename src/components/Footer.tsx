import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";
import { useI18n, withLocale } from "@/lib/i18n";
import { INSTAGRAM_URL, FACEBOOK_URL } from "@/lib/social";

export function Footer() {
  const { t, locale } = useI18n();
  const wl = (p: string) => withLocale(locale, p);

  const transferLinks: Record<"en" | "el" | "ru", { path: string; label: string }[]> = {
    en: [
      { path: "/larnaca-airport-to-paphos", label: "Larnaca to Paphos" },
      { path: "/larnaca-airport-transfers", label: "Larnaca Airport" },
      { path: "/paphos-airport-transfers", label: "Paphos Airport" },
      { path: "/larnaca-airport-to-ayia-napa", label: "Larnaca to Ayia Napa" },
      { path: "/larnaca-airport-to-protaras", label: "Larnaca to Protaras" },
      { path: "/cyprus-airport-transfers", label: "All Cyprus routes" },
    ],
    el: [
      { path: "/larnaca-airport-to-paphos", label: "Λάρνακα προς Πάφο" },
      { path: "/larnaca-airport-transfers", label: "Αεροδρόμιο Λάρνακας" },
      { path: "/paphos-airport-transfers", label: "Αεροδρόμιο Πάφου" },
      { path: "/larnaca-airport-to-ayia-napa", label: "Λάρνακα προς Αγία Νάπα" },
      { path: "/larnaca-airport-to-protaras", label: "Λάρνακα προς Πρωταρά" },
      { path: "/cyprus-airport-transfers", label: "Όλες οι διαδρομές" },
    ],
    ru: [
      { path: "/larnaca-airport-to-paphos", label: "Ларнака — Пафос" },
      { path: "/larnaca-airport-transfers", label: "Аэропорт Ларнаки" },
      { path: "/paphos-airport-transfers", label: "Аэропорт Пафоса" },
      { path: "/larnaca-airport-to-ayia-napa", label: "Ларнака — Айя-Напа" },
      { path: "/larnaca-airport-to-protaras", label: "Ларнака — Протарас" },
      { path: "/cyprus-airport-transfers", label: "Все маршруты" },
    ],
  };

  const links = transferLinks[locale];

  // Dedicated Paphos Airport destination pages.
  const paphosLinks: Record<"en" | "el" | "ru", { path: string; label: string }[]> = {
    en: [
      { path: "/taxi-to-kato-paphos", label: "Taxi to Kato Paphos" },
      { path: "/taxi-to-coral-bay", label: "Taxi to Coral Bay" },
      { path: "/taxi-to-peyia", label: "Taxi to Peyia" },
      { path: "/taxi-to-chloraka", label: "Taxi to Chloraka" },
      { path: "/taxi-to-kissonerga", label: "Taxi to Kissonerga" },
      { path: "/taxi-to-polis-latchi", label: "Taxi to Polis & Latchi" },
      { path: "/taxi-to-aphrodite-hills", label: "Taxi to Aphrodite Hills" },
      { path: "/taxi-to-pissouri", label: "Taxi to Pissouri" },
      { path: "/taxi-to-limassol", label: "Taxi to Limassol" },
      { path: "/paphos-airport-to-larnaca", label: "Paphos Airport to Larnaca" },
      { path: "/paphos-airport-to-nicosia", label: "Paphos Airport to Nicosia" },
    ],
    el: [
      { path: "/taxi-to-kato-paphos", label: "Ταξί προς Κάτω Πάφο" },
      { path: "/taxi-to-coral-bay", label: "Ταξί προς Coral Bay" },
      { path: "/taxi-to-peyia", label: "Ταξί προς Πέγεια" },
      { path: "/taxi-to-chloraka", label: "Ταξί προς Χλώρακα" },
      { path: "/taxi-to-kissonerga", label: "Ταξί προς Κισσόνεργα" },
      { path: "/taxi-to-polis-latchi", label: "Ταξί προς Πόλη & Λατσί" },
      { path: "/taxi-to-aphrodite-hills", label: "Ταξί προς Aphrodite Hills" },
      { path: "/taxi-to-pissouri", label: "Ταξί προς Πισσούρι" },
      { path: "/taxi-to-limassol", label: "Ταξί προς Λεμεσό" },
      { path: "/paphos-airport-to-larnaca", label: "Αεροδρόμιο Πάφου προς Λάρνακα" },
      { path: "/paphos-airport-to-nicosia", label: "Αεροδρόμιο Πάφου προς Λευκωσία" },
    ],
    ru: [
      { path: "/taxi-to-kato-paphos", label: "Такси в Като-Пафос" },
      { path: "/taxi-to-coral-bay", label: "Такси в Корал-Бей" },
      { path: "/taxi-to-peyia", label: "Такси в Пейю" },
      { path: "/taxi-to-chloraka", label: "Такси в Хлораку" },
      { path: "/taxi-to-kissonerga", label: "Такси в Киссонергу" },
      { path: "/taxi-to-polis-latchi", label: "Такси в Полис и Лачи" },
      { path: "/taxi-to-aphrodite-hills", label: "Такси в Афродита Хиллз" },
      { path: "/taxi-to-pissouri", label: "Такси в Писсури" },
      { path: "/taxi-to-limassol", label: "Такси в Лимассол" },
      { path: "/paphos-airport-to-larnaca", label: "Аэропорт Пафоса — Ларнака" },
      { path: "/paphos-airport-to-nicosia", label: "Аэропорт Пафоса — Никосия" },
    ],
  };

  const paphosLinksTitle: Record<"en" | "el" | "ru", string> = {
    en: "Paphos transfers",
    el: "Μεταφορές από Πάφο",
    ru: "Трансферы из Пафоса",
  };

  return (
    <footer className="mt-24 border-t border-border bg-navy text-[color:var(--navy-foreground)]">
      <div className="container-tight grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div>
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="Taxi Cyprus 24" width={36} height={36} className="h-9 w-9 object-contain" />
            <div className="font-display text-base font-bold">Taxi Cyprus 24</div>
          </div>
          <p className="mt-4 max-w-sm text-sm text-white/85">{t("footer.tagline")}</p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Taxi Cyprus 24 on Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#515BD4] text-white shadow-card-soft transition-transform hover:scale-110"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Taxi Cyprus 24 on Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-card-soft transition-transform hover:scale-110"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">{t("footer.transfers")}</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/85">
            {links.map((link, i) => (
              <li key={`${link.path}-${i}`}>
                <Link to={wl(link.path)} className="hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">{t("footer.company")}</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/85">
            <li><Link to={wl("/about")} className="hover:text-gold">{t("footer.aboutUs")}</Link></li>
            <li><Link to={wl("/fleet")} className="hover:text-gold">{t("footer.ourFleet")}</Link></li>
            <li><Link to={wl("/reviews")} className="hover:text-gold">{t("nav.reviews")}</Link></li>
            <li><Link to={wl("/blog")} className="hover:text-gold">{t("footer.travelGuide")}</Link></li>
            <li><Link to={wl("/faq")} className="hover:text-gold">{t("nav.faq")}</Link></li>
            <li><Link to={wl("/contact")} className="hover:text-gold">{t("footer.contact")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">{paphosLinksTitle[locale]}</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/85">
            {paphosLinks[locale].map((link) => (
              <li key={link.path}>
                <Link to={wl(link.path)} className="hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">{t("footer.contact")}</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/85">
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
        <div className="container-tight flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/80 md:flex-row">
          <div>© {new Date().getFullYear()} Taxi Cyprus 24. {t("footer.rights")}</div>
          <div>{t("footer.licensed")}</div>
        </div>
      </div>
    </footer>
  );
}
