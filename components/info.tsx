import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '@/components/ui/tooltip';
import { InfoIcon } from 'lucide-react';

type Props = {
  info: string;
  desc?: string;
  other?: string;
  ads?: string;
};

export const Info = ({ info, desc, other, ads }: Props) => {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger>
          <InfoIcon className='size-4' />
        </TooltipTrigger>
        <TooltipContent align='start' className='flex flex-col gap-y-0.5'>
          <span className='text-sm font-normal'>{info}</span>
          {desc && (
            <p className='text-muted-foreground font-light text-xs'>{desc}</p>
          )}
          {other && (
            <p className='text-muted-foreground font-light text-xs'>{other}</p>
          )}
          {ads && (
            <p className='text-muted-foreground font-light text-xs'>{ads}</p>
          )}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
