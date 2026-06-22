/**
 * Typed content model for the MYTHERA platform page.
 * English and Japanese files both satisfy `MytheraContent`.
 */

export interface MytheraSubProject {
  title: string;
  description: string;
  tags: string[];
  /** Optional image src; identical across locales. */
  image?: string;
  /** Optional locale-free internal route; never translated. */
  href?: string;
}

export interface MytheraContent {
  backLabel: string;
  backHref: string;
  header: { kanji: string; english: string; subtitle: string };
  status: string;
  statusVariant: string;
  /** "mythera.vercel.app →" label (localized text aside from the URL). */
  visitLabel: string;
  visitUrl: string;
  image: { src: string; alt: string };
  overview: {
    heading: string;
    paragraphs: string[];
  };
  tags: string[];
  subProjects: MytheraSubProject[];
  techStack: {
    heading: string;
    items: string[];
  };
}
