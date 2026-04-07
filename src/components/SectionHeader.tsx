interface SectionHeaderProps {
  kanji?: string;
  english: string;
  subtitle?: string;
  id?: string;
}

export default function SectionHeader({ english, subtitle, id }: SectionHeaderProps) {
  const sectionId = id || `section-${english.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div
      id={sectionId}
      className="relative overflow-hidden"
    >
      <div className="panel p-8 md:p-10 relative">
        {/* Neon top accent */}
        <div className="absolute top-0 left-0 w-24 h-[1px] bg-gradient-to-r from-tsubaki-rose/50 to-transparent shadow-[0_0_8px_rgba(233,30,99,0.2)]" />
        <div className="absolute top-0 right-0 w-16 h-[1px] bg-gradient-to-l from-kin/30 to-transparent shadow-[0_0_6px_rgba(212,160,23,0.15)]" />

        {/* Bottom glow line */}
        <div className="absolute bottom-0 left-0 right-0 glow-line-tsubaki" />

        <div>
          <h2 className="font-cormorant text-lg md:text-xl font-semibold text-shiro tracking-[0.15em] uppercase drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]">
            {english}
          </h2>
          {subtitle && (
            <p className="font-inter text-xs text-shiro/80 mt-1.5 tracking-wider">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
