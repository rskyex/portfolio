import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import PhotoFrame from '@/components/PhotoFrame';
import Tag from '@/components/Tag';

export const metadata = {
  title: 'Second Self',
  description: 'An online philosophical card game exploring AI, memory, governance, and the formation of subjectivity — what happens when systems begin shaping how humans become selves',
  openGraph: {
    title: 'Second Self',
    description: 'An online philosophical card game exploring AI, memory, governance, and the formation of subjectivity — what happens when systems begin shaping how humans become selves',
    images: [{ url: '/images/secondself_og.png', width: 1200, height: 630, alt: 'Second Self' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Second Self',
    description: 'An online philosophical card game exploring AI, memory, governance, and the formation of subjectivity — what happens when systems begin shaping how humans become selves',
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
            An online philosophical card game themed around AI, memory, governance, and the formation of subjectivity. Set in a near future where algorithmic systems have permeated the deep layers of society, players do not simply defeat opponents &mdash; they design a society.
          </p>
          <p className="font-noto-sans text-sm text-shiro/60 leading-relaxed mb-4">
            Players construct information environments, establish institutions of memory, choose public spaces and governance structures, and in doing so determine what kind of human subjects emerge. Playing a card is not merely deploying force &mdash; it is an act of rewriting the conditions of society and shifting the very terms on which selfhood is constituted.
          </p>
          <p className="font-noto-sans text-sm text-shiro/60 leading-relaxed">
            At the heart of the game lies this question: what happens when systems no longer merely govern human behaviour, but begin participating in the very process by which humans become selves?
          </p>
        </div>

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Card System</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-noto-sans text-sm font-medium text-kin/70 mb-1">Philosopher Cards</h4>
              <p className="font-noto-sans text-xs text-shiro/50 leading-relaxed">
                Foucault, Arendt, Rawls, Butler, Simondon, Stiegler, Beauvoir, Hobbes &mdash; functioning as theoretical lenses that alter the operating principles of the world.
              </p>
            </div>
            <div>
              <h4 className="font-noto-sans text-sm font-medium text-kin/70 mb-1">Concept Cards</h4>
              <p className="font-noto-sans text-xs text-shiro/50 leading-relaxed">
                Autonomy, recognition, discipline, care, sovereignty, legitimacy, narrative identity, collective memory, invisibility, democratic subjectivity.
              </p>
            </div>
            <div>
              <h4 className="font-noto-sans text-sm font-medium text-kin/70 mb-1">Institution Cards</h4>
              <p className="font-noto-sans text-xs text-shiro/50 leading-relaxed">
                Recommendation engines, AI tutors, biometric IDs, sentiment analysis, personal AI companions, memory archives, civic reputation systems, predictive governance dashboards.
              </p>
            </div>
            <div>
              <h4 className="font-noto-sans text-sm font-medium text-kin/70 mb-1">Event Cards</h4>
              <p className="font-noto-sans text-xs text-shiro/50 leading-relaxed">
                Electoral crises, war, data leaks, AI scandals, youth mental health crises, platform collapses, constitutional amendments, large-scale anti-surveillance movements.
              </p>
            </div>
            <div>
              <h4 className="font-noto-sans text-sm font-medium text-kin/70 mb-1">Intervention Cards</h4>
              <p className="font-noto-sans text-xs text-shiro/50 leading-relaxed">
                Audits, encryption, deliberation, civic assemblies, data strikes, slow media, human review, counterpublic formation.
              </p>
            </div>
          </div>
        </div>

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Victory Conditions</h3>
          <p className="font-noto-sans text-sm text-shiro/60 leading-relaxed mb-4">
            Victory is not achieved by depleting an opponent&rsquo;s HP. Players must manage tensions across multiple indicators: stability, freedom, legitimacy, innovation, psychological integration, democratic capacity, and memory diversity.
          </p>
          <p className="font-noto-sans text-sm text-shiro/60 leading-relaxed">
            &ldquo;Winning&rdquo; is not about building the strongest board &mdash; it becomes an evaluation of what kind of society you built and, consequently, what kind of human being it produced.
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
