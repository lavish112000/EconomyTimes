import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { EMICalculator } from '@/components/calculators/emi-calculator';

export const metadata: Metadata = {
  title: 'EMI Calculator - Home Loan, Car Loan, Personal Loan Calculator | Free Tool',
  description: 'Free EMI calculator for home loans, car loans, and personal loans. Calculate monthly EMI, total interest, and view complete amortization schedule. Plan your loan repayment today.',
  keywords: ['emi calculator', 'home loan calculator', 'car loan emi', 'loan calculator', 'mortgage calculator india'],
};

export default function EMICalculatorPage() {
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
            EMI Calculator
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Calculate your Equated Monthly Installment (EMI) for home loans, car loans, or personal loans. 
            Get complete amortization schedule and understand total interest payable.
          </p>
        </div>

        {/* Calculator Component */}
        <EMICalculator />

        {/* SEO Content */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-4">Complete Guide to EMI & Loan Planning</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              An <strong>Equated Monthly Installment (EMI)</strong> is a fixed monthly payment you make to a lender to repay a loan. 
              Understanding your EMI before taking a loan is crucial for financial planning—it determines whether you can afford 
              the loan comfortably without stretching your budget.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">How EMI is Calculated</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              EMI calculation uses the reducing balance method with this formula:
            </p>
            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 my-4 font-mono text-sm">
              EMI = P × r × (1 + r)^n / ((1 + r)^n - 1)
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
              Where:<br/>
              <strong>P</strong> = Principal loan amount<br/>
              <strong>r</strong> = Monthly interest rate (annual rate ÷ 12 ÷ 100)<br/>
              <strong>n</strong> = Total number of monthly payments (years × 12)
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Typical Loan Interest Rates in India (2025)</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse my-4">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-900">
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Loan Type</th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Interest Rate</th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Typical Tenure</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Home Loan</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">8.0% - 9.5%</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">15-30 years</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Car Loan</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">9.0% - 11.0%</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">5-7 years</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Personal Loan</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">12.0% - 18.0%</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">1-5 years</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Education Loan</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">9.0% - 13.0%</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">5-15 years</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-3">The 40% EMI Rule</h3>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4 my-4">
              <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Golden Rule of Loan Management</p>
              <p className="text-sm text-blue-900 dark:text-blue-100">
                Your <strong>total EMIs should NOT exceed 40% of your monthly income</strong>. This ensures you have enough 
                for living expenses, emergencies, and savings.<br/><br/>
                <strong>Example:</strong> If your monthly income is ₹80,000:<br/>
                • Maximum safe EMI: ₹32,000 (40%)<br/>
                • Recommended EMI: ₹28,000 (35%) to leave buffer
              </p>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-3">Smart Strategies to Reduce Interest</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 list-disc list-inside">
              <li><strong>Prepayment:</strong> Making lump sum prepayments early saves enormous interest over loan tenure</li>
              <li><strong>Shorter Tenure:</strong> If affordable, opt for 15-year instead of 20-year loan—saves 30% interest</li>
              <li><strong>Balance Transfer:</strong> If rates drop significantly, transfer to cheaper lender</li>
              <li><strong>Increase EMI with Salary Hikes:</strong> 10% annual EMI increase can reduce 20-year loan to 15 years</li>
              <li><strong>Compare Multiple Banks:</strong> 0.5% interest difference = ₹2-3 lakh savings on ₹30L, 20-year loan</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Home Loan: Tax Benefits</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Home loan offers significant tax advantages under the Income Tax Act:
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 list-disc list-inside">
              <li><strong>Section 80C:</strong> Principal repayment deduction up to ₹1.5 lakh</li>
              <li><strong>Section 24(b):</strong> Interest payment deduction up to ₹2 lakh</li>
              <li><strong>Section 80EEA:</strong> Additional ₹1.5 lakh interest deduction for first-time buyers (affordable housing)</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm">
              Total potential deduction: <strong>₹5 lakh per year</strong> (₹1.5L principal + ₹2L interest + ₹1.5L first-time buyer)
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Should You Prepay or Invest?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg">
                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Prepay Loan If:</h4>
                <ul className="text-sm text-green-900 dark:text-green-100 space-y-1">
                  <li>✓ Loan interest rate &gt; 9%</li>
                  <li>✓ You&apos;re risk-averse (peace of mind)</li>
                  <li>✓ You&apos;re in new tax regime (no 80C benefit)</li>
                  <li>✓ Loan tenure remaining &lt; 10 years</li>
                </ul>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg">
                <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Invest Instead If:</h4>
                <ul className="text-sm text-blue-900 dark:text-blue-100 space-y-1">
                  <li>✓ Loan interest rate &lt; 8%</li>
                  <li>✓ You can earn 12%+ in equity funds</li>
                  <li>✓ You get tax benefits (old regime)</li>
                  <li>✓ Loan tenure remaining &gt; 15 years</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-3">Common EMI Mistakes to Avoid</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 list-disc list-inside">
              <li>❌ Stretching budget to buy bigger house/car (EMI stress)</li>
              <li>❌ Not accounting for hidden costs (processing fees, GST, insurance)</li>
              <li>❌ Taking max loan just because bank approved (affordability ≠ approval)</li>
              <li>❌ Ignoring floating rate risk (rate can increase by 1-2% over tenure)</li>
              <li>❌ Not reading fine print (prepayment penalties, foreclosure charges)</li>
            </ul>

            <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-700">
              <p className="text-sm text-amber-900 dark:text-amber-100">
                ⚠️ <strong>Important Disclaimer:</strong> This EMI calculator provides indicative calculations. 
                Actual EMI may vary based on bank policies, credit score, processing fees, and other charges. 
                Always verify exact EMI and terms with your lender before taking a loan. Consider consulting a 
                financial advisor for personalized loan planning advice.
              </p>
            </div>
          </div>
        </div>

        {/* Related Tools */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/tools/sip-calculator"
            className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
          >
            <h3 className="font-semibold text-lg mb-2">SIP Calculator →</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Calculate returns on your mutual fund SIP investments
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
