import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import SectionHeader from '@/components/SectionHeader';
import ProjectCard from '@/components/ProjectCard';
import { type Locale } from '@/i18n/config';
import { buildAlternates } from '@/i18n/metadata';
import { getProjectsContent } from '@/content/projects';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const c = getProjectsContent(locale as Locale);
  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: buildAlternates('/projects'),
  };
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = getProjectsContent(locale as Locale);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
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

      <div className="grid md:grid-cols-2 gap-8">
        {c.cards.map(card => (
          <ProjectCard key={card.href} {...card} />
        ))}
      </div>
    </div>
  );
}
