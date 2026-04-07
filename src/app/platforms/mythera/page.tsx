import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import PhotoFrame from '@/components/PhotoFrame';
import Tag from '@/components/Tag';
import Image from 'next/image';

const subProjects = [
  {
    title: 'Scoreless',
    description:
      "A music analysis platform that makes classical music's structure, logic, and meaning accessible without requiring score literacy. Instead of describing works as simply 'beautiful' or 'sad,' it visualises thematic repetition, tension and release, formal development, and the intellectual and aesthetic implications that emerge \u2014 through timelines, motif displays, and commentary cards. Focused on public domain classical works, it treats music not as a matter of taste but as structured thought unfolding in time.",
    tags: ['Classical Music', 'Structural Analysis', 'Motif Tracking', 'Music Theory', 'Public Domain'],
  },
  {
    title: 'Theatre of Authenticity',
    description:
      '「真正性」そのものを疑う体験型サイト。ユーザーは一連の選択をするが、途中から「他者の視線」「観客」「記録装置」「賞賛」「反発」が介入してくる。最終的に、行為の動機がどれほど外部化されていたかが可視化される。三島、キルケゴール、ニーチェ、サルトル、バタイユをまたいで、真正性・演技・美・死・超越の相互作用を扱う。',
    tags: ['Authenticity', 'Performance', 'Selfhood', 'Existentialism', 'Mishima', 'Kierkegaard'],
    image: '/images/Theatre of Authenticity.png',
    href: '/platforms/theatre-of-authenticity',
  },
  {
    title: 'Second Self',
    description:
      'AI、記憶、統治、そして自己形成をテーマにしたオンライン哲学カードゲーム。アルゴリズム的システムが社会の深層に浸透した近未来を舞台に、プレイヤーは社会を設計し、その結果としてどのような人間の主体が生まれるかを左右していく。カードを出すことは社会の条件を書き換え、自己の成立条件そのものを動かす行為である。',
    tags: ['Philosophy', 'Card Game', 'AI Governance', 'Subjectivity', 'Social Design'],
    image: '/images/secondself_og.png',
    href: '/platforms/second-self',
  },
];

export default function MytheraPlatformPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <Link href="/platforms" className="font-noto-sans text-xs text-kin/50 hover:text-kin-light transition-colors tracking-wide mb-8 inline-block">
        &larr; Back to Ongoing Projects
      </Link>

      <SectionHeader kanji="台" english="MYTHERA" subtitle="Interpretive Studio" />

      <div className="mt-8 space-y-8">
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 text-xs font-noto-sans bg-kin/10 text-kin-light border border-kin/20 rounded-sm">
            Live
          </span>
          <a
            href="https://mythera.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-noto-sans text-xs text-kin/60 hover:text-kin-light transition-colors tracking-wide"
          >
            mythera.vercel.app &rarr;
          </a>
        </div>

        <PhotoFrame
          src="/images/mythera og.png"
          alt="MYTHERA"
          width={800}
          height={450}
          className="w-full h-64 md:h-80"
        />

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Overview</h3>
          <p className="font-noto-sans text-sm text-shiro/60 leading-relaxed mb-4">
            MYTHERA is an interpretive studio and conceptual world for exploring invisible structures across selfhood, systems, literature, performance, and aesthetic form. It treats culture not as content to be consumed but as territory to be mapped &mdash; building navigable worlds from the patterns that shape how we read, perform, and become.
          </p>
          <p className="font-noto-sans text-sm text-shiro/60 leading-relaxed">
            Each world within MYTHERA isolates a different axis of meaning &mdash; from the architecture of personal identity to the legibility of aesthetic experience &mdash; and renders it explorable through interpretive frameworks, visual structure, and rigorous inquiry.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {['Interpretive Worlds', 'Selfhood', 'Literature & Performance', 'Aesthetic Legibility'].map(tag => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        {/* Sub-projects */}
        {subProjects.map((project) => {
          const content = (
            <div className={`panel rounded-sm p-8 space-y-4${project.href ? ' group hover:border-kin/20 transition-colors' : ''}`}>
              {project.image && (
                <div className="relative w-full h-40 overflow-hidden rounded-sm -mt-2 mb-2">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  />
                </div>
              )}
              <h3 className="font-noto-sans text-base font-medium text-shiro/90">{project.title}</h3>
              <p className="font-noto-sans text-sm text-shiro/60 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>
            </div>
          );
          return project.href ? (
            <Link key={project.title} href={project.href} className="block">
              {content}
            </Link>
          ) : (
            <div key={project.title}>{content}</div>
          );
        })}

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Technical Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Next.js', 'React', 'TypeScript', 'D3.js', 'Tailwind CSS', 'Vercel'].map(tech => (
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
