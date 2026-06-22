import type { Locale } from '@/i18n/config';
import type { MytheraContent } from './types';
import { mytheraEn } from './en';
import { mytheraJa } from './ja';

const byLocale: Record<Locale, MytheraContent> = {
  en: mytheraEn,
  ja: mytheraJa,
};

export function getMytheraContent(locale: Locale): MytheraContent {
  return byLocale[locale];
}

export type { MytheraContent } from './types';
