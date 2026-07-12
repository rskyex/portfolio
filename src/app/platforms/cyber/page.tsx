import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
import SectionHeader from '@/components/SectionHeader';
import Tag from '@/components/Tag';


export const metadata = pageMetadata({
  title: 'Cyber Escalation Atlas',
  description:
    'Mapping a 36-incident corpus of cyber events as strategic behaviour, attribution frameworks, and governance signals.',
  path: '/platforms/cyber',
  image: '/images/cyber-platform.png',
});

export default function CyberPlatformPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <Link href="/platforms" className="font-noto-sans text-xs text-kin/50 hover:text-kin-light transition-colors tracking-wide mb-8 inline-block">
        &larr; Back to Platforms
      </Link>

      <SectionHeader kanji="台" english="Cyber Escalation Atlas" />

      <div className="mt-8 space-y-8">
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 text-xs font-noto-sans bg-shu/8 text-shu-light/70 border border-shu/15 shadow-[0_0_8px_rgba(224,60,49,0.06)] rounded-sm">
            Live
          </span>
          <a
            href="https://cyber-escalation-atlas-5yp5.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="font-noto-sans text-sm text-kin-light hover:text-kin-pale transition-colors"
          >
            Visit platform &rarr;
          </a>
        </div>

        <div className="w-full h-64 md:h-80 border border-shiro/[0.08] rounded-sm overflow-hidden">
          <iframe
            src="https://cyber-escalation-atlas-5yp5.vercel.app"
            className="w-full h-full"
            title="Cyber Escalation Atlas"
          />
        </div>

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Overview</h3>
          <p className="font-noto-sans text-sm text-shiro/90 leading-relaxed mb-4">
            The Cyber Escalation Atlas maps cyber incidents as expressions of strategic behaviour and governance signals, rather than treating them purely as technical events. It provides structured analytical context for understanding cyber operations within the broader landscape of international security and escalation dynamics.
          </p>
          <p className="font-noto-sans text-sm text-shiro/90 leading-relaxed mb-4">
            The platform engages with Lucas Kello&apos;s concept of &ldquo;unpeace&rdquo; &mdash; a condition between war and peace characterised by persistent cyber contestation &mdash; as well as attribution frameworks, Thomas Schelling&apos;s escalation logic, and the analytical categories established by the Tallinn Manual 2.0.
          </p>
          <p className="font-noto-sans text-sm text-shiro/90 leading-relaxed">
            It is designed to support analysis of how cyber incidents function as governance signals and to contextualise them within strategic frameworks of deterrence, escalation, and institutional response.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {['Cyber Incidents', 'Strategic Behaviour', 'Kello', 'Unpeace', 'Attribution', 'Schelling', 'Tallinn Manual 2.0', 'Escalation', 'Governance Signals'].map(tag => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Technical Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Next.js', 'React', 'TypeScript', 'D3.js', 'Tailwind CSS', 'Python', 'Vercel'].map(tech => (
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
