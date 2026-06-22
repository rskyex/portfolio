import type { ArtContent } from './types';

/**
 * REVIEW DRAFT (Japanese). Terminology follows src/i18n/glossary.ts.
 * Fields touching unconfirmed terms are flagged with TODO(i18n-review) and
 * must be checked by the author before being treated as final.
 * Name is fixed as 小柳璃紗 / Risa Koyanagi.
 *
 * Exact dates, addresses, external URLs, the Greek address lines, and the
 * venue lines already written in Japanese are identical-across-locales data
 * and are NOT reworded here.
 */
export const artJa: ArtContent = {
  backLabel: '← アーカイブされたプロジェクトに戻る',
  header: {
    kanji: '業',
    english: 'アート活動',
    subtitle: 'ビジュアル・シンキングと学際的な実践',
  },
  hero: {
    src: '/images/art.JPG',
    alt: 'アート活動',
  },
  overview: {
    heading: '概要',
    // TODO(i18n-review): authority/legitimacy/representation/architecture of meaning の訳語要確認
    paragraphs: [
      'ビジュアル・シンキングを、ガバナンス・アイデンティティ・技術をめぐる研究関心とつなぐ学際的なアート活動。研究テーマと並走し、そこに示唆を与えながら、表象・物質性・概念的な枠づけの問いに取り組む作品群である。',
      'ビジュアルアート、概念的な作品、展示にまたがるこの活動は、ポートフォリオ全体と同じく異文化・学際的な志向を映した国際的な展示歴を持つ。ここでのアートは独立した一領域ではなく、権威、正統性、表象、意味のアーキテクチャといった同じ構造的な問いを考えるためのもう一つの思考様式として働く。',
    ],
  },
  exhibitionHistory: {
    heading: '展示歴',
    // TODO(i18n-review): 都市名の日本語表記要確認
    cities: ['東京', 'ニューヨーク', 'サンフランシスコ', 'アテネ', 'バルセロナ', 'ロンドン'],

    monster2021: {
      images: [
        { src: '/images/art-1.JPG', alt: '渋谷ヒカリエでのMonster Exhibition 2021' },
        { src: '/images/art.JPG', alt: 'Monster Exhibition 2021の作品' },
      ],
      title: 'Monster Exhibition 2021',
      city: '東京・渋谷',
      // Venue lines are original Japanese data — kept as-is.
      lines: [
        '2022/2/18 (金) - 2/22 (火) 11:00~20:00',
        '開催場所: 渋谷ヒカリエ 8/ COURT',
        '主催: 一般社団法人Evolve Art & Design Japan',
        '協賛: 株式会社ツルカメ',
        '協力: 渋谷ヒカリエ',
      ],
      webLabel: 'Web:',
      webHref: 'https://monsterex.info/2021/',
      webText: 'monsterex.info/2021',
    },

    boomer: {
      images: [
        { src: '/images/boomer%20(1).jpg', alt: 'Boomer Galleryでの展示 1' },
        { src: '/images/boomer%20(2).jpg', alt: 'Boomer Galleryでの展示 2' },
        { src: '/images/boomer%20(3).jpg', alt: 'Boomer Galleryでの展示 3' },
        { src: '/images/boomer%20(4).jpg', alt: 'Boomer Galleryでの展示 4' },
      ],
      // TODO(i18n-review): 展覧会名・サブタイトルは固有名詞。原語のまま据え置き
      title: 'Boomer Gallery — “Why do you do it?”',
      city: 'ロンドン',
      lines: ['November 10th – 15th, 2022'],
    },

    monsterSf: {
      images: [
        { src: '/images/monster-sf%20(1).jpg', alt: 'サンフランシスコでのMonster Exhibition 1' },
        { src: '/images/monster-sf%20(2).jpg', alt: 'サンフランシスコでのMonster Exhibition 2' },
        { src: '/images/monster-sf%20(3).jpg', alt: 'サンフランシスコでのMonster Exhibition 3' },
        { src: '/images/monster%20sf.jpg', alt: 'サンフランシスコでのMonster Exhibition 4' },
      ],
      // 固有名詞のため原語のまま据え置き
      titleLinkText: 'Monster Exhibition',
      titleHref: 'https://monsterex.info/san-francisco/',
      city: 'サンフランシスコ',
      lines: [
        'November 15th – 22nd, 11:00 – 16:00',
        '790 Pennsylvania Residence 1F',
      ],
    },

    artOnLoopJan: {
      images: [
        { src: '/images/art%20on%20loop%20jan.jpeg', alt: 'ART ON LOOP 2024年1月' },
        { src: '/images/art-2.PNG', alt: 'ART ON LOOP 2024年1月の作品' },
      ],
      // 固有名詞のため原語のまま据え置き。住所行は原文どおり。
      // TODO(i18n-review): 会期・開館時間など案内文の和訳要確認
      title: 'ART ON LOOP',
      city: 'ロンドン・アテネ',
      lines: [
        '2024年1月12日 – 28日',
        'The Factory, 21-31 Shacklewell Ln, London, E8 2DA',
        'Πραξιτέλους 26, Αθήνα, 105 61',
        '開館時間：月〜金 10:00-13:00 & 14:00-17:00、週末 11:00 – 17:00',
        'プライベート・ビューイング：金曜 19:30 – 22:00',
      ],
      linkHref: 'https://www.theholyart.com/',
      linkText: 'theholyart.com',
    },

    nyScreening: {
      image: { src: '/images/nyshowcase.jpeg', alt: 'Stuart Cinemaでのニューヨーク・シネマ・ショーケース' },
      title: 'ニューヨーク・シネマ上映',
      // TODO(i18n-review): 主催者名 Artspace Innovation は原語のまま据え置き
      city: 'ニューヨーク — Artspace Innovation主催',
      lines: [
        '2024年3月19日 19:00 – 21:00（ニューヨーク時間）',
        'Stuart Cinema, 79 West Street, Brooklyn NY 11222',
      ],
    },

    artOnLoopSep: {
      image: { src: '/images/art%20on%20loop%20sep.jpeg', alt: 'ART ON LOOP デジタル展示 2024年9月' },
      // 固有名詞 + 説明部分のみ和訳
      title: 'ART ON LOOP — デジタル展示',
      city: 'ロンドン・アテネ',
      // TODO(i18n-review): 会期・開館時間など案内文の和訳要確認。住所行は原文どおり
      lines: [
        'プライベート・ビューイング：2024年9月20日（金）19:30 – 22:00',
        '一般公開は2024年9月29日まで',
        'The Factory, 21-31 Shacklewell Ln, London, E8 2DA',
        'Πραξιτέλους 26, Αθήνα, 105 61',
        '開館時間：月〜金 10:00-13:00 & 14:00-17:00、週末 11:00 – 17:00',
      ],
    },
  },

  press: {
    heading: 'プレス・メディア',
    items: [
      {
        // TODO(i18n-review): 番組名・エピソード名は固有名詞。原語のまま据え置き
        title: 'ポッドキャスト — “To Where I Belong?”',
        detail: '“Japan: Art and Philosophy”',
        href: 'https://open.spotify.com/episode/78ykawkPnp4QSFnVDRBMJU?si=SJi3UlATQmWv_pkhs4tGog',
        linkLabel: 'Spotifyで聴く',
      },
      {
        title: '掲載 — “A Like Artist” Volume 03',
        href: 'https://www.altiba9.com/a-like-artist-volume-03',
        linkLabel: 'altiba9.com',
      },
      {
        title: 'インタビュー — 小柳璃紗：絵画と平和構築',
        href: 'https://www.altiba9.com/platfrom-interviews-for-artists/risa-koyanagi-painting-peacebuilding',
        linkLabel: 'altiba9.com',
      },
    ],
  },

  themes: {
    heading: 'テーマ',
    items: [
      '研究方法論としてのビジュアル・シンキング',
      '表象、物質性、そしてガバナンス',
      '異文化・学際的な実践',
      '国際的な展示と概念的な作品',
      '意味と権威のアーキテクチャ',
    ],
  },
};
