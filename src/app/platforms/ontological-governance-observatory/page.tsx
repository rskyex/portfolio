import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import PhotoFrame from '@/components/PhotoFrame';
import Tag from '@/components/Tag';

export default function OntologicalGovernanceObservatoryPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <Link href="/platforms" className="font-noto-sans text-xs text-kin/50 hover:text-kin-light transition-colors tracking-wide mb-8 inline-block">
        &larr; Back to Platforms
      </Link>

      <SectionHeader kanji="台" english="Ontological Governance Observatory" />

      <div className="mt-8 space-y-8">
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 text-xs font-noto-sans bg-kin/10 text-kin-light border border-kin/20 rounded-sm">
            In Progress
          </span>
        </div>

        <PhotoFrame
          src="/images/ogo-og.png"
          alt="Ontological Governance Observatory"
          width={800}
          height={450}
          className="w-full h-64 md:h-80"
        />

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Overview</h3>
          <p className="font-noto-sans text-sm text-shiro/60 leading-relaxed mb-4">
            A research platform that shows how current AI governance frameworks miss a deeper problem: AI does not only create risks and outputs, but can also reshape the human subject itself. Maps these changes across epistemic, ontological, and political layers to argue for a new form of second-order governance.
          </p>
          <p className="font-noto-sans text-sm text-shiro/60 leading-relaxed">
            The Ontological Governance Observatory is part of the Govern the Human project, which explores how AI reshapes human choice, identity, and self-understanding.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {['AI Governance', 'Ontological Risk', 'Second-Order Governance', 'Epistemic Restructuring'].map(tag => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

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
