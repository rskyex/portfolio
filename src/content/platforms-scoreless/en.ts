import type { ScorelessContent } from './types';

export const scorelessEn: ScorelessContent = {
  backLabel: '← Back to Platforms',
  backHref: '/platforms',
  header: { kanji: '台', english: 'Scoreless' },
  status: 'In Progress',
  overview: {
    heading: 'Overview',
    paragraphs: [
      "A music analysis platform that makes classical music's structure, logic, and meaning accessible without requiring score literacy. Instead of describing works as simply “beautiful” or “sad,” it visualises thematic repetition, tension and release, formal development, and the intellectual and aesthetic implications that emerge — through timelines, motif displays, and commentary cards.",
      'Focused on public domain classical works, it treats music not as a matter of taste but as structured thought unfolding in time. Scoreless is part of the MYTHERA project.',
    ],
  },
  tags: ['Classical Music', 'Structural Analysis', 'Motif Tracking', 'Music Theory', 'Public Domain'],
  techStack: {
    heading: 'Technical Stack',
    items: ['Next.js', 'React', 'TypeScript', 'D3.js', 'Tailwind CSS', 'Vercel'],
  },
};
