import { CompanyName } from './company-name';

export const Header = () => {
  return (
    <header className='h-16 flex items-center border-b px-4'>
      <div className='flex items-center justify-between'>
        <div className='flex'>
          <CompanyName />
        </div>
      </div>
    </header>
  );
};
