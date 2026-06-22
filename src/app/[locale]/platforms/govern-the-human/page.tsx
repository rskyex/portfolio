import { Link } from '@/i18n/navigation';
import SectionHeader from '@/components/SectionHeader';
import PhotoFrame from '@/components/PhotoFrame';
import Tag from '@/components/Tag';

const subProjects = [
  {
    title: 'Narrative Drift',
    description:
      'An interactive simulation that lets users experience how AI systems can slowly reshape the way they choose, remember, and understand themselves. The user keeps making their own choices, but the conditions of those choices quietly change over time.',
    tags: ['AI Influence', 'Choice Architecture', 'Identity Simulation', 'Epistemic Drift'],
  },
  {
    title: 'SelfTrace',
    description:
      'A reflective platform that helps users see how social media algorithms may shape what they post, repeat, remember, and gradually experience as their online self. Focuses on identity, self-presentation, and the long-term effects of platform incentives rather than simple engagement metrics.',
    tags: ['Algorithmic Identity', 'Self-Presentation', 'Platform Incentives', 'Digital Reflection'],
  },
  {
    title: 'Ontological Governance Observatory',
    description:
      'A research platform that shows how current AI governance frameworks miss a deeper problem: AI does not only create risks and outputs, but can also reshape the human subject itself. Maps these changes across epistemic, ontological, and political layers to argue for a new form of second-order governance.',
    tags: ['AI Governance', 'Ontological Risk', 'Second-Order Governance', 'Epistemic Restructuring'],
  },
];

export default function GovernTheHumanPlatformPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <Link href="/platforms" className="font-noto-sans text-xs text-kin/50 hover:text-kin-light transition-colors tracking-wide mb-8 inline-block">
        &larr; Back to Ongoing Projects
      </Link>

      <SectionHeader kanji="台" english="Govern the Human" subtitle="AI, Identity, and Second-Order Governance" />

      <div className="mt-8 space-y-8">
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 text-xs font-noto-sans bg-shu/10 text-shu-light border border-shu/20 rounded-sm">
            Live
          </span>
          <a
            href="https://govern-the-human.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-noto-sans text-sm text-kin-light hover:text-kin-pale transition-colors"
          >
            Visit platform &rarr;
          </a>
        </div>

        <PhotoFrame
          src="/images/govern the human og.png"
          alt="Govern the Human"
          width={800}
          height={450}
          className="w-full aspect-[1200/630]"
        />

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Overview</h3>
          <p className="font-noto-sans text-sm text-shiro/90 leading-relaxed mb-4">
            Govern the Human is a unified platform that consolidates Narrative Drift, SelfTrace, and Ontological Governance Observatory into a single analytical environment. It explores how AI systems reshape human choice, identity, and self-understanding &mdash; and argues that current governance frameworks miss a deeper problem: AI can reshape the human subject itself.
          </p>
          <p className="font-noto-sans text-sm text-shiro/90 leading-relaxed">
            The platform maps these changes across epistemic, ontological, and political layers, combining interactive simulation with research-driven analysis to argue for a new form of second-order governance.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {['AI Governance', 'Ontological Risk', 'Epistemic Drift', 'Choice Architecture', 'Identity Simulation', 'Algorithmic Identity', 'Second-Order Governance'].map(tag => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        {/* Sub-projects: Narrative Drift, SelfTrace, Ontological Governance Observatory */}
        {subProjects.map((project) => (
          <div key={project.title} className="panel rounded-sm p-8 space-y-4">
            <h3 className="font-noto-sans text-base font-medium text-shiro/90">{project.title}</h3>
            <p className="font-noto-sans text-sm text-shiro/90 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <Tag key={tag} label={tag} />
              ))}
            </div>
          </div>
        ))}

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Technical Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Next.js', 'React', 'TypeScript', 'D3.js', 'Tailwind CSS', 'Vercel'].map(tech => (
              <span key={tech} className="font-noto-sans text-sm text-shiro/90 text-center py-2 border border-shiro/[0.05] rounded-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
