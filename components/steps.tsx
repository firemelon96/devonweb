import { Heading } from '@/components/heading';
import {
  ChartColumnBig,
  Frame,
  GlobeLock,
  ImageDown,
  MonitorCheck,
  NotebookPen,
  Repeat,
  Terminal,
  UserPen,
  Workflow,
} from 'lucide-react';
import { StepsCard } from './steps-card';

const steps = [
  {
    title: 'Initial Step',
    description: 'Lets start by getting required info..',
    requirements: [
      {
        icon: NotebookPen,
        title: 'Gathering Information',
        description: 'All necessary details, such as mission vision',
      },
      {
        icon: UserPen,
        title: 'User stories',
        description:
          'Identify how the process want to be done. Identifying pain points',
      },
      {
        icon: ImageDown,
        title: 'Getting images',
        description: 'Get all images including brand image, etc.',
      },
    ],
  },
  {
    title: 'Next Step',
    description: 'Things will be design prior to your needs...',
    requirements: [
      {
        icon: Frame,
        title: 'Prototyping/Mockup',
        description: 'Mocking up design and wireframe of the entire site.',
      },
      {
        icon: Repeat,
        title: 'Revisions',
        description: 'One or more revisions depend on your satisfaction.',
      },
      {
        icon: MonitorCheck,
        title: 'Designing',
        description: 'Once all are good, design will be presented as guide.',
      },
    ],
  },
  {
    title: 'Final Step',
    description: 'This steps will be the real world result..',
    requirements: [
      {
        icon: GlobeLock,
        title: 'Publish online',
        description:
          'Web app will be published to the web with custom domain or free domain.',
      },
      {
        icon: Workflow,
        title: 'Continuous update',
        description:
          'Updates and features are implemented to capture users behavior.',
      },
      {
        icon: ChartColumnBig,
        title: 'Analytics',
        description:
          'Analytics will be integrated to know the future update and mentainance.',
      },
    ],
  },
];

export const Steps = () => {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <div className='flex flex-col gap-2 mb-24'>
        <Heading
          title='Crafting your brand the way you like!'
          subTitle="Simply by knowing your brand does and features, we'll get you
        started!"
        />
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 bg-gradient-to-b from-blue-500 to-fuchsia-500 bg-muted-foreground p-4 rounded-md'>
          {steps.map((step) => (
            <StepsCard
              title={step.title}
              description={step.description}
              requirements={step.requirements}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
