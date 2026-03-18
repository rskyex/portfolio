import SectionHeader from '@/components/SectionHeader';
import SpeakingCard from '@/components/SpeakingCard';

export default function SpeakingPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
      <SectionHeader
        kanji="演"
        english="Speaking & Policy Engagement"
        subtitle="Selected speaking and public engagement"
      />

      <div className="mt-6 mb-12">
        <p className="font-noto-sans text-sm text-washi/60 leading-relaxed max-w-2xl">
          Selected policy engagement, roundtable participation, youth representation, and dialogue contribution across international forums and parliamentary settings.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <SpeakingCard
          title="TICAD Ministerial Meeting"
          context="Tokyo International Conference on African Development."
          type="Policy Engagement"
          description="Policy engagement and youth representation at the TICAD Ministerial Meeting, contributing to Africa–Japan development dialogue."
        />

        <SpeakingCard
          title="Japan–Netherlands Peace Exchange"
          context="Bilateral dialogue and peace exchange between Japanese and Dutch participants."
          type="Dialogue Contribution"
          description="Participation in structured bilateral peace exchange focused on shared policy challenges and cultural understanding."
        />

        <SpeakingCard
          title="UN Women Asia & Pacific"
          context="UN Women regional programme."
          type="Programme Contribution"
          description="Contribution to UN Women's Asia and Pacific regional programme, engaging with gender equality and governance in the Asia-Pacific context."
        />

        <SpeakingCard
          title="MOFA Republic of Korea Youth Representative"
          context="Ministry of Foreign Affairs, Republic of Korea."
          type="Youth Representation"
          description="Youth representative role in a Japan–Republic of Korea exchange programme facilitated by the Ministry of Foreign Affairs, contributing to bilateral dialogue and youth policy engagement."
        />

        <SpeakingCard
          title="Africa–Japan Youth Drive: Co-Creation of the Future We Want"
          context="Youth-oriented policy and development forum."
          type="Youth Representation"
          description="Participation in a youth-focused policy forum addressing Africa–Japan co-creation, development cooperation, and future-oriented agenda setting."
        />

        <SpeakingCard
          title="Roundtable and Friends of Education"
          context="Hosted by GPE and the World Bank at the Japanese House of Councillors."
          type="Roundtable Participation"
          description="Engagement in a high-level roundtable on education policy hosted by the Global Partnership for Education and the World Bank, convened at the Japanese House of Councillors."
        />
      </div>
    </div>
  );
}
