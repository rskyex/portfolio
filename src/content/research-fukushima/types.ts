/**
 * Typed content model for the Fukushima research detail page. English and
 * Japanese files both satisfy `FukushimaContent`, keeping locales 1:1.
 */

export interface FieldworkStep {
  /** Kanji numeral glyph; identical across locales. */
  glyph: string;
  text: string;
}

export interface FukushimaContent {
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
  fieldwork: {
    heading: string;
    steps: FieldworkStep[];
  };
  keyThemes: {
    heading: string;
    items: string[];
  };
  researchOutput: {
    heading: string;
    /** alt text template; `${n}` substituted with slide number. */
    slideAlt: (n: number) => string;
  };
  gallery: {
    heading: string;
    /** alt text for numbered fieldwork photos. */
    photoAlt: (n: number) => string;
    /** alt text for the trailing peace photo. */
    peacePhotoAlt: string;
  };
}
