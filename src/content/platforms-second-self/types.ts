/**
 * Typed content model for the Second Self platform page.
 * English and Japanese files both satisfy `SecondSelfContent`.
 */

export interface CardCategory {
  title: string;
  description: string;
}

export interface SecondSelfContent {
  /** Localized SEO metadata (title verbatim en / draft ja). */
  meta: { title: string; description: string };
  /** "Back to X" link label (localized). */
  backLabel: string;
  /** Locale-free route; never translated. */
  backHref: string;
  header: { kanji: string; english: string; subtitle: string };
  /** Status badge label (localized). */
  status: string;
  /** Image src; never translated. */
  imageSrc: string;
  imageAlt: string;
  overview: { heading: string; paragraphs: string[] };
  cardSystem: { heading: string; categories: CardCategory[] };
  victory: { heading: string; paragraphs: string[] };
  tags: string[];
  techStack: { heading: string; items: string[] };
}
