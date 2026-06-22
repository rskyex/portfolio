import type { LunarMandateAtlasContent } from './types';

export const lunarMandateAtlasEn: LunarMandateAtlasContent = {
  meta: {
    title: 'Lunar Mandate Atlas — Risa Koyanagi',
    description:
      'Interactive mapping of competing lunar governance frameworks, mandates, and authority architecture across the Artemis Accords and ILRS programme.',
  },
  backLabel: '← Back to Faultline',
  backHref: '/platforms/faultline',
  header: {
    kanji: '月',
    english: 'Lunar Mandate Atlas',
    subtitle: 'Competing Governance Claims on the Moon',
  },
  status: 'Live',
  visitLabel: 'Visit platform →',
  liveUrl: 'https://lunar-mandate-atlas.vercel.app/',
  imageSrc: '/images/LGAT-og.svg',
  imageAlt: 'Lunar Mandate Atlas — Competing Governance Claims on the Moon',
  overview: {
    heading: 'Overview',
    paragraphs: [
      'The Lunar Mandate Atlas is an interactive platform mapping the competing governance frameworks, mandates, and authority architectures that shape the emerging order on the Moon. It compares the Artemis Accords and the International Lunar Research Station (ILRS) programme, tracing how each framework constructs its legitimacy and claims to act on behalf of humanity.',
      'Both frameworks deploy universalist language — speaking “for humanity,” “for all humankind,” or “for peaceful purposes” — while establishing divergent participation conditions, governance norms, and boundary-making practices. The platform visualises how these universalist claims function as legitimation devices that simultaneously include and exclude.',
      'Drawing on legitimation theory, the atlas traces how broad principles are translated into specific governance architectures — and how these architectures, in turn, shape the boundaries of permissible action on the Moon.',
    ],
  },
  keyDimensions: {
    heading: 'Key Dimensions',
    items: [
      'Competing legitimation claims and universalist language across Artemis and ILRS frameworks',
      'Translation devices that convert broad principles into operational governance norms',
      'Authority architecture as a structural feature of lunar governance regimes',
      'Participation conditions and their implications for inclusivity, access, and sovereignty',
      'Boundary-making practices that define permissible action in the lunar domain',
    ],
  },
  tags: [
    'Lunar Governance',
    'Artemis Accords',
    'ILRS',
    'Legitimation',
    'Authority Architecture',
    'Space Governance',
    'Mandate Mapping',
    'Universalist Language',
    'Boundary-Making',
    'Participation Conditions',
  ],
  techStack: {
    heading: 'Technical Stack',
    items: ['Next.js', 'React', 'TypeScript', 'D3.js', 'Tailwind CSS', 'Recharts', 'Vercel'],
  },
};
