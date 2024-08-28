import Image from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';

export const Hero = () => {
  return (
    <div className='lg:max-w-screen-xl lg:mx-auto'>
      <div className='h-[30rem] flex flex-col lg:flex-row items-center justify-between mb-20'>
        <div className='lg:w-1/2 z-50 flex-initial'>
          <h1 className='lg:text-6xl text-3xl font-semibold bg-gradient-to-t from-blue-500 to-fuchsia-600 text-transparent bg-clip-text'>
            We believe a website shouldn't break the bank or be a hassle.
          </h1>
          <span className='text-xl text-muted-foreground'>
            That's why we're here to build and manage it for you, effortlessly.
          </span>
        </div>
        <div className='flex-1 '>
          <AspectRatio ratio={16 / 9}>
            <Image
              src='/res/sync.svg'
              alt='Image'
              fill
              className='rounded-md object-fill'
            />
          </AspectRatio>
        </div>
      </div>
    </div>
  );
};
