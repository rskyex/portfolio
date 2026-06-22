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
      href: '/projects/afrecos',
      // TODO(i18n-review): AFRECOS は固有名詞のため原語を維持
      title: 'AFRECOS',
      // TODO(i18n-review): House of Councillors=参議院 の表記要確認
      description:
        'アフリカと日本をつなぐ文化・政策イベントを担う、10か国以上にまたがるネットワークを共同で立ち上げた。70〜80名規模のイベントや、約50名の関係者が集う参議院での政策トークを企画・運営。',
      image: '/images/afrecos.jpg',
      imageAlt: 'AFRECOSのイベント',
      period: '2024',
      // TODO(i18n-review): 役職表記要確認
      role: '共同設立者・代表',
    },
    {
      href: '/projects/peace',
      title: '平和構築ラボ',
      // TODO(i18n-review): 上智大学・東大作教授のラボ名称の正式表記要確認
      description:
        '上智大学・東大作教授の平和構築・国際協力ラボを母体とする、研究コミュニティ兼議論のプラットフォーム。',
      image: '/images/mofa-korea.jpg',
      imageAlt: '平和構築セミナー',
      // TODO(i18n-review): 役職表記要確認
      role: '代表',
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
  speakingSection: {
    heading: '講演・政策活動',
    intro:
      '国際フォーラムや議会の場での主な政策活動、ラウンドテーブルへの参加、若者代表としての登壇、対話への貢献。',
  },
  speaking: [
    {
      // TODO(i18n-review): TICAD は固有名詞のため原語を維持
      title: 'TICAD閣僚会合',
      // TODO(i18n-review): Tokyo International Conference on African Development=アフリカ開発会議（TICAD）の表記要確認
      context:
        'アフリカ開発会議（TICAD）において、日本の学生代表として登壇。',
      type: '政策活動',
      description:
        '核軍縮の重要性を訴えるとともに、アフリカと日本双方の学生が広島と福島を訪れ、原子力の影響と進行中の復興の取り組みを直に学ぶスタディツアーを提案した。',
      image: '/images/speaking-ticad.jpg',
    },
    {
      title: '日蘭平和交流',
      // TODO(i18n-review): Ministry of Foreign Affairs of Japan=外務省（MOFA）の表記要確認
      context:
        '外務省（MOFA）にて日本の若者代表として、インドネシア出身の第二次世界大戦オランダ人生存者に向け、戦後和解のスピーチを行った。',
      type: '対話への貢献',
      description:
        '2011年の震災当時にオランダで暮らした経験、そしてそれが文化的アイデンティティや両国間の歴史的緊張と向き合う契機となったことを、オランダ語で語った。',
      image: '/images/speaking-peace-exchange.jpg',
    },
    {
      title: 'アフリカ・日本ユースドライブ',
      context: '若者を対象とした政策・開発フォーラム。',
      type: '若者代表',
      description:
        'アフリカと日本の共創、開発協力、未来志向のアジェンダ設定をテーマに掲げた、若者主体の政策フォーラムへの参加。',
      image: '/images/speaking-youth-drive.jpg',
    },
    {
      title: '教育のラウンドテーブルとフレンズ・オブ・エデュケーション',
      // TODO(i18n-review): GPE=教育のためのグローバル・パートナーシップ、World Bank=世界銀行、House of Councillors=参議院 の表記要確認
      context:
        'GPEと世界銀行の主催により、日本の参議院で開催。',
      type: 'ラウンドテーブル参加',
      // TODO(i18n-review): Global Partnership for Education=教育のためのグローバル・パートナーシップ の表記要確認
      description:
        '教育のためのグローバル・パートナーシップ（GPE）と世界銀行が主催した、教育政策に関するハイレベル・ラウンドテーブル。',
      image: '/images/speaking-roundtable.JPG',
    },
  ],
};
