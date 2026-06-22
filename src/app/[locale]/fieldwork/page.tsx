import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import SectionHeader from '@/components/SectionHeader';
import SectionDivider from '@/components/SectionDivider';
import ProjectCard from '@/components/ProjectCard';
import SpeakingCard from '@/components/SpeakingCard';
import { type Locale } from '@/i18n/config';
import { buildAlternates } from '@/i18n/metadata';
import { getFieldworkContent } from '@/content/fieldwork';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const c = getFieldworkContent(locale as Locale);
  return {
    title: c.meta.title,
    alternates: buildAlternates('/fieldwork'),
  };
}

export default async function FieldworkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = getFieldworkContent(locale as Locale);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
      <SectionHeader
        kanji={c.header.kanji}
        english={c.header.english}
        subtitle={c.header.subtitle}
      />

      <div className="mt-6 mb-12">
        <p className="font-inter text-sm text-shiro/90 leading-relaxed max-w-2xl">
          {c.intro}
        </p>
      </div>

      {/* Fieldwork & Leadership */}
      <div className="grid md:grid-cols-2 gap-8">
        {c.projects.map(project => (
          <ProjectCard
            key={project.href}
            href={project.href}
            title={project.title}
            description={project.description}
            badge={project.badge}
            image={project.image}
            imageAlt={project.imageAlt}
            period={project.period}
            role={project.role}
          />
        ))}
      </div>

      <SectionDivider />

      {/* Speaking & Policy Engagement */}
      <div className="mt-10 mb-8">
        <h3 className="font-inter text-xs text-kin tracking-[0.25em] uppercase font-semibold">{c.speakingSection.heading}</h3>
        <p className="font-inter text-sm text-shiro/80 leading-relaxed max-w-2xl mt-2">
          {c.speakingSection.intro}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {c.speaking.map(item => (
          <SpeakingCard
            key={item.title}
            title={item.title}
            context={item.context}
            type={item.type}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}
