import type { ResearchContent } from './types';

export const researchEn: ResearchContent = {
  header: {
    kanji: '論',
    english: 'Research',
    subtitle: 'Selected research across governance domains',
  },
  intro:
    'Research spanning international security, space governance, nuclear governance, cyber governance, and emerging technology governance, with a conceptual focus on legitimation theory, dual-use governance, authority architecture, and responsible behaviour norms.',
  workingPaper: {
    heading: 'Working Paper',
    items: [
      {
        href: '/research/lunar',
        title: 'Who Speaks for Humanity on the Moon?',
        status: 'Working Paper',
        statusVariant: 'Working Paper',
        themes: [
          'Legitimation audiences',
          'Translation devices',
          'Authority architecture',
          'Artemis vs ILRS',
          'Universalist language',
          'Participation conditions',
          'Boundary-making',
        ],
        description:
          'The conceptual flagship. Examining how competing lunar governance frameworks — the Artemis Accords and the International Lunar Research Station programme — construct legitimation audiences, deploy translation devices, and build authority architecture under universalist language while establishing divergent participation conditions and boundary-making practices.',
      },
    ],
  },
  inProgress: {
    heading: 'In Progress',
    items: [
      {
        href: '/research/ai-cyber',
        title: 'Responsible Behaviour as an Unfinished Norm',
        status: 'In Progress',
        statusVariant: 'In Progress',
        themes: [
          'Governance gaps',
          'Denial',
          'Displacement',
          'Inoculation',
          'Dual-use ambiguity',
          'Norm codification',
          'Emerging technology governance',
        ],
        description:
          "Investigating how 'responsible behaviour' functions as an unfinished norm across space, AI, and cyber governance — examining denial, displacement, and inoculation dynamics in governance discourse around dual-use technologies.",
      },
      {
        href: '/research/fukushima',
        title: 'Post-Disaster Governance and the Trust Gap',
        status: 'In Progress',
        statusVariant: 'In Progress',
        themes: [
          'Post-disaster governance',
          'Trust',
          'Recovery',
          'Policy gaps',
          'State-society relations',
          'Long-term fieldwork',
        ],
        description:
          'Drawing on six years of fieldwork in Fukushima, this research examines the governance of post-disaster recovery — focusing on trust, transparency, policy gaps, and the evolving relationship between state institutions and affected communities.',
      },
    ],
  },
  conferenceDev: {
    heading: 'Conference & Development',
    items: [
      {
        href: '/research/ontological-governance',
        title: 'Ontological Governance: What AI Does to the Human Subject',
        status: 'Conference Abstract',
        statusVariant: 'Conference Abstract',
        themes: [
          'AI governance',
          'Ontological governance',
          'Narrative identity',
          'Epistemology',
          'Democratic deliberation',
          'EU AI Act',
          'Second-order governance',
        ],
        description:
          'Introducing ontological governance as a second-order analytical layer that asks not only what AI systems do, but what they do to the knowing, existing, and self-governing human beings whose dignity and agency governance exists to protect.',
      },
    ],
    cards: [
      {
        title: 'Dual-Use Governance and the Ambiguity Problem',
        badgeLabel: 'Conference Abstract',
        badgeVariant: 'abstract',
        description:
          'Exploring how dual-use ambiguity shapes governance frameworks across nuclear, space, and cyber domains — examining the structural difficulties of regulating technologies with simultaneous civilian and military applications.',
      },
      {
        title: 'Authority Architecture in Emerging Technology Governance',
        badgeLabel: 'In Progress',
        badgeVariant: 'progress',
        description:
          'Developing a framework for understanding how authority is constructed, distributed, and contested across emerging technology governance — with attention to legitimation processes, institutional design, and the role of technical expertise.',
      },
    ],
  },
  presentations: {
    heading: 'Selected Conference Presentations',
    conference: {
      event: 'IAC 2026 — 3 Accepted Papers',
      location: 'Antalya, Türkiye',
      organizer:
        'International Astronautical Congress · Organized by the International Astronautical Federation (IAF)',
      highlight: '3 Accepted Papers',
      tags: ['Space Governance', 'Lunar Systems', 'Norms', 'Dual-Use'],
      papers: [
        {
          title:
            'Dual-Use Neutralisation and Responsible Behaviour Norms in Lunar Infrastructure Governance',
          type: 'Oral Presentation',
          typeLabel: 'Oral Presentation',
          symposium: 'E9 — Space Security, Stability and Sustainability',
          date: '8 October 2026',
        },
        {
          title:
            'Conditional Openness: How Universalist Language Produces Boundaries in Future Lunar Exploration Governance',
          type: 'Interactive Presentation',
          typeLabel: 'Interactive Presentation',
          symposium: 'E3 — Space Policy, Regulations and Economics',
        },
        {
          title:
            'Mythic Naming as Soft Infrastructure in Competing Lunar Orders: Artemis and Chang’e',
          type: 'Interactive Presentation',
          typeLabel: 'Interactive Presentation',
          symposium: 'E5 — Space and Society',
        },
      ],
      focus:
        'lunar governance, dual-use systems, norm formation, and symbolic infrastructure in emerging space orders.',
    },
  },
  closingNote: 'Additional papers and conference work in development.',
};
