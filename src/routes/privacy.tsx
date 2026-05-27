import { createFileRoute } from "@tanstack/react-router";
import PageShell from "@/components/landing/PageShell";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — TNCitizen" },
      { name: "description", content: "How TNCitizen collects, uses, and safeguards your personal data across the citizen safety platform." },
      { property: "og:title", content: "Privacy Policy — TNCitizen" },
      { property: "og:description", content: "How TNCitizen handles your data, location, and SOS information." },
    ],
  }),
  component: PrivacyPage,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl p-7 ring-1 ring-slate-100 mb-5">
      <h2 className="text-xl font-bold text-[#052B5B]">{title}</h2>
      <div className="mt-3 text-slate-600 leading-relaxed space-y-3 text-[15px]">{children}</div>
    </div>
  );
}

function PrivacyPage() {
  return (
    <PageShell eyebrow="Legal" title="Privacy Policy" intro="We take the privacy of every citizen seriously. This policy explains what we collect, why, and how we protect it.">
      <p className="text-xs text-slate-500 mb-6 text-center">Last updated: May 27, 2026</p>
      <Section title="Information we collect">
        <p>We collect the information you provide when you create an account, file a report, trigger an SOS, or contact us — including your name, phone number, location, photos attached to reports, and emergency contacts.</p>
      </Section>
      <Section title="How we use your data">
        <p>Your data is used to route reports to the correct local office, share your live location with responders during an emergency SOS, and notify you of updates. We never sell your personal information.</p>
      </Section>
      <Section title="Sharing with government offices">
        <p>When you file a report, the contents are shared with the relevant constituency office and assigned officers. During an active SOS, your location and trusted contacts are shared with verified responders only.</p>
      </Section>
      <Section title="Data retention">
        <p>Reports and timeline data are retained for as long as your account is active. You can request deletion of your account and associated personal data at any time by contacting us.</p>
      </Section>
      <Section title="Your rights">
        <p>You may access, correct, or delete your personal information, and withdraw consent for non-essential processing. Reach us at <a href="mailto:privacy@tncitizen.in" className="text-[#0BA37F] font-semibold">privacy@tncitizen.in</a>.</p>
      </Section>
      <Section title="Contact">
        <p>For privacy questions, write to <a href="mailto:privacy@tncitizen.in" className="text-[#0BA37F] font-semibold">privacy@tncitizen.in</a>.</p>
      </Section>
    </PageShell>
  );
}