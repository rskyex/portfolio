/**
 * Person structured data (schema.org JSON-LD) for the landing page.
 * Rendered on both the EN (/) and JA (/ja) landing pages so search engines
 * and knowledge panels can associate the site with Risa Koyanagi.
 */
export default function PersonJsonLd() {
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Risa Koyanagi',
    alternateName: '小柳璃紗',
    url: 'https://risakoyanagi.com',
    image: 'https://risakoyanagi.com/images/risa-koyanagi-og.png',
    jobTitle: 'Researcher',
    affiliation: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'University of Cambridge',
      },
      {
        '@type': 'Organization',
        name: 'Vienna Center for Disarmament and Non-Proliferation (VCDNP)',
      },
    ],
    award: [
      'Mentee, VCDNP Young Women in Non-Proliferation and Disarmament Mentorship Programme 2026–2027',
      'JAXA International Space Education Board 2026',
    ],
    sameAs: [
      'https://linkedin.com/in/rskyex',
      'https://github.com/rskyex',
      'https://www.instagram.com/rskyex/',
    ],
  };

  return (
    <script
      type="application/ld+json"
      // JSON-LD must be injected as raw text; the object is fully controlled here.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
    />
  );
}
