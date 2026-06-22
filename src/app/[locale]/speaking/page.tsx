import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import SectionHeader from '@/components/SectionHeader';
import SpeakingCard from '@/components/SpeakingCard';
import { type Locale } from '@/i18n/config';
import { buildAlternates } from '@/i18n/metadata';
import { getSpeakingContent } from '@/content/speaking';

export function generateMetadata(): Metadata {
  return { alternates: buildAlternates('/speaking') };
}

export default async function SpeakingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = getSpeakingContent(locale as Locale);

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

      <div className="grid md:grid-cols-2 gap-6">
        {c.events.map(event => (
          <SpeakingCard
            key={event.title}
            title={event.title}
            context={event.context}
            type={event.type}
            description={event.description}
            image={event.image}
          />
        ))}
      </div>
    </div>
  );
}
