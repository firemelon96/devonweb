import { AccordionFAQ } from '@/components/accordion-faq';
import { Heading } from '@/components/heading';

const faqs = [
  {
    question: 'Do you do an enterprise website?',
    answer: 'Yes',
  },
  {
    question: 'Why should I have a website?',
    answer: 'Because its more professional to have one',
  },
  {
    question: 'Does it comes with CMS?',
    answer: 'Future update will have CMS',
  },
  {
    question: 'What technology are you using?',
    answer: 'Next js and react, JAMSTACK',
  },
  {
    question: 'What do I need to get started?',
    answer: 'Company logo, mission and vision, and Images',
  },
  {
    question: 'Why monthly though?',
    answer:
      'Because its continous upgrade and mentainance, so you can manage your own business!',
  },
];

export const Faq = () => {
  return (
    <div className='max-w-screen-xl mx-auto scroll-mt-28' id='faq'>
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
