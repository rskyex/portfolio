import type { SelfTraceContent } from './types';

export const selftraceEn: SelfTraceContent = {
  backLabel: '← Back to Platforms',
  backHref: '/platforms',
  header: { kanji: '台', english: 'SelfTrace' },
  status: 'Live',
  visitLabel: 'Visit platform →',
  liveUrl: 'https://selftrace.vercel.app/',
  imageSrc: '/images/selftrace og.png',
  imageAlt: 'SelfTrace',
  overview: {
    heading: 'Overview',
    paragraphs: [
      'A reflective platform that helps users see how social media algorithms may shape what they post, repeat, remember, and gradually experience as their online self. Focuses on identity, self-presentation, and the long-term effects of platform incentives rather than simple engagement metrics.',
      'SelfTrace is part of the Govern the Human project, which explores how AI reshapes human choice, identity, and self-understanding across epistemic, ontological, and political layers.',
    ],
  },
  tags: ['Algorithmic Identity', 'Self-Presentation', 'Platform Incentives', 'Digital Reflection'],
  techStack: {
    heading: 'Technical Stack',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
  },
};
