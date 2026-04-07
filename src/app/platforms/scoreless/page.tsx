import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import Tag from '@/components/Tag';

export default function ScorelessPlatformPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <Link href="/platforms" className="font-noto-sans text-xs text-kin/50 hover:text-kin-light transition-colors tracking-wide mb-8 inline-block">
        &larr; Back to Platforms
      </Link>

      <SectionHeader kanji="台" english="Scoreless" />

      <div className="mt-8 space-y-8">
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 text-xs font-noto-sans bg-kin/10 text-kin-light border border-kin/20 rounded-sm">
            In Progress
          </span>
        </div>

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Overview</h3>
          <p className="font-noto-sans text-sm text-shiro/90 leading-relaxed mb-4">
            A music analysis platform that makes classical music&apos;s structure, logic, and meaning accessible without requiring score literacy. Instead of describing works as simply &ldquo;beautiful&rdquo; or &ldquo;sad,&rdquo; it visualises thematic repetition, tension and release, formal development, and the intellectual and aesthetic implications that emerge &mdash; through timelines, motif displays, and commentary cards.
          </p>
          <p className="font-noto-sans text-sm text-shiro/90 leading-relaxed">
            Focused on public domain classical works, it treats music not as a matter of taste but as structured thought unfolding in time. Scoreless is part of the MYTHERA project.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {['Classical Music', 'Structural Analysis', 'Motif Tracking', 'Music Theory', 'Public Domain'].map(tag => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Technical Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Next.js', 'React', 'TypeScript', 'D3.js', 'Tailwind CSS', 'Vercel'].map(tech => (
              <span key={tech} className="font-noto-sans text-sm text-shiro/90 text-center py-2 border border-shiro/[0.05] rounded-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
