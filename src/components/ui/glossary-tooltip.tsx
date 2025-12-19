'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GlossaryTooltipProps {
  term: string;
  definition: string;
  example?: string;
  learnMoreUrl?: string;
  children: React.ReactNode;
  className?: string;
}

export function GlossaryTooltip({
  term,
  definition,
  example,
  learnMoreUrl = '/glossary',
  children,
  className,
}: GlossaryTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<'top' | 'bottom'>('bottom');
  const triggerRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;
      
      // Position tooltip based on available space
      if (spaceBelow < 250 && spaceAbove > spaceBelow) {
        setPosition('top');
      } else {
        setPosition('bottom');
      }
    }
  }, [isOpen]);

  return (
    <span className="relative inline-block">
      <span
        ref={triggerRef}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'cursor-help border-b-2 border-dotted border-primary/50',
          'hover:border-primary transition-colors',
          'text-primary font-medium',
          className
        )}
      >
        {children}
      </span>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={tooltipRef}
            initial={{ opacity: 0, y: position === 'bottom' ? -10 : 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: position === 'bottom' ? -10 : 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={cn(
              'absolute left-1/2 -translate-x-1/2 z-50 w-80 max-w-[90vw]',
              position === 'bottom' ? 'top-full mt-2' : 'bottom-full mb-2'
            )}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <div className="relative bg-popover border border-border rounded-lg shadow-2xl overflow-hidden">
              {/* Arrow */}
              <div
                className={cn(
                  'absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-popover border-border rotate-45',
                  position === 'bottom'
                    ? '-top-1.5 border-t border-l'
                    : '-bottom-1.5 border-b border-r'
                )}
              />

              {/* Content */}
              <div className="relative bg-popover p-4">
                <div className="flex items-start gap-2 mb-2">
                  <BookOpen className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <h4 className="font-bold text-sm text-foreground">{term}</h4>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                  {definition}
                </p>

                {example && (
                  <div className="bg-muted/50 rounded p-2 mb-2">
                    <p className="text-xs text-muted-foreground">
                      <span className="font-semibold">Example:</span> {example}
                    </p>
                  </div>
                )}

                <a
                  href={learnMoreUrl}
                  className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                >
                  Learn more
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}

// Pre-defined glossary terms for common finance concepts
export const GLOSSARY_TERMS = {
  gdp: {
    term: 'GDP (Gross Domestic Product)',
    definition: 'The total monetary value of all finished goods and services produced within a country during a specific time period.',
    example: 'India\'s GDP in 2024 is approximately $3.7 trillion, making it the 5th largest economy.',
  },
  inflation: {
    term: 'Inflation',
    definition: 'The rate at which the general level of prices for goods and services rises, eroding purchasing power.',
    example: 'If inflation is 5%, an item costing ₹100 today will cost ₹105 next year.',
  },
  equity: {
    term: 'Equity',
    definition: 'Ownership interest in a company, typically in the form of stocks or shares.',
    example: 'Buying 100 shares of Reliance Industries means you own a small equity stake in the company.',
  },
  bond: {
    term: 'Bond',
    definition: 'A fixed-income instrument representing a loan made by an investor to a borrower.',
    example: 'A 10-year government bond pays you fixed interest every year and returns your principal at maturity.',
  },
  dividend: {
    term: 'Dividend',
    definition: 'A portion of a company\'s earnings distributed to shareholders.',
    example: 'If a company declares a ₹5 dividend and you own 100 shares, you receive ₹500.',
  },
  pe_ratio: {
    term: 'P/E Ratio',
    definition: 'Price-to-Earnings ratio - a valuation metric comparing stock price to earnings per share.',
    example: 'A stock trading at ₹100 with EPS of ₹5 has a P/E ratio of 20.',
  },
  mutual_fund: {
    term: 'Mutual Fund',
    definition: 'An investment vehicle that pools money from multiple investors to purchase a diversified portfolio.',
    example: 'A mutual fund might invest your ₹10,000 across 50 different stocks and bonds.',
  },
  sip: {
    term: 'SIP (Systematic Investment Plan)',
    definition: 'A method of investing fixed amounts regularly in mutual funds.',
    example: 'Investing ₹5,000 every month in a mutual fund through SIP.',
  },
};
