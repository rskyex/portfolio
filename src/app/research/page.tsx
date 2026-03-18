import SectionHeader from '@/components/SectionHeader';
import ResearchListItem from '@/components/ResearchListItem';
import SectionDivider from '@/components/SectionDivider';

export default function ResearchPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <SectionHeader
        kanji="論"
        english="Research"
        subtitle="Selected research across governance domains"
      />

      <div className="mt-6 mb-12">
        <p className="font-noto-sans text-sm text-shiro/70 leading-relaxed max-w-2xl">
          Research spanning international security, space governance, nuclear governance, cyber governance, and emerging technology governance, with a conceptual focus on legitimation theory, dual-use governance, authority architecture, and responsible behaviour norms.
        </p>
      </div>

      {/* Working Paper */}
      <div className="mb-10">
        <h3 className="font-noto-sans text-xs text-kin tracking-[0.25em] uppercase mb-4 font-semibold">Working Paper</h3>
        <ResearchListItem
          href="/research/lunar"
          title="Who Speaks for Humanity on the Moon?"
          status="Working Paper"
          themes={['Legitimation audiences', 'Translation devices', 'Authority architecture', 'Artemis vs ILRS', 'Universalist language', 'Participation conditions', 'Boundary-making']}
          description="The conceptual flagship. Examining how competing lunar governance frameworks — the Artemis Accords and the International Lunar Research Station programme — construct legitimation audiences, deploy translation devices, and build authority architecture under universalist language while establishing divergent participation conditions and boundary-making practices."
        />
      </div>

      <SectionDivider />

      {/* In Progress */}
      <div className="mb-10">
        <h3 className="font-noto-sans text-xs text-kin tracking-[0.25em] uppercase mb-4 font-semibold">In Progress</h3>
        <div className="space-y-4">
          <ResearchListItem
            href="/research/ai-cyber"
            title="Responsible Behaviour as an Unfinished Norm"
            status="In Progress"
            themes={['Governance gaps', 'Denial', 'Displacement', 'Inoculation', 'Dual-use ambiguity', 'Norm codification', 'Emerging technology governance']}
            description="Investigating how 'responsible behaviour' functions as an unfinished norm across space, AI, and cyber governance — examining denial, displacement, and inoculation dynamics in governance discourse around dual-use technologies."
          />
          <ResearchListItem
            href="/research/fukushima"
            title="Post-Disaster Governance and the Trust Gap"
            status="In Progress"
            themes={['Post-disaster governance', 'Trust', 'Recovery', 'Policy gaps', 'State-society relations', 'Long-term fieldwork']}
            description="Drawing on six years of fieldwork in Fukushima, this research examines the governance of post-disaster recovery — focusing on trust, transparency, policy gaps, and the evolving relationship between state institutions and affected communities."
          />
        </div>
      </div>

      <SectionDivider />

      {/* Conference / Development */}
      <div className="mb-10">
        <h3 className="font-noto-sans text-xs text-kin tracking-[0.25em] uppercase mb-4 font-semibold">Conference & Development</h3>
        <div className="space-y-4">
          <div className="card-washi card-washi-research p-6 relative overflow-hidden">
            <div className="glow-bar absolute left-0 top-0 bottom-0" />
            <div className="pl-4">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h4 className="font-noto-serif text-base font-semibold text-kuro-soft italic">
                  Dual-Use Governance and the Ambiguity Problem
                </h4>
                <span className="shrink-0 px-2.5 py-0.5 text-xs font-noto-sans font-medium rounded border bg-tsubaki-rose/10 text-tsubaki-deep border-tsubaki-rose/20 tracking-wider">
                  Conference Abstract
                </span>
              </div>
              <p className="font-noto-sans text-sm text-kuro-soft/65 leading-relaxed">
                Exploring how dual-use ambiguity shapes governance frameworks across nuclear, space, and cyber domains — examining the structural difficulties of regulating technologies with simultaneous civilian and military applications.
              </p>
            </div>
          </div>

          <div className="card-washi card-washi-research p-6 relative overflow-hidden">
            <div className="glow-bar absolute left-0 top-0 bottom-0" />
            <div className="pl-4">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h4 className="font-noto-serif text-base font-semibold text-kuro-soft italic">
                  Authority Architecture in Emerging Technology Governance
                </h4>
                <span className="shrink-0 px-2.5 py-0.5 text-xs font-noto-sans font-medium rounded border bg-kuro/[0.04] text-kuro-soft/60 border-kuro-soft/10 tracking-wider">
                  In Progress
                </span>
              </div>
              <p className="font-noto-sans text-sm text-kuro-soft/65 leading-relaxed">
                Developing a framework for understanding how authority is constructed, distributed, and contested across emerging technology governance — with attention to legitimation processes, institutional design, and the role of technical expertise.
              </p>
            </div>
          </div>
        </div>
      </div>

      <SectionDivider />

      <div className="text-center">
        <p className="font-noto-sans text-xs text-shiro/45 tracking-wider">
          Additional papers and conference work in development.
        </p>
      </div>
    </div>
  );
}
