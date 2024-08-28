import { Navigation } from '@/components/navigation';
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
  return (
    <header className='bg-gradient-to-tr from-blue-500 to-fuchsia-500 h-16 sticky top-0 z-[99999]'>
      <div className='max-w-screen-xl mx-auto'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Image src='/logo.png' height={30} width={30} alt='logo' />
            <h3 className='text-xl text-white font-semibold'>
              Devon web solutions
            </h3>
            <Navigation />
          </div>
          <div className='text-white'>
            <ul className='flex items-center gap-2'>
              <li>
                <Link href='#'>
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link href='#'>
                  <FaGithub />
                </Link>
              </li>
              <li>
                <Link href='#'>
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
