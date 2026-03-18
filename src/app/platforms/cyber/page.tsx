import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import Tag from '@/components/Tag';

export default function CyberPlatformPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <Link href="/platforms" className="font-noto-sans text-xs text-gold/50 hover:text-gold transition-colors tracking-wide mb-8 inline-block">
        ← Back to Platforms
      </Link>

      <SectionHeader kanji="台" english="Cyber Escalation Atlas" />

      <div className="mt-8 space-y-8">
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 text-xs font-noto-sans bg-gold/10 text-gold-dark border border-gold/20 rounded-sm">
            In Production
          </span>
        </div>

        <div className="bg-parchment/95 rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-ink mb-4">Overview</h3>
          <p className="font-noto-sans text-sm text-warm-brown leading-relaxed mb-4">
            The Cyber Escalation Atlas maps cyber incidents as expressions of strategic behaviour and governance signals, rather than treating them purely as technical events. It provides structured analytical context for understanding cyber operations within the broader landscape of international security and escalation dynamics.
          </p>
          <p className="font-noto-sans text-sm text-warm-brown leading-relaxed mb-4">
            The platform engages with Lucas Kello&apos;s concept of &ldquo;unpeace&rdquo; — a condition between war and peace characterised by persistent cyber contestation — as well as attribution frameworks, Thomas Schelling&apos;s escalation logic, and the analytical categories established by the Tallinn Manual 2.0.
          </p>
          <p className="font-noto-sans text-sm text-warm-brown leading-relaxed">
            It is designed to support analysis of how cyber incidents function as governance signals and to contextualise them within strategic frameworks of deterrence, escalation, and institutional response.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {['Cyber Incidents', 'Strategic Behaviour', 'Kello', 'Unpeace', 'Attribution', 'Schelling', 'Tallinn Manual 2.0', 'Escalation', 'Governance Signals'].map(tag => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        <div className="bg-parchment/95 rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-ink mb-4">Planned Technical Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Next.js', 'React', 'TypeScript', 'D3.js', 'Tailwind CSS', 'Python', 'Vercel'].map(tech => (
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
