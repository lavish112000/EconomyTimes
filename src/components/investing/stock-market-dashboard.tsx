'use client';

import { useEffect, useState } from 'react';
import { MarketSnapshot } from '@/components/ui/market-snapshot';
import { getMarketQuotes, getStaticMarketData } from '@/lib/market-api';
import { RefreshCw } from 'lucide-react';

const SYMBOLS_TO_TRACK = ['NIFTY50', 'SENSEX', 'BANKNIFTY', 'SPX', 'DJI', 'IXIC', 'GOLD', 'USDINR'];

export function StockMarketDashboard() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<string>('');

  const transformData = (quotes: Map<string, any> | Record<string, any>) => {
    const source = quotes instanceof Map ? Object.fromEntries(quotes) : quotes;
    return SYMBOLS_TO_TRACK.map(symbol => {
      const q = source[symbol];
      if (!q) return null;
      return {
        name: q.symbol || symbol,
        value: q.price || q.value,
        change: q.change,
        changePercent: q.changePercent,
        icon: 'chart' as const
      };
    }).filter(Boolean) as any[];
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const quotes = await getMarketQuotes(SYMBOLS_TO_TRACK);
      if (quotes && quotes.size > 0) {
        setData(transformData(quotes));
        setLastUpdated(new Date().toLocaleTimeString());
      } else {
        // Fallback to static data if API fails completely
        setData(transformData(getStaticMarketData()));
      }
    } catch (error) {
      console.error('Failed to fetch market data:', error);
      setData(transformData(getStaticMarketData()));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Initial load with static data to avoid layout shift
    setData(transformData(getStaticMarketData()));
    fetchData();
    const interval = setInterval(fetchData, 300000); // 5 minutes
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Market Dashboard</h2>
          <p className="text-muted-foreground">Live updates from major indices</p>
        </div>
        <button 
          onClick={fetchData}
          disabled={loading}
          className="p-2 rounded-full hover:bg-muted transition-colors disabled:opacity-50"
        >
          <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
        </button>
      </div>

      <MarketSnapshot 
        data={data} 
        lastUpdated={lastUpdated}
        className="bg-card"
      />
    </div>
  );
}
