'use client';

import { ReactNode } from 'react';
import { useEdit } from '@/lib/editContext';

interface WhiteCardProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function WhiteCard({ children, className = '', id }: WhiteCardProps) {
  const { isEditing, saveSection, flashingSections } = useEdit();
  const isFlashing = id ? flashingSections.has(id) : false;

  return (
    <div
      id={id}
      className={`lacquer-panel rounded-sm card-hover ${isFlashing ? 'save-flash' : ''} ${isEditing ? 'edit-mode' : ''} ${className}`}
    >
      {children}
      {isEditing && id && (
        <div className="px-6 pb-3 flex justify-end">
          <button
            onClick={() => saveSection(id)}
            className="px-2 py-0.5 text-xs font-noto-sans text-gold/50 border border-gold/20 rounded-sm hover:bg-gold/10 transition-colors"
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
}
