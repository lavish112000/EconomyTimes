'use client';

import { Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';

export function KeyTakeaways({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("my-8 rounded-xl border border-emerald-100 bg-emerald-50/50 p-6 dark:border-emerald-900/30 dark:bg-emerald-950/20", className)}>
      <div className="mb-4 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400">
          <Lightbulb className="h-4 w-4" />
        </div>
        <h3 className="text-lg font-semibold text-emerald-950 dark:text-emerald-50">Key Takeaways</h3>
      </div>
      <div className="prose-sm prose-emerald dark:prose-invert [&>ul]:my-0 [&>ul>li]:my-1">
        {children}
      </div>
    </div>
  );
}
