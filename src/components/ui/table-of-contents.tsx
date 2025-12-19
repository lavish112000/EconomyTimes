'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { TableOfContentsItem } from '@/types';

interface TableOfContentsProps {
  items: TableOfContentsItem[];
  className?: string;
}

export function TableOfContents({ items, className }: TableOfContentsProps) {
  const [activeId, setActiveId] = React.useState<string>('');

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0px -80% 0px',
        threshold: 0,
      }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
      item.children?.forEach((child) => {
        const childElement = document.getElementById(child.id);
        if (childElement) observer.observe(childElement);
      });
    });

    return () => observer.disconnect();
  }, [items]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      setActiveId(id);
    }
  };

  if (items.length === 0) return null;

  return (
    <nav
      className={cn(
        'bg-card border border-border rounded-xl p-5',
        className
      )}
    >
      <h4 className="font-bold text-foreground mb-4">Table of Contents</h4>
      <ul className="space-y-2 text-sm">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={cn(
                'block py-1 transition-colors hover:text-primary',
                activeId === item.id
                  ? 'text-primary font-medium'
                  : 'text-muted-foreground'
              )}
            >
              {item.title}
            </a>
            {item.children && item.children.length > 0 && (
              <ul className="ml-4 mt-1 space-y-1">
                {item.children.map((child) => (
                  <li key={child.id}>
                    <a
                      href={`#${child.id}`}
                      onClick={(e) => handleClick(e, child.id)}
                      className={cn(
                        'block py-1 transition-colors hover:text-primary text-xs',
                        activeId === child.id
                          ? 'text-primary font-medium'
                          : 'text-muted-foreground'
                      )}
                    >
                      {child.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function StickyTableOfContents({ items }: TableOfContentsProps) {
  return (
    <div className="hidden xl:block">
      <div className="sticky top-24">
        <TableOfContents items={items} />
      </div>
    </div>
  );
}
