import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import PhotoFrame from '@/components/PhotoFrame';
import Tag from '@/components/Tag';

export default function FukushimaProjectPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <Link href="/projects" className="font-noto-sans text-xs text-kin/50 hover:text-kin-light transition-colors tracking-wide mb-8 inline-block">
        ← Back to Projects
      </Link>

      <SectionHeader kanji="業" english="Fukushima Field Research" subtitle="2019–2024" />

      <div className="mt-8 space-y-8">
        <PhotoFrame
          src="/images/fukushima.jpg"
          alt="Fukushima field research"
          width={800}
          height={400}
          className="w-full h-64 md:h-80"
        />

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Overview</h3>
          <p className="font-noto-sans text-sm text-shiro/60 leading-relaxed mb-4">
            Multi-site fieldwork conducted across the Futaba and Namie districts of Fukushima Prefecture between 2019 and 2024. The research examines post-disaster governance, focusing on the persistent gap between official recovery policy and the lived experience of displaced communities.
          </p>
          <p className="font-noto-sans text-sm text-shiro/60 leading-relaxed">
            Over six years of engagement, the fieldwork has involved interviews with evacuees, municipal mayors, town leaders, officials from the Ministry of Economy, Trade and Industry (METI), and representatives of TEPCO. It traces the evolving dynamics of trust, transparency, and institutional accountability under conditions of prolonged displacement and uncertain information.
          </p>
        </div>

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Research Outputs — 成果</h3>
          <p className="font-noto-sans text-sm text-shiro/60 leading-relaxed mb-6">
            Key findings and analytical frameworks developed through six years of fieldwork, stakeholder engagement, and cross-sector dialogue in Fukushima Prefecture.
          </p>
          <div className="space-y-6">
            {[
              { n: 1, title: 'The Accident & What It Left Behind', description: 'Timeline of the March 11, 2011 disaster and the lasting consequences — 154,000 evacuated, decades of decontamination, fractured governance, and community stigma.' },
              { n: 2, title: 'Stakeholder Mapping', description: 'Comprehensive mapping of actors across government, TEPCO & industry, new energy developers, and civil society — each with a different definition of "recovery."' },
              { n: 3, title: 'Competing Stakes & Conflict Lines', description: 'Analysis of opposing interests: fisheries co-ops split on offshore wind, METI vs. town mayors on scale vs. livelihoods, and the trust gap between government and communities.' },
              { n: 4, title: 'Research Independence & Access', description: 'Methodological framework for building trusted access across all stakeholder groups — adapting language from mechanical to emotional to policy depending on the audience.' },
              { n: 5, title: 'From First Visit to Published Research', description: 'Design-thinking process from empathise to test & iterate: field immersion, problem reframing, cross-sector dialogue prototypes, and feedback loops with stakeholders.' },
            ].map(({ n, title, description }) => (
              <div key={n} className="space-y-3">
                <PhotoFrame
                  src={`/images/fukushima%20DT%20slide%20(${n}).jpg`}
                  alt={title}
                  width={960}
                  height={540}
                  className="w-full h-auto aspect-video"
                />
                <div>
                  <h4 className="font-noto-sans text-sm font-medium text-kin-light">{title}</h4>
                  <p className="font-noto-sans text-xs text-shiro/50 leading-relaxed mt-1">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {['Futaba', 'Namie', 'Post-Disaster Governance', 'Trust', 'Recovery', 'METI', 'TEPCO', 'Evacuees', 'Policy-Recovery Gap'].map(tag => (
            <Tag key={tag} label={tag} />
          ))}
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
            <PhotoFrame
              src="/images/peace-2.jpg"
              alt="Fukushima fieldwork photo"
              width={400}
              height={300}
              className="w-full h-40 md:h-48"
            />
          </div>
        </div>

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Key Activities</h3>
          <div className="space-y-3">
            {[
              'Multi-site field research in Futaba and Namie districts',
              'Interviews with evacuees, mayors, town leaders, METI officials, and TEPCO representatives',
              'Documentation of the policy-recovery gap and its effects on trust and transparency',
              'Organised an 11-person study tour to affected areas',
              'Six years of continuous engagement with affected communities and institutional actors',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-shu/30 mt-0.5">—</span>
                <p className="font-noto-sans text-sm text-shiro/60">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
