import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Globe, ChevronDown, Check } from "lucide-react";
import logo from "@/assets/logo.png";
import { useI18n, withLocale, LOCALES, localeLabels, localeFullNames, type Locale } from "@/lib/i18n";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const [open, setOpen] = useState(false);
  const { t, locale, switchPaths } = useI18n();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const navLinks = [
    { path: "/", label: t("nav.home") },
    { path: "/cyprus-airport-transfers", label: t("nav.transfers") },
    { path: "/pricing", label: t("nav.pricing") },
    { path: "/fleet", label: t("nav.fleet") },
    { path: "/reviews", label: t("nav.reviews") },
    { path: "/blog", label: t("nav.blog") },
    { path: "/about", label: t("nav.about") },
    { path: "/faq", label: t("nav.faq") },
    { path: "/contact", label: t("nav.contact") },
  ];

  const homePath = withLocale(locale, "/");
  const contactPath = withLocale(locale, "/contact");

  // Auto-close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll + Escape to close
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="container-tight flex h-16 items-center justify-between gap-4 md:h-20">
        <Link to={homePath} className="flex shrink-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src={logo} alt="Taxi Cyprus 24" className="h-9 w-9 object-contain md:h-10 md:w-10" width={40} height={40} />

          <div className="leading-tight">
            <div className="font-display text-[15px] font-bold tracking-tight text-navy">
              Taxi Cyprus 24
            </div>
            <div className="hidden text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground sm:block">
              {t("header.premiumTransfers")}
            </div>
          </div>
        </Link>

        <div className="flex shrink-0 items-center gap-2 md:gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger
              className="hidden items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-navy transition-colors hover:bg-secondary md:inline-flex"
              aria-label="Change language"
            >
              <Globe className="h-3.5 w-3.5" />
              {localeLabels[locale]}
              <ChevronDown className="h-3 w-3 opacity-70" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[160px]">
              {LOCALES.map((l: Locale) => (
                <DropdownMenuItem key={l} asChild>
                  <Link
                    to={switchPaths[l]}
                    className="flex cursor-pointer items-center justify-between gap-3 text-sm"
                  >
                    <span className="flex items-center gap-2">
                      <span className="font-semibold text-navy">{localeLabels[l]}</span>
                      <span className="text-muted-foreground">{localeFullNames[l]}</span>
                    </span>
                    {l === locale && <Check className="h-3.5 w-3.5 text-navy" />}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <a
            href="tel:+35796626844"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-border text-navy transition-colors hover:bg-secondary md:inline-flex"
            aria-label="Call +357 96 626 844"
          >
            <Phone className="h-4 w-4" />
          </a>
          <Link
            to={contactPath}
            className="hidden whitespace-nowrap rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-[color:var(--navy-foreground)] shadow-elegant transition-all hover:scale-[1.02] md:inline-flex"
          >
            {t("cta.bookNow")}
          </Link>
          <button
            type="button"
            className="relative z-[60] inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-background text-navy transition-colors hover:bg-secondary active:bg-secondary"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav-panel"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 top-16 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-200 md:top-20 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile menu panel — slides from top, sits above MobileBookingBar (z-30) */}
      <div
        id="mobile-nav-panel"
        className={`fixed inset-x-0 top-16 z-50 max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-background shadow-xl transition-transform duration-200 ease-out md:top-20 md:max-h-[calc(100dvh-5rem)] ${
          open ? "translate-y-0" : "-translate-y-[110%]"
        }`}
        aria-hidden={!open}
      >
        <nav className="container-tight flex flex-col py-4 pb-[calc(1rem+env(safe-area-inset-bottom))]">
          {navLinks.map((l) => {
            const href = withLocale(locale, l.path);
            return (
              <Link
                key={l.path}
                to={href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-base font-medium text-foreground"
              >
                {l.label}
              </Link>
            );
          })}

          <div className="mt-3 flex flex-wrap items-center gap-2 border-b border-border/60 py-3">
            <Globe className="h-4 w-4 text-muted-foreground" />
            {LOCALES.map((l: Locale) => (
              <Link
                key={l}
                to={switchPaths[l]}
                onClick={() => setOpen(false)}
                className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                  l === locale
                    ? "border-navy bg-navy text-[color:var(--navy-foreground)]"
                    : "border-border text-navy hover:bg-secondary"
                }`}
              >
                {localeLabels[l]}
              </Link>
            ))}
          </div>

          <a
            href="tel:+35796626844"
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-[color:var(--navy-foreground)]"
          >
            <Phone className="h-4 w-4" /> +357 96 626 844
          </a>
        </nav>
      </div>
    </header>
  );
}
