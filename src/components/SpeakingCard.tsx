interface SpeakingCardProps {
  title: string;
  context: string;
  type: string;
  description?: string;
}

export default function SpeakingCard({ title, context, type, description }: SpeakingCardProps) {
  return (
    <div className="bg-parchment/95 rounded-sm card-hover vermillion-bar p-6 relative overflow-hidden">
      {/* Vermillion corner seal accent */}
      <div className="absolute top-0 right-0 w-10 h-10 overflow-hidden">
        <div className="absolute -top-5 -right-5 w-10 h-10 bg-vermillion/8 rounded-full" />
      </div>
      <span className="inline-block px-2 py-0.5 text-xs font-noto-sans text-vermillion/70 border border-vermillion/20 rounded-sm mb-3">
        {type}
      </span>
      <h3 className="font-noto-sans text-base font-medium text-ink mb-2">{title}</h3>
      <p className="font-noto-sans text-sm text-warm-brown mb-2">{context}</p>
      {description && (
        <p className="font-noto-sans text-xs text-warm-gray leading-relaxed">{description}</p>
      )}
    </div>
  );
}
