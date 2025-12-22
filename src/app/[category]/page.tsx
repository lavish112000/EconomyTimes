import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import * as motion from 'framer-motion/client';
import { Metadata } from 'next';

import { ArticleCard } from '@/components/ui/article-card';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { CATEGORIES } from '@/lib/constants';
import { getArticlesByCategory } from '@/lib/content';
import { EconomyDashboard } from '@/components/economy/economy-dashboard';
import { EconomicTimeline } from '@/components/economy/economic-timeline';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const categoryData = CATEGORIES.find((c) => c.slug === category);

  if (!categoryData) {
    return {
      title: 'Category Not Found',
    };
  }

  return {
    title: `${categoryData.name} - FinanceHub`,
    description: categoryData.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = CATEGORIES.find((c) => c.slug === categorySlug);
  
  if (!category) {
    notFound();
  }

  const articles = getArticlesByCategory(categorySlug);
  const featuredArticle = articles.find((article) => article.featured) || articles[0];
  const recentArticles = articles.filter((article) => article.slug !== featuredArticle?.slug);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-finance-navy-900 via-finance-navy-800 to-finance-navy-900 text-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumbs
            items={[{ name: category.name, href: `/${category.slug}` }]}
            className="mb-6 text-finance-navy-300"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{category.name}</h1>
            <p className="text-lg text-finance-navy-200 max-w-2xl">
              {category.description}
            </p>
            <div className="flex items-center gap-4 mt-6 text-finance-navy-300">
              <span>{articles.length} articles</span>
              <span>•</span>
              <span>Updated weekly</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Specific Dashboard */}
      {categorySlug === 'economy' && (
        <section className="container mx-auto px-4 lg:px-8 py-8 -mt-8 relative z-10">
          <EconomyDashboard />
          <div className="mt-12">
            <EconomicTimeline />
          </div>
        </section>
      )}

      {/* Featured Article */}
      {featuredArticle && (
        <section className="container mx-auto px-4 lg:px-8 py-12">
          <h2 className="text-xl font-bold text-foreground mb-6">Featured</h2>
          <ArticleCard
            {...featuredArticle}
            category={category.name}
            categorySlug={category.slug}
            featured={true}
            className="md:col-span-2"
          />
        </section>
      )}

      {/* All Articles */}
      <section className="container mx-auto px-4 lg:px-8 py-12">
        <h2 className="text-xl font-bold text-foreground mb-6">All Articles</h2>
        {articles.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentArticles.map((article) => (
              <ArticleCard
                key={article.slug}
                {...article}
                category={category.name}
                categorySlug={category.slug}
              />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">No articles found in this category yet.</p>
        )}
      </section>

      {/* Related Categories */}
      <section className="bg-muted/50 py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-xl font-bold text-foreground mb-6">Explore Other Topics</h2>
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.filter((c) => c.slug !== category.slug).map((c) => (
              <Link
                key={c.slug}
                href={`/${c.slug}`}
                className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
