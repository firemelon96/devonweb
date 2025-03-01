import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

type Props = {
  question: string;
  answer: string;
};

export const AccordionFAQ = ({ question, answer }: Props) => {
  return (
    <Accordion type='single' collapsible>
      <AccordionItem value='item-1'>
        <AccordionTrigger>{question}</AccordionTrigger>
        <AccordionContent className='text-muted-foregrounds'>
          {answer}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
