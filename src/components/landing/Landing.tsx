import { useEffect, useState } from "react";
import {
  Megaphone, ShieldCheck, Siren, Bell, MapPin, Languages, Phone, Users,
  ArrowRight, Download, Play, Building2, Clock, Eye, Sparkles,
  CheckCircle2, Activity, HeartHandshake, Twitter, Facebook, Instagram, Youtube, Menu, X
} from "lucide-react";
import logo from "@/assets/logo.png";
import screenHome from "@/assets/screen-home.png";
import screenReport from "@/assets/screen-report.png";
import screenMyReports from "@/assets/screen-myreports.png";
import screenDetail from "@/assets/screen-detail.png";
import screenDetail2 from "@/assets/screen-detail2.png";
import screenUpdates from "@/assets/screen-updates.png";
import screenSos from "@/assets/screen-sos.png";
import screenAlerts from "@/assets/screen-alerts.png";

const carousel = [
  { img: screenHome, label: "Home Dashboard" },
  { img: screenReport, label: "Incident Reporting" },
  { img: screenMyReports, label: "Report Tracking" },
  { img: screenDetail, label: "Live Updates" },
  { img: screenAlerts, label: "Notifications" },
  { img: screenUpdates, label: "Community Updates" },
  { img: screenSos, label: "Emergency SOS" },
  { img: screenDetail2, label: "Incident Detail" },
];

