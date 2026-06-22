/**
 * Typed content model for the Art Practice page. English and Japanese files
 * both satisfy `ArtContent`, keeping the two locales structurally 1:1.
 *
 * Identical-across-locales data (image `src`, hrefs, external URLs, exact
 * dates, addresses, venue lines already rendered in Japanese/Greek) live here
 * as plain fields and are NOT reworded between locales — only human-readable
 * English labels (headings, alts, city labels, etc.) are translated.
 */

export interface GalleryImage {
  /** Image src; identical across locales. */
  src: string;
  /** Localized alt text. */
  alt: string;
}

export interface PressItem {
  title: string;
  /** Optional secondary line (e.g. podcast show name). */
  detail?: string;
  /** Identical across locales. */
  href: string;
  /** Localized link label. */
  linkLabel: string;
}

export interface ArtContent {
  backLabel: string;
  header: { kanji: string; english: string; subtitle: string };
  hero: { src: string; alt: string };

  overview: {
    heading: string;
    paragraphs: string[];
  };

  exhibitionHistory: {
    heading: string;
    /** Localized city labels for the chip row. */
    cities: string[];

    // Monster Exhibition 2021 — Tokyo
    monster2021: {
      images: GalleryImage[];
      title: string;
      city: string;
      /** Detail lines; mix of Japanese venue data + a Web line. */
      lines: string[];
      webLabel: string;
      webHref: string;
      webText: string;
    };

    // Boomer Gallery — London
    boomer: {
      images: GalleryImage[];
      title: string;
      city: string;
      lines: string[];
    };

    // Monster Exhibition — San Francisco
    monsterSf: {
      images: GalleryImage[];
      titleLinkText: string;
      titleHref: string;
      city: string;
      lines: string[];
    };

    // ART ON LOOP — London & Athens (Jan 2024)
    artOnLoopJan: {
      images: GalleryImage[];
      title: string;
      city: string;
      lines: string[];
      linkHref: string;
      linkText: string;
    };

    // New York Cinema Screening
    nyScreening: {
      image: GalleryImage;
      title: string;
      city: string;
      lines: string[];
    };

    // ART ON LOOP — London & Athens (Sep 2024)
    artOnLoopSep: {
      image: GalleryImage;
      title: string;
      city: string;
      lines: string[];
    };
  };

  press: {
    heading: string;
    items: PressItem[];
  };

  themes: {
    heading: string;
    items: string[];
  };
}
