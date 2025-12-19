import { MetadataRoute } from 'next';
import { SITE_CONFIG, CATEGORIES } from '@/lib/constants';
import { getAllArticles, getAllCategories } from '@/lib/content';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = getAllArticles();
  const categories = getAllCategories();
  
  // Homepage
  const routes: MetadataRoute.Sitemap = [
    {
      url: SITE_CONFIG.url,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ];
  
  // Category pages
  categories.forEach((category) => {
    routes.push({
      url: `${SITE_CONFIG.url}/${category}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    });
  });
  
  // Article pages
  articles.forEach((article) => {
    const rawDate = article.updatedAt || article.publishedAt;
    let lastModified = new Date(rawDate as string);
    if (isNaN(lastModified.getTime())) {
      // fallback to now if date is invalid or missing
      lastModified = new Date();
    }

    routes.push({
      url: `${SITE_CONFIG.url}/${article.categorySlug}/${article.slug}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.6,
    });
  });
  
  // Static pages
  const staticPages = ['about', 'newsletter', 'glossary'];
  staticPages.forEach((page) => {
    routes.push({
      url: `${SITE_CONFIG.url}/${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    });
  });
  
  return routes;
}
