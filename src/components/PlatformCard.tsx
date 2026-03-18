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
      <div className="panel card-hover relative overflow-hidden p-6 md:p-8">
        {/* Neon left glow bar */}
        <div className="glow-bar absolute left-0 top-0 bottom-0" />

        <div className="relative pl-4">
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-noto-sans text-base md:text-lg font-medium text-shiro/90 pr-4 group-hover:text-kin-light transition-colors">{title}</h3>
            <span className={`shrink-0 px-2.5 py-0.5 text-xs font-noto-sans tracking-wider rounded border ${
              status === 'Live'
                ? 'bg-shu/8 text-shu-light/80 border-shu/20 shadow-[0_0_8px_rgba(224,60,49,0.08)]'
                : 'bg-kin/8 text-kin-light/70 border-kin/15 shadow-[0_0_8px_rgba(212,160,23,0.06)]'
            }`}>
              {status}
            </span>
          </div>

          <p className="font-noto-sans text-sm text-shiro/40 leading-relaxed mb-4">{description}</p>

          {tags && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map(tag => (
                <span key={tag} className="text-xs font-noto-sans text-shiro/25 border border-shiro/[0.05] px-2 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {liveUrl && (
            <span className="font-noto-sans text-xs text-kin/40 group-hover:text-kin-glow/70 tracking-widest transition-colors uppercase">
              View platform →
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
