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
        <p className="font-noto-sans text-sm text-shiro/60 leading-relaxed max-w-2xl">
          Selected policy engagement, roundtable participation, youth representation, and dialogue contribution across international forums and parliamentary settings.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <SpeakingCard
          title="TICAD Ministerial Meeting"
          context="Speaker as a representative of Japanese students at the Tokyo International Conference on African Development."
          type="Policy Engagement"
          description="Spoke about the importance of nuclear disarmament and proposed a study tour for both African and Japanese students to visit Hiroshima and Fukushima to learn firsthand about the impacts of nuclear energy and the ongoing recovery efforts. The proposal aimed at fostering a deeper understanding of nuclear issues through education and cultural exchange."
          image="/images/speaking-ticad.jpg"
        />

        <SpeakingCard
          title="Japan–Netherlands Peace Exchange"
          context="War reconciliation speech for Dutch WW2 survivors from Indonesia, as a representative of Japanese Youth at Ministry of Foreign Affairs of Japan."
          type="Dialogue Contribution"
          description="Delivered a speech in Dutch about living in the Netherlands during the 2011 earthquake and how it led to confronting cultural identity and historical tensions between the two countries. Experiencing both support and suspicion, she began exploring the differing perspectives each country holds regarding its wartime past. Though initially caught between identities, she now sees it as a strength to help build genuine understanding between the two nations."
          image="/images/speaking-peace-exchange.jpg"
        />

        <SpeakingCard
          title="Africa–Japan Youth Drive: Co-Creation of the Future We Want"
          context="Youth-oriented policy and development forum."
          type="Youth Representation"
          description="Participation in a youth-focused policy forum addressing Africa–Japan co-creation, development cooperation, and future-oriented agenda setting."
          image="/images/speaking-youth-drive.jpg"
        />

        <SpeakingCard
          title="Roundtable and Friends of Education"
          context="Hosted by GPE and the World Bank at the Japanese House of Councillors."
          type="Roundtable Participation"
          description="Engagement in a high-level roundtable on education policy hosted by the Global Partnership for Education and the World Bank, convened at the Japanese House of Councillors."
          image="/images/speaking-roundtable.JPG"
        />
      </div>
    </div>
  );
}
