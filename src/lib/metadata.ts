import type { Metadata } from 'next';

/**
 * Per-page metadata helper.
 *
 * metadataBase is set once in the root layout, so `path` and `image` here are
 * given as root-relative URLs and resolved against the canonical origin at
 * build time. Each page passes its own title / description / path so that
 * title, meta description, canonical, and Open Graph / Twitter tags are unique
 * per route instead of inheriting the landing-page defaults.
 */

export const SITE_NAME = 'Risa Koyanagi';

/** Default social-share image (used where a page has no bespoke OG asset). */
const DEFAULT_OG = '/images/risa-koyanagi-og.png';

export interface PageMetaInput {
  /** Page-specific title, e.g. a platform name or research theme. */
  title: string;
  description: string;
  /** Root-relative canonical path, e.g. '/platforms/cyber'. */
  path: string;
  /** Optional bespoke OG image; falls back to the site default. */
  image?: string;
  /** OG locale; defaults to English. Pass 'ja_JP' for Japanese pages. */
  ogLocale?: string;
}

export function pageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG,
  ogLocale = 'en_US',
}: PageMetaInput): Metadata {
  const fullTitle = `${title} — ${SITE_NAME}`;
  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      locale: ogLocale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
