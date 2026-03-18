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
      {/* Gold border accent */}
      <div className="absolute inset-0 border border-gold/15 rounded-sm z-10 pointer-events-none" />
      {/* Fallback background */}
      <div className="absolute inset-0 flex items-center justify-center bg-indigo-900/50 seigaiha-bg">
        <span className="font-kaisei text-3xl text-gold/20">紗</span>
      </div>
      {!hasError && (
        /* eslint-disable-next-line @next/next/no-img-element */
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
