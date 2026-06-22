/**
 * Typed content model for the Research page. English and Japanese files both
 * satisfy `ResearchContent`, which keeps the two locales structurally 1:1 —
 * the compiler flags any field that drifts out of sync.
 */

export interface ResearchItem {
  /** Locale-free route; never translated. */
  href: string;
  title: string;
  /** Display label for the status badge (localized). */
  status: string;
  /** Stable style key (English) for badge colour. */
  statusVariant: string;
  themes: string[];
  description: string;
}

export interface InlineResearchCard {
  title: string;
  badgeLabel: string;
  badgeVariant: 'abstract' | 'progress';
  description: string;
}

export interface ConferencePaper {
  title: string;
  /** Stable style key. */
  type: 'Oral Presentation' | 'Interactive Presentation';
  /** Localized label for display. */
  typeLabel: string;
  symposium: string;
  date?: string;
}

export interface ConferenceData {
  event: string;
  location: string;
  organizer: string;
  highlight: string;
  tags: string[];
  papers: ConferencePaper[];
  focus: string;
}

export interface ResearchContent {
  header: { kanji: string; english: string; subtitle: string };
  intro: string;
  workingPaper: { heading: string; items: ResearchItem[] };
  inProgress: { heading: string; items: ResearchItem[] };
  conferenceDev: {
    heading: string;
    items: ResearchItem[];
    cards: InlineResearchCard[];
  };
  presentations: { heading: string; conference: ConferenceData };
  closingNote: string;
}
