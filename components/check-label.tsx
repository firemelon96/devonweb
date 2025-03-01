import { LucideIcon } from 'lucide-react';
import { Label } from './ui/label';

type Props = {
  label: string;
  icon: LucideIcon;
};

export const CheckedLabel = ({ label, icon: Icon }: Props) => {
  return (
    <div className='flex items-center space-x-2 '>
      <Icon className='size-4' />
      <Label htmlFor='label' className='text-xs'>
        {label}
      </Label>
    </div>
  );
};
