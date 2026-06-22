import type { FaultlineContent } from './types';

export const faultlineEn: FaultlineContent = {
  backLabel: '← Back to Ongoing Projects',
  backHref: '/platforms',
  header: {
    kanji: '台',
    english: 'Faultline',
    subtitle: 'Strategic Infrastructure Risk Suite',
  },
  status: 'Live',
  statusVariant: 'Live',
  visitLabel: 'Visit platform →',
  visitUrl: 'https://faultline-nqmm.vercel.app/',
  subVisitLabel: 'Visit →',
  image: {
    src: '/images/faultline og.png',
    alt: 'Faultline — Strategic Infrastructure Risk Suite',
  },
  overview: {
    heading: 'Overview',
    paragraphs: [
      'Faultline is a unified strategic infrastructure risk platform that consolidates four domain-specific tools — Orbital Risk Tracker, Global Nuclear Infrastructure Atlas, Cyber Escalation Atlas, and Lunar Mandate Atlas — into a single analytical suite.',
      'Each module translates governance theory into operational platforms across orbital, nuclear, cyber, and lunar domains, connecting conceptual frameworks on legitimacy, authority, and escalation with applied policy questions.',
    ],
  },
  tags: [
    'Space Security',
    'Nuclear Governance',
    'Cyber Governance',
    'Escalation Analysis',
    'Strategic Risk',
    'Dual-Use Governance',
    'Weaponised Interdependence',
  ],
  subProjects: [
    {
      title: 'Orbital Risk Tracker',
      description:
        'Tracking anti-satellite events, proximity operations, GNSS jamming incidents, and cyber-space entanglement. Draws on Jervis’s security dilemma framework and weaponised interdependence theory to support escalation analysis across orbital infrastructure.',
      tags: ['ASAT Events', 'Proximity Operations', 'GNSS Jamming', 'Cyber-Space Entanglement', 'Jervis', 'Weaponised Interdependence'],
      image: '/images/orbital-platform.jpg',
      liveUrl: 'https://orbitalrisktracker.vercel.app',
    },
    {
      title: 'Global Nuclear Infrastructure Atlas',
      description:
        'Interactive mapping of global civilian nuclear power infrastructure, major accident sites, estimated nuclear arsenals, and associated radiation and health context. Designed for educational and policy use, drawing on sources including IAEA, SIPRI, and WHO data.',
      tags: ['Civilian Nuclear Power', 'Accident Sites', 'Nuclear Arsenals', 'Radiation & Health', 'IAEA', 'SIPRI', 'WHO'],
      image: '/images/nuclear-platform.jpg',
      liveUrl: 'https://globalnuclearinfrastructureatlas.vercel.app',
    },
    {
      title: 'Cyber Escalation Atlas',
      description:
        'Mapping cyber incidents as expressions of strategic behaviour and governance signals. Engages with Kello’s concept of “unpeace,” attribution frameworks, Schelling’s escalation logic, and the Tallinn Manual 2.0 to contextualise cyber operations within broader strategic analysis.',
      tags: ['Cyber Incidents', 'Strategic Behaviour', 'Kello', 'Attribution', 'Schelling', 'Tallinn Manual 2.0', 'Escalation'],
      image: '/images/cyber-platform.png',
      liveUrl: 'https://cyber-escalation-atlas-5yp5.vercel.app',
    },
    {
      title: 'Lunar Mandate Atlas',
      description:
        'Interactive mapping of competing lunar governance frameworks, mandates, and authority architecture. Compares the Artemis Accords and the International Lunar Research Station (ILRS) programme, tracing how universalist claims function as legitimation devices and how governance architectures shape permissible action on the Moon.',
      tags: ['Lunar Governance', 'Artemis Accords', 'ILRS', 'Legitimation', 'Authority Architecture', 'Space Governance', 'Mandate Mapping'],
      image: '/images/LGAT-og.svg',
      liveUrl: 'https://lunar-mandate-atlas.vercel.app',
    },
  ],
  techStack: {
    heading: 'Technical Stack',
    items: ['Next.js', 'React', 'TypeScript', 'D3.js', 'Leaflet', 'Tailwind CSS', 'Recharts', 'Vercel'],
  },
};
