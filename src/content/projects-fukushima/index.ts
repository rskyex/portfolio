import type { Locale } from '@/i18n/config';
import type { FukushimaContent } from './types';
import { fukushimaEn } from './en';
import { fukushimaJa } from './ja';

const byLocale: Record<Locale, FukushimaContent> = {
  en: fukushimaEn,
  ja: fukushimaJa,
};

export function getFukushimaContent(locale: Locale): FukushimaContent {
  return byLocale[locale];
}

export type { FukushimaContent } from './types';
