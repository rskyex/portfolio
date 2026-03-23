import { ReactNode } from 'react';

interface WhiteCardProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function WhiteCard({ children, className = '', id }: WhiteCardProps) {
  return (
    <div
      id={id}
      className={`panel card-hover ${className}`}
    >
      {children}
    </div>
  );
}
