'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
  TrendingUp,
  TrendingDown,
  Activity,
  DollarSign,
  Bitcoin,
  BarChart3,
  RefreshCw,
} from 'lucide-react';
import { cn, formatNumber, formatPercentage } from '@/lib/utils';
import { getMarketQuotes, getStaticMarketData } from '@/lib/market-api';

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
          <span className="text-xs text-muted-foreground" suppressHydrationWarning>
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
export function GlobalMarketSnapshot() {
  const [data, setData] = useState<MarketData[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<string>('');

  const fetchData = async () => {
    setLoading(true);
    try {
      const symbols = ['SPX', 'DJI', 'IXIC', 'BTC', 'USDINR', 'GOLD'];
      const quotes = await getMarketQuotes(symbols);
      
      // Fallback to static data if no quotes received
      if (quotes.size === 0) {
        const staticData = getStaticMarketData();
        const fallbackData: MarketData[] = [
          { name: 'S&P 500', value: staticData.SPX.value, change: staticData.SPX.change, changePercent: staticData.SPX.changePercent, icon: 'trending' as const },
          { name: 'Dow Jones', value: staticData.DJI.value, change: staticData.DJI.change, changePercent: staticData.DJI.changePercent, icon: 'trending' as const },
          { name: 'Nasdaq', value: staticData.IXIC.value, change: staticData.IXIC.change, changePercent: staticData.IXIC.changePercent, icon: 'chart' as const },
          { name: 'Bitcoin', value: staticData.BTC.value, change: staticData.BTC.change, changePercent: staticData.BTC.changePercent, icon: 'bitcoin' as const },
          { name: 'USD/INR', value: staticData.USDINR.value, change: staticData.USDINR.change, changePercent: staticData.USDINR.changePercent, icon: 'dollar' as const },
          { name: 'Gold (₹/10g)', value: staticData.GOLD.value, change: staticData.GOLD.change, changePercent: staticData.GOLD.changePercent, icon: 'chart' as const },
        ];
        setData(fallbackData);
      } else {
        const symbolKeys = ['SPX', 'DJI', 'IXIC', 'BTC', 'USDINR', 'GOLD'];
        const marketData: MarketData[] = symbolKeys.map((key, idx) => {
          const quote = quotes.get(key);
          const names = ['S&P 500', 'Dow Jones', 'Nasdaq', 'Bitcoin', 'USD/INR', 'Gold (₹/10g)'];
          const icons: Array<'trending' | 'bitcoin' | 'dollar' | 'chart'> = ['trending', 'trending', 'chart', 'bitcoin', 'dollar', 'chart'];
          return {
            name: names[idx],
            value: quote?.price || 0,
            change: quote?.change || 0,
            changePercent: quote?.changePercent || 0,
            icon: icons[idx],
          };
        });
        setData(marketData);
      }
      
      setLastUpdated(new Date().toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
      }));
    } catch (error) {
      console.error('Failed to fetch market data:', error);
      // Use static fallback data
      const staticData = getStaticMarketData();
      setData([
        { name: 'S&P 500', value: staticData.SPX.value, change: staticData.SPX.change, changePercent: staticData.SPX.changePercent, icon: 'trending' as const },
        { name: 'Dow Jones', value: staticData.DJI.value, change: staticData.DJI.change, changePercent: staticData.DJI.changePercent, icon: 'trending' as const },
        { name: 'Nasdaq', value: staticData.IXIC.value, change: staticData.IXIC.change, changePercent: staticData.IXIC.changePercent, icon: 'chart' as const },
        { name: 'Bitcoin', value: staticData.BTC.value, change: staticData.BTC.change, changePercent: staticData.BTC.changePercent, icon: 'bitcoin' as const },
        { name: 'USD/INR', value: staticData.USDINR.value, change: staticData.USDINR.change, changePercent: staticData.USDINR.changePercent, icon: 'dollar' as const },
        { name: 'Gold (₹/10g)', value: staticData.GOLD.value, change: staticData.GOLD.change, changePercent: staticData.GOLD.changePercent, icon: 'chart' as const },
      ]);
      setLastUpdated(new Date().toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
      }));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // Refresh every 5 minutes
    const interval = setInterval(fetchData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <MarketSnapshot
        title="Global Markets & Commodities"
        data={data}
        lastUpdated={lastUpdated}
      />
      {loading && (
        <div className="absolute top-4 right-4">
          <RefreshCw className="w-4 h-4 text-muted-foreground animate-spin" />
        </div>
      )}
    </div>
  );
}

