/**
 * Typed content model for the Global Nuclear Infrastructure Atlas platform page.
 * English and Japanese files both satisfy `NuclearContent`.
 */

export interface NuclearContent {
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
