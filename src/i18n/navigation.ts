import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

/**
 * Locale-aware navigation helpers. Use these instead of `next/link` and
 * `next/navigation` so locale prefixes are handled automatically.
 *
 * - `Link` / `useRouter` add the `/ja` prefix only when needed.
 * - `usePathname` returns the pathname WITHOUT the locale prefix, which makes
 *   it trivial to link to the same page in the other locale.
 */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
