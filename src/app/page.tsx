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
      {/* ═══════════════════════════════════════
          HERO — Sculptural Japanese-Futurist
          ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Deep lacquer base */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-lacquer-deep to-indigo-950" />

        {/* Sculptural tsubaki form — hero background */}
        <div className="absolute inset-0 tsubaki-hero opacity-80" />

        {/* Orbital systems linework */}
        <div className="absolute inset-0 orbital-lines" />

        {/* Seigaiha undercurrent */}
        <div className="absolute inset-0 seigaiha-bg opacity-40" />

        {/* Tsubaki field — scattered subtle petals */}
        <div className="absolute inset-0 tsubaki-field opacity-50" />

        {/* Lacquer sheen overlay */}
        <div className="absolute inset-0 bg-lacquer-sheen" />

        {/* Vermillion accent lines */}
        <div className="absolute top-20 left-0 w-[2px] h-48 bg-gradient-to-b from-vermillion/40 via-tsubaki-blush/20 to-transparent" />
        <div className="absolute bottom-0 right-0 w-[2px] h-36 bg-gradient-to-t from-gold/25 via-tsubaki-petal/10 to-transparent" />
        <div className="absolute top-0 left-20 right-20 h-px bg-gradient-to-r from-transparent via-gold/[0.06] to-transparent" />

        {/* Main content */}
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28 w-full">
          <div className="grid md:grid-cols-[1fr,auto] gap-16 items-center">
            <div>
              {/* Identity composition */}
              <div className="mb-10">
                {/* Tsubaki crest seal — signature mark */}
                <div className="mb-6 opacity-30">
                  <svg width="36" height="36" viewBox="0 0 36 36">
                    <ellipse cx="18" cy="9" rx="5" ry="10" fill="none" stroke="#c53d2f" strokeWidth="0.7" transform="rotate(0 18 18)" />
                    <ellipse cx="18" cy="9" rx="5" ry="10" fill="none" stroke="#c53d2f" strokeWidth="0.7" transform="rotate(72 18 18)" />
                    <ellipse cx="18" cy="9" rx="5" ry="10" fill="none" stroke="#c53d2f" strokeWidth="0.7" transform="rotate(144 18 18)" />
                    <ellipse cx="18" cy="9" rx="5" ry="10" fill="none" stroke="#d4918a" strokeWidth="0.5" transform="rotate(216 18 18)" />
                    <ellipse cx="18" cy="9" rx="5" ry="10" fill="none" stroke="#d4918a" strokeWidth="0.5" transform="rotate(288 18 18)" />
                    <circle cx="18" cy="18" r="3" fill="#d4af37" opacity="0.3" />
                    <circle cx="18" cy="18" r="5" fill="none" stroke="#d4af37" strokeWidth="0.3" opacity="0.2" />
                  </svg>
                </div>

                {/* Japanese name — large */}
                <span className="font-kaisei text-6xl md:text-8xl lg:text-9xl text-gold-light/80 leading-none block">
                  小柳璃紗
                </span>

                {/* English name + furigana */}
                <div className="mt-4 flex items-baseline gap-4">
                  <h1 className="font-kaisei text-2xl md:text-3xl text-washi/90 tracking-wide">
                    Risa Koyanagi
                  </h1>
                  <span className="font-noto-serif text-xs text-washi/20 tracking-[0.3em]">
                    こやなぎ りさ
                  </span>
                </div>

                {/* Thin petal-gradient rule under name */}
                <div className="mt-4 w-32 h-px bg-gradient-to-r from-vermillion/30 via-tsubaki-blush/20 to-transparent" />
              </div>

              {/* Eyebrow */}
              <p className="font-noto-sans text-xs text-gold/50 tracking-[0.25em] uppercase mb-5">
                International Security · Space · Nuclear · Cyber · Emerging Technology Governance
              </p>

              {/* Title */}
              <p className="font-noto-sans text-lg md:text-xl text-washi/80 font-light tracking-wider mb-7">
                Researcher
              </p>

              {/* Description */}
              <p className="font-noto-sans text-sm text-washi/45 leading-[1.8] max-w-xl mb-10">
                Risa Koyanagi is a Cambridge Future Scholar and researcher working at the intersection of space governance, nuclear governance, cyber governance, strategic risk, and emerging technology governance. Her research is especially concerned with legitimation theory, dual-use governance, authority architecture, responsible behaviour norms, and international security. She is supervised by Prof. Harald Wydra in connection with her Cambridge-based research trajectory, and is building the Strategic Infrastructure Risk Suite: a set of public-facing policy platforms across nuclear, orbital, and cyber domains.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-12">
                {tags.map(tag => (
                  <Tag key={tag} label={tag} variant="vermillion" />
                ))}
              </div>

              {/* Stats */}
              <StatList stats={stats} />
            </div>

            {/* Profile photo — lacquer-framed */}
            <div className="hidden md:block relative">
              {/* Ambient tsubaki glow behind portrait */}
              <div className="absolute -inset-8 bg-tsubaki-gradient rounded-full blur-2xl pointer-events-none" />
              <div className="relative">
                <PhotoFrame
                  src="/images/profile.jpg"
                  alt="Risa Koyanagi"
                  width={320}
                  height={420}
                  className="w-72 h-96"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══════════════════════════════════════
          PLATFORMS
          ═══════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 pb-16 relative">
        {/* Subtle tsubaki field */}
        <div className="absolute inset-0 tsubaki-field opacity-30 pointer-events-none" />
        <div className="relative">
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
          <div className="mt-8 text-right">
            <Link href="/platforms" className="font-noto-sans text-xs text-gold/40 hover:text-gold/70 transition-colors tracking-widest uppercase">
              View all platforms →
            </Link>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══════════════════════════════════════
          RESEARCH
          ═══════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 pb-16 relative">
        <div className="absolute inset-0 seigaiha-bg opacity-20 pointer-events-none" />
        <div className="relative">
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
          <div className="mt-8 text-right">
            <Link href="/research" className="font-noto-sans text-xs text-gold/40 hover:text-gold/70 transition-colors tracking-widest uppercase">
              View all research →
            </Link>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══════════════════════════════════════
          PROJECTS
          ═══════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 pb-16 relative">
        <div className="absolute inset-0 shippo-bg opacity-20 pointer-events-none" />
        <div className="relative">
          <SectionHeader kanji="業" english="Projects" subtitle="Fieldwork, leadership, and interdisciplinary engagement" />
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <ProjectCard
              href="/projects/fukushima"
              title="Fukushima Field Research"
              description="Multi-site fieldwork in Futaba and Namie districts examining post-disaster governance, trust, and recovery."
              image="/images/fukushima.jpg"
              imageAlt="Fukushima fieldwork"
              period="2019–2024"
            />
            <ProjectCard
              href="/projects/afrecos"
              title="AFRECOS"
              description="Co-founded a 10+ country network for cultural and policy events bridging Africa and Japan."
              image="/images/afrecos.jpg"
              imageAlt="AFRECOS"
              period="2024"
              role="Co-Founder & President"
            />
          </div>
          <div className="mt-8 text-right">
            <Link href="/projects" className="font-noto-sans text-xs text-gold/40 hover:text-gold/70 transition-colors tracking-widest uppercase">
              View all projects →
            </Link>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══════════════════════════════════════
          SPEAKING
          ═══════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 pb-20 relative">
        <div className="absolute inset-0 asanoha-bg opacity-15 pointer-events-none" />
        <div className="relative">
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
          <div className="mt-8 text-right">
            <Link href="/speaking" className="font-noto-sans text-xs text-gold/40 hover:text-gold/70 transition-colors tracking-widest uppercase">
              View all speaking →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
