/**
 * Single source of truth for locale configuration.
 * Import `locales`, `defaultLocale`, and the `Locale` type from here everywhere.
 */

export const locales = ['en', 'ja'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

/** Human-readable labels for the language toggle. */
export const localeLabels: Record<Locale, string> = {
  en: 'EN',
  ja: '日本語',
};

/** BCP-47 / OpenGraph locale codes per app locale. */
export const ogLocales: Record<Locale, string> = {
  en: 'en_US',
  ja: 'ja_JP',
};

/** `<html lang>` values per app locale. */
export const htmlLang: Record<Locale, string> = {
  en: 'en',
  ja: 'ja',
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
