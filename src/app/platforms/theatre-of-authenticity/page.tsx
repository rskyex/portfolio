import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
import SectionHeader from '@/components/SectionHeader';
import PhotoFrame from '@/components/PhotoFrame';
import Tag from '@/components/Tag';

export const metadata = pageMetadata({
  title: 'Theatre of Authenticity',
  description:
    'An experiential site that questions authenticity itself — visualising how far the motives behind our actions have been externalised.',
  path: '/platforms/theatre-of-authenticity',
  image: '/images/theatre-of-authenticity.png',
});

export default function TheatreOfAuthenticityPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <Link href="/platforms/mythera" className="font-noto-sans text-xs text-kin/50 hover:text-kin-light transition-colors tracking-wide mb-8 inline-block">
        &larr; Back to MYTHERA
      </Link>

      <SectionHeader kanji="真" english="Theatre of Authenticity" />

      <div className="mt-8 space-y-8">
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 text-xs font-noto-sans bg-kin/10 text-kin-light border border-kin/20 rounded-sm">
            In Progress
          </span>
        </div>

        <PhotoFrame
          src="/images/theatre-of-authenticity.png"
          alt="Theatre of Authenticity"
          width={800}
          height={450}
          className="w-full aspect-[1200/630]"
        />

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Overview</h3>
          <p className="font-noto-sans text-sm text-shiro/90 leading-relaxed mb-4">
            An experiential site that questions the very notion of authenticity. Are you truly acting from inner necessity, or are you constructing your self on the assumption of being observed? How far can the idea of a &ldquo;true self&rdquo; actually hold?
          </p>
          <p className="font-noto-sans text-sm text-shiro/90 leading-relaxed mb-4">
            Users make a series of choices, but partway through, external forces begin to intervene &mdash; the gaze of others, audiences, recording devices, praise, and backlash. Ultimately, the degree to which the motives behind one&rsquo;s actions have been externalised is made visible.
          </p>
          <p className="font-noto-sans text-sm text-shiro/90 leading-relaxed">
            Spanning Mishima, Kierkegaard, Nietzsche, Sartre, and Bataille, it explores the interplay of authenticity, performance, beauty, death, and transcendence.
          </p>
        </div>

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Core Questions</h3>
          <ul className="space-y-3">
            <li className="font-noto-sans text-sm text-shiro/90 leading-relaxed flex items-start gap-2">
              <span className="text-kin/40 mt-1 shrink-0">&mdash;</span>
              Are you truly acting from inner necessity?
            </li>
            <li className="font-noto-sans text-sm text-shiro/90 leading-relaxed flex items-start gap-2">
              <span className="text-kin/40 mt-1 shrink-0">&mdash;</span>
              Are you constructing your self on the premise of being watched?
            </li>
            <li className="font-noto-sans text-sm text-shiro/90 leading-relaxed flex items-start gap-2">
              <span className="text-kin/40 mt-1 shrink-0">&mdash;</span>
              How far can the idea of an &ldquo;authentic self&rdquo; actually hold?
            </li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-2">
          {['Authenticity', 'Performance', 'Selfhood', 'Existentialism', 'Mishima', 'Kierkegaard', 'Nietzsche', 'Sartre', 'Bataille'].map(tag => (
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
