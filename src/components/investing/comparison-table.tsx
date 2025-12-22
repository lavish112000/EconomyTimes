'use client';

import { Check, X, Minus } from 'lucide-react';

const comparisonData = [
  {
    feature: 'Management Style',
    active: 'Fund Manager decides stocks',
    passive: 'Tracks an index (Nifty 50)',
  },
  {
    feature: 'Expense Ratio',
    active: 'High (1.5% - 2.5%)',
    passive: 'Low (0.1% - 0.5%)',
  },
  {
    feature: 'Returns Potential',
    active: 'Can beat the market',
    passive: 'Matches market returns',
  },
  {
    feature: 'Risk',
    active: 'Fund Manager Risk',
    passive: 'Market Risk Only',
  },
  {
    feature: 'Ideal For',
    active: 'Aggressive Investors',
    passive: 'Long-term Wealth Builders',
  },
];

export function ComparisonTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card">
      <div className="p-6 border-b border-border">
        <h3 className="text-lg font-bold">Active vs Passive Investing</h3>
        <p className="text-sm text-muted-foreground">Understanding the key differences</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-muted/50 text-muted-foreground uppercase">
            <tr>
              <th className="px-6 py-4 font-medium">Feature</th>
              <th className="px-6 py-4 font-medium text-primary">Active Funds</th>
              <th className="px-6 py-4 font-medium text-blue-500">Index Funds (Passive)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {comparisonData.map((row, index) => (
              <tr key={index} className="hover:bg-muted/30 transition-colors">
                <td className="px-6 py-4 font-medium">{row.feature}</td>
                <td className="px-6 py-4">{row.active}</td>
                <td className="px-6 py-4">{row.passive}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
