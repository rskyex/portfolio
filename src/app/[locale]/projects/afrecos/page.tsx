import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import SectionHeader from '@/components/SectionHeader';
import PhotoFrame from '@/components/PhotoFrame';
import Tag from '@/components/Tag';
import { type Locale } from '@/i18n/config';
import { buildAlternates } from '@/i18n/metadata';
import { getAfrecosContent } from '@/content/projects-afrecos';

export function generateMetadata(): Metadata {
  return { alternates: buildAlternates('/projects/afrecos') };
}

export default async function AfrecosProjectPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = getAfrecosContent(locale as Locale);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <Link href="/projects" className="font-noto-sans text-xs text-kin/50 hover:text-kin-light transition-colors tracking-wide mb-8 inline-block">
        {c.backLabel}
      </Link>

      <SectionHeader kanji={c.header.kanji} english={c.header.english} subtitle={c.header.subtitle} />

      <div className="mt-8 space-y-8">
        <PhotoFrame
          src={c.hero.src}
          alt={c.hero.alt}
          width={800}
          height={400}
          className="w-full h-64 md:h-80"
          objectFit="cover"
        />

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
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">{c.keyFacts.heading}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {c.keyFacts.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-kaisei text-2xl text-kin/50">{stat.value}</div>
                <div className="font-noto-sans text-xs text-shiro/70 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-6">{c.gallery.heading}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {c.gallery.images.map((img, i) => (
              <PhotoFrame
                key={i}
                src={img.src}
                alt={img.alt}
                width={400}
                height={300}
                className="w-full h-40 md:h-48"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
