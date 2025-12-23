'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Tag } from 'lucide-react';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { ShareButtons } from '@/components/ui/share-buttons';
import { TableOfContents, StickyTableOfContents } from '@/components/ui/table-of-contents';
import { KeyTakeaways, DisclaimerCallout } from '@/components/ui/callout';
import { ArticleCard } from '@/components/ui/article-card';
import { ScrollProgress, BackToTop } from '@/components/ui/scroll-progress';
import { SITE_CONFIG } from '@/lib/constants';
import { formatDate } from '@/lib/utils';
import { generateArticleSchema, SchemaScript } from '@/lib/schema';
import { Article } from '@/types';

interface ArticleContentProps {
  article: Article;
  relatedArticles?: Article[];
  children: React.ReactNode;
}

export function ArticleContent({ article, relatedArticles, children }: ArticleContentProps) {
  const articleUrl = `${SITE_CONFIG.url}/${article.categorySlug}/${article.slug}`;
  const articleSchema = generateArticleSchema({
    article: {
      title: article.title,
      description: article.description,
      publishedAt: article.publishedAt,
      updatedAt: article.updatedAt,
      author: {
        name: article.author.name,
        role: article.author.role,
      },
      category: article.category,
      tags: article.tags,
      readingTime: article.readingTime,
    },
    url: articleUrl,
  });

  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ScrollProgress />
      <BackToTop />

      <article className="min-h-screen">
        {/* Article Header */}
        <header className="bg-linear-to-br from-finance-navy-900 via-finance-navy-800 to-finance-navy-900 text-white py-16 md:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <Breadcrumbs
              items={[
                { name: article.category, href: `/${article.categorySlug}` },
                { name: article.title, href: `/${article.categorySlug}/${article.slug}` },
              ]}
              className="mb-6 text-finance-navy-300"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl"
            >
              <Link
                href={`/${article.categorySlug}`}
                className="inline-flex items-center gap-1 text-finance-emerald-400 text-sm font-medium mb-4 hover:underline"
              >
                {article.category}
              </Link>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                {article.title}
              </h1>

              <p className="text-lg text-finance-navy-200 mb-8">
                {article.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-finance-navy-300">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-finance-navy-700 flex items-center justify-center">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-white">{article.author.name}</p>
                    <p className="text-xs">{article.author.role}</p>
                  </div>
                </div>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {formatDate(article.publishedAt)}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {article.readingTime} min read
                </span>
              </div>
            </motion.div>
          </div>
        </header>

        {/* Article Content */}
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-8">
              {/* Key Takeaways */}
              {article.keyTakeaways && article.keyTakeaways.length > 0 && (
                <KeyTakeaways items={article.keyTakeaways} />
              )}

              {/* Mobile TOC */}
              {article.tableOfContents && article.tableOfContents.length > 0 && (
                <div className="lg:hidden mb-8">
                  <TableOfContents items={article.tableOfContents} />
                </div>
              )}

              {/* Article Body */}
              <div className="article-content prose prose-lg dark:prose-invert max-w-none">
                {children}
              </div>

              {/* Disclaimer */}
              <DisclaimerCallout className="mt-12" />

              {/* Tags */}
              {article.tags && article.tags.length > 0 && (
                <div className="mt-8 flex flex-wrap items-center gap-2">
                  <Tag className="w-4 h-4 text-muted-foreground" />
                  {article.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/tags/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              )}

              {/* Share */}
              <div className="mt-8 pt-8 border-t border-border">
                <ShareButtons
                  url={articleUrl}
                  title={article.title}
                  description={article.description}
                />
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              {article.tableOfContents && article.tableOfContents.length > 0 && (
                <StickyTableOfContents items={article.tableOfContents} />
              )}
            </aside>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles && relatedArticles.length > 0 && (
          <section className="bg-muted/50 py-16">
            <div className="container mx-auto px-4 lg:px-8">
              <h2 className="text-2xl font-bold text-foreground mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedArticles.map((related) => (
                  <ArticleCard key={related.slug} {...related} />
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  );
}
