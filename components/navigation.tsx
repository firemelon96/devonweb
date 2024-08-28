'use client';

import { usePathname } from 'next/navigation';
import { NavItem } from '@/components/nav-item';

const routes = [
  {
    href: '#pricing',
    label: 'Pricing',
  },
  {
    href: '#projects',
    label: 'Projects',
  },
  {
    href: '#faq',
    label: 'FAQ',
  },
  {
    href: '/blog',
    label: 'Blog',
  },
];

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className='flex text-white'>
      {routes.map((route) => (
        <NavItem
          key={route.href}
          isActive={route.href === pathname}
          href={route.href}
          label={route.label}
        />
      ))}
    </nav>
  );
};
