'use client';

import { usePathname } from 'next/navigation';

export type Locale = 'en' | 'ja';

export const LOCALES: Locale[] = ['en', 'ja'];
export const DEFAULT_LOCALE: Locale = 'en';

/** Derive the active locale purely from the URL — the URL is the source of truth. */
export function getLocaleFromPathname(pathname: string): Locale {
  return pathname === '/ja' || pathname.startsWith('/ja/') ? 'ja' : 'en';
}

/** Root path for a locale: '/' for English, '/ja' for Japanese. */
export function localeHomePath(locale: Locale): string {
  return locale === 'ja' ? '/ja' : '/';
}

/** Client hook returning the current locale based on the pathname. */
export function useLocale(): Locale {
  const pathname = usePathname();
  return getLocaleFromPathname(pathname ?? '/');
}
