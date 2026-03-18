import Link from 'next/link';
import Tsubaki3D from './Tsubaki3D';

export default function Footer() {
  return (
    <footer className="relative bg-kuro border-t border-kin/[0.04]">
      <div className="glow-line-tsubaki" />

      {/* Subtle seigaiha */}
      <div className="absolute inset-0 seigaiha-bg opacity-30 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Identity */}
          <div className="flex items-center gap-4">
            <Tsubaki3D size="sm" />
            <div>
              <span className="font-kaisei text-lg text-kin/80 drop-shadow-[0_0_6px_rgba(212,160,23,0.15)]">小柳璃紗</span>
              <span className="block font-noto-sans text-[10px] text-shiro/30 tracking-[0.3em] uppercase mt-0.5">
                Risa Koyanagi
              </span>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {['Platforms', 'Research', 'Projects', 'Speaking', 'About'].map(item => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="font-noto-sans text-xs text-shiro/30 hover:text-kin/60 transition-colors tracking-wider uppercase"
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-center md:items-end gap-1.5">
            <a
              href="mailto:risakyng@gmail.com"
              className="font-noto-sans text-xs text-shiro/30 hover:text-tsubaki-blush/60 transition-colors"
            >
              risakyng@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/rskyex"
              target="_blank"
              rel="noopener noreferrer"
              className="font-noto-sans text-xs text-shiro/30 hover:text-tsubaki-blush/60 transition-colors"
            >
              linkedin.com/in/rskyex
            </a>
          </div>
        </div>

        <div className="glow-line-gold mt-12 mb-5 max-w-xs mx-auto" />

        <p className="font-noto-sans text-[10px] text-shiro/18 text-center tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Risa Koyanagi
        </p>
      </div>
    </footer>
  );
}
