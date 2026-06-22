/**
 * Typed content model for the Fieldwork & Public Engagement page. English and
 * Japanese files both satisfy `FieldworkContent`, which keeps the two locales
 * structurally 1:1 — the compiler flags any field that drifts out of sync.
 */

export interface FieldworkProject {
  /** Locale-free route; never translated. */
  href: string;
  title: string;
  description: string;
  /** Image src; identical across locales. */
  image: string;
  /** Localized alt text. */
  imageAlt: string;
  /** Calendar period; digits identical, locale formatting may differ. */
  period?: string;
  role?: string;
  badge?: string;
}

export interface FieldworkSpeaking {
  title: string;
  context: string;
  /** Localized label for the type badge. */
  type: string;
  description: string;
  /** Image src; identical across locales. */
  image: string;
}

export interface FieldworkContent {
  meta: { title: string };
  header: { kanji: string; english: string; subtitle: string };
  intro: string;
  projects: FieldworkProject[];
  speakingSection: { heading: string; intro: string };
  speaking: FieldworkSpeaking[];
}
