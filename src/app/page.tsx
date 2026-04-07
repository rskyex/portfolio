import Link from 'next/link';
import Image from 'next/image';
import PhotoFrame from '@/components/PhotoFrame';
import Tag from '@/components/Tag';

import SectionHeader from '@/components/SectionHeader';
import SectionDivider from '@/components/SectionDivider';
import ResearchListItem from '@/components/ResearchListItem';
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

/* ─── Platform Ecosystem Data ─── */

interface ChildPlatform {
  name: string;
  href: string;
  description: string;
  status: 'Live' | 'In Progress';
  image: string;
}

interface ParentPlatform {
  title: string;
  href: string;
  liveUrl: string;
  description: string;
  image: string;
  children: ChildPlatform[];
}

const platforms: ParentPlatform[] = [
  {
    title: 'Govern the Human',
    href: '/platforms/govern-the-human',
    liveUrl: 'https://govern-the-human.vercel.app/',
    description: 'Exploring how governance turns back toward the human subject — narrative, selfhood, and interpretive systems.',
    image: '/images/govern the human og.png',
    children: [
      { name: 'Narrative Drift', href: '/platforms/narrative-drift', description: 'AI influence on choice, memory, and self-understanding', status: 'Live', image: '/images/narrative drift-og.png' },
      { name: 'SelfTrace', href: '/platforms/selftrace', description: 'Algorithmic shaping of identity and self-presentation', status: 'Live', image: '/images/selftrace og.png' },
      { name: 'Ontological Governance Observatory', href: '/platforms/ontological-governance-observatory', description: 'AI\'s transformation of the human subject across governance layers', status: 'In Progress', image: '/images/ogo-og.png' },
    ],
  },
  {
    title: 'Faultline',
    href: '/platforms/faultline',
    liveUrl: 'https://faultline-nqmm.vercel.app/',
    description: 'Strategic risk suite mapping escalation, infrastructure, and geopolitical fragility across interconnected systems.',
    image: '/images/faultline og.png',
    children: [
      { name: 'Orbital Risk Tracker', href: '/platforms/orbital', description: 'ASAT events, proximity operations, and space escalation', status: 'Live', image: '/images/orbital-platform.jpg' },
      { name: 'Global Nuclear Infrastructure Atlas', href: '/platforms/nuclear', description: 'Civilian nuclear infrastructure, arsenals, and policy context', status: 'Live', image: '/images/nuclear-platform.jpg' },
      { name: 'Cyber Escalation Atlas', href: '/platforms/cyber', description: 'Cyber incidents as strategic behaviour and governance signals', status: 'Live', image: '/images/cyber-platform.png' },
    ],
  },
  {
    title: 'MYTHERA',
    href: '/platforms/mythera',
    liveUrl: 'https://mythera.vercel.app/',
    description: 'An interpretive studio where selfhood, culture, performance, and aesthetic form become explorable worlds.',
    image: '/images/mythera og.png',
    children: [
      { name: 'Scoreless', href: '/platforms/scoreless', description: 'Classical music structure and meaning without score literacy', status: 'In Progress', image: '/images/mythera og.png' },
    ],
  },
];


