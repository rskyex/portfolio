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
          href="/platforms/scoreless"
          title="Scoreless"
          description="A music analysis platform that makes classical music's structure, logic, and meaning accessible without requiring score literacy. Instead of describing works as simply 'beautiful' or 'sad,' it visualises thematic repetition, tension and release, formal development, and the intellectual and aesthetic implications that emerge — through timelines, motif displays, and commentary cards. Focused on public domain classical works, it treats music not as a matter of taste but as structured thought unfolding in time."
          status="In Progress"
          tags={['Classical Music', 'Structural Analysis', 'Motif Tracking', 'Music Theory', 'Public Domain']}
        />

        <PlatformCard
          href="/platforms/selftrace"
          title="SelfTrace"
          description="A reflective platform that helps users see how social media algorithms may shape what they post, repeat, remember, and gradually experience as their online self. Focuses on identity, self-presentation, and the long-term effects of platform incentives rather than simple engagement metrics."
          status="In Progress"
          tags={['Algorithmic Identity', 'Self-Presentation', 'Platform Incentives', 'Digital Reflection']}
        />

        <PlatformCard
          href="/platforms/narrative-drift"
          title="Narrative Drift"
          description="An interactive simulation that lets users experience how AI systems can slowly reshape the way they choose, remember, and understand themselves. The user keeps making their own choices, but the conditions of those choices quietly change over time."
          status="In Progress"
          tags={['AI Influence', 'Choice Architecture', 'Identity Simulation', 'Epistemic Drift']}
        />

        <PlatformCard
          href="/platforms/ontological-governance-observatory"
          title="Ontological Governance Observatory"
          description="A research platform that shows how current AI governance frameworks miss a deeper problem: AI does not only create risks and outputs, but can also reshape the human subject itself. Maps these changes across epistemic, ontological, and political layers to argue for a new form of second-order governance."
          status="In Progress"
          tags={['AI Governance', 'Ontological Risk', 'Second-Order Governance', 'Epistemic Restructuring']}
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
