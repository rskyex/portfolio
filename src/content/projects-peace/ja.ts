import type { PeaceContent } from './types';

/**
 * REVIEW DRAFT (Japanese). Terminology follows src/i18n/glossary.ts.
 * Fields touching unconfirmed terms are flagged with TODO(i18n-review) and
 * must be checked by the author before being treated as final.
 * Name is fixed as 小柳璃紗 / Risa Koyanagi.
 */
export const peaceJa: PeaceContent = {
  backLabel: '← アーカイブされたプロジェクトに戻る',
  header: {
    kanji: '業',
    english: '平和構築ラボラトリー',
    subtitle: '代表',
  },
  hero: {
    src: '/images/peacebuilding.jpg',
    alt: '平和構築セミナー',
  },
  overview: {
    heading: '概要',
    // TODO(i18n-review): 上智大学・東大作教授の研究室の正式名称、各地域名の表記要確認
    paragraphs: [
      '上智大学・東大作教授の平和構築・国際協力研究室における、研究コミュニティおよびディスカッションの場。代表として、小柳璃紗は世界の紛争解決と外交をめぐる議論を主導し、学生がウクライナ、アフガニスタン、イラク、南スーダンにおける紛争調停にとくに焦点を当てて平和構築の戦略を分析するセミナーを運営した。',
      'リーダーシップの一環として、彼女はウクライナの学生との対話を企画し、当事者ならではの視点を引き出すとともに、ウクライナ戦争についてのより深い議論を促した。また、関与とアウトリーチを高めるための広報物のデザインも手がけた。この役割を通じて、彼女は学生をこの分野の専門家とつなぎながら、国際的な平和への取り組みへの理解を深めることを目指した。',
      'この研究室は、学生・研究者・政策実務家のあいだの持続的な対話のための、知的に真摯な場を提供した。',
    ],
  },
  // TODO(i18n-review): 地域名・「上智大学」等の固有名詞タグの表記要確認
  tags: [
    '平和構築',
    '対話',
    'ウクライナ',
    'アフガニスタン',
    'イラク',
    '南スーダン',
    '和解',
    '政策への関与',
    '上智大学',
  ],
  poster: {
    heading: '広報ポスター',
    alt: '平和構築/国際協力研究会 広報ポスター',
    src: '/images/peace-poster.jpg',
  },
  activities: {
    heading: '活動',
    items: [
      '世界の紛争解決と外交をめぐる議論を主導',
      'ウクライナ、アフガニスタン、イラク、南スーダンにわたる平和構築の戦略を分析するセミナーを運営',
      '当事者ならではの戦争の視点を得るため、ウクライナの学生との対話を企画',
      '関与とアウトリーチを高めるための広報物をデザイン',
      '学生を国際的な平和への取り組みの専門家とつないだ',
      '政策実務家および学術研究者との関与',
    ],
  },
};
