'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useMemo } from 'react';
import {
  TrendingUp,
  ArrowRight,
  BookOpen,
  Target,
  Shield,
  Award,
  ChevronRight,
  Wallet,
  PieChart,
} from 'lucide-react';
import { ArticleCard } from '@/components/ui/article-card';
import { CategoryCard } from '@/components/ui/category-card';
import { MarketWidget } from '@/components/ui/stat-card';
import { GlobalMarketSnapshot } from '@/components/ui/market-snapshot';
import GradientBlinds from '@/components/ui/gradient-blinds';
import { CATEGORIES, MARKET_INDICES, SITE_CONFIG } from '@/lib/constants';

const sampleArticles = [
  {
    slug: 'indian-economy-overview-2025',
    title: 'Indian Economy 2025: A Comprehensive Overview of Growth, Challenges & Opportunities',
    description: 'Deep dive into India\'s economic landscape covering GDP growth, inflation trends, key sectors, and policy initiatives shaping the nation\'s financial future.',
    category: 'Economy & Macroeconomics',
    categorySlug: 'economy',
    publishedAt: '2024-12-15',
    readingTime: 12,
    featured: true,
  },
  {
    slug: 'stock-market-basics-beginners',
    title: 'Stock Market Basics: The Complete Beginner\'s Guide to Investing',
    description: 'Everything you need to know about stock markets, how they work, and how to start your investing journey with confidence.',
    category: 'Investing',
    categorySlug: 'investing',
    publishedAt: '2024-12-14',
    readingTime: 10,
    featured: false,
  },
  {
    slug: 'mutual-funds-explained',
    title: 'Mutual Funds Explained: Types, Benefits, and How to Invest Wisely',
    description: 'A comprehensive guide to understanding mutual funds, different fund categories, and building a diversified portfolio.',
    category: 'Investing',
    categorySlug: 'investing',
    publishedAt: '2024-12-13',
    readingTime: 9,
    featured: false,
  },
  {
    slug: 'personal-finance-planning-guide',
    title: 'Personal Finance Planning: A Step-by-Step Guide to Financial Freedom',
    description: 'Master budgeting, saving, and investing with this comprehensive personal finance roadmap for every life stage.',
    category: 'Personal Finance',
    categorySlug: 'personal-finance',
    publishedAt: '2024-12-12',
    readingTime: 11,
    featured: true,
  },
  {
    slug: 'cryptocurrency-explained',
    title: 'Cryptocurrency Explained: Bitcoin, Blockchain & The Future of Money',
    description: 'Understand the fundamentals of cryptocurrency, blockchain technology, and their impact on the global financial system.',
    category: 'FinTech & Crypto',
    categorySlug: 'fintech',
    publishedAt: '2024-12-11',
    readingTime: 13,
    featured: false,
  },
  {
    slug: 'rbi-monetary-policy-explained',
    title: 'RBI Monetary Policy Explained: How Interest Rates Affect Your Money',
    description: 'Learn how the Reserve Bank of India\'s monetary policy decisions impact inflation, loans, and your financial well-being.',
    category: 'Banking',
    categorySlug: 'banking',
    publishedAt: '2024-12-10',
    readingTime: 8,
    featured: false,
  },
];

const features = [
  {
    icon: BookOpen,
    title: 'Expert Content',
    description: 'In-depth analysis and explanations from finance professionals',
  },
  {
    icon: Target,
    title: 'Data-Driven Insights',
    description: 'Facts and figures from authoritative sources, clearly presented',
  },
  {
    icon: Shield,
    title: 'Trustworthy Information',
    description: 'Verified, unbiased content with clear disclaimers',
  },
  {
    icon: Award,
    title: 'Beginner-Friendly',
    description: 'Complex concepts explained in simple, accessible language',
  },
];

