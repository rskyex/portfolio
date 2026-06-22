import type { OrbitalContent } from './types';

export const orbitalEn: OrbitalContent = {
  backLabel: '← Back to Platforms',
  backHref: '/platforms',
  header: { kanji: '台', english: 'Orbital Risk Tracker' },
  status: 'Live',
  statusVariant: 'Live',
  visitLabel: 'Visit platform →',
  visitUrl: 'https://orbitalrisktracker.vercel.app',
  image: {
    src: '/images/orbital-platform.jpg',
    alt: 'Orbital Risk Tracker — visualisation of ASAT events and proximity operations',
  },
  overview: {
    heading: 'Overview',
    paragraphs: [
      'The Orbital Risk Tracker monitors and visualises anti-satellite (ASAT) events, proximity operations, GNSS jamming incidents, and emergent cyber-space entanglement across orbital infrastructure. It provides a structured analytical framework for understanding escalation dynamics in the space domain.',
      'The platform draws on Robert Jervis\'s security dilemma framework and theories of weaponised interdependence to contextualise orbital risk behaviour within broader strategic analysis. It is designed to support researchers, policy analysts, and students working on space security, arms control, and governance architecture.',
    ],
  },
  tags: [
    'ASAT Events',
    'Proximity Operations',
    'GNSS Jamming',
    'Cyber-Space Entanglement',
    'Jervis',
    'Weaponised Interdependence',
    'Escalation Analysis',
    'Space Security',
  ],
  techStack: {
    heading: 'Technical Stack',
    items: ['Next.js', 'React', 'TypeScript', 'D3.js', 'Leaflet', 'Tailwind CSS', 'Recharts', 'Vercel'],
  },
};
