import { ContactForm } from './contact-form';
import { Heading } from './heading';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export const Contact = () => {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <div className='flex flex-col gap-2 mb-24'>
        <Heading
          title="We'd like to hear from you!"
          subTitle='Let us know what your think, and if we can solve your problem. We’re more than happy to help!'
        />

        <div className='p-4 bg-gradient-to-tr from-blue-500 to-fuchsia-500 flex rounded-md'>
          {/* <form className='flex flex-col w-full gap-2'>
            <div className='flex gap-2'>
              <div className='flex flex-col gap-2 w-1/2'>
                <Input type='text' placeholder='Your name' />
                <Input type='text' placeholder='Your email' />
              </div>
              <Textarea placeholder='Send us your inquiry...' />
            </div>

            <Button type='submit'>Send</Button>
          </form> */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
