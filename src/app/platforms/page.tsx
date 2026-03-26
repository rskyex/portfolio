import SectionHeader from '@/components/SectionHeader';
import PlatformCard from '@/components/PlatformCard';
import SectionDivider from '@/components/SectionDivider';

export default function PlatformsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
      <SectionHeader
        kanji="台"
        english="Platforms"
        subtitle="Strategic Infrastructure Risk Suite"
      />

      <div className="mt-6 mb-12">
        <p className="font-noto-sans text-sm text-shiro/60 leading-relaxed max-w-2xl">
          A coherent suite of public-facing research and policy tools that translate governance theory into operational platforms across strategic infrastructure domains. Each platform connects conceptual frameworks on legitimacy, authority, and escalation with applied policy questions.
        </p>
      </div>

      <div className="grid md:grid-cols-1 gap-8">
        <PlatformCard
          href="/platforms/faultline"
          title="Faultline"
          description="A unified strategic infrastructure risk platform consolidating Orbital Risk Tracker, Global Nuclear Infrastructure Atlas, and Cyber Escalation Atlas into a single analytical suite. Translates governance theory into operational tools across orbital, nuclear, and cyber domains."
          status="Live"
          liveUrl="https://faultline-nqmm.vercel.app/"
          tags={['Orbital', 'Nuclear', 'Cyber', 'Strategic Risk', 'Escalation', 'Governance']}
          image="/images/faultline og.png"
        />

        <PlatformCard
          href="/platforms/promise"
          title="Japan Promise Tracker"
          description="Tracking Japanese government policy commitments and their fulfilment status across governance domains. Designed to support public accountability, policy analysis, and civic engagement by making government promises transparent and trackable."
          status="Live"
          liveUrl="https://jp-ver-japan-promise-tracker.vercel.app"
          tags={['Japan', 'Policy Accountability', 'Government Commitments', 'Civic Engagement']}
        />
      </div>

      <div className="mt-16 mb-6">
        <h2 className="font-kaisei text-xl text-shiro/80 mb-2">In Progress</h2>
        <p className="font-noto-sans text-sm text-shiro/60 leading-relaxed max-w-2xl">
          New platforms currently in development, expanding beyond strategic infrastructure into music analysis, algorithmic identity, AI-driven narrative systems, and second-order governance.
        </p>
      </div>

      <div className="grid md:grid-cols-1 gap-8">
        <PlatformCard
          href="/platforms/mythera"
          title="MYTHERA"
          description="A platform exploring music as structured thought unfolding in time. Consolidates Scoreless into a broader framework that makes classical music's structure, logic, and meaning accessible without requiring score literacy — through timelines, motif displays, and commentary cards."
          status="In Progress"
          tags={['Classical Music', 'Structural Analysis', 'Motif Tracking', 'Music Theory']}
          image="/images/mythera og.png"
        />

        <PlatformCard
          href="/platforms/govern-the-human"
          title="Govern the Human"
          description="A unified platform consolidating Narrative Drift, SelfTrace, and Ontological Governance Observatory. Explores how AI systems reshape human choice, identity, and self-understanding, and argues that current governance frameworks miss a deeper problem: AI can reshape the human subject itself. Maps these changes across epistemic, ontological, and political layers."
          status="In Progress"
          tags={['AI Governance', 'Ontological Risk', 'Epistemic Drift', 'Choice Architecture', 'Second-Order Governance']}
          image="/images/govern the human og.png"
        />
      </div>

      <SectionDivider />

      <div className="text-center">
        <p className="font-noto-sans text-xs text-shiro/45 tracking-wide">
          Each platform is built with Next.js, React, TypeScript, and D3 / Leaflet.
        </p>
      </div>
    </div>
  );
}
