import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { LucideIcon } from 'lucide-react';

type Props = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const AlertItem = ({ title, description, icon: Icon }: Props) => {
  return (
    <Alert>
      <Icon className='w-4 h-4 ' />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
};
