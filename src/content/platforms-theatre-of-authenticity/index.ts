import type { Locale } from '@/i18n/config';
import type { TheatreContent } from './types';
import { theatreEn } from './en';
import { theatreJa } from './ja';

const byLocale: Record<Locale, TheatreContent> = {
  en: theatreEn,
  ja: theatreJa,
};

export function getTheatreContent(locale: Locale): TheatreContent {
  return byLocale[locale];
}

export type { TheatreContent } from './types';
