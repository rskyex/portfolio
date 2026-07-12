import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
import SectionHeader from '@/components/SectionHeader';
import PhotoFrame from '@/components/PhotoFrame';
import Tag from '@/components/Tag';


export const metadata = pageMetadata({
  title: 'SelfTrace',
  description:
    'Algorithmic shaping of identity, self-presentation, and online selfhood.',
  path: '/platforms/selftrace',
  image: '/images/selftrace-og.png',
});

export default function SelfTracePlatformPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <Link href="/platforms" className="font-noto-sans text-xs text-kin/50 hover:text-kin-light transition-colors tracking-wide mb-8 inline-block">
        &larr; Back to Platforms
      </Link>

      <SectionHeader kanji="台" english="SelfTrace" />

      <div className="mt-8 space-y-8">
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 text-xs font-noto-sans bg-kin/10 text-kin-light border border-kin/20 rounded-sm">
            Live
          </span>
          <a
            href="https://selftrace.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-noto-sans text-sm text-kin-light hover:text-kin-pale transition-colors"
          >
            Visit platform &rarr;
          </a>
        </div>

        <PhotoFrame
          src="/images/selftrace-og.png"
          alt="SelfTrace"
          width={800}
          height={450}
          className="w-full aspect-[1200/630]"
        />

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Overview</h3>
          <p className="font-noto-sans text-sm text-shiro/90 leading-relaxed mb-4">
            A reflective platform that helps users see how social media algorithms may shape what they post, repeat, remember, and gradually experience as their online self. Focuses on identity, self-presentation, and the long-term effects of platform incentives rather than simple engagement metrics.
          </p>
          <p className="font-noto-sans text-sm text-shiro/90 leading-relaxed">
            SelfTrace is part of the Govern the Human project, which explores how AI reshapes human choice, identity, and self-understanding across epistemic, ontological, and political layers.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {['Algorithmic Identity', 'Self-Presentation', 'Platform Incentives', 'Digital Reflection'].map(tag => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Technical Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'].map(tech => (
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
