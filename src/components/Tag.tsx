interface TagProps {
  label: string;
  variant?: 'default' | 'vermillion' | 'gold';
}

export default function Tag({ label, variant = 'default' }: TagProps) {
  const styles = {
    default: 'border-kuro-soft/10 text-kuro-soft/60 bg-kuro/[0.03]',
    vermillion: 'border-tsubaki-rose/20 text-tsubaki-deep bg-tsubaki-rose/[0.06] shadow-[0_0_6px_rgba(233,30,99,0.06)]',
    gold: 'border-kin/18 text-kin-deep bg-kin/[0.06] shadow-[0_0_6px_rgba(212,160,23,0.06)]',
  };

  return (
    <span className={`inline-block px-3 py-1 text-xs font-noto-sans font-medium tracking-wider rounded border backdrop-blur-sm ${styles[variant]}`}>
      {label}
    </span>
  );
}
