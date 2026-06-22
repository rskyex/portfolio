import type { Locale } from '@/i18n/config';
import type { LunarContent } from './types';
import { lunarEn } from './en';
import { lunarJa } from './ja';

const byLocale: Record<Locale, LunarContent> = {
  en: lunarEn,
  ja: lunarJa,
};

export function getLunarContent(locale: Locale): LunarContent {
  return byLocale[locale];
}

export type { LunarContent } from './types';
