import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
import SectionHeader from '@/components/SectionHeader';
import PhotoFrame from '@/components/PhotoFrame';
import Tag from '@/components/Tag';

const subProjects = [
  {
    title: 'Orbital Risk Tracker',
    description:
      'Tracking anti-satellite events, proximity operations, GNSS jamming incidents, and cyber-space entanglement. Draws on Jervis\u2019s security dilemma framework and weaponised interdependence theory to support escalation analysis across orbital infrastructure.',
    tags: ['ASAT Events', 'Proximity Operations', 'GNSS Jamming', 'Cyber-Space Entanglement', 'Jervis', 'Weaponised Interdependence'],
    image: '/images/orbital-platform.jpg',
    liveUrl: 'https://orbitalrisktracker.vercel.app',
  },
  {
    title: 'Global Nuclear Infrastructure Atlas',
    description:
      'Interactive mapping of global civilian nuclear power infrastructure, major accident sites, estimated nuclear arsenals, and associated radiation and health context. Designed for educational and policy use, drawing on sources including IAEA, SIPRI, and WHO data.',
    tags: ['Civilian Nuclear Power', 'Accident Sites', 'Nuclear Arsenals', 'Radiation & Health', 'IAEA', 'SIPRI', 'WHO'],
    image: '/images/nuclear-platform.jpg',
    liveUrl: 'https://globalnuclearinfrastructureatlas.vercel.app',
  },
  {
    title: 'Cyber Escalation Atlas',
    description:
      'Mapping cyber incidents as expressions of strategic behaviour and governance signals. Engages with Kello\u2019s concept of \u201cunpeace,\u201d attribution frameworks, Schelling\u2019s escalation logic, and the Tallinn Manual 2.0 to contextualise cyber operations within broader strategic analysis.',
    tags: ['Cyber Incidents', 'Strategic Behaviour', 'Kello', 'Attribution', 'Schelling', 'Tallinn Manual 2.0', 'Escalation'],
    image: '/images/cyber-platform.png',
    liveUrl: 'https://cyber-escalation-atlas-5yp5.vercel.app',
  },
  {
    title: 'Lunar Mandate Atlas',
    description:
      'Interactive mapping of competing lunar governance frameworks, mandates, and authority architecture. Compares the Artemis Accords and the International Lunar Research Station (ILRS) programme, tracing how universalist claims function as legitimation devices and how governance architectures shape permissible action on the Moon.',
    tags: ['Lunar Governance', 'Artemis Accords', 'ILRS', 'Legitimation', 'Authority Architecture', 'Space Governance', 'Mandate Mapping'],
    image: '/images/LGAT-og.svg',
    liveUrl: 'https://lunar-mandate-atlas.vercel.app',
  },
];


export const metadata = pageMetadata({
  title: 'Faultline',
  description:
    'A unified strategic infrastructure risk suite consolidating the Orbital Risk Tracker, Global Nuclear Infrastructure Atlas, Cyber Escalation Atlas, and Lunar Mandate Atlas.',
  path: '/platforms/faultline',
  image: '/images/faultline%20og.png',
});

export default function FaultlinePlatformPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <Link href="/platforms" className="font-noto-sans text-xs text-kin/50 hover:text-kin-light transition-colors tracking-wide mb-8 inline-block">
        &larr; Back to Ongoing Projects
      </Link>

      <SectionHeader kanji="台" english="Faultline" subtitle="Strategic Infrastructure Risk Suite" />

      <div className="mt-8 space-y-8">
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 text-xs font-noto-sans bg-shu/8 text-shu-light/70 border border-shu/15 shadow-[0_0_8px_rgba(224,60,49,0.06)] rounded-sm">
            Live
          </span>
          <a
            href="https://faultline-nqmm.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-noto-sans text-sm text-kin-light hover:text-kin-pale transition-colors"
          >
            Visit platform &rarr;
          </a>
        </div>

        <PhotoFrame
          src="/images/faultline og.png"
          alt="Faultline — Strategic Infrastructure Risk Suite"
          width={800}
          height={450}
          className="w-full aspect-[1200/630]"
        />

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Overview</h3>
          <p className="font-noto-sans text-sm text-shiro/90 leading-relaxed mb-4">
            Faultline is a unified strategic infrastructure risk platform that consolidates four domain-specific tools &mdash; Orbital Risk Tracker, Global Nuclear Infrastructure Atlas, Cyber Escalation Atlas, and Lunar Mandate Atlas &mdash; into a single analytical suite.
          </p>
          <p className="font-noto-sans text-sm text-shiro/90 leading-relaxed">
            Each module translates governance theory into operational platforms across orbital, nuclear, cyber, and lunar domains, connecting conceptual frameworks on legitimacy, authority, and escalation with applied policy questions.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {['Space Security', 'Nuclear Governance', 'Cyber Governance', 'Escalation Analysis', 'Strategic Risk', 'Dual-Use Governance', 'Weaponised Interdependence'].map(tag => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        {/* Sub-projects: Orbital, Nuclear, Cyber */}
        {subProjects.map((project) => (
          <div key={project.title} className="panel rounded-sm p-8 space-y-4">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-noto-sans text-base font-medium text-shiro/90">{project.title}</h3>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 font-noto-sans text-xs text-kin-light hover:text-kin-pale transition-colors"
              >
                Visit &rarr;
              </a>
            </div>
            <PhotoFrame
              src={project.image}
              alt={project.title}
              width={800}
              height={450}
              className="w-full aspect-[1200/630]"
            />
            <p className="font-noto-sans text-sm text-shiro/90 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <Tag key={tag} label={tag} />
              ))}
            </div>
          </div>
        ))}

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
