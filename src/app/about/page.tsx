import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Target, Users, TrendingUp, Shield, Globe, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'About Us - Our Mission & Team',
  description: 'Learn about FinanceHub\'s mission to democratize financial education and empower individuals with knowledge for informed financial decisions.',
  openGraph: {
    title: 'About FinanceHub',
    description: 'Democratizing financial education through trustworthy, data-backed content.',
  },
};

const VALUES = [
  {
    title: 'Trust & Integrity',
    description: 'We prioritize accuracy and unbiased information in everything we publish.',
    icon: Shield,
  },
  {
    title: 'Accessibility',
    description: 'Making complex financial concepts easy to understand for everyone.',
    icon: BookOpen,
  },
  {
    title: 'Empowerment',
    description: 'Giving you the tools and knowledge to take control of your financial future.',
    icon: TrendingUp,
  },
  {
    title: 'Community',
    description: 'Building a supportive community of learners and investors.',
    icon: Users,
  },
];

const TEAM = [
  {
    name: 'Alex Morgan',
    role: 'Founder & Editor-in-Chief',
    bio: 'Former investment banker with a passion for financial literacy.',
    image: '/team/alex.jpg',
  },
  {
    name: 'Sarah Chen',
    role: 'Senior Analyst',
    bio: 'CFA charterholder specializing in market trends and macroeconomics.',
    image: '/team/sarah.jpg',
  },
  {
    name: 'David Kumar',
    role: 'Tech Lead',
    bio: 'Building the tools to visualize your financial journey.',
    image: '/team/david.jpg',
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'About', href: '/about' },
        ]}
      />
      
      <div className="mt-8 space-y-16">
        {/* Hero Section */}
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About FinanceHub</h1>
          <p className="text-xl text-muted-foreground">
            We&apos;re on a mission to democratize financial education and empower individuals 
            with the knowledge they need to make informed financial decisions.
          </p>
        </section>

        {/* Mission Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Target className="w-8 h-8 text-primary" />
              Our Mission
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                FinanceHub was founded on the belief that everyone deserves access to high-quality 
                financial education, regardless of their background or experience level. We strive to 
                break down complex financial concepts into clear, actionable insights that anyone can understand.
              </p>
              <p>
                In a world where financial literacy is more important than ever, we&apos;re committed to 
                being your trusted companion on your journey to financial freedom and security.
              </p>
            </div>
          </div>
          <div className="bg-muted rounded-2xl p-8 flex items-center justify-center min-h-[300px]">
            <Globe className="w-32 h-32 text-primary/20" />
          </div>
        </section>
        
        {/* Values Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">What We Stand For</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value) => (
              <Card key={value.title} className="border-none shadow-md bg-card/50">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Meet The Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {TEAM.map((member) => (
              <Card key={member.name} className="text-center overflow-hidden">
                <div className="h-32 bg-gradient-to-r from-primary/10 to-primary/5" />
                <div className="-mt-16 mb-4 flex justify-center">
                  <div className="w-32 h-32 rounded-full bg-muted border-4 border-background flex items-center justify-center text-4xl font-bold text-muted-foreground">
                    {member.name[0]}
                  </div>
                </div>
                <CardContent>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
