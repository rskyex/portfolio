import Link from 'next/link';
import PhotoFrame from './PhotoFrame';
import SectionHeader from './SectionHeader';
import SectionDivider from './SectionDivider';
import type { ExtraSections } from '@/dictionaries/types';

/**
 * Profile sections (Education, Skills, Languages, Arts, Interests, Connect)
 * ported from the About page and shown only where dict.extra is present
 * (the JA landing page). Card styling matches the About page exactly; section
 * headers use the shared landing SectionHeader for consistent rhythm.
 */
export default function LandingExtraSections({ extra }: { extra: ExtraSections }) {
  const { education, skills, languages, arts, interests, connect } = extra;

  return (
    <>
      {/* ─── EDUCATION ─── */}
      <SectionDivider />
      <section className="max-w-6xl mx-auto px-6 pb-16 relative">
        <div className="relative">
          <SectionHeader english={education.heading} />
          <div className="mt-8 space-y-4">
            {education.items.map((edu, i) => (
              <div key={i} className="card-washi card-washi-about p-6 relative overflow-hidden">
                <div className="glow-bar absolute left-0 top-0 bottom-0" />
                <div className="pl-4">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 mb-1">
                    <h4 className="font-noto-sans text-sm font-semibold text-kuro-soft">{edu.institution}</h4>
                    <span className="font-noto-sans text-xs text-kuro-soft/50 shrink-0 font-medium">{edu.period}</span>
                  </div>
                  {edu.degree && <p className="font-noto-sans text-sm text-kuro-soft/65">{edu.degree}</p>}
                  {edu.detail && <p className="font-noto-sans text-xs text-kuro-soft/45 mt-1">{edu.detail}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SKILLS ─── */}
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
                  <div className="space-y-3">
                    {group.paragraphs.map((p, j) => (
                      <p key={j} className="font-noto-sans text-xs text-kuro-soft/60 leading-relaxed">{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {skills.groups[2] && (
            <div className="card-washi card-washi-about p-6 relative overflow-hidden">
              <div className="glow-bar absolute left-0 top-0 bottom-0" />
              <div className="pl-4">
                <h4 className="font-noto-sans text-sm font-bold text-kuro-soft mb-4">{skills.groups[2].title}</h4>
                <div className="space-y-3">
                  {skills.groups[2].paragraphs.map((p, j) => (
                    <p key={j} className="font-noto-sans text-xs text-kuro-soft/60 leading-relaxed">{p}</p>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ─── LANGUAGES ─── */}
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

      {/* ─── ARTS BACKGROUND ─── */}
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

      {/* ─── INTERESTS ─── */}
      <SectionDivider />
      <section className="max-w-6xl mx-auto px-6 pb-16 relative">
        <div className="relative">
          <SectionHeader english={interests.heading} />
          <div className="mt-8 card-washi card-washi-about p-6 relative overflow-hidden">
            <div className="glow-bar absolute left-0 top-0 bottom-0" />
            <div className="pl-4">
              <p className="font-noto-sans text-sm text-kuro-soft/70 leading-relaxed">
                {interests.items.join(' · ')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONNECT ─── */}
      <SectionDivider />
      <section className="max-w-6xl mx-auto px-6 pb-20 relative">
        <div className="relative">
          <SectionHeader english={connect.heading} />
          <div className="mt-8">
            <PhotoFrame
              src="/images/about gallery-1.jpg"
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
