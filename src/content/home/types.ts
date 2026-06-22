/**
 * Typed content model for the Home page. English and Japanese files both
 * satisfy `HomeContent`, which keeps the two locales structurally 1:1 — the
 * compiler flags any field that drifts out of sync.
 *
 * Hrefs, image `src`, external URLs, and kanji glyphs are identical across
 * locales (data, not translated). Image `alt` text IS translated.
 * `status` on child platforms is a STABLE English key (drives the WIP badge),
 * so it is never localized.
 */

export interface ChildPlatform {
  name: string;
  href: string;
  description: string;
  /** Stable English key — drives the WIP badge render. Never localized. */
  status: 'Live' | 'In Progress';
  image: string;
  /** Translated alt text for the child OG image. */
  imageAlt: string;
}

export interface ParentPlatform {
  title: string;
  href: string;
  liveUrl?: string;
  description: string;
  image: string;
  /** Translated alt text for the parent OG image. */
  imageAlt: string;
  children?: ChildPlatform[];
}

export interface ResearchItem {
  href: string;
  title: string;
  description: string;
}

export interface ConferencePaper {
  title: string;
  /** Stable style key (English). */
  type: 'Oral Presentation' | 'Interactive Presentation';
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

export interface ProjectItem {
  href: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  period?: string;
  role?: string;
}

export interface SpeakingItem {
  title: string;
  context: string;
  type: string;
  image: string;
}

/**
 * Hero description is rendered with inline <strong> emphasis. To preserve the
 * exact markup byte-for-byte, the description is modelled as an ordered list of
 * segments; each segment is plain text or an emphasised run.
 */
export interface HeroSegment {
  text: string;
  strong?: boolean;
}

export interface HomeContent {
  hero: {
    name: string;
    romaji: string;
    eyebrow: string;
    title: string;
    /** Ordered segments composing the frosted bio paragraph. */
    description: HeroSegment[];
    ctaPlatforms: string;
    ctaResearch: string;
    linkedinLabel: string;
    instagramLabel: string;
    githubLabel: string;
    contactLabel: string;
    photoAlt: string;
  };
  platforms: {
    header: { kanji: string; english: string };
    flagshipLabel: string;
    viewPlatform: string;
    wipLabel: string;
    viewAll: string;
    items: ParentPlatform[];
  };
  research: {
    header: { kanji: string; english: string; subtitle: string };
    viewAll: string;
    items: ResearchItem[];
  };
  conference: {
    header: { kanji: string; english: string; subtitle: string };
    data: ConferenceData;
  };
  fieldwork: {
    header: { kanji: string; english: string; subtitle: string };
    projects: ProjectItem[];
    speakingHeading: string;
    speaking: SpeakingItem[];
    viewAll: string;
  };
}
