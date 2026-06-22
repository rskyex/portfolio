import type { Locale } from '@/i18n/config';
import type { FieldworkContent } from './types';
import { fieldworkEn } from './en';
import { fieldworkJa } from './ja';

const byLocale: Record<Locale, FieldworkContent> = {
  en: fieldworkEn,
  ja: fieldworkJa,
};

export function getFieldworkContent(locale: Locale): FieldworkContent {
  return byLocale[locale];
}

export type { FieldworkContent } from './types';
