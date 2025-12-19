'use client';

import { motion } from 'framer-motion';
import {
  TrendingUp,
  TrendingDown,
  Activity,
  DollarSign,
  Bitcoin,
  BarChart3,
} from 'lucide-react';
import { cn, formatNumber, formatPercentage } from '@/lib/utils';

interface MarketData {
  name: string;
  value: number;
  change: number;
  changePercent: number;
  icon?: 'trending' | 'dollar' | 'bitcoin' | 'chart';
}

interface MarketSnapshotProps {
  title?: string;
  data: MarketData[];
  lastUpdated?: string;
  className?: string;
}

const iconMap = {
  trending: TrendingUp,
  dollar: DollarSign,
  bitcoin: Bitcoin,
  chart: BarChart3,
};

export function MarketSnapshot({
  title = 'Market Snapshot',
  data,
  lastUpdated,
  className,
}: MarketSnapshotProps) {
  return (
    <div className={cn('bg-muted/30 rounded-xl p-6 border border-border', className)}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
        {lastUpdated && (
          <span className="text-xs text-muted-foreground">
            Updated: {lastUpdated}
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data.map((item, index) => {
          const Icon = item.icon ? iconMap[item.icon] : BarChart3;
          const isPositive = item.change >= 0;

          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={cn(
                'bg-card rounded-lg p-4 border',
                'hover:shadow-md transition-all duration-200',
                'group cursor-pointer'
              )}
            >
              <div className="flex items-start justify-between mb-2">
                <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <div
                  className={cn(
                    'flex items-center gap-1 text-xs font-medium',
                    isPositive ? 'text-emerald-500' : 'text-red-500'
                  )}
                >
                  {isPositive ? (
                    <TrendingUp className="w-3 h-3" />
                  ) : (
                    <TrendingDown className="w-3 h-3" />
                  )}
                  {formatPercentage(Math.abs(item.changePercent))}
                </div>
              </div>

              <div className="text-xs text-muted-foreground mb-1 truncate">
                {item.name}
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-lg font-bold">
                  {formatNumber(item.value)}
                </span>
                <span
                  className={cn(
                    'text-xs font-medium',
                    isPositive ? 'text-emerald-500' : 'text-red-500'
                  )}
                >
                  {isPositive ? '+' : ''}
                  {formatNumber(item.change)}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-4 text-xs text-muted-foreground text-center">
        <p>Data is indicative and for educational purposes only. Not real-time.</p>
      </div>
    </div>
  );
}

// Pre-configured market snapshots
export function IndianMarketSnapshot() {
  const data: MarketData[] = [
    {
      name: 'Nifty 50',
      value: 22145.70,
      change: 125.30,
      changePercent: 0.57,
      icon: 'trending',
    },
    {
      name: 'Sensex',
      value: 73088.33,
      change: 428.75,
      changePercent: 0.59,
      icon: 'trending',
    },
    {
      name: 'Bank Nifty',
      value: 47225.15,
      change: -132.45,
      changePercent: -0.28,
      icon: 'chart',
    },
    {
      name: 'Nifty IT',
      value: 35890.25,
      change: 245.80,
      changePercent: 0.69,
      icon: 'chart',
    },
  ];

  return (
    <MarketSnapshot
      title="Indian Markets"
      data={data}
      lastUpdated={new Date().toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
      })}
    />
  );
}

export function GlobalMarketSnapshot() {
  const data: MarketData[] = [
    {
      name: 'S&P 500',
      value: 4783.45,
      change: 22.15,
      changePercent: 0.47,
      icon: 'trending',
    },
    {
      name: 'Dow Jones',
      value: 37305.16,
      change: 157.06,
      changePercent: 0.42,
      icon: 'trending',
    },
    {
      name: 'Nasdaq',
      value: 14813.92,
      change: 85.28,
      changePercent: 0.58,
      icon: 'chart',
    },
    {
      name: 'Bitcoin',
      value: 43250.78,
      change: -523.45,
      changePercent: -1.20,
      icon: 'bitcoin',
    },
    {
      name: 'USD/INR',
      value: 83.15,
      change: 0.05,
      changePercent: 0.06,
      icon: 'dollar',
    },
    {
      name: 'Gold (₹/10g)',
      value: 62475,
      change: 125,
      changePercent: 0.20,
      icon: 'chart',
    },
    {
      name: 'Crude Oil ($)',
      value: 78.45,
      change: -1.25,
      changePercent: -1.57,
      icon: 'chart',
    },
    {
      name: 'FTSE 100',
      value: 7631.15,
      change: 18.45,
      changePercent: 0.24,
      icon: 'trending',
    },
  ];

  return (
    <MarketSnapshot
      title="Global Markets & Commodities"
      data={data}
      lastUpdated={new Date().toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
      })}
    />
  );
}

export function CurrencySnapshot() {
  const data: MarketData[] = [
    {
      name: 'USD/INR',
      value: 83.15,
      change: 0.05,
      changePercent: 0.06,
      icon: 'dollar',
    },
    {
      name: 'EUR/INR',
      value: 90.82,
      change: -0.12,
      changePercent: -0.13,
      icon: 'dollar',
    },
    {
      name: 'GBP/INR',
      value: 105.45,
      change: 0.25,
      changePercent: 0.24,
      icon: 'dollar',
    },
    {
      name: 'JPY/INR',
      value: 0.57,
      change: 0.01,
      changePercent: 1.79,
      icon: 'dollar',
    },
  ];

  return (
    <MarketSnapshot
      title="Currency Exchange Rates"
      data={data}
      lastUpdated={new Date().toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
      })}
    />
  );
}
