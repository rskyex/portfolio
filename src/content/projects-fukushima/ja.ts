import type { FukushimaContent } from './types';

/**
 * REVIEW DRAFT (Japanese). Terminology follows src/i18n/glossary.ts.
 * Fields touching unconfirmed terms are flagged with TODO(i18n-review) and
 * must be checked by the author before being treated as final.
 * Name is fixed as 小柳璃紗 / Risa Koyanagi.
 */
export const fukushimaJa: FukushimaContent = {
  backLabel: '← アーカイブされたプロジェクトに戻る',
  header: {
    kanji: '業',
    english: '福島フィールド調査',
    subtitle: '2019–2024',
  },
  hero: {
    src: '/images/fukushima.jpg',
    alt: '福島フィールド調査',
  },
  overview: {
    heading: '概要',
    // TODO(i18n-review): 「双葉地区」「浪江地区」の行政区分表記、METI・TEPCO の和名表記要確認
    paragraphs: [
      '2019年から2024年にかけて、福島県の双葉地区および浪江地区で複数の現場を対象に行ったフィールドワーク。災害後ガバナンスを問い、公式の復興政策と避難を強いられたコミュニティの生活実態との間に根強く残るギャップに注目する。',
      '6年を超える関わりのなかで、避難者、自治体の首長、町のリーダー、経済産業省（METI）の職員、そして東京電力（TEPCO）の関係者へのインタビューを重ねてきた。長期にわたる避難と不確かな情報のもとで揺れ動く、信頼・透明性・制度的なアカウンタビリティの力学をたどる。',
    ],
  },
  researchOutputs: {
    heading: '研究成果 — 成果',
    intro:
      '福島県での6年間のフィールドワーク、ステークホルダーとの関わり、分野横断的な対話を通じて練り上げた主要な知見と分析枠組み。',
    items: [
      {
        n: 1,
        // TODO(i18n-review): 「事故」の表現（震災／原発事故）要確認
        title: '事故と、それが残したもの',
        description:
          '2011年3月11日の災害と、その後も長く尾を引く影響をたどる時系列。15万4千人の避難、数十年に及ぶ除染、分断されたガバナンス、そしてコミュニティへのスティグマ。',
      },
      {
        n: 2,
        title: 'ステークホルダー・マッピング',
        description:
          '政府、東京電力（TEPCO）・産業界、新エネルギー事業者、市民社会まで、各アクターを網羅的にマッピング。それぞれが「復興」を異なる意味で捉えている。',
      },
      {
        n: 3,
        title: '競合する利害と対立の軸',
        description:
          '相対立する利害の分析。洋上風力をめぐって割れる漁業協同組合、規模か生業かで対立する経済産業省（METI）と町の首長、そして政府とコミュニティの間の信頼のギャップ。',
      },
      {
        n: 4,
        title: '研究の独立性とアクセス',
        // TODO(i18n-review): mechanical / emotional / policy の語調の訳出要確認
        description:
          'あらゆるステークホルダー集団と信頼に根ざした関係を築くための方法論的枠組み。相手に応じて、技術的な語り口から感情に寄り添う語り口、政策の語り口へと言葉を使い分ける。',
      },
      {
        n: 5,
        title: '初訪問から論文発表まで',
        // TODO(i18n-review): デザイン思考の各段階（empathise / test & iterate）の訳語要確認
        description:
          '共感から検証・反復へと進むデザイン思考のプロセス。現場への没入、問題の再定義、分野横断的な対話のプロトタイプ、そしてステークホルダーとのフィードバック・ループ。',
      },
    ],
  },
  // TODO(i18n-review): 地名・固有名詞タグ（双葉/浪江/METI/TEPCO）の表記要確認
  tags: [
    '双葉',
    '浪江',
    '災害後ガバナンス',
    '信頼',
    '復興',
    'METI',
    'TEPCO',
    '避難者',
    '政策と復興のギャップ',
  ],
  gallery: {
    heading: 'ギャラリー',
    images: [
      { src: '/images/fukushima-1.jpg', alt: '福島フィールドワークの写真 1' },
      { src: '/images/fukushima-2.jpg', alt: '福島フィールドワークの写真 2' },
      { src: '/images/fukushima-3.JPG', alt: '福島フィールドワークの写真 3' },
      { src: '/images/fukushima-4.jpg', alt: '福島フィールドワークの写真 4' },
      { src: '/images/fukushima-5.jpg', alt: '福島フィールドワークの写真 5' },
      { src: '/images/fukushima-6.jpg', alt: '福島フィールドワークの写真 6' },
      { src: '/images/fukushima-7.jpg', alt: '福島フィールドワークの写真 7' },
      { src: '/images/fukushima-8.jpg', alt: '福島フィールドワークの写真 8' },
      { src: '/images/fukushima-10.jpg', alt: '福島フィールドワークの写真 10' },
      { src: '/images/peace-2.jpg', alt: '福島フィールドワークの写真' },
    ],
  },
  keyActivities: {
    heading: '主な活動',
    items: [
      '双葉地区・浪江地区での複数拠点フィールド調査',
      '避難者、首長、町のリーダー、経済産業省（METI）の職員、東京電力（TEPCO）の関係者へのインタビュー',
      '政策と復興のギャップ、およびそれが信頼と透明性に及ぼす影響の記録',
      '被災地域への11名のスタディツアーを企画',
      '被災コミュニティおよび制度的アクターとの6年間にわたる継続的な関与',
    ],
  },
};
