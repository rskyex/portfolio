import type { Locale } from '@/i18n/config';
import type { GovernTheHumanContent } from './types';
import { governTheHumanEn } from './en';
import { governTheHumanJa } from './ja';

const byLocale: Record<Locale, GovernTheHumanContent> = {
  en: governTheHumanEn,
  ja: governTheHumanJa,
};

export function getGovernTheHumanContent(locale: Locale): GovernTheHumanContent {
  return byLocale[locale];
}

export type { GovernTheHumanContent } from './types';
