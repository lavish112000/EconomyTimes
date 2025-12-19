'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ArticleCard } from '@/components/ui/article-card';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { CATEGORIES } from '@/lib/constants';

// Sample articles for each category
const categoryArticles: Record<string, Array<{
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readingTime: number;
  featured?: boolean;
}>> = {
  economy: [
    {
      slug: 'indian-economy-overview-2025',
      title: 'Indian Economy 2025: A Comprehensive Overview',
      description: 'Deep dive into India\'s economic landscape covering GDP growth, inflation trends, key sectors, and policy initiatives.',
      publishedAt: '2024-12-15',
      readingTime: 12,
      featured: true,
    },
    {
      slug: 'inflation-explained',
      title: 'Inflation Explained: Causes, Types & Impact on Your Money',
      description: 'Understanding how inflation works, its different types, and strategies to protect your purchasing power.',
      publishedAt: '2024-12-14',
      readingTime: 10,
    },
    {
      slug: 'monetary-policy-basics',
      title: 'Monetary Policy Basics: How Central Banks Control the Economy',
      description: 'Learn how RBI and other central banks use monetary policy tools to manage inflation and economic growth.',
      publishedAt: '2024-12-13',
      readingTime: 9,
    },
    {
      slug: 'gdp-explained',
      title: 'GDP Explained: Understanding Economic Growth',
      description: 'A comprehensive guide to Gross Domestic Product, how it\'s calculated, and why it matters.',
      publishedAt: '2024-12-12',
      readingTime: 8,
    },
    {
      slug: 'fiscal-policy-vs-monetary-policy',
      title: 'Fiscal Policy vs Monetary Policy: Key Differences',
      description: 'Compare how governments and central banks use different tools to influence the economy.',
      publishedAt: '2024-12-11',
      readingTime: 11,
    },
  ],
  'personal-finance': [
    {
      slug: 'financial-planning-guide',
      title: 'Complete Financial Planning Guide for 2025',
      description: 'Step-by-step roadmap to achieving financial freedom through smart planning and disciplined execution.',
      publishedAt: '2024-12-15',
      readingTime: 15,
      featured: true,
    },
    {
      slug: 'budgeting-methods',
      title: 'Best Budgeting Methods: 50/30/20, Zero-Based & More',
      description: 'Compare popular budgeting strategies and find the one that works best for your lifestyle.',
      publishedAt: '2024-12-14',
      readingTime: 9,
    },
    {
      slug: 'emergency-fund-guide',
      title: 'Emergency Fund Guide: How Much to Save & Where',
      description: 'Building your financial safety net - the foundation of personal finance security.',
      publishedAt: '2024-12-13',
      readingTime: 8,
    },
    {
      slug: 'credit-score-explained',
      title: 'Credit Score Explained: How to Build & Maintain Good Credit',
      description: 'Everything you need to know about credit scores in India and how to improve yours.',
      publishedAt: '2024-12-12',
      readingTime: 10,
    },
  ],
  investing: [
    {
      slug: 'stock-market-basics',
      title: 'Stock Market Basics: Complete Beginner\'s Guide',
      description: 'Everything you need to know about stock markets, how they work, and how to start investing.',
      publishedAt: '2024-12-15',
      readingTime: 14,
      featured: true,
    },
    {
      slug: 'mutual-funds-explained',
      title: 'Mutual Funds Explained: Types, Benefits & How to Invest',
      description: 'A comprehensive guide to mutual funds for beginners and intermediate investors.',
      publishedAt: '2024-12-14',
      readingTime: 12,
    },
    {
      slug: 'sip-vs-lumpsum',
      title: 'SIP vs Lump Sum: Which Investment Strategy is Better?',
      description: 'Compare systematic investment plans with lump sum investing to make informed decisions.',
      publishedAt: '2024-12-13',
      readingTime: 9,
    },
    {
      slug: 'index-funds-etfs',
      title: 'Index Funds & ETFs: The Smart Way to Invest',
      description: 'Why passive investing through index funds and ETFs is gaining popularity worldwide.',
      publishedAt: '2024-12-12',
      readingTime: 10,
    },
  ],
  'stock-market': [
    {
      slug: 'technical-analysis-basics',
      title: 'Technical Analysis Basics: Charts, Patterns & Indicators',
      description: 'Learn to read stock charts and identify trading opportunities using technical analysis.',
      publishedAt: '2024-12-15',
      readingTime: 13,
      featured: true,
    },
    {
      slug: 'fundamental-analysis-guide',
      title: 'Fundamental Analysis: Evaluating Stocks Like a Pro',
      description: 'How to analyze financial statements and assess a company\'s intrinsic value.',
      publishedAt: '2024-12-14',
      readingTime: 15,
    },
    {
      slug: 'ipo-explained',
      title: 'IPO Explained: How Companies Go Public',
      description: 'Understanding the IPO process and how to evaluate new stock offerings.',
      publishedAt: '2024-12-13',
      readingTime: 11,
    },
  ],
  banking: [
    {
      slug: 'rbi-explained',
      title: 'Reserve Bank of India: Functions, Role & Monetary Policy',
      description: 'Understanding India\'s central bank and how it influences the economy.',
      publishedAt: '2024-12-15',
      readingTime: 12,
      featured: true,
    },
    {
      slug: 'upi-digital-payments',
      title: 'UPI & Digital Payments: India\'s FinTech Revolution',
      description: 'How India became a global leader in digital payments through UPI.',
      publishedAt: '2024-12-14',
      readingTime: 9,
    },
  ],
  'corporate-finance': [
    {
      slug: 'how-companies-raise-capital',
      title: 'How Companies Raise Capital: Equity, Debt & Beyond',
      description: 'Understanding the different ways businesses fund their growth and operations.',
      publishedAt: '2024-12-15',
      readingTime: 11,
      featured: true,
    },
    {
      slug: 'financial-statements-explained',
      title: 'Financial Statements Explained: Balance Sheet, P&L & Cash Flow',
      description: 'Learn to read and interpret the three key financial statements.',
      publishedAt: '2024-12-14',
      readingTime: 14,
    },
  ],
  fintech: [
    {
      slug: 'cryptocurrency-explained',
      title: 'Cryptocurrency Explained: Bitcoin, Blockchain & Digital Assets',
      description: 'A comprehensive introduction to cryptocurrency and blockchain technology.',
      publishedAt: '2024-12-15',
      readingTime: 16,
      featured: true,
    },
    {
      slug: 'cbdc-digital-rupee',
      title: 'CBDC & Digital Rupee: The Future of Money in India',
      description: 'Understanding central bank digital currencies and India\'s Digital Rupee initiative.',
      publishedAt: '2024-12-14',
      readingTime: 10,
    },
  ],
  'global-finance': [
    {
      slug: 'imf-world-bank-explained',
      title: 'IMF & World Bank Explained: Role in Global Economy',
      description: 'Understanding the key international financial institutions and their impact.',
      publishedAt: '2024-12-15',
      readingTime: 12,
      featured: true,
    },
    {
      slug: 'us-fed-global-impact',
      title: 'US Federal Reserve: How Fed Decisions Impact Global Markets',
      description: 'Understanding the global influence of American monetary policy.',
      publishedAt: '2024-12-14',
      readingTime: 11,
    },
  ],
};

export default function CategoryPage({ params }: { params: { category: string } }) {
  const categorySlug = params.category;
  const category = CATEGORIES.find((c) => c.slug === categorySlug);
  const articles = categoryArticles[categorySlug] || [];

  if (!category) {
    return (
      <div className="container mx-auto px-4 lg:px-8 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
        <p className="text-muted-foreground mb-8">The category you&apos;re looking for doesn&apos;t exist.</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    );
  }

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

      {/* Featured Article */}
      {articles.find((a) => a.featured) && (
        <section className="container mx-auto px-4 lg:px-8 py-12">
          <h2 className="text-xl font-bold text-foreground mb-6">Featured</h2>
          <ArticleCard
            {...articles.find((a) => a.featured)!}
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard
              key={article.slug}
              {...article}
              category={category.name}
              categorySlug={category.slug}
            />
          ))}
        </div>
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
