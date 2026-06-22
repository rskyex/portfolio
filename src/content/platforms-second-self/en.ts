import type { SecondSelfContent } from './types';

export const secondSelfEn: SecondSelfContent = {
  meta: {
    title: 'Second Self',
    description:
      'An online philosophical card game exploring AI, memory, governance, and the formation of subjectivity — what happens when systems begin shaping how humans become selves',
  },
  backLabel: '← Back to MYTHERA',
  backHref: '/platforms/mythera',
  header: { kanji: '己', english: 'Second Self', subtitle: 'Philosophical Card Game' },
  status: 'In Progress',
  imageSrc: '/images/secondself_og.png',
  imageAlt: 'Second Self',
  overview: {
    heading: 'Overview',
    paragraphs: [
      'An online philosophical card game themed around AI, memory, governance, and the formation of subjectivity. Set in a near future where algorithmic systems have permeated the deep layers of society, players do not simply defeat opponents — they design a society.',
      'Players construct information environments, establish institutions of memory, choose public spaces and governance structures, and in doing so determine what kind of human subjects emerge. Playing a card is not merely deploying force — it is an act of rewriting the conditions of society and shifting the very terms on which selfhood is constituted.',
      'At the heart of the game lies this question: what happens when systems no longer merely govern human behaviour, but begin participating in the very process by which humans become selves?',
    ],
  },
  cardSystem: {
    heading: 'Card System',
    categories: [
      {
        title: 'Philosopher Cards',
        description:
          'Foucault, Arendt, Rawls, Butler, Simondon, Stiegler, Beauvoir, Hobbes — functioning as theoretical lenses that alter the operating principles of the world.',
      },
      {
        title: 'Concept Cards',
        description:
          'Autonomy, recognition, discipline, care, sovereignty, legitimacy, narrative identity, collective memory, invisibility, democratic subjectivity.',
      },
      {
        title: 'Institution Cards',
        description:
          'Recommendation engines, AI tutors, biometric IDs, sentiment analysis, personal AI companions, memory archives, civic reputation systems, predictive governance dashboards.',
      },
      {
        title: 'Event Cards',
        description:
          'Electoral crises, war, data leaks, AI scandals, youth mental health crises, platform collapses, constitutional amendments, large-scale anti-surveillance movements.',
      },
      {
        title: 'Intervention Cards',
        description:
          'Audits, encryption, deliberation, civic assemblies, data strikes, slow media, human review, counterpublic formation.',
      },
    ],
  },
  victory: {
    heading: 'Victory Conditions',
    paragraphs: [
      'Victory is not achieved by depleting an opponent’s HP. Players must manage tensions across multiple indicators: stability, freedom, legitimacy, innovation, psychological integration, democratic capacity, and memory diversity.',
      '“Winning” is not about building the strongest board — it becomes an evaluation of what kind of society you built and, consequently, what kind of human being it produced.',
    ],
  },
  tags: [
    'Philosophy',
    'Card Game',
    'AI Governance',
    'Subjectivity',
    'Social Design',
    'Foucault',
    'Arendt',
    'Stiegler',
    'Memory',
    'Near-Future',
  ],
  techStack: {
    heading: 'Technical Stack',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
  },
};
