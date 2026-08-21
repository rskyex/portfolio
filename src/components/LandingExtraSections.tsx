import Link from 'next/link';
import PhotoFrame from './PhotoFrame';
import SectionHeader from './SectionHeader';
import SectionDivider from './SectionDivider';
import CvSection from './CvSection';
import Recommendations from './Recommendations';
import type { ExtraSections, SkillGroup } from '@/dictionaries/types';
import type { Locale } from '@/lib/locale';
import { getCv } from '@/lib/content';

/**
 * Profile sections (Education/CV, Skills, Languages, Arts, Interests, Connect)
 * ported from the About page and shown where dict.extra is present. Education
 * and CV entries come from src/data/cv.json (shared with /about). Card styling
 * matches the About page exactly; section headers use the shared landing
 * SectionHeader for consistent rhythm.
 */
export default function LandingExtraSections({
  extra,
  locale,
}: {
  extra: ExtraSections;
  locale: Locale;
}) {
  const { education, cv, recommendations, certifications, skills, languages, arts, interests, connect } =
    extra;

  /* A skill group renders either a bulleted list or comma-style paragraphs. */
  const skillBody = (group: SkillGroup) =>
    group.bullets ? (
      <ul className="space-y-1.5">
        {group.bullets.map((b, k) => (
          <li
            key={k}
            className="relative pl-4 font-noto-sans text-xs text-kuro-soft/60 leading-relaxed"
          >
            <span className="absolute left-0 top-[0.5em] w-1 h-1 rounded-full bg-kin/50" />
            {b}
          </li>
        ))}
      </ul>
    ) : (
      <div className="space-y-3">
        {(group.paragraphs ?? []).map((p, j) => (
          <p key={j} className="font-noto-sans text-xs text-kuro-soft/60 leading-relaxed">{p}</p>
        ))}
      </div>
    );

  return (
    <>
      {/* ─── CV — Education / Experience / Awards (JA landing) ─── */}
      {cv && (
        <>
          <SectionDivider />
          <section className="max-w-6xl mx-auto px-6 pb-16 relative">
            <div className="relative">
              <SectionHeader english={cv.heading} />
              <div className="mt-8">
                <CvSection locale={locale} variant="landing" />
              </div>
            </div>
          </section>
        </>
      )}

      {/* ─── EDUCATION only (EN landing) ─── */}
      {!cv && education && (
        <>
          <SectionDivider />
          <section className="max-w-6xl mx-auto px-6 pb-16 relative">
            <div className="relative">
              <SectionHeader english={education.heading} />
              <div className="mt-8 space-y-4">
                {getCv().education.map((edu, i) => (
                  <div key={i} className="card-washi card-washi-about p-6 relative overflow-hidden">
                    <div className="glow-bar absolute left-0 top-0 bottom-0" />
                    <div className="pl-4">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 mb-1">
                        <h4 className="font-noto-sans text-sm font-semibold text-kuro-soft">{edu.institution[locale]}</h4>
                        {edu.period[locale] && (
                          <span className="font-noto-sans text-xs text-kuro-soft/50 shrink-0 font-medium">{edu.period[locale]}</span>
                        )}
                      </div>
                      <p className="font-noto-sans text-sm text-kuro-soft/65">{edu.degree[locale]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* ─── RECOMMENDATIONS (optional) ─── */}
      {recommendations && (
        <>
          <SectionDivider />
          <section className="max-w-6xl mx-auto px-6 pb-16 relative">
            <div className="relative">
              <SectionHeader english={recommendations.heading} />
              <div className="mt-8">
                <Recommendations locale={locale} variant="landing" />
              </div>
            </div>
          </section>
        </>
      )}

      {/* ─── CERTIFICATIONS (optional) ─── */}
      {certifications && (
        <>
          <SectionDivider />
          <section className="max-w-6xl mx-auto px-6 pb-16 relative">
            <div className="relative">
              <SectionHeader english={certifications.heading} />
              <div className="mt-8 space-y-4">
                {certifications.items.map((cert, i) => (
                  <div key={i} className="card-washi card-washi-about p-6 relative overflow-hidden">
                    <div className="glow-bar absolute left-0 top-0 bottom-0" />
                    <div className="pl-4">
                      <h4 className="font-noto-sans text-sm font-semibold text-kuro-soft">{cert.name}</h4>
                      {cert.type && <p className="font-noto-sans text-xs text-kuro-soft/45 mt-1">{cert.type}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* ─── SKILLS (optional) ─── */}
      {skills && (
        <>
          <SectionDivider />
          <section className="max-w-6xl mx-auto px-6 pb-16 relative">
            <div className="relative">
              <SectionHeader english={skills.heading} />
              <div className="mt-8 grid md:grid-cols-2 gap-6 mb-6">
                {skills.groups.slice(0, 2).map((group, i) => (
                  <div key={i} className="card-washi card-washi-about p-6 relative overflow-hidden">
                    <div className="glow-bar absolute left-0 top-0 bottom-0" />
                    <div className="pl-4">
                      <h4 className="font-noto-sans text-sm font-bold text-kuro-soft mb-4">{group.title}</h4>
                      {skillBody(group)}
                    </div>
                  </div>
                ))}
              </div>
              {skills.groups[2] && (
                <div className="card-washi card-washi-about p-6 relative overflow-hidden">
                  <div className="glow-bar absolute left-0 top-0 bottom-0" />
                  <div className="pl-4">
                    <h4 className="font-noto-sans text-sm font-bold text-kuro-soft mb-4">{skills.groups[2].title}</h4>
                    {skillBody(skills.groups[2])}
                  </div>
                </div>
              )}
            </div>
          </section>
        </>
      )}

      {/* ─── LANGUAGES (optional) ─── */}
      {languages && (
        <>
          <SectionDivider />
          <section className="max-w-6xl mx-auto px-6 pb-16 relative">
            <div className="relative">
              <SectionHeader english={languages.heading} />
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                {languages.items.map((lang, i) => (
                  <div key={i} className="card-washi card-washi-about p-4 text-center relative overflow-hidden">
                    <div className="glow-bar absolute left-0 top-0 bottom-0" />
                    <div className="font-noto-sans text-sm font-semibold text-kuro-soft">{lang}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* ─── ARTS BACKGROUND (optional) ─── */}
      {arts && (
        <>
          <SectionDivider />
          <section className="max-w-6xl mx-auto px-6 pb-16 relative">
            <div className="relative">
              <SectionHeader english={arts.heading} />
              <div className="mt-8 card-washi card-washi-about p-6 relative overflow-hidden">
                <div className="glow-bar absolute left-0 top-0 bottom-0" />
                <div className="pl-4 space-y-4">
                  {arts.paragraphs.map((p, i) => (
                    <p key={i} className="font-noto-sans text-sm text-kuro-soft/70 leading-relaxed">{p}</p>
                  ))}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {arts.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-kuro-soft/80 border border-kin/40 font-noto-sans text-xs text-kin tracking-widest uppercase font-medium hover:bg-tsubaki-rose/20 hover:border-tsubaki-rose/60 hover:text-tsubaki-blush transition-all"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ─── INTERESTS (optional; grouped by field for readability) ─── */}
      {interests && (
        <>
          <SectionDivider />
          <section className="max-w-6xl mx-auto px-6 pb-16 relative">
            <div className="relative">
              <SectionHeader english={interests.heading} />
              <div className="mt-8 card-washi card-washi-about p-6 relative overflow-hidden">
                <div className="glow-bar absolute left-0 top-0 bottom-0" />
                <div className="pl-4 grid sm:grid-cols-2 gap-x-8 gap-y-5">
                  {interests.groups.map((group, i) => (
                    <div key={i}>
                      <h4 className="font-noto-sans text-[11px] text-kin tracking-[0.2em] uppercase mb-2 font-semibold">
                        {group.label}
                      </h4>
                      <p className="font-noto-sans text-sm text-kuro-soft/70 leading-relaxed">
                        {group.items.join(' · ')}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ─── CONNECT ─── */}
      <SectionDivider />
      <section className="max-w-6xl mx-auto px-6 pb-20 relative">
        <div className="relative">
          <SectionHeader english={connect.heading} />
          <div className="mt-8">
            <PhotoFrame
              src="/images/about-gallery-1.jpg"
              alt={connect.galleryAlt}
              width={600}
              height={400}
              className="w-full max-w-md h-auto mb-5"
            />
            <div className="flex flex-wrap items-center gap-2">
              <a
                href="https://www.instagram.com/rskyex/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-sm bg-kuro-soft/80 border border-kin/40 font-noto-sans text-xs text-kin hover:bg-tsubaki-rose/20 hover:border-tsubaki-rose/60 hover:text-tsubaki-blush transition-all font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                @rskyex
              </a>
              <a
                href="https://linkedin.com/in/rskyex"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-sm bg-kuro-soft/80 border border-kin/40 font-noto-sans text-xs text-kin hover:bg-tsubaki-rose/20 hover:border-tsubaki-rose/60 hover:text-tsubaki-blush transition-all font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
              <a
                href="mailto:risakyng@gmail.com"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-sm bg-kuro-soft/80 border border-kin/40 font-noto-sans text-xs text-kin hover:bg-tsubaki-rose/20 hover:border-tsubaki-rose/60 hover:text-tsubaki-blush transition-all font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                {connect.contactLabel}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
