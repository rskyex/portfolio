import type { FieldworkContent } from './types';

export const fieldworkEn: FieldworkContent = {
  meta: {
    title: 'Fieldwork & Public Engagement — Risa Koyanagi',
  },
  header: {
    kanji: '場',
    english: 'Fieldwork & Public Engagement',
    subtitle:
      'Fieldwork, leadership, dialogue, and public-facing engagement across policy, research, and international exchange',
  },
  intro:
    'Leadership, fieldwork, institution-building, and interdisciplinary engagement across research, policy, cultural, and artistic domains.',
  projects: [
    {
      href: '/projects/fukushima',
      title: 'Fukushima Field Research',
      description:
        'Multi-site fieldwork in Futaba and Namie districts examining post-disaster governance, trust, and the policy-recovery gap. Includes interviews with evacuees, mayors, town leaders, METI, and TEPCO officials.',
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
        "Research community and discussion platform within Sophia University's Professor Daisaku Higashi Peacebuilding and International Cooperation Laboratory.",
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
  speakingSection: {
    heading: 'Speaking & Policy Engagement',
    intro:
      'Selected policy engagement, roundtable participation, youth representation, and dialogue contribution across international forums and parliamentary settings.',
  },
  speaking: [
    {
      title: 'TICAD Ministerial Meeting',
      context:
        'Speaker as a representative of Japanese students at the Tokyo International Conference on African Development.',
      type: 'Policy Engagement',
      description:
        'Spoke about the importance of nuclear disarmament and proposed a study tour for both African and Japanese students to visit Hiroshima and Fukushima to learn firsthand about the impacts of nuclear energy and the ongoing recovery efforts.',
      image: '/images/speaking-ticad.jpg',
    },
    {
      title: 'Japan–Netherlands Peace Exchange',
      context:
        'War reconciliation speech for Dutch WW2 survivors from Indonesia, as a representative of Japanese Youth at Ministry of Foreign Affairs of Japan.',
      type: 'Dialogue Contribution',
      description:
        'Delivered a speech in Dutch about living in the Netherlands during the 2011 earthquake and how it led to confronting cultural identity and historical tensions between the two countries.',
      image: '/images/speaking-peace-exchange.jpg',
    },
    {
      title: 'Africa–Japan Youth Drive',
      context: 'Youth-oriented policy and development forum.',
      type: 'Youth Representation',
      description:
        'Participation in a youth-focused policy forum addressing Africa–Japan co-creation, development cooperation, and future-oriented agenda setting.',
      image: '/images/speaking-youth-drive.jpg',
    },
    {
      title: 'Roundtable and Friends of Education',
      context:
        'Hosted by GPE and the World Bank at the Japanese House of Councillors.',
      type: 'Roundtable Participation',
      description:
        'High-level roundtable on education policy hosted by the Global Partnership for Education and the World Bank.',
      image: '/images/speaking-roundtable.JPG',
    },
  ],
};
