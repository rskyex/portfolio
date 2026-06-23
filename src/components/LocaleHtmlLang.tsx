'use client';

import { useEffect } from 'react';
import { useLocale } from '@/lib/locale';

/**
 * Keeps <html lang> in sync with the active locale on the client (including
 * client-side navigations). The server renders lang="en" by default; on the
 * /ja route this corrects it to "ja". Per-page hreflang alternates in metadata
 * provide the static SEO signal.
 */
export default function LocaleHtmlLang() {
  const locale = useLocale();

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
