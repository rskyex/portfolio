'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Tsubaki3D from './Tsubaki3D';
import LanguageToggle from './LanguageToggle';

const navItems = [
  { href: '/', key: 'home' },
  { href: '/platforms', key: 'platforms' },
  { href: '/research', key: 'research' },
  { href: '/fieldwork', key: 'fieldwork' },
  { href: '/about', key: 'about' },
] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('nav');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-kuro/90 backdrop-blur-xl border-b border-kin/[0.06]">
      {/* Neon top line */}
      <div className="glow-line-tsubaki" />
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Tsubaki3D size="sm" />
          <span className="font-cormorant text-lg text-kin/90 tracking-wide group-hover:text-kin-glow transition-colors drop-shadow-[0_0_8px_rgba(212,160,23,0.2)] font-semibold">
            Risa Koyanagi
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link font-inter text-[13px] text-shiro/65 hover:text-shiro/90 transition-colors tracking-wider uppercase"
            >
              {t(item.key)}
            </Link>
          ))}
          <LanguageToggle className="pl-2 border-l border-kin/[0.12]" />
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label={t('toggleMenu')}
        >
          <span className={`block w-5 h-px bg-kin/50 transition-transform ${isOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
          <span className={`block w-5 h-px bg-kin/50 transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-kin/50 transition-transform ${isOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-kuro/95 backdrop-blur-xl border-t border-kin/[0.06]">
          <div className="px-6 py-6 flex flex-col gap-5">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="font-inter text-sm text-shiro/65 hover:text-shiro transition-colors tracking-wider uppercase"
              >
                {t(item.key)}
              </Link>
            ))}
            <LanguageToggle className="pt-3 border-t border-kin/[0.08]" />
          </div>
        </div>
      )}
    </nav>
  );
}
