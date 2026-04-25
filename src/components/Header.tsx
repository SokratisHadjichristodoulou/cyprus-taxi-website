import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/cyprus-airport-transfers", label: "Transfers" },
  { to: "/fleet", label: "Fleet" },
  { to: "/reviews", label: "Reviews" },
  { to: "/blog", label: "Travel Guide" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="container-tight flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-navy">
            <span className="font-display text-base font-bold text-[color:var(--navy-foreground)]">
              T
            </span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-[15px] font-bold tracking-tight text-navy">
              Taxi Cyprus 24
            </div>
            <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Premium Transfers
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-foreground/75 transition-colors hover:text-navy"
              activeProps={{ className: "text-navy" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+35799000000"
            className="hidden items-center gap-2 text-sm font-semibold text-navy md:flex"
          >
            <Phone className="h-4 w-4" />
            +357 99 000 000
          </a>
          <Link
            to="/contact"
            className="hidden rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-[color:var(--navy-foreground)] shadow-elegant transition-all hover:scale-[1.02] md:inline-flex"
          >
            Book Now
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
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-base font-medium text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:+35799000000"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-[color:var(--navy-foreground)]"
            >
              <Phone className="h-4 w-4" /> Call +357 99 000 000
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