export default function HomePage() {
  // Static article counts to avoid hydration mismatch
  // Update these numbers when adding new articles
  const categoryArticleCounts = useMemo(() => ({
    'economy': 2,
    'personal-finance': 2,
    'investing': 2,
    'banking': 1,
    'stock-market': 1,
    'fintech': 1,
    'corporate-finance': 0,
    'global-finance': 1,
    'news': 0,
    'exams': 0,
    'tools': 2, // SIP + EMI calculators
  }), []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-finance-navy-900 via-finance-navy-800 to-finance-navy-900 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30">
          <GradientBlinds
            gradientColors={['#10b981', '#059669', '#047857', '#064e3b']}
            angle={45}
            noise={0.2}
            blindCount={12}
            blindMinWidth={50}
            spotlightRadius={0.6}
            spotlightSoftness={1.2}
            spotlightOpacity={0.8}
            mouseDampening={0.15}
            distortAmount={0}
            shineDirection="left"
            mixBlendMode="screen"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-finance-navy-900/90 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 lg:px-8 py-20 md:py-28 relative pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl pointer-events-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-finance-emerald-500/20 text-finance-emerald-400 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" />
              Your Financial Education Hub
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Master Your{' '}
              <span className="text-finance-emerald-400">Financial Future</span>
            </h1>
            
            <p className="text-lg md:text-xl text-finance-navy-200 mb-8 max-w-2xl">
              Expert insights on investing, personal finance, economics, and markets. 
              Make informed decisions with data-driven analysis trusted by thousands.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/investing"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-finance-emerald-500 hover:bg-finance-emerald-600 text-white font-semibold rounded-lg transition-colors"
              >
                Start Learning
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/economy"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors backdrop-blur-sm"
              >
                Explore Topics
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pointer-events-auto"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
              <p className="text-3xl font-bold text-finance-emerald-400">50+</p>
              <p className="text-finance-navy-300 text-sm">In-depth Articles</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
              <p className="text-3xl font-bold text-finance-emerald-400">8</p>
              <p className="text-finance-navy-300 text-sm">Finance Categories</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
              <p className="text-3xl font-bold text-finance-emerald-400">10K+</p>
              <p className="text-finance-navy-300 text-sm">Monthly Readers</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
              <p className="text-3xl font-bold text-finance-emerald-400">100%</p>
              <p className="text-finance-navy-300 text-sm">Free Access</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Widget + Featured Content */}
      <section className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <MarketWidget indices={MARKET_INDICES} className="sticky top-24" />
          </div>
          
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-foreground">Featured Articles</h2>
              <Link
                href="/articles"
                className="text-primary hover:text-primary/80 text-sm font-medium flex items-center gap-1"
              >
                View all
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {sampleArticles.slice(0, 4).map((article, index) => (
                <ArticleCard
                  key={article.slug}
                  {...article}
                  featured={index === 0}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Explore Finance Topics
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From personal budgeting to global macroeconomics, find expert content
              across all areas of finance and investing.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CATEGORIES.map((category, index) => (
              <CategoryCard
                key={category.id}
                category={category}
                articleCount={categoryArticleCounts[category.slug as keyof typeof categoryArticleCounts] || 0}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="container mx-auto px-4 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-foreground">Latest Articles</h2>
          <Link
            href="/articles"
            className="text-primary hover:text-primary/80 text-sm font-medium flex items-center gap-1"
          >
            View all articles
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sampleArticles.slice(0, 6).map((article, index) => (
            <ArticleCard key={article.slug} {...article} />
          ))}
        </div>

        {/* Market Snapshot */}
        <GlobalMarketSnapshot />
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-br from-finance-navy-50 to-white dark:from-finance-navy-900 dark:to-finance-navy-950 py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Trust {SITE_CONFIG.name}?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We&apos;re committed to providing accurate, comprehensive, and accessible
              financial education for everyone.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 text-center card-hover"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-finance-navy-900 dark:bg-finance-navy-950 text-white py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Take Control of Your Finances?
            </h2>
            <p className="text-finance-navy-300 mb-8">
              Join thousands of readers who are building their financial knowledge
              with our expert guides and market insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/personal-finance"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-finance-emerald-500 hover:bg-finance-emerald-600 text-white font-semibold rounded-lg transition-colors"
              >
                <Wallet className="w-5 h-5" />
                Personal Finance Guide
              </Link>
              <Link
                href="/investing"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors"
              >
                <PieChart className="w-5 h-5" />
                Investing Basics
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
