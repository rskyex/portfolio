interface SpeakingCardProps {
  title: string;
  context: string;
  type: string;
  description?: string;
}

export default function SpeakingCard({ title, context, type, description }: SpeakingCardProps) {
  return (
    <div className="card-washi card-washi-speaking card-hover relative overflow-hidden p-6 group">
      {/* Neon left glow bar */}
      <div className="glow-bar absolute left-0 top-0 bottom-0" />

      <div className="relative pl-4">
        <span className="inline-block px-2.5 py-0.5 text-xs font-noto-sans font-medium text-tsubaki-deep border border-tsubaki-rose/20 bg-tsubaki-rose/[0.06] rounded mb-3 tracking-wider">
          {type}
        </span>
        <h3 className="font-noto-sans text-base font-semibold text-kuro-soft mb-2 group-hover:text-shu-deep transition-colors">{title}</h3>
        <p className="font-noto-sans text-sm text-kuro-soft/65 mb-2">{context}</p>
        {description && (
          <p className="font-noto-sans text-xs text-kuro-soft/50 leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  );
}
