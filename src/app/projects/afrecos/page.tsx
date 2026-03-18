import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import PhotoFrame from '@/components/PhotoFrame';
import Gallery from '@/components/Gallery';
import Tag from '@/components/Tag';

export default function AfrecosProjectPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <Link href="/projects" className="font-noto-sans text-xs text-kin/50 hover:text-kin-light transition-colors tracking-wide mb-8 inline-block">
        ← Back to Projects
      </Link>

      <SectionHeader kanji="業" english="AFRECOS" subtitle="Co-Founder & President · 2024" />

      <div className="mt-8 space-y-8">
        <PhotoFrame
          src="/images/afrecos.jpg"
          alt="AFRECOS event"
          width={800}
          height={400}
          className="w-full h-64 md:h-80"
        />

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Overview</h3>
          <p className="font-noto-sans text-sm text-shiro/60 leading-relaxed mb-4">
            AFRECOS is a 10+ country network founded to bridge African and Japanese cultural and policy communities. As Co-Founder and President, Risa Koyanagi built the organisation from the ground up, coordinating cultural exchanges, policy events, and public engagement activities across a diverse international membership.
          </p>
          <p className="font-noto-sans text-sm text-shiro/60 leading-relaxed">
            Key achievements include organising events with around 70–80 attendees and convening a policy talk at the Japanese House of Councillors with approximately 50 stakeholders from government, civil society, and the diplomatic community.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {['Africa–Japan Relations', 'Cultural Exchange', 'Policy Engagement', 'House of Councillors', 'International Network', 'Stakeholder Coordination'].map(tag => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Key Facts</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { value: '10+', label: 'Countries represented' },
              { value: '~80', label: 'Event attendees' },
              { value: '~50', label: 'Policy stakeholders' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-kaisei text-2xl text-kin/50">{stat.value}</div>
                <div className="font-noto-sans text-xs text-shiro/38 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="panel rounded-sm p-8">
          <Gallery
            title="Gallery"
            images={[
              { src: '/images/afrecos.jpg', alt: 'AFRECOS event', caption: 'AFRECOS cultural exchange event' },
              { src: '/images/mofa-korea.jpg', alt: 'Policy engagement', caption: 'Policy engagement session' },
              { src: '/images/peacebuilding.jpg', alt: 'Community dialogue', caption: 'Community dialogue and networking' },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
