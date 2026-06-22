import type { Metadata } from 'next';
import { Fragment } from 'react';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import PhotoFrame from '@/components/PhotoFrame';
import SectionHeader from '@/components/SectionHeader';
import SectionDivider from '@/components/SectionDivider';
import ProjectCard from '@/components/ProjectCard';
import SpeakingCard from '@/components/SpeakingCard';
import ConferenceCard from '@/components/ConferenceCard';
import Tsubaki3D from '@/components/Tsubaki3D';
import { type Locale } from '@/i18n/config';
import { buildAlternates } from '@/i18n/metadata';
import { getHomeContent } from '@/content/home';

export function generateMetadata(): Metadata {
  return { alternates: buildAlternates('/') };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = getHomeContent(locale as Locale);

  const platforms = c.platforms.items;
  const research = c.research.items;

  return (
    <div className="relative">
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
        <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 hidden md:block md:opacity-60 pointer-events-none">
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
                  {c.hero.name}
                </span>

                <div className="mt-5">
                  <h1 className="font-cormorant text-3xl md:text-4xl text-shiro/90 tracking-wide font-semibold">
                    {c.hero.romaji}
                  </h1>
                </div>

                {/* Neon petal-gradient rule */}
                <div className="mt-5 w-40 glow-line-tsubaki" />
              </div>

              {/* Eyebrow */}
              <p className="font-inter text-[11px] text-kin/70 tracking-[0.3em] uppercase mb-5 font-medium">
                {c.hero.eyebrow}
              </p>

              {/* Title */}
              <p className="font-cormorant text-xl md:text-2xl text-shiro/85 font-light tracking-wider mb-8 italic">
                {c.hero.title}
              </p>

              {/* Description — with frosted backdrop for legibility */}
              <div className="max-w-xl mb-8 rounded-lg bg-kuro/20 backdrop-blur-[2px] px-5 py-4">
                <p className="font-inter text-sm text-shiro/75 leading-[1.9]">
                  {c.hero.description.map((seg, i) =>
                    seg.strong ? (
                      <strong key={i} className="font-semibold text-shiro/90">{seg.text}</strong>
                    ) : (
                      <Fragment key={i}>{seg.text}</Fragment>
                    )
                  )}
                </p>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap items-center gap-3 mb-12">
                <Link
                  href="/platforms"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm border border-kin/25 bg-kin/[0.06] font-inter text-xs text-kin tracking-widest uppercase font-medium hover:bg-kin/[0.12] hover:border-kin/40 transition-all duration-300"
                >
                  {c.hero.ctaPlatforms}
                </Link>
                <Link
                  href="/research"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm border border-kin/25 bg-kin/[0.06] font-inter text-xs text-kin tracking-widest uppercase font-medium hover:bg-kin/[0.12] hover:border-kin/40 transition-all duration-300"
                >
                  {c.hero.ctaResearch}
                </Link>
                <a
                  href="https://linkedin.com/in/rskyex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm border border-shiro/10 bg-shiro/[0.03] font-inter text-xs text-shiro/80 tracking-wider hover:border-tsubaki-rose/30 hover:text-tsubaki-blush transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  {c.hero.linkedinLabel}
                </a>
                <a
                  href="https://www.instagram.com/rskyex/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm border border-shiro/10 bg-shiro/[0.03] font-inter text-xs text-shiro/80 tracking-wider hover:border-tsubaki-rose/30 hover:text-tsubaki-blush transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                  {c.hero.instagramLabel}
                </a>
                <a
                  href="https://github.com/rskyex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm border border-shiro/10 bg-shiro/[0.03] font-inter text-xs text-shiro/80 tracking-wider hover:border-tsubaki-rose/30 hover:text-tsubaki-blush transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                  {c.hero.githubLabel}
                </a>
                <a
                  href="mailto:risakyng@gmail.com"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm border border-shiro/10 bg-shiro/[0.03] font-inter text-xs text-shiro/80 tracking-wider hover:border-tsubaki-rose/30 hover:text-tsubaki-blush transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  {c.hero.contactLabel}
                </a>
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
                  alt={c.hero.photoAlt}
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
          <SectionHeader kanji={c.platforms.header.kanji} english={c.platforms.header.english} />

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
                    <div className="relative w-full aspect-[1200/630] overflow-hidden">
                      <Image
                        src={platform.image}
                        alt={platform.imageAlt}
                        fill
                        className="object-contain group-hover:scale-[1.03] transition-transform duration-700"
                      />
                      {platform.children && (
                        <div className="absolute top-3 left-3 z-10">
                          <span className="px-2 py-0.5 text-[9px] font-inter font-bold tracking-[0.2em] uppercase bg-kuro/80 backdrop-blur-sm text-kin border border-kin/30 rounded-sm shadow-[0_0_10px_rgba(212,160,23,0.12)]">
                            {c.platforms.flagshipLabel}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="relative pl-4 p-5">
                      <h3 className="font-cormorant text-xl font-semibold text-kuro-soft mb-2 group-hover:text-shu-deep transition-colors">
                        {platform.title}
                      </h3>

                      <p className="font-inter text-sm text-kuro-soft/65 leading-relaxed mb-4">
                        {platform.description}
                      </p>

                      <span className="font-inter text-xs text-kin-deep/70 group-hover:text-shu tracking-widest transition-colors uppercase font-medium">
                        {c.platforms.viewPlatform}
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Child cards */}
                {platform.children && (
                <div className="mt-3 space-y-2">
                  {platform.children.map((child) => (
                    <Link key={child.name} href={child.href} className="block group/child">
                      <div className="relative overflow-hidden rounded-md border border-shiro/[0.06] bg-gradient-to-br from-[#0e0f1a] to-[#0a0b12] transition-all duration-300 hover:border-kin/20 hover:from-[#111225] hover:to-[#0c0d16]">
                        <div className="flex items-stretch">
                          {/* Child OG image */}
                          <div className="relative w-20 sm:w-28 shrink-0 aspect-[1200/630] overflow-hidden">
                            <Image
                              src={child.image}
                              alt={child.imageAlt}
                              fill
                              className="object-contain group-hover/child:scale-[1.03] transition-transform duration-500"
                            />
                          </div>
                          <div className="flex items-start justify-between gap-2 px-3 py-2.5 min-w-0 flex-1">
                            <div className="min-w-0">
                              <h4 className="font-inter text-sm font-medium text-shiro/80 group-hover/child:text-kin-glow transition-colors break-words">
                                {child.name}
                              </h4>
                              <p className="font-inter text-xs text-shiro/70 leading-relaxed mt-0.5 line-clamp-2">
                                {child.description}
                              </p>
                            </div>
                            {child.status === 'In Progress' && (
                              <span className="shrink-0 mt-0.5 px-1.5 py-px text-[9px] font-inter font-medium tracking-wider text-kin/60 border border-kin/15 rounded-sm">
                                {c.platforms.wipLabel}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 text-right">
            <Link href="/platforms" className="font-inter text-xs text-kin/60 hover:text-kin-glow/90 font-medium transition-colors tracking-widest uppercase">
              {c.platforms.viewAll}
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
          <SectionHeader kanji={c.research.header.kanji} english={c.research.header.english} subtitle={c.research.header.subtitle} />
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
              {c.research.viewAll}
            </Link>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══════════════════════════════════════════════════
          SELECTED CONFERENCE PRESENTATIONS
          ═══════════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 pb-16 relative">
        <div className="relative">
          <SectionHeader
            kanji={c.conference.header.kanji}
            english={c.conference.header.english}
            subtitle={c.conference.header.subtitle}
          />

          <div className="mt-10">
            <ConferenceCard
              event={c.conference.data.event}
              location={c.conference.data.location}
              organizer={c.conference.data.organizer}
              highlight={c.conference.data.highlight}
              tags={c.conference.data.tags}
              papers={c.conference.data.papers}
              focus={c.conference.data.focus}
            />
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
          <SectionHeader kanji={c.fieldwork.header.kanji} english={c.fieldwork.header.english} subtitle={c.fieldwork.header.subtitle} />

          {/* Fieldwork & Leadership */}
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {c.fieldwork.projects.map((project) => (
              <ProjectCard
                key={project.href}
                href={project.href}
                title={project.title}
                description={project.description}
                image={project.image}
                imageAlt={project.imageAlt}
                period={project.period}
                role={project.role}
              />
            ))}
          </div>

          {/* Speaking & Policy Engagement */}
          <div className="mt-12 mb-2">
            <h3 className="font-inter text-[10px] text-shiro/70 tracking-[0.25em] uppercase font-semibold">{c.fieldwork.speakingHeading}</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {c.fieldwork.speaking.map((talk) => (
              <SpeakingCard
                key={talk.title}
                title={talk.title}
                context={talk.context}
                type={talk.type}
                image={talk.image}
              />
            ))}
          </div>

          <div className="mt-8 text-right">
            <Link href="/fieldwork" className="font-inter text-xs text-kin/60 hover:text-kin-glow/90 font-medium transition-colors tracking-widest uppercase">
              {c.fieldwork.viewAll}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
