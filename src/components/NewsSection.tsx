import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import NewsCard from '@/components/NewsCard';
import type { Locale } from '@/lib/locale';
import { newsPath } from '@/lib/paths';
import { getLatestNews } from '@/lib/content';
import type { Dictionary } from '@/dictionaries/types';

/** Landing-page News section — the latest three items with a link to /news. */
export default function NewsSection({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const items = getLatestNews(3);
  if (items.length === 0) return null;

  return (
    <section className="max-w-6xl mx-auto px-6 pb-16 relative">
      <div className="relative">
        <SectionHeader kanji="報" english={dict.newsSection.heading} />
        <div className="mt-8 space-y-4">
          {items.map((item) => (
            <NewsCard key={`${item.date}-${item.category}`} item={item} locale={locale} />
          ))}
        </div>
        <div className="mt-8 text-right">
          <Link
            href={newsPath(locale)}
            className="font-inter text-xs text-kin/60 hover:text-kin-glow/90 font-medium transition-colors tracking-widest uppercase"
          >
            {dict.newsSection.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
}
