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
        <div key={i} className="text-center group relative">
          {/* Subtle glow on hover */}
          <div className="absolute inset-0 -m-3 rounded opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-b from-kin/[0.02] to-transparent" />
          <div className="relative">
            <div className="font-kaisei text-3xl md:text-4xl text-kin/80 drop-shadow-[0_0_12px_rgba(212,160,23,0.15)] group-hover:drop-shadow-[0_0_20px_rgba(212,160,23,0.25)] transition-all">
              {stat.value}
            </div>
            <div className="font-noto-sans text-[11px] text-shiro/30 mt-1.5 tracking-widest uppercase">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
