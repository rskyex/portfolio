import type { Locale } from '@/i18n/config';
import type { OrbitalContent } from './types';
import { orbitalEn } from './en';
import { orbitalJa } from './ja';

const byLocale: Record<Locale, OrbitalContent> = { en: orbitalEn, ja: orbitalJa };

export function getOrbitalContent(locale: Locale): OrbitalContent {
  return byLocale[locale];
}

export type { OrbitalContent } from './types';