export function IndianMarketSnapshot() {
  const [data, setData] = useState<MarketData[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<string>('');

  const fetchData = async () => {
    setLoading(true);
    try {
      const symbols = ['NIFTY50', 'SENSEX', 'BANKNIFTY', 'NIFTYIT'];
      const quotes = await getMarketQuotes(symbols);
      
      if (quotes.size === 0) {
        const staticData = getStaticMarketData();
        const fallbackData: MarketData[] = [
          { name: 'Nifty 50', value: staticData.NIFTY50.value, change: staticData.NIFTY50.change, changePercent: staticData.NIFTY50.changePercent, icon: 'trending' as const },
          { name: 'Sensex', value: staticData.SENSEX.value, change: staticData.SENSEX.change, changePercent: staticData.SENSEX.changePercent, icon: 'trending' as const },
          { name: 'Bank Nifty', value: staticData.BANKNIFTY.value, change: staticData.BANKNIFTY.change, changePercent: staticData.BANKNIFTY.changePercent, icon: 'chart' as const },
          { name: 'Nifty IT', value: staticData.NIFTYIT.value, change: staticData.NIFTYIT.change, changePercent: staticData.NIFTYIT.changePercent, icon: 'chart' as const },
        ];
        setData(fallbackData);
      } else {
        const symbolKeys = ['NIFTY50', 'SENSEX', 'BANKNIFTY', 'NIFTYIT'];
        const marketData: MarketData[] = symbolKeys.map((key, idx) => {
          const quote = quotes.get(key);
          const names = ['Nifty 50', 'Sensex', 'Bank Nifty', 'Nifty IT'];
          const icons: Array<'trending' | 'chart'> = ['trending', 'trending', 'chart', 'chart'];
          return {
            name: names[idx],
            value: quote?.price || 0,
            change: quote?.change || 0,
            changePercent: quote?.changePercent || 0,
            icon: icons[idx],
          };
        });
        setData(marketData);
      }
      
      setLastUpdated(new Date().toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
      }));
    } catch (error) {
      console.error('Failed to fetch market data:', error);
      const staticData = getStaticMarketData();
      setData([
        { name: 'Nifty 50', value: staticData.NIFTY50.value, change: staticData.NIFTY50.change, changePercent: staticData.NIFTY50.changePercent, icon: 'trending' as const },
        { name: 'Sensex', value: staticData.SENSEX.value, change: staticData.SENSEX.change, changePercent: staticData.SENSEX.changePercent, icon: 'trending' as const },
        { name: 'Bank Nifty', value: staticData.BANKNIFTY.value, change: staticData.BANKNIFTY.change, changePercent: staticData.BANKNIFTY.changePercent, icon: 'chart' as const },
        { name: 'Nifty IT', value: staticData.NIFTYIT.value, change: staticData.NIFTYIT.change, changePercent: staticData.NIFTYIT.changePercent, icon: 'chart' as const },
      ]);
      setLastUpdated(new Date().toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
      }));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <MarketSnapshot
        title="Indian Markets"
        data={data}
        lastUpdated={lastUpdated}
      />
      {loading && (
        <div className="absolute top-4 right-4">
          <RefreshCw className="w-4 h-4 text-muted-foreground animate-spin" />
        </div>
      )}
    </div>
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
