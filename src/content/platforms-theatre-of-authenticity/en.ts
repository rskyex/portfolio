import type { TheatreContent } from './types';

export const theatreEn: TheatreContent = {
  meta: {
    title: 'Theatre of Authenticity',
    description:
      'An experiential site that questions authenticity itself — visualising how far the motives behind our actions have been externalised',
  },
  backLabel: '← Back to MYTHERA',
  backHref: '/platforms/mythera',
  header: { kanji: '真', english: 'Theatre of Authenticity' },
  status: 'In Progress',
  imageSrc: '/images/Theatre of Authenticity.png',
  imageAlt: 'Theatre of Authenticity',
  overview: {
    heading: 'Overview',
    paragraphs: [
      'An experiential site that questions the very notion of authenticity. Are you truly acting from inner necessity, or are you constructing your self on the assumption of being observed? How far can the idea of a “true self” actually hold?',
      'Users make a series of choices, but partway through, external forces begin to intervene — the gaze of others, audiences, recording devices, praise, and backlash. Ultimately, the degree to which the motives behind one’s actions have been externalised is made visible.',
      'Spanning Mishima, Kierkegaard, Nietzsche, Sartre, and Bataille, it explores the interplay of authenticity, performance, beauty, death, and transcendence.',
    ],
  },
  coreQuestions: {
    heading: 'Core Questions',
    items: [
      'Are you truly acting from inner necessity?',
      'Are you constructing your self on the premise of being watched?',
      'How far can the idea of an “authentic self” actually hold?',
    ],
  },
  tags: [
    'Authenticity',
    'Performance',
    'Selfhood',
    'Existentialism',
    'Mishima',
    'Kierkegaard',
    'Nietzsche',
    'Sartre',
    'Bataille',
  ],
  techStack: {
    heading: 'Technical Stack',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
  },
};
