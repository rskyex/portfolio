import type { OntologicalGovernanceObservatoryContent } from './types';

export const ontologicalGovernanceObservatoryEn: OntologicalGovernanceObservatoryContent = {
  backLabel: '← Back to Platforms',
  backHref: '/platforms',
  header: { kanji: '台', english: 'Ontological Governance Observatory' },
  status: 'In Progress',
  statusVariant: 'In Progress',
  image: {
    src: '/images/ogo-og.png',
    alt: 'Ontological Governance Observatory',
  },
  overview: {
    heading: 'Overview',
    paragraphs: [
      'A research platform that shows how current AI governance frameworks miss a deeper problem: AI does not only create risks and outputs, but can also reshape the human subject itself. Maps these changes across epistemic, ontological, and political layers to argue for a new form of second-order governance.',
      'The Ontological Governance Observatory is part of the Govern the Human project, which explores how AI reshapes human choice, identity, and self-understanding.',
    ],
  },
  tags: ['AI Governance', 'Ontological Risk', 'Second-Order Governance', 'Epistemic Restructuring'],
  techStack: {
    heading: 'Technical Stack',
    items: ['Next.js', 'React', 'TypeScript', 'D3.js', 'Tailwind CSS', 'Vercel'],
  },
};
