interface TagProps {
  label: string;
  variant?: 'default' | 'vermillion' | 'gold';
}

export default function Tag({ label, variant = 'default' }: TagProps) {
  const styles = {
    default: 'border-indigo-700/30 text-indigo-800/70 bg-indigo-900/5',
    vermillion: 'border-vermillion/20 text-vermillion/80 bg-vermillion/5',
    gold: 'border-gold/25 text-gold-dark bg-gold/5',
  };

  return (
    <span className={`inline-block px-3 py-1 text-xs font-noto-sans tracking-wide rounded-sm border ${styles[variant]}`}>
      {label}
    </span>
  );
}
