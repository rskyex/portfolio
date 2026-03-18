import SectionHeader from '@/components/SectionHeader';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
      <SectionHeader
        kanji="業"
        english="Projects"
        subtitle="Fieldwork, leadership, and interdisciplinary engagement"
      />

      <div className="mt-6 mb-12">
        <p className="font-noto-sans text-sm text-shiro/60 leading-relaxed max-w-2xl">
          Leadership, fieldwork, institution-building, and interdisciplinary engagement across research, policy, cultural, and artistic domains.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <ProjectCard
          href="/projects/fukushima"
          title="Fukushima Field Research"
          description="Multi-site fieldwork in Futaba and Namie districts examining post-disaster governance, trust, and the policy-recovery gap. Includes interviews with evacuees, mayors, town leaders, METI, and TEPCO officials."
          image="/images/fukushima.jpg"
          imageAlt="Fukushima field research"
          period="2019–2024"
        />

        <ProjectCard
          href="/projects/afrecos"
          title="AFRECOS"
          description="Co-founded a 10+ country network for cultural and policy events bridging Africa and Japan. Organised events with around 70–80 attendees and a House of Councillors policy talk with approximately 50 stakeholders."
          image="/images/afrecos.jpg"
          imageAlt="AFRECOS event"
          period="2024"
          role="Co-Founder & President"
        />

        <ProjectCard
          href="/projects/peace"
          title="Peacebuilding Laboratory"
          description="Research community and discussion platform within Sophia University's Professor Daisaku Higashi Peacebuilding and International Cooperation Laboratory. Dialogue-based seminars on Ukraine, Afghanistan, Iraq, and South Sudan."
          image="/images/mofa-korea.jpg"
          imageAlt="Peacebuilding seminar"
          role="President"
        />

        <ProjectCard
          href="/projects/art"
          title="Art Practice"
          description="Interdisciplinary art practice spanning visual thinking, international exhibition, and conceptual work that intersects with broader research on governance, identity, and technology."
          image="/images/art.JPG"
          imageAlt="Art practice"
        />
      </div>
    </div>
  );
}
