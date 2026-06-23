'use client';

import Link from 'next/link';
import { useLocale, localeHomePath } from '@/lib/locale';

interface LangToggleProps {
  /** Visible label (the OTHER language, e.g. "日本語" on EN, "EN" on JA) */
  label: string;
  ariaLabel: string;
  className?: string;
  onNavigate?: () => void;
}

/**
 * Switches between the English (/) and Japanese (/ja) landing pages.
 * The URL is the source of truth; we only PERSIST the choice in localStorage
 * for convenience and never auto-redirect based on it.
 */
export default function LangToggle({ label, ariaLabel, className = '', onNavigate }: LangToggleProps) {
  const locale = useLocale();
  const target = locale === 'ja' ? 'en' : 'ja';
  const href = localeHomePath(target);

  const persist = () => {
    try {
      window.localStorage.setItem('preferred-locale', target);
    } catch {
      /* localStorage may be unavailable (private mode) — ignore */
    }
    onNavigate?.();
  };

  return (
    <Link
      href={href}
      hrefLang={target}
      scroll={false}
      onClick={persist}
      aria-label={ariaLabel}
      className={`inline-flex items-center justify-center min-w-[2.75rem] rounded-sm border border-kin/25 bg-kin/[0.06] px-3 py-1.5 font-inter text-xs font-medium uppercase tracking-widest text-kin transition-all duration-300 hover:border-kin/40 hover:bg-kin/[0.12] focus:outline-none focus-visible:ring-2 focus-visible:ring-kin/50 focus-visible:ring-offset-2 focus-visible:ring-offset-kuro ${className}`}
    >
      {label}
    </Link>
  );
}
