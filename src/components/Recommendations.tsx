import Image from 'next/image';
import type { Locale } from '@/lib/locale';
import { getRecommendations } from '@/lib/content';

/* Referee comments from src/data/recommendations.json, shown on /about (EN)
   and on the JA landing page. Card styling follows the About page; the quote
   itself is set in Cormorant italic so it reads as someone else's voice. */

export const RECOMMENDATIONS_HEADING: Record<Locale, string> = {
  en: 'Recommendation',
  ja: '推薦者コメント',
};

interface RecommendationsProps {
  locale: Locale;
  /** 'about' prints the small gold subsection heading; 'landing' omits it
   *  because the landing page already shows a SectionHeader above. */
  variant?: 'about' | 'landing';
}

export default function Recommendations({ locale, variant = 'about' }: RecommendationsProps) {
  const items = getRecommendations();
  if (items.length === 0) return null;

  return (
    <div>
      {variant === 'about' && (
        <h3 className="font-noto-sans text-xs text-kin tracking-[0.25em] uppercase mb-6 font-semibold">
          {RECOMMENDATIONS_HEADING[locale]}
        </h3>
      )}
      <div className="space-y-4">
        {items.map((item, i) => (
          <figure key={i} className="card-washi card-washi-about p-6 md:p-8 relative overflow-hidden">
            <div className="glow-bar absolute left-0 top-0 bottom-0" />
            <div className="pl-4">
              <blockquote className="font-noto-sans text-sm text-kuro-soft/70 leading-relaxed">
                {item.quote[locale]}
              </blockquote>
              <figcaption className="flex items-center gap-3 mt-5 pt-5 border-t border-kuro-soft/10">
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.name[locale]}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-sm object-cover shrink-0"
                  />
                )}
                <div className="min-w-0">
                  <div className="font-noto-sans text-sm font-semibold text-kuro-soft">
                    {item.name[locale]}
                  </div>
                  <div className="font-noto-sans text-xs text-kuro-soft/50 leading-relaxed">
                    {item.title[locale]}
                  </div>
                </div>
              </figcaption>
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}
