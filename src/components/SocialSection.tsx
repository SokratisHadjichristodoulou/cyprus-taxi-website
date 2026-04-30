import { Instagram, Facebook, ArrowRight, Star } from "lucide-react";
import {
  INSTAGRAM_URL,
  INSTAGRAM_DISPLAY,
  FACEBOOK_URL,
  FACEBOOK_DISPLAY,
} from "@/lib/social";

const INSTAGRAM_ARIA = "Follow Taxi Cyprus 24 on Instagram";
const FACEBOOK_ARIA = "Follow Taxi Cyprus 24 on Facebook";

export function SocialSection() {
  return (
    <section className="container-tight py-20 md:py-28" aria-labelledby="social-heading">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/60">
          Stay connected
        </span>
        <h2 id="social-heading" className="mt-3 font-display text-3xl font-bold text-navy md:text-5xl">
          Follow Taxi Cyprus 24 online
        </h2>
        <p className="mt-4 text-pretty text-base text-muted-foreground md:text-lg">
          Behind-the-scenes Cyprus journeys, customer stories and travel tips from{" "}
          <strong className="font-semibold text-navy">Vladimir Taxi</strong>.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {/* INSTAGRAM CARD */}
        <article className="group relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-[#FEDA77]/15 via-[#F58529]/15 to-[#DD2A7B]/15 p-8 shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elegant md:p-10">
          <div className="flex items-start justify-between">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-navy backdrop-blur">
              <Instagram className="h-3.5 w-3.5" /> Instagram
            </span>
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#515BD4] text-white shadow-card-soft transition-transform group-hover:scale-110">
              <Instagram className="h-6 w-6" />
            </div>
          </div>

          <h3 className="mt-6 font-display text-2xl font-bold text-navy md:text-3xl">
            Follow us on Instagram
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            See daily transfers, Cyprus views and reels from{" "}
            <span className="font-semibold text-navy">{INSTAGRAM_DISPLAY}</span>.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={INSTAGRAM_ARIA}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] px-5 py-3 text-sm font-semibold text-white shadow-elegant transition-transform hover:scale-[1.03]"
            >
              <Instagram className="h-4 w-4" />
              Follow on Instagram
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </article>

        {/* FACEBOOK CARD */}
        <article className="group relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-[#1877F2]/10 via-[#1877F2]/5 to-[#42a5f5]/10 p-8 shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elegant md:p-10">
          <div className="flex items-start justify-between">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-navy backdrop-blur">
              <Facebook className="h-3.5 w-3.5" /> Facebook
            </span>
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1877F2] text-white shadow-card-soft transition-transform group-hover:scale-110">
              <Facebook className="h-6 w-6" />
            </div>
          </div>

          <h3 className="mt-6 font-display text-2xl font-bold text-navy md:text-3xl">
            Follow us on Facebook
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            Read reviews, latest news and message us directly on the official{" "}
            <span className="font-semibold text-navy">{FACEBOOK_DISPLAY}</span> page.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <div className="flex">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                ))}
              </div>
              <span className="font-medium text-navy">Rated by travellers</span>
            </span>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={FACEBOOK_ARIA}
              className="inline-flex items-center gap-2 rounded-full bg-[#1877F2] px-5 py-3 text-sm font-semibold text-white shadow-elegant transition-transform hover:scale-[1.03] hover:bg-[#166fe0]"
            >
              <Facebook className="h-4 w-4" />
              Follow on Facebook
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default SocialSection;
