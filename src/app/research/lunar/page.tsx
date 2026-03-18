import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import Tag from '@/components/Tag';

export default function LunarResearchPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <Link href="/research" className="font-noto-sans text-xs text-gold/50 hover:text-gold transition-colors tracking-wide mb-8 inline-block">
        ← Back to Research
      </Link>

      <SectionHeader kanji="論" english="Who Speaks for Humanity on the Moon?" />

      <div className="mt-4 mb-8">
        <span className="px-2 py-0.5 text-xs font-noto-sans rounded-sm border bg-orange-700/10 text-orange-700/70 border-orange-700/20">
          Working Paper
        </span>
      </div>

      <div className="space-y-8">
        <div className="bg-parchment/95 rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-ink mb-4">Abstract</h3>
          <p className="font-noto-sans text-sm text-warm-brown leading-relaxed mb-4">
            This paper examines how competing lunar governance frameworks construct their authority and claim legitimacy on behalf of humanity. Through a comparative analysis of the Artemis Accords and the International Lunar Research Station (ILRS) programme, it investigates the legitimation audiences, translation devices, and authority architectures that underpin each framework.
          </p>
          <p className="font-noto-sans text-sm text-warm-brown leading-relaxed mb-4">
            Both frameworks deploy universalist language — speaking &ldquo;for humanity,&rdquo; &ldquo;for all humankind,&rdquo; or &ldquo;for peaceful purposes&rdquo; — while establishing divergent participation conditions, governance norms, and boundary-making practices. The paper argues that these universalist claims function as legitimation devices that simultaneously include and exclude, and that the construction of legitimate authority in lunar governance is an ongoing, contested process rather than a settled institutional achievement.
          </p>
          <p className="font-noto-sans text-sm text-warm-brown leading-relaxed">
            Drawing on a 24-document coded corpus and conceptual tools from legitimation theory, the research traces how each framework translates broad principles into specific governance architectures — and how these architectures, in turn, shape the boundaries of permissible action on the Moon.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {[
            'Legitimation Audiences', 'Translation Devices', 'Authority Architecture',
            'Artemis Accords', 'ILRS', 'Universalist Language', 'Participation Conditions',
            'Boundary-Making', 'Lunar Governance', 'Space Governance'
          ].map(tag => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        <div className="bg-parchment/95 rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-ink mb-4">Methodology</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="font-kaisei text-lg text-gold/40">一</span>
              <p className="font-noto-sans text-sm text-warm-brown">Qualitative document analysis of 24 primary source documents</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-kaisei text-lg text-gold/40">二</span>
              <p className="font-noto-sans text-sm text-warm-brown">Custom codebook design focused on legitimation markers, authority claims, and boundary-making language</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-kaisei text-lg text-gold/40">三</span>
              <p className="font-noto-sans text-sm text-warm-brown">Comparative framework analysis across Artemis and ILRS governance architectures</p>
            </div>
          </div>
        </div>

        <div className="bg-parchment/95 rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-ink mb-4">Key Themes</h3>
          <ul className="space-y-2">
            {[
              'How universalist language functions as a legitimation device in competing governance frameworks',
              'The role of translation devices in converting broad principles into operational governance norms',
              'Authority architecture as a structural feature of lunar governance regimes',
              'Participation conditions and their implications for inclusivity, access, and sovereignty',
              'Boundary-making practices that define permissible action in the lunar domain',
            ].map((theme, i) => (
              <li key={i} className="font-noto-sans text-sm text-warm-brown leading-relaxed flex items-start gap-2">
                <span className="text-vermillion/40 mt-1">—</span>
                {theme}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
