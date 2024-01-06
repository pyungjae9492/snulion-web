import Tag from '@/components/Tag';
import Image from 'next/image';

interface InterviewCardProps {
  imageSrc: string;
  year: number;
  title: string;
  description: string;
  link: string;
}

export default function ProjectCard(props: InterviewCardProps) {
  const { imageSrc, year, title, description, link } = props;

  return (
    <div
      className='flex h-[380px] w-[351px] cursor-pointer flex-col rounded-lg bg-white bg-opacity-10 p-7'
      onClick={() => link && window.open(link, '_blank')}
    >
      <div className='flex h-full w-full flex-col gap-[22px]'>
        <div className='relative h-[220px] w-[300px]'>
          <Image src={imageSrc} alt='interview-card-image' fill />
        </div>
        <div className='flex flex-row justify-between'>
          <p className='text-lg font-bold'>{title}</p>
          <Tag content={`${year}기`} color='black' />
        </div>
      </div>
      <div className='mt-2'>
        <p className='max-h-[48px] text-base leading-normal'>{description}</p>
      </div>
    </div>
  );
}
