import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const nav = [
  { href: "/#features", label: "Features" },
  { href: "/#app", label: "App" },
  { href: "/#how", label: "How it works" },
  { href: "/#government", label: "Government" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 glass border-b border-white/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo} alt="TNCitizen" className="h-9 w-auto" />
          <span className="font-bold text-lg tracking-tight hidden sm:inline brand-gradient-text">TNCitizen</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-[#052B5B] transition">{n.label}</a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="/#download" className="brand-gradient text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-emerald-600/20 hover:shadow-xl hover:-translate-y-0.5 transition">
            Download App
          </a>
        </div>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/40 bg-white/95 backdrop-blur px-5 py-4 space-y-3">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block text-slate-700 font-medium">{n.label}</a>
          ))}
          <a href="/#download" className="block brand-gradient text-white px-5 py-2.5 rounded-full text-sm font-semibold text-center">Download App</a>
        </div>
      )}
    </header>
  );
}