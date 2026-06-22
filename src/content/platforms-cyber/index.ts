import type { Locale } from '@/i18n/config';
import type { CyberContent } from './types';
import { cyberEn } from './en';
import { cyberJa } from './ja';

const byLocale: Record<Locale, CyberContent> = { en: cyberEn, ja: cyberJa };

export function getCyberContent(locale: Locale): CyberContent {
  return byLocale[locale];
}

export type { CyberContent } from './types';
