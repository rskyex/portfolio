'use client';

import { useLocale } from 'next-intl';
import { usePathname, Link } from '@/i18n/navigation';
import { locales, localeLabels, type Locale } from '@/i18n/config';

/**
 * EN / 日本語 toggle. Navigates to the SAME page in the other locale (next-intl's
 * `usePathname` returns the locale-free pathname, so we just re-render it under
 * the target locale). Selecting a language sets the `NEXT_LOCALE` cookie via
 * next-intl routing, so the choice persists on the next visit.
 */
export default function LanguageToggle({ className = '' }: { className?: string }) {
  const active = useLocale() as Locale;
  const pathname = usePathname();

  return (
    <div className={`flex items-center gap-2 ${className}`} role="group" aria-label="Language">
      {locales.map((locale, i) => (
        <span key={locale} className="flex items-center gap-2">
          {i > 0 && <span className="text-kin/30 text-[11px]" aria-hidden>/</span>}
          {locale === active ? (
            <span
              aria-current="true"
              className="font-inter text-[11px] tracking-wider uppercase text-kin/90"
            >
              {localeLabels[locale]}
            </span>
          ) : (
            <Link
              href={pathname}
              locale={locale}
              hrefLang={locale}
              className="font-inter text-[11px] tracking-wider uppercase text-shiro/50 hover:text-shiro/90 transition-colors"
            >
              {localeLabels[locale]}
            </Link>
          )}
        </span>
      ))}
    </div>
  );
}
