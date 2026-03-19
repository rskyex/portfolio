import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import PhotoFrame from '@/components/PhotoFrame';
import Tag from '@/components/Tag';

export default function FukushimaResearchPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <Link href="/research" className="font-noto-sans text-xs text-kin/50 hover:text-kin-light transition-colors tracking-wide mb-8 inline-block">
        ← Back to Research
      </Link>

      <SectionHeader kanji="論" english="Post-Disaster Governance and the Trust Gap" />

      <div className="mt-4 mb-8">
        <span className="px-2 py-0.5 text-xs font-noto-sans rounded-sm border bg-shiro/[0.03] text-shiro/45 border-shiro/[0.06]">
          In Progress
        </span>
      </div>

      <div className="space-y-8">
        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Overview</h3>
          <p className="font-noto-sans text-sm text-shiro/60 leading-relaxed mb-4">
            This research draws on six years of fieldwork in the Fukushima region to examine the governance of post-disaster recovery. It focuses on the persistent gap between official policy frameworks and the lived experience of affected communities — particularly around questions of trust, transparency, and long-term institutional accountability.
          </p>
          <p className="font-noto-sans text-sm text-shiro/60 leading-relaxed">
            Through interviews with evacuees, municipal leaders, and officials from METI and TEPCO, the research traces how state-society relations evolve under the pressure of prolonged displacement, uncertain information, and contested recovery narratives. It contributes to broader debates on disaster governance, institutional legitimacy, and the politics of recovery.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {[
            'Post-Disaster Governance', 'Trust', 'Recovery', 'Policy Gaps',
            'State-Society Relations', 'Transparency', 'Institutional Legitimacy',
            'Fukushima', 'Long-Term Fieldwork'
          ].map(tag => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Fieldwork</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="font-kaisei text-lg text-kin/50">一</span>
              <p className="font-noto-sans text-sm text-shiro/60">Multi-site fieldwork across Futaba and Namie districts (2019–2024)</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-kaisei text-lg text-kin/50">二</span>
              <p className="font-noto-sans text-sm text-shiro/60">Interviews with evacuees, mayors, town leaders, METI officials, and TEPCO representatives</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-kaisei text-lg text-kin/50">三</span>
              <p className="font-noto-sans text-sm text-shiro/60">Organised 11-person study tour to affected areas</p>
            </div>
          </div>
        </div>

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Key Themes</h3>
          <ul className="space-y-2">
            {[
              'The policy-recovery gap and its consequences for affected communities',
              'Trust and transparency in post-disaster state-society relations',
              'Long-term displacement and the politics of return',
              'Institutional accountability under conditions of uncertainty',
              'The role of local governance actors in mediating recovery processes',
            ].map((theme, i) => (
              <li key={i} className="font-noto-sans text-sm text-shiro/60 leading-relaxed flex items-start gap-2">
                <span className="text-shu/30 mt-1">—</span>
                {theme}
              </li>
            ))}
          </ul>
        </div>

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Research Output</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3, 4, 5].map((n) => (
              <div key={n} className={n === 5 ? 'md:col-span-2' : ''}>
                <PhotoFrame
                  src={`/images/fukushima-slide-${n}.jpg`}
                  alt={`Fukushima research output slide ${n}`}
                  width={800}
                  height={600}
                  className="w-full h-56 md:h-64"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-6">Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { n: 1, ext: 'jpg' },
              { n: 2, ext: 'jpg' },
              { n: 3, ext: 'JPG' },
              { n: 4, ext: 'jpg' },
              { n: 5, ext: 'jpg' },
              { n: 6, ext: 'jpg' },
              { n: 7, ext: 'jpg' },
              { n: 8, ext: 'jpg' },
              { n: 10, ext: 'jpg' },
            ].map(({ n, ext }) => (
              <PhotoFrame
                key={n}
                src={`/images/fukushima-${n}.${ext}`}
                alt={`Fukushima fieldwork photo ${n}`}
                width={400}
                height={300}
                className="w-full h-40 md:h-48"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
