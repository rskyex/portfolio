import Image from 'next/image';

interface SpeakingCardProps {
  title: string;
  context: string;
  type: string;
  description?: string;
  image?: string;
}

export default function SpeakingCard({ title, context, type, description, image }: SpeakingCardProps) {
  return (
    <div className="card-washi card-washi-speaking card-hover relative overflow-hidden group">
      {/* Neon left glow bar */}
      <div className="glow-bar absolute left-0 top-0 bottom-0 z-10" />

      {/* Speaking photo */}
      {image && (
        <div className="relative w-full h-40 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
          />
        </div>
      )}

      <div className="relative pl-4 p-6">
        <span className="inline-block px-2.5 py-0.5 text-xs font-inter font-medium text-tsubaki-deep border border-tsubaki-rose/20 bg-tsubaki-rose/[0.06] rounded mb-3 tracking-wider">
          {type}
        </span>
        <h3 className="font-cormorant text-lg font-semibold text-kuro-soft mb-2 group-hover:text-shu-deep transition-colors">{title}</h3>
        <p className="font-inter text-sm text-kuro-soft/65 mb-2">{context}</p>
        {description && (
          <p className="font-inter text-xs text-kuro-soft/50 leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  );
}
