import type { Dictionary } from './types';

export const en: Dictionary = {
  meta: {
    title: 'Risa Koyanagi — Cambridge Future Scholar & Researcher',
    description:
      'Portfolio of Risa Koyanagi — Cambridge Future Scholar and researcher working across international security, space governance, nuclear governance, cyber governance, and emerging technology governance.',
    ogLocale: 'en_US',
  },
  nav: {
    home: 'Home',
    platforms: 'Platforms',
    research: 'Research',
    fieldwork: 'Fieldwork & Engagement',
    about: 'About',
  },
  langToggle: {
    groupLabel: 'Language',
    english: 'View this page in English',
    japanese: 'View this page in Japanese',
  },
  hero: {
    eyebrow: 'Space · Nuclear · Cyber · Emerging Technology Governance',
    description: [
      { text: 'Risa Koyanagi is a ' },
      { text: 'researcher / student at the University of Cambridge', bold: true },
      { text: ' working across ' },
      { text: 'space, nuclear, and emerging technology governance', bold: true },
      { text: '. Her work focuses on ' },
      { text: 'legitimation', bold: true },
      { text: ', ' },
      { text: 'dual-use systems', bold: true },
      { text: ', and ' },
      { text: 'authority architecture', bold: true },
      { text: '. She is ' },
      { text: 'Team Leader of SGAC’s 2026 Space Policy Project Team (Japan)', bold: true },
      { text: ' and sits on the ' },
      { text: 'JAXA International Space Education Board (2026)', bold: true },
      { text: '. She also designs ' },
      { text: 'public-facing research platforms', bold: true },
      { text: ' on ' },
      { text: 'AI governance', bold: true },
      { text: ', ' },
      { text: 'strategic infrastructure risk', bold: true },
      { text: ', and ' },
      { text: 'interpretive systems', bold: true },
      { text: '.' },
    ],
    ctaPlatforms: 'View Platforms',
    ctaResearch: 'View Research',
    contact: 'Contact',
  },
  platformsSection: {
    heading: 'Platforms by Risa Koyanagi',
    flagship: 'Flagship',
    viewPlatform: 'View platform →',
    viewAll: 'View all platforms →',
    wip: 'WIP',
    items: [
      {
        slug: 'cyber',
        title: 'Cyber Escalation Atlas',
        // VERIFY: corpus = 36 incidents (provisional single source value — reuse this number everywhere it appears)
        description:
          'Mapping a 36-incident corpus of cyber events as strategic behaviour, attribution frameworks, and governance signals.',
      },
      {
        slug: 'narrative-drift',
        title: 'Narrative Drift',
        description: 'AI influence on choice, memory, and self-understanding over time.',
      },
      {
        slug: 'selftrace',
        title: 'SelfTrace',
        description: 'Algorithmic shaping of identity, self-presentation, and online selfhood.',
      },
      {
        slug: 'ontological-governance-observatory',
        title: 'Ontological Governance Observatory',
        description:
          "AI's transformation of the human subject across epistemic, ontological, and political layers.",
      },
      {
        slug: 'orbital',
        title: 'Orbital Risk Tracker',
        description: 'ASAT events, proximity operations, and escalation analysis in orbital space.',
      },
      {
        slug: 'nuclear',
        title: 'Global Nuclear Infrastructure Atlas',
        description:
          'Civilian nuclear infrastructure, estimated arsenals, and policy and health context.',
      },
      {
        slug: 'lunar-mandate-atlas',
        title: 'Lunar Mandate Atlas',
        description:
          'Competing governance claims, mandates, and authority architecture on the Moon.',
      },
      {
        slug: 'mythera',
        title: 'MYTHERA',
        description:
          'An interpretive studio where selfhood, culture, performance, and aesthetic form become explorable worlds.',
        children: [
          {
            slug: 'theatre-of-authenticity',
            name: 'Theatre of Authenticity',
            description:
              'Questioning authenticity through experiential design — performance, gaze, and the limits of the "true self"',
          },
          {
            slug: 'second-self',
            name: 'Second Self',
            description:
              'A philosophical card game exploring AI, memory, governance, and the formation of subjectivity',
          },
        ],
      },
    ],
  },
  researchSection: {
    heading: 'Research',
    subtitle: 'Selected research across governance domains',
    viewAll: 'View all research →',
    items: [
      {
        slug: 'lunar',
        title: 'Who Speaks for Humanity on the Moon?',
        description:
          'Examining legitimation audiences, translation devices, and authority architecture in competing lunar governance frameworks.',
      },
      {
        slug: 'ai-cyber',
        title: 'Responsible Behaviour as an Unfinished Norm',
        description:
          'Investigating denial, displacement, and inoculation in AI governance discourse across space, AI, and cyber domains.',
      },
      {
        slug: 'fukushima',
        title: 'Post-Disaster Governance and the Trust Gap',
        description:
          'Long-term fieldwork examining policy gaps, trust, and recovery governance in post-disaster Fukushima communities.',
      },
    ],
  },
  conferenceSection: {
    heading: 'Selected Conference Presentations',
    subtitle: 'Forthcoming papers and panels at international research convenings',
    defaultOpenPapers: true,
    cards: [
      {
        event: 'IAC 2026 — 3 Accepted Papers',
        location: 'Antalya, Türkiye',
        organizer:
          'International Astronautical Congress · Organized by the International Astronautical Federation (IAF)',
        // Empty: the highlight chip and count row are suppressed (the count already
        // appears in the event title above) to avoid repetition.
        highlight: '',
        tags: ['Space Governance', 'Lunar Systems', 'Norms', 'Dual-Use'],
        focus:
          'lunar governance, dual-use systems, norm formation, and symbolic infrastructure in emerging space orders.',
        papers: [
          {
            title:
              'Dual-Use Neutralisation and Responsible Behaviour Norms in Lunar Infrastructure Governance',
            symposium: 'E9 — Space Security, Stability and Sustainability',
            date: '8 October 2026',
            kind: 'oral',
          },
          {
            title:
              'Conditional Openness: How Universalist Language Produces Boundaries in Future Lunar Exploration Governance',
            symposium: 'E3 — Space Policy, Regulations and Economics',
            kind: 'interactive',
          },
          {
            title:
              'Mythic Naming as Soft Infrastructure in Competing Lunar Orders: Artemis and Chang’e',
            symposium: 'E5 — Space and Society',
            kind: 'interactive',
          },
        ],
      },
      {
        event: 'Data for Policy 2026',
        location: 'Universitat Pompeu Fabra · Barcelona, Spain',
        organizer: 'Data for Policy 2026 (DfP’26) · 8–10 September 2026',
        highlight: 'Accepted',
        tags: ['AI Governance', 'Cyber Conflict', 'Attribution', 'Tech Sovereignty'],
        focus:
          'attribution as interpretive authority in cyber conflict, and what naming practices mean for the governance of and with AI.',
        papers: [
          {
            title:
              'Naming as Authority: Attribution as Interpretive Authority in Cyber Conflict, and Its Stakes for AI Governance',
            symposium:
              'Theme — Governance of/with AI: Implications for Data, Infrastructure, and Tech Sovereignty',
            date: '8–10 September 2026',
            kind: 'oral',
          },
        ],
      },
      {
        event: '26th Space Science Symposium — Poster Exhibition',
        location: 'Institute of Space and Astronautical Science (ISAS/JAXA), Sagamihara',
        organizer: 'Institute of Space and Astronautical Science (ISAS), JAXA',
        highlight: 'Program T25',
        tags: ['Poster Presentation', 'Space Science'],
        focus:
          'poster presentation at the annual symposium of Japan’s space-science community.',
        eyebrow: 'Poster · 2026',
        papers: [
          {
            title: 'Poster presentation (title to be confirmed)', // REVIEW
            symposium: 'Program No. T25 · Poster Exhibition',
            kind: 'poster',
          },
        ],
      },
    ],
    labels: {
      eyebrow: 'Forthcoming · 2026',
      papersCountPrefix: '',
      papersCountSuffix: '',
      viewPapers: 'View papers',
      collapse: 'Collapse',
      researchFocus: 'Research focus',
      paperTypes: {
        oral: 'Oral Presentation',
        interactive: 'Interactive Presentation',
        poster: 'Poster Presentation',
      },
    },
  },
  fieldworkSection: {
    heading: 'Fieldwork & Public Engagement',
    subtitle:
      'Fieldwork, leadership, dialogue, and public-facing engagement across policy, research, and international exchange',
    speakingHeading: 'Speaking & Policy Engagement',
    viewAll: 'View all fieldwork & engagement →',
    projects: [
      {
        slug: 'fukushima',
        title: 'Fukushima Field Research',
        description:
          'Multi-site fieldwork in Futaba and Namie districts examining post-disaster governance, trust, and recovery.',
      },
      {
        slug: 'afrecos',
        title: 'AFRECOS',
        description:
          'Co-founded a 10+ country network for cultural and policy events bridging Africa and Japan.',
        role: 'Co-Founder & President',
      },
      {
        slug: 'art',
        title: 'Art Practice',
        description:
          'Interdisciplinary art practice spanning visual thinking, international exhibition, and conceptual work.',
      },
    ],
    speaking: [
      {
        slug: 'ticad',
        title: 'TICAD Ministerial Meeting',
        context:
          'Policy engagement and youth representation at the Tokyo International Conference on African Development.',
        type: 'Policy Engagement',
      },
      {
        slug: 'peace-exchange',
        title: 'Japan–Netherlands Peace Exchange',
        context: 'Bilateral dialogue and peace exchange between Japanese and Dutch participants.',
        type: 'Dialogue Contribution',
      },
      {
        slug: 'youth-drive',
        title: 'Africa–Japan Youth Drive',
        context:
          'Youth-focused policy forum addressing Africa–Japan co-creation and development cooperation.',
        type: 'Youth Representation',
      },
      {
        slug: 'roundtable',
        title: 'Roundtable and Friends of Education',
        context: 'Hosted by GPE and the World Bank at the Japanese House of Councillors.',
        type: 'Roundtable Participation',
      },
    ],
  },
  // Render the Conference section directly below Platforms (before Research).
  conferenceFirst: true,
  extra: {
    education: {
      heading: 'Education',
      items: [
        {
          institution: 'Hughes Hall, University of Cambridge',
          period: 'October 2026',
          degree: 'BA Human, Social, and Political Sciences (HSPS)',
        },
        {
          institution: 'London School of Economics (University of London)',
          period: '2025–2026',
          degree: 'BSc Politics and International Relations',
        },
        {
          institution: 'Saïd Business School, University of Oxford',
          period: 'Nov 2025 – Jan 2026',
          degree: 'AI and Digital Transformation in Government',
          detail: 'Certificate',
        },
        {
          institution: 'SOAS University of London',
          period: '2024–2025',
          degree: 'BSc Social Sciences (Foundation Year)',
          detail: 'First Class',
        },
      ],
    },
    certifications: {
      heading: 'Certifications',
      items: [
        { name: 'Microsoft Generative AI for Data Analysis', type: 'Professional Certificate' },
        { name: 'Google Cybersecurity Specialization', type: 'Certificate' },
      ],
    },
    skills: {
      heading: 'Skills',
      groups: [
        {
          title: 'Research',
          paragraphs: [
            'Legitimation, dual-use systems, authority architecture, strategic risk, space governance, nuclear governance, emerging technology governance, infrastructure politics.',
            'Discourse and narrative analysis, qualitative coding, comparative political research, interpretive methods, policy framing, symbolic and mythic analysis, and research-to-interface translation.',
          ],
        },
        {
          title: 'Policy · communication',
          paragraphs: [
            'Policy analysis, strategic writing, briefing development, narrative framing, stakeholder engagement, cross-sector communication.',
            'Public speaking, moderation, workshop and event design.',
          ],
        },
        {
          title: 'Technical · engineering · data',
          bullets: [
            'Next.js · React · TypeScript',
            'D3.js (data visualization) · Leaflet · GeoJSON (interactive geospatial mapping)',
            'Front-end UI & responsive interface development',
            'Interactive dashboard & data-product design (policy-grade interfaces)',
            'Data cleaning, structuring & dataset construction (corpus building; IAEA / SIPRI geospatial layers)',
            'Geospatial data pipelines (IAEA / SIPRI datasets)',
            'Vercel (deployment) · Git / GitHub (rskyex)',
            'SQL',
            'Python (foundational; not used regularly in practice)',
            'Generative AI for data-analysis workflows (prompting, analytical task structuring)',
            'Cybersecurity foundations (digital risk, security-aware thinking)',
          ],
        },
      ],
    },
    languages: {
      heading: 'Languages',
      items: ['Japanese', 'English', 'Russian (learning)', 'Chinese (learning)'],
    },
    interests: {
      heading: 'Interests',
      groups: [
        {
          label: 'Music',
          items: ['Violin', 'Bach', 'Sibelius', 'Puccini', 'Verdi', 'Tchaikovsky', 'Dvořák', 'Stravinsky'],
        },
        {
          label: 'Literature',
          items: ['Dostoevsky', 'Yukio Mishima', 'Radiguet', 'Rilke / Greek Mythology'],
        },
      ],
    },
    connect: {
      heading: 'Connect',
      galleryAlt: 'Gallery',
      contactLabel: 'Contact',
    },
  },
};

export default en;
