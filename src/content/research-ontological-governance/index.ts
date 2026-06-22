import type { Locale } from '@/i18n/config';
import type { OntologicalGovernanceContent } from './types';
import { ontologicalGovernanceEn } from './en';
import { ontologicalGovernanceJa } from './ja';

const byLocale: Record<Locale, OntologicalGovernanceContent> = {
  en: ontologicalGovernanceEn,
  ja: ontologicalGovernanceJa,
};

export function getOntologicalGovernanceContent(locale: Locale): OntologicalGovernanceContent {
  return byLocale[locale];
}

export type { OntologicalGovernanceContent } from './types';
