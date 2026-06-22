import type { TheatreContent } from './types';

/**
 * REVIEW DRAFT (Japanese). Terminology follows src/i18n/glossary.ts.
 * Fields touching unconfirmed terms are flagged with TODO(i18n-review).
 * Name is fixed as 小柳璃紗 / Risa Koyanagi.
 */
export const theatreJa: TheatreContent = {
  meta: {
    title: 'Theatre of Authenticity',
    // TODO(i18n-review): authenticity / externalised の訳語要確認
    description:
      '真正性そのものを問う体験型サイト——私たちの行動の背後にある動機が、どこまで外部化されてきたのかを可視化する。',
  },
  backLabel: '← MYTHERA に戻る',
  backHref: '/platforms/mythera',
  header: { kanji: '真', english: 'Theatre of Authenticity' },
  status: '進行中',
  imageSrc: '/images/Theatre of Authenticity.png',
  imageAlt: 'Theatre of Authenticity',
  overview: {
    heading: '概要',
    paragraphs: [
      // TODO(i18n-review): authenticity / inner necessity / true self の訳語要確認
      '真正性という概念そのものを問う体験型サイト。あなたは本当に内なる必然から行動しているのか、それとも観察されていることを前提に自己を構築しているのか。「真の自己」という観念は、いったいどこまで持ちこたえうるのか。',
      // TODO(i18n-review): external forces / the gaze of others / externalised の訳語要確認
      'ユーザーは一連の選択を行うが、その途中で外的な力が介入しはじめる——他者のまなざし、観客、記録装置、称賛、そして反発。最終的に、その人の行動の背後にある動機がどこまで外部化されているのかが可視化される。',
      // TODO(i18n-review): performance / transcendence の訳語要確認
      '三島、キルケゴール、ニーチェ、サルトル、バタイユにわたり、真正性・パフォーマンス・美・死・超越の相互作用を探究する。',
    ],
  },
  coreQuestions: {
    heading: '核心的な問い',
    items: [
      // TODO(i18n-review): inner necessity の訳語要確認
      'あなたは本当に内なる必然から行動しているのか。',
      // TODO(i18n-review): on the premise of being watched の訳語要確認
      'あなたは見られていることを前提に自己を構築しているのか。',
      // TODO(i18n-review): authentic self の訳語要確認
      '「真正な自己」という観念は、いったいどこまで持ちこたえうるのか。',
    ],
  },
  // TODO(i18n-review): Authenticity / Selfhood / Existentialism の訳語要確認
  tags: [
    '真正性',
    'パフォーマンス',
    '自己性',
    '実存主義',
    'Mishima',
    'Kierkegaard',
    'Nietzsche',
    'Sartre',
    'Bataille',
  ],
  techStack: {
    heading: '技術スタック',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
  },
};
