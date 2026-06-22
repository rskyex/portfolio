import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import SectionHeader from '@/components/SectionHeader';
import PhotoFrame from '@/components/PhotoFrame';
import Tag from '@/components/Tag';
import Image from 'next/image';
import { type Locale } from '@/i18n/config';
import { buildAlternates } from '@/i18n/metadata';
import { getMytheraContent } from '@/content/platforms-mythera';

export function generateMetadata(): Metadata {
  return { alternates: buildAlternates('/platforms/mythera') };
}

export default async function MytheraPlatformPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = getMytheraContent(locale as Locale);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <Link href={c.backHref} className="font-noto-sans text-xs text-kin/50 hover:text-kin-light transition-colors tracking-wide mb-8 inline-block">
        {c.backLabel}
      </Link>

      <SectionHeader kanji={c.header.kanji} english={c.header.english} subtitle={c.header.subtitle} />

      <div className="mt-8 space-y-8">
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 text-xs font-noto-sans bg-kin/10 text-kin-light border border-kin/20 rounded-sm">
            {c.status}
          </span>
          <a
            href={c.visitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-noto-sans text-xs text-kin/60 hover:text-kin-light transition-colors tracking-wide"
          >
            {c.visitLabel}
          </a>
        </div>

        <PhotoFrame
          src={c.image.src}
          alt={c.image.alt}
          width={800}
          height={450}
          className="w-full aspect-[1200/630]"
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

        {/* Sub-projects */}
        {c.subProjects.map((project) => {
          const content = (
            <div className={`panel rounded-sm p-8 space-y-4${project.href ? ' group hover:border-kin/20 transition-colors' : ''}`}>
              {project.image && (
                <div className="relative w-full h-40 overflow-hidden rounded-sm -mt-2 mb-2">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  />
                </div>
              )}
              <h3 className="font-noto-sans text-base font-medium text-shiro/90">{project.title}</h3>
              <p className="font-noto-sans text-sm text-shiro/90 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>
            </div>
          );
          return project.href ? (
            <Link key={project.title} href={project.href} className="block">
              {content}
            </Link>
          ) : (
            <div key={project.title}>{content}</div>
          );
        })}

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">{c.techStack.heading}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {c.techStack.items.map(tech => (
              <span key={tech} className="font-noto-sans text-sm text-shiro/90 text-center py-2 border border-shiro/[0.05] rounded-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
