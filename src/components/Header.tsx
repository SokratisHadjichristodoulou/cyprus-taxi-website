import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, Globe } from "lucide-react";
import logo from "@/assets/logo.png";
import { useI18n, withLocale } from "@/lib/i18n";

export function Header() {
  const [open, setOpen] = useState(false);
  const { t, locale, otherLocale, switchPath } = useI18n();

  const navLinks = [
    { path: "/", label: t("nav.home") },
    { path: "/cyprus-airport-transfers", label: t("nav.transfers") },
    { path: "/fleet", label: t("nav.fleet") },
    { path: "/reviews", label: t("nav.reviews") },
    { path: "/blog", label: t("nav.blog") },
    { path: "/about", label: t("nav.about") },
    { path: "/faq", label: t("nav.faq") },
    { path: "/contact", label: t("nav.contact") },
  ];

  const homePath = withLocale(locale, "/");
  const contactPath = withLocale(locale, "/contact");

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="container-tight flex h-16 items-center justify-between md:h-20">
        <Link to={homePath} className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src={logo} alt="Taxi Cyprus 24" className="h-10 w-10 object-contain" width={40} height={40} />

          <div className="leading-tight">
            <div className="font-display text-[15px] font-bold tracking-tight text-navy">
              Taxi Cyprus 24
            </div>
            <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              {t("header.premiumTransfers")}
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => {
            const href = withLocale(locale, l.path);
            return (
              <Link
                key={l.path}
                to={href}
                className="text-sm font-medium text-foreground/75 transition-colors hover:text-navy"
                activeProps={{ className: "text-navy" }}
                activeOptions={{ exact: l.path === "/" }}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to={switchPath}
            className="hidden items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-navy transition-colors hover:bg-secondary md:inline-flex"
            aria-label={`Switch to ${otherLocale === "el" ? "Greek" : "English"}`}
          >
            <Globe className="h-3.5 w-3.5" />
            {otherLocale === "el" ? "ΕΛ" : "EN"}
          </Link>
          <a
            href="tel:+35796626844"
            className="hidden items-center gap-2 text-sm font-semibold text-navy md:flex"
          >
            <Phone className="h-4 w-4" />
            +357 96 626 844
          </a>
          <Link
            to={contactPath}
            className="hidden rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-[color:var(--navy-foreground)] shadow-elegant transition-all hover:scale-[1.02] md:inline-flex"
          >
            {t("cta.bookNow")}
          </Link>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-tight flex flex-col py-4">
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
            <Link
              to={switchPath}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 border-b border-border/60 py-3 text-base font-medium text-foreground"
            >
              <Globe className="h-4 w-4" />
              {otherLocale === "el" ? "Ελληνικά" : "English"}
            </Link>
            <a
              href="tel:+35796626844"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-[color:var(--navy-foreground)]"
            >
              <Phone className="h-4 w-4" /> +357 96 626 844
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
