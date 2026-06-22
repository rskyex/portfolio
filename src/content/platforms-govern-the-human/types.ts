/**
 * Typed content model for the Govern the Human platform page.
 * English and Japanese files both satisfy `GovernTheHumanContent`.
 */

export interface SubProject {
  title: string;
  description: string;
  tags: string[];
}

export interface GovernTheHumanContent {
  backLabel: string;
  backHref: string;
  header: { kanji: string; english: string; subtitle: string };
  status: string;
  statusVariant: string;
  visitLabel: string;
  visitUrl: string;
  image: { src: string; alt: string };
  overview: {
    heading: string;
    paragraphs: string[];
  };
  tags: string[];
  subProjects: SubProject[];
  techStack: {
    heading: string;
    items: string[];
  };
}
