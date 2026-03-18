import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import Tag from '@/components/Tag';

export default function OrbitalPlatformPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <Link href="/platforms" className="font-noto-sans text-xs text-gold/50 hover:text-gold transition-colors tracking-wide mb-8 inline-block">
        ← Back to Platforms
      </Link>

      <SectionHeader kanji="台" english="Orbital Risk Tracker" />

      <div className="mt-8 space-y-8">
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 text-xs font-noto-sans bg-green-800/10 text-green-800/70 border border-green-800/20 rounded-sm">
            Live
          </span>
          <a
            href="https://orbitalrisktracker.vercel.app"
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
            The Orbital Risk Tracker monitors and visualises anti-satellite (ASAT) events, proximity operations, GNSS jamming incidents, and emergent cyber-space entanglement across orbital infrastructure. It provides a structured analytical framework for understanding escalation dynamics in the space domain.
          </p>
          <p className="font-noto-sans text-sm text-warm-brown leading-relaxed">
            The platform draws on Robert Jervis&apos;s security dilemma framework and theories of weaponised interdependence to contextualise orbital risk behaviour within broader strategic analysis. It is designed to support researchers, policy analysts, and students working on space security, arms control, and governance architecture.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {['ASAT Events', 'Proximity Operations', 'GNSS Jamming', 'Cyber-Space Entanglement', 'Jervis', 'Weaponised Interdependence', 'Escalation Analysis', 'Space Security'].map(tag => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        <div className="bg-parchment/95 rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-ink mb-4">Technical Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Next.js', 'React', 'TypeScript', 'D3.js', 'Leaflet', 'Tailwind CSS', 'Recharts', 'Vercel'].map(tech => (
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
