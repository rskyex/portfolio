import type { Locale } from './locale';

/* Locale-aware path helpers shared by server and client components.
   (Kept out of locale.ts, whose 'use client' directive would turn these
   into client references if imported from a server component.) */

/** Sub-paths that exist in both locales — EN at `/x`, JA at `/ja/x`. */
export const BILINGUAL_PATHS = ['/news'];

/** The news index for a locale: '/news' (EN) or '/ja/news' (JA). */
export function newsPath(locale: Locale): string {
  return locale === 'ja' ? '/ja/news' : '/news';
}

/**
 * The equivalent of `pathname` in the target locale. Pages that exist in both
 * languages map onto each other (/news ↔ /ja/news); anything else falls back
 * to staying put (EN pages have no JA variant) or the JA home page.
 */
export function pathnameForLocale(pathname: string, target: Locale): string {
  const base =
    pathname === '/ja' ? '/' : pathname.startsWith('/ja/') ? pathname.slice(3) : pathname;
  if (target === 'en') return base;
  if (base === '/') return '/ja';
  const bilingual = BILINGUAL_PATHS.some((p) => base === p || base.startsWith(`${p}/`));
  return bilingual ? `/ja${base}` : '/ja';
}
