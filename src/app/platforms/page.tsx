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
        <p className="font-noto-sans text-sm text-shiro/40 leading-relaxed max-w-2xl">
          A coherent suite of public-facing research and policy tools that translate governance theory into operational platforms across strategic infrastructure domains. Each platform connects conceptual frameworks on legitimacy, authority, and escalation with applied policy questions.
        </p>
      </div>

      <div className="grid md:grid-cols-1 gap-8">
        <PlatformCard
          href="/platforms/nuclear"
          title="Global Nuclear Infrastructure Atlas"
          description="Interactive mapping of global civilian nuclear power infrastructure, major accident sites, estimated nuclear arsenals, and associated radiation and health context. Designed for educational and policy use, drawing on sources including IAEA, SIPRI, and WHO data."
          status="Live"
          liveUrl="https://globalnuclearinfrastructureatlas.vercel.app"
          tags={['IAEA', 'SIPRI', 'WHO', 'Nuclear Power', 'Arsenals', 'Radiation']}
        />

        <PlatformCard
          href="/platforms/orbital"
          title="Orbital Risk Tracker"
          description="Tracking anti-satellite events, proximity operations, GNSS jamming incidents, and cyber-space entanglement. Draws on Jervis's security dilemma framework and weaponised interdependence theory to support escalation analysis across orbital infrastructure."
          status="Live"
          liveUrl="https://orbitalrisktracker.vercel.app"
          tags={['ASAT', 'Proximity Operations', 'GNSS Jamming', 'Jervis', 'Weaponised Interdependence']}
        />

        <PlatformCard
          href="/platforms/promise"
          title="Japan Promise Tracker"
          description="Tracking Japanese government policy commitments and their fulfilment status across governance domains. Designed to support public accountability, policy analysis, and civic engagement by making government promises transparent and trackable."
          status="Live"
          liveUrl="https://jp-ver-japan-promise-tracker.vercel.app"
          tags={['Japan', 'Policy Accountability', 'Government Commitments', 'Civic Engagement']}
        />

        <PlatformCard
          href="/platforms/cyber"
          title="Cyber Escalation Atlas"
          description="Mapping cyber incidents as strategic behaviour and governance signals. Engages with Kello's concept of 'unpeace,' attribution frameworks, Schelling's escalation logic, and Tallinn Manual 2.0 to contextualise cyber operations within broader governance and strategic analysis."
          status="In Production"
          tags={['Kello', 'Schelling', 'Tallinn Manual 2.0', 'Attribution', 'Escalation']}
        />
      </div>

      <SectionDivider />

      <div className="text-center">
        <p className="font-noto-sans text-xs text-shiro/20 tracking-wide">
          Each platform is built with Next.js, React, TypeScript, and D3 / Leaflet.
        </p>
      </div>
    </div>
  );
}
