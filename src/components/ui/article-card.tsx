'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, Calendar } from 'lucide-react';
import { cn, formatDate, truncate } from '@/lib/utils';

interface ArticleCardProps {
  slug: string;
  title: string;
  description: string;
  category: string;
  categorySlug: string;
  publishedAt: string;
  readingTime: number;
  featureImage?: string;
  featured?: boolean;
  className?: string;
}

export function ArticleCard({
  slug,
  title,
  description,
  category,
  categorySlug,
  publishedAt,
  readingTime,
  featureImage,
  featured = false,
  className,
}: ArticleCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={cn(
        'group relative bg-card border border-border rounded-xl overflow-hidden card-hover',
        featured && 'md:col-span-2 md:row-span-2',
        className
      )}
    >
      <Link href={`/${categorySlug}/${slug}`} className="block">
        {/* Image */}
        <div
          className={cn(
            'relative overflow-hidden bg-muted',
            featured ? 'h-64 md:h-80' : 'h-48'
          )}
        >
          {featureImage ? (
            <Image
              src={featureImage}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <span className="text-4xl font-bold text-primary/20">
                {title.charAt(0)}
              </span>
            </div>
          )}
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-medium bg-primary text-white rounded-full">
              {category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3
            className={cn(
              'font-bold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2',
              featured ? 'text-xl md:text-2xl' : 'text-lg'
            )}
          >
            {title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {truncate(description, featured ? 200 : 120)}
          </p>

          {/* Meta */}
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {formatDate(publishedAt)}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {readingTime} min read
              </span>
            </div>
            <span className="flex items-center gap-1 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              Read more
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export function ArticleCardSkeleton({ featured = false }: { featured?: boolean }) {
  return (
    <div
      className={cn(
        'bg-card border border-border rounded-xl overflow-hidden',
        featured && 'md:col-span-2 md:row-span-2'
      )}
    >
      <div className={cn('skeleton', featured ? 'h-64 md:h-80' : 'h-48')} />
      <div className="p-5 space-y-3">
        <div className="skeleton h-6 w-3/4" />
        <div className="skeleton h-4 w-full" />
        <div className="skeleton h-4 w-2/3" />
        <div className="flex gap-4 pt-2">
          <div className="skeleton h-4 w-24" />
          <div className="skeleton h-4 w-20" />
        </div>
      </div>
    </div>
  );
}
