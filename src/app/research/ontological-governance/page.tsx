import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import Tag from '@/components/Tag';

export default function OntologicalGovernancePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <Link href="/research" className="font-noto-sans text-xs text-kin/50 hover:text-kin-light transition-colors tracking-wide mb-8 inline-block">
        ← Back to Research
      </Link>

      <SectionHeader kanji="論" english="Ontological Governance" />

      <div className="mt-4 mb-8">
        <span className="px-2.5 py-0.5 text-xs font-noto-sans rounded border bg-tsubaki-rose/10 text-tsubaki-deep border-tsubaki-rose/20 tracking-wider">
          Conference Abstract
        </span>
      </div>

      <div className="space-y-8">
        <div className="panel p-8 relative overflow-hidden">
          <div className="glow-bar absolute left-0 top-0 bottom-0" />
          <div className="pl-4">
            <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Overview</h3>
            <p className="font-noto-sans text-sm text-shiro/90 leading-relaxed mb-4">
              Current AI governance frameworks — including the EU AI Act and emerging multilateral instruments — share a common architecture: identify the technology, assess its harms, and build rules accordingly. The human subject at the centre of these calculations is treated as a stable given. This assumption is no longer tenable.
            </p>
            <p className="font-noto-sans text-sm text-shiro/90 leading-relaxed mb-4">
              AI systems now intervene across three cumulative layers of human existence. Epistemologically, they shape what people can know: algorithmic curation constructs information environments in ways that awareness alone cannot undo. Ontologically, they intervene in who people are: recommendation systems and personalised environments reshape the narrative materials through which individuals constitute their own identity and memory over time. Politically, they erode the conditions of genuine self-governance: the subjects who participate in democratic deliberation are increasingly constituted by the systems that governance is supposed to oversee.
            </p>
            <p className="font-noto-sans text-sm text-shiro/90 leading-relaxed">
              Drawing on theories of narrative identity and the technics of memory, this presentation introduces ontological governance: a second-order analytical layer that asks not only what AI systems do, but what they do to the knowing, existing, and self-governing human beings whose dignity and agency governance exists to protect. Without this layer, current frameworks risk protecting a version of the human that the technology is already in the process of reshaping.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {[
            'AI Governance', 'Ontological Governance', 'Narrative Identity',
            'Epistemology', 'Democratic Deliberation', 'EU AI Act',
            'Algorithmic Curation', 'Self-Governance', 'Technics of Memory',
            'Second-Order Governance'
          ].map(tag => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        <div className="panel p-8 relative overflow-hidden">
          <div className="glow-bar absolute left-0 top-0 bottom-0" />
          <div className="pl-4">
            <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Key Questions</h3>
            <ul className="space-y-2">
              {[
                'How do AI systems reshape the epistemic, ontological, and political conditions of the human subjects that governance frameworks presuppose?',
                'What happens when the human subject at the centre of rights-based governance is no longer stable?',
                'How do recommendation systems and algorithmic curation intervene in narrative identity and memory?',
                'What does a second-order governance framework look like — one that governs not only AI systems but their effects on the subjects of governance itself?',
                'Why do current frameworks like the EU AI Act fail to account for the ontological dimension of AI intervention?',
              ].map((q, i) => (
                <li key={i} className="font-noto-sans text-sm text-shiro/90 leading-relaxed flex items-start gap-2">
                  <span className="text-shu/30 mt-1">—</span>
                  {q}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
