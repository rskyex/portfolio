import Link from 'next/link';
import PhotoFrame from './PhotoFrame';

interface ProjectCardProps {
  href: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  period?: string;
  role?: string;
}

export default function ProjectCard({ href, title, description, image, imageAlt, period, role }: ProjectCardProps) {
  return (
    <Link href={href} className="block group">
      <div className="panel card-hover overflow-hidden relative">
        {/* Neon left glow bar */}
        <div className="glow-bar absolute left-0 top-0 bottom-0 z-10" />

        {image && (
          <div className="h-48 overflow-hidden relative">
            <PhotoFrame src={image} alt={imageAlt || title} width={600} height={300} className="h-full" />
          </div>
        )}
        <div className="p-6 relative pl-5">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-noto-sans text-base font-medium text-shiro/90 group-hover:text-kin-light transition-colors">
              {title}
            </h3>
            {period && (
              <span className="shrink-0 font-noto-sans text-xs text-shiro/20 tracking-wider">{period}</span>
            )}
          </div>
          {role && (
            <p className="font-noto-sans text-xs text-tsubaki-blush/50 mb-2 tracking-wider">{role}</p>
          )}
          <p className="font-noto-sans text-sm text-shiro/35 leading-relaxed">{description}</p>
        </div>
      </div>
    </Link>
  );
}
