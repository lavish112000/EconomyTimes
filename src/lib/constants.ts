export const SITE_CONFIG = {
  name: 'FinanceHub',
  description: 'Your trusted source for finance education, market insights, and economic analysis. Expert content for investors, students, and professionals.',
  url: 'https://financehub.com',
  ogImage: '/og-image.jpg',
  author: 'FinanceHub Editorial Team',
  twitterHandle: '@financehub',
  locale: 'en_US',
};

export const CATEGORIES = [
  {
    id: 'economy',
    name: 'Economy & Macroeconomics',
    slug: 'economy',
    description: 'Comprehensive coverage of Indian and global economic trends, GDP, inflation, monetary policy, and fiscal dynamics.',
    icon: 'TrendingUp',
    color: 'emerald',
    featured: true,
  },
  {
    id: 'personal-finance',
    name: 'Personal Finance',
    slug: 'personal-finance',
    description: 'Master budgeting, saving, insurance, loans, and retirement planning for financial independence.',
    icon: 'Wallet',
    color: 'blue',
    featured: true,
  },
  {
    id: 'investing',
    name: 'Investing & Wealth Building',
    slug: 'investing',
    description: 'Learn stock market fundamentals, mutual funds, ETFs, bonds, and long-term wealth creation strategies.',
    icon: 'PieChart',
    color: 'violet',
    featured: true,
  },
  {
    id: 'stock-market',
    name: 'Stock Market & Trading',
    slug: 'stock-market',
    description: 'Technical analysis, trading strategies, IPOs, derivatives, and market psychology explained.',
    icon: 'BarChart3',
    color: 'orange',
    featured: true,
  },
  {
    id: 'banking',
    name: 'Banking & Financial System',
    slug: 'banking',
    description: 'Understanding central banks, commercial banking, digital payments, and financial regulations.',
    icon: 'Building2',
    color: 'slate',
    featured: false,
  },
  {
    id: 'corporate-finance',
    name: 'Corporate Finance & Business',
    slug: 'corporate-finance',
    description: 'Capital raising, financial statements, valuation, M&A, and corporate governance insights.',
    icon: 'Briefcase',
    color: 'amber',
    featured: false,
  },
  {
    id: 'fintech',
    name: 'Crypto, FinTech & Future Finance',
    slug: 'fintech',
    description: 'Cryptocurrency, blockchain, CBDCs, AI in finance, and the future of money.',
    icon: 'Cpu',
    color: 'cyan',
    featured: true,
  },
  {
    id: 'global-finance',
    name: 'Global Finance & Geoeconomics',
    slug: 'global-finance',
    description: 'IMF, World Bank, trade wars, global debt, and international economic dynamics.',
    icon: 'Globe',
    color: 'rose',
    featured: false,
  },
  {
    id: 'news',
    name: 'Finance News & Analysis',
    slug: 'news',
    description: 'Breaking financial news, RBI policy updates, budget analysis, and market event explainers.',
    icon: 'Newspaper',
    color: 'red',
    featured: true,
  },
  {
    id: 'exams',
    name: 'Finance for Competitive Exams',
    slug: 'exams',
    description: 'UPSC, RBI, SEBI exam notes, MCQs, current affairs, and comprehensive study material.',
    icon: 'GraduationCap',
    color: 'indigo',
    featured: false,
  },
  {
    id: 'tools',
    name: 'Financial Calculators & Tools',
    slug: 'tools',
    description: 'SIP calculator, EMI calculator, retirement planner, and other interactive financial tools.',
    icon: 'Calculator',
    color: 'teal',
    featured: true,
  },
] as const;

export const MARKET_INDICES = [
  { name: 'NIFTY 50', value: 24248.35, change: 1.24, region: 'India' },
  { name: 'SENSEX', value: 80845.75, change: 1.18, region: 'India' },
  { name: 'S&P 500', value: 5998.74, change: 0.89, region: 'USA' },
  { name: 'NASDAQ', value: 19926.72, change: 1.45, region: 'USA' },
  { name: 'FTSE 100', value: 8262.08, change: -0.32, region: 'UK' },
  { name: 'NIKKEI 225', value: 39457.49, change: 0.56, region: 'Japan' },
];

export const CURRENCY_RATES = [
  { pair: 'USD/INR', value: 84.85, change: 0.12 },
  { pair: 'EUR/INR', value: 88.42, change: -0.08 },
  { pair: 'GBP/INR', value: 106.25, change: 0.24 },
  { pair: 'EUR/USD', value: 1.042, change: -0.15 },
];

export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'Economy', href: '/economy' },
  { name: 'Personal Finance', href: '/personal-finance' },
  { name: 'Investing', href: '/investing' },
  { name: 'Stock Market', href: '/stock-market' },
  { name: 'News', href: '/news' },
  { name: 'Tools', href: '/tools' },
  { name: 'Exams', href: '/exams' },
];

export const FOOTER_LINKS = {
  categories: [
    { name: 'Economy', href: '/economy' },
    { name: 'Personal Finance', href: '/personal-finance' },
    { name: 'Investing', href: '/investing' },
    { name: 'Stock Market', href: '/stock-market' },
  ],
  resources: [
    { name: 'Glossary', href: '/glossary' },
    { name: 'Calculators', href: '/calculators' },
    { name: 'Market Data', href: '/market-data' },
    { name: 'Newsletter', href: '/newsletter' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Advertise', href: '/advertise' },
    { name: 'Careers', href: '/careers' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Disclaimer', href: '/disclaimer' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
};

export const DISCLAIMER_TEXT = `
The information provided on FinanceHub is for educational and informational purposes only. 
It should not be considered as financial, investment, tax, or legal advice. 
Always consult with qualified professionals before making any financial decisions. 
Past performance is not indicative of future results. Investing involves risks, 
including the possible loss of principal.
`;
