import type { Locale } from '@/i18n/config';
import type { FaultlineContent } from './types';
import { faultlineEn } from './en';
import { faultlineJa } from './ja';

const byLocale: Record<Locale, FaultlineContent> = {
  en: faultlineEn,
  ja: faultlineJa,
};

export function getFaultlineContent(locale: Locale): FaultlineContent {
  return byLocale[locale];
}

export type { FaultlineContent } from './types';
