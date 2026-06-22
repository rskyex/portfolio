/**
 * Typed content model for the Fukushima Field Research page. English and
 * Japanese files both satisfy `FukushimaContent`, keeping the two locales
 * structurally 1:1.
 */

export interface ResearchOutput {
  /** Slide number — identical across locales; drives the image src. */
  n: number;
  title: string;
  description: string;
}

export interface GalleryImage {
  /** Image src; identical across locales. */
  src: string;
  /** Localized alt text. */
  alt: string;
}

export interface FukushimaContent {
  backLabel: string;
  header: { kanji: string; english: string; subtitle: string };
  hero: { src: string; alt: string };
  overview: {
    heading: string;
    paragraphs: string[];
  };
  researchOutputs: {
    heading: string;
    intro: string;
    items: ResearchOutput[];
  };
  tags: string[];
  gallery: {
    heading: string;
    images: GalleryImage[];
  };
  keyActivities: {
    heading: string;
    items: string[];
  };
}
