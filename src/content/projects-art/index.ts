import type { Locale } from '@/i18n/config';
import type { ArtContent } from './types';
import { artEn } from './en';
import { artJa } from './ja';

const byLocale: Record<Locale, ArtContent> = {
  en: artEn,
  ja: artJa,
};

export function getArtContent(locale: Locale): ArtContent {
  return byLocale[locale];
}

export type { ArtContent } from './types';
