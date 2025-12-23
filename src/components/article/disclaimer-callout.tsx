'use client';

import { AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

export function DisclaimerCallout({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("my-8 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900/50 dark:bg-amber-950/30", className)}>
      <div className="flex items-start gap-3">
        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600 dark:text-amber-500" />
        <div className="text-sm text-amber-900 dark:text-amber-200 [&>p]:mt-0 [&>p]:mb-2 [&>p:last-child]:mb-0">
          {children}
        </div>
      </div>
    </div>
  );
}
