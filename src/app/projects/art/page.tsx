import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import PhotoFrame from '@/components/PhotoFrame';

export default function ArtProjectPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <Link href="/projects" className="font-noto-sans text-xs text-kin/50 hover:text-kin-light transition-colors tracking-wide mb-8 inline-block">
        ← Back to Projects
      </Link>

      <SectionHeader kanji="業" english="Art Practice" subtitle="Visual thinking and interdisciplinary work" />

      <div className="mt-8 space-y-8">
        <PhotoFrame
          src="/images/art.JPG"
          alt="Art practice"
          width={800}
          height={500}
          className="w-full h-72 md:h-96"
        />

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Overview</h3>
          <p className="font-noto-sans text-sm text-shiro/60 leading-relaxed mb-4">
            An interdisciplinary art practice that connects visual thinking with broader research interests in governance, identity, and technology. The work engages with questions of representation, materiality, and conceptual framing that parallel and inform the research agenda.
          </p>
          <p className="font-noto-sans text-sm text-shiro/60 leading-relaxed">
            The practice spans visual art, conceptual work, and exhibition, with an international exhibition history that reflects the same cross-cultural and cross-disciplinary orientation as the broader portfolio. Art functions here not as a separate domain, but as an alternative mode of thinking about the same structural questions — authority, legitimacy, representation, and the architecture of meaning.
          </p>
        </div>

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Exhibition History</h3>
          <div className="flex flex-wrap gap-3 mb-8">
            {['Tokyo', 'New York', 'San Francisco', 'Athens', 'Barcelona', 'London'].map((city, i) => (
              <span key={i} className="font-noto-sans text-sm text-shiro/60 py-1.5 px-3 border border-shiro/[0.08] rounded-sm">{city}</span>
            ))}
          </div>

          <div className="space-y-6">
            {/* Monster Exhibition 2021 - Tokyo */}
            <div className="border-l-2 border-kin/30 pl-5">
              <PhotoFrame
                src="/images/art-1.JPG"
                alt="Monster Exhibition 2021 at Shibuya Hikarie"
                width={800}
                height={500}
                className="w-full h-48 md:h-64 mb-4"
              />
              <h4 className="font-noto-sans text-sm font-medium text-shiro/80 mb-1">Monster Exhibition 2021</h4>
              <p className="font-noto-sans text-xs text-kin/60 mb-2">Tokyo, Shibuya</p>
              <div className="font-noto-sans text-xs text-shiro/50 leading-relaxed space-y-1">
                <p>2022/2/18 (金) - 2/22 (火) 11:00~20:00</p>
                <p>開催場所: 渋谷ヒカリエ 8/ COURT</p>
                <p>主催: 一般社団法人Evolve Art &amp; Design Japan</p>
                <p>協賛: 株式会社ツルカメ</p>
                <p>協力: 渋谷ヒカリエ</p>
                <p>
                  Web:{' '}
                  <a href="https://monsterex.info/2021/" target="_blank" rel="noopener noreferrer" className="text-kin/60 hover:text-kin transition-colors underline">
                    monsterex.info/2021
                  </a>
                </p>
              </div>
            </div>

            {/* Boomer Gallery - London */}
            <div className="border-l-2 border-kin/30 pl-5">
              <PhotoFrame
                src="/images/art-3.jpg"
                alt="Boomer Gallery exhibition in London"
                width={800}
                height={500}
                className="w-full h-48 md:h-64 mb-4"
              />
              <h4 className="font-noto-sans text-sm font-medium text-shiro/80 mb-1">Boomer Gallery — &ldquo;Why do you do it?&rdquo;</h4>
              <p className="font-noto-sans text-xs text-kin/60 mb-2">London</p>
              <div className="font-noto-sans text-xs text-shiro/50 leading-relaxed space-y-1">
                <p>November 10th – 15th, 2022</p>
              </div>
            </div>

            {/* Monster Exhibition - San Francisco */}
            <div className="border-l-2 border-kin/30 pl-5">
              <h4 className="font-noto-sans text-sm font-medium text-shiro/80 mb-1">
                <a href="https://monsterex.info/san-francisco/" target="_blank" rel="noopener noreferrer" className="hover:text-kin transition-colors">Monster Exhibition</a>
              </h4>
              <p className="font-noto-sans text-xs text-kin/60 mb-2">San Francisco</p>
              <div className="font-noto-sans text-xs text-shiro/50 leading-relaxed space-y-1">
                <p>November 15th – 22nd, 11:00 – 16:00</p>
                <p>790 Pennsylvania Residence 1F</p>
              </div>
            </div>

            {/* ART ON LOOP - London & Athens (Jan 2024) */}
            <div className="border-l-2 border-kin/30 pl-5">
              <h4 className="font-noto-sans text-sm font-medium text-shiro/80 mb-1">ART ON LOOP</h4>
              <p className="font-noto-sans text-xs text-kin/60 mb-2">London &amp; Athens</p>
              <div className="font-noto-sans text-xs text-shiro/50 leading-relaxed space-y-1">
                <p>January 12th – 28th, 2024</p>
                <p>The Factory, 21-31 Shacklewell Ln, London, E8 2DA</p>
                <p>Πραξιτέλους 26, Αθήνα, 105 61</p>
                <p>Visiting hours: Mon – Fri 10:00-13:00 &amp; 14:00-17:00, Weekend 11:00 – 17:00</p>
                <p>Private viewing Friday 19:30 – 22:00</p>
                <p>
                  <a href="https://www.theholyart.com/" target="_blank" rel="noopener noreferrer" className="text-kin/60 hover:text-kin transition-colors underline">
                    theholyart.com
                  </a>
                </p>
              </div>
            </div>

            {/* New York Cinema Screening */}
            <div className="border-l-2 border-kin/30 pl-5">
              <PhotoFrame
                src="/images/art-5.PNG"
                alt="New York Cinema Showcase at Stuart Cinema"
                width={800}
                height={500}
                className="w-full h-48 md:h-64 mb-4"
              />
              <h4 className="font-noto-sans text-sm font-medium text-shiro/80 mb-1">New York Cinema Screening</h4>
              <p className="font-noto-sans text-xs text-kin/60 mb-2">New York — Presented by Artspace Innovation</p>
              <div className="font-noto-sans text-xs text-shiro/50 leading-relaxed space-y-1">
                <p>19th March 2024, 19:00 – 21:00 (New York time)</p>
                <p>Stuart Cinema, 79 West Street, Brooklyn NY 11222</p>
              </div>
            </div>

            {/* ART ON LOOP - London & Athens (Sep 2024) */}
            <div className="border-l-2 border-kin/30 pl-5">
              <PhotoFrame
                src="/images/art-2.PNG"
                alt="ART ON LOOP Digital Exhibition"
                width={800}
                height={500}
                className="w-full h-48 md:h-64 mb-4"
              />
              <h4 className="font-noto-sans text-sm font-medium text-shiro/80 mb-1">ART ON LOOP — Digital Exhibition</h4>
              <p className="font-noto-sans text-xs text-kin/60 mb-2">London &amp; Athens</p>
              <div className="font-noto-sans text-xs text-shiro/50 leading-relaxed space-y-1">
                <p>Private Viewing: Friday, September 20th, 2024, 19:30 – 22:00</p>
                <p>Open to the public until September 29th, 2024</p>
                <p>The Factory, 21-31 Shacklewell Ln, London, E8 2DA</p>
                <p>Πραξιτέλους 26, Αθήνα, 105 61</p>
                <p>Visiting hours: Mon – Fri 10:00-13:00 &amp; 14:00-17:00, Weekend 11:00 – 17:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Press & Media */}
        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Press &amp; Media</h3>
          <div className="space-y-4">
            <div className="border-l-2 border-kin/30 pl-5">
              <h4 className="font-noto-sans text-sm font-medium text-shiro/80 mb-1">Podcast — &ldquo;To Where I Belong?&rdquo;</h4>
              <p className="font-noto-sans text-xs text-shiro/50 leading-relaxed">
                &ldquo;Japan: Art and Philosophy&rdquo;
              </p>
              <a href="https://open.spotify.com/episode/78ykawkPnp4QSFnVDRBMJU?si=SJi3UlATQmWv_pkhs4tGog" target="_blank" rel="noopener noreferrer" className="font-noto-sans text-xs text-kin/60 hover:text-kin transition-colors underline">
                Listen on Spotify
              </a>
            </div>

            <div className="border-l-2 border-kin/30 pl-5">
              <h4 className="font-noto-sans text-sm font-medium text-shiro/80 mb-1">Featured — &ldquo;A Like Artist&rdquo; Volume 03</h4>
              <a href="https://www.altiba9.com/a-like-artist-volume-03" target="_blank" rel="noopener noreferrer" className="font-noto-sans text-xs text-kin/60 hover:text-kin transition-colors underline">
                altiba9.com
              </a>
            </div>

            <div className="border-l-2 border-kin/30 pl-5">
              <h4 className="font-noto-sans text-sm font-medium text-shiro/80 mb-1">Interview — Risa Koyanagi: Painting &amp; Peacebuilding</h4>
              <a href="https://www.altiba9.com/platfrom-interviews-for-artists/risa-koyanagi-painting-peacebuilding" target="_blank" rel="noopener noreferrer" className="font-noto-sans text-xs text-kin/60 hover:text-kin transition-colors underline">
                altiba9.com
              </a>
            </div>
          </div>
        </div>

        <div className="panel rounded-sm p-8">
          <h3 className="font-noto-sans text-base font-medium text-shiro/90 mb-4">Themes</h3>
          <ul className="space-y-2">
            {[
              'Visual thinking as a research methodology',
              'Representation, materiality, and governance',
              'Cross-cultural and interdisciplinary practice',
              'International exhibition and conceptual work',
              'The architecture of meaning and authority',
            ].map((theme, i) => (
              <li key={i} className="font-noto-sans text-sm text-shiro/60 leading-relaxed flex items-start gap-2">
                <span className="text-kin/50 mt-1">—</span>
                {theme}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
