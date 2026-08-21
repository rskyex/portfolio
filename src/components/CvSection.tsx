import SectionDivider from '@/components/SectionDivider';
import type { Locale } from '@/lib/locale';
import { getCv } from '@/lib/content';

/* CV timeline (Education / Experience) driven by src/data/cv.json. Rendered
   on /about (EN) and on the JA landing page; entries in the data file are
   kept newest-first. */

const LABELS: Record<Locale, { education: string; experience: string }> = {
  en: { education: 'Education', experience: 'Experience' },
  ja: { education: '学歴', experience: '職歴・所属' },
};

interface CvSectionProps {
  locale: Locale;
  /** 'about' separates the subsections with the tsubaki divider (About-page
   *  rhythm); 'landing' uses plain spacing inside a single landing section. */
  variant?: 'about' | 'landing';
}

function SubsectionHeading({ children }: { children: string }) {
  return (
    <h3 className="font-noto-sans text-xs text-kin tracking-[0.25em] uppercase mb-6 font-semibold">
      {children}
    </h3>
  );
}

export default function CvSection({ locale, variant = 'about' }: CvSectionProps) {
  const cv = getCv();
  const labels = LABELS[locale];
  const separator = variant === 'about' ? <SectionDivider /> : <div className="h-12" />;

  return (
    <>
      {/* Education */}
      <div>
        <SubsectionHeading>{labels.education}</SubsectionHeading>
        <div className="space-y-4">
          {cv.education.map((edu, i) => (
            <div key={i} className="card-washi card-washi-about p-6 relative overflow-hidden">
              <div className="glow-bar absolute left-0 top-0 bottom-0" />
              <div className="pl-4">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 mb-1">
                  <h4 className="font-noto-sans text-sm font-semibold text-kuro-soft">
                    {edu.institution[locale]}
                  </h4>
                  {edu.period[locale] && (
                    <span className="font-noto-sans text-xs text-kuro-soft/50 shrink-0 font-medium">
                      {edu.period[locale]}
                    </span>
                  )}
                </div>
                <p className="font-noto-sans text-sm text-kuro-soft/65">{edu.degree[locale]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {separator}

      {/* Experience */}
      <div>
        <SubsectionHeading>{labels.experience}</SubsectionHeading>
        <div className="space-y-4">
          {cv.experience.map((exp, i) => (
            <div key={i} className="card-washi card-washi-about p-6 relative overflow-hidden">
              <div className="glow-bar absolute left-0 top-0 bottom-0" />
              <div className="pl-4">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 mb-1">
                  <h4 className="font-noto-sans text-sm font-semibold text-kuro-soft">
                    {exp.organisation[locale]}
                  </h4>
                  {/* Period may be blank while unconfirmed — fall back to the
                      location alone rather than rendering a stray separator. */}
                  {(exp.period[locale] || exp.location) && (
                    <span className="font-noto-sans text-xs text-kuro-soft/50 shrink-0 font-medium">
                      {[exp.period[locale], exp.location?.[locale]]
                        .filter(Boolean)
                        .join(' · ')}
                    </span>
                  )}
                </div>
                <p className="font-noto-sans text-sm text-kuro-soft/65">{exp.role[locale]}</p>
                {exp.note && (
                  <p className="font-noto-sans text-xs text-kuro-soft/45 mt-1 leading-relaxed">
                    {exp.note[locale]}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
