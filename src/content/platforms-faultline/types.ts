/**
 * Typed content model for the Faultline platform page.
 * English and Japanese files both satisfy `FaultlineContent`.
 */

export interface FaultlineSubProject {
  title: string;
  description: string;
  tags: string[];
  /** Image src; identical across locales. */
  image: string;
  /** External URL; identical across locales. */
  liveUrl: string;
}

export interface FaultlineContent {
  backLabel: string;
  backHref: string;
  header: { kanji: string; english: string; subtitle: string };
  status: string;
  statusVariant: string;
  visitLabel: string;
  visitUrl: string;
  /** Per-subproject "Visit →" link label (localized). */
  subVisitLabel: string;
  image: { src: string; alt: string };
  overview: {
    heading: string;
    paragraphs: string[];
  };
  tags: string[];
  subProjects: FaultlineSubProject[];
  techStack: {
    heading: string;
    items: string[];
  };
}
