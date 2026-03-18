export default function SectionDivider() {
  return (
    <div className="py-10 flex items-center justify-center">
      <div className="relative flex items-center gap-0 w-full max-w-xs">
        {/* Left line */}
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/15" />
        {/* Tsubaki crest center */}
        <div className="mx-4">
          <svg width="24" height="24" viewBox="0 0 24 24" className="opacity-20">
            <ellipse cx="12" cy="6" rx="3" ry="6" fill="none" stroke="#c53d2f" strokeWidth="0.6" transform="rotate(0 12 12)" />
            <ellipse cx="12" cy="6" rx="3" ry="6" fill="none" stroke="#c53d2f" strokeWidth="0.6" transform="rotate(72 12 12)" />
            <ellipse cx="12" cy="6" rx="3" ry="6" fill="none" stroke="#c53d2f" strokeWidth="0.6" transform="rotate(144 12 12)" />
            <ellipse cx="12" cy="6" rx="3" ry="6" fill="none" stroke="#d4918a" strokeWidth="0.5" transform="rotate(216 12 12)" />
            <ellipse cx="12" cy="6" rx="3" ry="6" fill="none" stroke="#d4918a" strokeWidth="0.5" transform="rotate(288 12 12)" />
            <circle cx="12" cy="12" r="2" fill="#d4af37" opacity="0.3" />
          </svg>
        </div>
        {/* Right line */}
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/15" />
      </div>
    </div>
  );
}