function PhoneFrame({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative mx-auto ${className}`}>
      <div className="rounded-[2.5rem] bg-slate-900 p-2 shadow-2xl ring-1 ring-black/10">
        <div className="rounded-[2rem] overflow-hidden bg-white">
          <img src={src} alt={alt} className="block w-full h-auto" loading="lazy" />
        </div>
      </div>
    </div>
  );
}

export default function Landing() {
  const [active, setActive] = useState(0);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % carousel.length), 3200);
    return () => clearInterval(t);
  }, []);

  const nav = [
    { href: "#features", label: "Features" },
    { href: "#app", label: "App" },
    { href: "#how", label: "How it works" },
    { href: "#government", label: "Government" },
    { href: "#download", label: "Download" },
  ];

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-slate-900 antialiased overflow-x-hidden">
      {/* NAV */}
      <header className="sticky top-0 z-40 glass border-b border-white/40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img src={logo} alt="TNCitizen" className="h-9 w-auto" />
            <span className="font-bold text-lg tracking-tight hidden sm:inline brand-gradient-text">TNCitizen</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-[#052B5B] transition">{n.label}</a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="#download" className="brand-gradient text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-emerald-600/20 hover:shadow-xl hover:-translate-y-0.5 transition">
              Download App
            </a>
          </div>
          <button className="md:hidden p-2" onClick={() => setNavOpen(!navOpen)} aria-label="Menu">
            {navOpen ? <X /> : <Menu />}
          </button>
        </div>
        {navOpen && (
          <div className="md:hidden border-t border-white/40 bg-white/90 backdrop-blur px-5 py-4 space-y-3">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setNavOpen(false)} className="block text-slate-700 font-medium">{n.label}</a>
            ))}
            <a href="#download" className="block brand-gradient text-white px-5 py-2.5 rounded-full text-sm font-semibold text-center">Download App</a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#0BA37F]/30 to-transparent blur-3xl animate-gradient" />
          <div className="absolute top-20 -right-32 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#052B5B]/30 to-[#0BA37F]/20 blur-3xl animate-gradient" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(11,163,127,0.08),transparent_60%)]" />
        </div>

        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm ring-1 ring-slate-200 text-xs font-semibold text-[#0BA37F]">
              <Sparkles className="h-3.5 w-3.5" /> Tamil Nadu Civic-Tech Platform
            </span>
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
              Smarter <span className="brand-gradient-text">Communities</span>,<br />Safer Lives.
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed">
              TNCitizen helps people report issues, receive alerts, access emergency services, and connect with local government offices across Tamil Nadu — all in one app.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#download" className="group brand-gradient text-white px-7 py-3.5 rounded-full font-semibold shadow-xl shadow-emerald-600/25 hover:shadow-2xl hover:-translate-y-0.5 transition flex items-center gap-2">
                <Download className="h-4 w-4" /> Download App
              </a>
              <a href="#app" className="px-7 py-3.5 rounded-full font-semibold bg-white ring-1 ring-slate-200 hover:ring-slate-300 hover:-translate-y-0.5 transition flex items-center gap-2 text-slate-800">
                <Play className="h-4 w-4 text-[#0BA37F]" /> View Demo
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-slate-500">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="h-9 w-9 rounded-full ring-2 ring-white brand-gradient" />
                ))}
              </div>
              <div>
                <div className="font-semibold text-slate-800">Trusted across Tamil Nadu</div>
                <div className="text-xs">Citizens · MLA offices · Public departments</div>
              </div>
            </div>
          </div>

          {/* Floating mockups */}
          <div className="relative h-[560px] lg:h-[640px]">
            <div className="absolute left-4 top-6 w-[55%] animate-float-slow z-10">
              <PhoneFrame src={screenHome} alt="TNCitizen home dashboard" />
            </div>
            <div className="absolute right-0 top-24 w-[55%] animate-float-slower">
              <PhoneFrame src={screenSos} alt="Emergency SOS screen" />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[50%] animate-float-slow z-20">
              <PhoneFrame src={screenReport} alt="Report incident screen" />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / STATS */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Clock, t: "24/7", s: "Citizen Reporting" },
              { icon: Siren, t: "Instant", s: "Emergency SOS Access" },
              { icon: Building2, t: "Connected", s: "Government Network" },
              { icon: Bell, t: "Real-time", s: "Community Alerts" },
            ].map((c, i) => (
              <div key={i} className="group p-6 rounded-2xl bg-[#F5F7FA] hover:bg-white hover:shadow-xl ring-1 ring-slate-100 transition">
                <div className="h-12 w-12 rounded-xl brand-gradient text-white flex items-center justify-center shadow-lg shadow-emerald-600/20 group-hover:scale-110 transition">
                  <c.icon className="h-6 w-6" />
                </div>
                <div className="mt-4 text-2xl font-bold text-[#052B5B]">{c.t}</div>
                <div className="text-sm text-slate-600 mt-1">{c.s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-[#0BA37F]">Features</span>
            <h2 className="mt-2 text-4xl lg:text-5xl font-bold tracking-tight">Everything your community needs, in one app.</h2>
            <p className="mt-4 text-slate-600 text-lg">Built for citizens and officials — TNCitizen brings civic engagement, public safety, and governance together.</p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Megaphone, t: "Report Public Issues", d: "Roads, lighting, water — log issues in seconds with photos and location." },
              { icon: Siren, t: "Emergency SOS", d: "One-tap alert with live location shared with trusted contacts and office." },
              { icon: Building2, t: "Government Network", d: "Direct line to your MLA office and local departments." },
              { icon: Bell, t: "Safety Alerts", d: "Weather, advisories, and verified public-safety notifications." },
              { icon: Activity, t: "Live Incident Tracking", d: "Track status from reported to resolved with full timeline." },
              { icon: Languages, t: "Multilingual", d: "Use the app fully in Tamil or English." },
              { icon: Phone, t: "Emergency Contacts", d: "Save personal SOS contacts plus verified office numbers." },
              { icon: Users, t: "Community Updates", d: "Local programs, events, and safety initiatives near you." },
            ].map((f, i) => (
              <div key={i} className="group p-6 rounded-2xl bg-white ring-1 ring-slate-100 hover:ring-[#0BA37F]/30 hover:shadow-2xl hover:-translate-y-1 transition">
                <div className="h-12 w-12 rounded-xl bg-[#0BA37F]/10 text-[#0BA37F] flex items-center justify-center group-hover:brand-gradient group-hover:text-white transition">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-bold text-lg text-[#052B5B]">{f.t}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APP PREVIEW CAROUSEL */}
      <section id="app" className="py-24 bg-gradient-to-b from-white to-[#F5F7FA]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-semibold text-[#0BA37F]">App Preview</span>
            <h2 className="mt-2 text-4xl lg:text-5xl font-bold tracking-tight">A polished experience, end to end.</h2>
            <p className="mt-4 text-slate-600 text-lg">From the home dashboard to live SOS — explore every screen of TNCitizen.</p>
          </div>

          <div className="mt-16 relative">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-64 brand-gradient opacity-10 blur-3xl rounded-full" />
            <div className="relative grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
              {carousel.map((s, i) => {
                const offset = (i - active + carousel.length) % carousel.length;
                const visible = offset < 5;
                if (!visible) return null;
                const isCenter = offset === 2;
                return (
                  <div
                    key={i}
                    className={`transition-all duration-700 ${isCenter ? "scale-110 z-10" : "scale-90 opacity-70"} ${offset === 0 || offset === 4 ? "hidden lg:block" : ""} ${offset === 1 || offset === 3 ? "hidden md:block" : ""}`}
                  >
                    <PhoneFrame src={s.img} alt={s.label} />
                    <p className={`mt-4 text-center text-sm font-medium ${isCenter ? "text-[#052B5B]" : "text-slate-500"}`}>{s.label}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-10 flex justify-center gap-2">
              {carousel.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all ${i === active ? "w-8 brand-gradient" : "w-2 bg-slate-300"}`}
                  aria-label={`Slide ${i+1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-[#0BA37F]">How it works</span>
            <h2 className="mt-2 text-4xl lg:text-5xl font-bold tracking-tight">From report to resolution — transparently.</h2>
          </div>

          <div className="mt-14 grid md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-px bg-gradient-to-r from-[#052B5B] via-[#0BA37F] to-[#052B5B] opacity-30" />
            {[
              { n: "01", t: "Report an issue", d: "Snap a photo, drop a pin, and submit in under a minute." },
              { n: "02", t: "Office receives alert", d: "Reports route to the right local office automatically." },
              { n: "03", t: "Officers update status", d: "Officials post progress updates and timelines." },
              { n: "04", t: "Citizens track progress", d: "Get live notifications until resolution." },
            ].map((s, i) => (
              <div key={i} className="relative bg-white rounded-2xl p-6 ring-1 ring-slate-100 hover:shadow-xl transition">
                <div className="h-16 w-16 rounded-2xl brand-gradient text-white font-bold text-xl flex items-center justify-center shadow-lg shadow-emerald-600/25">{s.n}</div>
                <h3 className="mt-5 text-lg font-bold text-[#052B5B]">{s.t}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOVERNMENT / MLA */}
      <section id="government" className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden brand-gradient text-white p-10 lg:p-16">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.4),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(11,163,127,0.6),transparent_40%)]" />
            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-white/15 text-xs font-semibold backdrop-blur">For MLA & Government Offices</span>
                <h2 className="mt-4 text-4xl lg:text-5xl font-bold leading-tight">Bringing local government closer to every citizen.</h2>
                <p className="mt-5 text-white/85 text-lg leading-relaxed">A unified workspace for constituency offices to receive, route, and resolve public grievances — with real-time visibility for the people who reported them.</p>
                <ul className="mt-8 space-y-3">
                  {[
                    "Constituency-level integration",
                    "Direct local office connectivity",
                    "Faster public grievance handling",
                    "Real-time updates to citizens",
                  ].map((p, i) => (
                    <li key={i} className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-300" /><span>{p}</span></li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <PhoneFrame src={screenHome} alt="MLA office dashboard view" className="max-w-xs" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-[#0BA37F]">Why TNCitizen</span>
            <h2 className="mt-2 text-4xl lg:text-5xl font-bold tracking-tight">Built for impact. Designed for trust.</h2>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              { icon: Clock, t: "Faster Response" },
              { icon: Eye, t: "Transparent Reporting" },
              { icon: ShieldCheck, t: "Safer Communities" },
              { icon: HeartHandshake, t: "Citizen Empowerment" },
              { icon: Sparkles, t: "Smart Governance" },
            ].map((w, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#F5F7FA] hover:bg-white hover:shadow-xl ring-1 ring-slate-100 transition text-center">
                <div className="h-14 w-14 mx-auto rounded-2xl brand-gradient text-white flex items-center justify-center shadow-lg shadow-emerald-600/20">
                  <w.icon className="h-7 w-7" />
                </div>
                <div className="mt-4 font-semibold text-[#052B5B]">{w.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[#052B5B]" />
        <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_30%_50%,#0BA37F,transparent_50%),radial-gradient(circle_at_70%_50%,#1e40af,transparent_50%)] animate-gradient" />
        <div className="mx-auto max-w-4xl px-5 lg:px-8 text-center text-white">
          <Sparkles className="h-8 w-8 mx-auto text-emerald-300" />
          <p className="mt-6 text-3xl lg:text-5xl font-bold leading-tight tracking-tight">
            “Building the future of <span className="text-emerald-300">smart public safety</span> and connected governance in Tamil Nadu.”
          </p>
          <p className="mt-6 text-white/70">— The TNCitizen vision</p>
        </div>
      </section>

      {/* DOWNLOAD */}
      <section id="download" className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden p-10 lg:p-16 brand-gradient animate-gradient text-white text-center">
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.3),transparent_40%)]" />
            <div className="relative">
              <h2 className="text-4xl lg:text-6xl font-bold tracking-tight">Join TNCitizen Today</h2>
              <p className="mt-5 text-lg text-white/90 max-w-2xl mx-auto">Download the app and become part of a safer, smarter Tamil Nadu.</p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a href="#" className="flex items-center gap-3 bg-black text-white px-6 py-3.5 rounded-2xl hover:scale-105 transition shadow-xl">
                  <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white"><path d="M17.05 12.04c-.02-2.27 1.85-3.36 1.93-3.42-1.05-1.54-2.69-1.75-3.27-1.78-1.39-.14-2.71.82-3.42.82-.71 0-1.79-.8-2.95-.78-1.52.02-2.92.88-3.7 2.24-1.58 2.73-.4 6.78 1.13 9 .75 1.09 1.64 2.3 2.81 2.26 1.13-.04 1.55-.73 2.91-.73s1.75.73 2.94.71c1.21-.02 1.98-1.1 2.72-2.19.86-1.26 1.21-2.49 1.23-2.56-.03-.01-2.36-.91-2.38-3.57zM14.94 5.34c.62-.76 1.04-1.81.92-2.86-.9.04-1.98.6-2.62 1.36-.58.67-1.09 1.74-.95 2.77 1 .08 2.03-.51 2.65-1.27z"/></svg>
                  <div className="text-left"><div className="text-[10px] uppercase tracking-wide opacity-80">Download on the</div><div className="text-base font-semibold -mt-0.5">App Store</div></div>
                </a>
                <a href="#" className="flex items-center gap-3 bg-black text-white px-6 py-3.5 rounded-2xl hover:scale-105 transition shadow-xl">
                  <svg viewBox="0 0 24 24" className="h-7 w-7"><path fill="#34A853" d="M3 20.5V3.5c0-.7.4-1.3 1-1.6l11 9.6L4 21.7c-.6-.3-1-.9-1-1.2z"/><path fill="#FBBC04" d="M16.8 13.5l-2.8 2.4 3.6 3.2c.6-.3 1-1 1-1.6 0-.7-.4-1.3-1-1.6l-.8-.4z"/><path fill="#EA4335" d="M4 21.7L15 12l2.8 2.4-12.2 7c-.5.3-1.1.3-1.6.3z"/><path fill="#4285F4" d="M4 1.9l11 9.6L17.8 9 5.6 2c-.5-.3-1.1-.3-1.6-.1z"/></svg>
                  <div className="text-left"><div className="text-[10px] uppercase tracking-wide opacity-80">Get it on</div><div className="text-base font-semibold -mt-0.5">Google Play</div></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#052B5B] text-white/80 pt-16 pb-8">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-2">
                <img src={logo} alt="TNCitizen" className="h-10 w-auto bg-white rounded-lg p-1" />
                <span className="font-bold text-white text-lg">TNCitizen</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed">Smarter Communities, Safer Lives. A civic-tech platform for Tamil Nadu.</p>
              <a href="https://tncitizen.in" className="mt-4 inline-block text-emerald-300 text-sm font-semibold">tncitizen.in</a>
            </div>
            <div>
              <h4 className="text-white font-semibold">Product</h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#features" className="hover:text-emerald-300">Features</a></li>
                <li><a href="#app" className="hover:text-emerald-300">App Preview</a></li>
                <li><a href="#how" className="hover:text-emerald-300">How it works</a></li>
                <li><a href="#download" className="hover:text-emerald-300">Download</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold">Company</h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#" className="hover:text-emerald-300">Contact</a></li>
                <li><a href="#" className="hover:text-emerald-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-emerald-300">Terms</a></li>
                <li><a href="#government" className="hover:text-emerald-300">For Government</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold">Follow</h4>
              <div className="mt-4 flex gap-3">
                {[Twitter, Facebook, Instagram, Youtube].map((I, i) => (
                  <a key={i} href="#" className="h-10 w-10 rounded-full bg-white/10 hover:bg-emerald-500 flex items-center justify-center transition" aria-label="Social link">
                    <I className="h-4 w-4" />
                  </a>
                ))}
              </div>
              <p className="mt-6 text-xs">Made with care for Tamil Nadu 🇮🇳</p>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
            <span>© {new Date().getFullYear()} TNCitizen. All rights reserved.</span>
            <span className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> Tamil Nadu Civic-Tech Initiative</span>
          </div>
        </div>
      </footer>

      {/* Floating SOS Badge */}
      <a href="#download" className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-red-600 text-white px-5 py-3.5 rounded-full font-bold shadow-2xl shadow-red-600/40 hover:scale-105 transition animate-pulse-ring">
        <Siren className="h-5 w-5" />
        SOS
      </a>
    </div>
  );
}