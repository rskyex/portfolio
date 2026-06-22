/**
 * Typed content model for the Japan Promise Tracker platform page.
 * English and Japanese files both satisfy `PromiseContent`.
 */

export interface PromiseContent {
  /** "Back to X" link label (localized). */
  backLabel: string;
  /** Locale-free route; never translated. */
  backHref: string;
  header: { kanji: string; english: string };
  /** Status badge label (localized). */
  status: string;
  /** "Visit platform" label (localized). */
  visitLabel: string;
  /** External URL; never translated. */
  liveUrl: string;
  /** Image src; never translated. */
  imageSrc: string;
  imageAlt: string;
  overview: { heading: string; paragraphs: string[] };
  tags: string[];
  techStack: { heading: string; items: string[] };
}
