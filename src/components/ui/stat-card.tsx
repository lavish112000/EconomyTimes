'use client';

import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { cn, formatNumber, formatPercentage } from '@/lib/utils';

interface StatCardProps {
  label: string;
  value: string | number;
  change?: number;
  suffix?: string;
  prefix?: string;
  description?: string;
  className?: string;
}

export function StatCard({
  label,
  value,
  change,
  suffix,
  prefix,
  description,
  className,
}: StatCardProps) {
  const getTrendIcon = () => {
    if (change === undefined) return null;
    if (change > 0) return <TrendingUp className="w-4 h-4" />;
    if (change < 0) return <TrendingDown className="w-4 h-4" />;
    return <Minus className="w-4 h-4" />;
  };

  const getTrendColor = () => {
    if (change === undefined) return 'text-muted-foreground';
    if (change > 0) return 'text-finance-emerald-500';
    if (change < 0) return 'text-finance-red-500';
    return 'text-muted-foreground';
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={cn(
        'bg-card border border-border rounded-xl p-5 card-hover',
        className
      )}
    >
      <p className="text-sm text-muted-foreground mb-1">{label}</p>
      <div className="flex items-baseline gap-2">
        <p className="text-2xl font-bold text-foreground">
          {prefix}
          {typeof value === 'number' ? formatNumber(value) : value}
          {suffix}
        </p>
        {change !== undefined && (
          <span className={cn('flex items-center gap-0.5 text-sm font-medium', getTrendColor())}>
            {getTrendIcon()}
            {formatPercentage(change)}
          </span>
        )}
      </div>
      {description && (
        <p className="text-xs text-muted-foreground mt-2">{description}</p>
      )}
    </motion.div>
  );
}

interface MarketWidgetProps {
  indices: Array<{
    name: string;
    value: number;
    change: number;
    region?: string;
  }>;
  className?: string;
}

export function MarketWidget({ indices, className }: MarketWidgetProps) {
  return (
    <div className={cn('bg-card border border-border rounded-xl overflow-hidden', className)}>
      <div className="px-5 py-4 border-b border-border">
        <h3 className="font-semibold text-foreground">Market Snapshot</h3>
        <p className="text-xs text-muted-foreground">Live market data (indicative)</p>
      </div>
      <div className="divide-y divide-border">
        {indices.map((index) => (
          <div
            key={index.name}
            className="px-5 py-3 flex items-center justify-between hover:bg-muted/50 transition-colors"
          >
            <div>
              <p className="font-medium text-foreground">{index.name}</p>
              {index.region && (
                <p className="text-xs text-muted-foreground">{index.region}</p>
              )}
            </div>
            <div className="text-right">
              <p className="font-semibold text-foreground">
                {index.value.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </p>
              <p
                className={cn(
                  'text-sm font-medium flex items-center justify-end gap-1',
                  index.change >= 0 ? 'text-finance-emerald-500' : 'text-finance-red-500'
                )}
              >
                {index.change >= 0 ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <TrendingDown className="w-3 h-3" />
                )}
                {formatPercentage(index.change)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
