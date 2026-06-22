import type { Locale } from '@/i18n/config';
import type { PromiseContent } from './types';
import { promiseEn } from './en';
import { promiseJa } from './ja';

const byLocale: Record<Locale, PromiseContent> = {
  en: promiseEn,
  ja: promiseJa,
};

export function getPromiseContent(locale: Locale): PromiseContent {
  return byLocale[locale];
}

export type { PromiseContent } from './types';
