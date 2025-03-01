import Image from 'next/image';
import { AspectRatio } from './ui/aspect-ratio';

export const Metrics = () => {
  return (
    <div className='lg:max-w-screen-xl lg:mx-auto px-4 lg:px-0'>
      <div className='lg:h-[30rem] flex flex-col lg:flex-row items-center mb-20'>
        <div className='w-full lg:w-1/2'>
          <AspectRatio ratio={16 / 9}>
            <Image
              src='/res/metrics.jpg'
              alt='Image'
              fill
              className='rounded-md object-cover'
            />
          </AspectRatio>
        </div>
        <div className='lg:w-1/2 z-10 flex-initial text-center lg:text-start'>
          <h1 className='lg:text-6xl text-4xl font-semibold bg-gradient-to-t from-blue-500 to-fuchsia-600 text-transparent bg-clip-text'>
            The difference is at performance!
          </h1>
          <span className='text-xl text-muted-foreground'>
            Benefits of custom website shines in its performance, which plays a
            huge role in SEO and user engagement.
          </span>
        </div>
      </div>
    </div>
  );
};
