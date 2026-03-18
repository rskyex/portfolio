import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-indigo-950 border-t border-indigo-800/30">
      <div className="shippo-bg">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <span className="font-kaisei text-xl text-gold-light">璃紗</span>
              <span className="font-noto-sans text-sm text-washi/50 tracking-widest">
                RISA KOYANAGI
              </span>
            </div>

            <nav className="flex flex-wrap justify-center gap-6">
              {['Platforms', 'Research', 'Projects', 'Speaking', 'About'].map(item => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="font-noto-sans text-xs text-washi/40 hover:text-washi/70 transition-colors tracking-wide uppercase"
                >
                  {item}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col items-center md:items-end gap-1">
              <a
                href="mailto:risakyng@gmail.com"
                className="font-noto-sans text-xs text-washi/40 hover:text-gold/70 transition-colors"
              >
                risakyng@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/rskyex"
                target="_blank"
                rel="noopener noreferrer"
                className="font-noto-sans text-xs text-washi/40 hover:text-gold/70 transition-colors"
              >
                linkedin.com/in/rskyex
              </a>
            </div>
          </div>

          <div className="gold-rule mt-8 mb-4" />

          <p className="font-noto-sans text-xs text-washi/25 text-center">
            © {new Date().getFullYear()} Risa Koyanagi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
