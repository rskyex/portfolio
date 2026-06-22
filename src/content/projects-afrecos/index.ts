import type { Locale } from '@/i18n/config';
import type { AfrecosContent } from './types';
import { afrecosEn } from './en';
import { afrecosJa } from './ja';

const byLocale: Record<Locale, AfrecosContent> = {
  en: afrecosEn,
  ja: afrecosJa,
};

export function getAfrecosContent(locale: Locale): AfrecosContent {
  return byLocale[locale];
}

export type { AfrecosContent } from './types';
