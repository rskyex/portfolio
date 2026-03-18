import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import PhotoFrame from '@/components/PhotoFrame';

export default function ArtProjectPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <Link href="/projects" className="font-noto-sans text-xs text-kin/50 hover:text-kin-light transition-colors tracking-wide mb-8 inline-block">
        ← Back to Projects
      </Link>

      <SectionHeader kanji="業" english="Art Practice" subtitle="Visual thinking and interdisciplinary work" />

      <div className="mt-8 space-y-8">
        <PhotoFrame
          src="/images/art.jpg"
          alt="Art practice"
          width={800}
          height={500}
          className="w-full h-72 md:h-96"
        />

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Overview</h3>
          <p className="font-noto-sans text-sm text-shiro/40 leading-relaxed mb-4">
            An interdisciplinary art practice that connects visual thinking with broader research interests in governance, identity, and technology. The work engages with questions of representation, materiality, and conceptual framing that parallel and inform the research agenda.
          </p>
          <p className="font-noto-sans text-sm text-shiro/40 leading-relaxed">
            The practice spans visual art, conceptual work, and exhibition, with an international exhibition history that reflects the same cross-cultural and cross-disciplinary orientation as the broader portfolio. Art functions here not as a separate domain, but as an alternative mode of thinking about the same structural questions — authority, legitimacy, representation, and the architecture of meaning.
          </p>
        </div>

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Themes</h3>
          <ul className="space-y-2">
            {[
              'Visual thinking as a research methodology',
              'Representation, materiality, and governance',
              'Cross-cultural and interdisciplinary practice',
              'International exhibition and conceptual work',
              'The architecture of meaning and authority',
            ].map((theme, i) => (
              <li key={i} className="font-noto-sans text-sm text-shiro/40 leading-relaxed flex items-start gap-2">
                <span className="text-kin/50 mt-1">—</span>
                {theme}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
