import type { Locale } from '@/i18n/config';
import type { PeaceContent } from './types';
import { peaceEn } from './en';
import { peaceJa } from './ja';

const byLocale: Record<Locale, PeaceContent> = {
  en: peaceEn,
  ja: peaceJa,
};

export function getPeaceContent(locale: Locale): PeaceContent {
  return byLocale[locale];
}

export type { PeaceContent } from './types';
