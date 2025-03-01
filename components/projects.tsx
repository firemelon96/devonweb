import { Heading } from './heading';
import { ProjectCard } from './project-card';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';

const projects = [
  {
    name: 'Solteros Travel and tour',
    description:
      'One of travel agency in palawan that caters tour from puerto to elnido.',
    image: '/res/solteros.png',
    link: 'https://solteros-travel.vercel.app/',
    technologies: ['Tailwindcss', 'ReactJs', 'NextJs', 'vercel'],
  },
  {
    name: 'Cliff and waves travel and tours',
    description:
      'One of travel agency in roxeas that caters tour from roxas to elnido caters tour ',
    image: '/res/cliffandwaves.png',
    link: 'https://www.cliffandwavestravelandtours.com/',
    technologies: ['Tailwindcss', 'ReactJs', 'NextJs', 'vercel'],
  },
  {
    name: 'I capture travel services',
    description:
      'One of travel agency in coron that caters tour from puerto to elnido, and coron.',
    image: '/res/icapture.png',
    link: 'https://www.icapturetravelservices.com/',
    technologies: ['Tailwindcss', 'ReactJs', 'NextJs', 'Posthog'],
  },
];

export const Projects = () => {
  return (
    <div
      className='max-w-screen-xl mx-auto scroll-mt-28 px-4 lg:px-0'
      id='projects'
    >
      <div className='flex flex-col gap-2 mb-24'>
        <Heading
          title='Projects'
          subTitle="Business and brands that helps us grow. We'd like to list yours."
        />

        <Carousel>
          <CarouselContent>
            {projects.map((project, i) => (
              <CarouselItem key={i} className='lg:basis-1/3 md:basis-1/2'>
                <ProjectCard
                  name={project.name}
                  description={project.description}
                  image={project.image}
                  technologies={project.technologies}
                  link={project.link}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};
