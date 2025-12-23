import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Search } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Financial Glossary - Key Terms & Definitions',
  description: 'Comprehensive glossary of financial terms, investment terminology, and economic concepts explained in simple language.',
  openGraph: {
    title: 'Financial Glossary | FinanceHub',
    description: 'Learn financial terms and investment concepts with our comprehensive glossary.',
  },
};

const glossaryTerms = [
  {
    letter: 'A',
    terms: [
      { term: 'Asset Allocation', definition: 'The process of dividing investments among different asset categories like stocks, bonds, and cash to balance risk and reward based on goals and risk tolerance.' },
      { term: 'Annual Percentage Rate (APR)', definition: 'The yearly interest rate charged on borrowed money or earned on investments, expressed as a percentage.' },
      { term: 'Asset', definition: 'Anything of value that you own, including cash, investments, property, or other items that can be converted to cash.' },
    ],
  },
  {
    letter: 'B',
    terms: [
      { term: 'Bear Market', definition: 'A market condition where prices fall 20% or more from recent highs, typically accompanied by widespread pessimism.' },
      { term: 'Bull Market', definition: 'A market condition characterized by rising prices and investor optimism, typically with gains of 20% or more.' },
      { term: 'Blue Chip Stock', definition: 'Shares of well-established, financially sound companies with a history of reliable performance and dividend payments.' },
      { term: 'Bond', definition: 'A fixed-income investment where you lend money to an entity (government or corporation) that borrows and pays interest.' },
    ],
  },
  {
    letter: 'C',
    terms: [
      { term: 'Capital Gains', definition: 'Profit from selling an asset for more than its purchase price. Short-term gains (< 1 year) and long-term gains (> 1 year) are taxed differently.' },
      { term: 'CIBIL Score', definition: 'A 3-digit credit score (300-900) indicating creditworthiness in India, calculated by TransUnion CIBIL based on credit history.' },
      { term: 'Compound Interest', definition: 'Interest calculated on the initial principal plus accumulated interest from previous periods, leading to exponential growth.' },
      { term: 'Credit Utilization', definition: 'Percentage of available credit being used. Keeping it below 30% is recommended for a good credit score.' },
    ],
  },
  {
    letter: 'D',
    terms: [
      { term: 'Demat Account', definition: 'An account that holds shares and securities in electronic format in India, eliminating physical share certificates.' },
      { term: 'Diversification', definition: 'Investment strategy of spreading money across various assets to reduce risk exposure to any single investment.' },
      { term: 'Dividend', definition: 'Portion of a company\'s earnings distributed to shareholders, usually quarterly or annually.' },
      { term: 'Dollar Cost Averaging', definition: 'Investment strategy of regularly investing a fixed amount regardless of market conditions, reducing timing risk.' },
    ],
  },
  {
    letter: 'E',
    terms: [
      { term: 'Equity', definition: 'Ownership interest in a company, represented by stocks or shares. Also refers to net worth (assets minus liabilities).' },
      { term: 'Emergency Fund', definition: 'Savings set aside for unexpected expenses or financial emergencies, typically 3-6 months of living expenses.' },
      { term: 'ETF (Exchange Traded Fund)', definition: 'Investment fund that tracks an index and trades on stock exchanges like individual stocks.' },
      { term: 'Expense Ratio', definition: 'Annual fee charged by mutual funds/ETFs, expressed as percentage of assets, covering management and operating costs.' },
    ],
  },
  {
    letter: 'F',
    terms: [
      { term: 'FOMC', definition: 'Federal Open Market Committee - the Fed\'s monetary policymaking body that sets US interest rates.' },
      { term: 'Fiscal Year', definition: 'A 12-month period used for accounting and tax purposes. In India, it runs from April 1 to March 31.' },
      { term: 'Fixed Deposit (FD)', definition: 'Banking product where you deposit money for a fixed period at a predetermined interest rate, commonly used in India.' },
      { term: 'Fundamental Analysis', definition: 'Method of evaluating securities by examining financial statements, management, industry conditions, and economic factors.' },
    ],
  },
  {
    letter: 'G',
    terms: [
      { term: 'GDP (Gross Domestic Product)', definition: 'Total value of all goods and services produced in a country during a specific period, indicating economic health.' },
      { term: 'GST (Goods and Services Tax)', definition: 'Comprehensive indirect tax levied on manufacture, sale, and consumption of goods and services in India.' },
    ],
  },
  {
    letter: 'I',
    terms: [
      { term: 'Inflation', definition: 'Rate at which general price levels rise, reducing purchasing power. In India, measured by CPI and WPI.' },
      { term: 'IPO (Initial Public Offering)', definition: 'Process where a private company offers shares to the public for the first time, becoming publicly traded.' },
      { term: 'Index Fund', definition: 'Mutual fund or ETF designed to track a specific market index like Nifty 50 or Sensex, offering broad market exposure.' },
    ],
  },
  {
    letter: 'L',
    terms: [
      { term: 'Liquidity', definition: 'How quickly an asset can be converted to cash without significantly affecting its price.' },
      { term: 'LTCG (Long Term Capital Gains)', definition: 'Profit from selling assets held for more than specified period. In India, equity LTCG taxed at 12.5% (above ₹1.25L exemption).' },
    ],
  },
  {
    letter: 'M',
    terms: [
      { term: 'Mutual Fund', definition: 'Investment vehicle pooling money from multiple investors to invest in diversified portfolio of stocks, bonds, or other securities.' },
      { term: 'Market Capitalization', definition: 'Total value of a company\'s outstanding shares (share price × number of shares), used to classify companies as large/mid/small cap.' },
      { term: 'Moving Average', definition: 'Technical indicator showing average stock price over specific period, smoothing out price fluctuations to identify trends.' },
    ],
  },
  {
    letter: 'N',
    terms: [
      { term: 'NAV (Net Asset Value)', definition: 'Per-unit value of mutual fund, calculated by dividing total value of assets minus liabilities by number of units.' },
      { term: 'Nifty 50', definition: 'Benchmark stock market index representing 50 largest Indian companies listed on National Stock Exchange (NSE).' },
      { term: 'NPS (National Pension System)', definition: 'Government-sponsored pension scheme in India for retirement savings, offering tax benefits under 80CCD.' },
    ],
  },
  {
    letter: 'P',
    terms: [
      { term: 'P/E Ratio (Price-to-Earnings)', definition: 'Valuation ratio comparing stock price to earnings per share, indicating how much investors pay per rupee of earnings.' },
      { term: 'Portfolio', definition: 'Collection of all your investments including stocks, bonds, mutual funds, and other assets.' },
      { term: 'PPF (Public Provident Fund)', definition: 'Government-backed savings scheme in India with 15-year lock-in, offering tax-free returns and 80C deduction.' },
    ],
  },
  {
    letter: 'Q',
    terms: [
      { term: 'Quantitative Easing (QE)', definition: 'Monetary policy where central bank buys securities to inject money into economy, lowering interest rates and stimulating growth.' },
    ],
  },
  {
    letter: 'R',
    terms: [
      { term: 'Repo Rate', definition: 'Interest rate at which RBI lends money to commercial banks in India. Changes affect loan and deposit rates.' },
      { term: 'Risk Tolerance', definition: 'Your ability and willingness to endure market volatility and potential investment losses in pursuit of returns.' },
      { term: 'ROE (Return on Equity)', definition: 'Financial ratio measuring profitability by dividing net income by shareholder equity, showing how efficiently company uses capital.' },
      { term: 'RSI (Relative Strength Index)', definition: 'Technical momentum indicator (0-100) identifying overbought (>70) or oversold (<30) conditions.' },
    ],
  },
  {
    letter: 'S',
    terms: [
      { term: 'SEBI', definition: 'Securities and Exchange Board of India - regulatory body overseeing securities and commodities markets in India.' },
      { term: 'Sensex', definition: 'Stock market index of 30 largest companies on Bombay Stock Exchange (BSE), oldest index in India since 1978-79.' },
      { term: 'SIP (Systematic Investment Plan)', definition: 'Method of investing fixed amount regularly in mutual funds, enabling rupee cost averaging and disciplined investing.' },
      { term: 'STCG (Short Term Capital Gains)', definition: 'Profit from selling assets held for less than specified period. In India, equity STCG taxed at 20%.' },
    ],
  },
  {
    letter: 'T',
    terms: [
      { term: 'Technical Analysis', definition: 'Method of evaluating securities by analyzing price charts, patterns, and volume data to predict future price movements.' },
      { term: 'Term Insurance', definition: 'Pure life insurance providing death benefit for specific period without investment component, most affordable life cover.' },
      { term: 'TDS (Tax Deducted at Source)', definition: 'Tax collection mechanism in India where payer deducts tax before making payment to recipient.' },
    ],
  },
  {
    letter: 'V',
    terms: [
      { term: 'Volatility', definition: 'Measure of how much and how quickly an investment\'s price fluctuates. Higher volatility means higher risk and potential reward.' },
      { term: 'VWAP', definition: 'Volume Weighted Average Price - trading benchmark showing average price based on both price and volume.' },
    ],
  },
  {
    letter: 'Y',
    terms: [
      { term: 'Yield', definition: 'Income return on investment, expressed as annual percentage. For stocks, dividend yield; for bonds, interest rate.' },
    ],
  },
];

