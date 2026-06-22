/**
 * Typed content model for the AFRECOS project page. English and Japanese files
 * both satisfy `AfrecosContent`, keeping the two locales structurally 1:1.
 */

export interface GalleryImage {
  /** Image src; identical across locales. */
  src: string;
  /** Localized alt text. */
  alt: string;
}

export interface StatItem {
  /** Identical across locales (numeric figure). */
  value: string;
  label: string;
}

export interface AfrecosContent {
  backLabel: string;
  header: { kanji: string; english: string; subtitle: string };
  hero: { src: string; alt: string };
  overview: {
    heading: string;
    paragraphs: string[];
  };
  tags: string[];
  keyFacts: {
    heading: string;
    stats: StatItem[];
  };
  gallery: {
    heading: string;
    images: GalleryImage[];
  };
}
