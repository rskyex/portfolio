/**
 * Typed content model for the Theatre of Authenticity platform page.
 * English and Japanese files both satisfy `TheatreContent`.
 */

export interface TheatreContent {
  /** Localized SEO metadata (title verbatim en / draft ja). */
  meta: { title: string; description: string };
  /** "Back to X" link label (localized). */
  backLabel: string;
  /** Locale-free route; never translated. */
  backHref: string;
  header: { kanji: string; english: string };
  /** Status badge label (localized). */
  status: string;
  /** Image src; never translated. */
  imageSrc: string;
  imageAlt: string;
  overview: { heading: string; paragraphs: string[] };
  coreQuestions: { heading: string; items: string[] };
  tags: string[];
  techStack: { heading: string; items: string[] };
}
