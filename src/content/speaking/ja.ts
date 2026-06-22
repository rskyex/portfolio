import type { SpeakingContent } from './types';

/**
 * REVIEW DRAFT (Japanese). Terminology follows src/i18n/glossary.ts.
 * Fields touching unconfirmed terms are flagged with TODO(i18n-review) and
 * must be checked by the author before being treated as final.
 * Name is fixed as 小柳璃紗 / Risa Koyanagi.
 */
export const speakingJa: SpeakingContent = {
  header: {
    kanji: '演',
    english: '講演・政策活動',
    subtitle: '主な講演・社会的活動',
  },
  intro:
    '国際フォーラムや議会の場での主な政策活動、ラウンドテーブルへの参加、若者代表としての登壇、対話への貢献。',
  events: [
    {
      // TODO(i18n-review): TICAD は固有名詞のため原語を維持
      title: 'TICAD閣僚会合',
      // TODO(i18n-review): Tokyo International Conference on African Development=アフリカ開発会議（TICAD）の表記要確認
      context:
        'アフリカ開発会議（TICAD）において、日本の学生代表として登壇。',
      type: '政策活動',
      description:
        '核軍縮の重要性を訴えるとともに、アフリカと日本双方の学生が広島と福島を訪れ、原子力の影響と進行中の復興の取り組みを直に学ぶスタディツアーを提案した。教育と文化交流を通じて核問題への理解を深めることを狙いとする提案である。',
      image: '/images/speaking-ticad.jpg',
    },
    {
      title: '日蘭平和交流',
      // TODO(i18n-review): Ministry of Foreign Affairs of Japan=外務省（MOFA）の表記要確認
      context:
        '外務省（MOFA）にて日本の若者代表として、インドネシア出身の第二次世界大戦オランダ人生存者に向け、戦後和解のスピーチを行った。',
      type: '対話への貢献',
      description:
        '2011年の震災当時にオランダで暮らした経験、そしてそれが文化的アイデンティティや両国間の歴史的緊張と向き合う契機となったことを、オランダ語で語った。支援と疑念の双方を受けるなかで、戦時の過去をめぐり両国が抱く異なる視座を掘り下げていった。当初は二つのアイデンティティの狭間に立たされていたが、いまではそれを、両国の真の相互理解を築くための強みと捉えている。',
      image: '/images/speaking-peace-exchange.jpg',
    },
    {
      // TODO(i18n-review): フォーラム正式名称の訳語要確認
      title: 'アフリカ・日本ユースドライブ：私たちが望む未来の共創',
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
        '教育のためのグローバル・パートナーシップ（GPE）と世界銀行が主催し、日本の参議院で開催された、教育政策に関するハイレベル・ラウンドテーブルへの参加。',
      image: '/images/speaking-roundtable.JPG',
    },
  ],
};
