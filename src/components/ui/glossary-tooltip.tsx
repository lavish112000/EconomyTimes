'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { GLOSSARY_TERMS } from '@/lib/glossary-data';

interface GlossaryTooltipProps {
  term: string;
  definition?: string;
  example?: string;
  learnMoreUrl?: string;
  children?: React.ReactNode;
  className?: string;
}

export function GlossaryTooltip({
  term,
  definition: propDefinition,
  example,
  learnMoreUrl = '/glossary',
  children,
  className,
}: GlossaryTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<'top' | 'bottom'>('bottom');
  const triggerRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  // Find definition if not provided
  let definition = propDefinition;
  if (!definition) {
    const foundTerm = GLOSSARY_TERMS.flatMap(g => g.terms).find(t => t.term.toLowerCase() === term.toLowerCase() || t.term.toLowerCase().includes(term.toLowerCase()));
    if (foundTerm) {
      definition = foundTerm.definition;
    } else {
      definition = "Definition not found.";
    }
  }

  useEffect(() => {
    if (isOpen && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;
      
      // Position tooltip based on available space
      const newPosition = (spaceBelow < 250 && spaceAbove > spaceBelow) ? 'top' : 'bottom';
      
      if (position !== newPosition) {
        setPosition(newPosition);
      }
    }
  }, [isOpen, position]);

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
        {children || term}
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

