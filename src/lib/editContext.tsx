'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface EditContextType {
  isEditing: boolean;
  toggleEdit: () => void;
  saveSection: (sectionId: string) => void;
  flashingSections: Set<string>;
}

const EditContext = createContext<EditContextType>({
  isEditing: false,
  toggleEdit: () => {},
  saveSection: () => {},
  flashingSections: new Set(),
});

export function EditProvider({ children }: { children: ReactNode }) {
  const [isEditing, setIsEditing] = useState(false);
  const [flashingSections, setFlashingSections] = useState<Set<string>>(new Set());

  const toggleEdit = useCallback(() => {
    setIsEditing(prev => !prev);
  }, []);

  const saveSection = useCallback((sectionId: string) => {
    setFlashingSections(prev => new Set(prev).add(sectionId));
    setTimeout(() => {
      setFlashingSections(prev => {
        const next = new Set(prev);
        next.delete(sectionId);
        return next;
      });
    }, 600);

    // Persist to localStorage
    const el = document.getElementById(sectionId);
    if (el) {
      const editables = el.querySelectorAll('[contenteditable]');
      const data: Record<string, string> = {};
      editables.forEach((node, i) => {
        data[`${sectionId}-${i}`] = node.innerHTML;
      });
      try {
        const stored = JSON.parse(localStorage.getItem('portfolio-edits') || '{}');
        localStorage.setItem('portfolio-edits', JSON.stringify({ ...stored, ...data }));
      } catch {}
    }
  }, []);

  return (
    <EditContext.Provider value={{ isEditing, toggleEdit, saveSection, flashingSections }}>
      {children}
    </EditContext.Provider>
  );
}

export const useEdit = () => useContext(EditContext);
