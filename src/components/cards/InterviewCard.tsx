import NextImage from '@/components/NextImage';
import Tag from '@/components/Tag';
import Image from 'next/image';

interface InterviewCardProps {
  imageSrc: string;
  name: string;
  year: number;
  title: string;
  content: string;
}

export default function InterviewCard(props: InterviewCardProps) {
  const { imageSrc, name, year, title, content } = props;

  return (
    <div className='flex h-[397px] w-[359px] cursor-pointer flex-col rounded-lg bg-white bg-opacity-10 px-9 pb-4 pt-9'>
      <div className='flex w-full flex-row items-start justify-start gap-9'>
        <NextImage
          className='overflow-hidden rounded-full'
          // TODO: Change to imageSrc
          // src={imageSrc}
          src={'/images/people-example.png'}
          alt='interview-card-image'
          width={98}
          height={98}
        />
        <div className='flex flex-col items-start gap-2.5'>
          <p className='text-2xl font-semibold'>{name}</p>
          <Tag content={`${year}기 운영진`} color='black' />
        </div>
      </div>
      <p className='mb-4 mt-[26px] text-xl font-bold'>{title}</p>
      <p className='text-base leading-loose'>{content}</p>
      <div className='flex h-full items-end justify-end'>
        <p className='text-base font-bold'>MORE</p>
      </div>
    </div>
  );
}
