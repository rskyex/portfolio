/**
 * Structural placeholders for platform detail pages: a Screenshots section and
 * a Key Insights section. Images and copy are filled in later — these render
 * empty framed slots that match the site's panel styling so the layout reads
 * as intentional while the real content is pending.
 */
export default function PlatformDetailPlaceholders() {
  return (
    <>
      {/* ─── Screenshots (placeholder — images added later) ─── */}
      <div className="panel rounded-sm p-8">
        <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-1">Screenshots</h3>
        <p className="font-noto-sans text-xs text-shiro/50 mb-6">主な画面 / Screenshots</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {[0, 1].map((i) => (
            <div
              key={i}
              className="aspect-[1200/630] rounded-sm border border-dashed border-shiro/15 bg-shiro/[0.02] flex items-center justify-center"
            >
              <span className="font-noto-sans text-xs text-shiro/30 tracking-wide">
                Screenshot placeholder
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Key Insights (placeholder — copy added later) ─── */}
      <div className="panel rounded-sm p-8">
        <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-1">Key Insights</h3>
        <p className="font-noto-sans text-xs text-shiro/50 mb-6">主な知見</p>
        <ul className="space-y-3">
          {[0, 1, 2].map((i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-kin/40 mt-1 shrink-0">&mdash;</span>
              <span className="mt-1.5 h-2.5 w-full max-w-md rounded-sm bg-shiro/[0.06]" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
