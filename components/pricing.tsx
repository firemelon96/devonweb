import { Heading } from './heading';
import { PricingCard } from './pricing-card';

const pricingPlans = [
  {
    title: 'PHP 3,000/year',
    subTitle: 'Everything you need to get started.',
    type: 'starter',
    inclusions: [
      'Responsive design (Mobile & Desktop)',
      'Messenger or Whatsapp Integration',
      '80 - 90 Lighthouse speed',
      'Free domain (.app)',
      'Custom design',
      'SSL certificate',
      '3 - 5 Sections',
      '3 - 10 Pages',
      'Free hosting',
    ],
  },
  {
    title: 'PHP 5,000/month',
    subTitle: 'Powerful extra feature for your growing business.',
    type: 'recommended',
    inclusions: [
      'Custom domain (.com)',
      'Unlimited sections',
      'Unlimited pages',
      'Everything in Starter Plan +',
      '1 month free',
      'Business Email (name@yourdomain.com)',
      'Social media management (Posting)',
      'Continuous Improvement',
      'Google business profile',
      'Chat API integration',
      'Weekly/Monthly analytics',
      'On page SEO',
      '24/7 support',
    ],
  },
  {
    title: 'PHP 15,000/month',
    subTitle: 'Perfect for Startup',
    type: 'premium',
    inclusions: [
      'Unlimited sections',
      'Unlimited pages',
      'Everything in Recommended Plan +',
      'Custom Content Management System',
      'Facebook & Google ads',
      'Payment integration',
      'Custom users page',
      'Email Marketing',
      'Authentication',
      'Off page SEO',
    ],
  },
];

export const Pricing = () => {
  return (
    <div className='max-w-screen-xl mx-auto scroll-mt-28' id='pricing'>
      <div className='flex flex-col gap-2 mb-24'>
        <Heading
          title='Pricing that scales with you!'
          subTitle='Pricing that suites your brand needs. Think of it as having your own professional Web developer '
        />
        <div className='grid grid-cols-3 gap-4 items-center'>
          {pricingPlans.map((plan) => (
            <PricingCard
              title={plan.title}
              subTitle={plan.subTitle}
              type={plan.type}
              inclusions={plan.inclusions}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
