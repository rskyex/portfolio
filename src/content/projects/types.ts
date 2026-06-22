/**
 * Typed content model for the Background & Fieldwork (projects index) page.
 * English and Japanese files both satisfy `ProjectsContent`, keeping the two
 * locales structurally 1:1.
 */

export interface ProjectCardData {
  /** Locale-free route; never translated. */
  href: string;
  title: string;
  description: string;
  /** Image src; identical across locales. */
  image: string;
  /** Localized alt text. */
  imageAlt: string;
  /** Display label for the badge (localized). */
  badge?: string;
  /** Identical across locales (years). */
  period?: string;
  /** Localized role label. */
  role?: string;
}

export interface ProjectsContent {
  meta: { title: string; description: string };
  header: { kanji: string; english: string; subtitle: string };
  intro: string;
  cards: ProjectCardData[];
}
