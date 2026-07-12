import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
import SectionHeader from '@/components/SectionHeader';
import SectionDivider from '@/components/SectionDivider';
import PhotoFrame from '@/components/PhotoFrame';



export const metadata = pageMetadata({
  title: 'About',
  description:
    'Risa Koyanagi — Cambridge Future Scholar and researcher working across space, nuclear, cyber, and emerging technology governance.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <SectionHeader kanji="技" english="About" subtitle="Cambridge Future Scholar & Researcher" />

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
              <div className="space-y-4">
                <p className="font-noto-sans text-sm text-kuro-soft/70 leading-relaxed">
                  Koyanagi is a researcher at the <strong className="font-semibold text-kuro-soft">University of Cambridge</strong>, working on the governance of space, nuclear, and cyber systems — with a particular focus on how authority is constructed, how norms break down, and what it takes to rebuild legitimacy after they do.
                </p>
                <p className="font-noto-sans text-sm text-kuro-soft/70 leading-relaxed">
                  As a Cambridge Future Scholar, she conducts supervised research under Prof. Harald Wydra on competing lunar governance frameworks: how universalist language is translated into standards, participation conditions, and interpretive discretion. Her broader research spans dual-use space infrastructure, cross-domain escalation risk, and structural gaps in responsible behaviour norms across AI, space, and cyber governance.
                </p>
                <p className="font-noto-sans text-sm text-kuro-soft/70 leading-relaxed">
                  This work is grounded in six years of field research in post-disaster Fukushima, where she examined how governance failures at the state–operator interface erode public trust and policy legitimacy, conducting semi-structured interviews with evacuees, municipal officials, and TEPCO and METI representatives.
                </p>
                <p className="font-noto-sans text-sm text-kuro-soft/70 leading-relaxed">
                  Her work is forthcoming at the <strong className="font-semibold text-kuro-soft">International Astronautical Congress 2026</strong> (Antalya, Türkiye), with <strong className="font-semibold text-kuro-soft">three accepted papers</strong> across symposia on space security and sustainability, space policy and economics, and space and society — addressing dual-use neutralisation, conditional openness in lunar governance, and mythic naming as soft infrastructure in competing lunar orders.
                </p>
                <p className="font-noto-sans text-sm text-kuro-soft/70 leading-relaxed">
                  Alongside her research at Cambridge, she builds two open research platforms. Faultline operationalises escalation theory and attribution frameworks for researchers and policy professionals, through tools including the Orbital Risk Tracker, Global Nuclear Infrastructure Atlas, and Cyber Escalation Atlas. Govern the Human examines a second-order problem: how sustained AI interaction transforms the human subject meant to govern, consent, and deliberate.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                <Link href="/research" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-kuro-soft/80 border border-kin/40 font-noto-sans text-xs text-kin tracking-widest uppercase font-medium hover:bg-tsubaki-rose/20 hover:border-tsubaki-rose/60 hover:text-tsubaki-blush transition-all">
                  View Research
                </Link>
                <Link href="/platforms" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-kuro-soft/80 border border-kin/40 font-noto-sans text-xs text-kin tracking-widest uppercase font-medium hover:bg-tsubaki-rose/20 hover:border-tsubaki-rose/60 hover:text-tsubaki-blush transition-all">
                  View Platforms
                </Link>
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
              { institution: 'Hughes Hall, University of Cambridge', degree: 'BA Human, Social, and Political Sciences', period: 'October 2026' },
              { institution: 'London School of Economics (University of London)', degree: 'BSc Politics and International Relations', period: '2025–2026' },
              { institution: 'Saïd Business School, University of Oxford', degree: 'AI and Digital Transformation in Government', period: 'Nov 2025 – Jan 2026', detail: 'Certificate' },
              { institution: 'SOAS University of London', degree: 'BSc Social Sciences (Foundation Year)', period: '2024–2025', detail: 'First Class' },
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

        {/* Certifications */}
        <div>
          <h3 className="font-noto-sans text-xs text-kin tracking-[0.25em] uppercase mb-6 font-semibold">Certifications</h3>
          <div className="space-y-4">
            {[
              { name: 'Microsoft Generative AI for Data Analysis', type: 'Professional Certificate' },
              { name: 'Google Cybersecurity Specialization', type: 'Certificate' },
            ].map((cert, i) => (
              <div key={i} className="card-washi card-washi-about p-6 relative overflow-hidden">
                <div className="glow-bar absolute left-0 top-0 bottom-0" />
                <div className="pl-4">
                  <h4 className="font-noto-sans text-sm font-semibold text-kuro-soft">{cert.name}</h4>
                  <p className="font-noto-sans text-xs text-kuro-soft/45 mt-1">{cert.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <SectionDivider />


        {/* Skills */}
        <div>
          <h3 className="font-noto-sans text-xs text-kin tracking-[0.25em] uppercase mb-6 font-semibold">Skills</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="card-washi card-washi-about p-6 relative overflow-hidden">
              <div className="glow-bar absolute left-0 top-0 bottom-0" />
              <div className="pl-4">
                <h4 className="font-noto-sans text-sm font-bold text-kuro-soft mb-4">Research</h4>
                <div className="space-y-3">
                  <p className="font-noto-sans text-xs text-kuro-soft/60 leading-relaxed">
                    Legitimation, dual-use systems, authority architecture, strategic risk, space governance, nuclear governance, emerging technology governance, infrastructure politics.
                  </p>
                  <p className="font-noto-sans text-xs text-kuro-soft/60 leading-relaxed">
                    Discourse and narrative analysis, qualitative coding, comparative political research, interpretive methods, policy framing, symbolic and mythic analysis, and research-to-interface translation.
                  </p>
                </div>
              </div>
            </div>
            <div className="card-washi card-washi-about p-6 relative overflow-hidden">
              <div className="glow-bar absolute left-0 top-0 bottom-0" />
              <div className="pl-4">
                <h4 className="font-noto-sans text-sm font-bold text-kuro-soft mb-4">Policy / Communication</h4>
                <div className="space-y-3">
                  <p className="font-noto-sans text-xs text-kuro-soft/60 leading-relaxed">
                    Policy analysis, strategic writing, briefing development, narrative framing, stakeholder engagement, cross-sector communication.
                  </p>
                  <p className="font-noto-sans text-xs text-kuro-soft/60 leading-relaxed">
                    Public speaking, moderation, workshop and event design, interdisciplinary collaboration, knowledge synthesis, and public-facing translation of complex political and technological issues.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical & Computational Methods */}
          <div className="card-washi card-washi-about p-6 relative overflow-hidden">
            <div className="glow-bar absolute left-0 top-0 bottom-0" />
            <div className="pl-4">
              <h4 className="font-noto-sans text-sm font-bold text-kuro-soft mb-4">Technical &amp; Computational Methods</h4>
              <div className="space-y-3">
                <p className="font-noto-sans text-xs text-kuro-soft/60 leading-relaxed">
                  Platform architecture, public-facing research tool prototyping, AI workflow design, prompt engineering, OpenAI API-based feature design, Supabase-based data structuring, SQL, analytics instrumentation, event logging design, dashboard planning.
                </p>
                <p className="font-noto-sans text-xs text-kuro-soft/60 leading-relaxed">
                  Information architecture, user-flow design, UI/UX direction, qualitative coding, discourse and narrative analysis workflows, stakeholder mapping.
                </p>
                <p className="font-noto-sans text-xs text-kuro-soft/60 leading-relaxed">
                  Policy and infrastructure data organisation, behavioural research design, and research-to-interface translation.
                </p>
              </div>
            </div>
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

        {/* Roles & Leadership */}
        <div>
          <h3 className="font-noto-sans text-xs text-kin tracking-[0.25em] uppercase mb-6 font-semibold">Roles &amp; Leadership</h3>
          <div className="card-washi card-washi-about p-6 relative overflow-hidden">
            <div className="glow-bar absolute left-0 top-0 bottom-0" />
            <div className="pl-4">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 mb-1">
                <h4 className="font-noto-sans text-sm font-semibold text-kuro-soft">Space Generation Advisory Council</h4>
                <span className="font-noto-sans text-xs text-kuro-soft/50 shrink-0 font-medium">Japan</span>
              </div>
              <p className="font-noto-sans text-sm text-kuro-soft/65">Space Policy Project Team Leader</p>
              <p className="font-noto-sans text-xs text-kuro-soft/60 mt-1 leading-relaxed">
                Leading the Japan team within SGAC&apos;s Space Policy project — convening early-career researchers and policy contributors around space governance, dual-use systems, and norm formation in emerging space orders.
              </p>
            </div>
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
              { title: 'Selected, JAXA International Space Education Board 2026', detail: 'Chosen to serve on the Japan Aerospace Exploration Agency\'s International Space Education Board for 2026' },
              { title: '2nd Prize, GEIL Policy Contest — Tokyo Earthquake Response', detail: 'Led a team of four in crafting a policy to boost Tokyo\'s earthquake resilience, proposing "Transferable Development Rights Plus" to incentivise redevelopment, reduce wooden structures, and widen streets' },
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

        {/* Arts Background */}
        <div>
          <h3 className="font-noto-sans text-xs text-kin tracking-[0.25em] uppercase mb-6 font-semibold">Arts Background</h3>
          <div className="card-washi card-washi-about p-6 relative overflow-hidden">
            <div className="glow-bar absolute left-0 top-0 bottom-0" />
            <div className="pl-4 space-y-4">
              <p className="font-noto-sans text-sm text-kuro-soft/70 leading-relaxed">
                Her artistic practice — spanning music performance, visual art, and poetry — is documented through MYTHERA, her interpretive research studio.
              </p>
              <p className="font-noto-sans text-sm text-kuro-soft/70 leading-relaxed">
                Koyanagi trained in piano with Noriko Amano, Shadow Box with Ineke de Bruijn, and oil painting under Yukiko Hamano. She received an Excellence Award for poetry in 2011 and appeared as a child actor in Maribor National Opera&apos;s &ldquo;Carmen.&rdquo; As a teenager, she won the Excellence Award in the JYOJI-ROCK U-16 contest. Her art studies with Nobuhiko Utsumi led to a group exhibition. She has been selected for the Monster Exhibition and featured in Al-Tiba9 Contemporary Art Magazine.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <Link href="/platforms/mythera" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-kuro-soft/80 border border-kin/40 font-noto-sans text-xs text-kin tracking-widest uppercase font-medium hover:bg-tsubaki-rose/20 hover:border-tsubaki-rose/60 hover:text-tsubaki-blush transition-all">
                  MYTHERA
                </Link>
                <Link href="/projects/art" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-kuro-soft/80 border border-kin/40 font-noto-sans text-xs text-kin tracking-widest uppercase font-medium hover:bg-tsubaki-rose/20 hover:border-tsubaki-rose/60 hover:text-tsubaki-blush transition-all">
                  Art Practice
                </Link>
              </div>
            </div>
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
        </div>

        <SectionDivider />

        {/* Connect */}
        <div>
          <h3 className="font-noto-sans text-xs text-kin tracking-[0.25em] uppercase mb-6 font-semibold">Connect</h3>
          <PhotoFrame
            src="/images/about-gallery-1.jpg"
            alt="Gallery"
            width={600}
            height={400}
            className="w-full max-w-md h-auto mb-5"
          />
          <div className="flex flex-wrap items-center gap-2">
            <a href="https://www.instagram.com/rskyex/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-2 rounded-sm bg-kuro-soft/80 border border-kin/40 font-noto-sans text-xs text-kin hover:bg-tsubaki-rose/20 hover:border-tsubaki-rose/60 hover:text-tsubaki-blush transition-all font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              @rskyex
            </a>
            <a href="https://linkedin.com/in/rskyex" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-2 rounded-sm bg-kuro-soft/80 border border-kin/40 font-noto-sans text-xs text-kin hover:bg-tsubaki-rose/20 hover:border-tsubaki-rose/60 hover:text-tsubaki-blush transition-all font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <a href="mailto:risakyng@gmail.com" className="inline-flex items-center gap-1.5 px-3 py-2 rounded-sm bg-kuro-soft/80 border border-kin/40 font-noto-sans text-xs text-kin hover:bg-tsubaki-rose/20 hover:border-tsubaki-rose/60 hover:text-tsubaki-blush transition-all font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
