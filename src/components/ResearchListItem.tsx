import Link from 'next/link';

interface ResearchListItemProps {
  href: string;
  title: string;
  status: string;
  themes: string[];
  description?: string;
}

const statusStyles: Record<string, string> = {
  'Published': 'bg-shu/10 text-shu-light/70 border-shu/15 shadow-[0_0_8px_rgba(224,60,49,0.06)]',
  'Forthcoming': 'bg-neon-blue/10 text-neon-blue/70 border-neon-blue/15',
  'Under Review': 'bg-kin/8 text-kin-light/60 border-kin/15',
  'Conference Abstract': 'bg-tsubaki-rose/8 text-tsubaki-blush/60 border-tsubaki-rose/15',
  'Working Paper': 'bg-tsubaki-rose/6 text-tsubaki-blush/70 border-tsubaki-rose/12 shadow-[0_0_8px_rgba(233,30,99,0.05)]',
  'In Progress': 'bg-shiro/[0.03] text-shiro/30 border-shiro/[0.06]',
};

export default function ResearchListItem({ href, title, status, themes, description }: ResearchListItemProps) {
  return (
    <Link href={href} className="block group">
      <div className="panel card-hover relative overflow-hidden p-6">
        {/* Neon left glow bar */}
        <div className="glow-bar absolute left-0 top-0 bottom-0" />

        <div className="relative pl-4">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
            <h3 className="font-noto-serif text-base font-medium text-shiro/85 group-hover:text-kin-light transition-colors italic">
              {title}
            </h3>
            <span className={`shrink-0 self-start px-2.5 py-0.5 text-xs font-noto-sans tracking-wider rounded border ${statusStyles[status] || statusStyles['In Progress']}`}>
              {status}
            </span>
          </div>

          {description && (
            <p className="font-noto-sans text-sm text-shiro/35 leading-relaxed mb-3">{description}</p>
          )}

          <div className="flex flex-wrap gap-1.5">
            {themes.map(theme => (
              <span key={theme} className="text-xs font-noto-sans text-shiro/20 px-1.5 py-0.5">
                {theme}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
