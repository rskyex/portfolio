import SectionHeader from '@/components/SectionHeader';
import { pageMetadata } from '@/lib/metadata';
import FlagshipCard from '@/components/FlagshipCard';
import PlatformCard from '@/components/PlatformCard';
import SectionDivider from '@/components/SectionDivider';


export const metadata = pageMetadata({
  title: 'Platforms',
  description:
    'Independently designed research, policy, and strategic-risk platforms by Risa Koyanagi across space, nuclear, cyber, and emerging technology governance.',
  path: '/platforms',
});

export default function PlatformsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
      <SectionHeader
        kanji="台"
        english="Platforms"
        subtitle="Independently Designed Research Platforms"
      />

      <div className="mt-6 mb-16">
        <p className="font-noto-sans text-sm text-shiro/90 leading-relaxed max-w-2xl">
          A coherent suite of public-facing research and policy tools that translate governance theory into operational platforms across strategic infrastructure domains. Each platform connects conceptual frameworks on legitimacy, authority, and escalation with applied policy questions.
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════
          RESEARCH PLATFORMS
          ═══════════════════════════════════════════════════ */}
      <div className="mt-10 mb-10">
        <h2 className="font-kaisei text-xl text-kin/80 tracking-wide">Research Platforms</h2>
        <p className="font-noto-sans text-xs text-shiro/70 tracking-wider mt-1">Independently designed research, policy, and strategic-risk tools</p>
      </div>

      <div className="space-y-6 mb-14">
        <PlatformCard
          href="/platforms/cyber"
          title="Cyber Escalation Atlas"
          description="Mapping cyber incidents as strategic behaviour, attribution frameworks, and governance signals."
          status="Live"
          liveUrl="https://cyber-escalation-atlas-5yp5.vercel.app"
          tags={['Cyber', 'Attribution', 'Escalation']}
          image="/images/cyber-platform.png"
          coreQuestion="Core question: How do cyber operations function as strategic behaviour, and what governance frameworks can account for them?"
        />

        <PlatformCard
          href="/platforms/narrative-drift"
          title="Narrative Drift"
          description="An interactive simulation exploring how AI systems reshape choice, memory, and self-understanding over time."
          status="Live"
          liveUrl="https://narrative-drift.vercel.app/"
          tags={['AI Influence', 'Choice Architecture', 'Epistemic Drift']}
          image="/images/narrative-drift-og.png"
          coreQuestion="Core question: How do AI systems erode epistemic autonomy through the accumulation of small nudges over time?"
        />

        <PlatformCard
          href="/platforms/selftrace"
          title="SelfTrace"
          description="A reflective platform examining how social media algorithms shape identity, self-presentation, and online selfhood."
          status="Live"
          liveUrl="https://selftrace.vercel.app/"
          tags={['Algorithmic Identity', 'Self-Presentation', 'Digital Reflection']}
          image="/images/selftrace-og.png"
          coreQuestion="Core question: How do social media algorithms shape self-presentation and identity construction?"
        />

        <PlatformCard
          href="/platforms/ontological-governance-observatory"
          title="Ontological Governance Observatory"
          description="Mapping how AI reshapes the human subject across epistemic, ontological, and political layers."
          status="In Progress"
          tags={['AI Governance', 'Ontological Risk', 'Second-Order Governance']}
          image="/images/ogo-og.png"
          coreQuestion="Core question: How must governance frameworks change when AI transforms the human subject itself?"
        />

        <PlatformCard
          href="/platforms/orbital"
          title="Orbital Risk Tracker"
          description="Tracking ASAT events, proximity operations, GNSS jamming, and cyber-space entanglement with escalation analysis."
          status="Live"
          liveUrl="https://orbitalrisktracker.vercel.app"
          tags={['ASAT', 'Space Security', 'Escalation']}
          image="/images/orbital-platform.jpg"
          coreQuestion="Core question: How are ASAT capabilities and proximity operations transforming the escalation calculus in orbital space?"
        />

        <PlatformCard
          href="/platforms/nuclear"
          title="Global Nuclear Infrastructure Atlas"
          description="Interactive mapping of civilian nuclear power infrastructure, accident sites, and estimated arsenals with policy and health context."
          status="Live"
          liveUrl="https://globalnuclearinfrastructureatlas.vercel.app"
          tags={['IAEA', 'SIPRI', 'Nuclear']}
          image="/images/nuclear-platform.jpg"
          coreQuestion="Core question: How is civilian nuclear infrastructure distributed globally, and what governance and health implications follow?"
        />

        <PlatformCard
          href="/platforms/lunar-mandate-atlas"
          title="Lunar Mandate Atlas"
          description="Interactive mapping of competing lunar governance frameworks, mandates, and authority architecture across the Artemis Accords and ILRS programme."
          status="Live"
          liveUrl="https://lunar-mandate-atlas.vercel.app"
          tags={['Lunar Governance', 'Artemis Accords', 'ILRS', 'Authority Architecture']}
          image="/images/LGAT-og.svg"
          coreQuestion="Core question: How do competing governance frameworks construct authority and claim legitimacy on behalf of humanity on the Moon?"
        />
      </div>

      <SectionDivider />

      {/* ═══════════════════════════════════════════════════
          FLAGSHIP PROJECT SYSTEM
          ═══════════════════════════════════════════════════ */}
      <div className="mt-10 mb-10">
        <h2 className="font-kaisei text-xl text-kin/80 tracking-wide">Flagship Project System</h2>
        <p className="font-noto-sans text-xs text-shiro/70 tracking-wider mt-1">A parent platform containing linked sub-projects</p>
      </div>

      <FlagshipCard
        href="/platforms/mythera"
        title="MYTHERA"
        description="An interpretive studio where selfhood, culture, performance, and aesthetic form become explorable worlds."
        includes="Includes linked projects on music analysis, authenticity, and philosophical game design."
        liveUrl="https://mythera.vercel.app/"
        image="/images/mythera-og.png"
        subProjects={[
          { name: 'Scoreless', href: '/platforms/scoreless' },
          { name: 'Theatre of Authenticity', href: '/platforms/theatre-of-authenticity' },
          { name: 'Second Self', href: '/platforms/second-self' },
        ]}
      />

      <div className="ml-4 md:ml-8 mt-6 mb-14 border-l-2 border-kin/10 pl-6 md:pl-8 space-y-6">
        <p className="font-noto-sans text-[10px] text-shiro/90 tracking-[0.2em] uppercase font-semibold -ml-1">Sub-projects</p>
        <PlatformCard
          href="/platforms/scoreless"
          title="Scoreless"
          description="A music analysis platform making classical music's structure, logic, and meaning accessible without score literacy."
          status="In Progress"
          tags={['Classical Music', 'Structural Analysis', 'Motif Tracking', 'Music Theory']}
          image="/images/mythera-og.png"
          coreQuestion="Core question: How can musical structure be made visible and meaningful without requiring score literacy?"
        />

        <PlatformCard
          href="/platforms/theatre-of-authenticity"
          title="Theatre of Authenticity"
          description="An experiential site that questions authenticity itself — visualising how far the motives behind our actions have been externalised. Spanning Mishima, Kierkegaard, Nietzsche, Sartre, and Bataille."
          status="In Progress"
          tags={['Authenticity', 'Performance', 'Selfhood', 'Existentialism']}
          image="/images/theatre-of-authenticity.png"
          coreQuestion="Core question: Are you truly acting from inner necessity, or constructing your self on the premise of being watched?"
        />

        <PlatformCard
          href="/platforms/second-self"
          title="Second Self"
          description="An online philosophical card game exploring AI, memory, governance, and the formation of subjectivity. Players design a society and determine what kind of human subjects emerge."
          status="In Progress"
          tags={['Philosophy', 'Card Game', 'AI Governance', 'Subjectivity', 'Social Design']}
          image="/images/secondself_og.png"
          coreQuestion="Core question: What happens when systems begin participating in the very process by which humans become selves?"
        />
      </div>

      <SectionDivider />

      {/* ═══════════════════════════════════════════════════
          OTHER PROJECTS
          ═══════════════════════════════════════════════════ */}
      <div className="mt-10 mb-6">
        <h2 className="font-kaisei text-xl text-kin/80 tracking-wide">Selected Independent Projects</h2>
        <p className="font-noto-sans text-xs text-shiro/70 tracking-wider mt-1">Standalone research and policy tools</p>
      </div>

      <div className="grid md:grid-cols-1 gap-8 mb-14">
        <PlatformCard
          href="/platforms/promise"
          title="Japan Promise Tracker"
          description="Tracking Japanese government policy commitments and their fulfilment status across governance domains. Designed to support public accountability, policy analysis, and civic engagement by making government promises transparent and trackable."
          status="Live"
          liveUrl="https://jp-ver-japan-promise-tracker.vercel.app"
          tags={['Japan', 'Policy Accountability', 'Government Commitments', 'Civic Engagement']}
          image="/images/promise-platform.jpg"
          coreQuestion="Core question: How can government commitments be made transparent and accountable to the public?"
        />
      </div>

      <SectionDivider />

      <div className="text-center">
        <p className="font-noto-sans text-xs text-shiro/75 tracking-wide">
          Each platform is built with Next.js, React, TypeScript, and D3 / Leaflet.
        </p>
      </div>
    </div>
  );
}
