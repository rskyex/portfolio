import type { FaultlineContent } from './types';

/**
 * REVIEW DRAFT (Japanese). Terminology follows src/i18n/glossary.ts.
 * Fields touching unconfirmed terms are flagged with TODO(i18n-review).
 * Name is fixed as 小柳璃紗 / Risa Koyanagi.
 * Sub-project proper names (Orbital Risk Tracker, etc.) are kept as project names.
 */
export const faultlineJa: FaultlineContent = {
  backLabel: '← 進行中のプロジェクト一覧へ戻る',
  backHref: '/platforms',
  header: {
    kanji: '台',
    english: 'Faultline',
    subtitle: '戦略インフラ・リスク・スイート',
  },
  status: '公開中',
  statusVariant: 'Live',
  visitLabel: 'プラットフォームを見る →',
  visitUrl: 'https://faultline-nqmm.vercel.app/',
  subVisitLabel: '見る →',
  image: {
    src: '/images/faultline og.png',
    alt: 'Faultline — Strategic Infrastructure Risk Suite',
  },
  overview: {
    heading: '概要',
    paragraphs: [
      // プロジェクト名（Orbital Risk Tracker / Global Nuclear Infrastructure Atlas / Cyber Escalation Atlas / Lunar Mandate Atlas）は原語維持
      'Faultline は、領域特化型の4つのツール（Orbital Risk Tracker、Global Nuclear Infrastructure Atlas、Cyber Escalation Atlas、Lunar Mandate Atlas）を単一の分析スイートに束ねた、統一的な戦略インフラ・リスク・プラットフォームである。',
      // TODO(i18n-review): legitimacy（正統性）/ authority（権威）/ escalation の訳語要確認
      '各モジュールは、軌道・核・サイバー・月面の各領域でガバナンス理論を実装可能なプラットフォームへと翻訳し、正統性・権威・エスカレーションをめぐる概念的枠組みを、応用的な政策上の問いと結びつける。',
    ],
  },
  // TODO(i18n-review): nuclearGovernance(核ガバナンス)/dualUseGovernance/weaponised interdependence は status:'review' を含む。glossary 準拠だが要確認。固有名は原語維持
  tags: [
    '宇宙安全保障',
    '核ガバナンス',
    'サイバーガバナンス',
    'エスカレーション分析',
    '戦略的リスク',
    'デュアルユース・ガバナンス',
    '武器化された相互依存',
  ],
  subProjects: [
    {
      title: 'Orbital Risk Tracker',
      description:
        // TODO(i18n-review): security dilemma / weaponised interdependence の訳語要確認。固有名（Jervis）は原語維持
        '対衛星事象、近接運用、GNSSジャミング事案、サイバー・宇宙の連関を追跡する。ジャービスの安全保障のジレンマの枠組みと武器化された相互依存の理論を手がかりに、軌道インフラ全体のエスカレーション分析を支える。',
      tags: ['ASAT事象', '近接運用', 'GNSSジャミング', 'サイバー・宇宙の連関', 'Jervis', '武器化された相互依存'],
      image: '/images/orbital-platform.jpg',
      liveUrl: 'https://orbitalrisktracker.vercel.app',
    },
    {
      title: 'Global Nuclear Infrastructure Atlas',
      description:
        // TODO(i18n-review): nuclear arsenals / civilian nuclear power（核 vs 原子力）の訳語要確認。固有名（IAEA/SIPRI/WHO）は原語維持
        '世界の民生用原子力発電インフラ、主要な事故サイト、推定核戦力、そして関連する放射線・健康の文脈をインタラクティブにマッピングする。教育や政策の現場での利用を見据え、IAEA、SIPRI、WHO などのデータに依拠する。',
      tags: ['民生用原子力', '事故サイト', '核戦力', '放射線と健康', 'IAEA', 'SIPRI', 'WHO'],
      image: '/images/nuclear-platform.jpg',
      liveUrl: 'https://globalnuclearinfrastructureatlas.vercel.app',
    },
    {
      title: 'Cyber Escalation Atlas',
      description:
        // TODO(i18n-review): unpeace（不平和）は定訳が未確立。固有名（Kello/Schelling/Tallinn Manual 2.0）は原語維持
        'サイバー事案を、戦略的行動とガバナンスのシグナルの表れとしてマッピングする。ケロの「unpeace（不平和）」概念、アトリビューションの枠組み、シェリングのエスカレーション論理、タリン・マニュアル2.0を取り上げ、サイバー作戦を広い戦略分析のなかに位置づける。',
      tags: ['サイバー事案', '戦略的行動', 'Kello', 'アトリビューション', 'Schelling', 'Tallinn Manual 2.0', 'エスカレーション'],
      image: '/images/cyber-platform.png',
      liveUrl: 'https://cyber-escalation-atlas-5yp5.vercel.app',
    },
    {
      title: 'Lunar Mandate Atlas',
      description:
        // TODO(i18n-review): legitimation devices / authority architecture / mandate は status:'review'。訳語要確認。アルテミス合意・ILRS は glossary confirmed
        '競合する月面ガバナンスの枠組み、マンデート、権威アーキテクチャをインタラクティブにマッピングする。アルテミス合意と国際月面研究ステーション（ILRS）計画を比較し、普遍主義的な主張が正統化の装置としてどう働き、ガバナンス・アーキテクチャが月面で許容される行動をどう形づくるかを跡づける。',
      tags: ['月面ガバナンス', 'アルテミス合意', 'ILRS', '正統化', '権威アーキテクチャ', '宇宙ガバナンス', 'マンデート・マッピング'],
      image: '/images/LGAT-og.svg',
      liveUrl: 'https://lunar-mandate-atlas.vercel.app',
    },
  ],
  techStack: {
    heading: '技術スタック',
    items: ['Next.js', 'React', 'TypeScript', 'D3.js', 'Leaflet', 'Tailwind CSS', 'Recharts', 'Vercel'],
  },
};
