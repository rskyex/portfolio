'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useEdit } from '@/lib/editContext';
import Tsubaki3D from './Tsubaki3D';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/platforms', label: 'Platforms' },
  { href: '/research', label: 'Research' },
  { href: '/projects', label: 'Projects' },
  { href: '/speaking', label: 'Speaking' },
  { href: '/about', label: 'About' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isEditing, toggleEdit } = useEdit();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-kuro/90 backdrop-blur-xl border-b border-kin/[0.06]">
      {/* Neon top line */}
      <div className="glow-line-tsubaki" />
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Tsubaki3D size="sm" />
          <span className="font-kaisei text-xl text-kin/90 tracking-wide group-hover:text-kin-glow transition-colors drop-shadow-[0_0_8px_rgba(212,160,23,0.2)]">
            小柳璃紗
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link font-noto-sans text-[13px] text-shiro/50 hover:text-shiro/90 transition-colors tracking-wider uppercase"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={toggleEdit}
            className={`ml-4 px-3 py-1 text-xs font-noto-sans tracking-wider rounded border transition-all ${
              isEditing
                ? 'border-tsubaki-rose/50 text-tsubaki-rose bg-tsubaki-rose/10 shadow-[0_0_12px_rgba(233,30,99,0.15)]'
                : 'border-kin/15 text-kin/40 hover:text-kin/70 hover:border-kin/30 hover:shadow-[0_0_8px_rgba(212,160,23,0.1)]'
            }`}
          >
            {isEditing ? 'Editing' : 'Edit'}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
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
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-noto-sans text-sm text-shiro/50 hover:text-shiro transition-colors tracking-wider uppercase"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
