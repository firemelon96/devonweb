import { AccordionFAQ } from '@/components/accordion-faq';
import { Heading } from '@/components/heading';
import { faqs } from '@/data/faq';

export const Faq = () => {
  return (
    <div className='max-w-screen-xl mx-auto scroll-mt-28 px-4 lg:px-0' id='faq'>
      <div className='flex flex-col mb-16 gap-2'>
        <Heading
          title='Questions? Answer'
          subTitle='Frequently ask questions. Here is a list of answers we can provide. '
        />

        <div className='backdrop-blur-sm'>
          {faqs.map((faq) => (
            <AccordionFAQ
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
