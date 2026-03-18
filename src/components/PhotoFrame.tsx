'use client';

import Image from 'next/image';

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
  return (
    <div className={`relative overflow-hidden rounded-sm ${className}`}>
      {/* Gold border accent */}
      <div className="absolute inset-0 border border-gold/15 rounded-sm z-10 pointer-events-none" />
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-cover w-full h-full"
        priority={priority}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const parent = target.parentElement;
          if (parent) {
            const fallback = document.createElement('div');
            fallback.className = 'w-full h-full flex items-center justify-center bg-indigo-900/50 seigaiha-bg';
            fallback.innerHTML = '<span class="font-kaisei text-3xl text-gold/20">紗</span>';
            parent.appendChild(fallback);
          }
        }}
      />
    </div>
  );
}
