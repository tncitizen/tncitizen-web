import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Building2, Siren, MessageSquare } from "lucide-react";
import PageShell from "@/components/landing/PageShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — TNCitizen" },
      { name: "description", content: "Reach the TNCitizen team — for citizen support, government partnerships, press, or feedback." },
      { property: "og:title", content: "Contact — TNCitizen" },
      { property: "og:description", content: "Get in touch with the TNCitizen civic-tech team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const cards = [
    { icon: MessageSquare, t: "Citizen Support", d: "Questions about the app, your account, or your reports.", link: "support@tncitizen.in" },
    { icon: Building2, t: "Government & MLA Offices", d: "Onboard your constituency or department.", link: "gov@tncitizen.in" },
    { icon: Siren, t: "Press & Media", d: "Interviews, partnerships, and announcements.", link: "press@tncitizen.in" },
  ];
  return (
    <PageShell eyebrow="Contact" title="Get in touch." intro="We're a small civic-tech team building for Tamil Nadu. We read everything.">
      <div className="grid sm:grid-cols-3 gap-4 mb-10">
        {cards.map((c, i) => (
          <a key={i} href={`mailto:${c.link}`} className="group p-6 rounded-2xl bg-white ring-1 ring-slate-100 hover:ring-[#0BA37F]/30 hover:shadow-xl transition">
            <div className="h-11 w-11 rounded-xl bg-[#0BA37F]/10 text-[#0BA37F] flex items-center justify-center group-hover:brand-gradient group-hover:text-white transition">
              <c.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-bold text-[#052B5B]">{c.t}</h3>
            <p className="mt-1.5 text-sm text-slate-600">{c.d}</p>
            <p className="mt-3 text-sm font-semibold text-[#0BA37F]">{c.link}</p>
          </a>
        ))}
      </div>

      <div className="bg-white rounded-2xl p-7 lg:p-10 ring-1 ring-slate-100">
        <h2 className="text-2xl font-bold text-[#052B5B]">Send us a message</h2>
        <p className="mt-2 text-slate-600 text-sm">We typically respond within 1–2 business days.</p>
        <form className="mt-6 grid sm:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="text-xs font-semibold text-slate-600">Name</label>
            <input className="mt-1.5 w-full bg-[#F5F7FA] border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0BA37F]/40" placeholder="Mahe S." />
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-600">Email</label>
            <input type="email" className="mt-1.5 w-full bg-[#F5F7FA] border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0BA37F]/40" placeholder="you@example.com" />
          </div>
          <div className="sm:col-span-2">
            <label className="text-xs font-semibold text-slate-600">Subject</label>
            <input className="mt-1.5 w-full bg-[#F5F7FA] border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0BA37F]/40" placeholder="How can we help?" />
          </div>
          <div className="sm:col-span-2">
            <label className="text-xs font-semibold text-slate-600">Message</label>
            <textarea rows={5} className="mt-1.5 w-full bg-[#F5F7FA] border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0BA37F]/40" placeholder="Tell us a bit more..." />
          </div>
          <div className="sm:col-span-2">
            <button className="brand-gradient text-white px-7 py-3 rounded-full font-semibold shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:-translate-y-0.5 transition">Send message</button>
          </div>
        </form>
      </div>

      <div className="mt-10 grid sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl p-5 ring-1 ring-slate-100 flex items-start gap-3">
          <Mail className="h-5 w-5 text-[#0BA37F] mt-0.5" />
          <div><div className="text-xs text-slate-500">Email</div><div className="text-sm font-semibold text-slate-800">hello@tncitizen.in</div></div>
        </div>
        <div className="bg-white rounded-2xl p-5 ring-1 ring-slate-100 flex items-start gap-3">
          <Phone className="h-5 w-5 text-[#0BA37F] mt-0.5" />
          <div><div className="text-xs text-slate-500">Helpline</div><div className="text-sm font-semibold text-slate-800">+91 98765 43211</div></div>
        </div>
        <div className="bg-white rounded-2xl p-5 ring-1 ring-slate-100 flex items-start gap-3">
          <MapPin className="h-5 w-5 text-[#0BA37F] mt-0.5" />
          <div><div className="text-xs text-slate-500">Based in</div><div className="text-sm font-semibold text-slate-800">Tirunelveli, Tamil Nadu</div></div>
        </div>
      </div>
    </PageShell>
  );
}