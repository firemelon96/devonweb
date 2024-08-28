import Link from 'next/link';
import { Button } from '@/components/ui/button';

type Props = {
  isActive: boolean;
  href: string;
  label: string;
};

export const NavItem = ({ isActive, href, label }: Props) => {
  return (
    <Link href={href} className='flex items-center h-16'>
      <Button
        variant={isActive ? 'active' : 'link'}
        size='sm'
        className='text-white font-normal focus:bg-white/10 focus:no-underline'
      >
        {label}
      </Button>
    </Link>
  );
};
