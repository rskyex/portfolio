import type { AboutContent } from './types';

export const aboutEn: AboutContent = {
  meta: {
    title: 'About',
    description: 'Cambridge Future Scholar & Researcher — Risa Koyanagi works across space, nuclear, and emerging technology governance.',
  },
  header: { kanji: '技', english: 'About', subtitle: 'Cambridge Future Scholar & Researcher' },
  profile: {
    photoAlt: 'Risa Koyanagi',
    heading: 'Profile',
    paragraphs: [
      [
        { text: 'Koyanagi is a researcher at the ' },
        { text: 'University of Cambridge', strong: true },
        { text: ', working on the governance of space, nuclear, and cyber systems — with a particular focus on how authority is constructed, how norms break down, and what it takes to rebuild legitimacy after they do.' },
      ],
      [
        { text: 'As a Cambridge Future Scholar, she conducts supervised research under Prof. Harald Wydra on competing lunar governance frameworks: how universalist language is translated into standards, participation conditions, and interpretive discretion. Her broader research spans dual-use space infrastructure, cross-domain escalation risk, and structural gaps in responsible behaviour norms across AI, space, and cyber governance.' },
      ],
      [
        { text: 'This work is grounded in six years of field research in post-disaster Fukushima, where she examined how governance failures at the state–operator interface erode public trust and policy legitimacy, conducting semi-structured interviews with evacuees, municipal officials, and TEPCO and METI representatives.' },
      ],
      [
        { text: 'Her work is forthcoming at the ' },
        { text: 'International Astronautical Congress 2026', strong: true },
        { text: ' (Antalya, Türkiye), with ' },
        { text: 'three accepted papers', strong: true },
        { text: ' across symposia on space security and sustainability, space policy and economics, and space and society — addressing dual-use neutralisation, conditional openness in lunar governance, and mythic naming as soft infrastructure in competing lunar orders.' },
      ],
      [
        { text: 'Alongside her research at Cambridge, she builds two open research platforms. Faultline operationalises escalation theory and attribution frameworks for researchers and policy professionals, through tools including the Orbital Risk Tracker, Global Nuclear Infrastructure Atlas, and Cyber Escalation Atlas. Govern the Human examines a second-order problem: how sustained AI interaction transforms the human subject meant to govern, consent, and deliberate.' },
      ],
    ],
    viewResearch: 'View Research',
    viewPlatforms: 'View Platforms',
  },
  education: {
    heading: 'Education',
    items: [
      { institution: 'Hughes Hall, University of Cambridge', degree: 'BA Human, Social, and Political Sciences', period: 'October 2026' },
      { institution: 'London School of Economics (University of London)', degree: 'BSc Politics and International Relations', period: '2025–2026' },
      { institution: 'Saïd Business School, University of Oxford', degree: 'AI and Digital Transformation in Government', period: 'Nov 2025 – Jan 2026', detail: 'Certificate' },
      { institution: 'SOAS University of London', degree: 'BSc Social Sciences (Foundation Year)', period: '2024–2025', detail: 'First Class' },
    ],
  },
  skills: {
    heading: 'Skills',
    research: {
      heading: 'Research',
      paragraphs: [
        'Legitimation, dual-use systems, authority architecture, strategic risk, space governance, nuclear governance, emerging technology governance, infrastructure politics.',
        'Discourse and narrative analysis, qualitative coding, comparative political research, interpretive methods, policy framing, symbolic and mythic analysis, and research-to-interface translation.',
      ],
    },
    policy: {
      heading: 'Policy / Communication',
      paragraphs: [
        'Policy analysis, strategic writing, briefing development, narrative framing, stakeholder engagement, cross-sector communication.',
        'Public speaking, moderation, workshop and event design, interdisciplinary collaboration, knowledge synthesis, and public-facing translation of complex political and technological issues.',
      ],
    },
    technical: {
      heading: 'Technical & Computational Methods',
      paragraphs: [
        'Platform architecture, public-facing research tool prototyping, AI workflow design, prompt engineering, OpenAI API-based feature design, Supabase-based data structuring, SQL, analytics instrumentation, event logging design, dashboard planning.',
        'Information architecture, user-flow design, UI/UX direction, qualitative coding, discourse and narrative analysis workflows, stakeholder mapping.',
        'Policy and infrastructure data organisation, behavioural research design, and research-to-interface translation.',
      ],
    },
  },
  languages: {
    heading: 'Languages',
    items: ['Japanese', 'English', 'Russian', 'Chinese'],
  },
  roles: {
    heading: 'Roles & Leadership',
    institution: 'Space Generation Advisory Council',
    location: 'Japan',
    title: 'Space Policy Project Team Leader',
    description: "Leading the Japan team within SGAC's Space Policy project — convening early-career researchers and policy contributors around space governance, dual-use systems, and norm formation in emerging space orders.",
  },
  affiliations: {
    heading: 'Affiliations',
    items: [
      { institution: 'Sophia University', detail: 'Professor Daisaku Higashi Peacebuilding and International Cooperation Laboratory', role: 'Former President; current Alumni Representative' },
      { institution: 'University of Tokyo', detail: 'Professor Makoto Iokibe Yotsuya Reimeikai' },
    ],
  },
  awards: {
    heading: 'Awards',
    items: [
      { title: 'Selected, JAXA International Space Education Board 2026', detail: "Chosen to serve on the Japan Aerospace Exploration Agency's International Space Education Board for 2026" },
      { title: '2nd Prize, GEIL Policy Contest — Tokyo Earthquake Response', detail: 'Led a team of four in crafting a policy to boost Tokyo\'s earthquake resilience, proposing "Transferable Development Rights Plus" to incentivise redevelopment, reduce wooden structures, and widen streets' },
    ],
  },
  arts: {
    heading: 'Arts Background',
    paragraphs: [
      'Her artistic practice — spanning music performance, visual art, and poetry — is documented through MYTHERA, her interpretive research studio.',
      'Koyanagi trained in piano with Noriko Amano, Shadow Box with Ineke de Bruijn, and oil painting under Yukiko Hamano. She received an Excellence Award for poetry in 2011 and appeared as a child actor in Maribor National Opera’s “Carmen.” As a teenager, she won the Excellence Award in the JYOJI-ROCK U-16 contest. Her art studies with Nobuhiko Utsumi led to a group exhibition. She has been selected for the Monster Exhibition and featured in Al-Tiba9 Contemporary Art Magazine.',
    ],
    mytheraLabel: 'MYTHERA',
    artPracticeLabel: 'Art Practice',
  },
  interests: {
    heading: 'Interests',
    items: ['Violin', 'Johann Sebastian Bach', 'Jean Sibelius', 'Giacomo Puccini', 'Giuseppe Verdi', 'Pyotr Ilyich Tchaikovsky', 'Antonín Dvořák', 'Igor Stravinsky', 'Fyodor Dostoevsky', 'Kabuki', 'Yukio Mishima', 'Greek Mythology', 'Raymond Radiguet', 'Rainer Maria Rilke'],
  },
  connect: {
    heading: 'Connect',
    galleryAlt: 'Gallery',
    instagramLabel: '@rskyex',
    linkedinLabel: 'LinkedIn',
    contactLabel: 'Contact',
  },
};
