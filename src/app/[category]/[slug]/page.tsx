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
import { CATEGORIES, SITE_CONFIG } from '@/lib/constants';
import { formatDate } from '@/lib/utils';
import { generateArticleSchema, SchemaScript } from '@/lib/schema';

// Sample article data
const sampleArticle = {
  title: 'Indian Economy 2025: A Comprehensive Overview of Growth, Challenges & Opportunities',
  description: 'Deep dive into India\'s economic landscape covering GDP growth, inflation trends, key sectors, and policy initiatives shaping the nation\'s financial future.',
  publishedAt: '2024-12-15',
  updatedAt: '2024-12-18',
  readingTime: 12,
  author: {
    name: 'FinanceHub Editorial',
    role: 'Finance Research Team',
    avatar: '/images/authors/default.jpg',
  },
  tags: ['Indian Economy', 'GDP', 'Inflation', 'Economic Growth', 'RBI'],
  keyTakeaways: [
    'India\'s GDP is projected to grow at 6.5-7% in FY 2024-25, making it one of the fastest-growing major economies.',
    'Inflation has moderated to 4-5% range, within RBI\'s target band.',
    'Digital transformation and manufacturing push (PLI schemes) are key growth drivers.',
    'Challenges include unemployment, rural distress, and global economic uncertainties.',
    'Government focus on infrastructure development through PM Gati Shakti initiative.',
  ],
  tableOfContents: [
    { id: 'introduction', title: 'Introduction', level: 2 },
    { id: 'gdp-growth', title: 'GDP Growth Trajectory', level: 2, children: [
      { id: 'sector-wise', title: 'Sector-wise Performance', level: 3 },
      { id: 'growth-drivers', title: 'Key Growth Drivers', level: 3 },
    ]},
    { id: 'inflation', title: 'Inflation & Price Stability', level: 2 },
    { id: 'employment', title: 'Employment & Labor Markets', level: 2 },
    { id: 'government-initiatives', title: 'Government Initiatives', level: 2 },
    { id: 'challenges', title: 'Challenges & Risks', level: 2 },
    { id: 'outlook', title: 'Future Outlook', level: 2 },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2 },
  ],
  relatedArticles: [
    {
      slug: 'inflation-explained',
      title: 'Inflation Explained: Causes, Types & Impact',
      description: 'Understanding how inflation works and its impact on your money.',
      category: 'Economy & Macroeconomics',
      categorySlug: 'economy',
      publishedAt: '2024-12-14',
      readingTime: 10,
    },
    {
      slug: 'rbi-monetary-policy',
      title: 'RBI Monetary Policy: How It Affects You',
      description: 'Learn how RBI\'s decisions impact loans, deposits, and investments.',
      category: 'Banking',
      categorySlug: 'banking',
      publishedAt: '2024-12-13',
      readingTime: 9,
    },
    {
      slug: 'gdp-explained',
      title: 'GDP Explained: Understanding Economic Growth',
      description: 'A comprehensive guide to Gross Domestic Product.',
      category: 'Economy & Macroeconomics',
      categorySlug: 'economy',
      publishedAt: '2024-12-12',
      readingTime: 8,
    },
  ],
};

