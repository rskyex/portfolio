import type { Locale } from '@/i18n/config';
import type { AboutContent } from './types';
import { aboutEn } from './en';
import { aboutJa } from './ja';

const byLocale: Record<Locale, AboutContent> = {
  en: aboutEn,
  ja: aboutJa,
};

export function getAboutContent(locale: Locale): AboutContent {
  return byLocale[locale];
}

export type { AboutContent } from './types';
