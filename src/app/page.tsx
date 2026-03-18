import Link from 'next/link';
import PhotoFrame from '@/components/PhotoFrame';
import Tag from '@/components/Tag';
import StatList from '@/components/StatList';
import SectionHeader from '@/components/SectionHeader';
import SectionDivider from '@/components/SectionDivider';
import PlatformCard from '@/components/PlatformCard';
import ResearchListItem from '@/components/ResearchListItem';
import ProjectCard from '@/components/ProjectCard';
import SpeakingCard from '@/components/SpeakingCard';

const tags = [
  'International Security',
  'Space Governance',
  'Nuclear Governance',
  'Cyber Governance',
  'Dual-Use Governance',
  'Governance Architecture',
  'Legitimacy & Authority',
  'Strategic Risk',
];

const stats = [
  { value: '4', label: 'Platforms built' },
  { value: '24', label: 'Documents coded' },
  { value: '6', label: 'Years fieldwork' },
  { value: '5+', label: 'Papers in development' },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 seigaiha-bg opacity-50" />
        {/* Decorative vermillion accent */}
        <div className="absolute top-16 left-0 w-1 h-32 bg-gradient-to-b from-vermillion/50 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1 h-24 bg-gradient-to-t from-gold/30 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-32">
          <div className="grid md:grid-cols-[1fr,auto] gap-12 items-center">
            <div>
              {/* Name block */}
              <div className="mb-8">
                <div className="flex items-end gap-3">
                  <span className="hanko font-kaisei text-2xl md:text-3xl text-vermillion/70 leading-none">
                    小柳
                  </span>
                  <span className="font-kaisei text-6xl md:text-8xl text-gold-light/90 leading-none">
                    璃紗
                  </span>
                </div>
                <div className="mt-3 flex items-baseline gap-3">
                  <h1 className="font-kaisei text-2xl md:text-3xl text-washi tracking-wide">
                    Risa Koyanagi
                  </h1>
                  <span className="font-noto-serif text-xs text-washi/30 tracking-widest">
                    こやなぎ りさ
                  </span>
                </div>
              </div>

              {/* Eyebrow */}
              <p className="font-noto-sans text-xs text-gold/70 tracking-[0.2em] uppercase mb-4">
                International Security · Space · Nuclear · Cyber · Emerging Technology Governance
              </p>

              {/* Title */}
              <p className="font-noto-sans text-lg md:text-xl text-washi/90 font-light tracking-wide mb-6">
                Researcher
              </p>

              {/* Description */}
              <p className="font-noto-sans text-sm text-washi/65 leading-relaxed max-w-xl mb-8">
                Risa Koyanagi is a Cambridge Future Scholar and researcher working at the intersection of space governance, nuclear governance, cyber governance, strategic risk, and emerging technology governance. Her research is especially concerned with legitimation theory, dual-use governance, authority architecture, responsible behaviour norms, and international security. She is supervised by Prof. Harald Wydra in connection with her Cambridge-based research trajectory, and is building the Strategic Infrastructure Risk Suite: a set of public-facing policy platforms across nuclear, orbital, and cyber domains.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-10">
                {tags.map(tag => (
                  <Tag key={tag} label={tag} variant="vermillion" />
                ))}
              </div>

              {/* Stats */}
              <StatList stats={stats} />
            </div>

            {/* Profile photo */}
            <div className="hidden md:block">
              <PhotoFrame
                src="https://drive.google.com/uc?export=view&id=1ywWD0OFzGsXbPYoXxM_VlDw7a6lCrAKa"
                alt="Risa Koyanagi"
                width={320}
                height={420}
                className="w-72 h-96"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Platforms Preview */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <SectionHeader kanji="台" english="Platforms" subtitle="Strategic Infrastructure Risk Suite" />
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <PlatformCard
            href="/platforms/nuclear"
            title="Global Nuclear Infrastructure Atlas"
            description="Interactive mapping of civilian nuclear power infrastructure, accident sites, and estimated arsenals with policy and health context."
            status="Live"
            liveUrl="https://globalnuclearinfrastructureatlas.vercel.app"
            tags={['IAEA', 'SIPRI', 'Nuclear']}
          />
          <PlatformCard
            href="/platforms/orbital"
            title="Orbital Risk Tracker"
            description="Tracking ASAT events, proximity operations, GNSS jamming, and cyber-space entanglement with escalation analysis."
            status="Live"
            liveUrl="https://orbitalrisktracker.vercel.app"
            tags={['ASAT', 'Space Security', 'Escalation']}
          />
          <PlatformCard
            href="/platforms/promise"
            title="Japan Promise Tracker"
            description="Tracking Japanese government policy commitments and their fulfilment status across governance domains."
            status="Live"
            liveUrl="https://jp-ver-japan-promise-tracker.vercel.app"
            tags={['Japan', 'Policy', 'Accountability']}
          />
          <PlatformCard
            href="/platforms/cyber"
            title="Cyber Escalation Atlas"
            description="Mapping cyber incidents as strategic behaviour, attribution frameworks, and governance signals."
            status="In Production"
            tags={['Cyber', 'Attribution', 'Escalation']}
          />
        </div>
        <div className="mt-6 text-right">
          <Link href="/platforms" className="font-noto-sans text-sm text-gold/60 hover:text-gold transition-colors tracking-wide">
            View all platforms →
          </Link>
        </div>
      </section>

      <SectionDivider />

      {/* Research Preview */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <SectionHeader kanji="論" english="Research" subtitle="Selected research across governance domains" />
        <div className="mt-8 space-y-4">
          <ResearchListItem
            href="/research/lunar"
            title="Who Speaks for Humanity on the Moon?"
            status="Working Paper"
            themes={['Legitimation', 'Authority architecture', 'Artemis vs ILRS', 'Boundary-making']}
            description="Examining legitimation audiences, translation devices, and authority architecture in competing lunar governance frameworks."
          />
          <ResearchListItem
            href="/research/ai-cyber"
            title="Responsible Behaviour as an Unfinished Norm"
            status="In Progress"
            themes={['Governance gaps', 'Dual-use ambiguity', 'Norm codification']}
            description="Investigating denial, displacement, and inoculation in AI governance discourse across space, AI, and cyber domains."
          />
          <ResearchListItem
            href="/research/fukushima"
            title="Post-Disaster Governance and the Trust Gap"
            status="In Progress"
            themes={['Fukushima', 'Trust', 'Recovery', 'State-society relations']}
            description="Long-term fieldwork examining policy gaps, trust, and recovery governance in post-disaster Fukushima communities."
          />
        </div>
        <div className="mt-6 text-right">
          <Link href="/research" className="font-noto-sans text-sm text-gold/60 hover:text-gold transition-colors tracking-wide">
            View all research →
          </Link>
        </div>
      </section>

      <SectionDivider />

      {/* Projects Preview */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <SectionHeader kanji="業" english="Projects" subtitle="Fieldwork, leadership, and interdisciplinary engagement" />
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <ProjectCard
            href="/projects/fukushima"
            title="Fukushima Field Research"
            description="Multi-site fieldwork in Futaba and Namie districts examining post-disaster governance, trust, and recovery."
            image="https://drive.google.com/uc?export=view&id=1dlIbcK0hz1onSm6uy_ZyXAuuUWG8OvVy"
            imageAlt="Fukushima fieldwork"
            period="2019–2024"
          />
          <ProjectCard
            href="/projects/afrecos"
            title="AFRECOS"
            description="Co-founded a 10+ country network for cultural and policy events bridging Africa and Japan."
            image="https://drive.google.com/uc?export=view&id=1RjkqlmBUNy_qPGjypRFk7k9OTA0pS5yO"
            imageAlt="AFRECOS"
            period="2024"
            role="Co-Founder & President"
          />
        </div>
        <div className="mt-6 text-right">
          <Link href="/projects" className="font-noto-sans text-sm text-gold/60 hover:text-gold transition-colors tracking-wide">
            View all projects →
          </Link>
        </div>
      </section>

      <SectionDivider />

      {/* Speaking Preview */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <SectionHeader kanji="演" english="Speaking" subtitle="Selected speaking and policy engagement" />
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <SpeakingCard
            title="TICAD Ministerial Meeting"
            context="Policy engagement and youth representation at the Tokyo International Conference on African Development."
            type="Policy Engagement"
          />
          <SpeakingCard
            title="APPG on North Korea"
            context="Contribution to the All-Party Parliamentary Group dialogue on North Korean policy issues."
            type="Parliamentary Engagement"
          />
        </div>
        <div className="mt-6 text-right">
          <Link href="/speaking" className="font-noto-sans text-sm text-gold/60 hover:text-gold transition-colors tracking-wide">
            View all speaking →
          </Link>
        </div>
      </section>
    </div>
  );
}
