import type { Locale } from '@/lib/locale';
import newsData from '@/data/news.json';
import cvData from '@/data/cv.json';
import recommendationsData from '@/data/recommendations.json';

/* ─── Bilingual content loaded from src/data/*.json ───
   The JSON files are the single source of truth for News and CV entries;
   adding an object there is all that is needed to publish a new item. */

/** A string carried in both site languages. */
export interface Bilingual {
  en: string;
  ja: string;
}

export type NewsCategory =
  | 'publication'
  | 'talk'
  | 'award'
  | 'appointment'
  | 'media'
  | 'misc';

export interface NewsItem {
  /** ISO date (YYYY-MM-DD); drives sorting and display formatting. */
  date: string;
  /** Marks an estimated date (bookkeeping only — not rendered). */
  approx?: boolean;
  category: NewsCategory;
  text: Bilingual;
  links?: string[];
  /** Optional photos shown alongside the entry (paths under /public). */
  images?: {
    src: string;
    alt: Bilingual;
  }[];
}

export interface EducationEntry {
  institution: Bilingual;
  degree: Bilingual;
  /** May be empty while a period is unconfirmed (see _todo notes in cv.json). */
  period: Bilingual;
}

export interface ExperienceEntry {
  organisation: Bilingual;
  role: Bilingual;
  /** May be empty while a period is unconfirmed (see _todo notes in cv.json). */
  period: Bilingual;
  location?: Bilingual;
  note?: Bilingual;
}

export interface CvData {
  education: EducationEntry[];
  experience: ExperienceEntry[];
}

/** Category badge labels — kept in English in both locales, as is conventional
 *  for academic news feeds. */
export const NEWS_CATEGORY_LABELS: Record<NewsCategory, string> = {
  publication: 'Publication',
  talk: 'Talk',
  award: 'Award',
  appointment: 'Appointment',
  media: 'Media',
  misc: 'Misc',
};

/** All news items, newest first. */
export function getNewsItems(): NewsItem[] {
  return [...(newsData.items as NewsItem[])].sort((a, b) =>
    b.date.localeCompare(a.date)
  );
}

/** The latest `count` news items (for the landing-page section). */
export function getLatestNews(count: number): NewsItem[] {
  return getNewsItems().slice(0, count);
}

/** News items grouped by year, newest year (and newest item) first. */
export function getNewsByYear(): { year: string; items: NewsItem[] }[] {
  const groups: { year: string; items: NewsItem[] }[] = [];
  for (const item of getNewsItems()) {
    const year = item.date.slice(0, 4);
    const last = groups[groups.length - 1];
    if (last && last.year === year) last.items.push(item);
    else groups.push({ year, items: [item] });
  }
  return groups;
}

export function getCv(): CvData {
  return cvData as CvData;
}

/** A referee comment, quoted verbatim in both languages. */
export interface Recommendation {
  name: Bilingual;
  /** Role and affiliation of the referee. */
  title: Bilingual;
  quote: Bilingual;
  /** Optional portrait under /public/images. */
  image?: string;
}

export function getRecommendations(): Recommendation[] {
  return recommendationsData.items as Recommendation[];
}

const MONTHS_EN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** "2026-08-21" → "21 Aug 2026" (EN) / 「2026年8月21日」 (JA).
 *  Parsed by hand so the rendered date never shifts with the build timezone. */
export function formatNewsDate(isoDate: string, locale: Locale): string {
  const [year, month, day] = isoDate.split('-').map(Number);
  return locale === 'ja'
    ? `${year}年${month}月${day}日`
    : `${day} ${MONTHS_EN[month - 1]} ${year}`;
}

/** Bare hostname of a link, used as its display label (e.g. "faultline-nqmm.vercel.app"). */
export function linkLabel(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
}
