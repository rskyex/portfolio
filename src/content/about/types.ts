/**
 * Typed content model for the About page. English and Japanese files both
 * satisfy `AboutContent`, keeping the two locales structurally 1:1.
 *
 * Hrefs, image `src`, external URLs, and kanji glyphs are identical across
 * locales. Image `alt` text IS translated. Proper nouns / tech names are kept
 * as data and translated only as review drafts where appropriate.
 */

export interface AboutMeta {
  title: string;
  description: string;
}

/**
 * The Profile paragraphs carry inline <strong> emphasis. Modelled as ordered
 * segments to reproduce the exact markup.
 */
export interface ProfileSegment {
  text: string;
  strong?: boolean;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  detail?: string;
}

export interface AffiliationItem {
  institution: string;
  detail: string;
  role?: string;
}

export interface AwardItem {
  title: string;
  detail: string;
}

export interface AboutContent {
  meta: AboutMeta;
  header: { kanji: string; english: string; subtitle: string };
  profile: {
    photoAlt: string;
    heading: string;
    /** Each paragraph is an ordered list of (possibly emphasised) segments. */
    paragraphs: ProfileSegment[][];
    viewResearch: string;
    viewPlatforms: string;
  };
  education: {
    heading: string;
    items: EducationItem[];
  };
  skills: {
    heading: string;
    research: { heading: string; paragraphs: string[] };
    policy: { heading: string; paragraphs: string[] };
    technical: { heading: string; paragraphs: string[] };
  };
  languages: {
    heading: string;
    items: string[];
  };
  roles: {
    heading: string;
    institution: string;
    location: string;
    title: string;
    description: string;
  };
  affiliations: {
    heading: string;
    items: AffiliationItem[];
  };
  awards: {
    heading: string;
    items: AwardItem[];
  };
  arts: {
    heading: string;
    paragraphs: string[];
    mytheraLabel: string;
    artPracticeLabel: string;
  };
  interests: {
    heading: string;
    items: string[];
  };
  connect: {
    heading: string;
    galleryAlt: string;
    instagramLabel: string;
    linkedinLabel: string;
    contactLabel: string;
  };
}
