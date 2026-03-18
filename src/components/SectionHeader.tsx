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
      className={`washi-bg relative overflow-hidden rounded-sm ${isFlashing ? 'save-flash' : ''} ${isEditing ? 'edit-mode' : ''}`}
    >
      {/* Subtle vermillion top accent */}
      <div className="absolute top-0 left-0 w-16 h-0.5 bg-vermillion/60" />

      {/* Thin gold bottom rule */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="px-8 py-8 md:py-10">
        <div className="flex items-end gap-4">
          <span className="font-kaisei text-5xl md:text-6xl text-indigo-800/20 leading-none select-none">
            {kanji}
          </span>
          <div className="flex-1">
            <h2
              className="font-noto-sans text-lg md:text-xl font-medium text-ink tracking-wider uppercase"
              contentEditable={isEditing}
              suppressContentEditableWarning
            >
              {english}
            </h2>
            {subtitle && (
              <p
                className="font-noto-sans text-sm text-warm-brown mt-1"
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
              className="px-3 py-1 text-xs font-noto-sans text-gold border border-gold/30 rounded hover:bg-gold/10 transition-colors"
            >
              Save
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
