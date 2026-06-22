import type { LunarMandateAtlasContent } from './types';

/**
 * REVIEW DRAFT (Japanese). Terminology follows src/i18n/glossary.ts.
 * Fields touching unconfirmed terms are flagged with TODO(i18n-review).
 * Name is fixed as 小柳璃紗 / Risa Koyanagi.
 */
export const lunarMandateAtlasJa: LunarMandateAtlasContent = {
  meta: {
    // Name fixed: Risa Koyanagi (per glossary).
    title: 'Lunar Mandate Atlas — Risa Koyanagi',
    // TODO(i18n-review): mandates / authority architecture（権威アーキテクチャ, status: review）要確認
    description:
      'アルテミス合意とILRS計画にまたがる、競合する月面ガバナンスの枠組み・マンデート・権威アーキテクチャをインタラクティブにマッピングする。',
  },
  backLabel: '← Faultline に戻る',
  backHref: '/platforms/faultline',
  header: {
    kanji: '月',
    english: 'Lunar Mandate Atlas',
    subtitle: '月をめぐる競合するガバナンスの主張',
  },
  status: '公開中',
  visitLabel: 'プラットフォームを見る →',
  liveUrl: 'https://lunar-mandate-atlas.vercel.app/',
  imageSrc: '/images/LGAT-og.svg',
  imageAlt: 'Lunar Mandate Atlas — Competing Governance Claims on the Moon',
  overview: {
    heading: '概要',
    paragraphs: [
      // TODO(i18n-review): authority architectures（権威アーキテクチャ, review）/ legitimacy（正統性, review）/ on behalf of humanity 要確認
      'Lunar Mandate Atlas は、月において立ち現れつつある秩序を形づくる、競合するガバナンスの枠組み・マンデート・権威アーキテクチャをマッピングするインタラクティブなプラットフォームである。アルテミス合意と国際月面研究ステーション（ILRS）計画を比較し、それぞれの枠組みがいかにして自らの正統性を構築し、人類を代表して行動すると主張するのかを追跡する。',
      // TODO(i18n-review): universalist language / participation conditions / boundary-making（境界形成, review）/ legitimation devices（正統化, review）要確認
      'いずれの枠組みも普遍主義的な言説を用い——「人類のために」「全人類のために」あるいは「平和的目的のために」と語りながら——相異なる参加条件、ガバナンス規範、そして境界形成（バウンダリー・メイキング）の実践を確立する。本プラットフォームは、こうした普遍主義的な主張が、包摂と排除を同時に行う正統化の装置としていかに機能するかを可視化する。',
      // TODO(i18n-review): legitimation theory（正統化理論, review）/ governance architectures / permissible action 要確認
      '正統化理論に依拠し、本アトラスは、広範な原則がいかにして具体的なガバナンスのアーキテクチャへと翻訳されるか——そしてそれらのアーキテクチャが、ひるがえって月における許容される行動の境界をいかに形づくるか——を追跡する。',
    ],
  },
  keyDimensions: {
    heading: '主要な次元',
    items: [
      // TODO(i18n-review): legitimation claims（正統化, review）/ universalist language 要確認
      'アルテミスとILRSの枠組みにまたがる、競合する正統化の主張と普遍主義的言説',
      // TODO(i18n-review): translation devices（翻訳装置, review）/ governance norms 要確認
      '広範な原則を運用可能なガバナンス規範へと変換する翻訳装置',
      // TODO(i18n-review): authority architecture（権威アーキテクチャ, review）/ governance regimes 要確認
      '月面ガバナンス・レジームの構造的特徴としての権威アーキテクチャ',
      // TODO(i18n-review): participation conditions / inclusivity, access, sovereignty 要確認
      '参加条件と、それが包摂性・アクセス・主権に対して持つ含意',
      // TODO(i18n-review): boundary-making（境界形成, review）/ permissible action 要確認
      '月の領域における許容される行動を定義する境界形成の実践',
    ],
  },
  // TODO(i18n-review): Lunar Governance / Legitimation（正統化, review）/ Authority Architecture（権威アーキテクチャ, review）/ Boundary-Making（境界形成, review）/ Participation Conditions 要確認
  tags: [
    '月面ガバナンス',
    'Artemis Accords',
    'ILRS',
    '正統化',
    '権威アーキテクチャ',
    '宇宙ガバナンス',
    'マンデートのマッピング',
    '普遍主義的言説',
    '境界形成',
    '参加条件',
  ],
  techStack: {
    heading: '技術スタック',
    items: ['Next.js', 'React', 'TypeScript', 'D3.js', 'Tailwind CSS', 'Recharts', 'Vercel'],
  },
};
