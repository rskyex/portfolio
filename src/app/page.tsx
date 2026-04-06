import Link from 'next/link';
import PhotoFrame from '@/components/PhotoFrame';
import Tag from '@/components/Tag';

import SectionHeader from '@/components/SectionHeader';
import SectionDivider from '@/components/SectionDivider';
import FlagshipCard from '@/components/FlagshipCard';
import PlatformCard from '@/components/PlatformCard';
import ResearchListItem from '@/components/ResearchListItem';
import ProjectCard from '@/components/ProjectCard';
import SpeakingCard from '@/components/SpeakingCard';
import Tsubaki3D from '@/components/Tsubaki3D';

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


export default function Home() {
  return (
    <div>
      {/* ═══════════════════════════════════════════════════
          HERO — KINKAKU-JI × NEON FUTURE × 3D TSUBAKI
          ═══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Deep black base */}
        <div className="absolute inset-0 bg-kuro" />

        {/* Radial gold ambient — Kinkaku-ji reflection */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(212,160,23,0.06)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_20%_50%,rgba(233,30,99,0.03)_0%,transparent_60%)]" />

        {/* Seigaiha undercurrent */}
        <div className="absolute inset-0 seigaiha-bg opacity-50" />

        {/* Large sculptural 3D tsubaki — hero centerpiece (right side) */}
        <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 opacity-40 md:opacity-60 pointer-events-none">
          <Tsubaki3D size="hero" animate />
        </div>

        {/* Secondary floating tsubaki */}
        <div className="absolute left-[8%] top-[15%] opacity-20 pointer-events-none hidden lg:block">
          <Tsubaki3D size="lg" />
        </div>
        <div className="absolute right-[15%] bottom-[10%] opacity-15 pointer-events-none hidden lg:block">
          <Tsubaki3D size="md" />
        </div>

        {/* Orbital neon linework */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
            <ellipse cx="600" cy="400" rx="500" ry="180" fill="none" stroke="rgba(212,160,23,0.04)" strokeWidth="0.5" transform="rotate(-15 600 400)" />
            <ellipse cx="600" cy="400" rx="380" ry="130" fill="none" stroke="rgba(233,30,99,0.03)" strokeWidth="0.5" transform="rotate(10 600 400)" />
            <ellipse cx="600" cy="400" rx="260" ry="80" fill="none" stroke="rgba(212,160,23,0.03)" strokeWidth="0.3" transform="rotate(-30 600 400)" />
          </svg>
        </div>

        {/* Neon accent lines */}
        <div className="absolute top-24 left-0 w-[2px] h-56 bg-gradient-to-b from-tsubaki-rose/40 via-tsubaki-blush/15 to-transparent shadow-[0_0_12px_rgba(233,30,99,0.2)]" />
        <div className="absolute bottom-0 right-0 w-[2px] h-40 bg-gradient-to-t from-kin-glow/25 via-kin/10 to-transparent shadow-[0_0_12px_rgba(255,215,0,0.15)]" />
        <div className="absolute top-16 left-12 right-12 h-px bg-gradient-to-r from-transparent via-kin/[0.04] to-transparent" />
        <div className="absolute bottom-20 left-20 right-20 h-px bg-gradient-to-r from-transparent via-tsubaki-rose/[0.03] to-transparent" />

        {/* Main content */}
        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32 w-full">
          <div className="grid md:grid-cols-[1fr,auto] gap-16 items-center">
            <div>
              {/* Tsubaki crest mark */}
              <div className="mb-8">
                <Tsubaki3D size="md" />
              </div>

              {/* Japanese name — large with gold neon glow */}
              <div className="mb-10">
                <span className="font-kaisei text-7xl md:text-8xl lg:text-9xl text-kin/90 leading-none block drop-shadow-[0_0_30px_rgba(212,160,23,0.2)]">
                  小柳璃紗
                </span>

                <div className="mt-5 flex items-baseline gap-4">
                  <h1 className="font-kaisei text-2xl md:text-3xl text-shiro/90 tracking-wider">
                    Risa Koyanagi
                  </h1>
                  <span className="font-noto-serif text-xs text-shiro/22 tracking-[0.3em]">
                    こやなぎ りさ
                  </span>
                </div>

                {/* Neon petal-gradient rule */}
                <div className="mt-5 w-40 glow-line-tsubaki" />
              </div>

              {/* Eyebrow */}
              <p className="font-noto-sans text-xs text-kin/70 tracking-[0.3em] uppercase mb-5 font-medium">
                International Security · Space · Nuclear · Cyber · Emerging Technology Governance
              </p>

              {/* Title */}
              <p className="font-noto-sans text-lg md:text-xl text-shiro/85 font-light tracking-widest mb-8">
                Cambridge Future Scholar · Researcher · Platform Builder
              </p>

              {/* Description */}
              <p className="font-noto-sans text-sm text-shiro/70 leading-[1.9] max-w-xl mb-10">
                Born in 2003, Risa Koyanagi is a Cambridge Future Scholar and researcher working at the intersection of space governance, nuclear governance, cyber governance, strategic risk, and emerging technology governance. Her research is especially concerned with legitimation theory, dual-use governance, authority architecture, responsible behaviour norms, and international security. She independently designs and builds public-facing research platforms spanning AI governance, strategic infrastructure risk, and classical music analysis.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-12">
                {tags.map(tag => (
                  <Tag key={tag} label={tag} variant="vermillion" />
                ))}
              </div>


            </div>

            {/* Profile photo with tsubaki frame */}
            <div className="flex justify-center md:justify-end relative">
              {/* Ambient tsubaki glow behind portrait */}
              <div className="absolute -inset-12 bg-[radial-gradient(ellipse_at_center,rgba(233,30,99,0.06)_0%,transparent_70%)] blur-xl pointer-events-none" />
              <div className="absolute -inset-12 bg-[radial-gradient(ellipse_at_center,rgba(212,160,23,0.04)_0%,transparent_70%)] blur-2xl pointer-events-none" />
              <div className="relative">
                <PhotoFrame
                  src="/images/profile.jpg"
                  alt="Risa Koyanagi"
                  width={320}
                  height={420}
                  className="w-48 h-64 md:w-72 md:h-96"
                  priority
                />

                {/* Decorative tsubaki near portrait */}
                <div className="absolute -bottom-6 -right-6 opacity-40">
                  <Tsubaki3D size="sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══════════════════════════════════════════════════
          PLATFORMS & RESEARCH TOOLS
          ═══════════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 pb-16 relative">
        <div className="absolute inset-0 asanoha-bg opacity-30 pointer-events-none" />
        <div className="relative">
          <SectionHeader kanji="台" english="Platforms & Research Tools" subtitle="Independently designed research platforms spanning two flagship systems" />

          {/* Govern the Human — Flagship */}
          <div className="mt-10">
            <FlagshipCard
              href="/platforms/govern-the-human"
              title="Govern the Human"
              description="A flagship research platform exploring how governance turns back toward the human subject."
              includes="Includes three linked projects on narrative, selfhood, and interpretive systems."
              liveUrl="https://govern-the-human.vercel.app/"
              image="/images/govern the human og.png"
              subProjects={[
                { name: 'Narrative Drift', href: '/platforms/narrative-drift' },
                { name: 'SelfTrace', href: '/platforms/selftrace' },
                { name: 'Ontological Governance Observatory', href: '/platforms/ontological-governance-observatory' },
              ]}
            />
          </div>

          {/* Faultline — Flagship */}
          <div className="mt-8">
            <FlagshipCard
              href="/platforms/faultline"
              title="Faultline"
              description="A flagship strategic risk suite mapping escalation, infrastructure, and geopolitical fragility across interconnected systems."
              includes="Includes three linked projects."
              liveUrl="https://faultline-nqmm.vercel.app/"
              image="/images/faultline og.png"
              subProjects={[
                { name: 'Orbital Risk Tracker', href: '/platforms/orbital' },
                { name: 'Global Nuclear Infrastructure Atlas', href: '/platforms/nuclear' },
                { name: 'Cyber Escalation Atlas', href: '/platforms/cyber' },
              ]}
            />
          </div>

          {/* Independent projects */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <PlatformCard
              href="/platforms/promise"
              title="Japan Promise Tracker"
              description="Tracking Japanese government policy commitments and their fulfilment status across governance domains."
              status="Live"
              liveUrl="https://jp-ver-japan-promise-tracker.vercel.app"
              tags={['Japan', 'Policy Accountability', 'Government Commitments']}
              image="/images/promise-platform.jpg"
            />
            <PlatformCard
              href="/platforms/mythera"
              title="MYTHERA"
              description="A mythic and interpretive studio where selfhood, culture, performance, and aesthetic form become explorable worlds."
              status="Live"
              liveUrl="https://mythera.vercel.app/"
              tags={['Interpretive Worlds', 'Selfhood', 'Literature & Performance']}
              image="/images/mythera og.png"
            />
          </div>

          <div className="mt-8 text-right">
            <Link href="/platforms" className="font-noto-sans text-xs text-kin/60 hover:text-kin-glow/90 font-medium transition-colors tracking-widest uppercase">
              View all platforms →
            </Link>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══════════════════════════════════════════════════
          RESEARCH
          ═══════════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 pb-16 relative">
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
            <Link href="/research" className="font-noto-sans text-xs text-kin/60 hover:text-kin-glow/90 font-medium transition-colors tracking-widest uppercase">
              View all research →
            </Link>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══════════════════════════════════════════════════
          BACKGROUND & FIELDWORK
          ═══════════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 pb-16 relative">
        <div className="absolute inset-0 seigaiha-bg opacity-20 pointer-events-none" />
        <div className="relative">
          <SectionHeader kanji="業" english="Background & Fieldwork" subtitle="Fieldwork, leadership, and interdisciplinary engagement" />
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
            <ProjectCard
              href="/projects/art"
              title="Art Practice"
              description="Interdisciplinary art practice spanning visual thinking, international exhibition, and conceptual work."
              image="/images/art.JPG"
              imageAlt="Art practice"
            />
          </div>
          <div className="mt-8 text-right">
            <Link href="/projects" className="font-noto-sans text-xs text-kin/60 hover:text-kin-glow/90 font-medium transition-colors tracking-widest uppercase">
              View all background & fieldwork →
            </Link>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══════════════════════════════════════════════════
          SPEAKING
          ═══════════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 pb-20 relative">
        <div className="relative">
          <SectionHeader kanji="演" english="Speaking" subtitle="Selected speaking and policy engagement" />
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <SpeakingCard
              title="TICAD Ministerial Meeting"
              context="Policy engagement and youth representation at the Tokyo International Conference on African Development."
              type="Policy Engagement"
              image="/images/speaking-ticad.jpg"
            />
            <SpeakingCard
              title="Japan–Netherlands Peace Exchange"
              context="Bilateral dialogue and peace exchange between Japanese and Dutch participants."
              type="Dialogue Contribution"
              image="/images/speaking-peace-exchange.jpg"
            />
            <SpeakingCard
              title="Africa–Japan Youth Drive"
              context="Youth-focused policy forum addressing Africa–Japan co-creation and development cooperation."
              type="Youth Representation"
              image="/images/speaking-youth-drive.jpg"
            />
            <SpeakingCard
              title="Roundtable and Friends of Education"
              context="Hosted by GPE and the World Bank at the Japanese House of Councillors."
              type="Roundtable Participation"
              image="/images/speaking-roundtable.JPG"
            />
          </div>
          <div className="mt-8 text-right">
            <Link href="/speaking" className="font-noto-sans text-xs text-kin/60 hover:text-kin-glow/90 font-medium transition-colors tracking-widest uppercase">
              View all speaking →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
