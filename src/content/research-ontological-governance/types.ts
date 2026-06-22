/**
 * Typed content model for the Ontological Governance research detail page.
 * English and Japanese files both satisfy `OntologicalGovernanceContent`,
 * keeping locales 1:1.
 */

export interface OntologicalGovernanceContent {
  backToResearch: string;
  header: { kanji: string; english: string };
  /** Display label for the status badge (localized). */
  status: string;
  /** Stable English key for badge styling. */
  statusVariant: string;
  overview: {
    heading: string;
    paragraphs: string[];
  };
  tags: string[];
  keyQuestions: {
    heading: string;
    items: string[];
  };
}
