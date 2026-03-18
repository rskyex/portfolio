export default function SectionDivider() {
  return (
    <div className="py-8 flex items-center justify-center gap-3">
      <div className="h-px w-12 bg-gradient-to-r from-transparent to-vermillion/40" />
      <span className="font-kaisei text-sm text-vermillion/15 select-none">菱</span>
      <div className="h-px w-8 bg-gradient-to-r from-gold/30 to-gold/0" />
      <span className="font-kaisei text-xs text-gold/10 select-none">◆</span>
      <div className="h-px w-8 bg-gradient-to-l from-gold/30 to-gold/0" />
      <span className="font-kaisei text-sm text-vermillion/15 select-none">菱</span>
      <div className="h-px w-12 bg-gradient-to-l from-transparent to-vermillion/40" />
    </div>
  );
}
