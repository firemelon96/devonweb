import {
  Bot,
  BriefcaseBusiness,
  ChartLine,
  CircleGauge,
  Clock,
  Database,
  FileLock,
  FileSearch2,
  Fingerprint,
  FlaskConical,
  Globe,
  GlobeLock,
  Infinity,
  Layers,
  LayoutTemplate,
  Mailbox,
  MailCheck,
  Megaphone,
  MessageSquareCode,
  MonitorSmartphone,
  NotebookPen,
  PanelsTopLeft,
  ScanSearch,
  SmilePlus,
  SquareUser,
  TableCellsSplit,
  Wallet,
  Workflow,
} from 'lucide-react';
import { Heading } from './heading';
import { PricingCard } from './pricing-card';

const pricingPlans = [
  // {
  //   title: 'PHP 8,000',
  //   subTitle: 'Everything you need to get started.',
  //   type: 'starter',
  //   inclusions: [
  //     {
  //       label: 'Responsive design (Mobile & Desktop)',
  //       icon: MonitorSmartphone,
  //     },
  //     { label: 'Messenger or Whatsapp Integration', icon: MessageSquareCode },
  //     { label: '80 - 90 Lighthouse speed', icon: CircleGauge },
  //     { label: 'Free domain (.app)', icon: Globe },
  //     { label: 'Custom design', icon: PanelsTopLeft },
  //     { label: 'SSL certificate', icon: FileLock },
  //     { label: '3 - 5 Sections', icon: TableCellsSplit },
  //     { label: '3 - 10 Pages', icon: Layers },
  //     { label: 'Free hosting', icon: Database },
  //   ],
  // },
  {
    title: 'PHP 8,000',
    category: 'yearly',
    subTitle: 'Powerful web for your business',
    type: 'recommended',
    inclusions: [
      { label: 'Custom domain (.com)', icon: GlobeLock },
      // { label: 'Unlimited sections', icon: Infinity },
      // { label: 'Unlimited pages', icon: Infinity },
      // { label: 'Everything in Starter Plan +', icon: SmilePlus },
      // { label: '1 month free', icon: FlaskConical },
      { label: 'Business Email (name@yourdomain.com)', icon: MailCheck },
      { label: 'Social media management (Posting)', icon: NotebookPen },
      { label: 'Continuous Improvement', icon: Workflow },
      { label: 'Google business profile', icon: BriefcaseBusiness },
      { label: 'Chat API integration', icon: Bot },
      { label: 'Weekly/Monthly analytics', icon: ChartLine },
      { label: 'On page SEO', icon: FileSearch2 },
      { label: '24/7 support', icon: Clock },
    ],
  },
  {
    title: 'PHP 18,000',
    category: 'yearly',
    subTitle: 'Powerful Web app + Custom CMS',
    type: 'premium',
    inclusions: [
      { label: 'Unlimited sections', icon: Infinity },
      { label: 'Unlimited pages', icon: Infinity },
      { label: 'Everything in Recommended Plan +', icon: SmilePlus },
      { label: 'Custom Content Management System', icon: LayoutTemplate },
      { label: 'Facebook & Google ads', icon: Megaphone },
      { label: 'Payment integration', icon: Wallet },
      { label: 'Custom users page', icon: SquareUser },
      { label: 'Email Marketing', icon: Mailbox },
      { label: 'Authentication', icon: Fingerprint },
      { label: 'Off page SEO', icon: ScanSearch },
    ],
  },
  {
    title: 'PHP 5,000',
    category: 'monthly',
    subTitle: 'Web Solution Package for your Business',
    type: 'Silver',
    inclusions: [
      { label: 'Unlimited sections', icon: Infinity },
      { label: 'Unlimited pages', icon: Infinity },
      { label: 'Everything in Recommended Plan +', icon: SmilePlus },
      { label: 'Custom Content Management System', icon: LayoutTemplate },
      { label: 'Facebook Boost Post (1 week)', icon: Megaphone },
      { label: 'Payment integration', icon: Wallet },
      { label: 'Custom users page', icon: SquareUser },
      { label: 'Email Marketing', icon: Mailbox },
      { label: 'Authentication', icon: Fingerprint },
      { label: 'Off page SEO', icon: ScanSearch },
    ],
  },
  {
    title: 'PHP 15,000',
    subTitle: 'Advance Package to level up your game.',
    category: 'monthly',
    type: 'Gold',
    inclusions: [
      { label: 'Unlimited sections', icon: Infinity },
      { label: 'Unlimited pages', icon: Infinity },
      { label: 'Everything in Recommended Plan +', icon: SmilePlus },
      { label: 'Custom Content Management System', icon: LayoutTemplate },
      { label: 'Facebook & Google ads', icon: Megaphone },
      { label: 'Payment integration', icon: Wallet },
      { label: 'Custom users page', icon: SquareUser },
      { label: 'Email Marketing', icon: Mailbox },
      { label: 'Authentication', icon: Fingerprint },
      { label: 'Off page SEO', icon: ScanSearch },
    ],
  },
];

export const Pricing = () => {
  return (
    <div
      className='max-w-screen-xl mx-auto scroll-mt-28 px-4 lg:px-0'
      id='pricing'
    >
      <div className='flex flex-col gap-2 mb-24'>
        <Heading
          title='Pricing that scales with you!'
          subTitle='Pricing that suites your brand needs. Think of it as having your own professional Web developer '
        />
        <div className='grid lg:grid-cols-4 grid-cols-1 gap-4 items-center'>
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.title}
              category={plan.category}
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
