import { auth } from '@/auth';
import { LogoutBtn } from '@/components/logout-button';

const DasboardPage = async () => {
  const session = await auth();
  return (
    <div className='z-50'>
      {JSON.stringify(session)}
      <LogoutBtn />
    </div>
  );
};

export default DasboardPage;
