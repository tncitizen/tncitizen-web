import { Link } from "@tanstack/react-router";
import { MapPin, Twitter, Facebook, Instagram, Youtube, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

export default function SiteFooter() {
  return (
    <footer className="bg-[#052B5B] text-white/80 pt-20 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_0%,#0BA37F,transparent_40%),radial-gradient(circle_at_80%_100%,#1e40af,transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2.5">
              <div className="bg-white rounded-xl p-1.5">
                <img src={logo} alt="TNCitizen" className="h-8 w-auto" />
              </div>
              <span className="font-bold text-white text-xl">TNCitizen</span>
            </div>
            <p className="mt-5 text-sm leading-relaxed max-w-xs">Smarter Communities, Safer Lives. A civic-tech platform connecting Tamil Nadu citizens with their government.</p>
            <a href="https://tncitizen.in" className="mt-5 inline-flex items-center gap-2 text-emerald-300 text-sm font-semibold hover:text-emerald-200">
              <MapPin className="h-4 w-4" /> tncitizen.in
            </a>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Product</h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li><a href="/#features" className="hover:text-emerald-300 transition">Features</a></li>
              <li><a href="/#app" className="hover:text-emerald-300 transition">App Preview</a></li>
              <li><a href="/#how" className="hover:text-emerald-300 transition">How it works</a></li>
              <li><a href="/#download" className="hover:text-emerald-300 transition">Download</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Company</h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link to="/contact" className="hover:text-emerald-300 transition">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-emerald-300 transition">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-emerald-300 transition">Terms of Use</Link></li>
              <li><a href="/#government" className="hover:text-emerald-300 transition">For Government</a></li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Stay updated</h4>
            <p className="mt-5 text-sm">Get civic-tech news and product updates.</p>
            <form className="mt-4 flex gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                <input type="email" placeholder="you@example.com" className="w-full bg-white/10 border border-white/15 rounded-full pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400/60" />
              </div>
              <button type="submit" className="brand-gradient text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition">Join</button>
            </form>
            <div className="mt-6 flex gap-3">
              {[Twitter, Facebook, Instagram, Youtube].map((I, i) => (
                <a key={i} href="#" className="h-10 w-10 rounded-full bg-white/10 hover:bg-emerald-500 flex items-center justify-center transition" aria-label="Social link">
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <span>© {new Date().getFullYear()} TNCitizen. All rights reserved.</span>
          <span className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> Tamil Nadu Civic-Tech Initiative</span>
        </div>
      </div>
    </footer>
  );
}