import { Instagram, ArrowRight, Heart, Camera } from "lucide-react";
import { INSTAGRAM_URL, INSTAGRAM_DISPLAY } from "@/lib/social";

const INSTAGRAM_ARIA = "Follow Taxi Cyprus 24 on Instagram";

const tiles = [
  { icon: Camera, label: "Behind the wheel", desc: "Daily transfers across Cyprus" },
  { icon: Heart, label: "Happy travellers", desc: "Real customers, real journeys" },
  { icon: Instagram, label: "Cyprus views", desc: "From Coral Bay to Larnaca" },
];

export function InstagramSection() {
  return (
    <section className="container-tight py-20 md:py-28" aria-labelledby="instagram-heading">
      <div className="overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-[#FEDA77]/10 via-[#F58529]/10 to-[#DD2A7B]/10 p-8 shadow-card-soft md:p-14">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-navy backdrop-blur">
              <Instagram className="h-3.5 w-3.5" /> Instagram
            </span>
            <h2 id="instagram-heading" className="mt-4 font-display text-3xl font-bold text-navy md:text-5xl">
              Follow us on Instagram
            </h2>
            <p className="mt-4 max-w-xl text-pretty text-base text-muted-foreground md:text-lg">
              Get behind-the-scenes glimpses of Cyprus, daily transfers with{" "}
              <strong className="font-semibold text-navy">Vladimir Taxi</strong>, and the
              best travel tips from across the island. Join our community on{" "}
              <span className="font-semibold text-navy">{INSTAGRAM_DISPLAY}</span>.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow Taxicyprus24 on Instagram (${INSTAGRAM_DISPLAY})`}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] px-6 py-3.5 text-sm font-semibold text-white shadow-elegant transition-transform hover:scale-[1.03]"
              >
                <Instagram className="h-4 w-4" />
                Follow {INSTAGRAM_DISPLAY}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Instagram profile in a new tab"
                className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-white px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-[color:var(--navy-foreground)]"
              >
                View profile
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {tiles.map((t, i) => (
              <a
                key={t.label}
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t.label} — open ${INSTAGRAM_DISPLAY} on Instagram`}
                className="group relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#515BD4] p-[2px] shadow-card-soft transition-transform hover:-translate-y-1 hover:shadow-elegant"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex h-full w-full flex-col items-center justify-center rounded-2xl bg-white/95 p-3 text-center backdrop-blur transition-colors group-hover:bg-white">
                  <t.icon className="h-6 w-6 text-navy" />
                  <div className="mt-2 text-[11px] font-semibold leading-tight text-navy sm:text-xs">
                    {t.label}
                  </div>
                  <div className="mt-1 hidden text-[10px] leading-tight text-muted-foreground sm:block">
                    {t.desc}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default InstagramSection;
