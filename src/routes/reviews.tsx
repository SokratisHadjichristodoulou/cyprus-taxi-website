import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { StructuredData } from "@/components/StructuredData";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — 4.9★ from 1,200+ Travellers | Taxi Cyprus 24" },
      { name: "description", content: "Read verified reviews of Taxi Cyprus 24 from travellers across the UK, Europe and worldwide. 4.9-star Google rating, 5,000+ happy customers." },
      { property: "og:title", content: "Reviews — Taxi Cyprus 24" },
      { property: "og:description", content: "4.9-star verified reviews of Cyprus airport transfers." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: ReviewsPage,
});

const reviews = [
  { name: "Sarah M.", from: "London, UK", date: "March 2025", text: "Booked the Larnaca to Paphos transfer for our family of four. The driver was waiting with a name sign, helped with all our cases and the Mercedes was spotless. Free child seats were already fitted. Would 100% book again." },
  { name: "Michael K.", from: "Manchester, UK", date: "February 2025", text: "Used Taxi Cyprus 24 four times now. Always punctual, always fixed price, and the WhatsApp booking is so easy. Best taxi service in Cyprus by far." },
  { name: "Emma R.", from: "Berlin, DE", date: "February 2025", text: "Late-night arrival from Paphos to Coral Bay — driver was already waiting when we landed at 1:30am. Clean car, child seat ready. Five stars." },
  { name: "James W.", from: "Dublin, IE", date: "January 2025", text: "Booked the S-Class for a business trip to Limassol Marina. Felt like Blacklane but at a much better price. Driver was professional and the car was immaculate." },
  { name: "Anna P.", from: "Stockholm, SE", date: "January 2025", text: "Excellent service from start to finish. Quoted on WhatsApp within minutes, fixed price for our group of six in a V-Class. Driver tracked our delayed flight perfectly." },
  { name: "David L.", from: "Birmingham, UK", date: "December 2024", text: "Best airport transfer experience I've ever had. The cars are genuinely Mercedes — not the old taxis you sometimes get. Highly recommend." },
  { name: "Sophie T.", from: "Paris, FR", date: "December 2024", text: "Used them for a return transfer Paphos Airport → Peyia → Paphos Airport. On time both ways, friendly driver, very fair price. Perfect." },
  { name: "Mark H.", from: "Glasgow, UK", date: "November 2024", text: "Booked late at night from the hotel — they had a driver to me within 20 minutes for the early flight home. Saved my trip." },
  { name: "Lisa C.", from: "Amsterdam, NL", date: "November 2024", text: "Honest pricing, lovely drivers, very clean cars. The free child seats made our holiday so much easier. Will book again next year." },
];

function ReviewsPage() {
  return (
    <>
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Taxi Cyprus 24",
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "1247" },
      }} />

      <PageHero
        eyebrow="Reviews & testimonials"
        title="Trusted by 5,000+ travellers"
        subtitle="A 4.9-star Google rating from 1,200+ verified reviews. Read what real customers say about their Cyprus airport transfers with us."
        image={heroImg}
        showForm={false}
      />

      <section className="container-tight py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-2xl border border-border bg-card p-7 shadow-card-soft">
              <div className="flex items-center justify-between">
                <div className="flex">
                  {[0,1,2,3,4].map((i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}
                </div>
                <span className="text-xs text-muted-foreground">{r.date}</span>
              </div>
              <p className="mt-4 text-[15px] leading-relaxed text-foreground">"{r.text}"</p>
              <div className="mt-5 border-t border-border pt-4">
                <div className="font-semibold text-navy">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.from}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-[color:var(--navy-foreground)]">
            Book your transfer <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
