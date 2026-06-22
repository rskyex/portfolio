import type { PlatformsContent } from './types';

export const platformsEn: PlatformsContent = {
  header: {
    kanji: '台',
    english: 'Platforms',
    subtitle: 'Independently Designed Research Platforms',
  },
  intro:
    'A coherent suite of public-facing research and policy tools that translate governance theory into operational platforms across strategic infrastructure domains. Each platform connects conceptual frameworks on legitimacy, authority, and escalation with applied policy questions.',
  researchPlatforms: {
    title: 'Research Platforms',
    subtitle: 'Independently designed research, policy, and strategic-risk tools',
    cards: [
      {
        href: '/platforms/cyber',
        title: 'Cyber Escalation Atlas',
        description:
          'Mapping cyber incidents as strategic behaviour, attribution frameworks, and governance signals.',
        status: 'Live',
        statusVariant: 'Live',
        liveUrl: 'https://cyber-escalation-atlas-5yp5.vercel.app',
        tags: ['Cyber', 'Attribution', 'Escalation'],
        image: '/images/cyber-platform.png',
        coreQuestion:
          'Core question: How do cyber operations function as strategic behaviour, and what governance frameworks can account for them?',
      },
      {
        href: '/platforms/narrative-drift',
        title: 'Narrative Drift',
        description:
          'An interactive simulation exploring how AI systems reshape choice, memory, and self-understanding over time.',
        status: 'Live',
        statusVariant: 'Live',
        liveUrl: 'https://narrative-drift.vercel.app/',
        tags: ['AI Influence', 'Choice Architecture', 'Epistemic Drift'],
        image: '/images/narrative drift-og.png',
        coreQuestion:
          'Core question: How do AI systems erode epistemic autonomy through the accumulation of small nudges over time?',
      },
      {
        href: '/platforms/selftrace',
        title: 'SelfTrace',
        description:
          'A reflective platform examining how social media algorithms shape identity, self-presentation, and online selfhood.',
        status: 'Live',
        statusVariant: 'Live',
        liveUrl: 'https://selftrace.vercel.app/',
        tags: ['Algorithmic Identity', 'Self-Presentation', 'Digital Reflection'],
        image: '/images/selftrace og.png',
        coreQuestion:
          'Core question: How do social media algorithms shape self-presentation and identity construction?',
      },
      {
        href: '/platforms/ontological-governance-observatory',
        title: 'Ontological Governance Observatory',
        description:
          'Mapping how AI reshapes the human subject across epistemic, ontological, and political layers.',
        status: 'In Progress',
        statusVariant: 'In Progress',
        tags: ['AI Governance', 'Ontological Risk', 'Second-Order Governance'],
        image: '/images/ogo-og.png',
        coreQuestion:
          'Core question: How must governance frameworks change when AI transforms the human subject itself?',
      },
      {
        href: '/platforms/orbital',
        title: 'Orbital Risk Tracker',
        description:
          'Tracking ASAT events, proximity operations, GNSS jamming, and cyber-space entanglement with escalation analysis.',
        status: 'Live',
        statusVariant: 'Live',
        liveUrl: 'https://orbitalrisktracker.vercel.app',
        tags: ['ASAT', 'Space Security', 'Escalation'],
        image: '/images/orbital-platform.jpg',
        coreQuestion:
          'Core question: How are ASAT capabilities and proximity operations transforming the escalation calculus in orbital space?',
      },
      {
        href: '/platforms/nuclear',
        title: 'Global Nuclear Infrastructure Atlas',
        description:
          'Interactive mapping of civilian nuclear power infrastructure, accident sites, and estimated arsenals with policy and health context.',
        status: 'Live',
        statusVariant: 'Live',
        liveUrl: 'https://globalnuclearinfrastructureatlas.vercel.app',
        tags: ['IAEA', 'SIPRI', 'Nuclear'],
        image: '/images/nuclear-platform.jpg',
        coreQuestion:
          'Core question: How is civilian nuclear infrastructure distributed globally, and what governance and health implications follow?',
      },
      {
        href: '/platforms/lunar-mandate-atlas',
        title: 'Lunar Mandate Atlas',
        description:
          'Interactive mapping of competing lunar governance frameworks, mandates, and authority architecture across the Artemis Accords and ILRS programme.',
        status: 'Live',
        statusVariant: 'Live',
        liveUrl: 'https://lunar-mandate-atlas.vercel.app',
        tags: ['Lunar Governance', 'Artemis Accords', 'ILRS', 'Authority Architecture'],
        image: '/images/LGAT-og.svg',
        coreQuestion:
          'Core question: How do competing governance frameworks construct authority and claim legitimacy on behalf of humanity on the Moon?',
      },
    ],
  },
  flagship: {
    title: 'Flagship Project System',
    subtitle: 'A parent platform containing linked sub-projects',
    card: {
      href: '/platforms/mythera',
      title: 'MYTHERA',
      description:
        'An interpretive studio where selfhood, culture, performance, and aesthetic form become explorable worlds.',
      includes:
        'Includes linked projects on music analysis, authenticity, and philosophical game design.',
      liveUrl: 'https://mythera.vercel.app/',
      image: '/images/mythera og.png',
      subProjects: [
        { name: 'Scoreless', href: '/platforms/scoreless' },
        { name: 'Theatre of Authenticity', href: '/platforms/theatre-of-authenticity' },
        { name: 'Second Self', href: '/platforms/second-self' },
      ],
    },
    subProjectsLabel: 'Sub-projects',
    subProjects: [
      {
        href: '/platforms/scoreless',
        title: 'Scoreless',
        description:
          "A music analysis platform making classical music's structure, logic, and meaning accessible without score literacy.",
        status: 'In Progress',
        statusVariant: 'In Progress',
        tags: ['Classical Music', 'Structural Analysis', 'Motif Tracking', 'Music Theory'],
        image: '/images/mythera og.png',
        coreQuestion:
          'Core question: How can musical structure be made visible and meaningful without requiring score literacy?',
      },
      {
        href: '/platforms/theatre-of-authenticity',
        title: 'Theatre of Authenticity',
        description:
          'An experiential site that questions authenticity itself — visualising how far the motives behind our actions have been externalised. Spanning Mishima, Kierkegaard, Nietzsche, Sartre, and Bataille.',
        status: 'In Progress',
        statusVariant: 'In Progress',
        tags: ['Authenticity', 'Performance', 'Selfhood', 'Existentialism'],
        image: '/images/Theatre of Authenticity.png',
        coreQuestion:
          'Core question: Are you truly acting from inner necessity, or constructing your self on the premise of being watched?',
      },
      {
        href: '/platforms/second-self',
        title: 'Second Self',
        description:
          'An online philosophical card game exploring AI, memory, governance, and the formation of subjectivity. Players design a society and determine what kind of human subjects emerge.',
        status: 'In Progress',
        statusVariant: 'In Progress',
        tags: ['Philosophy', 'Card Game', 'AI Governance', 'Subjectivity', 'Social Design'],
        image: '/images/secondself_og.png',
        coreQuestion:
          'Core question: What happens when systems begin participating in the very process by which humans become selves?',
      },
    ],
  },
  otherProjects: {
    title: 'Selected Independent Projects',
    subtitle: 'Standalone research and policy tools',
    cards: [
      {
        href: '/platforms/promise',
        title: 'Japan Promise Tracker',
        description:
          'Tracking Japanese government policy commitments and their fulfilment status across governance domains. Designed to support public accountability, policy analysis, and civic engagement by making government promises transparent and trackable.',
        status: 'Live',
        statusVariant: 'Live',
        liveUrl: 'https://jp-ver-japan-promise-tracker.vercel.app',
        tags: ['Japan', 'Policy Accountability', 'Government Commitments', 'Civic Engagement'],
        image: '/images/promise-platform.jpg',
        coreQuestion:
          'Core question: How can government commitments be made transparent and accountable to the public?',
      },
    ],
  },
  closingNote: 'Each platform is built with Next.js, React, TypeScript, and D3 / Leaflet.',
};
