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
        <div key={i} className="text-center">
          <div className="font-kaisei text-2xl md:text-3xl text-gold-light">{stat.value}</div>
          <div className="font-noto-sans text-xs text-washi/50 mt-1 tracking-wide">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
