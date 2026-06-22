'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

interface Paper {
  title: string;
  /** Style key (stable, English). */
  type: 'Oral Presentation' | 'Interactive Presentation';
  /** Localized label for display; falls back to `type`. */
  typeLabel?: string;
  symposium: string;
  date?: string;
}

interface ConferenceCardProps {
  event: string;
  location: string;
  organizer: string;
  highlight: string;
  tags: string[];
  papers: Paper[];
  focus: string;
}

export default function ConferenceCard({
  event,
  location,
  organizer,
  highlight,
  tags,
  papers,
  focus,
}: ConferenceCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('conference');

  return (
    <div className="relative">
      {/* Ambient glow halo */}
      <div className="pointer-events-none absolute -inset-px rounded-[10px] bg-[radial-gradient(ellipse_at_top,rgba(212,160,23,0.08),transparent_60%)] opacity-60 blur-md" />

      <button
        type="button"
        onClick={() => setIsOpen(o => !o)}
        aria-expanded={isOpen}
        className="group relative block w-full text-left overflow-hidden rounded-[10px] border border-kin/15 bg-gradient-to-br from-[#0f1020] via-[#0a0b14] to-[#070710] transition-all duration-500 hover:border-kin/35 hover:shadow-[0_0_0_1px_rgba(212,160,23,0.18),0_20px_60px_rgba(0,0,0,0.55),0_0_50px_rgba(212,160,23,0.10)] hover:-translate-y-[2px] focus:outline-none focus-visible:ring-2 focus-visible:ring-kin/40"
      >
        {/* Top neon accent rule */}
        <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-kin/40 to-transparent shadow-[0_0_10px_rgba(212,160,23,0.18)]" />
        {/* Left vertical neon bar */}
        <div className="absolute left-0 top-6 bottom-6 w-[2px] bg-gradient-to-b from-tsubaki-rose/60 via-kin/40 to-transparent shadow-[0_0_8px_rgba(233,30,99,0.18)] transition-all duration-500 group-hover:from-tsubaki-rose/90 group-hover:via-kin-glow/60" />

        {/* Subtle grid texture */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,rgba(212,160,23,0.6)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,160,23,0.6)_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="relative px-7 md:px-10 py-8 md:py-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="min-w-0 flex-1">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-4">
                <span className="font-inter text-[10px] tracking-[0.32em] uppercase text-kin/80 font-medium">
                  {t('eyebrow')}
                </span>
                <span className="h-px w-8 bg-gradient-to-r from-kin/40 to-transparent" />
              </div>

              {/* Event title */}
              <h3 className="font-cormorant text-2xl md:text-[28px] font-semibold text-shiro leading-tight tracking-wide mb-1.5">
                {event}
              </h3>
              <p className="font-inter text-[13px] text-shiro/55 tracking-wide mb-1">
                {location}
              </p>
              <p className="font-inter text-[11px] text-shiro/40 tracking-wider">
                {organizer}
              </p>
            </div>

            {/* Highlight chip */}
            <div className="shrink-0">
              <div className="relative inline-flex items-center gap-2.5 px-4 py-2.5 rounded-md border border-kin/30 bg-kin/[0.06] shadow-[inset_0_0_20px_rgba(212,160,23,0.05),0_0_18px_rgba(212,160,23,0.06)]">
                <span className="block w-1.5 h-1.5 rounded-full bg-kin-glow shadow-[0_0_10px_rgba(255,215,0,0.7)] animate-glow-pulse" />
                <span className="font-inter text-[11px] tracking-[0.22em] uppercase text-kin font-semibold">
                  {highlight}
                </span>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map(tag => (
              <span
                key={tag}
                className="px-2.5 py-1 text-[10.5px] font-inter font-medium tracking-[0.14em] uppercase rounded-sm border border-shiro/12 bg-shiro/[0.025] text-shiro/70 transition-colors group-hover:border-kin/25 group-hover:text-kin/80"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Toggle row */}
          <div className="mt-7 flex items-center justify-between gap-4 pt-5 border-t border-shiro/[0.06]">
            <span className="font-inter text-[11px] tracking-[0.22em] uppercase text-shiro/50">
              {t('acceptedPapers', { count: papers.length })}
            </span>
            <span className="inline-flex items-center gap-2 font-inter text-[11px] tracking-[0.22em] uppercase text-kin/75 group-hover:text-kin-glow transition-colors">
              {isOpen ? t('collapse') : t('viewPapers')}
              <svg
                width="11"
                height="11"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              >
                <path d="M2.5 4.5l3.5 3.5 3.5-3.5" />
              </svg>
            </span>
          </div>
        </div>
      </button>

      {/* Expanded papers */}
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <ol className="space-y-3">
            {papers.map((paper, idx) => (
              <li
                key={paper.title}
                className="relative overflow-hidden rounded-md border border-shiro/[0.08] bg-gradient-to-br from-[#0c0d18] to-[#08090f] px-6 py-5 transition-colors hover:border-kin/22"
              >
                <div className="absolute left-0 top-4 bottom-4 w-px bg-gradient-to-b from-kin/40 via-kin/15 to-transparent" />
                <div className="flex items-start gap-5">
                  <span className="shrink-0 font-cormorant text-2xl text-kin/55 leading-none mt-0.5 tabular-nums">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-cormorant text-[19px] md:text-xl font-semibold text-shiro leading-snug mb-2.5 tracking-wide">
                      {paper.title}
                    </h4>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
                      <span
                        className={`inline-flex items-center gap-1.5 font-inter text-[10px] tracking-[0.22em] uppercase font-medium px-2 py-0.5 rounded-sm border ${
                          paper.type === 'Oral Presentation'
                            ? 'border-tsubaki-rose/30 bg-tsubaki-rose/[0.08] text-tsubaki-blush'
                            : 'border-kin/25 bg-kin/[0.06] text-kin/85'
                        }`}
                      >
                        {paper.typeLabel ?? paper.type}
                      </span>
                      <span className="font-inter text-[11.5px] text-shiro/60 tracking-wide">
                        {paper.symposium}
                      </span>
                      {paper.date && (
                        <span className="font-inter text-[11px] text-shiro/45 tracking-wider">
                          · {paper.date}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Research focus descriptor */}
      <p className="mt-5 font-inter text-[12.5px] text-shiro/55 leading-relaxed tracking-wide max-w-3xl">
        <span className="text-kin/75 font-medium tracking-[0.18em] uppercase text-[10.5px] mr-2">
          {t('researchFocus')}
        </span>
        {focus}
      </p>
    </div>
  );
}
