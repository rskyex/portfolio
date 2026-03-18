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
          <div className="hidden md:block">
            <PhotoFrame
              src="/images/profile.jpg"
              alt="Risa Koyanagi"
              width={240}
              height={320}
              className="w-52 h-68"
            />
          </div>

          <div className="bg-parchment/95 rounded-sm p-8 vermillion-bar">
            <h3 className="font-noto-sans text-base font-medium text-ink mb-4">Intellectual Profile</h3>
            <div className="space-y-4">
              <p className="font-noto-sans text-sm text-warm-brown leading-relaxed">
                Risa Koyanagi is a Cambridge Future Scholar and researcher working at the intersection of international security, space governance, nuclear governance, cyber governance, and emerging technology governance. Her research is especially concerned with legitimation theory, dual-use governance, authority architecture, and responsible behaviour norms.
              </p>
              <p className="font-noto-sans text-sm text-warm-brown leading-relaxed">
                She develops public-facing policy and research platforms that translate governance theory into usable tools across strategic infrastructure domains. Her work connects conceptual research on legitimacy, authority, and governance architecture with applied questions of escalation, responsibility, and institutional design.
              </p>
              <p className="font-noto-sans text-sm text-warm-brown leading-relaxed">
                Although her work spans multiple domains — from space and nuclear to cyber and AI governance — it is unified by a consistent conceptual focus on how authority is constructed, contested, and legitimated in environments of technological complexity and strategic ambiguity.
              </p>
            </div>
          </div>
        </div>

        <SectionDivider />

        {/* Education */}
        <div>
          <h3 className="font-noto-sans text-xs text-gold/60 tracking-[0.2em] uppercase mb-6">Education</h3>
          <div className="space-y-4">
            {[
              {
                institution: 'Hughes Hall, University of Cambridge',
                degree: '',
                period: '2026–',
              },
              {
                institution: 'University of London / Forward College',
                degree: 'Academic Direction: London School of Economics',
                period: '2025–2026',
                detail: 'Lisbon',
              },
              {
                institution: 'Saïd Business School, University of Oxford',
                degree: 'AI & Digital Transformation in Government',
                period: 'Nov 2025 – Jan 2026',
              },
              {
                institution: 'University of Cambridge',
                degree: 'International Summer Programme: Space Weaponisation & British Politics',
                period: 'Jul – Aug 2025',
              },
              {
                institution: 'SOAS University of London',
                degree: 'BSc Social Sciences (Foundation Year)',
                period: '2024–2025',
                detail: 'GPA 3.92',
              },
              {
                institution: 'Sophia University',
                degree: 'BA Philosophy (first year completed)',
                period: '2023–2024',
              },
            ].map((edu, i) => (
              <div key={i} className="bg-parchment/95 rounded-sm p-6 vermillion-bar">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 mb-1">
                  <h4 className="font-noto-sans text-sm font-medium text-ink">{edu.institution}</h4>
                  <span className="font-noto-sans text-xs text-warm-gray shrink-0">{edu.period}</span>
                </div>
                {edu.degree && (
                  <p className="font-noto-sans text-sm text-warm-brown">{edu.degree}</p>
                )}
                {edu.detail && (
                  <p className="font-noto-sans text-xs text-warm-gray mt-1">{edu.detail}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <SectionDivider />

        {/* Skills */}
        <div>
          <h3 className="font-noto-sans text-xs text-gold/60 tracking-[0.2em] uppercase mb-6">Skills</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-parchment/95 rounded-sm p-6 vermillion-bar">
              <h4 className="font-noto-sans text-sm font-medium text-ink mb-3">Research</h4>
              <ul className="space-y-1.5">
                {[
                  'Qualitative analysis',
                  'Codebook design',
                  'Stakeholder interviewing',
                  'Primary-source synthesis',
                  'Briefing memo writing',
                  'Policy analysis',
                  'Public speaking',
                ].map((skill, i) => (
                  <li key={i} className="font-noto-sans text-xs text-warm-brown">{skill}</li>
                ))}
              </ul>
            </div>

            <div className="bg-parchment/95 rounded-sm p-6 vermillion-bar">
              <h4 className="font-noto-sans text-sm font-medium text-ink mb-3">Technical</h4>
              <ul className="space-y-1.5">
                {[
                  'Next.js / React / TypeScript',
                  'D3 / Recharts / Leaflet',
                  'Tailwind CSS',
                  'Python / SQL',
                  'Figma / Adobe XD',
                  'Excel / PowerPoint',
                  'Google Docs',
                ].map((skill, i) => (
                  <li key={i} className="font-noto-sans text-xs text-warm-brown">{skill}</li>
                ))}
              </ul>
            </div>

            <div className="bg-parchment/95 rounded-sm p-6 vermillion-bar">
              <h4 className="font-noto-sans text-sm font-medium text-ink mb-3">Policy / Communication</h4>
              <ul className="space-y-1.5">
                {[
                  'Public speaking',
                  'Moderation',
                  'Workshop / event design',
                  'Stakeholder coordination',
                  'Policy writing',
                ].map((skill, i) => (
                  <li key={i} className="font-noto-sans text-xs text-warm-brown">{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <SectionDivider />

        {/* Languages */}
        <div>
          <h3 className="font-noto-sans text-xs text-gold/60 tracking-[0.2em] uppercase mb-6">Languages</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Japanese', 'English', 'Russian', 'Chinese'].map((lang, i) => (
              <div key={i} className="bg-parchment/95 rounded-sm p-4 text-center vermillion-bar">
                <div className="font-noto-sans text-sm font-medium text-ink">{lang}</div>
              </div>
            ))}
          </div>
        </div>

        <SectionDivider />

        {/* Affiliations */}
        <div>
          <h3 className="font-noto-sans text-xs text-gold/60 tracking-[0.2em] uppercase mb-6">Affiliations</h3>
          <div className="space-y-3">
            {[
              {
                institution: 'Sophia University',
                detail: 'Professor Sakuo Tojo Peacebuilding and International Cooperation Laboratory',
                role: 'Former President; current Alumni Representative',
              },
              {
                institution: 'University of Tokyo',
                detail: 'Professor Makoto Iokibe Yotsuya Reimeikai',
              },
              {
                institution: 'University of Tokyo',
                detail: 'Security Study Group Barracuda',
              },
              {
                institution: 'Waseda University',
                detail: 'Professor Nobuhiko Utsumi Laboratory',
                role: 'Professor Utsumi is also Honorary Professor at the National School of Fine Arts of Peru',
              },
              {
                institution: 'Meiji Gakuin University',
                detail: 'Professor Hiroshi Aoyagi Laboratory',
              },
            ].map((aff, i) => (
              <div key={i} className="bg-parchment/95 rounded-sm p-5 vermillion-bar">
                <h4 className="font-noto-sans text-sm font-medium text-ink">{aff.institution}</h4>
                <p className="font-noto-sans text-xs text-warm-brown mt-1">{aff.detail}</p>
                {aff.role && (
                  <p className="font-noto-sans text-xs text-warm-gray mt-0.5 italic">{aff.role}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <SectionDivider />

        {/* Contact */}
        <div>
          <h3 className="font-noto-sans text-xs text-gold/60 tracking-[0.2em] uppercase mb-6">Contact</h3>
          <div className="bg-parchment/95 rounded-sm p-6 vermillion-bar">
            <div className="space-y-2">
              <a
                href="mailto:risakyng@gmail.com"
                className="block font-noto-sans text-sm text-ink hover:text-vermillion transition-colors"
              >
                risakyng@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/rskyex"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-noto-sans text-sm text-ink hover:text-vermillion transition-colors"
              >
                linkedin.com/in/rskyex
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
