interface TagProps {
  label: string;
  variant?: 'default' | 'vermillion' | 'gold';
}

export default function Tag({ label, variant = 'default' }: TagProps) {
  const styles = {
    default: 'border-washi/[0.08] text-washi/50 bg-washi/[0.02]',
    vermillion: 'border-vermillion/15 text-vermillion/60 bg-vermillion/[0.04]',
    gold: 'border-gold/15 text-gold/50 bg-gold/[0.04]',
  };

  return (
    <span className={`inline-block px-3 py-1 text-xs font-noto-sans tracking-wider rounded-sm border backdrop-blur-sm ${styles[variant]}`}>
      {label}
    </span>
  );
}
