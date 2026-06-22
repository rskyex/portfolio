/**
 * Typed content model for the Scoreless platform page.
 * English and Japanese files both satisfy `ScorelessContent`.
 */

export interface ScorelessContent {
  /** "Back to X" link label (localized). */
  backLabel: string;
  /** Locale-free route; never translated. */
  backHref: string;
  header: { kanji: string; english: string };
  /** Status badge label (localized). */
  status: string;
  overview: { heading: string; paragraphs: string[] };
  tags: string[];
  techStack: { heading: string; items: string[] };
}
