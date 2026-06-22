import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import SectionHeader from '@/components/SectionHeader';
import FlagshipCard from '@/components/FlagshipCard';
import PlatformCard from '@/components/PlatformCard';
import SectionDivider from '@/components/SectionDivider';
import { type Locale } from '@/i18n/config';
import { buildAlternates } from '@/i18n/metadata';
import { getPlatformsContent } from '@/content/platforms';

export function generateMetadata(): Metadata {
  return { alternates: buildAlternates('/platforms') };
}

export default async function PlatformsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = getPlatformsContent(locale as Locale);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
      <SectionHeader
        kanji={c.header.kanji}
        english={c.header.english}
        subtitle={c.header.subtitle}
      />

      <div className="mt-6 mb-16">
        <p className="font-noto-sans text-sm text-shiro/90 leading-relaxed max-w-2xl">
          {c.intro}
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════
          RESEARCH PLATFORMS
          ═══════════════════════════════════════════════════ */}
      <div className="mt-10 mb-10">
        <h2 className="font-kaisei text-xl text-kin/80 tracking-wide">{c.researchPlatforms.title}</h2>
        <p className="font-noto-sans text-xs text-shiro/70 tracking-wider mt-1">{c.researchPlatforms.subtitle}</p>
      </div>

      <div className="space-y-6 mb-14">
        {c.researchPlatforms.cards.map(card => (
          <PlatformCard
            key={card.href}
            href={card.href}
            title={card.title}
            description={card.description}
            status={card.status}
            statusVariant={card.statusVariant}
            liveUrl={card.liveUrl}
            tags={card.tags}
            image={card.image}
            coreQuestion={card.coreQuestion}
          />
        ))}
      </div>

      <SectionDivider />

      {/* ═══════════════════════════════════════════════════
          FLAGSHIP PROJECT SYSTEM
          ═══════════════════════════════════════════════════ */}
      <div className="mt-10 mb-10">
        <h2 className="font-kaisei text-xl text-kin/80 tracking-wide">{c.flagship.title}</h2>
        <p className="font-noto-sans text-xs text-shiro/70 tracking-wider mt-1">{c.flagship.subtitle}</p>
      </div>

      <FlagshipCard
        href={c.flagship.card.href}
        title={c.flagship.card.title}
        description={c.flagship.card.description}
        includes={c.flagship.card.includes}
        liveUrl={c.flagship.card.liveUrl}
        image={c.flagship.card.image}
        subProjects={c.flagship.card.subProjects}
      />

      <div className="ml-4 md:ml-8 mt-6 mb-14 border-l-2 border-kin/10 pl-6 md:pl-8 space-y-6">
        <p className="font-noto-sans text-[10px] text-shiro/90 tracking-[0.2em] uppercase font-semibold -ml-1">{c.flagship.subProjectsLabel}</p>
        {c.flagship.subProjects.map(card => (
          <PlatformCard
            key={card.href}
            href={card.href}
            title={card.title}
            description={card.description}
            status={card.status}
            statusVariant={card.statusVariant}
            liveUrl={card.liveUrl}
            tags={card.tags}
            image={card.image}
            coreQuestion={card.coreQuestion}
          />
        ))}
      </div>

      <SectionDivider />

      {/* ═══════════════════════════════════════════════════
          OTHER PROJECTS
          ═══════════════════════════════════════════════════ */}
      <div className="mt-10 mb-6">
        <h2 className="font-kaisei text-xl text-kin/80 tracking-wide">{c.otherProjects.title}</h2>
        <p className="font-noto-sans text-xs text-shiro/70 tracking-wider mt-1">{c.otherProjects.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-1 gap-8 mb-14">
        {c.otherProjects.cards.map(card => (
          <PlatformCard
            key={card.href}
            href={card.href}
            title={card.title}
            description={card.description}
            status={card.status}
            statusVariant={card.statusVariant}
            liveUrl={card.liveUrl}
            tags={card.tags}
            image={card.image}
            coreQuestion={card.coreQuestion}
          />
        ))}
      </div>

      <SectionDivider />

      <div className="text-center">
        <p className="font-noto-sans text-xs text-shiro/75 tracking-wide">
          {c.closingNote}
        </p>
      </div>
    </div>
  );
}
