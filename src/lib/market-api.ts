// Market Data API Integration with Alpha Vantage + Fallback

interface MarketQuote {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  timestamp: number;
}

interface CachedData {
  data: MarketQuote;
  timestamp: number;
}

// In-memory cache (5 minute TTL)
const cache = new Map<string, CachedData>();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

const ALPHA_VANTAGE_KEY = process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY;

// Symbol mapping for Indian indices
const SYMBOL_MAP: Record<string, { alpha: string; yahoo: string; name: string }> = {
  'NIFTY50': { alpha: '^NSEI', yahoo: '^NSEI', name: 'Nifty 50' },
  'SENSEX': { alpha: '^BSESN', yahoo: '^BSESN', name: 'Sensex' },
  'BANKNIFTY': { alpha: 'NIFTY_BANK.BSE', yahoo: '^NSEBANK', name: 'Bank Nifty' },
  'NIFTYIT': { alpha: 'NIFTY_IT.NSE', yahoo: '^CNXIT', name: 'Nifty IT' },
  'SPX': { alpha: 'SPX', yahoo: '^GSPC', name: 'S&P 500' },
  'DJI': { alpha: 'DJI', yahoo: '^DJI', name: 'Dow Jones' },
  'IXIC': { alpha: 'IXIC', yahoo: '^IXIC', name: 'Nasdaq' },
  'BTC': { alpha: 'BTCUSD', yahoo: 'BTC-USD', name: 'Bitcoin' },
  'USDINR': { alpha: 'USD', yahoo: 'USDINR=X', name: 'USD/INR' },
  'GOLD': { alpha: 'GOLD', yahoo: 'GC=F', name: 'Gold' },
};

/**
 * Fetch quote from Alpha Vantage API
 */
async function fetchFromAlphaVantage(symbol: string): Promise<MarketQuote | null> {
  if (!ALPHA_VANTAGE_KEY || ALPHA_VANTAGE_KEY === 'your_api_key_here') {
    return null;
  }

  try {
    const symbolData = SYMBOL_MAP[symbol];
    if (!symbolData) return null;

    const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbolData.alpha}&apikey=${ALPHA_VANTAGE_KEY}`;
    // Note: Direct client-side fetch to Alpha Vantage often fails due to CORS or rate limits.
    // This is expected, and we will fall back to the internal API.
    const response = await fetch(url); 
    
    if (!response.ok) return null;
    
    const data = await response.json();
    const quote = data['Global Quote'];
    
    if (!quote || !quote['05. price']) return null;

    return {
      symbol,
      price: parseFloat(quote['05. price']),
      change: parseFloat(quote['09. change']),
      changePercent: parseFloat(quote['10. change percent'].replace('%', '')),
      timestamp: Date.now(),
    };
  } catch (error) {
    // Log as warning instead of error since fallback is available
    console.warn(`Alpha Vantage fetch failed for ${symbol} (using fallback):`, error);
    return null;
  }
}

/**
 * Fetch quote from Yahoo Finance (unofficial fallback)
 */
async function fetchFromYahoo(symbol: string): Promise<MarketQuote | null> {
  try {
    const symbolData = SYMBOL_MAP[symbol];
    if (!symbolData) return null;

    // Using a CORS proxy for client-side requests (for demo purposes)
    // In production, use your own backend API route
    const url = `/api/market-data?symbol=${symbolData.yahoo}`;
    const response = await fetch(url);
    
    if (!response.ok) return null;
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Yahoo Finance error for ${symbol}:`, error);
    return null;
  }
}

/**
 * Get cached data if still valid
 */
function getCached(symbol: string): MarketQuote | null {
  const cached = cache.get(symbol);
  if (!cached) return null;
  
  const age = Date.now() - cached.timestamp;
  if (age > CACHE_TTL) {
    cache.delete(symbol);
    return null;
  }
  
  return cached.data;
}

/**
 * Main function to fetch market quote with fallback chain
 */
export async function getMarketQuote(symbol: string): Promise<MarketQuote | null> {
  // Check cache first
  const cached = getCached(symbol);
  if (cached) return cached;

  // Try Alpha Vantage first
  let quote = await fetchFromAlphaVantage(symbol);
  
  // Fallback to Yahoo Finance
  if (!quote) {
    quote = await fetchFromYahoo(symbol);
  }

  // Cache the result
  if (quote) {
    cache.set(symbol, { data: quote, timestamp: Date.now() });
  }

  return quote;
}

/**
 * Fetch multiple quotes in parallel
 */
export async function getMarketQuotes(symbols: string[]): Promise<Map<string, MarketQuote>> {
  const quotes = await Promise.all(symbols.map(s => getMarketQuote(s)));
  const result = new Map<string, MarketQuote>();
  
  symbols.forEach((symbol, index) => {
    const quote = quotes[index];
    if (quote) {
      result.set(symbol, quote);
    }
  });
  
  return result;
}

/**
 * Get static fallback data (used when APIs fail or for development)
 */
export function getStaticMarketData() {
  return {
    NIFTY50: { symbol: 'NIFTY50', value: 22145.70, change: 125.30, changePercent: 0.57, timestamp: Date.now() },
    SENSEX: { symbol: 'SENSEX', value: 73088.33, change: 428.75, changePercent: 0.59, timestamp: Date.now() },
    BANKNIFTY: { symbol: 'BANKNIFTY', value: 47225.15, change: -132.45, changePercent: -0.28, timestamp: Date.now() },
    NIFTYIT: { symbol: 'NIFTYIT', value: 35890.25, change: 245.80, changePercent: 0.69, timestamp: Date.now() },
    SPX: { symbol: 'SPX', value: 4783.45, change: 22.15, changePercent: 0.47, timestamp: Date.now() },
    DJI: { symbol: 'DJI', value: 37305.16, change: 157.06, changePercent: 0.42, timestamp: Date.now() },
    IXIC: { symbol: 'IXIC', value: 14813.92, change: 85.28, changePercent: 0.58, timestamp: Date.now() },
    BTC: { symbol: 'BTC', value: 43250.78, change: -523.45, changePercent: -1.20, timestamp: Date.now() },
    USDINR: { symbol: 'USDINR', value: 83.15, change: 0.05, changePercent: 0.06, timestamp: Date.now() },
    GOLD: { symbol: 'GOLD', value: 62475, change: 125, changePercent: 0.20, timestamp: Date.now() },
  };
}
