import Link from 'next/link';

interface PlatformCardProps {
  href: string;
  title: string;
  description: string;
  status: string;
  liveUrl?: string;
  tags?: string[];
}

export default function PlatformCard({ href, title, description, status, liveUrl, tags }: PlatformCardProps) {
  return (
    <Link href={href} className="block group">
      <div className="lacquer-panel rounded-sm card-hover tsubaki-corner p-6 md:p-8 relative overflow-hidden transition-all">
        {/* Vermillion left accent */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-vermillion/40 via-tsubaki-blush/20 to-gold/20 group-hover:from-vermillion/70 group-hover:via-tsubaki-blush/40 group-hover:to-gold/40 transition-all" />

        {/* Subtle lacquer sheen */}
        <div className="absolute inset-0 bg-lacquer-sheen pointer-events-none" />

        <div className="relative">
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-noto-sans text-base md:text-lg font-medium text-washi/90 pr-4 group-hover:text-washi transition-colors">{title}</h3>
            <span className={`shrink-0 px-2.5 py-0.5 text-xs font-noto-sans tracking-wide rounded-sm border ${
              status === 'Live'
                ? 'bg-vermillion/8 text-vermillion/80 border-vermillion/20'
                : 'bg-gold/8 text-gold/70 border-gold/15'
            }`}>
              {status}
            </span>
          </div>

          <p className="font-noto-sans text-sm text-washi/45 leading-relaxed mb-4">{description}</p>

          {tags && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map(tag => (
                <span key={tag} className="text-xs font-noto-sans text-washi/30 border border-washi/[0.06] px-2 py-0.5 rounded-sm">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {liveUrl && (
            <span className="font-noto-sans text-xs text-gold/40 group-hover:text-gold/70 tracking-wider transition-colors uppercase">
              View platform →
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
