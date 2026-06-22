import type { Metadata } from 'next';
import { locales, defaultLocale, type Locale } from './config';

export const SITE_URL = 'https://risakoyanagi.com';

/**
 * Build the absolute URL for a given locale + locale-free pathname.
 * English (default) lives at the root; Japanese under `/ja`.
 */
export function localeUrl(locale: Locale, pathname: string): string {
  const clean = pathname === '/' ? '' : pathname;
  return locale === defaultLocale
    ? `${SITE_URL}${clean || '/'}`
    : `${SITE_URL}/${locale}${clean}`;
}

/**
 * hreflang alternates for a page, keyed by locale-free pathname (e.g. `/research`).
 * Emits `en`, `ja`, and `x-default` (pointing at the English/default version).
 */
export function buildAlternates(pathname: string): Metadata['alternates'] {
  const languages: Record<string, string> = {};
  for (const locale of locales) {
    languages[locale] = localeUrl(locale, pathname);
  }
  languages['x-default'] = localeUrl(defaultLocale, pathname);

  return {
    canonical: localeUrl(defaultLocale, pathname),
    languages,
  };
}
