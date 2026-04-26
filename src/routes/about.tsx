import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Award, Heart, Clock, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import meetGreetImg from "@/assets/meet-greet.jpg";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { TrustBar } from "@/components/TrustBar";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Taxicyprus24 — Trusted Cyprus Airport Transfers Since 2010" },
      { name: "description", content: "Discover Taxicyprus24 — a family-run private airport transfer company in Cyprus since 2010. Fixed-price taxi from Larnaca & Paphos Airports, 5,000+ happy customers, 4.9★ rating, 24/7 service." },
      { name: "keywords", content: "about Taxicyprus24, Cyprus airport transfer company, private taxi Cyprus, Larnaca airport taxi, Paphos airport taxi, family-run taxi service Cyprus, fixed price taxi Cyprus" },
      { property: "og:title", content: "About Taxicyprus24 — Trusted Cyprus Airport Transfers Since 2010" },
      { property: "og:description", content: "Family-run private Cyprus airport transfer company. Fixed prices, professional English-speaking drivers, free child seats and 24/7 service from Larnaca and Paphos Airports." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About Taxicyprus24 — Cyprus Airport Transfers Since 2010" },
      { name: "twitter:description", content: "Family-run private Cyprus taxi service. Fixed prices, 4.9★ rated, 24/7 airport transfers." },
      { name: "twitter:image", content: heroImg },
      { link: [{ rel: "canonical", href: "https://taxicyprus24.com/about" }] } as never,
    ],
    links: [{ rel: "canonical", href: "https://taxicyprus24.com/about" }],
  }),

  component: AboutPage,
});

const values = [
  { icon: ShieldCheck, title: "Trust", desc: "Licensed, insured and DBS-checked drivers — fully transparent pricing." },
  { icon: Award, title: "Quality", desc: "Mercedes-Benz fleet, English-speaking drivers and meticulous attention to detail." },
  { icon: Heart, title: "Care", desc: "We treat every guest like family — from your first call to drop-off." },
  { icon: Clock, title: "Reliability", desc: "Punctual every time, with real-time flight tracking and 24/7 support." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Cyprus airport transfers, done properly"
        subtitle="Taxi Cyprus 24 is a family-run premium transfer company that has been moving travellers across Cyprus since 2010. Today we've grown to a fleet of Clean and Luxury cars and a team of professional drivers — but our values haven't changed."
        image={heroImg}
        showForm={false}
      />

      <TrustBar />

      <section className="container-tight py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-3xl shadow-elegant">
            <img src={meetGreetImg} alt="Taxi Cyprus 24 driver" loading="lazy" width={1280} height={896} className="h-full w-full object-cover" />
          </div>
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/60">Our story</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">A taxi service built on trust</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>Taxi Cyprus 24 began with a single Mercedes E-Class and a simple promise: every traveller would be met on time, in a clean car, by a driver who genuinely cared.</p>
              <p>More than a decade and 5,000+ transfers later, that promise still defines how we operate. Our fixed-price model, free child seats, complimentary meet & greet and 24/7 availability are not features — they are the standard.</p>
              <p>Today we serve guests from across the UK, Europe and beyond, including business travellers, families and tour groups. Our 4.9-star TripAdvisor rating and 120+ verified reviews tell the rest of the story.</p>
            </div>
            <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-[color:var(--navy-foreground)]">
              Book a transfer <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-tight">
          <h2 className="text-center font-display text-3xl font-bold text-navy md:text-4xl">What we stand for</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-7 shadow-card-soft">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-[color:var(--navy-foreground)]">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-navy">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
