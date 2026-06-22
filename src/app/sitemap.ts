import type { MetadataRoute } from 'next';
import { locales, defaultLocale } from '@/i18n/config';
import { pathnames } from '@/i18n/pathnames';
import { localeUrl } from '@/i18n/metadata';

export default function sitemap(): MetadataRoute.Sitemap {
  return pathnames.map((pathname) => {
    const languages: Record<string, string> = {};
    for (const locale of locales) {
      languages[locale] = localeUrl(locale, pathname);
    }
    languages['x-default'] = localeUrl(defaultLocale, pathname);

    return {
      url: localeUrl(defaultLocale, pathname),
      lastModified: new Date(),
      alternates: { languages },
    };
  });
}
