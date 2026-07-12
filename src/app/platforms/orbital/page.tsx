import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
import SectionHeader from '@/components/SectionHeader';
import PhotoFrame from '@/components/PhotoFrame';
import Tag from '@/components/Tag';


export const metadata = pageMetadata({
  title: 'Orbital Risk Tracker',
  description:
    'ASAT events, proximity operations, and escalation analysis in orbital space.',
  path: '/platforms/orbital',
  image: '/images/orbital-platform.jpg',
});

export default function OrbitalPlatformPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <Link href="/platforms" className="font-noto-sans text-xs text-kin/50 hover:text-kin-light transition-colors tracking-wide mb-8 inline-block">
        &larr; Back to Platforms
      </Link>

      <SectionHeader kanji="台" english="Orbital Risk Tracker" />

      <div className="mt-8 space-y-8">
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 text-xs font-noto-sans bg-shu/8 text-shu-light/70 border border-shu/15 shadow-[0_0_8px_rgba(224,60,49,0.06)] rounded-sm">
            Live
          </span>
          <a
            href="https://orbitalrisktracker.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="font-noto-sans text-sm text-kin-light hover:text-kin-pale transition-colors"
          >
            Visit platform &rarr;
          </a>
        </div>

        <PhotoFrame
          src="/images/orbital-platform.jpg"
          alt="Orbital Risk Tracker — visualisation of ASAT events and proximity operations"
          width={800}
          height={450}
          className="w-full aspect-[1200/630]"
        />

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Overview</h3>
          <p className="font-noto-sans text-sm text-shiro/90 leading-relaxed mb-4">
            The Orbital Risk Tracker monitors and visualises anti-satellite (ASAT) events, proximity operations, GNSS jamming incidents, and emergent cyber-space entanglement across orbital infrastructure. It provides a structured analytical framework for understanding escalation dynamics in the space domain.
          </p>
          <p className="font-noto-sans text-sm text-shiro/90 leading-relaxed">
            The platform draws on Robert Jervis&apos;s security dilemma framework and theories of weaponised interdependence to contextualise orbital risk behaviour within broader strategic analysis. It is designed to support researchers, policy analysts, and students working on space security, arms control, and governance architecture.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {['ASAT Events', 'Proximity Operations', 'GNSS Jamming', 'Cyber-Space Entanglement', 'Jervis', 'Weaponised Interdependence', 'Escalation Analysis', 'Space Security'].map(tag => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Technical Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Next.js', 'React', 'TypeScript', 'D3.js', 'Leaflet', 'Tailwind CSS', 'Recharts', 'Vercel'].map(tech => (
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
