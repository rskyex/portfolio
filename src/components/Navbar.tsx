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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-indigo-950/95 backdrop-blur-sm border-b border-vermillion/15">
      <div className="asanoha-bg">
        {/* Thin vermillion top line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-vermillion/60 to-transparent" />
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="hanko font-kaisei text-lg text-vermillion/80 group-hover:text-vermillion transition-colors">
              小柳
            </span>
            <span className="font-kaisei text-xl text-gold-light tracking-wide group-hover:text-gold-pale transition-colors">
              璃紗
            </span>
            <span className="hidden sm:inline font-noto-sans text-sm text-washi/60 tracking-widest uppercase">
              Risa Koyanagi
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link font-noto-sans text-sm text-washi/80 hover:text-washi transition-colors tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={toggleEdit}
              className={`ml-4 px-3 py-1 text-xs font-noto-sans rounded border transition-all ${
                isEditing
                  ? 'border-vermillion text-vermillion bg-vermillion/10'
                  : 'border-gold/30 text-gold/60 hover:text-gold hover:border-gold/60'
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
            <span className={`block w-5 h-px bg-washi/80 transition-transform ${isOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
            <span className={`block w-5 h-px bg-washi/80 transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-washi/80 transition-transform ${isOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-indigo-950/98 border-t border-vermillion/10">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-noto-sans text-sm text-washi/80 hover:text-washi transition-colors tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => { toggleEdit(); setIsOpen(false); }}
              className={`self-start px-3 py-1 text-xs font-noto-sans rounded border transition-all ${
                isEditing
                  ? 'border-vermillion text-vermillion'
                  : 'border-gold/30 text-gold/60'
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
