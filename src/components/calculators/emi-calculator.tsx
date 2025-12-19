'use client';

import { useState } from 'react';
import { Calculator, Home, Car, TrendingDown, Calendar, Percent } from 'lucide-react';

interface EMIResult {
  emi: number;
  totalPayment: number;
  totalInterest: number;
  yearlyBreakdown: Array<{
    year: number;
    principalPaid: number;
    interestPaid: number;
    balance: number;
  }>;
}

export function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(2500000); // ₹25 lakh default
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(20);
  const [result, setResult] = useState<EMIResult | null>(null);

  const calculateEMI = () => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 12 / 100;
    const months = loanTenure * 12;

    // EMI Formula: P × r × (1 + r)^n / ((1 + r)^n - 1)
    const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, months) / 
                (Math.pow(1 + monthlyRate, months) - 1);

    const totalPayment = emi * months;
    const totalInterest = totalPayment - principal;

    // Calculate yearly breakdown
    let balance = principal;
    const yearlyBreakdown = [];
    
    for (let year = 1; year <= loanTenure; year++) {
      let yearlyPrincipal = 0;
      let yearlyInterest = 0;
      
      for (let month = 1; month <= 12; month++) {
        const interestForMonth = balance * monthlyRate;
        const principalForMonth = emi - interestForMonth;
        
        yearlyInterest += interestForMonth;
        yearlyPrincipal += principalForMonth;
        balance -= principalForMonth;
      }
      
      yearlyBreakdown.push({
        year,
        principalPaid: Math.round(yearlyPrincipal),
        interestPaid: Math.round(yearlyInterest),
        balance: Math.max(0, Math.round(balance)),
      });
    }

    setResult({
      emi: Math.round(emi),
      totalPayment: Math.round(totalPayment),
      totalInterest: Math.round(totalInterest),
      yearlyBreakdown,
    });
  };

  const getPresetLoan = (type: 'home' | 'car') => {
    if (type === 'home') {
      setLoanAmount(2500000);
      setInterestRate(8.5);
      setLoanTenure(20);
    } else {
      setLoanAmount(800000);
      setInterestRate(10.5);
      setLoanTenure(7);
    }
  };

  return (
    <div className="space-y-6">
      {/* Preset Buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => getPresetLoan('home')}
          className="flex-1 py-3 px-4 bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
        >
          <Home className="w-5 h-5" />
          Home Loan
        </button>
        <button
          onClick={() => getPresetLoan('car')}
          className="flex-1 py-3 px-4 bg-linear-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
        >
          <Car className="w-5 h-5" />
          Car Loan
        </button>
      </div>

      {/* Input Section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Calculator className="w-6 h-6 text-blue-600" />
          Loan Details
        </h3>

        <div className="space-y-6">
          {/* Loan Amount */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Loan Amount (₹)
            </label>
            <input
              type="range"
              min="100000"
              max="10000000"
              step="50000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}              aria-label="Loan Amount"              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              aria-label="Loan Amount (numeric input)"
              className="mt-2 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900"
            />
          </div>

          {/* Interest Rate */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Interest Rate (% per annum)
            </label>
            <input
              type="range"
              min="6"
              max="18"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}              aria-label="Interest Rate Percentage"              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              step="0.1"
              aria-label="Interest Rate Percentage (numeric input)"
              className="mt-2 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900"
            />
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Home loans: 8-9% | Car loans: 9-11% | Personal loans: 12-18%
            </p>
          </div>

          {/* Loan Tenure */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Loan Tenure (Years)
            </label>
            <input
              type="range"
              min="1"
              max="30"
              step="1"
              value={loanTenure}
              onChange={(e) => setLoanTenure(Number(e.target.value))}              aria-label="Loan Tenure in Years"              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <input
              type="number"
              value={loanTenure}
              onChange={(e) => setLoanTenure(Number(e.target.value))}
              aria-label="Loan Tenure in Years (numeric input)"
              className="mt-2 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900"
            />
          </div>

          <button
            onClick={calculateEMI}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
          >
            Calculate EMI
          </button>
        </div>
      </div>

      {/* Results Section */}
      {result && (
        <div className="space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-linear-to-br from-green-500 to-green-600 text-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-green-100">Monthly EMI</span>
                <Calendar className="w-5 h-5 text-green-100" />
              </div>
              <p className="text-3xl font-bold">₹{result.emi.toLocaleString('en-IN')}</p>
              <p className="text-sm text-green-100 mt-2">
                {((result.emi / (loanAmount / 100)) * 100).toFixed(2)}% of loan amount
              </p>
            </div>

            <div className="bg-linear-to-br from-red-500 to-red-600 text-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-red-100">Total Interest</span>
                <Percent className="w-5 h-5 text-red-100" />
              </div>
              <p className="text-3xl font-bold">₹{result.totalInterest.toLocaleString('en-IN')}</p>
              <p className="text-sm text-red-100 mt-2">
                {((result.totalInterest / loanAmount) * 100).toFixed(1)}% of principal
              </p>
            </div>

            <div className="bg-linear-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-purple-100">Total Payment</span>
                <TrendingDown className="w-5 h-5 text-purple-100" />
              </div>
              <p className="text-3xl font-bold">₹{result.totalPayment.toLocaleString('en-IN')}</p>
              <p className="text-sm text-purple-100 mt-2">
                Principal + Interest over {loanTenure} years
              </p>
            </div>
          </div>

          {/* Breakdown Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4">Payment Breakdown</h3>
            <div className="flex gap-4 mb-6">
              <div className="flex-1 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Principal Amount</p>
                <p className="text-2xl font-bold text-blue-600">
                  ₹{loanAmount.toLocaleString('en-IN')}
                </p>
                <div className="mt-2 h-2 bg-blue-200 dark:bg-blue-800 rounded-full">
                  <div
                    className="h-full bg-blue-600 rounded-full"
                    style={{ width: `${(loanAmount / result.totalPayment) * 100}%` }}
                  />
                </div>
              </div>
              <div className="flex-1 bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Interest</p>
                <p className="text-2xl font-bold text-red-600">
                  ₹{result.totalInterest.toLocaleString('en-IN')}
                </p>
                <div className="mt-2 h-2 bg-red-200 dark:bg-red-800 rounded-full">
                  <div
                    className="h-full bg-red-600 rounded-full"
                    style={{ width: `${(result.totalInterest / result.totalPayment) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Yearly Amortization */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4">Amortization Schedule</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-3 px-4">Year</th>
                    <th className="text-right py-3 px-4">Principal Paid</th>
                    <th className="text-right py-3 px-4">Interest Paid</th>
                    <th className="text-right py-3 px-4">Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {result.yearlyBreakdown.map((item) => (
                    <tr key={item.year} className="border-b border-gray-100 dark:border-gray-700/50 hover:bg-gray-50 dark:hover:bg-gray-700/30">
                      <td className="py-3 px-4 font-medium">{item.year}</td>
                      <td className="text-right py-3 px-4 text-green-600 dark:text-green-400">
                        ₹{item.principalPaid.toLocaleString('en-IN')}
                      </td>
                      <td className="text-right py-3 px-4 text-red-600 dark:text-red-400">
                        ₹{item.interestPaid.toLocaleString('en-IN')}
                      </td>
                      <td className="text-right py-3 px-4 font-semibold">
                        ₹{item.balance.toLocaleString('en-IN')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Insights */}
          <div className="bg-linear-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 border border-amber-200 dark:border-amber-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-3 text-amber-900 dark:text-amber-100">💡 EMI Insights</h3>
            <ul className="space-y-2 text-sm text-amber-900 dark:text-amber-100">
              <li>
                ✅ Monthly EMI: <strong>₹{result.emi.toLocaleString('en-IN')}</strong> for {loanTenure} years
              </li>
              <li>
                ⚠️ You&apos;ll pay <strong>₹{result.totalInterest.toLocaleString('en-IN')}</strong> as interest{' '}
                (<strong>{((result.totalInterest / loanAmount) * 100).toFixed(1)}%</strong> of principal)
              </li>
              <li>
                💰 Total repayment: <strong>₹{result.totalPayment.toLocaleString('en-IN')}</strong>
              </li>
              <li>
                ⏰ Breaking even (principal &gt; interest) happens in year{' '}
                <strong>
                  {result.yearlyBreakdown.find(y => y.principalPaid > y.interestPaid)?.year || loanTenure}
                </strong>
              </li>
              <li>
                📊 EMI should be max 35-40% of monthly income for financial safety
              </li>
            </ul>
          </div>

          {/* Prepayment Benefits */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4">💰 Prepayment Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[10000, 25000, 50000].map((prepayment) => {
                const newPrincipal = loanAmount - prepayment;
                const monthlyRate = interestRate / 12 / 100;
                const months = loanTenure * 12;
                const newEMI = newPrincipal * monthlyRate * Math.pow(1 + monthlyRate, months) / 
                              (Math.pow(1 + monthlyRate, months) - 1);
                const saving = (result.emi - newEMI) * months;
                
                return (
                  <div key={prepayment} className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
                    <p className="text-sm font-medium mb-2">
                      ₹{(prepayment / 1000)}k Prepayment
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                      New EMI: ₹{Math.round(newEMI).toLocaleString('en-IN')}
                    </p>
                    <p className="text-lg font-bold text-green-600">
                      Save ₹{Math.round(saving / 1000)}k
                    </p>
                  </div>
                );
              })}
            </div>
            <p className="mt-4 text-xs text-gray-600 dark:text-gray-400">
              💡 Tip: Making lump sum prepayments early in the loan tenure can save significant interest over time.
            </p>
          </div>
        </div>
      )}

      {/* Educational Content */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-semibold mb-4">📚 Understanding EMI</h3>
        <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
          <p>
            <strong>Equated Monthly Installment (EMI)</strong> is a fixed amount you pay every month 
            to repay a loan. It includes both principal and interest components.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">💰 Typical Interest Rates (2025)</h4>
              <ul className="space-y-1 text-xs">
                <li>• Home Loan: 8.0-9.5%</li>
                <li>• Car Loan: 9.0-11.0%</li>
                <li>• Personal Loan: 12.0-18.0%</li>
                <li>• Education Loan: 9.0-13.0%</li>
                <li>• Credit Card: 36-42% (avoid!)</li>
              </ul>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">✅ Smart Loan Tips</h4>
              <ul className="space-y-1 text-xs">
                <li>• Keep EMI &lt; 40% of monthly income</li>
                <li>• Prepay high-interest loans first</li>
                <li>• Compare rates across 3-4 banks</li>
                <li>• Check processing fees &amp; hidden charges</li>
                <li>• Maintain good credit score (750+)</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-lg">
            <p className="text-xs text-amber-900 dark:text-amber-100">
              ⚠️ <strong>Important:</strong> EMI calculations are indicative. Actual EMI may vary based on 
              bank policies, credit score, and other factors. Always verify with your lender before taking a loan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
