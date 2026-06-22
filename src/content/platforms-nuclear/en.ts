import type { NuclearContent } from './types';

export const nuclearEn: NuclearContent = {
  backLabel: '← Back to Platforms',
  backHref: '/platforms',
  header: { kanji: '台', english: 'Global Nuclear Infrastructure Atlas' },
  status: 'Live',
  statusVariant: 'Live',
  visitLabel: 'Visit platform →',
  visitUrl: 'https://globalnuclearinfrastructureatlas.vercel.app',
  image: {
    src: '/images/nuclear-platform.jpg',
    alt: 'Global Nuclear Infrastructure Atlas — interactive map of global nuclear infrastructure',
  },
  overview: {
    heading: 'Overview',
    paragraphs: [
      'The Global Nuclear Infrastructure Atlas provides an interactive mapping interface for global civilian nuclear power infrastructure, including operational reactors, decommissioned facilities, and major accident sites. It contextualises nuclear infrastructure within estimated arsenal data and radiation and health frameworks.',
      'Designed for educational and policy audiences, the platform draws on public data from sources including the International Atomic Energy Agency (IAEA), the Stockholm International Peace Research Institute (SIPRI), and the World Health Organization (WHO). It is intended to support informed public understanding of nuclear infrastructure geography and associated governance challenges.',
    ],
  },
  tags: [
    'Civilian Nuclear Power',
    'Accident Sites',
    'Nuclear Arsenals',
    'Radiation & Health',
    'IAEA',
    'SIPRI',
    'WHO',
    'Policy Education',
  ],
  techStack: {
    heading: 'Technical Stack',
    items: ['Next.js', 'React', 'TypeScript', 'Leaflet', 'D3.js', 'Tailwind CSS', 'Recharts', 'Vercel'],
  },
};
