import { LucideIcon } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { AlertItem } from './alert-item';

type Requirement = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type Props = {
  title: string;
  description: string;
  requirements: Requirement[];
};

export const StepsCard = ({ title, description, requirements }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className='space-y-2'>
        {requirements.map((req) => (
          <AlertItem
            title={req.title}
            description={req.description}
            icon={req.icon}
          />
        ))}
      </CardContent>
    </Card>
  );
};
