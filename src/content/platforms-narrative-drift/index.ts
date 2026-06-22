import type { Locale } from '@/i18n/config';
import type { NarrativeDriftContent } from './types';
import { narrativeDriftEn } from './en';
import { narrativeDriftJa } from './ja';

const byLocale: Record<Locale, NarrativeDriftContent> = {
  en: narrativeDriftEn,
  ja: narrativeDriftJa,
};

export function getNarrativeDriftContent(locale: Locale): NarrativeDriftContent {
  return byLocale[locale];
}

export type { NarrativeDriftContent } from './types';
