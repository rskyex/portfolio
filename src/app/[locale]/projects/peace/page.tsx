import { Link } from '@/i18n/navigation';
import SectionHeader from '@/components/SectionHeader';
import PhotoFrame from '@/components/PhotoFrame';
import Tag from '@/components/Tag';

export default function PeaceProjectPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <Link href="/projects" className="font-noto-sans text-xs text-kin/50 hover:text-kin-light transition-colors tracking-wide mb-8 inline-block">
        ← Back to Archived Projects
      </Link>

      <SectionHeader kanji="業" english="Peacebuilding Laboratory" subtitle="President" />

      <div className="mt-8 space-y-8">
        <PhotoFrame
          src="/images/peacebuilding.jpg"
          alt="Peacebuilding seminar"
          width={800}
          height={400}
          className="w-full h-64 md:h-80"
        />

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Overview</h3>
          <p className="font-noto-sans text-sm text-shiro/90 leading-relaxed mb-4">
            A research community and discussion platform within Sophia University&apos;s Professor Daisaku Higashi Peacebuilding and International Cooperation Laboratory. As President, Risa Koyanagi led discussions on global conflict resolution and diplomacy, facilitating seminars where students analysed peacebuilding strategies with a particular focus on conflict mediation in Ukraine, Afghanistan, Iraq, and South Sudan.
          </p>
          <p className="font-noto-sans text-sm text-shiro/90 leading-relaxed mb-4">
            As part of her leadership, she organised a dialogue with Ukrainian students, fostering firsthand perspectives and deeper discussions on the Ukraine war. She also designed promotional materials to enhance engagement and outreach. Through this role, she aimed to deepen understanding of international peace efforts while connecting students with experts in the field.
          </p>
          <p className="font-noto-sans text-sm text-shiro/90 leading-relaxed">
            The laboratory provided an intellectually serious setting for sustained dialogue between students, researchers, and policy practitioners.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {['Peacebuilding', 'Dialogue', 'Ukraine', 'Afghanistan', 'Iraq', 'South Sudan', 'Reconciliation', 'Policy Engagement', 'Sophia University'].map(tag => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        {/* Promotional Poster */}
        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Promotional Poster</h3>
          <PhotoFrame
            src="/images/peace-poster.jpg"
            alt="平和構築/国際協力研究会 promotional poster"
            width={600}
            height={850}
            className="w-full max-w-md mx-auto"
          />
        </div>

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Activities</h3>
          <ul className="space-y-2">
            {[
              'Led discussions on global conflict resolution and diplomacy',
              'Facilitated seminars analysing peacebuilding strategies across Ukraine, Afghanistan, Iraq, and South Sudan',
              'Organised dialogue with Ukrainian students for firsthand perspectives on the war',
              'Designed promotional materials to enhance engagement and outreach',
              'Connected students with experts in international peace efforts',
              'Engagement with policy practitioners and academic researchers',
            ].map((item, i) => (
              <li key={i} className="font-noto-sans text-sm text-shiro/90 leading-relaxed flex items-start gap-2">
                <span className="text-shu/30 mt-1">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
