// Shared shape for all locale dictionaries.
// en.ts and ja.ts must implement this EXACT interface, so keys can never drift.
// Only the string VALUES differ between locales.

/** A run of text that may be bold — used for the hero paragraph inline emphasis. */
export interface TextSegment {
  text: string;
  bold?: boolean;
}

export interface PlatformChildText {
  slug: string;
  name: string;
  description: string;
}

export interface PlatformText {
  slug: string;
  title: string;
  description: string;
  children?: PlatformChildText[];
}

export interface ResearchText {
  slug: string;
  title: string;
  description: string;
}

export interface PaperText {
  title: string;
  symposium: string;
  date?: string;
}

export interface ProjectText {
  slug: string;
  title: string;
  description: string;
  role?: string;
}

export interface SpeakingText {
  slug: string;
  title: string;
  context: string;
  type: string;
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
    ogLocale: string;
  };
  nav: {
    home: string;
    platforms: string;
    research: string;
    fieldwork: string;
    about: string;
  };
  langToggle: {
    /** Visible label of the button (the OTHER language) */
    label: string;
    ariaLabel: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: TextSegment[];
    ctaPlatforms: string;
    ctaResearch: string;
    contact: string;
  };
  platformsSection: {
    heading: string;
    flagship: string;
    viewPlatform: string;
    viewAll: string;
    wip: string;
    items: PlatformText[];
  };
  researchSection: {
    heading: string;
    subtitle: string;
    viewAll: string;
    items: ResearchText[];
  };
  conferenceSection: {
    heading: string;
    subtitle: string;
    card: {
      event: string;
      location: string;
      organizer: string;
      highlight: string;
      tags: string[];
      focus: string;
      papers: PaperText[];
      labels: {
        eyebrow: string;
        papersCountPrefix: string;
        papersCountSuffix: string;
        viewPapers: string;
        collapse: string;
        researchFocus: string;
        paperTypes: {
          oral: string;
          interactive: string;
        };
      };
    };
  };
  fieldworkSection: {
    heading: string;
    subtitle: string;
    speakingHeading: string;
    viewAll: string;
    projects: ProjectText[];
    speaking: SpeakingText[];
  };
}
