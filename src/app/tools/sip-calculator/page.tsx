import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { SIPCalculator } from '@/components/calculators/sip-calculator';

export const metadata: Metadata = {
  title: 'SIP Calculator - Calculate Mutual Fund Returns | Free Online Tool',
  description: 'Free SIP calculator to calculate returns on your Systematic Investment Plan in mutual funds. See the power of compounding with yearly breakdown. Plan your wealth creation journey today.',
  keywords: ['sip calculator', 'mutual fund calculator', 'sip returns calculator', 'investment calculator', 'systematic investment plan'],
};

export default function SIPCalculatorPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Back Button */}
        <Link
          href="/tools"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to All Tools
        </Link>

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            SIP Calculator
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Calculate the future value of your Systematic Investment Plan (SIP) in mutual funds. 
            See how small monthly investments grow into substantial wealth through the power of compounding.
          </p>
        </div>

        {/* Calculator Component */}
        <SIPCalculator />

        {/* SEO Content */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-4">Understanding SIP & How This Calculator Helps</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A <strong>Systematic Investment Plan (SIP)</strong> is the smartest way to invest in mutual funds. Instead of trying to time the market 
              with lump sum investments, SIP allows you to invest a fixed amount regularly (monthly or quarterly), building wealth systematically over time.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Why SIP is Ideal for Indian Investors</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 list-disc list-inside">
              <li><strong>Rupee Cost Averaging:</strong> You buy more units when prices are low and fewer when high, averaging out your purchase cost</li>
              <li><strong>Power of Compounding:</strong> Returns generate returns, creating exponential wealth growth over decades</li>
              <li><strong>Disciplined Investing:</strong> Automated monthly debit ensures consistent investment habit</li>
              <li><strong>Flexibility:</strong> Start with as low as ₹500/month, increase anytime, pause if needed</li>
              <li><strong>No Market Timing Needed:</strong> SIP works regardless of market ups and downs</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">How to Use This SIP Calculator</h3>
            <ol className="space-y-2 text-gray-700 dark:text-gray-300 list-decimal list-inside">
              <li><strong>Enter Monthly Investment:</strong> How much you plan to invest every month (₹500 to ₹1 lakh)</li>
              <li><strong>Select Expected Return:</strong> Based on fund type—Equity: 12-15%, Hybrid: 9-12%, Debt: 7-9%</li>
              <li><strong>Choose Time Period:</strong> Investment duration in years (longer period = more compounding benefit)</li>
              <li><strong>Click Calculate:</strong> See total corpus, returns earned, and year-by-year growth breakdown</li>
            </ol>

            <h3 className="text-xl font-semibold mt-6 mb-3">Real Example: The Magic of Starting Early</h3>
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-4 my-4">
              <p className="font-semibold text-green-900 dark:text-green-100 mb-2">Case Study: Raj vs Priya</p>
              <p className="text-sm text-green-900 dark:text-green-100">
                <strong>Raj (starts at 25):</strong> ₹5,000/month for 35 years @ 12% = <strong className="text-lg">₹1.76 crore</strong> 
                (invested ₹21 lakh)<br/>
                <strong>Priya (starts at 35):</strong> ₹10,000/month for 25 years @ 12% = <strong className="text-lg">₹1.50 crore</strong> 
                (invested ₹30 lakh)<br/>
                <br/>
                Result: Raj invested ₹9 lakh LESS but got ₹26 lakh MORE by starting just 10 years earlier!
              </p>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-3">Best Practices for SIP Investing</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 list-disc list-inside">
              <li>✅ Start early, even with small amounts (₹1,000-2,000)</li>
              <li>✅ Increase SIP amount by 10% annually with salary hikes</li>
              <li>✅ Stay invested for minimum 7-10 years for equity funds</li>
              <li>✅ Don&apos;t stop SIP during market falls—that&apos;s when you accumulate more units</li>
              <li>✅ Diversify across 3-4 good mutual funds (large cap, mid cap, hybrid)</li>
              <li>❌ Avoid frequent switching between funds</li>
            </ul>

            <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-700">
              <p className="text-sm text-amber-900 dark:text-amber-100">
                ⚠️ <strong>Disclaimer:</strong> The SIP calculator provides estimates based on assumed rate of return. 
                Actual mutual fund returns vary based on market conditions. Past performance doesn&apos;t guarantee future results. 
                Please consult a certified financial advisor before making investment decisions.
              </p>
            </div>
          </div>
        </div>

        {/* Related Tools */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/tools/emi-calculator"
            className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
          >
            <h3 className="font-semibold text-lg mb-2">EMI Calculator →</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Calculate your loan EMI for home, car, or personal loans
            </p>
          </Link>
          <Link
            href="/tools"
            className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
          >
            <h3 className="font-semibold text-lg mb-2">More Calculators →</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Explore retirement, inflation, and tax calculators
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
