import Image from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { getUserByEmail } from '@/lib/db';

export const Hero = () => {
  return (
    <div className='lg:max-w-screen-xl lg:mx-auto px-4 lg:px-0'>
      <div className='lg:h-[30rem] flex my-20 flex-col lg:flex-row items-center mb-20'>
        <div className='lg:w-1/2 z-20 flex-initial text-center lg:text-start'>
          <h1 className='lg:text-6xl text-4xl  font-semibold bg-gradient-to-t from-blue-500 to-fuchsia-600 text-transparent bg-clip-text'>
            We believe a website shouldn't break the bank or be a hassle.
          </h1>
          <span className='text-xl text-muted-foreground'>
            That's why we're here to build and manage it for you, effortlessly.
          </span>
        </div>
        <div className='w-full lg:w-1/2'>
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
