import { Link } from '@/i18n/navigation';
import Image from 'next/image';

interface PlatformCardProps {
  href: string;
  title: string;
  description: string;
  status: string;
  liveUrl?: string;
  tags?: string[];
  image?: string;
  coreQuestion?: string;
}

export default function PlatformCard({ href, title, description, status, liveUrl, tags, image, coreQuestion }: PlatformCardProps) {
  return (
    <Link href={href} className="block group">
      <div className="card-washi card-washi-platform card-hover relative overflow-hidden">
        {/* Neon left glow bar */}
        <div className="glow-bar absolute left-0 top-0 bottom-0 z-10" />

        {/* Hero image area */}
        {image && (
          <div className="relative w-full aspect-[1200/630] overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain group-hover:scale-[1.03] transition-transform duration-700"
            />
          </div>
        )}

        <div className="relative pl-4 p-6 md:p-8">
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-cormorant text-lg md:text-xl font-semibold text-kuro-soft pr-4 group-hover:text-shu-deep transition-colors">{title}</h3>
            <span className={`shrink-0 px-2.5 py-0.5 text-xs font-inter font-medium tracking-wider rounded border ${
              status === 'Live'
                ? 'bg-shu/10 text-shu-deep border-shu/25 shadow-[0_0_8px_rgba(224,60,49,0.08)]'
                : 'bg-kin/10 text-kin-deep border-kin/20 shadow-[0_0_8px_rgba(212,160,23,0.06)]'
            }`}>
              {status}
            </span>
          </div>

          <p className="font-inter text-sm text-kuro-soft/70 leading-relaxed mb-4">{description}</p>

          {coreQuestion && (
            <p className="font-inter text-sm text-kuro-soft/55 leading-relaxed mb-4 italic">{coreQuestion}</p>
          )}

          {tags && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map(tag => (
                <span key={tag} className="text-xs font-inter text-kuro-soft/50 border border-kuro-soft/10 bg-kuro/[0.03] px-2 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {liveUrl && (
            <span className="font-inter text-xs text-kin-deep/70 group-hover:text-shu tracking-widest transition-colors uppercase font-medium">
              View platform →
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
