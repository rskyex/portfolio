import type { FieldworkContent } from './types';

/**
 * REVIEW DRAFT (Japanese). Terminology follows src/i18n/glossary.ts.
 * Fields touching unconfirmed terms are flagged with TODO(i18n-review) and
 * must be checked by the author before being treated as final.
 * Name is fixed as 小柳璃紗 / Risa Koyanagi.
 */
export const fieldworkJa: FieldworkContent = {
  meta: {
    title: 'フィールドワークと社会的活動 — 小柳璃紗',
  },
  header: {
    kanji: '場',
    english: 'フィールドワークと社会的活動',
    subtitle:
      '政策・研究・国際交流を横断するフィールドワーク、リーダーシップ、対話、社会に開かれた活動',
  },
  intro:
    'リーダーシップ、フィールドワーク、組織づくり、そして研究・政策・文化・芸術の各領域にまたがる学際的な活動。',
  projects: [
    {
      href: '/projects/fukushima',
      title: '福島フィールド調査',
      // TODO(i18n-review): post-disaster governance / policy-recovery gap の訳語要確認。METI=経済産業省、TEPCO=東京電力の表記要確認
      description:
        '双葉町・浪江町の複数地点で現地調査を重ね、災害後ガバナンス、信頼、政策と復興のギャップを検討する。避難者、町長、地域のリーダー、経済産業省（METI）や東京電力（TEPCO）の関係者への聞き取りを含む。',
      badge: 'アクティブな研究',
      image: '/images/fukushima.jpg',
      imageAlt: '福島フィールド調査',
      period: '2019–2024',
    },
    {
      href: '/projects/art',
      title: 'アート実践',
      description:
        'ビジュアル・シンキング、国際展示、そしてガバナンス・アイデンティティ・テクノロジーをめぐる広範な研究と響き合うコンセプチュアルな制作にまたがる学際的なアート実践。',
      image: '/images/art.JPG',
      imageAlt: 'アート実践',
    },
  ],
  // 日本語版では「講演・政策活動」セクションは非表示（フィールド調査とアートのみ掲載）。
  // speakingSection の見出しは speaking が空のときページ側で描画されない。
  speakingSection: {
    heading: '講演・政策活動',
    intro:
      '国際フォーラムや議会の場での主な政策活動、ラウンドテーブルへの参加、若者代表としての登壇、対話への貢献。',
  },
  speaking: [],
};
