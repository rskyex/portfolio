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

/** Styling/label discriminator for a paper, poster, or panel entry. */
export type PaperKind = 'oral' | 'interactive' | 'poster';

export interface PaperText {
  title: string;
  symposium: string;
  date?: string;
  /** Defaults to 'interactive' when omitted. */
  kind?: PaperKind;
}

export interface ConferenceLabels {
  eyebrow: string;
  papersCountPrefix: string;
  papersCountSuffix: string;
  viewPapers: string;
  collapse: string;
  researchFocus: string;
  paperTypes: {
    oral: string;
    interactive: string;
    poster: string;
  };
}

export interface ConferenceCardText {
  event: string;
  location: string;
  organizer: string;
  highlight: string;
  tags: string[];
  focus: string;
  papers: PaperText[];
  /** Per-card eyebrow override; falls back to the shared labels.eyebrow. */
  eyebrow?: string;
  /** When true, the card is hidden from the landing page (kept in data for
   *  easy re-enabling — e.g. a poster whose title is not yet confirmed). */
  hidden?: boolean;
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
    news: string;
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
    /** When true, the section is skipped on the landing page. The copy is kept
     *  in the dictionary so it can be published again by removing the flag;
     *  the /research pages are unaffected either way. */
    hidden?: boolean;
    items: ResearchText[];
  };
  conferenceSection: {
    heading: string;
    subtitle: string;
    /** When true, the accepted papers are expanded on load (JA layout). */
    defaultOpenPapers?: boolean;
    /** One card per accepted convening; rendered in order. */
    cards: ConferenceCardText[];
    /** Shared UI labels applied to every card in the locale. */
    labels: ConferenceLabels;
  };
  /** Labels for the News section (items live in src/data/news.json). */
  newsSection: {
    /** Landing-page section heading. */
    heading: string;
    /** Landing-page "View all →" link to the news index. */
    viewAll: string;
    /** /news page heading + <title>. */
    pageTitle: string;
    /** /news page subtitle line. */
    pageSubtitle: string;
    /** /news page meta description. */
    pageDescription: string;
  };
  /** Heading for the referee-comment section shown below News on the landing
   *  page; the comments themselves live in src/data/recommendations.json. */
  recommendationsSection: { heading: string };
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

export interface SkillGroup {
  title: string;
  /** Comma-style paragraphs (used by most groups). */
  paragraphs?: string[];
  /** Bulleted items (used by the technical group). Takes precedence over paragraphs. */
  bullets?: string[];
}

export interface CertificationItem {
  name: string;
  type?: string;
}

export interface ArtsLink {
  label: string;
  href: string;
}

export interface InterestGroup {
  label: string;
  items: string[];
}

/** Profile sections ported from the About page, shown on the landing pages.
 *  Education / CV entries themselves live in src/data/cv.json — only the
 *  section headings are locale copy here. */
export interface ExtraSections {
  /** Education-only cards (EN landing). Omitted where `cv` is present. */
  education?: { heading: string };
  /** Full CV — Education / Experience (JA landing). */
  cv?: { heading: string };
  /** Optional: omitted where the locale has no Certifications section. */
  certifications?: { heading: string; items: CertificationItem[] };
  /** Optional: the landing page may omit these when they live on the About page. */
  skills?: { heading: string; groups: SkillGroup[] };
  /** Optional: the landing page may omit these when they live on the About page. */
  languages?: { heading: string; items: string[] };
  /** Optional: omitted where the locale has no Arts section. */
  arts?: { heading: string; paragraphs: string[]; links: ArtsLink[] };
  /** Optional: the landing page may omit these when they live on the About page. */
  interests?: { heading: string; groups: InterestGroup[] };
  connect: { heading: string; galleryAlt: string; contactLabel: string };
}