export default function Home() {
  return (
    <div className="relative">
      {/* ═══════════════════════════════════════════════════
          GLOBAL HERO BACKGROUND — fixed behind all sections
          ═══════════════════════════════════════════════════ */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-kuro" />
        <Image
          src="/images/hero.jpeg"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* ═══════════════════════════════════════════════════
          HERO — KINKAKU-JI × NEON FUTURE × 3D TSUBAKI
          ═══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden min-h-screen flex items-center">

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
                <span className="font-noto-serif text-5xl md:text-6xl lg:text-7xl text-kin/90 leading-none block drop-shadow-[0_0_30px_rgba(212,160,23,0.2)]">
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

              {/* Description — with frosted backdrop for legibility */}
              <div className="max-w-xl mb-10 rounded-lg bg-kuro/20 backdrop-blur-[2px] px-5 py-4">
                <p className="font-noto-sans text-sm text-shiro/75 leading-[1.9]">
                  Risa Koyanagi is a Cambridge Future Scholar and researcher working at the intersection of space governance, nuclear governance, cyber governance, strategic risk, and emerging technology governance. Her research centres on legitimation theory, dual-use governance, authority architecture, responsible behaviour norms, and international security. She independently designs and builds public-facing research platforms spanning AI governance, strategic infrastructure risk, and classical music analysis.
                </p>
              </div>

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
          PLATFORM ECOSYSTEM
          ═══════════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 pb-16 relative">
        <div className="absolute inset-0 asanoha-bg opacity-30 pointer-events-none" />
        <div className="relative">
          <SectionHeader kanji="台" english="Platform Ecosystem" subtitle="Three parent platforms and their linked research tools" />

          {/* 3-column parent grid on desktop */}
          <div className="mt-10 grid lg:grid-cols-3 gap-8">
            {platforms.map((platform) => (
              <div key={platform.title} className="flex flex-col">
                {/* Parent card */}
                <Link href={platform.href} className="block group">
                  <div className="card-washi card-washi-platform card-hover relative overflow-hidden border border-kin/15">
                    <div className="glow-bar absolute left-0 top-0 bottom-0 z-10" />
                    <div className="absolute left-[3px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-kin/20 via-kin/10 to-transparent z-10" />

                    {/* Parent OG image */}
                    <div className="relative w-full h-36 overflow-hidden">
                      <Image
                        src={platform.image}
                        alt={platform.title}
                        fill
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                      />
                      <div className="absolute top-3 left-3 z-10">
                        <span className="px-2 py-0.5 text-[9px] font-noto-sans font-bold tracking-[0.2em] uppercase bg-kuro/80 backdrop-blur-sm text-kin border border-kin/30 rounded-sm shadow-[0_0_10px_rgba(212,160,23,0.12)]">
                          Flagship
                        </span>
                      </div>
                    </div>

                    <div className="relative pl-4 p-5">
                      <h3 className="font-kaisei text-lg font-semibold text-kuro-soft mb-2 group-hover:text-shu-deep transition-colors">
                        {platform.title}
                      </h3>

                      <p className="font-noto-sans text-sm text-kuro-soft/65 leading-relaxed mb-4">
                        {platform.description}
                      </p>

                      <span className="font-noto-sans text-xs text-kin-deep/70 group-hover:text-shu tracking-widest transition-colors uppercase font-medium">
                        View platform →
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Child cards */}
                <div className="mt-3 space-y-2">
                  {platform.children.map((child) => (
                    <Link key={child.name} href={child.href} className="block group/child">
                      <div className="relative overflow-hidden rounded-md border border-shiro/[0.06] bg-gradient-to-br from-[#0e0f1a] to-[#0a0b12] transition-all duration-300 hover:border-kin/20 hover:from-[#111225] hover:to-[#0c0d16]">
                        <div className="flex items-stretch">
                          {/* Child thumbnail */}
                          <div className="relative w-16 shrink-0 overflow-hidden">
                            <Image
                              src={child.image}
                              alt={child.name}
                              fill
                              className="object-cover group-hover/child:scale-[1.05] transition-transform duration-500"
                            />
                          </div>
                          <div className="flex items-start justify-between gap-2 px-3 py-2.5 min-w-0">
                            <div className="min-w-0">
                              <h4 className="font-noto-sans text-sm font-medium text-shiro/80 group-hover/child:text-kin-glow transition-colors truncate">
                                {child.name}
                              </h4>
                              <p className="font-noto-sans text-xs text-shiro/40 leading-relaxed mt-0.5 line-clamp-1">
                                {child.description}
                              </p>
                            </div>
                            {child.status === 'In Progress' && (
                              <span className="shrink-0 mt-0.5 px-1.5 py-px text-[9px] font-noto-sans font-medium tracking-wider text-kin/60 border border-kin/15 rounded-sm">
                                WIP
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
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
