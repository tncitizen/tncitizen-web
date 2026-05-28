import { useEffect, useState } from "react";
import {
  Megaphone, ShieldCheck, Siren, Bell, Languages, Phone, Users,
  Download, Play, Building2, Clock, Eye, Sparkles,
  CheckCircle2, Activity, HeartHandshake, ArrowRight
} from "lucide-react";
import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";
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
      <div className="rounded-[2.5rem] bg-gradient-to-b from-slate-800 to-slate-900 p-2 shadow-[0_30px_80px_-20px_rgba(5,43,91,0.45)] ring-1 ring-black/10">
        <div className="rounded-[2rem] overflow-hidden bg-white">
          <img src={src} alt={alt} className="block w-full h-auto" loading="lazy" />
        </div>
      </div>
    </div>
  );
}

export default function Landing() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % carousel.length), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-slate-900 antialiased overflow-x-hidden">
      <SiteNav />

      {/* HERO */}
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#0BA37F]/25 to-transparent blur-3xl animate-gradient" />
          <div className="absolute top-10 -right-40 h-[700px] w-[700px] rounded-full bg-gradient-to-br from-[#052B5B]/25 to-[#0BA37F]/15 blur-3xl animate-gradient" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(5,43,91,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(5,43,91,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />
        </div>

        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-8 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm ring-1 ring-slate-200 text-xs font-semibold text-[#0BA37F]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0BA37F] animate-pulse" />
              Now live across Tamil Nadu
            </span>
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-[5.25rem] font-extrabold tracking-[-0.03em] leading-[1.02]">
              Smarter <span className="brand-gradient-text">Communities</span>,<br />Safer Lives.
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed">
              TNCitizen helps people report issues, receive alerts, access emergency services, and connect with local government offices — all in one app.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#download" className="group brand-gradient text-white px-7 py-3.5 rounded-full font-semibold shadow-xl shadow-emerald-600/25 hover:shadow-2xl hover:-translate-y-0.5 transition flex items-center gap-2">
                <Download className="h-4 w-4" /> Download App
                <ArrowRight className="h-4 w-4 -ml-1 opacity-0 group-hover:opacity-100 group-hover:ml-0 transition-all" />
              </a>
              <a href="#app" className="px-7 py-3.5 rounded-full font-semibold bg-white ring-1 ring-slate-200 hover:ring-slate-300 hover:-translate-y-0.5 transition flex items-center gap-2 text-slate-800">
                <Play className="h-4 w-4 text-[#0BA37F]" /> View Demo
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold ring-1 ring-emerald-100">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live
                </span>
                <span>Trusted across Tamil Nadu</span>
              </div>
            </div>

          </div>

          {/* Floating mockups */}
          <div className="relative h-[560px] lg:h-[660px]">
            <div className="absolute left-0 top-4 w-[58%] animate-float-slow z-10">
              <PhoneFrame src={screenHome} alt="TNCitizen home dashboard" />
            </div>
            <div className="absolute right-0 top-28 w-[58%] animate-float-slower">
              <PhoneFrame src={screenSos} alt="Emergency SOS screen" />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[52%] animate-float-slow z-20">
              <PhoneFrame src={screenReport} alt="Report incident screen" />
            </div>
            {/* floating chips */}
            <div className="hidden md:flex absolute top-6 right-6 z-30 items-center gap-2 bg-white/90 backdrop-blur ring-1 ring-slate-200 rounded-full px-3 py-1.5 shadow-lg">
              <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-semibold text-slate-700">SOS dispatched</span>
            </div>
            <div className="hidden md:flex absolute bottom-20 left-2 z-30 items-center gap-2 bg-white/90 backdrop-blur ring-1 ring-slate-200 rounded-full px-3 py-1.5 shadow-lg">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#0BA37F]" />
              <span className="text-xs font-semibold text-slate-700">Report resolved</span>
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
              <div key={i} className="group relative p-6 rounded-2xl bg-[#F5F7FA] hover:bg-white hover:shadow-2xl hover:shadow-slate-200/60 ring-1 ring-slate-100 transition overflow-hidden">
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#0BA37F]/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
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
            <span className="text-sm font-semibold text-[#0BA37F] uppercase tracking-wider">Features</span>
            <h2 className="mt-3 text-4xl lg:text-5xl font-bold tracking-tight">Everything your community needs, in one app.</h2>
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
              <div key={i} className="group relative p-6 rounded-2xl bg-white ring-1 ring-slate-100 hover:ring-[#0BA37F]/30 hover:shadow-2xl hover:-translate-y-1 transition overflow-hidden">
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-[#0BA37F]/0 to-[#052B5B]/0 group-hover:from-[#0BA37F]/10 group-hover:to-[#052B5B]/5 transition" />
                <div className="relative">
                  <div className="h-12 w-12 rounded-xl bg-[#0BA37F]/10 text-[#0BA37F] flex items-center justify-center group-hover:brand-gradient group-hover:text-white transition">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-bold text-lg text-[#052B5B]">{f.t}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{f.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APP PREVIEW CAROUSEL */}
      <section id="app" className="py-24 bg-gradient-to-b from-white to-[#F5F7FA]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-semibold text-[#0BA37F] uppercase tracking-wider">App Preview</span>
            <h2 className="mt-3 text-4xl lg:text-5xl font-bold tracking-tight">A polished experience, end to end.</h2>
            <p className="mt-4 text-slate-600 text-lg">From the home dashboard to live SOS — explore every screen of TNCitizen.</p>
          </div>

          <div className="mt-16 relative">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-72 brand-gradient opacity-10 blur-3xl rounded-full" />
            <div className="relative grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
              {carousel.map((s, i) => {
                const offset = (i - active + carousel.length) % carousel.length;
                if (offset > 4) return null;
                const isCenter = offset === 2;
                return (
                  <div
                    key={i}
                    className={`transition-all duration-700 ${isCenter ? "scale-110 z-10" : "scale-90 opacity-60"} ${offset === 0 || offset === 4 ? "hidden lg:block" : ""} ${offset === 1 || offset === 3 ? "hidden md:block" : ""}`}
                  >
                    <PhoneFrame src={s.img} alt={s.label} />
                    <p className={`mt-4 text-center text-sm font-semibold ${isCenter ? "text-[#052B5B]" : "text-slate-500"}`}>{s.label}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-10 flex justify-center gap-2">
              {carousel.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all ${i === active ? "w-8 brand-gradient" : "w-2 bg-slate-300 hover:bg-slate-400"}`}
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
            <span className="text-sm font-semibold text-[#0BA37F] uppercase tracking-wider">How it works</span>
            <h2 className="mt-3 text-4xl lg:text-5xl font-bold tracking-tight">From report to resolution — transparently.</h2>
          </div>

          <div className="mt-14 grid md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-px bg-gradient-to-r from-[#052B5B]/30 via-[#0BA37F]/50 to-[#052B5B]/30" />
            {[
              { n: "01", t: "Report an issue", d: "Snap a photo, drop a pin, and submit in under a minute." },
              { n: "02", t: "Office receives alert", d: "Reports route to the right local office automatically." },
              { n: "03", t: "Officers update status", d: "Officials post progress updates and timelines." },
              { n: "04", t: "Citizens track progress", d: "Get live notifications until resolution." },
            ].map((s, i) => (
              <div key={i} className="relative bg-white rounded-2xl p-6 ring-1 ring-slate-100 hover:shadow-2xl hover:-translate-y-1 transition">
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
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-white/15 text-xs font-semibold backdrop-blur">For MLA & Government Offices</span>
                <h2 className="mt-4 text-4xl lg:text-5xl font-bold leading-tight tracking-tight">Bringing local government closer to every citizen.</h2>
                <p className="mt-5 text-white/85 text-lg leading-relaxed">A unified workspace for constituency offices to receive, route, and resolve public grievances — with real-time visibility for the people who reported them.</p>
                <ul className="mt-8 space-y-3">
                  {[
                    "Constituency-level integration",
                    "Direct local office connectivity",
                    "Faster public grievance handling",
                    "Real-time updates to citizens",
                  ].map((p, i) => (
                    <li key={i} className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-300 shrink-0" /><span>{p}</span></li>
                  ))}
                </ul>
              </div>
              <div className="relative flex justify-center">
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
            <span className="text-sm font-semibold text-[#0BA37F] uppercase tracking-wider">Why TNCitizen</span>
            <h2 className="mt-3 text-4xl lg:text-5xl font-bold tracking-tight">Built for impact. Designed for trust.</h2>
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
      <section className="py-28 relative overflow-hidden bg-[#052B5B]">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_50%,#0BA37F,transparent_50%),radial-gradient(circle_at_70%_50%,#1e40af,transparent_50%)] animate-gradient" />
        <div className="relative mx-auto max-w-4xl px-5 lg:px-8 text-center text-white">
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

      <SiteFooter />
    </div>
  );
}