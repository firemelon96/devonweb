import { auth } from '@/auth';
import { SessionProvider } from 'next-auth/react';
import { Header } from './components/header';
const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <div className='h-screen z-50 bg-white'>
        <Header />
        {children}
      </div>
      ;
    </SessionProvider>
  );
};

export default DashboardLayout;
