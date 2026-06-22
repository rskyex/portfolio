/**
 * Typed content model for the Lunar research detail page. English and Japanese
 * files both satisfy `LunarContent`, keeping the two locales structurally 1:1.
 */

export interface MethodologyStep {
  /** Kanji numeral glyph; identical across locales. */
  glyph: string;
  text: string;
}

export interface LunarContent {
  backToResearch: string;
  header: { kanji: string; english: string };
  /** Display label for the status badge (localized). */
  status: string;
  /** Stable English key for badge styling. */
  statusVariant: string;
  abstract: {
    heading: string;
    paragraphs: string[];
  };
  tags: string[];
  methodology: {
    heading: string;
    steps: MethodologyStep[];
  };
  keyThemes: {
    heading: string;
    items: string[];
  };
}
