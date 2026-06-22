import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Tsubaki3D from './Tsubaki3D';

export default function Footer() {
  const t = useTranslations('footer');
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
              <span className="font-noto-serif text-lg text-kin/90 drop-shadow-[0_0_6px_rgba(212,160,23,0.15)]">小柳璃紗</span>
              <span className="block font-inter text-[10px] text-shiro/75 tracking-[0.3em] uppercase mt-0.5">
                Risa Koyanagi
              </span>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {[
              { key: 'platforms', href: '/platforms' },
              { key: 'research', href: '/research' },
              { key: 'fieldwork', href: '/fieldwork' },
              { key: 'about', href: '/about' },
            ].map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="font-inter text-xs text-shiro/75 hover:text-kin/80 transition-colors tracking-wider uppercase"
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-center md:items-end gap-1.5">
            <a
              href="mailto:risakyng@gmail.com"
              className="font-inter text-xs text-shiro/75 hover:text-tsubaki-blush/80 transition-colors"
            >
              risakyng@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/rskyex"
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-xs text-shiro/75 hover:text-tsubaki-blush/80 transition-colors"
            >
              linkedin.com/in/rskyex
            </a>
          </div>
        </div>

        <div className="glow-line-gold mt-12 mb-5 max-w-xs mx-auto" />

        <p className="font-inter text-[10px] text-shiro/60 text-center tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Risa Koyanagi
        </p>
      </div>
    </footer>
  );
}
