import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import { PageHero } from "@/components/PageHero";
import { SocialSection } from "@/components/SocialSection";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book — Taxi Cyprus 24" },
      { name: "description", content: "Book your Cyprus airport transfer with Taxi Cyprus 24. Call +357 96 626 844, message on WhatsApp, or fill out the booking form for an instant quote." },
      { property: "og:title", content: "Contact & Book — Taxi Cyprus 24" },
      { property: "og:description", content: "Book your Cyprus airport transfer 24/7." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact & book"
        title="Book your Cyprus transfer"
        subtitle="Use the form for an instant quote, or message us directly on WhatsApp for the fastest response. We reply within minutes, 24/7."
        image={heroImg}
      />

      <section className="container-tight py-16 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ContactCard icon={<Phone />} title="Phone" main="+357 96 626 844" sub="Available 24/7" href="tel:+35796626844" />
          <ContactCard icon={<MessageCircle />} title="WhatsApp" main="+357 96 626 844" sub="Fastest response" href="https://wa.me/35796626844" external />
          <ContactCard icon={<Mail />} title="Email" main="bookings@taxicyprus24.com" sub="Reply within 1 hour" href="mailto:bookings@taxicyprus24.com" />
          <ContactCard icon={<MapPin />} title="Service area" main="All Cyprus" sub="From LCA & PFO airports" />
        </div>

        <div className="mt-16 rounded-3xl bg-secondary/40 p-8 md:p-12">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-[color:var(--navy-foreground)]">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-navy">Available 24 hours a day, 7 days a week</h2>
              <p className="mt-2 text-muted-foreground">
                We operate around the clock — including all public holidays. Late-night and
                early-morning transfers are charged at the same fixed rate as daytime transfers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SocialSection />
    </>
  );
}

function ContactCard({
  icon, title, main, sub, href, external,
}: {
  icon: React.ReactNode; title: string; main: string; sub: string; href?: string; external?: boolean;
}) {
  const content = (
    <>
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-[color:var(--navy-foreground)]">
        {icon}
      </div>
      <div className="mt-5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{title}</div>
      <div className="mt-1 break-words font-display text-base font-bold text-navy">{main}</div>
      <div className="mt-1 text-sm text-muted-foreground">{sub}</div>
    </>
  );
  const className = "block rounded-2xl border border-border bg-card p-7 shadow-card-soft transition-all hover:-translate-y-0.5 hover:shadow-elegant";
  if (!href) return <div className={className}>{content}</div>;
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{content}</a>
  ) : (
    <a href={href} className={className}>{content}</a>
  );
}
