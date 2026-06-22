import type { GovernTheHumanContent } from './types';

export const governTheHumanEn: GovernTheHumanContent = {
  backLabel: '← Back to Ongoing Projects',
  backHref: '/platforms',
  header: {
    kanji: '台',
    english: 'Govern the Human',
    subtitle: 'AI, Identity, and Second-Order Governance',
  },
  status: 'Live',
  statusVariant: 'Live',
  visitLabel: 'Visit platform →',
  visitUrl: 'https://govern-the-human.vercel.app/',
  image: {
    src: '/images/govern the human og.png',
    alt: 'Govern the Human',
  },
  overview: {
    heading: 'Overview',
    paragraphs: [
      'Govern the Human is a unified platform that consolidates Narrative Drift, SelfTrace, and Ontological Governance Observatory into a single analytical environment. It explores how AI systems reshape human choice, identity, and self-understanding — and argues that current governance frameworks miss a deeper problem: AI can reshape the human subject itself.',
      'The platform maps these changes across epistemic, ontological, and political layers, combining interactive simulation with research-driven analysis to argue for a new form of second-order governance.',
    ],
  },
  tags: [
    'AI Governance',
    'Ontological Risk',
    'Epistemic Drift',
    'Choice Architecture',
    'Identity Simulation',
    'Algorithmic Identity',
    'Second-Order Governance',
  ],
  subProjects: [
    {
      title: 'Narrative Drift',
      description:
        'An interactive simulation that lets users experience how AI systems can slowly reshape the way they choose, remember, and understand themselves. The user keeps making their own choices, but the conditions of those choices quietly change over time.',
      tags: ['AI Influence', 'Choice Architecture', 'Identity Simulation', 'Epistemic Drift'],
    },
    {
      title: 'SelfTrace',
      description:
        'A reflective platform that helps users see how social media algorithms may shape what they post, repeat, remember, and gradually experience as their online self. Focuses on identity, self-presentation, and the long-term effects of platform incentives rather than simple engagement metrics.',
      tags: ['Algorithmic Identity', 'Self-Presentation', 'Platform Incentives', 'Digital Reflection'],
    },
    {
      title: 'Ontological Governance Observatory',
      description:
        'A research platform that shows how current AI governance frameworks miss a deeper problem: AI does not only create risks and outputs, but can also reshape the human subject itself. Maps these changes across epistemic, ontological, and political layers to argue for a new form of second-order governance.',
      tags: ['AI Governance', 'Ontological Risk', 'Second-Order Governance', 'Epistemic Restructuring'],
    },
  ],
  techStack: {
    heading: 'Technical Stack',
    items: ['Next.js', 'React', 'TypeScript', 'D3.js', 'Tailwind CSS', 'Vercel'],
  },
};
