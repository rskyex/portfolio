/**
 * Typed content model for the Cyber Escalation Atlas platform page.
 * English and Japanese files both satisfy `CyberContent`, keeping the two
 * locales structurally 1:1.
 */

export interface CyberContent {
  /** "Back to X" link label (localized). */
  backLabel: string;
  /** Locale-free route; never translated. */
  backHref: string;
  header: { kanji: string; english: string };
  /** Status badge label (localized). */
  status: string;
  /** Stable English status string for badge colour. */
  statusVariant: string;
  /** "Visit platform →" label (localized). */
  visitLabel: string;
  /** External URL; identical across locales. */
  visitUrl: string;
  /** iframe title; descriptive. */
  iframeTitle: string;
  overview: {
    heading: string;
    paragraphs: string[];
  };
  /** Descriptive + proper-noun tags. */
  tags: string[];
  techStack: {
    heading: string;
    /** Tech-stack proper nouns; identical across locales. */
    items: string[];
  };
}
