import Link from 'next/link';

interface ResearchListItemProps {
  href: string;
  title: string;
  status: string;
  themes: string[];
  description?: string;
}

const statusStyles: Record<string, string> = {
  'Published': 'bg-shu/12 text-shu-deep border-shu/20 shadow-[0_0_8px_rgba(224,60,49,0.06)]',
  'Forthcoming': 'bg-neon-blue/10 text-indigo-700 border-neon-blue/20',
  'Under Review': 'bg-kin/10 text-kin-deep border-kin/20',
  'Conference Abstract': 'bg-tsubaki-rose/10 text-tsubaki-deep border-tsubaki-rose/20',
  'Working Paper': 'bg-tsubaki-rose/8 text-tsubaki-deep border-tsubaki-rose/18 shadow-[0_0_8px_rgba(233,30,99,0.05)]',
  'In Progress': 'bg-kuro/[0.04] text-kuro-soft/60 border-kuro-soft/10',
};

export default function ResearchListItem({ href, title, status, themes, description }: ResearchListItemProps) {
  return (
    <Link href={href} className="block group">
      <div className="card-washi card-washi-research card-hover relative overflow-hidden p-6">
        {/* Neon left glow bar */}
        <div className="glow-bar absolute left-0 top-0 bottom-0" />

        <div className="relative pl-4">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
            <h3 className="font-cormorant text-lg font-semibold text-kuro-soft group-hover:text-shu-deep transition-colors italic">
              {title}
            </h3>
            <span className={`shrink-0 self-start px-2.5 py-0.5 text-xs font-inter font-medium tracking-wider rounded border ${statusStyles[status] || statusStyles['In Progress']}`}>
              {status}
            </span>
          </div>

          {description && (
            <p className="font-inter text-sm text-kuro-soft/65 leading-relaxed mb-3">{description}</p>
          )}

          <div className="flex flex-wrap gap-1.5">
            {themes.map(theme => (
              <span key={theme} className="text-xs font-inter text-kuro-soft/45 px-1.5 py-0.5">
                {theme}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
