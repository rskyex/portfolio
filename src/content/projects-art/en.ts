import type { ArtContent } from './types';

export const artEn: ArtContent = {
  backLabel: '← Back to Archived Projects',
  header: {
    kanji: '業',
    english: 'Art Practice',
    subtitle: 'Visual thinking and interdisciplinary work',
  },
  hero: {
    src: '/images/art.JPG',
    alt: 'Art practice',
  },
  overview: {
    heading: 'Overview',
    paragraphs: [
      'An interdisciplinary art practice that connects visual thinking with broader research interests in governance, identity, and technology. The work engages with questions of representation, materiality, and conceptual framing that parallel and inform the research agenda.',
      'The practice spans visual art, conceptual work, and exhibition, with an international exhibition history that reflects the same cross-cultural and cross-disciplinary orientation as the broader portfolio. Art functions here not as a separate domain, but as an alternative mode of thinking about the same structural questions — authority, legitimacy, representation, and the architecture of meaning.',
    ],
  },
  exhibitionHistory: {
    heading: 'Exhibition History',
    cities: ['Tokyo', 'New York', 'San Francisco', 'Athens', 'Barcelona', 'London'],

    monster2021: {
      images: [
        { src: '/images/art-1.JPG', alt: 'Monster Exhibition 2021 at Shibuya Hikarie' },
        { src: '/images/art.JPG', alt: 'Monster Exhibition 2021 artwork' },
      ],
      title: 'Monster Exhibition 2021',
      city: 'Tokyo, Shibuya',
      lines: [
        '2022/2/18 (金) - 2/22 (火) 11:00~20:00',
        '開催場所: 渋谷ヒカリエ 8/ COURT',
        '主催: 一般社団法人Evolve Art & Design Japan',
        '協賛: 株式会社ツルカメ',
        '協力: 渋谷ヒカリエ',
      ],
      webLabel: 'Web:',
      webHref: 'https://monsterex.info/2021/',
      webText: 'monsterex.info/2021',
    },

    boomer: {
      images: [
        { src: '/images/boomer%20(1).jpg', alt: 'Boomer Gallery exhibition 1' },
        { src: '/images/boomer%20(2).jpg', alt: 'Boomer Gallery exhibition 2' },
        { src: '/images/boomer%20(3).jpg', alt: 'Boomer Gallery exhibition 3' },
        { src: '/images/boomer%20(4).jpg', alt: 'Boomer Gallery exhibition 4' },
      ],
      title: 'Boomer Gallery — “Why do you do it?”',
      city: 'London',
      lines: ['November 10th – 15th, 2022'],
    },

    monsterSf: {
      images: [
        { src: '/images/monster-sf%20(1).jpg', alt: 'Monster Exhibition San Francisco 1' },
        { src: '/images/monster-sf%20(2).jpg', alt: 'Monster Exhibition San Francisco 2' },
        { src: '/images/monster-sf%20(3).jpg', alt: 'Monster Exhibition San Francisco 3' },
        { src: '/images/monster%20sf.jpg', alt: 'Monster Exhibition San Francisco 4' },
      ],
      titleLinkText: 'Monster Exhibition',
      titleHref: 'https://monsterex.info/san-francisco/',
      city: 'San Francisco',
      lines: [
        'November 15th – 22nd, 11:00 – 16:00',
        '790 Pennsylvania Residence 1F',
      ],
    },

    artOnLoopJan: {
      images: [
        { src: '/images/art%20on%20loop%20jan.jpeg', alt: 'ART ON LOOP January 2024' },
        { src: '/images/art-2.PNG', alt: 'ART ON LOOP January 2024 artwork' },
      ],
      title: 'ART ON LOOP',
      city: 'London & Athens',
      lines: [
        'January 12th – 28th, 2024',
        'The Factory, 21-31 Shacklewell Ln, London, E8 2DA',
        'Πραξιτέλους 26, Αθήνα, 105 61',
        'Visiting hours: Mon – Fri 10:00-13:00 & 14:00-17:00, Weekend 11:00 – 17:00',
        'Private viewing Friday 19:30 – 22:00',
      ],
      linkHref: 'https://www.theholyart.com/',
      linkText: 'theholyart.com',
    },

    nyScreening: {
      image: { src: '/images/nyshowcase.jpeg', alt: 'New York Cinema Showcase at Stuart Cinema' },
      title: 'New York Cinema Screening',
      city: 'New York — Presented by Artspace Innovation',
      lines: [
        '19th March 2024, 19:00 – 21:00 (New York time)',
        'Stuart Cinema, 79 West Street, Brooklyn NY 11222',
      ],
    },

    artOnLoopSep: {
      image: { src: '/images/art%20on%20loop%20sep.jpeg', alt: 'ART ON LOOP Digital Exhibition September 2024' },
      title: 'ART ON LOOP — Digital Exhibition',
      city: 'London & Athens',
      lines: [
        'Private Viewing: Friday, September 20th, 2024, 19:30 – 22:00',
        'Open to the public until September 29th, 2024',
        'The Factory, 21-31 Shacklewell Ln, London, E8 2DA',
        'Πραξιτέλους 26, Αθήνα, 105 61',
        'Visiting hours: Mon – Fri 10:00-13:00 & 14:00-17:00, Weekend 11:00 – 17:00',
      ],
    },
  },

  press: {
    heading: 'Press & Media',
    items: [
      {
        title: 'Podcast — “To Where I Belong?”',
        detail: '“Japan: Art and Philosophy”',
        href: 'https://open.spotify.com/episode/78ykawkPnp4QSFnVDRBMJU?si=SJi3UlATQmWv_pkhs4tGog',
        linkLabel: 'Listen on Spotify',
      },
      {
        title: 'Featured — “A Like Artist” Volume 03',
        href: 'https://www.altiba9.com/a-like-artist-volume-03',
        linkLabel: 'altiba9.com',
      },
      {
        title: 'Interview — Risa Koyanagi: Painting & Peacebuilding',
        href: 'https://www.altiba9.com/platfrom-interviews-for-artists/risa-koyanagi-painting-peacebuilding',
        linkLabel: 'altiba9.com',
      },
    ],
  },

  themes: {
    heading: 'Themes',
    items: [
      'Visual thinking as a research methodology',
      'Representation, materiality, and governance',
      'Cross-cultural and interdisciplinary practice',
      'International exhibition and conceptual work',
      'The architecture of meaning and authority',
    ],
  },
};
