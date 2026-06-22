import type { Locale } from '@/i18n/config';
import type { PlatformsContent } from './types';
import { platformsEn } from './en';
import { platformsJa } from './ja';

const byLocale: Record<Locale, PlatformsContent> = {
  en: platformsEn,
  ja: platformsJa,
};

export function getPlatformsContent(locale: Locale): PlatformsContent {
  return byLocale[locale];
}

export type { PlatformsContent } from './types';
