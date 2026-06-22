import type { Locale } from '@/i18n/config';
import type { HomeContent } from './types';
import { homeEn } from './en';
import { homeJa } from './ja';

const byLocale: Record<Locale, HomeContent> = {
  en: homeEn,
  ja: homeJa,
};

export function getHomeContent(locale: Locale): HomeContent {
  return byLocale[locale];
}

export type { HomeContent } from './types';
