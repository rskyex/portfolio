'use client';

import { useState } from 'react';

interface PhotoFrameProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export default function PhotoFrame({
  src,
  alt,
  width = 400,
  height = 300,
  className = '',
  priority = false,
}: PhotoFrameProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden rounded-sm group ${className}`}>
      {/* Layered dimensional border — lacquer frame */}
      <div className="absolute inset-0 border border-gold/10 rounded-sm z-10 pointer-events-none" />
      <div className="absolute inset-[2px] border border-vermillion/[0.06] rounded-sm z-10 pointer-events-none" />
      <div className="absolute inset-[4px] border border-gold/[0.04] rounded-sm z-10 pointer-events-none" />

      {/* Corner petal accents */}
      <div className="absolute top-1 left-1 z-10 pointer-events-none opacity-20 group-hover:opacity-35 transition-opacity">
        <svg width="16" height="16" viewBox="0 0 16 16">
          <ellipse cx="0" cy="0" rx="5" ry="10" fill="none" stroke="#c53d2f" strokeWidth="0.5" transform="rotate(45 0 0)" opacity="0.5" />
          <ellipse cx="0" cy="0" rx="4" ry="8" fill="none" stroke="#d4918a" strokeWidth="0.4" transform="rotate(15 0 0)" opacity="0.4" />
        </svg>
      </div>
      <div className="absolute bottom-1 right-1 z-10 pointer-events-none opacity-20 group-hover:opacity-35 transition-opacity">
        <svg width="16" height="16" viewBox="0 0 16 16">
          <ellipse cx="16" cy="16" rx="5" ry="10" fill="none" stroke="#d4af37" strokeWidth="0.5" transform="rotate(225 16 16)" opacity="0.5" />
          <ellipse cx="16" cy="16" rx="4" ry="8" fill="none" stroke="#d4918a" strokeWidth="0.4" transform="rotate(195 16 16)" opacity="0.4" />
        </svg>
      </div>

      {/* Fallback */}
      <div className="absolute inset-0 flex items-center justify-center bg-indigo-900/60">
        <svg width="40" height="40" viewBox="0 0 40 40" className="opacity-15">
          <ellipse cx="20" cy="10" rx="6" ry="11" fill="none" stroke="#c53d2f" strokeWidth="0.6" transform="rotate(0 20 20)" />
          <ellipse cx="20" cy="10" rx="6" ry="11" fill="none" stroke="#c53d2f" strokeWidth="0.6" transform="rotate(72 20 20)" />
          <ellipse cx="20" cy="10" rx="6" ry="11" fill="none" stroke="#c53d2f" strokeWidth="0.6" transform="rotate(144 20 20)" />
          <ellipse cx="20" cy="10" rx="6" ry="11" fill="none" stroke="#d4918a" strokeWidth="0.5" transform="rotate(216 20 20)" />
          <ellipse cx="20" cy="10" rx="6" ry="11" fill="none" stroke="#d4918a" strokeWidth="0.5" transform="rotate(288 20 20)" />
          <circle cx="20" cy="20" r="3" fill="#d4af37" opacity="0.2" />
        </svg>
      </div>
      {!hasError && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="relative object-cover w-full h-full"
          loading={priority ? 'eager' : 'lazy'}
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
}
