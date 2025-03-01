type Props = {
  title: string;
  subTitle: string;
};

export const Heading = ({ title, subTitle }: Props) => {
  return (
    <div className='flex flex-col text-center lg:text-start'>
      <p className='text-2xl font-semibold'>{title}</p>
      <span className='text-muted-foreground'>{subTitle}</span>
    </div>
  );
};
