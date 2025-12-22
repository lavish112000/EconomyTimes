import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Mail, TrendingUp, Bell, BookOpen, Zap, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Newsletter - Stay Updated on Finance & Markets',
  description: 'Subscribe to FinanceHub newsletter for weekly financial insights, market analysis, investment tips, and economic updates delivered to your inbox.',
  openGraph: {
    title: 'Subscribe to FinanceHub Newsletter',
    description: 'Get weekly financial insights and market updates delivered to your inbox.',
  },
};

const BENEFITS = [
  {
    title: 'Market Analysis',
    description: 'Deep dives into what moved the markets this week.',
    icon: TrendingUp,
  },
  {
    title: 'Investment Ideas',
    description: 'Curated list of potential opportunities and risks.',
    icon: Zap,
  },
  {
    title: 'Educational Content',
    description: 'Learn a new financial concept every week.',
    icon: BookOpen,
  },
  {
    title: 'Timely Alerts',
    description: 'Be the first to know about major economic events.',
    icon: Bell,
  },
];

export default function NewsletterPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Newsletter', href: '/newsletter' },
        ]}
      />
      
      <div className="max-w-4xl mx-auto mt-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Stay Ahead in Finance
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of readers who receive weekly insights on markets, investing, 
            personal finance, and economic trends.
          </p>
        </div>
        
        {/* Newsletter Form */}
        <div className="bg-muted/50 border p-8 rounded-2xl mb-16 max-w-2xl mx-auto shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-center">Subscribe Now</h2>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John"
                  className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>
            
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                Subscribe Free
                <CheckCircle className="w-5 h-5" />
              </button>
              <p className="text-xs text-center text-muted-foreground mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </form>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {BENEFITS.map((benefit) => (
            <Card key={benefit.title} className="border-none shadow-sm bg-card">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <benefit.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
