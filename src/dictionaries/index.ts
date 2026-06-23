import type { Locale } from '@/lib/locale';
import type { Dictionary } from './types';
import { en } from './en';
import { ja } from './ja';

const dictionaries: Record<Locale, Dictionary> = { en, ja };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
