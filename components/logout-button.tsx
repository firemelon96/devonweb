'use client';
import { logout } from '@/actions/logout';
import { Button } from './ui/button';

export const LogoutBtn = () => {
  return (
    <Button onClick={() => logout()} className='z-[99999]'>
      logout
    </Button>
  );
};
