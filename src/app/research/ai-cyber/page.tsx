import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import Tag from '@/components/Tag';

export default function AICyberResearchPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <Link href="/research" className="font-noto-sans text-xs text-gold/50 hover:text-gold transition-colors tracking-wide mb-8 inline-block">
        ← Back to Research
      </Link>

      <SectionHeader kanji="論" english="Responsible Behaviour as an Unfinished Norm" />

      <div className="mt-4 mb-8">
        <span className="px-2 py-0.5 text-xs font-noto-sans rounded-sm border bg-gray-600/10 text-gray-600/70 border-gray-600/20">
          In Progress
        </span>
      </div>

      <div className="space-y-8">
        <div className="bg-parchment/95 rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-ink mb-4">Overview</h3>
          <p className="font-noto-sans text-sm text-warm-brown leading-relaxed mb-4">
            This research investigates how &ldquo;responsible behaviour&rdquo; functions as an unfinished norm across space, AI, and cyber governance domains. Rather than treating responsible behaviour as a settled concept, it examines the governance gaps, ambiguities, and strategic dynamics that prevent its codification into operational frameworks.
          </p>
          <p className="font-noto-sans text-sm text-warm-brown leading-relaxed">
            The paper traces three dynamics — denial, displacement, and inoculation — in AI governance discourse, exploring how states and institutions invoke responsibility language while structurally deferring substantive governance commitments. It connects these patterns to broader questions of dual-use ambiguity, norm codification, and the architecture of emerging technology governance.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {[
            'Responsible Behaviour', 'Governance Gaps', 'Denial', 'Displacement',
            'Inoculation', 'Dual-Use Ambiguity', 'Norm Codification',
            'AI Governance', 'Cyber Governance', 'Space Governance',
            'Emerging Technology Governance'
          ].map(tag => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        <div className="bg-parchment/95 rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-ink mb-4">Key Questions</h3>
          <ul className="space-y-2">
            {[
              'How does "responsible behaviour" function as a governance concept across different technology domains?',
              'What dynamics of denial, displacement, and inoculation shape norm codification in AI governance?',
              'How does dual-use ambiguity complicate the construction of responsible behaviour frameworks?',
              'What structural features of emerging technology governance enable or constrain norm development?',
              'How do cross-domain comparisons (space, AI, cyber) illuminate patterns in governance architecture?',
            ].map((q, i) => (
              <li key={i} className="font-noto-sans text-sm text-warm-brown leading-relaxed flex items-start gap-2">
                <span className="text-vermillion/40 mt-1">—</span>
                {q}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
