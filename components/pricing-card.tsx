import { CheckedLabel } from '@/components/check-label';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type Props = {
  title: string;
  subTitle: string;
  type: string;
  inclusions: string[];
};

export const PricingCard = ({ title, subTitle, type, inclusions }: Props) => {
  const recommended = type === 'recommended';
  return (
    <Card className='bg-gradient-to-b from-blue-200 relative h-fit to-fuchsia-300 shadow-md'>
      <Badge
        className='absolute right-5 top-5'
        variant={recommended ? 'default' : 'secondary'}
      >
        {type}
      </Badge>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subTitle}</CardDescription>
      </CardHeader>
      <CardContent className='space-y-2'>
        {inclusions.map((item, i) => (
          <CheckedLabel key={i} item={item} />
        ))}
      </CardContent>
    </Card>
  );
};
