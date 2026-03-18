interface SpeakingCardProps {
  title: string;
  context: string;
  type: string;
  description?: string;
}

export default function SpeakingCard({ title, context, type, description }: SpeakingCardProps) {
  return (
    <div className="lacquer-panel rounded-sm card-hover tsubaki-corner p-6 relative overflow-hidden transition-all group">
      {/* Vermillion left accent */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-vermillion/30 via-tsubaki-blush/15 to-gold/15 group-hover:from-vermillion/60 group-hover:to-gold/30 transition-all" />

      {/* Subtle lacquer sheen */}
      <div className="absolute inset-0 bg-lacquer-sheen pointer-events-none" />

      <div className="relative">
        <span className="inline-block px-2.5 py-0.5 text-xs font-noto-sans text-vermillion/50 border border-vermillion/12 rounded-sm mb-3 tracking-wide">
          {type}
        </span>
        <h3 className="font-noto-sans text-base font-medium text-washi/90 mb-2 group-hover:text-washi transition-colors">{title}</h3>
        <p className="font-noto-sans text-sm text-washi/40 mb-2">{context}</p>
        {description && (
          <p className="font-noto-sans text-xs text-washi/25 leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  );
}
