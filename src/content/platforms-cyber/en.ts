import type { CyberContent } from './types';

export const cyberEn: CyberContent = {
  backLabel: '← Back to Platforms',
  backHref: '/platforms',
  header: { kanji: '台', english: 'Cyber Escalation Atlas' },
  status: 'Live',
  statusVariant: 'Live',
  visitLabel: 'Visit platform →',
  visitUrl: 'https://cyber-escalation-atlas-5yp5.vercel.app',
  iframeTitle: 'Cyber Escalation Atlas',
  overview: {
    heading: 'Overview',
    paragraphs: [
      'The Cyber Escalation Atlas maps cyber incidents as expressions of strategic behaviour and governance signals, rather than treating them purely as technical events. It provides structured analytical context for understanding cyber operations within the broader landscape of international security and escalation dynamics.',
      'The platform engages with Lucas Kello\'s concept of “unpeace” — a condition between war and peace characterised by persistent cyber contestation — as well as attribution frameworks, Thomas Schelling\'s escalation logic, and the analytical categories established by the Tallinn Manual 2.0.',
      'It is designed to support analysis of how cyber incidents function as governance signals and to contextualise them within strategic frameworks of deterrence, escalation, and institutional response.',
    ],
  },
  tags: [
    'Cyber Incidents',
    'Strategic Behaviour',
    'Kello',
    'Unpeace',
    'Attribution',
    'Schelling',
    'Tallinn Manual 2.0',
    'Escalation',
    'Governance Signals',
  ],
  techStack: {
    heading: 'Technical Stack',
    items: ['Next.js', 'React', 'TypeScript', 'D3.js', 'Tailwind CSS', 'Python', 'Vercel'],
  },
};
