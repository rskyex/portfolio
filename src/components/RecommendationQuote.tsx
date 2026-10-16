import Image from 'next/image';
import type { Locale } from '@/lib/locale';
import { getRecommendations } from '@/lib/content';
import type { Dictionary } from '@/dictionaries/types';

/* Landing-page referee comment, set as a pull quote directly above the News
   section — no washi card and no SectionHeader, so it reads as someone else's
   voice introducing the page rather than as another content block. The card
   version still lives in src/components/Recommendations.tsx for /about. */

/** Opening quotation mark per locale — the Latin “ looks wrong beside kana. */
const QUOTE_MARK: Record<Locale, string> = { en: '“', ja: '「' };

export default function RecommendationQuote({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const items = getRecommendations();
  if (items.length === 0) return null;

  return (
    <section className="max-w-4xl mx-auto px-6 pb-14 relative">
      <div className="space-y-12">
        {items.map((item, i) => (
          <figure key={i} className="relative">
            {/* Oversized quotation mark, set behind the opening line */}
            <span
              aria-hidden
              className="absolute -top-8 -left-1 md:-left-4 font-cormorant text-[6rem] md:text-[8rem] leading-none text-kin/[0.14] select-none pointer-events-none"
            >
              {QUOTE_MARK[locale]}
            </span>

            <div className="relative border-l border-kin/25 pl-6 md:pl-10">
              <p className="font-inter text-[10px] text-kin/70 tracking-[0.3em] uppercase mb-4 font-medium">
                {dict.recommendationsSection.heading}
              </p>

              <blockquote
                className={`text-shiro/80 leading-[2.1] text-[15px] md:text-base ${
                  locale === 'ja' ? 'font-noto-serif' : 'font-cormorant italic md:text-lg'
                }`}
              >
                {item.quote[locale]}
              </blockquote>

              <figcaption className="flex items-center gap-3 mt-6">
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.name[locale]}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover shrink-0 border border-kin/20"
                  />
                )}
                <div className="min-w-0">
                  <div className="font-inter text-xs text-kin/80 tracking-wider font-medium">
                    — {item.name[locale]}
                  </div>
                  <div className="font-inter text-xs text-shiro/50 leading-relaxed mt-0.5">
                    {item.title[locale]}
                  </div>
                </div>
              </figcaption>
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}
