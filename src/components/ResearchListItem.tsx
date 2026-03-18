import Link from 'next/link';

interface ResearchListItemProps {
  href: string;
  title: string;
  status: string;
  themes: string[];
  description?: string;
}

const statusStyles: Record<string, string> = {
  'Published': 'bg-green-800/10 text-green-800/70 border-green-800/20',
  'Forthcoming': 'bg-blue-800/10 text-blue-800/70 border-blue-800/20',
  'Under Review': 'bg-amber-700/10 text-amber-700/70 border-amber-700/20',
  'Conference Abstract': 'bg-purple-800/10 text-purple-800/70 border-purple-800/20',
  'Working Paper': 'bg-orange-700/10 text-orange-700/70 border-orange-700/20',
  'In Progress': 'bg-gray-600/10 text-gray-600/70 border-gray-600/20',
};

export default function ResearchListItem({ href, title, status, themes, description }: ResearchListItemProps) {
  return (
    <Link href={href} className="block group">
      <div className="bg-parchment/95 rounded-sm card-hover p-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-gold/20 via-gold/40 to-gold/20" />

        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
          <h3 className="font-noto-serif text-base font-medium text-ink group-hover:text-indigo-800 transition-colors italic">
            {title}
          </h3>
          <span className={`shrink-0 self-start px-2 py-0.5 text-xs font-noto-sans rounded-sm border ${statusStyles[status] || statusStyles['In Progress']}`}>
            {status}
          </span>
        </div>

        {description && (
          <p className="font-noto-sans text-sm text-warm-brown leading-relaxed mb-3">{description}</p>
        )}

        <div className="flex flex-wrap gap-1.5">
          {themes.map(theme => (
            <span key={theme} className="text-xs font-noto-sans text-warm-gray px-1.5 py-0.5">
              {theme}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
