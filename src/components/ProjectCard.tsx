import { Link } from '@/i18n/navigation';
import PhotoFrame from './PhotoFrame';

interface ProjectCardProps {
  href: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  period?: string;
  role?: string;
  badge?: string;
}

export default function ProjectCard({ href, title, description, image, imageAlt, period, role, badge }: ProjectCardProps) {
  return (
    <Link href={href} className="block group min-w-0">
      <div className="card-washi card-washi-project card-hover overflow-hidden relative">
        {/* Neon left glow bar */}
        <div className="glow-bar absolute left-0 top-0 bottom-0 z-10" />

        {image && (
          <div className="h-48 overflow-hidden relative">
            <PhotoFrame src={image} alt={imageAlt || title} width={600} height={300} className="h-full" objectFit="cover" />
          </div>
        )}
        <div className="p-6 relative pl-5">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-cormorant text-lg font-semibold text-kuro-soft group-hover:text-shu-deep transition-colors">
              {title}
            </h3>
            {period && (
              <span className="shrink-0 font-inter text-xs text-kuro-soft/45 tracking-wider font-medium">{period}</span>
            )}
          </div>
          {role && (
            <p className="font-inter text-xs text-tsubaki-deep font-medium mb-2 tracking-wider">{role}</p>
          )}
          <p className="font-inter text-sm text-kuro-soft/65 leading-relaxed">{description}</p>
          {badge && (
            <span className="inline-block mt-3 px-2.5 py-0.5 text-xs font-inter font-medium tracking-wider rounded border bg-shu/10 text-shu-deep border-shu/25 shadow-[0_0_8px_rgba(224,60,49,0.08)]">
              {badge}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
