import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import PhotoFrame from '@/components/PhotoFrame';
import Tag from '@/components/Tag';

export default function FukushimaProjectPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <Link href="/projects" className="font-noto-sans text-xs text-gold/50 hover:text-gold transition-colors tracking-wide mb-8 inline-block">
        ← Back to Projects
      </Link>

      <SectionHeader kanji="業" english="Fukushima Field Research" subtitle="2019–2024" />

      <div className="mt-8 space-y-8">
        <PhotoFrame
          src="https://drive.google.com/uc?export=view&id=1dlIbcK0hz1onSm6uy_ZyXAuuUWG8OvVy"
          alt="Fukushima field research"
          width={800}
          height={400}
          className="w-full h-64 md:h-80"
        />

        <div className="bg-parchment/95 rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-ink mb-4">Overview</h3>
          <p className="font-noto-sans text-sm text-warm-brown leading-relaxed mb-4">
            Multi-site fieldwork conducted across the Futaba and Namie districts of Fukushima Prefecture between 2019 and 2024. The research examines post-disaster governance, focusing on the persistent gap between official recovery policy and the lived experience of displaced communities.
          </p>
          <p className="font-noto-sans text-sm text-warm-brown leading-relaxed">
            Over six years of engagement, the fieldwork has involved interviews with evacuees, municipal mayors, town leaders, officials from the Ministry of Economy, Trade and Industry (METI), and representatives of TEPCO. It traces the evolving dynamics of trust, transparency, and institutional accountability under conditions of prolonged displacement and uncertain information.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {['Futaba', 'Namie', 'Post-Disaster Governance', 'Trust', 'Recovery', 'METI', 'TEPCO', 'Evacuees', 'Policy-Recovery Gap'].map(tag => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        <div className="bg-parchment/95 rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-ink mb-4">Key Activities</h3>
          <div className="space-y-3">
            {[
              'Multi-site field research in Futaba and Namie districts',
              'Interviews with evacuees, mayors, town leaders, METI officials, and TEPCO representatives',
              'Documentation of the policy-recovery gap and its effects on trust and transparency',
              'Organised an 11-person study tour to affected areas',
              'Six years of continuous engagement with affected communities and institutional actors',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-vermillion/40 mt-0.5">—</span>
                <p className="font-noto-sans text-sm text-warm-brown">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
