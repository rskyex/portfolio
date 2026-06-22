import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import SectionHeader from '@/components/SectionHeader';
import PhotoFrame from '@/components/PhotoFrame';
import { type Locale } from '@/i18n/config';
import { buildAlternates } from '@/i18n/metadata';
import { getArtContent } from '@/content/projects-art';

export function generateMetadata(): Metadata {
  return { alternates: buildAlternates('/projects/art') };
}

export default async function ArtProjectPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = getArtContent(locale as Locale);
  const ex = c.exhibitionHistory;

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
          height={500}
          className="w-full h-72 md:h-96"
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

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">{ex.heading}</h3>
          <div className="flex flex-wrap gap-3 mb-8">
            {ex.cities.map((city, i) => (
              <span key={i} className="font-noto-sans text-sm text-shiro/90 py-1.5 px-3 border border-shiro/[0.08] rounded-sm">{city}</span>
            ))}
          </div>

          <div className="space-y-6">
            {/* Monster Exhibition 2021 - Tokyo */}
            <div className="border-l-2 border-kin/30 pl-5">
              <div className="grid grid-cols-2 gap-3 mb-4">
                {ex.monster2021.images.map((img, i) => (
                  <PhotoFrame
                    key={i}
                    src={img.src}
                    alt={img.alt}
                    width={400}
                    height={300}
                    className="w-full h-36 md:h-44"
                  />
                ))}
              </div>
              <h4 className="font-noto-sans text-sm font-medium text-shiro/80 mb-1">{ex.monster2021.title}</h4>
              <p className="font-noto-sans text-xs text-kin/60 mb-2">{ex.monster2021.city}</p>
              <div className="font-noto-sans text-xs text-shiro/80 leading-relaxed space-y-1">
                {ex.monster2021.lines.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
                <p>
                  {ex.monster2021.webLabel}{' '}
                  <a href={ex.monster2021.webHref} target="_blank" rel="noopener noreferrer" className="text-kin/60 hover:text-kin transition-colors underline">
                    {ex.monster2021.webText}
                  </a>
                </p>
              </div>
            </div>

            {/* Boomer Gallery - London */}
            <div className="border-l-2 border-kin/30 pl-5">
              <div className="grid grid-cols-2 gap-3 mb-4">
                {ex.boomer.images.map((img, i) => (
                  <PhotoFrame
                    key={i}
                    src={img.src}
                    alt={img.alt}
                    width={400}
                    height={300}
                    className="w-full h-36 md:h-44"
                  />
                ))}
              </div>
              <h4 className="font-noto-sans text-sm font-medium text-shiro/80 mb-1">{ex.boomer.title}</h4>
              <p className="font-noto-sans text-xs text-kin/60 mb-2">{ex.boomer.city}</p>
              <div className="font-noto-sans text-xs text-shiro/80 leading-relaxed space-y-1">
                {ex.boomer.lines.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>

            {/* Monster Exhibition - San Francisco */}
            <div className="border-l-2 border-kin/30 pl-5">
              <div className="grid grid-cols-2 gap-3 mb-4">
                {ex.monsterSf.images.map((img, i) => (
                  <PhotoFrame
                    key={i}
                    src={img.src}
                    alt={img.alt}
                    width={400}
                    height={300}
                    className="w-full h-36 md:h-44"
                  />
                ))}
              </div>
              <h4 className="font-noto-sans text-sm font-medium text-shiro/80 mb-1">
                <a href={ex.monsterSf.titleHref} target="_blank" rel="noopener noreferrer" className="hover:text-kin transition-colors">{ex.monsterSf.titleLinkText}</a>
              </h4>
              <p className="font-noto-sans text-xs text-kin/60 mb-2">{ex.monsterSf.city}</p>
              <div className="font-noto-sans text-xs text-shiro/80 leading-relaxed space-y-1">
                {ex.monsterSf.lines.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>

            {/* ART ON LOOP - London & Athens (Jan 2024) */}
            <div className="border-l-2 border-kin/30 pl-5">
              <div className="grid grid-cols-2 gap-3 mb-4">
                {ex.artOnLoopJan.images.map((img, i) => (
                  <PhotoFrame
                    key={i}
                    src={img.src}
                    alt={img.alt}
                    width={400}
                    height={300}
                    className="w-full h-36 md:h-44"
                  />
                ))}
              </div>
              <h4 className="font-noto-sans text-sm font-medium text-shiro/80 mb-1">{ex.artOnLoopJan.title}</h4>
              <p className="font-noto-sans text-xs text-kin/60 mb-2">{ex.artOnLoopJan.city}</p>
              <div className="font-noto-sans text-xs text-shiro/80 leading-relaxed space-y-1">
                {ex.artOnLoopJan.lines.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
                <p>
                  <a href={ex.artOnLoopJan.linkHref} target="_blank" rel="noopener noreferrer" className="text-kin/60 hover:text-kin transition-colors underline">
                    {ex.artOnLoopJan.linkText}
                  </a>
                </p>
              </div>
            </div>

            {/* New York Cinema Screening */}
            <div className="border-l-2 border-kin/30 pl-5">
              <PhotoFrame
                src={ex.nyScreening.image.src}
                alt={ex.nyScreening.image.alt}
                width={800}
                height={500}
                className="w-full h-48 md:h-64 mb-4"
              />
              <h4 className="font-noto-sans text-sm font-medium text-shiro/80 mb-1">{ex.nyScreening.title}</h4>
              <p className="font-noto-sans text-xs text-kin/60 mb-2">{ex.nyScreening.city}</p>
              <div className="font-noto-sans text-xs text-shiro/80 leading-relaxed space-y-1">
                {ex.nyScreening.lines.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>

            {/* ART ON LOOP - London & Athens (Sep 2024) */}
            <div className="border-l-2 border-kin/30 pl-5">
              <PhotoFrame
                src={ex.artOnLoopSep.image.src}
                alt={ex.artOnLoopSep.image.alt}
                width={800}
                height={500}
                className="w-full h-48 md:h-64 mb-4"
              />
              <h4 className="font-noto-sans text-sm font-medium text-shiro/80 mb-1">{ex.artOnLoopSep.title}</h4>
              <p className="font-noto-sans text-xs text-kin/60 mb-2">{ex.artOnLoopSep.city}</p>
              <div className="font-noto-sans text-xs text-shiro/80 leading-relaxed space-y-1">
                {ex.artOnLoopSep.lines.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Press & Media */}
        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">{c.press.heading}</h3>
          <div className="space-y-4">
            {c.press.items.map((item, i) => (
              <div key={i} className="border-l-2 border-kin/30 pl-5">
                <h4 className="font-noto-sans text-sm font-medium text-shiro/80 mb-1">{item.title}</h4>
                {item.detail && (
                  <p className="font-noto-sans text-xs text-shiro/80 leading-relaxed">
                    {item.detail}
                  </p>
                )}
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="font-noto-sans text-xs text-kin/60 hover:text-kin transition-colors underline">
                  {item.linkLabel}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">{c.themes.heading}</h3>
          <ul className="space-y-2">
            {c.themes.items.map((theme, i) => (
              <li key={i} className="font-noto-sans text-sm text-shiro/90 leading-relaxed flex items-start gap-2">
                <span className="text-kin/50 mt-1">—</span>
                {theme}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
