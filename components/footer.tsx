'use client';

import Image from 'next/image';
import { routes } from './navigation';
import Link from 'next/link';
import { Button } from './ui/button';
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className='bg-gradient-to-tr from-blue-500 to-fuchsia-500 h-[30rem]'>
      <div className='max-w-screen-xl mx-auto py-4 space-y-4 flex gap-4'>
        <div className='flex flex-col flex-1'>
          <div className='flex gap-2'>
            <Image src='/logo.png' width={50} height={30} alt='logo image' />
            <h4 className='text-2xl font-semibold text-white'>
              Devon web solutions
            </h4>
          </div>
          <span className='text-primary-foreground'>Terms and condition</span>
          <span className='text-primary-foreground'>Privacy Policy</span>
          <p className='text-white'>&copy; 2024, all rights reserved.</p>
        </div>
        <div className='flex flex-col w-1/3 '>
          <h5 className='text-2xl font-semibold text-white'>Useful links</h5>
          <ul className='flex flex-col items-start'>
            {routes.map((route) => (
              <Button
                variant='link'
                className='text-white'
                asChild
                key={route.href}
              >
                <Link href={route.href}>{route.label}</Link>
              </Button>
            ))}
          </ul>
        </div>
        <div className='w-40 flex flex-col'>
          <ul className='flex items-center gap-2'>
            <li>
              <Link href='#'>
                <FaFacebook className='size-8 text-white' />
              </Link>
            </li>
            <li>
              <Link href='#'>
                <FaGithub className='size-8 text-white' />
              </Link>
            </li>
            <li>
              <Link href='#'>
                <FaInstagram className='size-8 text-white' />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
