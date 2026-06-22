import type { FukushimaContent } from './types';

export const fukushimaEn: FukushimaContent = {
  backToResearch: '← Back to Research',
  header: {
    kanji: '論',
    english: 'Post-Disaster Governance and the Trust Gap',
  },
  status: 'In Progress',
  statusVariant: 'In Progress',
  overview: {
    heading: 'Overview',
    paragraphs: [
      'This research draws on six years of fieldwork in the Fukushima region to examine the governance of post-disaster recovery. It focuses on the persistent gap between official policy frameworks and the lived experience of affected communities — particularly around questions of trust, transparency, and long-term institutional accountability.',
      'Through interviews with evacuees, municipal leaders, and officials from METI and TEPCO, the research traces how state-society relations evolve under the pressure of prolonged displacement, uncertain information, and contested recovery narratives. It contributes to broader debates on disaster governance, institutional legitimacy, and the politics of recovery.',
    ],
  },
  tags: [
    'Post-Disaster Governance', 'Trust', 'Recovery', 'Policy Gaps',
    'State-Society Relations', 'Transparency', 'Institutional Legitimacy',
    'Fukushima', 'Long-Term Fieldwork',
  ],
  fieldwork: {
    heading: 'Fieldwork',
    steps: [
      { glyph: '一', text: 'Multi-site fieldwork across Futaba and Namie districts (2019–2024)' },
      { glyph: '二', text: 'Interviews with evacuees, mayors, town leaders, METI officials, and TEPCO representatives' },
      { glyph: '三', text: 'Organised 11-person study tour to affected areas' },
    ],
  },
  keyThemes: {
    heading: 'Key Themes',
    items: [
      'The policy-recovery gap and its consequences for affected communities',
      'Trust and transparency in post-disaster state-society relations',
      'Long-term displacement and the politics of return',
      'Institutional accountability under conditions of uncertainty',
      'The role of local governance actors in mediating recovery processes',
    ],
  },
  researchOutput: {
    heading: 'Research Output',
    slideAlt: (n: number) => `Fukushima research output slide ${n}`,
  },
  gallery: {
    heading: 'Gallery',
    photoAlt: (n: number) => `Fukushima fieldwork photo ${n}`,
    peacePhotoAlt: 'Fukushima fieldwork photo',
  },
};
