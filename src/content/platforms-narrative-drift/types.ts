/**
 * Typed content model for the Narrative Drift platform page.
 * English and Japanese files both satisfy `NarrativeDriftContent`.
 */

export interface NarrativeDriftContent {
  backLabel: string;
  backHref: string;
  header: { kanji: string; english: string };
  status: string;
  statusVariant: string;
  visitLabel: string;
  visitUrl: string;
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
