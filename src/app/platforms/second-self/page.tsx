import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import PhotoFrame from '@/components/PhotoFrame';
import Tag from '@/components/Tag';

export const metadata = {
  title: 'Second Self',
  description: 'AI、記憶、統治、自己形成をテーマにしたオンライン哲学カードゲーム — システムが人間の主体形成に参加するとき何が起きるか',
  openGraph: {
    title: 'Second Self',
    description: 'AI、記憶、統治、自己形成をテーマにしたオンライン哲学カードゲーム — システムが人間の主体形成に参加するとき何が起きるか',
    images: [{ url: '/images/secondself_og.png', width: 1200, height: 630, alt: 'Second Self' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Second Self',
    description: 'AI、記憶、統治、自己形成をテーマにしたオンライン哲学カードゲーム — システムが人間の主体形成に参加するとき何が起きるか',
    images: ['/images/secondself_og.png'],
  },
};

export default function SecondSelfPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <Link href="/platforms/mythera" className="font-noto-sans text-xs text-kin/50 hover:text-kin-light transition-colors tracking-wide mb-8 inline-block">
        &larr; Back to MYTHERA
      </Link>

      <SectionHeader kanji="己" english="Second Self" subtitle="Philosophical Card Game" />

      <div className="mt-8 space-y-8">
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 text-xs font-noto-sans bg-kin/10 text-kin-light border border-kin/20 rounded-sm">
            In Progress
          </span>
        </div>

        <PhotoFrame
          src="/images/secondself_og.png"
          alt="Second Self"
          width={800}
          height={450}
          className="w-full h-64 md:h-80"
        />

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Overview</h3>
          <p className="font-noto-sans text-sm text-shiro/60 leading-relaxed mb-4">
            AI、記憶、統治、そして自己形成をテーマにしたオンライン哲学カードゲーム。舞台は、アルゴリズム的システムが社会の深層に浸透した近未来。プレイヤーは単に相手を倒すのではなく、ひとつの社会を設計する。
          </p>
          <p className="font-noto-sans text-sm text-shiro/60 leading-relaxed mb-4">
            情報環境を構築し、記憶の制度を整え、公共空間や統治の仕組みを選び、その結果としてどのような人間の主体が生まれるかを左右していく。カードを出すことは、単なる戦力の投入ではない。社会の条件を書き換え、自己の成立条件そのものを動かす行為である。
          </p>
          <p className="font-noto-sans text-sm text-shiro/60 leading-relaxed">
            システムが人間の行動を統治するだけでなく、人間が「自己」であることの形成過程そのものに参加し始めたとき、何が起きるのか &mdash; この問いがゲームの中心にある。
          </p>
        </div>

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Card System</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-noto-sans text-sm font-medium text-kin/70 mb-1">Philosopher Cards</h4>
              <p className="font-noto-sans text-xs text-shiro/50 leading-relaxed">
                フーコー、アーレント、ロールズ、バトラー、シモンドン、スティグレール、ボーヴォワール、ホッブズ &mdash; 世界の動作原理を変える理論的レンズとして機能する。
              </p>
            </div>
            <div>
              <h4 className="font-noto-sans text-sm font-medium text-kin/70 mb-1">Concept Cards</h4>
              <p className="font-noto-sans text-xs text-shiro/50 leading-relaxed">
                自律、承認、規律、ケア、主権、正統性、ナラティヴ・アイデンティティ、集合的記憶、不可視性、民主的主体性。
              </p>
            </div>
            <div>
              <h4 className="font-noto-sans text-sm font-medium text-kin/70 mb-1">Institution Cards</h4>
              <p className="font-noto-sans text-xs text-shiro/50 leading-relaxed">
                推薦エンジン、AIチューター、生体認証ID、感情分析、個人AIコンパニオン、記憶アーカイブ、市民レピュテーション・システム、予測統治ダッシュボード。
              </p>
            </div>
            <div>
              <h4 className="font-noto-sans text-sm font-medium text-kin/70 mb-1">Event Cards</h4>
              <p className="font-noto-sans text-xs text-shiro/50 leading-relaxed">
                選挙危機、戦争、情報漏洩、AIスキャンダル、若年層メンタルヘルス危機、プラットフォーム崩壊、憲法改正、大規模な反監視運動。
              </p>
            </div>
            <div>
              <h4 className="font-noto-sans text-sm font-medium text-kin/70 mb-1">Intervention Cards</h4>
              <p className="font-noto-sans text-xs text-shiro/50 leading-relaxed">
                監査、暗号化、熟議、市民集会、データ・ストライキ、スローメディア、人間によるレビュー、カウンターパブリックの形成。
              </p>
            </div>
          </div>
        </div>

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Victory Conditions</h3>
          <p className="font-noto-sans text-sm text-shiro/60 leading-relaxed mb-4">
            HPを削り切れば終わりではない。安定、自由、正統性、革新性、心理的統合性、民主的能力、記憶の多様性といった複数の指標のあいだで緊張関係を管理しなければならない。
          </p>
          <p className="font-noto-sans text-sm text-shiro/60 leading-relaxed">
            &ldquo;勝利&rdquo;とは、単に最強の盤面を作ることではなく、どのような社会を作り、その結果としてどのような人間を生み出したのかという評価そのものになる。
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {['Philosophy', 'Card Game', 'AI Governance', 'Subjectivity', 'Social Design', 'Foucault', 'Arendt', 'Stiegler', 'Memory', 'Near-Future'].map(tag => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Technical Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'].map(tech => (
              <span key={tech} className="font-noto-sans text-sm text-shiro/60 text-center py-2 border border-shiro/[0.05] rounded-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
