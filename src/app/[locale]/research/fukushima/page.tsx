import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import SectionHeader from '@/components/SectionHeader';
import PhotoFrame from '@/components/PhotoFrame';
import Tag from '@/components/Tag';
import { type Locale } from '@/i18n/config';
import { buildAlternates } from '@/i18n/metadata';
import { getFukushimaContent } from '@/content/research-fukushima';

export function generateMetadata(): Metadata {
  return { alternates: buildAlternates('/research/fukushima') };
}

export default async function FukushimaResearchPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = getFukushimaContent(locale as Locale);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <Link href="/research" className="font-noto-sans text-xs text-kin/50 hover:text-kin-light transition-colors tracking-wide mb-8 inline-block">
        {c.backToResearch}
      </Link>

      <SectionHeader kanji={c.header.kanji} english={c.header.english} />

      <div className="mt-4 mb-8">
        <span className="px-2 py-0.5 text-xs font-noto-sans rounded-sm border bg-shiro/[0.03] text-shiro/75 border-shiro/[0.06]">
          {c.status}
        </span>
      </div>

      <div className="space-y-8">
        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">{c.overview.heading}</h3>
          <p className="font-noto-sans text-sm text-shiro/90 leading-relaxed mb-4">
            {c.overview.paragraphs[0]}
          </p>
          <p className="font-noto-sans text-sm text-shiro/90 leading-relaxed">
            {c.overview.paragraphs[1]}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {c.tags.map(tag => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">{c.fieldwork.heading}</h3>
          <div className="space-y-3">
            {c.fieldwork.steps.map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="font-kaisei text-lg text-kin/50">{step.glyph}</span>
                <p className="font-noto-sans text-sm text-shiro/90">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">{c.keyThemes.heading}</h3>
          <ul className="space-y-2">
            {c.keyThemes.items.map((theme, i) => (
              <li key={i} className="font-noto-sans text-sm text-shiro/90 leading-relaxed flex items-start gap-2">
                <span className="text-shu/30 mt-1">—</span>
                {theme}
              </li>
            ))}
          </ul>
        </div>

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-6">{c.researchOutput.heading}</h3>
          <div className="space-y-5">
            {[1, 2, 3, 4, 5].map((n) => (
              <div key={n} className="border border-shiro/[0.06] rounded-sm overflow-hidden">
                <img
                  src={`/images/fukushima%20DT%20slide%20(${n}).jpg`}
                  alt={c.researchOutput.slideAlt(n)}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-6">{c.gallery.heading}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { n: 1, ext: 'jpg' },
              { n: 2, ext: 'jpg' },
              { n: 3, ext: 'JPG' },
              { n: 4, ext: 'jpg' },
              { n: 5, ext: 'jpg' },
              { n: 6, ext: 'jpg' },
              { n: 7, ext: 'jpg' },
              { n: 8, ext: 'jpg' },
              { n: 10, ext: 'jpg' },
            ].map(({ n, ext }, i) => (
              <PhotoFrame
                key={i}
                src={`/images/fukushima-${n}.${ext}`}
                alt={c.gallery.photoAlt(n)}
                width={400}
                height={300}
                className="w-full h-40 md:h-48"
              />
            ))}
            <PhotoFrame
              src="/images/peace-2.jpg"
              alt={c.gallery.peacePhotoAlt}
              width={400}
              height={300}
              className="w-full h-40 md:h-48"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
