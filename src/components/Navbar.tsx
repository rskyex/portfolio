'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useEdit } from '@/lib/editContext';

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-indigo-950/95 backdrop-blur-md border-b border-gold/[0.06]">
      {/* Ultra-thin vermillion-gold top accent */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-vermillion/50 to-transparent" />
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          {/* Tsubaki crest mark */}
          <span className="relative flex items-center justify-center w-8 h-8">
            <svg width="28" height="28" viewBox="0 0 28 28" className="opacity-40 group-hover:opacity-60 transition-opacity">
              <ellipse cx="14" cy="8" rx="4" ry="7" fill="none" stroke="#c53d2f" strokeWidth="0.8" transform="rotate(0 14 14)" />
              <ellipse cx="14" cy="8" rx="4" ry="7" fill="none" stroke="#c53d2f" strokeWidth="0.8" transform="rotate(72 14 14)" />
              <ellipse cx="14" cy="8" rx="4" ry="7" fill="none" stroke="#c53d2f" strokeWidth="0.8" transform="rotate(144 14 14)" />
              <ellipse cx="14" cy="8" rx="4" ry="7" fill="none" stroke="#d4918a" strokeWidth="0.6" transform="rotate(216 14 14)" />
              <ellipse cx="14" cy="8" rx="4" ry="7" fill="none" stroke="#d4918a" strokeWidth="0.6" transform="rotate(288 14 14)" />
              <circle cx="14" cy="14" r="2.5" fill="#d4af37" opacity="0.3" />
            </svg>
          </span>
          <span className="font-kaisei text-xl text-gold-light/90 tracking-wide group-hover:text-gold-light transition-colors">
            小柳璃紗
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link font-noto-sans text-[13px] text-washi/60 hover:text-washi/90 transition-colors tracking-wider uppercase"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={toggleEdit}
            className={`ml-4 px-3 py-1 text-xs font-noto-sans tracking-wide rounded-sm border transition-all ${
              isEditing
                ? 'border-vermillion/40 text-vermillion bg-vermillion/10'
                : 'border-gold/15 text-gold/40 hover:text-gold/70 hover:border-gold/30'
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
          <span className={`block w-5 h-px bg-washi/60 transition-transform ${isOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
          <span className={`block w-5 h-px bg-washi/60 transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-washi/60 transition-transform ${isOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-indigo-950/98 backdrop-blur-md border-t border-gold/[0.06]">
          <div className="px-6 py-6 flex flex-col gap-5">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-noto-sans text-sm text-washi/60 hover:text-washi transition-colors tracking-wider uppercase"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => { toggleEdit(); setIsOpen(false); }}
              className={`self-start px-3 py-1 text-xs font-noto-sans tracking-wide rounded-sm border transition-all ${
                isEditing
                  ? 'border-vermillion/40 text-vermillion'
                  : 'border-gold/15 text-gold/40'
              }`}
            >
              {isEditing ? 'Editing' : 'Edit'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
