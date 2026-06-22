/**
 * Typed content model for the Lunar Mandate Atlas platform page.
 * English and Japanese files both satisfy `LunarMandateAtlasContent`.
 */

export interface LunarMandateAtlasContent {
  /** Localized SEO metadata (title verbatim en / draft ja). */
  meta: { title: string; description: string };
  /** "Back to X" link label (localized). */
  backLabel: string;
  /** Locale-free route; never translated. */
  backHref: string;
  header: { kanji: string; english: string; subtitle: string };
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
  keyDimensions: { heading: string; items: string[] };
  tags: string[];
  techStack: { heading: string; items: string[] };
}
