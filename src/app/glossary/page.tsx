import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Search } from 'lucide-react';
import { GLOSSARY_TERMS } from '@/lib/glossary-data';

export const metadata: Metadata = {
  title: 'Financial Glossary - Key Terms & Definitions',
  description: 'Comprehensive glossary of financial terms, investment terminology, and economic concepts explained in simple language.',
  openGraph: {
    title: 'Financial Glossary | FinanceHub',
    description: 'Learn financial terms and investment concepts with our comprehensive glossary.',
  },
};

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
            {GLOSSARY_TERMS.map(({ letter }) => (
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
          {GLOSSARY_TERMS.map(({ letter, terms }) => (
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
