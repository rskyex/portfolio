import type { PromiseContent } from './types';

export const promiseEn: PromiseContent = {
  backLabel: '← Back to Ongoing Projects',
  backHref: '/platforms',
  header: { kanji: '台', english: 'Japan Promise Tracker' },
  status: 'Live',
  visitLabel: 'Visit platform →',
  liveUrl: 'https://jp-ver-japan-promise-tracker.vercel.app',
  imageSrc: '/images/promise-platform.jpg',
  imageAlt: 'Japan Promise Tracker — tracking government policy commitments',
  overview: {
    heading: 'Overview',
    paragraphs: [
      'The Japan Promise Tracker monitors and tracks Japanese government policy commitments across governance domains. It provides a structured framework for following the lifecycle of government promises — from announcement through implementation to fulfilment or abandonment.',
      'Designed to support public accountability, civic engagement, and policy analysis, the platform makes government commitments transparent and trackable. It contributes to a broader understanding of how governance promises function as instruments of legitimation and political communication.',
    ],
  },
  tags: [
    'Policy Accountability',
    'Government Commitments',
    'Japan',
    'Civic Engagement',
    'Transparency',
    'Governance',
    'Public Policy',
  ],
  techStack: {
    heading: 'Technical Stack',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
  },
};
