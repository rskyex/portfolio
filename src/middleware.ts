import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

// Handles locale detection (cookie first, then Accept-Language) and rewrites
// requests so English is served from the root and Japanese from `/ja`.
export default createMiddleware(routing);

export const config = {
  // Match all pathnames except API routes, Next internals, and files with an
  // extension (images, fonts, etc.). This leaves existing English URLs intact.
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
