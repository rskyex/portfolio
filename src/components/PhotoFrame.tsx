'use client';

import { useState } from 'react';
import Tsubaki3D from './Tsubaki3D';

interface PhotoFrameProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  objectFit?: 'cover' | 'contain';
}

export default function PhotoFrame({
  src,
  alt,
  width = 400,
  height = 300,
  className = '',
  priority = false,
  objectFit = 'contain',
}: PhotoFrameProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden rounded group ${className}`}>
      {/* Neon border glow */}
      <div className="absolute inset-0 rounded z-10 pointer-events-none border border-kin/10 group-hover:border-kin/20 transition-colors" />
      <div className="absolute inset-[2px] rounded z-10 pointer-events-none border border-tsubaki-rose/[0.05] group-hover:border-tsubaki-rose/10 transition-colors" />

      {/* Corner glow accents */}
      <div className="absolute top-0 left-0 w-8 h-8 z-10 pointer-events-none opacity-30 group-hover:opacity-60 transition-opacity">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-tsubaki-rose/60 to-transparent shadow-[0_0_4px_rgba(233,30,99,0.3)]" />
        <div className="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-tsubaki-rose/60 to-transparent shadow-[0_0_4px_rgba(233,30,99,0.3)]" />
      </div>
      <div className="absolute bottom-0 right-0 w-8 h-8 z-10 pointer-events-none opacity-30 group-hover:opacity-60 transition-opacity">
        <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-kin/60 to-transparent shadow-[0_0_4px_rgba(212,160,23,0.3)]" />
        <div className="absolute bottom-0 right-0 h-full w-[1px] bg-gradient-to-t from-kin/60 to-transparent shadow-[0_0_4px_rgba(212,160,23,0.3)]" />
      </div>

      {/* Fallback */}
      <div className="absolute inset-0 flex items-center justify-center bg-kuro-panel">
        <Tsubaki3D size="md" />
      </div>
      {!hasError && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`relative w-full h-full ${objectFit === 'cover' ? 'object-cover' : 'object-contain'}`}
          loading={priority ? 'eager' : 'lazy'}
          onError={() => setHasError(true)}
        />
      )}

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-kuro/50 to-transparent pointer-events-none z-10" />
    </div>
  );
}
