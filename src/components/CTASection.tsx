import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="container-tight my-24">
      <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-14 text-center text-[color:var(--navy-foreground)] md:px-12 md:py-20">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
        <div className="relative">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
            Ready when you are
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-5xl">
            Book your Cyprus airport transfer
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/75 md:text-lg">
            Taxicyprus24 combines fixed-price Cyprus airport transfers, free cancellation, professional English-speaking drivers, and reliable meet & greet service on every booking. Whether you need a taxi from Larnaca Airport, Paphos Airport, Limassol, or anywhere in Cyprus, we guarantee comfortable private transfers with no hidden fees, no surge pricing, and 24/7 customer support — every time.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-navy transition-transform hover:scale-[1.02]"
            >
              Book Your Transfer <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+35796626844"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/15"
            >
              <Phone className="h-4 w-4" /> +357 96 626 844
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
