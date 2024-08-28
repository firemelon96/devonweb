import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';

type Props = {
  item: string;
};

export const CheckedLabel = ({ item }: Props) => {
  return (
    <div className='flex items-center space-x-2 '>
      <Checkbox checked />
      <Label htmlFor='terms'>{item}</Label>
    </div>
  );
};
