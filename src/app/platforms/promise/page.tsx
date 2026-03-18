import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import Tag from '@/components/Tag';

export default function PromisePlatformPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <Link href="/platforms" className="font-noto-sans text-xs text-gold/50 hover:text-gold transition-colors tracking-wide mb-8 inline-block">
        ← Back to Platforms
      </Link>

      <SectionHeader kanji="台" english="Japan Promise Tracker" />

      <div className="mt-8 space-y-8">
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 text-xs font-noto-sans bg-vermillion/10 text-vermillion/80 border border-vermillion/25 rounded-sm">
            Live
          </span>
          <a
            href="https://jp-ver-japan-promise-tracker.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="font-noto-sans text-sm text-gold hover:text-gold-pale transition-colors"
          >
            Visit platform →
          </a>
        </div>

        <div className="bg-parchment/95 rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-ink mb-4">Overview</h3>
          <p className="font-noto-sans text-sm text-warm-brown leading-relaxed mb-4">
            The Japan Promise Tracker monitors and tracks Japanese government policy commitments across governance domains. It provides a structured framework for following the lifecycle of government promises — from announcement through implementation to fulfilment or abandonment.
          </p>
          <p className="font-noto-sans text-sm text-warm-brown leading-relaxed">
            Designed to support public accountability, civic engagement, and policy analysis, the platform makes government commitments transparent and trackable. It contributes to a broader understanding of how governance promises function as instruments of legitimation and political communication.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {['Policy Accountability', 'Government Commitments', 'Japan', 'Civic Engagement', 'Transparency', 'Governance', 'Public Policy'].map(tag => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        <div className="bg-parchment/95 rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-ink mb-4">Technical Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'].map(tech => (
              <span key={tech} className="font-noto-sans text-sm text-warm-brown text-center py-2 border border-indigo-800/10 rounded-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
