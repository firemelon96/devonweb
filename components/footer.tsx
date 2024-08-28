export const Footer = () => {
  return (
    <footer className='bg-gradient-to-tr from-blue-500 to-fuchsia-500 h-[30rem]'>
      <div className='max-w-screen-xl mx-auto py-4'>
        <div className='flex flex-col'>
          <h4 className='text-2xl font-semibold text-white'>
            Devon web solutions
          </h4>
          <span className='text-primary-foreground'>Terms and condition</span>
          <span className='text-primary-foreground'>Privacy</span>
          <p>&copy; 2024, all rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
