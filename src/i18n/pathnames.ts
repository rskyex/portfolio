/**
 * Every locale-free pathname the site renders. Used by the sitemap (and
 * available for any future per-route logic). Keep in sync with `src/app/[locale]`.
 */
export const pathnames = [
  '/',
  '/platforms',
  '/platforms/cyber',
  '/platforms/faultline',
  '/platforms/govern-the-human',
  '/platforms/lunar-mandate-atlas',
  '/platforms/mythera',
  '/platforms/narrative-drift',
  '/platforms/nuclear',
  '/platforms/ontological-governance-observatory',
  '/platforms/orbital',
  '/platforms/promise',
  '/platforms/scoreless',
  '/platforms/second-self',
  '/platforms/selftrace',
  '/platforms/theatre-of-authenticity',
  '/research',
  '/research/ai-cyber',
  '/research/fukushima',
  '/research/lunar',
  '/research/ontological-governance',
  '/fieldwork',
  '/about',
  '/projects',
  '/projects/afrecos',
  '/projects/art',
  '/projects/fukushima',
  '/projects/peace',
  '/speaking',
] as const;

export type Pathname = (typeof pathnames)[number];
