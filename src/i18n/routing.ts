import { defineRouting } from 'next-intl/routing';
import { locales, defaultLocale } from './config';

export const routing = defineRouting({
  locales,
  defaultLocale,
  // English stays at the root (e.g. `/platforms`); Japanese is served under
  // `/ja` (e.g. `/ja/platforms`). `as-needed` keeps existing English URLs
  // exactly as they are today — no `/en` prefix is ever added.
  localePrefix: 'as-needed',
  // Persist the manual choice; the cookie always wins over Accept-Language
  // on subsequent visits.
  localeCookie: {
    name: 'NEXT_LOCALE',
    maxAge: 60 * 60 * 24 * 365,
  },
});
