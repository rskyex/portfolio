import type { Locale } from '@/lib/locale';
import {
  NEWS_CATEGORY_LABELS,
  formatNewsDate,
  linkLabel,
  type NewsItem,
} from '@/lib/content';

/** One news entry — washi card matching the About/Research card styling. */
export default function NewsCard({ item, locale }: { item: NewsItem; locale: Locale }) {
  return (
    <div className="card-washi card-washi-about p-6 relative overflow-hidden">
      <div className="glow-bar absolute left-0 top-0 bottom-0" />
      <div className="pl-4 flex flex-col sm:flex-row sm:items-start gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
            <time
              dateTime={item.date}
              className="font-inter text-xs text-kuro-soft/50 font-medium"
            >
              {formatNewsDate(item.date, locale)}
            </time>
            <span className="px-2 py-0.5 text-[9px] font-inter font-bold tracking-[0.2em] uppercase text-kin-deep border border-kin/40 rounded-sm">
              {NEWS_CATEGORY_LABELS[item.category]}
            </span>
          </div>
          <p className="font-inter text-sm text-kuro-soft/70 leading-relaxed">
            {item.text[locale]}
          </p>
          {item.links && item.links.length > 0 && (
            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3">
              {item.links.map((url) => (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-inter text-xs text-kin-deep/80 hover:text-shu transition-colors font-medium"
                >
                  {linkLabel(url)} ↗
                </a>
              ))}
            </div>
          )}
        </div>
        {item.image && (
          <img
            src={item.image.src}
            alt={item.image.alt[locale]}
            loading="lazy"
            className="w-full sm:w-44 max-h-44 object-cover rounded border border-kin/20 self-start shrink-0"
          />
        )}
      </div>
    </div>
  );
}
