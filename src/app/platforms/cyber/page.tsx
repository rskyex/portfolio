import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import PhotoFrame from '@/components/PhotoFrame';
import Gallery from '@/components/Gallery';
import Tag from '@/components/Tag';

export default function CyberPlatformPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <Link href="/platforms" className="font-noto-sans text-xs text-kin/50 hover:text-kin-light transition-colors tracking-wide mb-8 inline-block">
        ← Back to Platforms
      </Link>

      <SectionHeader kanji="台" english="Cyber Escalation Atlas" />

      <div className="mt-8 space-y-8">
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 text-xs font-noto-sans bg-tsubaki-rose/6 text-tsubaki-blush/70 border border-tsubaki-rose/12 rounded-sm">
            In Production
          </span>
        </div>

        <PhotoFrame
          src="/images/peacebuilding.jpg"
          alt="Cyber Escalation Atlas — strategic and governance research"
          width={800}
          height={450}
          className="w-full h-64 md:h-80"
        />

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Overview</h3>
          <p className="font-noto-sans text-sm text-shiro/60 leading-relaxed mb-4">
            The Cyber Escalation Atlas maps cyber incidents as expressions of strategic behaviour and governance signals, rather than treating them purely as technical events. It provides structured analytical context for understanding cyber operations within the broader landscape of international security and escalation dynamics.
          </p>
          <p className="font-noto-sans text-sm text-shiro/60 leading-relaxed mb-4">
            The platform engages with Lucas Kello&apos;s concept of &ldquo;unpeace&rdquo; — a condition between war and peace characterised by persistent cyber contestation — as well as attribution frameworks, Thomas Schelling&apos;s escalation logic, and the analytical categories established by the Tallinn Manual 2.0.
          </p>
          <p className="font-noto-sans text-sm text-shiro/60 leading-relaxed">
            It is designed to support analysis of how cyber incidents function as governance signals and to contextualise them within strategic frameworks of deterrence, escalation, and institutional response.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {['Cyber Incidents', 'Strategic Behaviour', 'Kello', 'Unpeace', 'Attribution', 'Schelling', 'Tallinn Manual 2.0', 'Escalation', 'Governance Signals'].map(tag => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        <div className="panel rounded-sm p-8">
          <Gallery
            title="Platform Preview"
            images={[
              { src: '/images/peacebuilding.jpg', alt: 'Cyber Escalation Atlas overview', caption: 'Strategic and governance research' },
            ]}
          />
        </div>

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Planned Technical Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Next.js', 'React', 'TypeScript', 'D3.js', 'Tailwind CSS', 'Python', 'Vercel'].map(tech => (
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
