import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-indigo-950 border-t border-vermillion/15">
      <div className="shippo-bg">
        {/* Vermillion-gold gradient top line */}
        <div className="h-[2px] bg-gradient-to-r from-vermillion/40 via-vermillion/60 to-gold/40" />
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <span className="font-kaisei text-xl text-gold-light">小柳璃紗</span>
              <span className="font-noto-sans text-xs text-washi/40 tracking-widest uppercase">
                Risa Koyanagi
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
                className="font-noto-sans text-xs text-washi/40 hover:text-vermillion/70 transition-colors"
              >
                risakyng@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/rskyex"
                target="_blank"
                rel="noopener noreferrer"
                className="font-noto-sans text-xs text-washi/40 hover:text-vermillion/70 transition-colors"
              >
                linkedin.com/in/rskyex
              </a>
            </div>
          </div>

          <div className="vermillion-rule mt-8 mb-4 max-w-md mx-auto" />

          <p className="font-noto-sans text-xs text-washi/25 text-center">
            &copy; {new Date().getFullYear()} Risa Koyanagi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
