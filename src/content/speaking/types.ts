/**
 * Typed content model for the Speaking & Policy Engagement page. English and
 * Japanese files both satisfy `SpeakingContent`, which keeps the two locales
 * structurally 1:1 — the compiler flags any field that drifts out of sync.
 */

export interface SpeakingEvent {
  title: string;
  context: string;
  /** Localized label for the type badge. */
  type: string;
  description: string;
  /** Image src; identical across locales. */
  image: string;
}

export interface SpeakingContent {
  header: { kanji: string; english: string; subtitle: string };
  intro: string;
  events: SpeakingEvent[];
}
