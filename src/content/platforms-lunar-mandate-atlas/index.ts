import type { Locale } from '@/i18n/config';
import type { LunarMandateAtlasContent } from './types';
import { lunarMandateAtlasEn } from './en';
import { lunarMandateAtlasJa } from './ja';

const byLocale: Record<Locale, LunarMandateAtlasContent> = {
  en: lunarMandateAtlasEn,
  ja: lunarMandateAtlasJa,
};

export function getLunarMandateAtlasContent(locale: Locale): LunarMandateAtlasContent {
  return byLocale[locale];
}

export type { LunarMandateAtlasContent } from './types';
