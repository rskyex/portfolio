export default function SectionDivider() {
  return (
    <div className="py-8 flex items-center justify-center gap-4">
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-vermillion/30" />
      <span className="font-kaisei text-xs text-vermillion/20 select-none">◆</span>
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/30" />
    </div>
  );
}
