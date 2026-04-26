import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import paphosImg from "@/assets/dest-paphos.jpg";
import coralBayImg from "@/assets/dest-coral-bay.jpg";
import larnacaImg from "@/assets/dest-larnaca.jpg";
import limassolImg from "@/assets/dest-limassol.jpg";
import peyiaImg from "@/assets/dest-peyia.jpg";
import chlorakaImg from "@/assets/dest-chloraka.jpg";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Cyprus Travel Guide & Blog | Taxi Cyprus 24" },
      { name: "description", content: "Cyprus travel guide — best beaches in Paphos, things to do in Coral Bay, how to travel from Larnaca Airport to Paphos, Cyprus tips and inspiration." },
      { property: "og:title", content: "Cyprus Travel Guide | Taxi Cyprus 24" },
      { property: "og:description", content: "Travel guides and tips for visiting Cyprus." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: BlogPage,
});

const posts = [
  { img: coralBayImg, title: "Best beaches in Paphos & Coral Bay", excerpt: "Paphos and Coral Bay are home to some of the most beautiful beaches in Cyprus, attracting visitors with crystal-clear waters, golden sand, and stunning coastal views. Whether you are looking for a family-friendly beach, hidden swimming spots, or the perfect sunset location, the west coast of Cyprus has something for everyone.", date: "April 2025", read: "6 min", to: "/blog/best-beaches-paphos-coral-bay" as const },
  { img: heroImg, title: "How to travel from Larnaca Airport to Paphos", excerpt: "Travelling from Larnaca International Airport to Paphos is one of the most common journeys for visitors arriving in Cyprus. The distance between Larnaca Airport and Paphos is approximately 135 km, with an average travel time of around 1 hour and 30 minutes depending on traffic and the transport option you choose.", date: "April 2025", read: "5 min", to: "/blog/larnaca-airport-to-paphos-travel-guide" as const },
  { img: peyiaImg, title: "Top hotels & villas in Coral Bay and Peyia", excerpt: "Where to stay on Cyprus's western coast, from family resorts to private hillside villas with sea views.", date: "March 2025", read: "8 min" },
  { img: paphosImg, title: "Things to do in Paphos — local guide", excerpt: "Tombs of the Kings, Paphos Mosaics, the Old Harbour and our favourite tavernas off the tourist trail.", date: "March 2025", read: "7 min" },
  { img: larnacaImg, title: "Cyprus travel tips for first-time visitors", excerpt: "Everything UK and European travellers should know — currency, driving, weather, dress code and more.", date: "February 2025", read: "6 min" },
  { img: limassolImg, title: "The complete Cyprus airport transfer guide", excerpt: "Comparing taxis, transfers and rental cars from Larnaca and Paphos airports — with prices and timings.", date: "February 2025", read: "9 min" },
  { img: chlorakaImg, title: "Hidden gems near Chloraka and Kissonerga", excerpt: "Skip the crowds — our favourite quiet beaches, viewpoints and family tavernas in this beautiful corner of Paphos.", date: "January 2025", read: "5 min" },
];

function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Travel guide"
        title="Cyprus Travel Guide & Inspiration"
        subtitle="Local insider guides to Paphos, Coral Bay, Limassol, Larnaca and the rest of Cyprus — written by people who know the island."
        image={heroImg}
        showForm={false}
      />

      <section className="container-tight py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => {
            const card = (
              <article className="group h-full overflow-hidden rounded-2xl border border-border bg-card shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elegant">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> {p.date}</span>
                    <span>· {p.read} read</span>
                  </div>
                  <h2 className="mt-3 font-display text-lg font-bold text-navy">{p.title}</h2>
                  <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{p.excerpt}</p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
                    Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            );
            return "to" in p && p.to ? (
              <Link key={p.title} to={p.to} className="block">
                {card}
              </Link>
            ) : (
              <div key={p.title}>{card}</div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-[color:var(--navy-foreground)]">
            Book a transfer <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
