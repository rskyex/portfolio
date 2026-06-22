import type { MytheraContent } from './types';

export const mytheraEn: MytheraContent = {
  backLabel: '← Back to Ongoing Projects',
  backHref: '/platforms',
  header: {
    kanji: '台',
    english: 'MYTHERA',
    subtitle: 'Interpretive Studio',
  },
  status: 'Live',
  statusVariant: 'Live',
  visitLabel: 'mythera.vercel.app →',
  visitUrl: 'https://mythera.vercel.app/',
  image: {
    src: '/images/mythera og.png',
    alt: 'MYTHERA',
  },
  overview: {
    heading: 'Overview',
    paragraphs: [
      'MYTHERA is an interpretive studio and conceptual world for exploring invisible structures across selfhood, systems, literature, performance, and aesthetic form. It treats culture not as content to be consumed but as territory to be mapped — building navigable worlds from the patterns that shape how we read, perform, and become.',
      'Each world within MYTHERA isolates a different axis of meaning — from the architecture of personal identity to the legibility of aesthetic experience — and renders it explorable through interpretive frameworks, visual structure, and rigorous inquiry.',
    ],
  },
  tags: ['Interpretive Worlds', 'Selfhood', 'Literature & Performance', 'Aesthetic Legibility'],
  subProjects: [
    {
      title: 'Scoreless',
      description:
        "A music analysis platform that makes classical music's structure, logic, and meaning accessible without requiring score literacy. Instead of describing works as simply 'beautiful' or 'sad,' it visualises thematic repetition, tension and release, formal development, and the intellectual and aesthetic implications that emerge — through timelines, motif displays, and commentary cards. Focused on public domain classical works, it treats music not as a matter of taste but as structured thought unfolding in time.",
      tags: ['Classical Music', 'Structural Analysis', 'Motif Tracking', 'Music Theory', 'Public Domain'],
    },
    {
      title: 'Theatre of Authenticity',
      description:
        'An experiential site that questions authenticity itself. Users make a series of choices, but partway through, the gaze of others, audiences, recording devices, praise, and backlash begin to intervene. Ultimately, the degree to which the motives behind one\'s actions have been externalised is made visible. Spanning Mishima, Kierkegaard, Nietzsche, Sartre, and Bataille, it explores the interplay of authenticity, performance, beauty, death, and transcendence.',
      tags: ['Authenticity', 'Performance', 'Selfhood', 'Existentialism', 'Mishima', 'Kierkegaard'],
      image: '/images/Theatre of Authenticity.png',
      href: '/platforms/theatre-of-authenticity',
    },
    {
      title: 'Second Self',
      description:
        'An online philosophical card game exploring AI, memory, governance, and the formation of subjectivity. Set in a near future where algorithmic systems permeate the deep layers of society, players design a society and determine what kind of human subjects emerge. Playing a card rewrites the conditions of society and shifts the very terms on which selfhood is constituted.',
      tags: ['Philosophy', 'Card Game', 'AI Governance', 'Subjectivity', 'Social Design'],
      image: '/images/secondself_og.png',
      href: '/platforms/second-self',
    },
  ],
  techStack: {
    heading: 'Technical Stack',
    items: ['Next.js', 'React', 'TypeScript', 'D3.js', 'Tailwind CSS', 'Vercel'],
  },
};
