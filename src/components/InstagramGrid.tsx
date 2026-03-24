'use client';

import { useEffect, useState } from 'react';

interface Post {
  id: string;
  media_url: string;
  permalink: string;
  media_type: string;
}

const FALLBACK_IMAGES = [
  '/images/art-1.JPG',
  '/images/monster sf.jpg',
  '/images/art-3.jpg',
  '/images/art-8.JPG',
  '/images/art-4.png',
  '/images/art-10.JPG',
  '/images/about gallery-1.jpg',
  '/images/art-9.JPG',
  '/images/monster-sf (1).jpg',
];

export default function InstagramGrid() {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    fetch('/api/instagram')
      .then((res) => res.json())
      .then((data) => {
        if (data.posts && data.posts.length > 0) {
          setPosts(data.posts);
        } else {
          setUseFallback(true);
        }
      })
      .catch(() => setUseFallback(true));
  }, []);

  // Loading state
  if (!posts && !useFallback) {
    return (
      <div className="grid grid-cols-3 gap-1">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="w-full aspect-square bg-shiro/5 animate-pulse" />
        ))}
      </div>
    );
  }

  // Live Instagram posts
  if (posts && posts.length > 0) {
    return (
      <div className="grid grid-cols-3 gap-1">
        {posts.map((post) => (
          <a
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.media_url}
              alt=""
              className="w-full aspect-square object-cover hover:scale-105 hover:opacity-80 transition-all duration-300"
            />
          </a>
        ))}
      </div>
    );
  }

  // Fallback: static images linking to profile
  return (
    <a
      href="https://www.instagram.com/rskyex/"
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="grid grid-cols-3 gap-1">
        {FALLBACK_IMAGES.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={src}
            alt=""
            className="w-full aspect-square object-cover hover:opacity-80 transition-opacity"
          />
        ))}
      </div>
    </a>
  );
}
