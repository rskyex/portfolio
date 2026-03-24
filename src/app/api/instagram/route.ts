import { NextResponse } from 'next/server';

export interface InstagramPost {
  id: string;
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
}

const INSTAGRAM_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;
const CACHE_SECONDS = 3600; // 1 hour

export async function GET() {
  if (!INSTAGRAM_TOKEN) {
    return NextResponse.json({ posts: [], error: 'no_token' }, { status: 200 });
  }

  try {
    const url = new URL('https://graph.instagram.com/me/media');
    url.searchParams.set('fields', 'id,media_type,media_url,thumbnail_url,permalink');
    url.searchParams.set('limit', '9');
    url.searchParams.set('access_token', INSTAGRAM_TOKEN);

    const res = await fetch(url.toString(), { next: { revalidate: CACHE_SECONDS } });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      console.error('Instagram API error:', err);
      return NextResponse.json({ posts: [], error: 'api_error' }, { status: 200 });
    }

    const data = await res.json();
    const posts: InstagramPost[] = (data.data ?? []).map((p: InstagramPost) => ({
      id: p.id,
      media_url: p.media_type === 'VIDEO' ? p.thumbnail_url : p.media_url,
      permalink: p.permalink,
      media_type: p.media_type,
    }));

    return NextResponse.json(
      { posts },
      { headers: { 'Cache-Control': `public, s-maxage=${CACHE_SECONDS}, stale-while-revalidate=86400` } },
    );
  } catch (e) {
    console.error('Instagram fetch failed:', e);
    return NextResponse.json({ posts: [], error: 'fetch_failed' }, { status: 200 });
  }
}
