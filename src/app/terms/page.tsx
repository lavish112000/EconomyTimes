import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

export const metadata: Metadata = {
  title: 'Terms of Use - FinanceHub',
  description: 'Terms of Use for FinanceHub. Please read these terms carefully before using our website.',
};

export default function TermsOfUsePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Terms of Use', href: '/terms' },
        ]}
      />
      
      <div className="mt-8 prose prose-lg dark:prose-invert max-w-none">
        <h1>Terms of Use</h1>
        
        <p>
          Welcome to FinanceHub. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing this website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use. If you do not agree, please do not use our website.
        </p>

        <h2>2. Use of Content</h2>
        <p>
          All content provided on FinanceHub is for informational purposes only. You may not modify, reproduce, or distribute any content without our prior written permission.
        </p>

        <h2>3. Disclaimer of Warranties</h2>
        <p>
          The information on this website is provided &quot;as is&quot; without any representations or warranties, express or implied. FinanceHub makes no representations or warranties in relation to the accuracy or completeness of the information found on this website.
        </p>

        <h2>4. Limitation of Liability</h2>
        <p>
          FinanceHub will not be liable for any damages arising out of or in connection with your use of this website. This includes, without limitation, direct loss, loss of business or profits, damage caused to your computer, computer software, systems and programs and the data thereon.
        </p>

        <h2>5. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Your continued use of the website after any changes indicates your acceptance of the new terms.
        </p>

        <h2>6. Contact Us</h2>
        <p>
          If you have any questions about these Terms of Use, please contact us via our Contact page.
        </p>
      </div>
    </div>
  );
}
