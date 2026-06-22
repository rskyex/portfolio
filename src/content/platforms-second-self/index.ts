import type { Locale } from '@/i18n/config';
import type { SecondSelfContent } from './types';
import { secondSelfEn } from './en';
import { secondSelfJa } from './ja';

const byLocale: Record<Locale, SecondSelfContent> = {
  en: secondSelfEn,
  ja: secondSelfJa,
};

export function getSecondSelfContent(locale: Locale): SecondSelfContent {
  return byLocale[locale];
}

export type { SecondSelfContent } from './types';
