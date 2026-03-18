import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-lacquer-black border-t border-gold/[0.06]">
      {/* Subtle tsubaki field */}
      <div className="absolute inset-0 tsubaki-field opacity-60 pointer-events-none" />
      <div className="relative">
        <div className="h-px bg-gradient-to-r from-transparent via-vermillion/30 to-transparent" />
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Identity */}
            <div className="flex items-center gap-4">
              {/* Small tsubaki mark */}
              <svg width="20" height="20" viewBox="0 0 20 20" className="opacity-30">
                <ellipse cx="10" cy="5" rx="3" ry="5.5" fill="none" stroke="#c53d2f" strokeWidth="0.6" transform="rotate(0 10 10)" />
                <ellipse cx="10" cy="5" rx="3" ry="5.5" fill="none" stroke="#c53d2f" strokeWidth="0.6" transform="rotate(72 10 10)" />
                <ellipse cx="10" cy="5" rx="3" ry="5.5" fill="none" stroke="#c53d2f" strokeWidth="0.6" transform="rotate(144 10 10)" />
                <ellipse cx="10" cy="5" rx="3" ry="5.5" fill="none" stroke="#d4918a" strokeWidth="0.5" transform="rotate(216 10 10)" />
                <ellipse cx="10" cy="5" rx="3" ry="5.5" fill="none" stroke="#d4918a" strokeWidth="0.5" transform="rotate(288 10 10)" />
                <circle cx="10" cy="10" r="2" fill="#d4af37" opacity="0.25" />
              </svg>
              <span className="font-kaisei text-lg text-gold-light/70">小柳璃紗</span>
              <span className="font-noto-sans text-xs text-washi/25 tracking-widest uppercase">
                Risa Koyanagi
              </span>
            </div>

            <nav className="flex flex-wrap justify-center gap-6">
              {['Platforms', 'Research', 'Projects', 'Speaking', 'About'].map(item => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="font-noto-sans text-xs text-washi/25 hover:text-washi/50 transition-colors tracking-wider uppercase"
                >
                  {item}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col items-center md:items-end gap-1.5">
              <a
                href="mailto:risakyng@gmail.com"
                className="font-noto-sans text-xs text-washi/25 hover:text-vermillion/50 transition-colors"
              >
                risakyng@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/rskyex"
                target="_blank"
                rel="noopener noreferrer"
                className="font-noto-sans text-xs text-washi/25 hover:text-vermillion/50 transition-colors"
              >
                linkedin.com/in/rskyex
              </a>
            </div>
          </div>

          <div className="mt-10 mb-5 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />

          <p className="font-noto-sans text-xs text-washi/15 text-center tracking-wide">
            &copy; {new Date().getFullYear()} Risa Koyanagi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
