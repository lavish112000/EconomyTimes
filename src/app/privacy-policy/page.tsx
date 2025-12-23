import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

export const metadata: Metadata = {
  title: 'Privacy Policy - FinanceHub',
  description: 'Privacy Policy for FinanceHub. Learn how we collect, use, and protect your data.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Privacy Policy', href: '/privacy-policy' },
        ]}
      />
      <div className="mt-8 prose prose-lg dark:prose-invert max-w-none">
        <h1>Privacy Policy</h1>
        <p>
          Your privacy is important to us. This Privacy Policy explains how FinanceHub collects, uses, and protects your personal information.
        </p>
        <h2>Information We Collect</h2>
        <ul>
          <li>Personal information you provide (e.g., name, email when subscribing to our newsletter or contacting us).</li>
          <li>Usage data collected automatically (e.g., IP address, browser type, pages visited).</li>
        </ul>
        <h2>How We Use Your Information</h2>
        <ul>
          <li>To provide and improve our services.</li>
          <li>To communicate with you (e.g., newsletters, responses to inquiries).</li>
          <li>To analyze website usage and enhance user experience.</li>
        </ul>
        <h2>Third-Party Services</h2>
        <p>
          We may use third-party services (e.g., Google Analytics, AdSense) that collect, monitor, and analyze usage data. These services have their own privacy policies.
        </p>
        <h2>Cookies</h2>
        <p>
          We use cookies to enhance your experience. You can control cookies through your browser settings. See our <a href="/cookie-policy">Cookie Policy</a> for more details.
        </p>
        <h2>Data Security</h2>
        <p>
          We implement reasonable security measures to protect your data. However, no method of transmission over the internet is 100% secure.
        </p>
        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted on this page.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us via our Contact page.
        </p>
      </div>
    </div>
  );
}