export default function ArticlePage({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const category = CATEGORIES.find((c) => c.slug === params.category);

  if (!category) {
    return (
      <div className="container mx-auto px-4 lg:px-8 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
        <Link href="/" className="text-primary hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  const articleUrl = `${SITE_CONFIG.url}/${params.category}/${params.slug}`;
  const articleSchema = generateArticleSchema({
    article: {
      title: sampleArticle.title,
      description: sampleArticle.description,
      publishedAt: sampleArticle.publishedAt,
      updatedAt: sampleArticle.updatedAt,
      author: {
        name: sampleArticle.author.name,
        role: sampleArticle.author.role,
      },
      category: category.name,
      tags: sampleArticle.tags,
      readingTime: sampleArticle.readingTime,
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
        <header className="bg-linear-to-br from-finance-navy-900 via-finance-navy-800 to-finance-navy-900 text-white py-12 md:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <Breadcrumbs
              items={[
                { name: category.name, href: `/${category.slug}` },
                { name: sampleArticle.title, href: `/${params.category}/${params.slug}` },
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
                href={`/${category.slug}`}
                className="inline-flex items-center gap-1 text-finance-emerald-400 text-sm font-medium mb-4 hover:underline"
              >
                {category.name}
              </Link>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                {sampleArticle.title}
              </h1>

              <p className="text-lg text-finance-navy-200 mb-8">
                {sampleArticle.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-finance-navy-300">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-finance-navy-700 flex items-center justify-center">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-white">{sampleArticle.author.name}</p>
                    <p className="text-xs">{sampleArticle.author.role}</p>
                  </div>
                </div>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {formatDate(sampleArticle.publishedAt)}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {sampleArticle.readingTime} min read
                </span>
              </div>
            </motion.div>
          </div>
        </header>

        {/* Article Content */}
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-8">
              {/* Key Takeaways */}
              <KeyTakeaways items={sampleArticle.keyTakeaways} />

              {/* Mobile TOC */}
              <div className="lg:hidden mb-8">
                <TableOfContents items={sampleArticle.tableOfContents} />
              </div>

              {/* Article Body */}
              <div className="article-content">
                <h2 id="introduction">Introduction</h2>
                <p>
                  India&apos;s economy continues to be one of the brightest spots in the global economic landscape. 
                  As the world&apos;s fifth-largest economy by nominal GDP and third-largest by purchasing power parity (PPP), 
                  India is on track to become a $5 trillion economy in the coming years.
                </p>
                <p>
                  In this comprehensive overview, we analyze the key drivers of India&apos;s economic growth, 
                  examine the challenges that lie ahead, and explore what the future holds for one of the world&apos;s 
                  most dynamic economies.
                </p>

                <h2 id="gdp-growth">GDP Growth Trajectory</h2>
                <p>
                  India&apos;s Gross Domestic Product (GDP) has shown remarkable resilience in the post-pandemic era. 
                  After recovering from the COVID-19 contraction, the economy has maintained a growth rate of 6-7%, 
                  outpacing most major economies globally.
                </p>

                <h3 id="sector-wise">Sector-wise Performance</h3>
                <p>
                  The services sector continues to be the backbone of India&apos;s economy, contributing over 50% to GDP. 
                  Key highlights include:
                </p>
                <ul>
                  <li><strong>Services:</strong> IT services, financial services, and healthcare leading the growth</li>
                  <li><strong>Manufacturing:</strong> Push through PLI schemes showing early results</li>
                  <li><strong>Agriculture:</strong> Remains crucial for rural employment despite lower GDP share</li>
                </ul>

                <h3 id="growth-drivers">Key Growth Drivers</h3>
                <p>
                  Several factors are propelling India&apos;s economic expansion:
                </p>
                <ol>
                  <li>Strong domestic consumption driven by a growing middle class</li>
                  <li>Digital transformation accelerating across all sectors</li>
                  <li>Infrastructure development under PM Gati Shakti</li>
                  <li>Government reforms improving ease of doing business</li>
                  <li>Foreign direct investment (FDI) inflows remaining robust</li>
                </ol>

                <h2 id="inflation">Inflation & Price Stability</h2>
                <p>
                  The Reserve Bank of India (RBI) has been largely successful in maintaining inflation within its 
                  target band of 2-6%. Consumer Price Index (CPI) inflation has moderated from the highs seen in 2022 
                  to more manageable levels.
                </p>
                <blockquote>
                  &quot;Price stability is essential for sustainable economic growth. The RBI remains committed to 
                  anchoring inflation expectations while supporting growth.&quot;
                  <cite>— RBI Monetary Policy Statement</cite>
                </blockquote>

                <h2 id="employment">Employment & Labor Markets</h2>
                <p>
                  Employment generation remains a critical challenge for India. Key observations include:
                </p>
                <ul>
                  <li>Urban unemployment has declined but remains elevated</li>
                  <li>Gig economy and informal sector continue to dominate</li>
                  <li>Skill gaps persist in the labor market</li>
                  <li>Female labor force participation needs improvement</li>
                </ul>

                <h2 id="government-initiatives">Government Initiatives</h2>
                <p>
                  The government has launched several initiatives to boost economic growth:
                </p>
                <table>
                  <thead>
                    <tr>
                      <th>Initiative</th>
                      <th>Focus Area</th>
                      <th>Expected Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>PLI Schemes</td>
                      <td>Manufacturing</td>
                      <td>Boost domestic production</td>
                    </tr>
                    <tr>
                      <td>PM Gati Shakti</td>
                      <td>Infrastructure</td>
                      <td>Integrated development</td>
                    </tr>
                    <tr>
                      <td>Digital India</td>
                      <td>Technology</td>
                      <td>Digital transformation</td>
                    </tr>
                    <tr>
                      <td>Make in India</td>
                      <td>Manufacturing</td>
                      <td>Self-reliance</td>
                    </tr>
                  </tbody>
                </table>

                <h2 id="challenges">Challenges & Risks</h2>
                <p>
                  Despite the positive outlook, India faces several challenges:
                </p>
                <ul>
                  <li><strong>Global headwinds:</strong> Slowdown in major economies affecting exports</li>
                  <li><strong>Fiscal constraints:</strong> Managing fiscal deficit while spending on development</li>
                  <li><strong>Climate change:</strong> Impact on agriculture and extreme weather events</li>
                  <li><strong>Geopolitical tensions:</strong> Global supply chain disruptions</li>
                </ul>

                <h2 id="outlook">Future Outlook</h2>
                <p>
                  India&apos;s economic outlook remains positive with structural tailwinds supporting growth. 
                  Key factors to watch include:
                </p>
                <ul>
                  <li>Continuation of reform momentum</li>
                  <li>Progress on infrastructure projects</li>
                  <li>Global economic conditions</li>
                  <li>Monsoon performance affecting agriculture</li>
                </ul>

                <hr />

                <h2 id="faq">Frequently Asked Questions</h2>
                
                <h3>What is India&apos;s current GDP growth rate?</h3>
                <p>
                  India&apos;s GDP is projected to grow at 6.5-7% in FY 2024-25, making it one of the 
                  fastest-growing major economies in the world.
                </p>

                <h3>What is India&apos;s inflation rate?</h3>
                <p>
                  Consumer Price Index (CPI) inflation in India is currently in the 4-5% range, 
                  within the RBI&apos;s target band of 2-6%.
                </p>

                <h3>Which sectors are driving India&apos;s growth?</h3>
                <p>
                  Services (IT, financial services, healthcare), manufacturing (driven by PLI schemes), 
                  and construction/infrastructure are the key growth drivers.
                </p>

                <h3>What are the main challenges for the Indian economy?</h3>
                <p>
                  Key challenges include unemployment, global economic uncertainty, fiscal constraints, 
                  and climate-related risks to agriculture.
                </p>

                <h3>Is India on track to become a $5 trillion economy?</h3>
                <p>
                  Yes, with sustained growth and favorable exchange rates, India is expected to become 
                  a $5 trillion economy by 2027-28.
                </p>
              </div>

              {/* Disclaimer */}
              <DisclaimerCallout className="mt-12" />

              {/* Tags */}
              <div className="mt-8 flex flex-wrap items-center gap-2">
                <Tag className="w-4 h-4 text-muted-foreground" />
                {sampleArticle.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/tags/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                    className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>

              {/* Share */}
              <div className="mt-8 pt-8 border-t border-border">
                <ShareButtons
                  url={articleUrl}
                  title={sampleArticle.title}
                  description={sampleArticle.description}
                />
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <StickyTableOfContents items={sampleArticle.tableOfContents} />
            </aside>
          </div>
        </div>

        {/* Related Articles */}
        <section className="bg-muted/50 py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {sampleArticle.relatedArticles.map((article) => (
                <ArticleCard key={article.slug} {...article} />
              ))}
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
