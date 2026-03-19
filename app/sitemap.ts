import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://nitishpanesar.com/',
      lastModified: new Date(),
    },
  ];
}

