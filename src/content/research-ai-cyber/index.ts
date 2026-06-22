import type { Locale } from '@/i18n/config';
import type { AICyberContent } from './types';
import { aiCyberEn } from './en';
import { aiCyberJa } from './ja';

const byLocale: Record<Locale, AICyberContent> = {
  en: aiCyberEn,
  ja: aiCyberJa,
};

export function getAICyberContent(locale: Locale): AICyberContent {
  return byLocale[locale];
}

export type { AICyberContent } from './types';
