import Link from 'next/link';
import Image from 'next/image';

interface SubProject {
  name: string;
  href: string;
}

interface FlagshipCardProps {
  href: string;
  title: string;
  description: string;
  includes: string;
  liveUrl?: string;
  image: string;
  subProjects: SubProject[];
}

export default function FlagshipCard({ href, title, description, includes, image, subProjects }: FlagshipCardProps) {
  return (
    <Link href={href} className="block group">
      <div className="card-washi card-washi-platform card-hover relative overflow-hidden border border-kin/15">
        {/* Double glow bar for flagship emphasis */}
        <div className="glow-bar absolute left-0 top-0 bottom-0 z-10" />
        <div className="absolute left-[3px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-kin/20 via-kin/10 to-transparent z-10" />

        {/* Hero image */}
        {image && (
          <div className="relative w-full h-52 md:h-64 overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
            />
            {/* Flagship label overlay */}
            <div className="absolute top-4 left-4 z-10">
              <span className="px-3 py-1 text-[10px] font-inter font-bold tracking-[0.25em] uppercase bg-kuro/80 backdrop-blur-sm text-kin border border-kin/30 rounded-sm shadow-[0_0_12px_rgba(212,160,23,0.15)]">
                Flagship System
              </span>
            </div>
          </div>
        )}

        <div className="relative pl-4 p-6 md:p-8">
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-cormorant text-xl md:text-2xl font-semibold text-kuro-soft pr-4 group-hover:text-shu-deep transition-colors">
              {title}
            </h3>
            <span className="shrink-0 px-2.5 py-0.5 text-xs font-inter font-medium tracking-wider rounded border bg-shu/10 text-shu-deep border-shu/25 shadow-[0_0_8px_rgba(224,60,49,0.08)]">
              Live
            </span>
          </div>

          <p className="font-inter text-sm text-kuro-soft/70 leading-relaxed mb-3">{description}</p>
          <p className="font-inter text-xs text-kuro-soft/50 leading-relaxed mb-5 italic">{includes}</p>

          {/* Sub-project listing */}
          <div className="border-t border-kuro-soft/8 pt-4 mb-4">
            <p className="font-inter text-[10px] text-kuro-soft/40 tracking-[0.2em] uppercase mb-3 font-semibold">Includes {subProjects.length} projects</p>
            <div className="flex flex-wrap gap-2">
              {subProjects.map(sp => (
                <span key={sp.name} className="text-xs font-inter text-kuro-soft/60 border border-kuro-soft/12 bg-kuro/[0.04] px-2.5 py-1 rounded font-medium">
                  {sp.name}
                </span>
              ))}
            </div>
          </div>

          <span className="font-inter text-xs text-kin-deep/70 group-hover:text-shu tracking-widest transition-colors uppercase font-medium">
            View platform →
          </span>
        </div>
      </div>
    </Link>
  );
}
