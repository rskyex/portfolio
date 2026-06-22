import type { ProjectsContent } from './types';

/**
 * REVIEW DRAFT (Japanese). Terminology follows src/i18n/glossary.ts.
 * Fields touching unconfirmed terms are flagged with TODO(i18n-review) and
 * must be checked by the author before being treated as final.
 * Name is fixed as 小柳璃紗 / Risa Koyanagi.
 */
export const projectsJa: ProjectsContent = {
  meta: {
    title: '経歴・フィールドワーク — 小柳璃紗',
    description:
      '研究・政策・文化・芸術の各領域でのリーダーシップ、フィールドワーク、組織づくり、そして学際的な活動。',
  },
  header: {
    kanji: '業',
    english: '経歴・フィールドワーク',
    subtitle: 'フィールドワーク・リーダーシップ・学際的活動',
  },
  intro:
    '研究・政策・文化・芸術の各領域でのリーダーシップ、フィールドワーク、組織づくり、そして学際的な活動。',
  cards: [
    {
      href: '/projects/fukushima',
      title: '福島フィールド調査',
      // TODO(i18n-review): post-disaster governance / policy-recovery gap / trust gap の訳語要確認。METI・TEPCO の表記も要確認
      description:
        '双葉地区・浪江地区を拠点に複数の現場で行うフィールドワーク。災害後ガバナンス、信頼、そして政策と復興の間に横たわるギャップを問う。避難者、首長、町のリーダー、経済産業省（METI）、東京電力（TEPCO）の関係者へのインタビューを重ねた。災害後ガバナンスと信頼のギャップをめぐる継続的な研究の実証的基盤をなすフィールドワークである。',
      badge: 'アクティブ・リサーチ',
      image: '/images/fukushima.jpg',
      imageAlt: '福島フィールド調査',
      period: '2019–2024',
    },
    {
      href: '/projects/afrecos',
      // TODO(i18n-review): 組織名 AFRECOS は固有名詞。原語のまま据え置き
      title: 'AFRECOS',
      // TODO(i18n-review): 「参議院」表記要確認
      description:
        'アフリカと日本をつなぐ文化・政策イベントを目的に、10か国以上にまたがるネットワークを共同設立。約70〜80名が参加するイベントや、約50名のステークホルダーが集う参議院での政策トークを開催した。',
      image: '/images/afrecos.jpg',
      imageAlt: 'AFRECOSのイベント',
      period: '2024',
      role: '共同設立者・代表',
    },
    {
      href: '/projects/peace',
      // TODO(i18n-review): 研究室の正式名称・東大作教授の表記要確認
      description:
        '上智大学・東大作教授の平和構築・国際協力研究室を母体とする、研究コミュニティと議論の場。ウクライナ、アフガニスタン、イラク、南スーダンを題材とした対話形式のセミナーを行う。',
      title: '平和構築ラボラトリー',
      image: '/images/mofa-korea.jpg',
      imageAlt: '平和構築セミナー',
      role: '代表',
    },
    {
      href: '/projects/art',
      title: 'アート活動',
      description:
        'ビジュアル・シンキングや国際的な展示から、ガバナンス・アイデンティティ・技術をめぐる研究と交わる概念的な作品まで、領域を横断するアート活動。',
      image: '/images/art.JPG',
      imageAlt: 'アート活動',
    },
  ],
};
