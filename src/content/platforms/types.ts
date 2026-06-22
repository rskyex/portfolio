/**
 * Typed content model for the Platforms index/listing page. English and Japanese
 * files both satisfy `PlatformsContent`, keeping the two locales structurally 1:1.
 */

export interface PlatformCardData {
  /** Locale-free route; never translated. */
  href: string;
  title: string;
  description: string;
  /** Display label for the status badge (localized). */
  status: string;
  /** Stable style key (English) for badge colour. */
  statusVariant: string;
  /** External URL; never translated. */
  liveUrl?: string;
  tags: string[];
  /** Image src; never translated. */
  image: string;
  coreQuestion: string;
}

export interface SubProjectData {
  name: string;
  /** Locale-free route; never translated. */
  href: string;
}

export interface FlagshipCardData {
  /** Locale-free route; never translated. */
  href: string;
  title: string;
  description: string;
  includes: string;
  /** External URL; never translated. */
  liveUrl?: string;
  /** Image src; never translated. */
  image: string;
  subProjects: SubProjectData[];
}

export interface PlatformsSectionHeading {
  title: string;
  subtitle: string;
}

export interface PlatformsContent {
  header: { kanji: string; english: string; subtitle: string };
  intro: string;
  researchPlatforms: PlatformsSectionHeading & { cards: PlatformCardData[] };
  flagship: PlatformsSectionHeading & {
    card: FlagshipCardData;
    subProjectsLabel: string;
    subProjects: PlatformCardData[];
  };
  otherProjects: PlatformsSectionHeading & { cards: PlatformCardData[] };
  closingNote: string;
}
