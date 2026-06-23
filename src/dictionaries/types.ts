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
    /** aria-label for the toggle group as a whole */
    groupLabel: string;
    /** aria-label for the English segment */
    english: string;
    /** aria-label for the Japanese segment */
    japanese: string;
  };
  hero: {
    eyebrow: string;
    /** Optional: omitted in locales that don't show a tagline (e.g. JA). */
    title?: string;
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
    /** When true, the accepted papers are expanded on load (JA layout). */
    defaultOpenPapers?: boolean;
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
  /** Null in a locale that omits this section entirely (e.g. the JA page). */
  fieldworkSection: FieldworkSection | null;
  /** When true, render the Conference section before Research (JA layout). */
  conferenceFirst?: boolean;
  /** Locale-specific extra sections appended after the core content (JA only). */
  extra?: ExtraSections;
}

export interface FieldworkSection {
  heading: string;
  subtitle: string;
  speakingHeading: string;
  viewAll: string;
  projects: ProjectText[];
  speaking: SpeakingText[];
}

export interface EducationItem {
  institution: string;
  period: string;
  degree?: string;
  detail?: string;
}

export interface SkillGroup {
  title: string;
  paragraphs: string[];
}

export interface ArtsLink {
  label: string;
  href: string;
}

export interface InterestGroup {
  label: string;
  items: string[];
}

/** Profile sections ported from the About page, shown only on the JA landing page. */
export interface ExtraSections {
  education: { heading: string; items: EducationItem[] };
  skills: { heading: string; groups: SkillGroup[] };
  languages: { heading: string; items: string[] };
  /** Optional: omitted where the locale has no Arts section. */
  arts?: { heading: string; paragraphs: string[]; links: ArtsLink[] };
  interests: { heading: string; groups: InterestGroup[] };
  connect: { heading: string; galleryAlt: string; contactLabel: string };
}
