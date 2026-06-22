import type { Locale } from '@/i18n/config';
import type { ScorelessContent } from './types';
import { scorelessEn } from './en';
import { scorelessJa } from './ja';

const byLocale: Record<Locale, ScorelessContent> = {
  en: scorelessEn,
  ja: scorelessJa,
};

export function getScorelessContent(locale: Locale): ScorelessContent {
  return byLocale[locale];
}

export type { ScorelessContent } from './types';
