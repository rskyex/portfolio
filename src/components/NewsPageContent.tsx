import SectionHeader from '@/components/SectionHeader';
import NewsCard from '@/components/NewsCard';
import type { Locale } from '@/lib/locale';
import { getNewsByYear } from '@/lib/content';
import type { Dictionary } from '@/dictionaries/types';

/** Full news archive — every item, grouped by year, newest first.
 *  Shared by /news (EN) and /ja/news (JA). */
export default function NewsPageContent({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const years = getNewsByYear();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <SectionHeader
        kanji="報"
        english={dict.newsSection.pageTitle}
        subtitle={dict.newsSection.pageSubtitle}
      />
      <div className="mt-8 space-y-12">
        {years.map(({ year, items }) => (
          <div key={year}>
            <h3 className="font-inter text-xs text-kin tracking-[0.25em] uppercase mb-6 font-semibold">
              {locale === 'ja' ? `${year}年` : year}
            </h3>
            <div className="space-y-4">
              {items.map((item) => (
                <NewsCard key={`${item.date}-${item.category}`} item={item} locale={locale} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
