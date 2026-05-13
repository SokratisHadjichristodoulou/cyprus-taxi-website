import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/el/contact")({
  head: () => ({
    meta: [
      { title: "Επικοινωνία & Κράτηση — Taxi Cyprus 24" },
      { name: "description", content: "Κλείστε τη μεταφορά αεροδρομίου Κύπρου με την Taxi Cyprus 24. Καλέστε στο +357 96 626 844, μήνυμα στο WhatsApp ή συμπληρώστε τη φόρμα κράτησης για άμεση προσφορά." },
      { property: "og:title", content: "Επικοινωνία & Κράτηση — Taxi Cyprus 24" },
      { property: "og:description", content: "Κλείστε τη μεταφορά αεροδρομίου Κύπρου 24/7." },
      { property: "og:locale", content: "el_GR" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Επικοινωνία & κράτηση"
        title="Κλείστε τη μεταφορά σας στην Κύπρο"
        subtitle="Χρησιμοποιήστε τη φόρμα για άμεση προσφορά ή στείλτε μας μήνυμα στο WhatsApp για την πιο γρήγορη απάντηση. Απαντάμε σε λίγα λεπτά, 24/7."
        image={heroImg}
      />

      <section className="container-tight py-16 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ContactCard icon={<Phone />} title="Τηλέφωνο" main="+357 96 626 844" sub="Διαθέσιμοι 24/7" href="tel:+35796626844" />
          <ContactCard icon={<MessageCircle />} title="WhatsApp" main="+357 96 626 844" sub="Ταχύτερη απάντηση" href="https://wa.me/35796626844" external />
          <ContactCard icon={<Mail />} title="Email" main="bookings@taxicyprus24.com" sub="Απάντηση εντός 1 ώρας" href="mailto:bookings@taxicyprus24.com" />
          <ContactCard icon={<MapPin />} title="Περιοχή εξυπηρέτησης" main="Όλη η Κύπρος" sub="Από αεροδρόμια LCA & PFO" />
        </div>

        <div className="mt-16 rounded-3xl bg-secondary/40 p-8 md:p-12">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-[color:var(--navy-foreground)]">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-navy">Διαθέσιμοι 24 ώρες την ημέρα, 7 ημέρες την εβδομάδα</h2>
              <p className="mt-2 text-muted-foreground">
                Λειτουργούμε όλο το 24ωρο — συμπεριλαμβανομένων όλων των αργιών. Οι νυχτερινές και πρωινές μεταφορές χρεώνονται με την ίδια σταθερή τιμή με τις ημερήσιες.
              </p>
            </div>
          </div>
        </div>
      </section>
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
