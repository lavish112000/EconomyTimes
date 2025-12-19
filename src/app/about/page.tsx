import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Target, Users, TrendingUp, Shield, Globe, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - Our Mission & Team',
  description: 'Learn about FinanceHub\'s mission to democratize financial education and empower individuals with knowledge for informed financial decisions.',
  openGraph: {
    title: 'About FinanceHub',
    description: 'Democratizing financial education through trustworthy, data-backed content.',
  },
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'About', href: '/about' },
        ]}
      />
      
      <article className="prose prose-lg dark:prose-invert max-w-none mt-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About FinanceHub</h1>
        
        <p className="text-xl text-muted-foreground mb-8">
          We&apos;re on a mission to democratize financial education and empower individuals 
          with the knowledge they need to make informed financial decisions.
        </p>
        
        <section className="my-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Target className="w-8 h-8 text-primary" />
            Our Mission
          </h2>
          <p>
            FinanceHub was founded on the belief that everyone deserves access to high-quality 
            financial education, regardless of their background or experience level. We strive to 
            break down complex financial concepts into clear, actionable insights that anyone can understand.
          </p>
          <p>
            In a world where financial literacy is more important than ever, we&apos;re committed to 
            being your trusted companion on your journey to financial freedom and security.
          </p>
        </section>
        
        <section className="my-12">
          <h2 className="text-3xl font-bold mb-6">What We Stand For</h2>
          
          <div className="grid md:grid-cols-2 gap-8 not-prose">
            <div className="p-6 border border-border rounded-lg">
              <Shield className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Trustworthy Information</h3>
              <p className="text-muted-foreground">
                Every article is thoroughly researched, fact-checked, and backed by reliable data 
                sources. We never compromise on accuracy.
              </p>
            </div>
            
            <div className="p-6 border border-border rounded-lg">
              <BookOpen className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Educational Focus</h3>
              <p className="text-muted-foreground">
                We believe in teaching fundamentals, not just giving tips. Our goal is to help you 
                understand the &quot;why&quot; behind financial decisions.
              </p>
            </div>
            
            <div className="p-6 border border-border rounded-lg">
              <Globe className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global & Local Perspective</h3>
              <p className="text-muted-foreground">
                We cover both Indian financial markets and global trends, helping you understand 
                how they interconnect and affect your finances.
              </p>
            </div>
            
            <div className="p-6 border border-border rounded-lg">
              <TrendingUp className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Actionable Insights</h3>
              <p className="text-muted-foreground">
                Every article provides practical takeaways you can implement immediately to improve 
                your financial situation.
              </p>
            </div>
          </div>
        </section>
        
        <section className="my-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Users className="w-8 h-8 text-primary" />
            Our Content Coverage
          </h2>
          <p>
            FinanceHub covers eight comprehensive categories designed to address every aspect of 
            your financial life:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 not-prose my-6">
            {[
              { name: 'Economy & Macroeconomics', desc: 'Understanding economic trends and policies' },
              { name: 'Personal Finance', desc: 'Managing money, budgeting, and financial planning' },
              { name: 'Investing & Wealth Building', desc: 'Growing wealth through smart investments' },
              { name: 'Banking, Credit & Loans', desc: 'Navigating banking products and credit' },
              { name: 'Stock Market & Trading', desc: 'Market analysis and trading strategies' },
              { name: 'Corporate Finance', desc: 'Business finance and valuation' },
              { name: 'FinTech & Crypto', desc: 'Digital finance and emerging technologies' },
              { name: 'Global Economy', desc: 'International markets and finance' },
            ].map((category) => (
              <div key={category.name} className="p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-1">{category.name}</h4>
                <p className="text-sm text-muted-foreground">{category.desc}</p>
              </div>
            ))}
          </div>
        </section>
        
        <section className="my-12">
          <h2 className="text-3xl font-bold mb-6">Our Commitment to You</h2>
          <ul>
            <li><strong>No Get-Rich-Quick Schemes:</strong> We focus on sustainable, long-term wealth building strategies.</li>
            <li><strong>Unbiased Content:</strong> We don&apos;t promote specific financial products without disclosing relationships.</li>
            <li><strong>Continuous Learning:</strong> We stay updated with the latest financial regulations, market trends, and research.</li>
            <li><strong>Accessibility:</strong> Our content is written in clear, jargon-free language that anyone can understand.</li>
            <li><strong>Data-Driven:</strong> We back our insights with real data, statistics, and credible sources.</li>
          </ul>
        </section>
        
        <section className="my-12 p-8 bg-muted rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p>
            Subscribe to our newsletter to receive weekly financial insights, market updates, 
            and educational content delivered straight to your inbox. Join thousands of readers 
            who are taking control of their financial future.
          </p>
          <a 
            href="/newsletter" 
            className="inline-block mt-4 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors no-underline"
          >
            Subscribe to Newsletter
          </a>
        </section>
        
        <section className="my-12">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p>
            Have questions, suggestions, or feedback? We&apos;d love to hear from you! Reach out to us at{' '}
            <a href="mailto:contact@financehub.com">contact@financehub.com</a>
          </p>
          <p>
            For partnership inquiries:{' '}
            <a href="mailto:partnerships@financehub.com">partnerships@financehub.com</a>
          </p>
        </section>
        
        <div className="border-t border-border pt-8 mt-12">
          <p className="text-sm text-muted-foreground italic">
            <strong>Disclaimer:</strong> FinanceHub provides educational content for informational 
            purposes only. We are not financial advisors, and our content should not be considered 
            as personalized financial advice. Always consult with a qualified financial professional 
            before making investment decisions.
          </p>
        </div>
      </article>
    </div>
  );
}
