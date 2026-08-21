'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale, type Locale } from '@/lib/locale';
import { pathnameForLocale } from '@/lib/paths';

const SEGMENTS: { locale: Locale; label: string }[] = [
  { locale: 'en', label: 'EN' },
  { locale: 'ja', label: '日本語' },
];

interface LangToggleProps {
  groupLabel: string;
  englishLabel: string;
  japaneseLabel: string;
  className?: string;
  onNavigate?: () => void;
}

/**
 * Segmented EN / 日本語 language switcher. Both languages are always shown so
 * the control is self-explanatory; the active locale is highlighted and the
 * other is a link. Pages that exist in both languages (e.g. /news) toggle in
 * place; everything else falls back to the locale's home page. The URL is the
 * source of truth — we only PERSIST the choice in localStorage and never
 * auto-redirect based on it.
 */
export default function LangToggle({
  groupLabel,
  englishLabel,
  japaneseLabel,
  className = '',
  onNavigate,
}: LangToggleProps) {
  const locale = useLocale();
  const pathname = usePathname() ?? '/';

  const persist = (target: Locale) => {
    try {
      window.localStorage.setItem('preferred-locale', target);
    } catch {
      /* localStorage may be unavailable (private mode) — ignore */
    }
    onNavigate?.();
  };

  return (
    <div
      role="group"
      aria-label={groupLabel}
      className={`inline-flex items-center gap-1 rounded-sm border border-kin/25 bg-kin/[0.04] p-[3px] ${className}`}
    >
      {/* Globe icon to signal "language" at a glance */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="ml-1 text-kin/70"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>

      {SEGMENTS.map((seg) => {
        const isActive = seg.locale === locale;
        const ariaLabel = seg.locale === 'en' ? englishLabel : japaneseLabel;
        const base =
          'inline-flex items-center justify-center rounded-[2px] px-2.5 py-1 font-inter text-xs font-semibold tracking-wider transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-kin/50';

        if (isActive) {
          return (
            <span
              key={seg.locale}
              aria-current="true"
              aria-label={ariaLabel}
              className={`${base} bg-kin/20 text-kin shadow-[inset_0_0_8px_rgba(212,160,23,0.12)]`}
            >
              {seg.label}
            </span>
          );
        }

        return (
          <Link
            key={seg.locale}
            href={pathnameForLocale(pathname, seg.locale)}
            hrefLang={seg.locale}
            scroll={false}
            onClick={() => persist(seg.locale)}
            aria-label={ariaLabel}
            className={`${base} text-shiro/55 hover:bg-kin/[0.1] hover:text-shiro/90`}
          >
            {seg.label}
          </Link>
        );
      })}
    </div>
  );
}
