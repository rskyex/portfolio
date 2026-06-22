import type { Locale } from '@/i18n/config';
import type { NuclearContent } from './types';
import { nuclearEn } from './en';
import { nuclearJa } from './ja';

const byLocale: Record<Locale, NuclearContent> = { en: nuclearEn, ja: nuclearJa };

export function getNuclearContent(locale: Locale): NuclearContent {
  return byLocale[locale];
}

export type { NuclearContent } from './types';
