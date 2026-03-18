import Link from 'next/link';

interface ResearchListItemProps {
  href: string;
  title: string;
  status: string;
  themes: string[];
  description?: string;
}

const statusStyles: Record<string, string> = {
  'Published': 'bg-vermillion/8 text-vermillion/70 border-vermillion/15',
  'Forthcoming': 'bg-indigo-700/15 text-indigo-600/50 border-indigo-600/15',
  'Under Review': 'bg-gold/8 text-gold/60 border-gold/15',
  'Conference Abstract': 'bg-indigo-700/10 text-washi/40 border-washi/10',
  'Working Paper': 'bg-vermillion/6 text-tsubaki-blush/70 border-tsubaki-blush/15',
  'In Progress': 'bg-washi/[0.03] text-washi/35 border-washi/[0.08]',
};

export default function ResearchListItem({ href, title, status, themes, description }: ResearchListItemProps) {
  return (
    <Link href={href} className="block group">
      <div className="lacquer-panel rounded-sm card-hover relative overflow-hidden p-6 transition-all">
        {/* Vermillion-tsubaki left accent */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-vermillion/30 via-tsubaki-blush/15 to-gold/15 group-hover:from-vermillion/60 group-hover:to-gold/30 transition-all" />

        <div className="relative">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
            <h3 className="font-noto-serif text-base font-medium text-washi/85 group-hover:text-washi transition-colors italic">
              {title}
            </h3>
            <span className={`shrink-0 self-start px-2.5 py-0.5 text-xs font-noto-sans tracking-wide rounded-sm border ${statusStyles[status] || statusStyles['In Progress']}`}>
              {status}
            </span>
          </div>

          {description && (
            <p className="font-noto-sans text-sm text-washi/40 leading-relaxed mb-3">{description}</p>
          )}

          <div className="flex flex-wrap gap-1.5">
            {themes.map(theme => (
              <span key={theme} className="text-xs font-noto-sans text-washi/25 px-1.5 py-0.5">
                {theme}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
