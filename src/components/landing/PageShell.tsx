import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";

export default function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F5F7FA] text-slate-900 antialiased overflow-x-hidden flex flex-col">
      <SiteNav />
      <section className="relative pt-20 pb-12 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#0BA37F]/20 to-transparent blur-3xl" />
          <div className="absolute -top-20 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#052B5B]/20 to-transparent blur-3xl" />
        </div>
        <div className="mx-auto max-w-3xl px-5 lg:px-8 text-center">
          <span className="text-sm font-semibold text-[#0BA37F] uppercase tracking-wider">{eyebrow}</span>
          <h1 className="mt-3 text-4xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">{title}</h1>
          {intro && <p className="mt-5 text-lg text-slate-600">{intro}</p>}
        </div>
      </section>
      <main className="flex-1 pb-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">{children}</div>
      </main>
      <SiteFooter />
    </div>
  );
}