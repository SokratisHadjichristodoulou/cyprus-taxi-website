import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/el/paphos-airport-transfers")({
  head: () => ({
    meta: [
      { title: "paphos airport transfers — Taxi Cyprus 24" },
      { name: "description", content: "Premium ιδιωτικές μεταφορές αεροδρομίου σε όλη την Κύπρο." },
      { property: "og:locale", content: "el_GR" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="container-tight py-20">
      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/60">Σύντομα</span>
      <h1 className="mt-3 font-display text-4xl font-bold text-navy">Η ελληνική έκδοση ετοιμάζεται</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">Αυτή η σελίδα μεταφράζεται. Στο μεταξύ, μπορείτε να δείτε την αγγλική έκδοση ή να επικοινωνήσετε μαζί μας απευθείας στο +357 96 626 844.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link to="/paphos-airport-transfers" className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-[color:var(--navy-foreground)]">View English version</Link>
        <Link to="/el/contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-navy">Επικοινωνία</Link>
      </div>
    </div>
  );
}
