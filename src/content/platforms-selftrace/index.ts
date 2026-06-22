import type { Locale } from '@/i18n/config';
import type { SelfTraceContent } from './types';
import { selftraceEn } from './en';
import { selftraceJa } from './ja';

const byLocale: Record<Locale, SelfTraceContent> = {
  en: selftraceEn,
  ja: selftraceJa,
};

export function getSelfTraceContent(locale: Locale): SelfTraceContent {
  return byLocale[locale];
}

export type { SelfTraceContent } from './types';
