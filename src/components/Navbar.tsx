'use client';

import Link from 'next/link';
import { useState } from 'react';
import Tsubaki3D from './Tsubaki3D';
import LangToggle from './LangToggle';
import { useLocale, localeHomePath } from '@/lib/locale';
import { getDictionary } from '@/dictionaries';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const dict = getDictionary(locale);
  const home = localeHomePath(locale);

  const navLinks = [
    { href: home, label: dict.nav.home },
    { href: '/platforms', label: dict.nav.platforms },
    { href: '/research', label: dict.nav.research },
    { href: '/fieldwork', label: dict.nav.fieldwork },
    { href: '/about', label: dict.nav.about },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-kuro/90 backdrop-blur-xl border-b border-kin/[0.06]">
      {/* Neon top line */}
      <div className="glow-line-tsubaki" />
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href={home} className="flex items-center gap-3 group">
          <Tsubaki3D size="sm" />
          <span className="font-cormorant text-lg text-kin/90 tracking-wide group-hover:text-kin-glow transition-colors drop-shadow-[0_0_8px_rgba(212,160,23,0.2)] font-semibold">
            Risa Koyanagi
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.label}
              href={link.href}
              className="nav-link font-inter text-[13px] text-shiro/65 hover:text-shiro/90 transition-colors tracking-wider uppercase"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/Risa_Koyanagi_CV.pdf"
            download
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm border border-kin/25 bg-kin/[0.06] font-inter text-[11px] text-kin tracking-wider uppercase font-medium hover:bg-kin/[0.12] hover:border-kin/40 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            {dict.nav.cv}
          </a>
          <LangToggle
            groupLabel={dict.langToggle.groupLabel}
            englishLabel={dict.langToggle.english}
            japaneseLabel={dict.langToggle.japanese}
          />
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-3">
          <LangToggle
            groupLabel={dict.langToggle.groupLabel}
            englishLabel={dict.langToggle.english}
            japaneseLabel={dict.langToggle.japanese}
          />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-px bg-kin/50 transition-transform ${isOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
            <span className={`block w-5 h-px bg-kin/50 transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-kin/50 transition-transform ${isOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-kuro/95 backdrop-blur-xl border-t border-kin/[0.06]">
          <div className="px-6 py-6 flex flex-col gap-5">
            {navLinks.map(link => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-inter text-sm text-shiro/65 hover:text-shiro transition-colors tracking-wider uppercase"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/Risa_Koyanagi_CV.pdf"
              download
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-sm border border-kin/25 bg-kin/[0.06] font-inter text-xs text-kin tracking-wider uppercase font-medium hover:bg-kin/[0.12] hover:border-kin/40 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              {dict.nav.cv}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
