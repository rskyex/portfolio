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
    <div className={`relative overflow-hidden rounded-sm ${className}`}>
      {/* Double border - outer gold, inner vermillion */}
      <div className="absolute inset-0 border border-gold/20 rounded-sm z-10 pointer-events-none" />
      <div className="absolute inset-[3px] border border-vermillion/10 rounded-sm z-10 pointer-events-none" />
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-[2px] bg-vermillion/40 z-10" />
      <div className="absolute top-0 left-0 w-[2px] h-4 bg-vermillion/40 z-10" />
      <div className="absolute bottom-0 right-0 w-4 h-[2px] bg-gold/40 z-10" />
      <div className="absolute bottom-0 right-0 w-[2px] h-4 bg-gold/40 z-10" />
      {/* Fallback background with wagara */}
      <div className="absolute inset-0 flex items-center justify-center bg-indigo-900/50 asanoha-bg">
        <span className="font-kaisei text-3xl text-gold/20">紗</span>
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
