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
      <div className="lacquer-panel rounded-sm card-hover overflow-hidden tsubaki-corner relative transition-all">
        {/* Vermillion left accent */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-vermillion/30 via-tsubaki-blush/15 to-gold/15 group-hover:from-vermillion/60 group-hover:to-gold/30 transition-all z-10" />

        {image && (
          <div className="h-48 overflow-hidden relative">
            <PhotoFrame src={image} alt={imageAlt || title} width={600} height={300} className="h-full" />
            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/40 to-transparent pointer-events-none" />
          </div>
        )}
        <div className="p-6 relative">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-noto-sans text-base font-medium text-washi/90 group-hover:text-washi transition-colors">
              {title}
            </h3>
            {period && (
              <span className="shrink-0 font-noto-sans text-xs text-washi/25 tracking-wide">{period}</span>
            )}
          </div>
          {role && (
            <p className="font-noto-sans text-xs text-vermillion/50 mb-2 tracking-wide">{role}</p>
          )}
          <p className="font-noto-sans text-sm text-washi/40 leading-relaxed">{description}</p>
        </div>
      </div>
    </Link>
  );
}
