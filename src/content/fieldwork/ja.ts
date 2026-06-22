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
    'リーダーシップ、フィールドワーク、組織づくり、そして研究・政策・文化・芸術の各領域を横断する学際的な活動。',
  projects: [
    {
      href: '/projects/fukushima',
      title: '福島フィールド調査',
      // TODO(i18n-review): post-disaster governance / policy-recovery gap の訳語要確認。METI=経済産業省、TEPCO=東京電力の表記要確認
      description:
        '双葉町・浪江町の複数地点での現地調査を通じ、災害後ガバナンス、信頼、政策と復興のギャップを検討する。避難者、町長、地域リーダー、経済産業省（METI）、東京電力（TEPCO）関係者へのインタビューを含む。',
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
        'アフリカと日本をつなぐ文化・政策イベントのための10か国以上のネットワークを共同設立。約70〜80名が参加するイベントや、約50名のステークホルダーが集う参議院での政策トークを企画・運営した。',
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
        '上智大学・東大作教授の平和構築・国際協力ラボにおける研究コミュニティおよび議論のプラットフォーム。',
      image: '/images/mofa-korea.jpg',
      imageAlt: '平和構築セミナー',
      // TODO(i18n-review): 役職表記要確認
      role: '代表',
    },
    {
      href: '/projects/art',
      title: 'アート実践',
      description:
        'ビジュアル・シンキング、国際展示、そしてガバナンス・アイデンティティ・テクノロジーに関するより広い研究と交差するコンセプチュアルな制作にまたがる学際的なアート実践。',
      image: '/images/art.JPG',
      imageAlt: 'アート実践',
    },
  ],
  speakingSection: {
    heading: '講演・政策活動',
    intro:
      '国際フォーラムや議会の場における、主な政策活動、ラウンドテーブルへの参加、若者代表としての登壇、対話への貢献。',
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
        '核軍縮の重要性について語り、アフリカと日本双方の学生が広島と福島を訪れ、原子力の影響と進行中の復興の取り組みを直接学ぶスタディツアーを提案した。',
      image: '/images/speaking-ticad.jpg',
    },
    {
      title: '日蘭平和交流',
      // TODO(i18n-review): Ministry of Foreign Affairs of Japan=外務省（MOFA）の表記要確認
      context:
        '外務省（MOFA）にて日本の若者代表として、インドネシア出身の第二次世界大戦のオランダ人生存者に向けた戦後和解のスピーチを行った。',
      type: '対話への貢献',
      description:
        '2011年の震災当時にオランダで暮らしていた経験と、それが文化的アイデンティティや両国間の歴史的緊張と向き合うきっかけとなったことについて、オランダ語でスピーチを行った。',
      image: '/images/speaking-peace-exchange.jpg',
    },
    {
      title: 'アフリカ・日本ユースドライブ',
      context: '若者を対象とした政策・開発フォーラム。',
      type: '若者代表',
      description:
        'アフリカと日本の共創、開発協力、そして未来志向のアジェンダ設定をテーマとする、若者を中心とした政策フォーラムへの参加。',
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
        '教育のためのグローバル・パートナーシップ（GPE）と世界銀行が主催する、教育政策に関するハイレベル・ラウンドテーブル。',
      image: '/images/speaking-roundtable.JPG',
    },
  ],
};
