import SectionHeader from '@/components/SectionHeader';
import SectionDivider from '@/components/SectionDivider';
import PhotoFrame from '@/components/PhotoFrame';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <SectionHeader kanji="技" english="About" subtitle="Researcher" />

      <div className="mt-8 space-y-12">
        {/* Profile */}
        <div className="grid md:grid-cols-[auto,1fr] gap-8 items-start">
          <div className="flex justify-center md:justify-start">
            <PhotoFrame
              src="/images/profile.jpg"
              alt="Risa Koyanagi"
              width={240}
              height={320}
              className="w-40 h-52 md:w-52 md:h-68"
            />
          </div>

          <div className="card-washi card-washi-about p-8 relative overflow-hidden">
            <div className="glow-bar absolute left-0 top-0 bottom-0" />
            <div className="pl-4">
              <h3 className="font-noto-sans text-base font-bold text-kuro-soft mb-4">Profile</h3>
              <p className="font-noto-sans text-xs text-kuro-soft/50 tracking-wide mb-4">Born 2003</p>
              <div className="space-y-4">
                <p className="font-noto-sans text-sm text-kuro-soft/70 leading-relaxed">
                  Risa Koyanagi is a Cambridge Future Scholar and researcher working at the intersection of international security, space governance, nuclear governance, cyber governance, and emerging technology governance. Her research is especially concerned with legitimation theory, dual-use governance, authority architecture, and responsible behaviour norms.
                </p>
                <p className="font-noto-sans text-sm text-kuro-soft/70 leading-relaxed">
                  She develops public-facing policy and research platforms that translate governance theory into usable tools across strategic infrastructure domains. Her work connects conceptual research on legitimacy, authority, and governance architecture with applied questions of escalation, responsibility, and institutional design.
                </p>
                <p className="font-noto-sans text-sm text-kuro-soft/70 leading-relaxed">
                  Although her work spans multiple domains — from space and nuclear to cyber and AI governance — it is unified by a consistent conceptual focus on how authority is constructed, contested, and legitimated in environments of technological complexity and strategic ambiguity.
                </p>
                <p className="font-noto-sans text-sm text-kuro-soft/70 leading-relaxed">
                  Koyanagi also has a background in the arts. She trained in piano with Noriko Amano, Shadow Box with Ineke de Bruijn, and oil painting under Yukiko Hamano. She received an Excellence Award for poetry in 2011 and appeared as a child actor in Maribor National Opera&apos;s &ldquo;Carmen.&rdquo; As a teenager, she won the Excellence Award in the JYOJI-ROCK U-16 contest. Her art studies with Nobuhiko Utsumi led to a group exhibition. She has been selected for the Monster Exhibition and featured in Al-Tiba9 Contemporary Art Magazine.
                </p>
              </div>
            </div>
          </div>
        </div>

        <SectionDivider />

        {/* Education */}
        <div>
          <h3 className="font-noto-sans text-xs text-kin tracking-[0.25em] uppercase mb-6 font-semibold">Education</h3>
          <div className="space-y-4">
            {[
              { institution: 'University of London / Forward College', degree: 'Academic Direction: London School of Economics', period: '2025–2026', detail: 'Lisbon' },
              { institution: 'Saïd Business School, University of Oxford', degree: 'AI & Digital Transformation in Government', period: 'Nov 2025 – Jan 2026' },
              { institution: 'Selwyn College, University of Cambridge', degree: 'International Summer Programme: Space Weaponisation & British Politics', period: 'Jul – Aug 2025' },
              { institution: 'SOAS University of London', degree: 'BSc Social Sciences (Foundation Year)', period: '2024–2025', detail: 'GPA 3.92' },
              { institution: 'Sophia University', degree: 'BA Philosophy (first year completed)', period: '2023–2024' },
            ].map((edu, i) => (
              <div key={i} className="card-washi card-washi-about p-6 relative overflow-hidden">
                <div className="glow-bar absolute left-0 top-0 bottom-0" />
                <div className="pl-4">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 mb-1">
                    <h4 className="font-noto-sans text-sm font-semibold text-kuro-soft">{edu.institution}</h4>
                    <span className="font-noto-sans text-xs text-kuro-soft/50 shrink-0 font-medium">{edu.period}</span>
                  </div>
                  {edu.degree && <p className="font-noto-sans text-sm text-kuro-soft/65">{edu.degree}</p>}
                  {edu.detail && <p className="font-noto-sans text-xs text-kuro-soft/45 mt-1">{edu.detail}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <SectionDivider />

        {/* Reference */}
        <div>
          <h3 className="font-noto-sans text-xs text-kin tracking-[0.25em] uppercase mb-6 font-semibold">Reference</h3>
          <div className="card-washi card-washi-about p-8 relative overflow-hidden">
            <div className="glow-bar absolute left-0 top-0 bottom-0" />
            <div className="pl-4">
              <p className="font-noto-sans text-sm text-kuro-soft/70 leading-relaxed italic mb-6">
                &ldquo;Risa Koyanagi is a brilliant young scholar, an intellectually agile thinker, and an accomplished writer. In twenty-two years of teaching undergraduate and graduate students in Cambridge, I have rarely seen such a thoughtful and highly motivated student with an unconditional commitment to scholarly inquiry.&rdquo;
              </p>
              <div>
                <p className="font-noto-sans text-sm font-semibold text-kuro-soft">Prof Harald Wydra</p>
                <p className="font-noto-sans text-xs text-kuro-soft/55">Professor of Politics, Philpott Fellow, St Catharine&apos;s College, University of Cambridge</p>
                <p className="font-noto-sans text-xs text-kuro-soft/45 mt-1">Cambridge Centre for International Research (CCIR)</p>
              </div>
            </div>
          </div>
        </div>

        <SectionDivider />

        {/* Skills */}
        <div>
          <h3 className="font-noto-sans text-xs text-kin tracking-[0.25em] uppercase mb-6 font-semibold">Skills</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Research', items: ['Qualitative analysis', 'Codebook design', 'Stakeholder interviewing', 'Primary-source synthesis', 'Briefing memo writing', 'Policy analysis', 'Public speaking'] },
              { title: 'Technical', items: ['Next.js / React / TypeScript', 'D3 / Recharts / Leaflet', 'Tailwind CSS', 'Python / SQL', 'Figma / Adobe XD', 'Excel / PowerPoint', 'Google Docs'] },
              { title: 'Policy / Communication', items: ['Public speaking', 'Moderation', 'Workshop / event design', 'Stakeholder coordination', 'Policy writing'] },
            ].map((group, i) => (
              <div key={i} className="card-washi card-washi-about p-6 relative overflow-hidden">
                <div className="glow-bar absolute left-0 top-0 bottom-0" />
                <div className="pl-4">
                  <h4 className="font-noto-sans text-sm font-bold text-kuro-soft mb-3">{group.title}</h4>
                  <ul className="space-y-1.5">
                    {group.items.map((skill, j) => (
                      <li key={j} className="font-noto-sans text-xs text-kuro-soft/60">{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <SectionDivider />

        {/* Languages */}
        <div>
          <h3 className="font-noto-sans text-xs text-kin tracking-[0.25em] uppercase mb-6 font-semibold">Languages</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Japanese', 'English', 'Russian', 'Chinese'].map((lang, i) => (
              <div key={i} className="card-washi card-washi-about p-4 text-center relative overflow-hidden">
                <div className="glow-bar absolute left-0 top-0 bottom-0" />
                <div className="font-noto-sans text-sm font-semibold text-kuro-soft">{lang}</div>
              </div>
            ))}
          </div>
        </div>

        <SectionDivider />

        {/* Affiliations */}
        <div>
          <h3 className="font-noto-sans text-xs text-kin tracking-[0.25em] uppercase mb-6 font-semibold">Affiliations</h3>
          <div className="space-y-3">
            {[
              { institution: 'Sophia University', detail: 'Professor Daisaku Higashi Peacebuilding and International Cooperation Laboratory', role: 'Former President; current Alumni Representative' },
              { institution: 'University of Tokyo', detail: 'Professor Makoto Iokibe Yotsuya Reimeikai' },
              { institution: 'Waseda University', detail: 'Professor Nobuhiko Utsumi Laboratory', role: 'Professor Utsumi is also Honorary Professor at the National School of Fine Arts of Peru' },
              { institution: 'Meiji Gakuin University', detail: 'Professor Hiroshi Aoyagi Laboratory' },
            ].map((aff, i) => (
              <div key={i} className="card-washi card-washi-about p-5 relative overflow-hidden">
                <div className="glow-bar absolute left-0 top-0 bottom-0" />
                <div className="pl-4">
                  <h4 className="font-noto-sans text-sm font-semibold text-kuro-soft">{aff.institution}</h4>
                  <p className="font-noto-sans text-xs text-kuro-soft/60 mt-1">{aff.detail}</p>
                  {aff.role && <p className="font-noto-sans text-xs text-kuro-soft/45 mt-0.5 italic">{aff.role}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <SectionDivider />

        {/* Awards */}
        <div>
          <h3 className="font-noto-sans text-xs text-kin tracking-[0.25em] uppercase mb-6 font-semibold">Awards</h3>
          <div className="space-y-3">
            {[
              { title: 'Excellence Award for Poetry', detail: '2011' },
              { title: 'Excellence Award, JYOJI-ROCK U-16 Contest', detail: 'Music performance' },
              { title: '2nd Prize, GEIL Policy Contest — Tokyo Earthquake Response', detail: 'Led a team of four in crafting a policy to boost Tokyo\'s earthquake resilience, proposing "Transferable Development Rights Plus" to incentivise redevelopment, reduce wooden structures, and widen streets' },
              { title: 'Selected for Monster Exhibition', detail: 'Prestigious group exhibition, Shibuya Hikarie, Tokyo' },
              { title: 'Featured in Al-Tiba9 Contemporary Art Magazine', detail: 'International contemporary art publication' },
            ].map((award, i) => (
              <div key={i} className="card-washi card-washi-about p-5 relative overflow-hidden">
                <div className="glow-bar absolute left-0 top-0 bottom-0" />
                <div className="pl-4">
                  <h4 className="font-noto-sans text-sm font-semibold text-kuro-soft">{award.title}</h4>
                  <p className="font-noto-sans text-xs text-kuro-soft/60 mt-1">{award.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <SectionDivider />

        {/* Interests */}
        <div>
          <h3 className="font-noto-sans text-xs text-kin tracking-[0.25em] uppercase mb-6 font-semibold">Interests</h3>
          <div className="card-washi card-washi-about p-6 relative overflow-hidden">
            <div className="glow-bar absolute left-0 top-0 bottom-0" />
            <div className="pl-4">
              <p className="font-noto-sans text-sm text-kuro-soft/70 leading-relaxed">
                {['Violin', 'Johann Sebastian Bach', 'Jean Sibelius', 'Giacomo Puccini', 'Giuseppe Verdi', 'Pyotr Ilyich Tchaikovsky', 'Anton\u00edn Dvo\u0159\u00e1k', 'Igor Stravinsky', 'Fyodor Dostoevsky', 'Kabuki', 'Yukio Mishima', 'Greek Mythology', 'Raymond Radiguet', 'Rainer Maria Rilke'].join(' \u00b7 ')}
              </p>
            </div>
          </div>

          {/* Gallery — places and moments */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { src: '/images/interest-1.jpg', alt: 'Visiting a place of inspiration' },
              { src: '/images/interest-2.jpg', alt: 'At a concert or performance' },
              { src: '/images/interest-3.jpg', alt: 'Literary pilgrimage' },
              { src: '/images/interest-4.jpg', alt: 'Cultural exploration' },
              { src: '/images/interest-5.jpg', alt: 'Music and art' },
              { src: '/images/interest-6.jpg', alt: 'A moment of reflection' },
            ].map((img, i) => (
              <div key={i} className="aspect-[4/3] rounded-sm overflow-hidden border border-kuro-soft/[0.08]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <SectionDivider />

        {/* Contact */}
        <div>
          <h3 className="font-noto-sans text-xs text-kin tracking-[0.25em] uppercase mb-6 font-semibold">Contact</h3>
          <div className="card-washi card-washi-about p-6 relative overflow-hidden">
            <div className="glow-bar absolute left-0 top-0 bottom-0" />
            <div className="pl-4 space-y-2">
              <a href="mailto:risakyng@gmail.com" className="block font-noto-sans text-sm text-kuro-soft/70 hover:text-shu-deep transition-colors font-medium">
                risakyng@gmail.com
              </a>
              <a href="https://linkedin.com/in/rskyex" target="_blank" rel="noopener noreferrer" className="block font-noto-sans text-sm text-kuro-soft/70 hover:text-shu-deep transition-colors font-medium">
                linkedin.com/in/rskyex
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
