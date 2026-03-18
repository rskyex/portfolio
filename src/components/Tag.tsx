interface TagProps {
  label: string;
  variant?: 'default' | 'vermillion' | 'gold';
}

export default function Tag({ label, variant = 'default' }: TagProps) {
  const styles = {
    default: 'border-shiro/[0.06] text-shiro/40 bg-shiro/[0.02]',
    vermillion: 'border-tsubaki-rose/12 text-tsubaki-blush/50 bg-tsubaki-rose/[0.04] shadow-[0_0_6px_rgba(233,30,99,0.04)]',
    gold: 'border-kin/12 text-kin/50 bg-kin/[0.04] shadow-[0_0_6px_rgba(212,160,23,0.04)]',
  };

  return (
    <span className={`inline-block px-3 py-1 text-xs font-noto-sans tracking-wider rounded border backdrop-blur-sm ${styles[variant]}`}>
      {label}
    </span>
  );
}
