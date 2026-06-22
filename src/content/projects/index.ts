import type { Locale } from '@/i18n/config';
import type { ProjectsContent } from './types';
import { projectsEn } from './en';
import { projectsJa } from './ja';

const byLocale: Record<Locale, ProjectsContent> = {
  en: projectsEn,
  ja: projectsJa,
};

export function getProjectsContent(locale: Locale): ProjectsContent {
  return byLocale[locale];
}

export type { ProjectsContent } from './types';
