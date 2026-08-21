import type { MetadataRoute } from 'next';

const BASE_URL = 'https://risakoyanagi.com';

/** All statically-rendered routes in the app, grouped for clarity. */
const ROUTES: string[] = [
  '/',
  '/ja',
  '/news',
  '/ja/news',
  '/about',
  '/speaking',
  '/fieldwork',
  // Platforms
  '/platforms',
  '/platforms/cyber',
  '/platforms/narrative-drift',
  '/platforms/selftrace',
  '/platforms/ontological-governance-observatory',
  '/platforms/orbital',
  '/platforms/nuclear',
  '/platforms/lunar-mandate-atlas',
  '/platforms/faultline',
  '/platforms/govern-the-human',
  '/platforms/promise',
  // Research
  '/research',
  '/research/lunar',
  '/research/ai-cyber',
  '/research/fukushima',
  '/research/ontological-governance',
  // Projects
  '/projects',
  '/projects/fukushima',
  '/projects/afrecos',
  '/projects/art',
  '/projects/peace',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.map((route) => {
    const entry: MetadataRoute.Sitemap[number] = {
      url: `${BASE_URL}${route === '/' ? '' : route}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: route === '/' ? 1 : 0.7,
    };

    // Mutual language alternates for the two landing pages.
    if (route === '/' || route === '/ja') {
      entry.alternates = {
        languages: {
          en: BASE_URL,
          ja: `${BASE_URL}/ja`,
        },
      };
    }

    // ... and for the two news pages.
    if (route === '/news' || route === '/ja/news') {
      entry.alternates = {
        languages: {
          en: `${BASE_URL}/news`,
          ja: `${BASE_URL}/ja/news`,
        },
      };
    }

    return entry;
  });
}
