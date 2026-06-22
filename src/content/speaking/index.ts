import type { Locale } from '@/i18n/config';
import type { SpeakingContent } from './types';
import { speakingEn } from './en';
import { speakingJa } from './ja';

const byLocale: Record<Locale, SpeakingContent> = {
  en: speakingEn,
  ja: speakingJa,
};

export function getSpeakingContent(locale: Locale): SpeakingContent {
  return byLocale[locale];
}

export type { SpeakingContent } from './types';
