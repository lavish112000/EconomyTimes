import React from 'react';

interface ArticleSchemaProps {
  article: {
    title: string;
    description: string;
    publishedAt: string;
    updatedAt?: string;
    author: {
      name: string;
      role?: string;
    };
    category: string;
    tags: string[];
    readingTime?: number;
    featureImage?: string;
  };
  url: string;
}

export function generateArticleSchema({
  article,
  url,
}: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.featureImage || `${url}/og-image.jpg`,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    author: {
      '@type': 'Person',
      name: article.author.name,
      jobTitle: article.author.role || 'Financial Analyst',
    },
    publisher: {
      '@type': 'Organization',
      name: 'FinanceHub',
      logo: {
        '@type': 'ImageObject',
        url: `${url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    articleSection: article.category,
    keywords: article.tags.join(', '),
    timeRequired: article.readingTime ? `PT${article.readingTime}M` : undefined,
    educationalUse: 'Understanding finance and economics',
    isAccessibleForFree: true,
    isPartOf: {
      '@type': 'WebSite',
      name: 'FinanceHub',
      url: url.split('/').slice(0, 3).join('/'),
    },
  };

  return JSON.stringify(schema);
}

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export function generateBreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return JSON.stringify(schema);
}

interface FAQSchemaProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export function generateFAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return JSON.stringify(schema);
}

interface OrganizationSchemaProps {
  name: string;
  url: string;
  logo: string;
  sameAs?: string[];
}

export function generateOrganizationSchema({
  name,
  url,
  logo,
  sameAs = [],
}: OrganizationSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    logo: {
      '@type': 'ImageObject',
      url: logo,
    },
    sameAs,
    description:
      'A world-class finance and economy blogging platform providing trustworthy, authoritative, and data-backed financial education.',
    foundingDate: '2024',
    areaServed: ['IN', 'Worldwide'],
    keywords: 'finance, investing, economy, personal finance, stock market, banking',
  };

  return JSON.stringify(schema);
}

interface WebPageSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}

export function generateWebPageSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
}: WebPageSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    datePublished,
    dateModified,
    inLanguage: 'en-IN',
    isPartOf: {
      '@type': 'WebSite',
      name: 'FinanceHub',
      url: url.split('/').slice(0, 3).join('/'),
    },
  };

  return JSON.stringify(schema);
}

// Helper component to inject schema into page
interface SchemaScriptProps {
  schema: string | string[];
}

export function SchemaScript({ schema }: SchemaScriptProps) {
  const schemas = Array.isArray(schema) ? schema : [schema];

  return (
    <>
      {schemas.map((s, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: s }}
        />
      ))}
    </>
  );
}
