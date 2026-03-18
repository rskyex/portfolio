import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import PhotoFrame from '@/components/PhotoFrame';
import Tag from '@/components/Tag';

export default function PeaceProjectPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <Link href="/projects" className="font-noto-sans text-xs text-gold/50 hover:text-gold transition-colors tracking-wide mb-8 inline-block">
        ← Back to Projects
      </Link>

      <SectionHeader kanji="業" english="Peacebuilding Laboratory" subtitle="President" />

      <div className="mt-8 space-y-8">
        <PhotoFrame
          src="https://drive.google.com/uc?export=view&id=1C0kYJN5j0kDSqiUmk5Di-QQHfDwGiCHL"
          alt="Peacebuilding seminar"
          width={800}
          height={400}
          className="w-full h-64 md:h-80"
        />

        <div className="bg-parchment/95 rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-ink mb-4">Overview</h3>
          <p className="font-noto-sans text-sm text-warm-brown leading-relaxed mb-4">
            A research community and discussion platform within Sophia University&apos;s Professor Sakuo Tojo Peacebuilding and International Cooperation Laboratory. As President, Risa Koyanagi led the organisation of dialogue-based seminars focused on contemporary conflict and reconciliation processes.
          </p>
          <p className="font-noto-sans text-sm text-warm-brown leading-relaxed">
            Seminars addressed conflict dynamics in Ukraine, Afghanistan, Iraq, and Sudan, engaging with policy, reconciliation, and the structural dimensions of peacebuilding. The laboratory provided an intellectually serious setting for sustained dialogue between students, researchers, and policy practitioners.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {['Peacebuilding', 'Dialogue', 'Ukraine', 'Afghanistan', 'Iraq', 'Sudan', 'Reconciliation', 'Policy Engagement', 'Sophia University'].map(tag => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        <div className="bg-parchment/95 rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-ink mb-4">Activities</h3>
          <ul className="space-y-2">
            {[
              'Dialogue-based seminars on contemporary conflict and reconciliation',
              'Policy and reconciliation engagement across multiple conflict contexts',
              'Student-led research community with intellectual rigour',
              'Engagement with policy practitioners and academic researchers',
            ].map((item, i) => (
              <li key={i} className="font-noto-sans text-sm text-warm-brown leading-relaxed flex items-start gap-2">
                <span className="text-vermillion/40 mt-1">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
