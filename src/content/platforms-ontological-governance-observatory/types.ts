/**
 * Typed content model for the Ontological Governance Observatory platform page.
 * English and Japanese files both satisfy `OntologicalGovernanceObservatoryContent`.
 */

export interface OntologicalGovernanceObservatoryContent {
  backLabel: string;
  backHref: string;
  header: { kanji: string; english: string };
  status: string;
  statusVariant: string;
  image: { src: string; alt: string };
  overview: {
    heading: string;
    paragraphs: string[];
  };
  tags: string[];
  techStack: {
    heading: string;
    items: string[];
  };
}
