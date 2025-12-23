import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

export const metadata: Metadata = {
  title: 'Cookie Policy - FinanceHub',
  description: 'Cookie Policy for FinanceHub. Understanding how and why we use cookies.',
};

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Cookie Policy', href: '/cookie-policy' },
        ]}
      />
      
      <div className="mt-8 prose prose-lg dark:prose-invert max-w-none">
        <h1>Cookie Policy</h1>
        
        <p>
          FinanceHub uses cookies to enhance your user experience, analyze site usage, and assist in our marketing efforts.
        </p>

        <h2>What Are Cookies?</h2>
        <p>
          Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences and actions over time.
        </p>

        <h2>Types of Cookies We Use</h2>
        <ul>
          <li><strong>Essential Cookies:</strong> Necessary for the website to function properly (e.g., security, page navigation).</li>
          <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website (e.g., Google Analytics).</li>
          <li><strong>Advertising Cookies:</strong> Used to deliver relevant advertisements and track ad performance (e.g., Google AdSense).</li>
        </ul>

        <h2>Managing Cookies</h2>
        <p>
          You can choose to disable cookies through your browser settings. Please note that disabling cookies may affect the functionality of certain parts of our website.
        </p>
        <p>
          By continuing to use FinanceHub, you consent to the use of cookies as described in this policy.
        </p>
      </div>
    </div>
  );
}