export default function GlossaryPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Glossary', href: '/glossary' },
        ]}
      />
      
      <div className="max-w-5xl mx-auto mt-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Financial Glossary
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your comprehensive guide to financial terms, investment jargon, and economic concepts - explained in simple language.
          </p>
        </div>
        
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for a term..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
        
        {/* Quick Navigation */}
        <div className="mb-12 p-4 bg-muted rounded-lg">
          <div className="text-sm font-medium mb-2 text-center">Quick Navigation:</div>
          <div className="flex flex-wrap justify-center gap-2">
            {glossaryTerms.map(({ letter }) => (
              <a
                key={letter}
                href={`#${letter}`}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-background hover:bg-primary hover:text-primary-foreground transition-colors font-semibold"
              >
                {letter}
              </a>
            ))}
          </div>
        </div>
        
        {/* Glossary Terms */}
        <div className="space-y-12">
          {glossaryTerms.map(({ letter, terms }) => (
            <section key={letter} id={letter}>
              <h2 className="text-3xl font-bold mb-6 pb-2 border-b-2 border-primary inline-block">
                {letter}
              </h2>
              <div className="space-y-6 mt-6">
                {terms.map(({ term, definition }) => (
                  <div key={term} className="group">
                    <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {term}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-border group-hover:border-primary transition-colors">
                      {definition}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
        
        {/* Footer CTA */}
        <div className="mt-16 p-8 bg-linear-to-br from-primary/10 to-emerald-500/10 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-3">Can&apos;t find a term?</h2>
          <p className="text-muted-foreground mb-6">
            We&apos;re constantly expanding our glossary. Let us know what terms you&apos;d like to see defined!
          </p>
          <Link
            href="/about"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </Link>
        </div>
        
        {/* Disclaimer */}
        <div className="mt-12 p-6 border border-border rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> This glossary provides general definitions for educational purposes. 
            Financial terms may have different meanings in different contexts or jurisdictions. For 
            personalized financial advice, please consult a qualified financial advisor.
          </p>
        </div>
      </div>
    </div>
  );
}
