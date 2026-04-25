import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-navy text-[color:var(--navy-foreground)]">
      <div className="container-tight grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10">
              <span className="font-display text-base font-bold">T</span>
            </div>
            <div className="font-display text-base font-bold">Taxi Cyprus 24</div>
          </div>
          <p className="mt-4 max-w-xs text-sm text-white/70">
            Premium private airport transfers across Cyprus. Fixed prices, professional drivers,
            24/7 service.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Transfers</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            <li><Link to="/larnaca-airport-to-paphos" className="hover:text-gold">Larnaca → Paphos</Link></li>
            <li><Link to="/larnaca-airport-transfers" className="hover:text-gold">Larnaca Airport</Link></li>
            <li><Link to="/paphos-airport-transfers" className="hover:text-gold">Paphos Airport</Link></li>
            <li><Link to="/taxi-to-limassol" className="hover:text-gold">Taxi to Limassol</Link></li>
            <li><Link to="/taxi-to-coral-bay" className="hover:text-gold">Taxi to Coral Bay</Link></li>
            <li><Link to="/taxi-to-peyia" className="hover:text-gold">Taxi to Peyia</Link></li>
            <li><Link to="/taxi-to-chloraka" className="hover:text-gold">Taxi to Chloraka</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Company</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
            <li><Link to="/fleet" className="hover:text-gold">Our Fleet</Link></li>
            <li><Link to="/reviews" className="hover:text-gold">Reviews</Link></li>
            <li><Link to="/blog" className="hover:text-gold">Travel Guide</Link></li>
            <li><Link to="/faq" className="hover:text-gold">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href="tel:+35799000000">+357 99 000 000</a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href="mailto:bookings@taxicyprus24.com">bookings@taxicyprus24.com</a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              Serving Larnaca & Paphos airports, all Cyprus
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-tight flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/60 md:flex-row">
          <div>© {new Date().getFullYear()} Taxi Cyprus 24. All rights reserved.</div>
          <div>Licensed transportation provider · Cyprus</div>
        </div>
      </div>
    </footer>
  );
}
