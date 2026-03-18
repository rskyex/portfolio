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
    <Link href={href} className="block">
      <div className="bg-parchment/95 rounded-sm card-hover p-6 md:p-8 relative overflow-hidden group">
        {/* Vermillion left accent */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-vermillion/40 group-hover:bg-vermillion/70 transition-colors" />

        <div className="flex items-start justify-between mb-3">
          <h3 className="font-noto-sans text-base md:text-lg font-medium text-ink pr-4">{title}</h3>
          <span className={`shrink-0 px-2 py-0.5 text-xs font-noto-sans rounded-sm ${
            status === 'Live'
              ? 'bg-green-800/10 text-green-800/70 border border-green-800/20'
              : 'bg-gold/10 text-gold-dark border border-gold/20'
          }`}>
            {status}
          </span>
        </div>

        <p className="font-noto-sans text-sm text-warm-brown leading-relaxed mb-4">{description}</p>

        {tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map(tag => (
              <span key={tag} className="text-xs font-noto-sans text-indigo-800/50 border border-indigo-800/15 px-2 py-0.5 rounded-sm">
                {tag}
              </span>
            ))}
          </div>
        )}

        {liveUrl && (
          <span className="font-noto-sans text-xs text-gold-dark group-hover:text-gold tracking-wide transition-colors">
            View platform →
          </span>
        )}
      </div>
    </Link>
  );
}
