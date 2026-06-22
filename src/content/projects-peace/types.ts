/**
 * Typed content model for the Peacebuilding Laboratory page. English and
 * Japanese files both satisfy `PeaceContent`, keeping the two locales
 * structurally 1:1.
 */

export interface PeaceContent {
  backLabel: string;
  header: { kanji: string; english: string; subtitle: string };
  hero: { src: string; alt: string };
  overview: {
    heading: string;
    paragraphs: string[];
  };
  tags: string[];
  poster: {
    heading: string;
    /** Image src; identical across locales. */
    src: string;
    /** Localized alt text. */
    alt: string;
  };
  activities: {
    heading: string;
    items: string[];
  };
}
