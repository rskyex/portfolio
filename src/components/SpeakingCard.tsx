interface SpeakingCardProps {
  title: string;
  context: string;
  type: string;
  description?: string;
}

export default function SpeakingCard({ title, context, type, description }: SpeakingCardProps) {
  return (
    <div className="panel card-hover relative overflow-hidden p-6 group">
      {/* Neon left glow bar */}
      <div className="glow-bar absolute left-0 top-0 bottom-0" />

      <div className="relative pl-4">
        <span className="inline-block px-2.5 py-0.5 text-xs font-noto-sans text-tsubaki-blush/50 border border-tsubaki-rose/12 rounded mb-3 tracking-wider">
          {type}
        </span>
        <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-2 group-hover:text-kin-light transition-colors">{title}</h3>
        <p className="font-noto-sans text-sm text-shiro/35 mb-2">{context}</p>
        {description && (
          <p className="font-noto-sans text-xs text-shiro/20 leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  );
}
