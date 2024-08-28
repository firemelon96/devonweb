import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { AspectRatio } from './ui/aspect-ratio';
import { Badge } from './ui/badge';
import Link from 'next/link';

type Props = {
  name: string;
  description: string;
  link: string;
  image?: string;
  technologies: string[];
};

export const ProjectCard = ({
  name,
  description,
  link,
  image,
  technologies,
}: Props) => {
  return (
    <Link href={link} target='_blank'>
      <Card className='min-h-[492px]'>
        <CardHeader>
          <AspectRatio className=''>
            <Image
              src={image || '/res/img.jpeg'}
              fill
              alt={name}
              className='rounded-md object-cover'
            />
          </AspectRatio>
        </CardHeader>
        <CardContent>
          <CardTitle className='truncate'>{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardContent>
        <CardFooter className='flex-wrap gap-2'>
          {technologies.map((item) => (
            <Badge key={item} variant='custom'>
              {item}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </Link>
  );
};
