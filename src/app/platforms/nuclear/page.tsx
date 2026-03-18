import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import Tag from '@/components/Tag';

export default function NuclearPlatformPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <Link href="/platforms" className="font-noto-sans text-xs text-gold/50 hover:text-gold transition-colors tracking-wide mb-8 inline-block">
        ← Back to Platforms
      </Link>

      <SectionHeader kanji="台" english="Global Nuclear Infrastructure Atlas" />

      <div className="mt-8 space-y-8">
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 text-xs font-noto-sans bg-green-800/10 text-green-800/70 border border-green-800/20 rounded-sm">
            Live
          </span>
          <a
            href="https://globalnuclearinfrastructureatlas.vercel.app"
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
            The Global Nuclear Infrastructure Atlas provides an interactive mapping interface for global civilian nuclear power infrastructure, including operational reactors, decommissioned facilities, and major accident sites. It contextualises nuclear infrastructure within estimated arsenal data and radiation and health frameworks.
          </p>
          <p className="font-noto-sans text-sm text-warm-brown leading-relaxed">
            Designed for educational and policy audiences, the platform draws on public data from sources including the International Atomic Energy Agency (IAEA), the Stockholm International Peace Research Institute (SIPRI), and the World Health Organization (WHO). It is intended to support informed public understanding of nuclear infrastructure geography and associated governance challenges.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {['Civilian Nuclear Power', 'Accident Sites', 'Nuclear Arsenals', 'Radiation & Health', 'IAEA', 'SIPRI', 'WHO', 'Policy Education'].map(tag => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        <div className="bg-parchment/95 rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-ink mb-4">Technical Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Next.js', 'React', 'TypeScript', 'Leaflet', 'D3.js', 'Tailwind CSS', 'Recharts', 'Vercel'].map(tech => (
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
