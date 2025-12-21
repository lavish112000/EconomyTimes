# Real-Time Market Data Integration

Your finance website now fetches real-time Indian and global market data!

## 🚀 Features Implemented

✅ **Live Market Data** - Nifty 50, Sensex, S&P 500, Bitcoin, USD/INR, Gold
✅ **Auto-refresh** - Updates every 5 minutes automatically  
✅ **Smart Caching** - Reduces API calls, stays within free tier limits
✅ **Fallback System** - Alpha Vantage → Yahoo Finance → Static data
✅ **Loading States** - Spinner animation during data fetch
✅ **Error Handling** - Graceful fallback if APIs fail

## 📋 Setup Instructions

### 1. Get Your Free API Key

Visit: https://www.alphavantage.co/support/#api-key
- Enter your email
- Get instant API key (free tier: 5 calls/min, 500 calls/day)

### 2. Configure Environment Variable

Create `.env.local` in your project root:

```bash
# Copy from the example
cp .env.local.example .env.local
```

Edit `.env.local` and add your key:

```env
NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY=YOUR_ACTUAL_API_KEY_HERE
```

### 3. That's it!

The market widgets will now:
- Try Alpha Vantage first (if key is configured)
- Fallback to Yahoo Finance API via `/api/market-data`
- Show static educational data if both fail

## 🎯 Components Updated

- `GlobalMarketSnapshot` - S&P 500, Dow, Nasdaq, Bitcoin, USD/INR, Gold
- `IndianMarketSnapshot` - Nifty 50, Sensex, Bank Nifty, Nifty IT

Both now fetch live data with 5-minute auto-refresh.

## 🔧 Files Added/Modified

```
src/
├── lib/
│   └── market-api.ts           # API integration logic
├── app/
│   └── api/
│       └── market-data/
│           └── route.ts        # Yahoo Finance proxy endpoint
└── components/
    └── ui/
        └── market-snapshot.tsx # Updated with live data fetching
```

## 💡 API Usage Tips

**Free Tier Limits:**
- Alpha Vantage: 5 calls/min, 500/day
- Our caching: 5 min TTL per symbol
- With 10 symbols + 5min cache = ~96 API calls/day ✅

**To reduce API usage further:**
- Increase cache TTL in `market-api.ts` (CACHE_TTL)
- Decrease refresh interval in market-snapshot components
- Use static data for development

## 🚦 Testing

**Without API key:**
- Falls back to Yahoo Finance → Static data
- Everything works, just shows placeholder values

**With API key:**
- Run `npm run dev`
- Visit homepage
- Watch the loading spinner
- See real market data populate!

## 📊 Extending

To add more markets/symbols:

1. Add symbol to `SYMBOL_MAP` in `market-api.ts`
2. Update component to fetch new symbol
3. Add display card in the grid

Example:
```typescript
'FTSE': { alpha: 'FTSE', yahoo: '^FTSE', name: 'FTSE 100' }
```

---

**Note:** Market data is for educational purposes. Delays of 15-20 minutes are normal with free APIs. For real-time (< 1 second) data, upgrade to premium APIs like Zerodha Kite Connect or Upstox.
