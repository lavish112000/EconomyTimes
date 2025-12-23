import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getArticle, getArticlesByCategory } from '@/lib/content';
import { ArticleContent } from '@/components/article/article-content';
import { SITE_CONFIG } from '@/lib/constants';
import { Article } from '@/types';

// MDX Components
import { ArticleCard } from '@/components/ui/article-card';
import { Callout } from '@/components/ui/callout';
import { ComparisonTable } from '@/components/investing/comparison-table';
import { MarketSnapshot } from '@/components/ui/market-snapshot';

const components = {
  ArticleCard,
  Callout,
  ComparisonTable,
  MarketSnapshot,
  // Add other components used in MDX here
};

interface ArticlePageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const article = getArticle(category, slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author.name],
      tags: article.tags,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { category, slug } = await params;
  const article = getArticle(category, slug);

  if (!article) {
    notFound();
  }

  // Fetch related articles
  let relatedArticles: Article[] = [];
  if (article.relatedArticles && article.relatedArticles.length > 0) {
    const categoryArticles = getArticlesByCategory(category);
    relatedArticles = categoryArticles.filter(a => article.relatedArticles?.includes(a.slug));
  }

  return (
    <ArticleContent article={article} relatedArticles={relatedArticles}>
      <MDXRemote source={article.content} components={components} />
    </ArticleContent>
  );
}
