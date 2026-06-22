import type { Metadata } from 'next';
import { Fragment } from 'react';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import SectionHeader from '@/components/SectionHeader';
import SectionDivider from '@/components/SectionDivider';
import PhotoFrame from '@/components/PhotoFrame';
import { type Locale } from '@/i18n/config';
import { buildAlternates } from '@/i18n/metadata';
import { getAboutContent } from '@/content/about';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const c = getAboutContent(locale as Locale);
  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: buildAlternates('/about'),
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = getAboutContent(locale as Locale);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <SectionHeader kanji={c.header.kanji} english={c.header.english} subtitle={c.header.subtitle} />

      <div className="mt-8 space-y-12">
        {/* Profile */}
        <div className="grid md:grid-cols-[auto,1fr] gap-8 items-start">
          <div className="flex justify-center md:justify-start">
            <PhotoFrame
              src="/images/profile.jpg"
              alt={c.profile.photoAlt}
              width={240}
              height={320}
              className="w-40 h-52 md:w-52 md:h-68"
            />
          </div>

          <div className="card-washi card-washi-about p-8 relative overflow-hidden">
            <div className="glow-bar absolute left-0 top-0 bottom-0" />
            <div className="pl-4">
              <h3 className="font-noto-sans text-base font-bold text-kuro-soft mb-4">{c.profile.heading}</h3>
              <div className="space-y-4">
                {c.profile.paragraphs.map((para, pi) => (
                  <p key={pi} className="font-noto-sans text-sm text-kuro-soft/70 leading-relaxed">
                    {para.map((seg, si) =>
                      seg.strong ? (
                        <strong key={si} className="font-semibold text-kuro-soft">{seg.text}</strong>
                      ) : (
                        <Fragment key={si}>{seg.text}</Fragment>
                      )
                    )}
                  </p>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                <Link href="/research" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-kuro-soft/80 border border-kin/40 font-noto-sans text-xs text-kin tracking-widest uppercase font-medium hover:bg-tsubaki-rose/20 hover:border-tsubaki-rose/60 hover:text-tsubaki-blush transition-all">
                  {c.profile.viewResearch}
                </Link>
                <Link href="/platforms" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-kuro-soft/80 border border-kin/40 font-noto-sans text-xs text-kin tracking-widest uppercase font-medium hover:bg-tsubaki-rose/20 hover:border-tsubaki-rose/60 hover:text-tsubaki-blush transition-all">
                  {c.profile.viewPlatforms}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <SectionDivider />

        {/* Education */}
        <div>
          <h3 className="font-noto-sans text-xs text-kin tracking-[0.25em] uppercase mb-6 font-semibold">{c.education.heading}</h3>
          <div className="space-y-4">
            {c.education.items.map((edu, i) => (
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

        <SectionDivider />


        {/* Skills */}
        <div>
          <h3 className="font-noto-sans text-xs text-kin tracking-[0.25em] uppercase mb-6 font-semibold">{c.skills.heading}</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="card-washi card-washi-about p-6 relative overflow-hidden">
              <div className="glow-bar absolute left-0 top-0 bottom-0" />
              <div className="pl-4">
                <h4 className="font-noto-sans text-sm font-bold text-kuro-soft mb-4">{c.skills.research.heading}</h4>
                <div className="space-y-3">
                  {c.skills.research.paragraphs.map((p, i) => (
                    <p key={i} className="font-noto-sans text-xs text-kuro-soft/60 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="card-washi card-washi-about p-6 relative overflow-hidden">
              <div className="glow-bar absolute left-0 top-0 bottom-0" />
              <div className="pl-4">
                <h4 className="font-noto-sans text-sm font-bold text-kuro-soft mb-4">{c.skills.policy.heading}</h4>
                <div className="space-y-3">
                  {c.skills.policy.paragraphs.map((p, i) => (
                    <p key={i} className="font-noto-sans text-xs text-kuro-soft/60 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Technical & Computational Methods */}
          <div className="card-washi card-washi-about p-6 relative overflow-hidden">
            <div className="glow-bar absolute left-0 top-0 bottom-0" />
            <div className="pl-4">
              <h4 className="font-noto-sans text-sm font-bold text-kuro-soft mb-4">{c.skills.technical.heading}</h4>
              <div className="space-y-3">
                {c.skills.technical.paragraphs.map((p, i) => (
                  <p key={i} className="font-noto-sans text-xs text-kuro-soft/60 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <SectionDivider />

        {/* Languages */}
        <div>
          <h3 className="font-noto-sans text-xs text-kin tracking-[0.25em] uppercase mb-6 font-semibold">{c.languages.heading}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {c.languages.items.map((lang, i) => (
              <div key={i} className="card-washi card-washi-about p-4 text-center relative overflow-hidden">
                <div className="glow-bar absolute left-0 top-0 bottom-0" />
                <div className="font-noto-sans text-sm font-semibold text-kuro-soft">{lang}</div>
              </div>
            ))}
          </div>
        </div>

        <SectionDivider />

        {/* Roles & Leadership */}
        <div>
          <h3 className="font-noto-sans text-xs text-kin tracking-[0.25em] uppercase mb-6 font-semibold">{c.roles.heading}</h3>
          <div className="card-washi card-washi-about p-6 relative overflow-hidden">
            <div className="glow-bar absolute left-0 top-0 bottom-0" />
            <div className="pl-4">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 mb-1">
                <h4 className="font-noto-sans text-sm font-semibold text-kuro-soft">{c.roles.institution}</h4>
                <span className="font-noto-sans text-xs text-kuro-soft/50 shrink-0 font-medium">{c.roles.location}</span>
              </div>
              <p className="font-noto-sans text-sm text-kuro-soft/65">{c.roles.title}</p>
              <p className="font-noto-sans text-xs text-kuro-soft/60 mt-1 leading-relaxed">
                {c.roles.description}
              </p>
            </div>
          </div>
        </div>

        <SectionDivider />

        {/* Affiliations */}
        <div>
          <h3 className="font-noto-sans text-xs text-kin tracking-[0.25em] uppercase mb-6 font-semibold">{c.affiliations.heading}</h3>
          <div className="space-y-3">
            {c.affiliations.items.map((aff, i) => (
              <div key={i} className="card-washi card-washi-about p-5 relative overflow-hidden">
                <div className="glow-bar absolute left-0 top-0 bottom-0" />
                <div className="pl-4">
                  <h4 className="font-noto-sans text-sm font-semibold text-kuro-soft">{aff.institution}</h4>
                  <p className="font-noto-sans text-xs text-kuro-soft/60 mt-1">{aff.detail}</p>
                  {aff.role && <p className="font-noto-sans text-xs text-kuro-soft/45 mt-0.5 italic">{aff.role}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <SectionDivider />

        {/* Awards */}
        <div>
          <h3 className="font-noto-sans text-xs text-kin tracking-[0.25em] uppercase mb-6 font-semibold">{c.awards.heading}</h3>
          <div className="space-y-3">
            {c.awards.items.map((award, i) => (
              <div key={i} className="card-washi card-washi-about p-5 relative overflow-hidden">
                <div className="glow-bar absolute left-0 top-0 bottom-0" />
                <div className="pl-4">
                  <h4 className="font-noto-sans text-sm font-semibold text-kuro-soft">{award.title}</h4>
                  <p className="font-noto-sans text-xs text-kuro-soft/60 mt-1">{award.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <SectionDivider />

        {/* Arts Background */}
        <div>
          <h3 className="font-noto-sans text-xs text-kin tracking-[0.25em] uppercase mb-6 font-semibold">{c.arts.heading}</h3>
          <div className="card-washi card-washi-about p-6 relative overflow-hidden">
            <div className="glow-bar absolute left-0 top-0 bottom-0" />
            <div className="pl-4 space-y-4">
              {c.arts.paragraphs.map((p, i) => (
                <p key={i} className="font-noto-sans text-sm text-kuro-soft/70 leading-relaxed">
                  {p}
                </p>
              ))}
              <div className="flex flex-wrap gap-2 mt-2">
                <Link href="/platforms/mythera" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-kuro-soft/80 border border-kin/40 font-noto-sans text-xs text-kin tracking-widest uppercase font-medium hover:bg-tsubaki-rose/20 hover:border-tsubaki-rose/60 hover:text-tsubaki-blush transition-all">
                  {c.arts.mytheraLabel}
                </Link>
                <Link href="/projects/art" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-kuro-soft/80 border border-kin/40 font-noto-sans text-xs text-kin tracking-widest uppercase font-medium hover:bg-tsubaki-rose/20 hover:border-tsubaki-rose/60 hover:text-tsubaki-blush transition-all">
                  {c.arts.artPracticeLabel}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <SectionDivider />

        {/* Interests */}
        <div>
          <h3 className="font-noto-sans text-xs text-kin tracking-[0.25em] uppercase mb-6 font-semibold">{c.interests.heading}</h3>
          <div className="card-washi card-washi-about p-6 relative overflow-hidden">
            <div className="glow-bar absolute left-0 top-0 bottom-0" />
            <div className="pl-4">
              <p className="font-noto-sans text-sm text-kuro-soft/70 leading-relaxed">
                {c.interests.items.join(' · ')}
              </p>
            </div>
          </div>
        </div>

        <SectionDivider />

        {/* Connect */}
        <div>
          <h3 className="font-noto-sans text-xs text-kin tracking-[0.25em] uppercase mb-6 font-semibold">{c.connect.heading}</h3>
          <PhotoFrame
            src="/images/about gallery-1.jpg"
            alt={c.connect.galleryAlt}
            width={600}
            height={400}
            className="w-full max-w-md h-auto mb-5"
          />
          <div className="flex flex-wrap items-center gap-2">
            <a href="https://www.instagram.com/rskyex/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-2 rounded-sm bg-kuro-soft/80 border border-kin/40 font-noto-sans text-xs text-kin hover:bg-tsubaki-rose/20 hover:border-tsubaki-rose/60 hover:text-tsubaki-blush transition-all font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              {c.connect.instagramLabel}
            </a>
            <a href="https://linkedin.com/in/rskyex" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-2 rounded-sm bg-kuro-soft/80 border border-kin/40 font-noto-sans text-xs text-kin hover:bg-tsubaki-rose/20 hover:border-tsubaki-rose/60 hover:text-tsubaki-blush transition-all font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              {c.connect.linkedinLabel}
            </a>
            <a href="mailto:risakyng@gmail.com" className="inline-flex items-center gap-1.5 px-3 py-2 rounded-sm bg-kuro-soft/80 border border-kin/40 font-noto-sans text-xs text-kin hover:bg-tsubaki-rose/20 hover:border-tsubaki-rose/60 hover:text-tsubaki-blush transition-all font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              {c.connect.contactLabel}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
