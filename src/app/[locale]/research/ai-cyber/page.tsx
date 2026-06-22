import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import SectionHeader from '@/components/SectionHeader';
import Tag from '@/components/Tag';
import { type Locale } from '@/i18n/config';
import { buildAlternates } from '@/i18n/metadata';
import { getAICyberContent } from '@/content/research-ai-cyber';

export function generateMetadata(): Metadata {
  return { alternates: buildAlternates('/research/ai-cyber') };
}

export default async function AICyberResearchPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = getAICyberContent(locale as Locale);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <Link href="/research" className="font-noto-sans text-xs text-kin/50 hover:text-kin-light transition-colors tracking-wide mb-8 inline-block">
        {c.backToResearch}
      </Link>

      <SectionHeader kanji={c.header.kanji} english={c.header.english} />

      <div className="mt-4 mb-8">
        <span className="px-2.5 py-0.5 text-xs font-noto-sans rounded border bg-shiro/[0.03] text-shiro/75 border-shiro/[0.06] tracking-wider">
          {c.status}
        </span>
      </div>

      <div className="space-y-8">
        <div className="panel p-8 relative overflow-hidden">
          <div className="glow-bar absolute left-0 top-0 bottom-0" />
          <div className="pl-4">
            <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">{c.overview.heading}</h3>
            <p className="font-noto-sans text-sm text-shiro/90 leading-relaxed mb-4">
              {c.overview.paragraphs[0]}
            </p>
            <p className="font-noto-sans text-sm text-shiro/90 leading-relaxed">
              {c.overview.paragraphs[1]}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {c.tags.map(tag => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        <div className="panel p-8 relative overflow-hidden">
          <div className="glow-bar absolute left-0 top-0 bottom-0" />
          <div className="pl-4">
            <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">{c.keyQuestions.heading}</h3>
            <ul className="space-y-2">
              {c.keyQuestions.items.map((q, i) => (
                <li key={i} className="font-noto-sans text-sm text-shiro/90 leading-relaxed flex items-start gap-2">
                  <span className="text-shu/30 mt-1">—</span>
                  {q}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
