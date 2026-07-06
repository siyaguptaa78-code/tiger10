import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tiger365bookie.com';

  const blogPosts = [
    'ipl-betting-tips-2024',
    't20-world-cup-guide',
    'aviator-game-strategy',
    'cricket-id-vs-exchange',
    'safe-betting-tips',
    'upi-betting-deposits',
  ];

  const posts = blogPosts.map((id) => ({
    url: `${baseUrl}/blog/${id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...posts,
  ];
}
