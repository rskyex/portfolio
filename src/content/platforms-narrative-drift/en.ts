import type { NarrativeDriftContent } from './types';

export const narrativeDriftEn: NarrativeDriftContent = {
  backLabel: '← Back to Platforms',
  backHref: '/platforms',
  header: { kanji: '台', english: 'Narrative Drift' },
  status: 'Live',
  statusVariant: 'Live',
  visitLabel: 'Visit platform →',
  visitUrl: 'https://narrative-drift.vercel.app/',
  image: {
    src: '/images/narrative drift-og.png',
    alt: 'Narrative Drift',
  },
  overview: {
    heading: 'Overview',
    paragraphs: [
      'An interactive simulation that lets users experience how AI systems can slowly reshape the way they choose, remember, and understand themselves. The user keeps making their own choices, but the conditions of those choices quietly change over time.',
      'Narrative Drift is part of the Govern the Human project, which explores how AI reshapes human choice, identity, and self-understanding across epistemic, ontological, and political layers.',
    ],
  },
  tags: ['AI Influence', 'Choice Architecture', 'Identity Simulation', 'Epistemic Drift'],
  techStack: {
    heading: 'Technical Stack',
    items: ['Next.js', 'React', 'TypeScript', 'D3.js', 'Tailwind CSS', 'Vercel'],
  },
};
