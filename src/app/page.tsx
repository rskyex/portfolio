import Link from 'next/link';
import Image from 'next/image';
import PhotoFrame from '@/components/PhotoFrame';
import Tag from '@/components/Tag';

import SectionHeader from '@/components/SectionHeader';
import SectionDivider from '@/components/SectionDivider';
import ProjectCard from '@/components/ProjectCard';
import SpeakingCard from '@/components/SpeakingCard';
import Tsubaki3D from '@/components/Tsubaki3D';

const tags = [
  'Space Governance',
  'Nuclear Governance',
  'Strategic Risk',
  'Legitimacy & Authority',
  'Platform Research',
  'Dual-Use Systems',
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

/* ─── Research Data (no status labels on homepage) ─── */

const research = [
  {
    href: '/research/lunar',
    title: 'Who Speaks for Humanity on the Moon?',
    description: 'Examining legitimation audiences, translation devices, and authority architecture in competing lunar governance frameworks.',
  },
  {
    href: '/research/ai-cyber',
    title: 'Responsible Behaviour as an Unfinished Norm',
    description: 'Investigating denial, displacement, and inoculation in AI governance discourse across space, AI, and cyber domains.',
  },
  {
    href: '/research/fukushima',
    title: 'Post-Disaster Governance and the Trust Gap',
    description: 'Long-term fieldwork examining policy gaps, trust, and recovery governance in post-disaster Fukushima communities.',
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

                <div className="mt-5">
                  <h1 className="font-cormorant text-3xl md:text-4xl text-shiro/90 tracking-wide font-semibold">
                    Risa Koyanagi
                  </h1>
                </div>

                {/* Neon petal-gradient rule */}
                <div className="mt-5 w-40 glow-line-tsubaki" />
              </div>

              {/* Eyebrow */}
              <p className="font-inter text-[11px] text-kin/70 tracking-[0.3em] uppercase mb-5 font-medium">
                International Security · Space · Nuclear · Cyber · Emerging Technology Governance
              </p>

              {/* Title */}
              <p className="font-cormorant text-xl md:text-2xl text-shiro/85 font-light tracking-wider mb-8 italic">
                Cambridge Future Scholar · Researcher · Platform Builder
              </p>

              {/* Description — with frosted backdrop for legibility */}
              <div className="max-w-xl mb-8 rounded-lg bg-kuro/20 backdrop-blur-[2px] px-5 py-4">
                <p className="font-inter text-sm text-shiro/75 leading-[1.9]">
                  Risa Koyanagi is a Cambridge Future Scholar and researcher working at the intersection of space governance, nuclear governance, cyber governance, strategic risk, and emerging technology governance. Her research centres on legitimation theory, dual-use governance, authority architecture, responsible behaviour norms, and international security. She independently designs and builds public-facing research platforms spanning AI governance, strategic infrastructure risk, and classical music analysis.
                </p>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap items-center gap-3 mb-10">
                <Link
                  href="/platforms"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm border border-kin/25 bg-kin/[0.06] font-inter text-xs text-kin tracking-widest uppercase font-medium hover:bg-kin/[0.12] hover:border-kin/40 transition-all duration-300"
                >
                  View Platforms
                </Link>
                <Link
                  href="/research"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm border border-shiro/12 bg-shiro/[0.04] font-inter text-xs text-shiro/70 tracking-widest uppercase font-medium hover:border-shiro/25 hover:text-shiro/90 transition-all duration-300"
                >
                  View Research
                </Link>
                <a
                  href="https://linkedin.com/in/rskyex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm border border-shiro/10 bg-shiro/[0.03] font-inter text-xs text-shiro/55 tracking-wider hover:border-kin/30 hover:text-kin transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/rskyex/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm border border-shiro/10 bg-shiro/[0.03] font-inter text-xs text-shiro/55 tracking-wider hover:border-tsubaki-rose/30 hover:text-tsubaki-blush transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                  Instagram
                </a>
                <a
                  href="mailto:risakyng@gmail.com"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm border border-shiro/10 bg-shiro/[0.03] font-inter text-xs text-shiro/55 tracking-wider hover:border-kin/30 hover:text-kin transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  Contact
                </a>
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
          <SectionHeader kanji="台" english="Platform Ecosystem" />

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
                        <span className="px-2 py-0.5 text-[9px] font-inter font-bold tracking-[0.2em] uppercase bg-kuro/80 backdrop-blur-sm text-kin border border-kin/30 rounded-sm shadow-[0_0_10px_rgba(212,160,23,0.12)]">
                          Flagship
                        </span>
                      </div>
                    </div>

                    <div className="relative pl-4 p-5">
                      <h3 className="font-cormorant text-xl font-semibold text-kuro-soft mb-2 group-hover:text-shu-deep transition-colors">
                        {platform.title}
                      </h3>

                      <p className="font-inter text-sm text-kuro-soft/65 leading-relaxed mb-4">
                        {platform.description}
                      </p>

                      <span className="font-inter text-xs text-kin-deep/70 group-hover:text-shu tracking-widest transition-colors uppercase font-medium">
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
                              <h4 className="font-inter text-sm font-medium text-shiro/80 group-hover/child:text-kin-glow transition-colors truncate">
                                {child.name}
                              </h4>
                              <p className="font-inter text-xs text-shiro/40 leading-relaxed mt-0.5 line-clamp-1">
                                {child.description}
                              </p>
                            </div>
                            {child.status === 'In Progress' && (
                              <span className="shrink-0 mt-0.5 px-1.5 py-px text-[9px] font-inter font-medium tracking-wider text-kin/60 border border-kin/15 rounded-sm">
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
            <Link href="/platforms" className="font-inter text-xs text-kin/60 hover:text-kin-glow/90 font-medium transition-colors tracking-widest uppercase">
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
            {research.map((item) => (
              <Link key={item.href} href={item.href} className="block group">
                <div className="card-washi card-washi-research card-hover relative overflow-hidden p-6">
                  <div className="glow-bar absolute left-0 top-0 bottom-0" />
                  <div className="relative pl-4">
                    <h3 className="font-cormorant text-lg font-semibold text-kuro-soft group-hover:text-shu-deep transition-colors italic mb-2">
                      {item.title}
                    </h3>
                    <p className="font-inter text-sm text-kuro-soft/60 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-right">
            <Link href="/research" className="font-inter text-xs text-kin/60 hover:text-kin-glow/90 font-medium transition-colors tracking-widest uppercase">
              View all research →
            </Link>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══════════════════════════════════════════════════
          FIELDWORK & PUBLIC ENGAGEMENT
          ═══════════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 pb-20 relative">
        <div className="absolute inset-0 seigaiha-bg opacity-20 pointer-events-none" />
        <div className="relative">
          <SectionHeader kanji="場" english="Fieldwork & Public Engagement" subtitle="Fieldwork, leadership, dialogue, and public-facing engagement across policy, research, and international exchange" />

          {/* Fieldwork & Leadership */}
          <div className="mt-10 grid md:grid-cols-2 gap-6">
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

          {/* Speaking & Policy Engagement */}
          <div className="mt-12 mb-2">
            <h3 className="font-inter text-[10px] text-shiro/35 tracking-[0.25em] uppercase font-semibold">Speaking & Policy Engagement</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
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
            <Link href="/fieldwork" className="font-inter text-xs text-kin/60 hover:text-kin-glow/90 font-medium transition-colors tracking-widest uppercase">
              View all fieldwork & engagement →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
