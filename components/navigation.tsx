'use client';

import { useMedia } from 'react-use';

import { usePathname, useRouter } from 'next/navigation';
import { NavItem } from '@/components/nav-item';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const routes = [
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
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMedia('(max-width: 1024px)', false);
  const pathname = usePathname();
  const router = useRouter();

  const onClick = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant='ghost' size='sm' className='text-white'>
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent
          side='left'
          className='bg-gradient-to-tr from-blue-500 to-fuchsia-500 border-0'
        >
          <div className='flex ml-3 items-center gap-2'>
            <Image
              src='/logo.png'
              height={20}
              width={40}
              alt='logo'
              className='object-cover'
            />
            <h3 className='text-base text-white font-semibold'>
              Devon web solutions
            </h3>
          </div>
          <nav className='flex flex-col mt-6 gap-y-2 text-white'>
            {routes.map((route) => (
              <Button
                key={route.href}
                className='w-full justify-start'
                asChild
                variant={route.href === pathname ? 'outline' : 'ghost'}
              >
                <Link href={route.href} onClick={() => onClick(route.href)}>
                  {route.label}
                </Link>
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <nav className='lg:flex text-white hidden'>
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
