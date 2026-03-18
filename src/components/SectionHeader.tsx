'use client';

import { useEdit } from '@/lib/editContext';

interface SectionHeaderProps {
  kanji: string;
  english: string;
  subtitle?: string;
  id?: string;
}

export default function SectionHeader({ kanji, english, subtitle, id }: SectionHeaderProps) {
  const { isEditing, saveSection, flashingSections } = useEdit();
  const sectionId = id || `section-${english.toLowerCase().replace(/\s+/g, '-')}`;
  const isFlashing = flashingSections.has(sectionId);

  return (
    <div
      id={sectionId}
      className={`relative overflow-hidden ${isFlashing ? 'save-flash' : ''} ${isEditing ? 'edit-mode' : ''}`}
    >
      {/* Lacquer panel with inset depth */}
      <div className="lacquer-panel rounded-sm">
        {/* Vermillion top accent */}
        <div className="absolute top-0 left-0 w-20 h-[1px] bg-gradient-to-r from-vermillion/50 to-transparent" />
        {/* Gold accent right */}
        <div className="absolute top-0 right-0 w-12 h-[1px] bg-gradient-to-l from-gold/30 to-transparent" />

        {/* Corner tsubaki petal */}
        <div className="absolute bottom-2 right-3 opacity-[0.06]">
          <svg width="32" height="32" viewBox="0 0 32 32">
            <ellipse cx="16" cy="8" rx="5" ry="9" fill="none" stroke="#c53d2f" strokeWidth="0.6" transform="rotate(0 16 16)" />
            <ellipse cx="16" cy="8" rx="5" ry="9" fill="none" stroke="#c53d2f" strokeWidth="0.6" transform="rotate(72 16 16)" />
            <ellipse cx="16" cy="8" rx="5" ry="9" fill="none" stroke="#c53d2f" strokeWidth="0.6" transform="rotate(144 16 16)" />
            <ellipse cx="16" cy="8" rx="5" ry="9" fill="none" stroke="#d4918a" strokeWidth="0.5" transform="rotate(216 16 16)" />
            <ellipse cx="16" cy="8" rx="5" ry="9" fill="none" stroke="#d4918a" strokeWidth="0.5" transform="rotate(288 16 16)" />
            <circle cx="16" cy="16" r="2.5" fill="#d4af37" opacity="0.3" />
          </svg>
        </div>

        {/* Bottom border gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-vermillion/15 via-gold/20 to-vermillion/15" />

        <div className="px-8 py-8 md:py-10">
          <div className="flex items-end gap-5">
            <span className="font-kaisei text-5xl md:text-6xl text-vermillion/10 leading-none select-none">
              {kanji}
            </span>
            <div className="flex-1">
              <h2
                className="font-noto-sans text-sm md:text-base font-medium text-washi/90 tracking-[0.2em] uppercase"
                contentEditable={isEditing}
                suppressContentEditableWarning
              >
                {english}
              </h2>
              {subtitle && (
                <p
                  className="font-noto-sans text-xs text-washi/35 mt-1.5 tracking-wide"
                  contentEditable={isEditing}
                  suppressContentEditableWarning
                >
                  {subtitle}
                </p>
              )}
            </div>
            {isEditing && (
              <button
                onClick={() => saveSection(sectionId)}
                className="px-3 py-1 text-xs font-noto-sans text-vermillion border border-vermillion/30 rounded-sm hover:bg-vermillion/10 transition-colors"
              >
                Save
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
