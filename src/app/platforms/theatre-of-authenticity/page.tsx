import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import PhotoFrame from '@/components/PhotoFrame';
import Tag from '@/components/Tag';

export const metadata = {
  title: 'Theatre of Authenticity',
  description: '"真正性"そのものを疑う体験型サイト — 行為の動機がどれほど外部化されていたかを可視化する',
  openGraph: {
    title: 'Theatre of Authenticity',
    description: '"真正性"そのものを疑う体験型サイト — 行為の動機がどれほど外部化されていたかを可視化する',
    images: [{ url: '/images/Theatre%20of%20Authenticity.png', width: 1200, height: 630, alt: 'Theatre of Authenticity' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Theatre of Authenticity',
    description: '"真正性"そのものを疑う体験型サイト — 行為の動機がどれほど外部化されていたかを可視化する',
    images: ['/images/Theatre%20of%20Authenticity.png'],
  },
};

export default function TheatreOfAuthenticityPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <Link href="/platforms/mythera" className="font-noto-sans text-xs text-kin/50 hover:text-kin-light transition-colors tracking-wide mb-8 inline-block">
        &larr; Back to MYTHERA
      </Link>

      <SectionHeader kanji="真" english="Theatre of Authenticity" />

      <div className="mt-8 space-y-8">
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 text-xs font-noto-sans bg-kin/10 text-kin-light border border-kin/20 rounded-sm">
            In Progress
          </span>
        </div>

        <PhotoFrame
          src="/images/Theatre of Authenticity.png"
          alt="Theatre of Authenticity"
          width={800}
          height={450}
          className="w-full h-64 md:h-80"
        />

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Overview</h3>
          <p className="font-noto-sans text-sm text-shiro/60 leading-relaxed mb-4">
            &ldquo;真正性&rdquo;そのものを疑う体験型サイト。本当に内的必然から行為しているのか、それとも他者に見られることを前提に自己を構成しているのか、「本物の自分」という言葉はどこまで可能か &mdash; を問う。
          </p>
          <p className="font-noto-sans text-sm text-shiro/60 leading-relaxed mb-4">
            ユーザーは一連の選択をするが、途中から「他者の視線」「観客」「記録装置」「賞賛」「反発」が介入してくる。最終的に、行為の動機がどれほど外部化されていたかが可視化される。
          </p>
          <p className="font-noto-sans text-sm text-shiro/60 leading-relaxed">
            三島、キルケゴール、ニーチェ、サルトル、バタイユをまたいで、真正性・演技・美・死・超越の相互作用を扱う。
          </p>
        </div>

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Core Questions</h3>
          <ul className="space-y-3">
            <li className="font-noto-sans text-sm text-shiro/60 leading-relaxed flex items-start gap-2">
              <span className="text-kin/40 mt-1 shrink-0">&mdash;</span>
              本当に内的必然から行為しているのか
            </li>
            <li className="font-noto-sans text-sm text-shiro/60 leading-relaxed flex items-start gap-2">
              <span className="text-kin/40 mt-1 shrink-0">&mdash;</span>
              他者に見られることを前提に自己を構成しているのか
            </li>
            <li className="font-noto-sans text-sm text-shiro/60 leading-relaxed flex items-start gap-2">
              <span className="text-kin/40 mt-1 shrink-0">&mdash;</span>
              「本物の自分」という言葉はどこまで可能か
            </li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-2">
          {['Authenticity', 'Performance', 'Selfhood', 'Existentialism', 'Mishima', 'Kierkegaard', 'Nietzsche', 'Sartre', 'Bataille'].map(tag => (
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
