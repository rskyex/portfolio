'use client';

import { useState } from 'react';
import PhotoFrame from './PhotoFrame';

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface GalleryProps {
  images: GalleryImage[];
  title?: string;
}

export default function Gallery({ images, title = 'Gallery' }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (images.length === 0) return null;

  return (
    <div className="space-y-4">
      <h3 className="font-noto-sans text-base font-medium text-shiro/90">{title}</h3>

      <div className={`grid gap-3 ${
        images.length === 1
          ? 'grid-cols-1'
          : images.length === 2
          ? 'grid-cols-2'
          : 'grid-cols-2 md:grid-cols-3'
      }`}>
        {images.map((image, i) => (
          <button
            key={i}
            onClick={() => setSelectedIndex(i)}
            className="text-left focus:outline-none focus:ring-1 focus:ring-kin/30 rounded"
          >
            <PhotoFrame
              src={image.src}
              alt={image.alt}
              width={400}
              height={300}
              className="w-full h-40 md:h-48 cursor-pointer"
            />
            {image.caption && (
              <p className="font-noto-sans text-xs text-shiro/70 mt-1.5 px-1">{image.caption}</p>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-kuro/90 backdrop-blur-sm"
          onClick={() => setSelectedIndex(null)}
        >
          <div className="relative max-w-4xl max-h-[85vh] w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded"
            />
            {images[selectedIndex].caption && (
              <p className="font-noto-sans text-sm text-shiro/90 text-center mt-3">{images[selectedIndex].caption}</p>
            )}

            {/* Navigation */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); setSelectedIndex((selectedIndex - 1 + images.length) % images.length); }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-kuro/60 text-shiro/70 hover:text-shiro hover:bg-kuro/80 transition-colors"
                >
                  &larr;
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); setSelectedIndex((selectedIndex + 1) % images.length); }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-kuro/60 text-shiro/70 hover:text-shiro hover:bg-kuro/80 transition-colors"
                >
                  &rarr;
                </button>
              </>
            )}

            {/* Close */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute -top-10 right-0 text-shiro/80 hover:text-shiro text-sm font-noto-sans transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
