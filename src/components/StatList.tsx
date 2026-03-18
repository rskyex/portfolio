interface Stat {
  value: string;
  label: string;
}

interface StatListProps {
  stats: Stat[];
}

export default function StatList({ stats }: StatListProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, i) => (
        <div key={i} className="text-center relative group">
          {/* Subtle glass backdrop */}
          <div className="absolute inset-0 -m-2 rounded-sm bg-washi/[0.02] border border-washi/[0.03] opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative">
            <div className="font-kaisei text-2xl md:text-3xl text-gold-light/80">{stat.value}</div>
            <div className="font-noto-sans text-xs text-washi/35 mt-1 tracking-wider">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
