import type { ProjectsContent } from './types';

export const projectsEn: ProjectsContent = {
  meta: {
    title: 'Background & Fieldwork — Risa Koyanagi',
    description:
      'Leadership, fieldwork, institution-building, and interdisciplinary engagement across research, policy, cultural, and artistic domains.',
  },
  header: {
    kanji: '業',
    english: 'Background & Fieldwork',
    subtitle: 'Fieldwork, leadership, and interdisciplinary engagement',
  },
  intro:
    'Leadership, fieldwork, institution-building, and interdisciplinary engagement across research, policy, cultural, and artistic domains.',
  cards: [
    {
      href: '/projects/fukushima',
      title: 'Fukushima Field Research',
      description:
        'Multi-site fieldwork in Futaba and Namie districts examining post-disaster governance, trust, and the policy-recovery gap. Includes interviews with evacuees, mayors, town leaders, METI, and TEPCO officials. This fieldwork forms the empirical foundation for ongoing research on post-disaster governance and the trust gap.',
      badge: 'Active Research',
      image: '/images/fukushima.jpg',
      imageAlt: 'Fukushima field research',
      period: '2019–2024',
    },
    {
      href: '/projects/afrecos',
      title: 'AFRECOS',
      description:
        'Co-founded a 10+ country network for cultural and policy events bridging Africa and Japan. Organised events with around 70–80 attendees and a House of Councillors policy talk with approximately 50 stakeholders.',
      image: '/images/afrecos.jpg',
      imageAlt: 'AFRECOS event',
      period: '2024',
      role: 'Co-Founder & President',
    },
    {
      href: '/projects/peace',
      title: 'Peacebuilding Laboratory',
      description:
        "Research community and discussion platform within Sophia University's Professor Daisaku Higashi Peacebuilding and International Cooperation Laboratory. Dialogue-based seminars on Ukraine, Afghanistan, Iraq, and South Sudan.",
      image: '/images/mofa-korea.jpg',
      imageAlt: 'Peacebuilding seminar',
      role: 'President',
    },
    {
      href: '/projects/art',
      title: 'Art Practice',
      description:
        'Interdisciplinary art practice spanning visual thinking, international exhibition, and conceptual work that intersects with broader research on governance, identity, and technology.',
      image: '/images/art.JPG',
      imageAlt: 'Art practice',
    },
  ],
};
