import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import SectionHeader from '@/components/SectionHeader';
import ResearchListItem from '@/components/ResearchListItem';
import SectionDivider from '@/components/SectionDivider';
import ConferenceCard from '@/components/ConferenceCard';
import { type Locale } from '@/i18n/config';
import { buildAlternates } from '@/i18n/metadata';
import { getResearchContent } from '@/content/research';

export function generateMetadata(): Metadata {
  return { alternates: buildAlternates('/research') };
}

const badgeStyles: Record<'abstract' | 'progress', string> = {
  abstract: 'bg-tsubaki-rose/10 text-tsubaki-deep border-tsubaki-rose/20',
  progress: 'bg-kuro/[0.04] text-kuro-soft/60 border-kuro-soft/10',
};

export default async function ResearchPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = getResearchContent(locale as Locale);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <SectionHeader
        kanji={c.header.kanji}
        english={c.header.english}
        subtitle={c.header.subtitle}
      />

      <div className="mt-6 mb-12">
        <p className="font-noto-sans text-sm text-shiro/90 leading-relaxed max-w-2xl">
          {c.intro}
        </p>
      </div>

      {/* Working Paper */}
      <div className="mb-10">
        <h3 className="font-noto-sans text-xs text-kin tracking-[0.25em] uppercase mb-4 font-semibold">
          {c.workingPaper.heading}
        </h3>
        {c.workingPaper.items.map(item => (
          <ResearchListItem key={item.href} {...item} />
        ))}
      </div>

      <SectionDivider />

      {/* In Progress */}
      <div className="mb-10">
        <h3 className="font-noto-sans text-xs text-kin tracking-[0.25em] uppercase mb-4 font-semibold">
          {c.inProgress.heading}
        </h3>
        <div className="space-y-4">
          {c.inProgress.items.map(item => (
            <ResearchListItem key={item.href} {...item} />
          ))}
        </div>
      </div>

      <SectionDivider />

      {/* Conference / Development */}
      <div className="mb-10">
        <h3 className="font-noto-sans text-xs text-kin tracking-[0.25em] uppercase mb-4 font-semibold">
          {c.conferenceDev.heading}
        </h3>
        <div className="space-y-4">
          {c.conferenceDev.items.map(item => (
            <ResearchListItem key={item.href} {...item} />
          ))}

          {c.conferenceDev.cards.map(card => (
            <div key={card.title} className="card-washi card-washi-research p-6 relative overflow-hidden">
              <div className="glow-bar absolute left-0 top-0 bottom-0" />
              <div className="pl-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="font-noto-serif text-base font-semibold text-kuro-soft italic">
                    {card.title}
                  </h4>
                  <span className={`shrink-0 px-2.5 py-0.5 text-xs font-noto-sans font-medium rounded border tracking-wider ${badgeStyles[card.badgeVariant]}`}>
                    {card.badgeLabel}
                  </span>
                </div>
                <p className="font-noto-sans text-sm text-kuro-soft/65 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SectionDivider />

      {/* Selected Conference Presentations */}
      <div className="mb-10">
        <h3 className="font-noto-sans text-xs text-kin tracking-[0.25em] uppercase mb-4 font-semibold">
          {c.presentations.heading}
        </h3>
        <ConferenceCard {...c.presentations.conference} />
      </div>

      <SectionDivider />

      <div className="text-center">
        <p className="font-noto-sans text-xs text-shiro/70 tracking-wider">
          {c.closingNote}
        </p>
      </div>
    </div>
  );
}
