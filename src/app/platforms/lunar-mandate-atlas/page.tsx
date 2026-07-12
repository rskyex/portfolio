import { pageMetadata } from '@/lib/metadata';
import PlatformDetailPlaceholders from '@/components/PlatformDetailPlaceholders';
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import PhotoFrame from '@/components/PhotoFrame';
import Tag from '@/components/Tag';

export const metadata = pageMetadata({
  title: 'Lunar Mandate Atlas',
  description:
    'Interactive mapping of competing lunar governance frameworks, mandates, and authority architecture across the Artemis Accords and ILRS programme.',
  path: '/platforms/lunar-mandate-atlas',
  image: '/images/LGAT-og.svg',
});

export default function LunarMandateAtlasPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <Link href="/platforms/faultline" className="font-noto-sans text-xs text-kin/50 hover:text-kin-light transition-colors tracking-wide mb-8 inline-block">
        &larr; Back to Faultline
      </Link>

      <SectionHeader kanji="月" english="Lunar Mandate Atlas" subtitle="Competing Governance Claims on the Moon" />

      <div className="mt-8 space-y-8">
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 text-xs font-noto-sans bg-shu/8 text-shu-light/70 border border-shu/15 shadow-[0_0_8px_rgba(224,60,49,0.06)] rounded-sm">
            Live
          </span>
          <a
            href="https://lunar-mandate-atlas.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-noto-sans text-sm text-kin-light hover:text-kin-pale transition-colors"
          >
            Visit platform &rarr;
          </a>
        </div>

        <PhotoFrame
          src="/images/LGAT-og.svg"
          alt="Lunar Mandate Atlas — Competing Governance Claims on the Moon"
          width={800}
          height={450}
          className="w-full aspect-[1200/630]"
        />

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Overview</h3>
          <p className="font-noto-sans text-sm text-shiro/90 leading-relaxed mb-4">
            The Lunar Mandate Atlas is an interactive platform mapping the competing governance frameworks, mandates, and authority architectures that shape the emerging order on the Moon. It compares the Artemis Accords and the International Lunar Research Station (ILRS) programme, tracing how each framework constructs its legitimacy and claims to act on behalf of humanity.
          </p>
          <p className="font-noto-sans text-sm text-shiro/90 leading-relaxed mb-4">
            Both frameworks deploy universalist language &mdash; speaking &ldquo;for humanity,&rdquo; &ldquo;for all humankind,&rdquo; or &ldquo;for peaceful purposes&rdquo; &mdash; while establishing divergent participation conditions, governance norms, and boundary-making practices. The platform visualises how these universalist claims function as legitimation devices that simultaneously include and exclude.
          </p>
          <p className="font-noto-sans text-sm text-shiro/90 leading-relaxed">
            Drawing on legitimation theory, the atlas traces how broad principles are translated into specific governance architectures &mdash; and how these architectures, in turn, shape the boundaries of permissible action on the Moon.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {['Lunar Governance', 'Artemis Accords', 'ILRS', 'Legitimation', 'Authority Architecture', 'Space Governance', 'Mandate Mapping', 'Universalist Language', 'Boundary-Making', 'Participation Conditions'].map(tag => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Key Dimensions</h3>
          <ul className="space-y-2">
            {[
              'Competing legitimation claims and universalist language across Artemis and ILRS frameworks',
              'Translation devices that convert broad principles into operational governance norms',
              'Authority architecture as a structural feature of lunar governance regimes',
              'Participation conditions and their implications for inclusivity, access, and sovereignty',
              'Boundary-making practices that define permissible action in the lunar domain',
            ].map((item, i) => (
              <li key={i} className="font-noto-sans text-sm text-shiro/90 leading-relaxed flex items-start gap-2">
                <span className="text-shu/30 mt-1">&mdash;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Technical Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Next.js', 'React', 'TypeScript', 'D3.js', 'Tailwind CSS', 'Recharts', 'Vercel'].map(tech => (
              <span key={tech} className="font-noto-sans text-sm text-shiro/90 text-center py-2 border border-shiro/[0.05] rounded-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <PlatformDetailPlaceholders />
      </div>
    </div>
  );
}
