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
      <div className="bg-parchment/95 rounded-sm card-hover overflow-hidden vermillion-bar">
        {image && (
          <div className="h-48 overflow-hidden">
            <PhotoFrame src={image} alt={imageAlt || title} width={600} height={300} className="h-full" />
          </div>
        )}
        <div className="p-6">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-noto-sans text-base font-medium text-ink group-hover:text-vermillion-dark transition-colors">
              {title}
            </h3>
            {period && (
              <span className="shrink-0 font-noto-sans text-xs text-warm-gray">{period}</span>
            )}
          </div>
          {role && (
            <p className="font-noto-sans text-xs text-vermillion/70 mb-2">{role}</p>
          )}
          <p className="font-noto-sans text-sm text-warm-brown leading-relaxed">{description}</p>
        </div>
      </div>
    </Link>
  );
}
