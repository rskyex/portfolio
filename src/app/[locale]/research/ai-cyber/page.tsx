import { Link } from '@/i18n/navigation';
import SectionHeader from '@/components/SectionHeader';
import Tag from '@/components/Tag';

export default function AICyberResearchPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <Link href="/research" className="font-noto-sans text-xs text-kin/50 hover:text-kin-light transition-colors tracking-wide mb-8 inline-block">
        ← Back to Research
      </Link>

      <SectionHeader kanji="論" english="Responsible Behaviour as an Unfinished Norm" />

      <div className="mt-4 mb-8">
        <span className="px-2.5 py-0.5 text-xs font-noto-sans rounded border bg-shiro/[0.03] text-shiro/75 border-shiro/[0.06] tracking-wider">
          In Progress
        </span>
      </div>

      <div className="space-y-8">
        <div className="panel p-8 relative overflow-hidden">
          <div className="glow-bar absolute left-0 top-0 bottom-0" />
          <div className="pl-4">
            <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Overview</h3>
            <p className="font-noto-sans text-sm text-shiro/90 leading-relaxed mb-4">
              This research investigates how &ldquo;responsible behaviour&rdquo; functions as an unfinished norm across space, AI, and cyber governance domains. Rather than treating responsible behaviour as a settled concept, it examines the governance gaps, ambiguities, and strategic dynamics that prevent its codification into operational frameworks.
            </p>
            <p className="font-noto-sans text-sm text-shiro/90 leading-relaxed">
              The paper traces three dynamics — denial, displacement, and inoculation — in AI governance discourse, exploring how states and institutions invoke responsibility language while structurally deferring substantive governance commitments. It connects these patterns to broader questions of dual-use ambiguity, norm codification, and the architecture of emerging technology governance.
            </p>
          </div>
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

        <div className="panel p-8 relative overflow-hidden">
          <div className="glow-bar absolute left-0 top-0 bottom-0" />
          <div className="pl-4">
            <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Key Questions</h3>
            <ul className="space-y-2">
              {[
                'How does "responsible behaviour" function as a governance concept across different technology domains?',
                'What dynamics of denial, displacement, and inoculation shape norm codification in AI governance?',
                'How does dual-use ambiguity complicate the construction of responsible behaviour frameworks?',
                'What structural features of emerging technology governance enable or constrain norm development?',
                'How do cross-domain comparisons (space, AI, cyber) illuminate patterns in governance architecture?',
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
