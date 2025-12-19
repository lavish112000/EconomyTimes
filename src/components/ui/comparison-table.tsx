'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, MinusCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ComparisonColumn {
  header: string;
  description?: string;
  color?: 'primary' | 'success' | 'warning' | 'info';
}

interface ComparisonRow {
  feature: string;
  values: (string | boolean | number | null)[];
  highlight?: boolean;
}

interface ComparisonTableProps {
  title?: string;
  description?: string;
  columns: ComparisonColumn[];
  rows: ComparisonRow[];
  className?: string;
}

const colorClasses = {
  primary: 'bg-primary/10 text-primary border-primary/20',
  success: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
  warning: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
  info: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
};

export function ComparisonTable({
  title,
  description,
  columns,
  rows,
  className,
}: ComparisonTableProps) {
  const renderValue = (value: string | boolean | number | null) => {
    if (typeof value === 'boolean') {
      return value ? (
        <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" />
      ) : (
        <XCircle className="w-5 h-5 text-red-500 mx-auto" />
      );
    }
    
    if (value === null) {
      return <MinusCircle className="w-5 h-5 text-muted-foreground mx-auto" />;
    }
    
    return <span>{value}</span>;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn('my-8', className)}
    >
      {title && (
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          {description && (
            <p className="text-muted-foreground">{description}</p>
          )}
        </div>
      )}

      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="p-4 text-left font-semibold">Feature</th>
              {columns.map((col, idx) => (
                <th
                  key={idx}
                  className={cn(
                    'p-4 text-center font-semibold border-l border-border',
                    col.color && colorClasses[col.color]
                  )}
                >
                  <div>
                    <div className="font-bold text-lg">{col.header}</div>
                    {col.description && (
                      <div className="text-xs font-normal mt-1 opacity-80">
                        {col.description}
                      </div>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIdx) => (
              <motion.tr
                key={rowIdx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: rowIdx * 0.05 }}
                className={cn(
                  'border-b border-border transition-colors hover:bg-muted/30',
                  row.highlight && 'bg-primary/5'
                )}
              >
                <td className={cn(
                  'p-4 font-medium',
                  row.highlight && 'text-primary'
                )}>
                  {row.feature}
                </td>
                {row.values.map((value, valIdx) => (
                  <td
                    key={valIdx}
                    className="p-4 text-center border-l border-border"
                  >
                    {renderValue(value)}
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-sm text-muted-foreground">
        <p>
          <strong>Note:</strong> This comparison is for educational purposes. 
          Always conduct your own research before making financial decisions.
        </p>
      </div>
    </motion.div>
  );
}

// Preset comparison for common finance scenarios
export function InvestmentComparison() {
  return (
    <ComparisonTable
      title="Investment Options Comparison"
      description="Compare different investment vehicles for your financial goals"
      columns={[
        { header: 'Stocks', description: 'Equity Markets', color: 'primary' },
        { header: 'Mutual Funds', description: 'Managed Portfolio', color: 'success' },
        { header: 'Fixed Deposits', description: 'Bank Deposits', color: 'info' },
        { header: 'Bonds', description: 'Debt Securities', color: 'warning' },
      ]}
      rows={[
        {
          feature: 'Risk Level',
          values: ['High', 'Medium-High', 'Low', 'Low-Medium'],
        },
        {
          feature: 'Expected Returns',
          values: ['12-15%', '10-12%', '6-7%', '7-9%'],
          highlight: true,
        },
        {
          feature: 'Liquidity',
          values: [true, true, false, false],
        },
        {
          feature: 'Lock-in Period',
          values: [false, false, true, true],
        },
        {
          feature: 'Minimum Investment',
          values: ['₹1', '₹500', '₹1,000', '₹10,000'],
        },
        {
          feature: 'Tax Benefits',
          values: [false, true, false, false],
        },
        {
          feature: 'Professional Management',
          values: [false, true, null, false],
        },
      ]}
    />
  );
}
