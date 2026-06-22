import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import SectionHeader from '@/components/SectionHeader';
import Tag from '@/components/Tag';
import { type Locale } from '@/i18n/config';
import { buildAlternates } from '@/i18n/metadata';
import { getLunarContent } from '@/content/research-lunar';

export function generateMetadata(): Metadata {
  return { alternates: buildAlternates('/research/lunar') };
}

export default async function LunarResearchPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = getLunarContent(locale as Locale);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <Link href="/research" className="font-noto-sans text-xs text-kin/50 hover:text-kin-light transition-colors tracking-wide mb-8 inline-block">
        {c.backToResearch}
      </Link>

      <SectionHeader kanji={c.header.kanji} english={c.header.english} />

      <div className="mt-4 mb-8">
        <span className="px-2 py-0.5 text-xs font-noto-sans rounded-sm border bg-tsubaki-rose/6 text-tsubaki-blush/70 border-tsubaki-rose/12">
          {c.status}
        </span>
      </div>

      <div className="space-y-8">
        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">{c.abstract.heading}</h3>
          <p className="font-noto-sans text-sm text-shiro/90 leading-relaxed mb-4">
            {c.abstract.paragraphs[0]}
          </p>
          <p className="font-noto-sans text-sm text-shiro/90 leading-relaxed mb-4">
            {c.abstract.paragraphs[1]}
          </p>
          <p className="font-noto-sans text-sm text-shiro/90 leading-relaxed">
            {c.abstract.paragraphs[2]}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {c.tags.map(tag => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">{c.methodology.heading}</h3>
          <div className="space-y-3">
            {c.methodology.steps.map((step, i) => (
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
      </div>
    </div>
  );
}
