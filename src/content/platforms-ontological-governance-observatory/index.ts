import type { Locale } from '@/i18n/config';
import type { OntologicalGovernanceObservatoryContent } from './types';
import { ontologicalGovernanceObservatoryEn } from './en';
import { ontologicalGovernanceObservatoryJa } from './ja';

const byLocale: Record<Locale, OntologicalGovernanceObservatoryContent> = {
  en: ontologicalGovernanceObservatoryEn,
  ja: ontologicalGovernanceObservatoryJa,
};

export function getOntologicalGovernanceObservatoryContent(
  locale: Locale,
): OntologicalGovernanceObservatoryContent {
  return byLocale[locale];
}

export type { OntologicalGovernanceObservatoryContent } from './types';
