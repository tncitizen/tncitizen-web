import { createFileRoute } from "@tanstack/react-router";
import PageShell from "@/components/landing/PageShell";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — TNCitizen" },
      { name: "description", content: "The terms that govern your use of TNCitizen — the civic safety platform for Tamil Nadu." },
      { property: "og:title", content: "Terms of Use — TNCitizen" },
      { property: "og:description", content: "Rules and responsibilities for using the TNCitizen platform." },
    ],
  }),
  component: TermsPage,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl p-7 ring-1 ring-slate-100 mb-5">
      <h2 className="text-xl font-bold text-[#052B5B]">{title}</h2>
      <div className="mt-3 text-slate-600 leading-relaxed space-y-3 text-[15px]">{children}</div>
    </div>
  );
}

function TermsPage() {
  return (
    <PageShell eyebrow="Legal" title="Terms of Use" intro="By using TNCitizen, you agree to the following terms.">
      <p className="text-xs text-slate-500 mb-6 text-center">Last updated: May 27, 2026</p>
      <Section title="Acceptable use">
        <p>You agree to use TNCitizen only for genuine civic reporting, emergency alerts, and communication with public offices. False reports, prank SOS triggers, or harassment are strictly prohibited and may be reported to authorities.</p>
      </Section>
      <Section title="Account responsibility">
        <p>You are responsible for the accuracy of information in your account, including emergency contacts. Keep your login credentials secure and notify us immediately of any unauthorized use.</p>
      </Section>
      <Section title="Reports and content">
        <p>You retain ownership of the photos, descriptions, and updates you submit. You grant TNCitizen and the relevant government offices a license to display and act on this content as needed for civic response.</p>
      </Section>
      <Section title="Emergency disclaimer">
        <p>TNCitizen is a supplementary safety tool and does not replace official emergency services such as 100, 101, or 108. In life-threatening situations, always contact emergency services directly.</p>
      </Section>
      <Section title="Service availability">
        <p>We strive for 24/7 availability but cannot guarantee uninterrupted service. Maintenance windows, network outages, or government office hours may affect response times.</p>
      </Section>
      <Section title="Changes to these terms">
        <p>We may update these terms from time to time. Material changes will be notified through the app and on this page.</p>
      </Section>
    </PageShell>
  );
}