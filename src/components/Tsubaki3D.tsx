'use client';

interface Tsubaki3DProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
  animate?: boolean;
}

const sizes = {
  sm: { flower: 48, petal: 'w-[14px] h-[22px]', stamen: 'w-3 h-3', ring: 'w-5 h-5' },
  md: { flower: 80, petal: 'w-[22px] h-[36px]', stamen: 'w-5 h-5', ring: 'w-8 h-8' },
  lg: { flower: 140, petal: 'w-[40px] h-[64px]', stamen: 'w-8 h-8', ring: 'w-14 h-14' },
  hero: { flower: 320, petal: 'w-[80px] h-[130px]', stamen: 'w-16 h-16', ring: 'w-28 h-28' },
};

const petalAngles = [0, 72, 144, 216, 288];

export default function Tsubaki3D({ size = 'md', className = '', animate = false }: Tsubaki3DProps) {
  const s = sizes[size];
  const isHero = size === 'hero';
  const isLg = size === 'lg' || size === 'hero';

  return (
    <div
      className={`relative ${animate ? 'animate-tsubaki-spin' : ''} ${className}`}
      style={{ width: s.flower, height: s.flower }}
    >
      {/* Outer glow */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(233,30,99,${isHero ? '0.08' : '0.06'}) 0%, transparent 70%)`,
          filter: isLg ? 'blur(20px)' : 'blur(8px)',
        }}
      />

      {/* Five petals with 3D depth */}
      {petalAngles.map((angle, i) => (
        <div
          key={i}
          className="absolute left-1/2 top-1/2"
          style={{
            transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${s.flower * 0.22}px)`,
          }}
        >
          <div
            className={`${isLg ? 'tsubaki-petal-lg' : 'tsubaki-petal'} ${isLg ? '' : s.petal}`}
            style={{
              opacity: i < 3 ? 1 : 0.7,
              transform: `rotate(${i * 3}deg)`,
            }}
          />
        </div>
      ))}

      {/* Inner petal ring — offset rotation */}
      {petalAngles.map((angle, i) => (
        <div
          key={`inner-${i}`}
          className="absolute left-1/2 top-1/2"
          style={{
            transform: `translate(-50%, -50%) rotate(${angle + 36}deg) translateY(-${s.flower * 0.14}px)`,
          }}
        >
          <div
            className={`${isLg ? 'tsubaki-petal-lg' : 'tsubaki-petal'} ${isLg ? '' : s.petal}`}
            style={{
              opacity: 0.4,
              transform: `scale(0.6) rotate(${-i * 5}deg)`,
            }}
          />
        </div>
      ))}

      {/* Gold stamen ring */}
      <div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${s.ring} rounded-full`}
        style={{
          border: `1px solid rgba(255, 215, 0, ${isLg ? '0.3' : '0.25'})`,
          boxShadow: `0 0 ${isLg ? '20px' : '10px'} rgba(255, 215, 0, 0.1), inset 0 0 ${isLg ? '12px' : '6px'} rgba(255, 215, 0, 0.05)`,
        }}
      />

      {/* Gold stamen center */}
      <div
        className={`tsubaki-stamen absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${s.stamen} ${animate ? 'animate-glow-pulse' : ''}`}
      />
    </div>
  );
}
