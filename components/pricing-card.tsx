import { CheckedLabel } from '@/components/check-label';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';
import { Info } from './info';
import { cn } from '@/lib/utils';

type Props = {
  category: string;
  title: string;
  subTitle: string;
  type: string;
  inclusions: { label: string; icon: LucideIcon }[];
};

export const PricingCard = ({
  category,
  title,
  subTitle,
  type,
  inclusions,
}: Props) => {
  const recommended = type === 'recommended';
  const monthlyInfo =
    category === 'monthly' ? { title: 'Monthly subscription' } : undefined;
  const yearlyInfo =
    category === 'yearly'
      ? {
          title: 'Renew Yearly PHP 5,000',
          desc: 'Maintenance + Package update PHP 130 per hour',
          other: 'Additional Pages/Sections PHP 50',
          ads: 'Facebook post boost PHP 2,000 (1 week)',
        }
      : undefined;
  return (
    <Card
      className={cn(
        'relative h-fit shadow-md',
        recommended && 'border-2 border-fuchsia-500'
      )}
    >
      <Badge
        className='absolute right-2 top-2'
        variant={recommended ? 'custom' : 'secondary'}
      >
        {type}
      </Badge>
      <CardHeader>
        <CardTitle>
          {title} {monthlyInfo && <Info info={monthlyInfo.title} />}{' '}
          {yearlyInfo && (
            <Info
              info={yearlyInfo.title}
              desc={yearlyInfo.desc}
              other={yearlyInfo.other}
              ads={yearlyInfo.ads}
            />
          )}
        </CardTitle>
        <CardDescription>{subTitle}</CardDescription>
      </CardHeader>
      <CardContent className='space-y-2'>
        {inclusions.map((item, i) => (
          <CheckedLabel key={i} label={item.label} icon={item.icon} />
        ))}
      </CardContent>
    </Card>
  );
};
