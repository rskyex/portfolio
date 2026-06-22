import type { Locale } from '@/i18n/config';
import type { ResearchContent } from './types';
import { researchEn } from './en';
import { researchJa } from './ja';

const byLocale: Record<Locale, ResearchContent> = {
  en: researchEn,
  ja: researchJa,
};

export function getResearchContent(locale: Locale): ResearchContent {
  return byLocale[locale];
}

export type { ResearchContent } from './types';
