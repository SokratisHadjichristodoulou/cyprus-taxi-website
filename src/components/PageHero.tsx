import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BookingForm } from "./BookingForm";

interface Props {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  showForm?: boolean;
  defaultPickup?: string;
  defaultDropoff?: string;
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  showForm = true,
  defaultPickup,
  defaultDropoff,
}: Props) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="relative container-tight grid gap-10 py-20 md:py-28 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:py-32">
        <div className="text-white animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {eyebrow}
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
            {subtitle}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-navy shadow-elegant transition-transform hover:scale-[1.02]"
            >
              Book Your Transfer <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://wa.me/35796626844"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              WhatsApp Quote
            </a>
          </div>
        </div>

        {showForm && (
          <div className="animate-fade-up delay-200">
            <BookingForm defaultPickup={defaultPickup} defaultDropoff={defaultDropoff} />
          </div>
        )}
      </div>
    </section>
  );
}
