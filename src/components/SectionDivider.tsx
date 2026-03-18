import Tsubaki3D from './Tsubaki3D';

export default function SectionDivider() {
  return (
    <div className="py-12 flex items-center justify-center">
      <div className="relative flex items-center gap-0 w-full max-w-sm">
        <div className="flex-1 glow-line-gold" />
        <div className="mx-5">
          <Tsubaki3D size="sm" />
        </div>
        <div className="flex-1 glow-line-gold" />
      </div>
    </div>
  );
}
