import HighlightText from '@/components/HighlightText';
import NextImage from '@/components/NextImage';
import Tag from '@/components/Tag';
import Image from 'next/image';

interface InterviewCardProps {
  imageSrc: string;
  name: string;
  year: number | number[];
  title: string;
  content: string;
}

export default function InterviewCard(props: InterviewCardProps) {
  const { imageSrc, name, year, title, content } = props;

  // year가 배열이면 가장 큰 값으로 설정
  const showingYear = Array.isArray(year) ? Math.max(...year) : year;

  return (
    <div className='flex h-[397px] w-[359px] cursor-pointer flex-col rounded-lg bg-white bg-opacity-10 px-7 pb-4 pt-7 md:px-9 md:pt-9'>
      <div className='flex w-full flex-row items-start justify-start gap-9'>
        <div className='relative size-[100px]'>
          <Image
            className='overflow-hidden rounded-full'
            // TODO: Change to imageSrc
            src={imageSrc}
            alt='interview-card-image'
            fill
            objectFit='cover'
            priority
          />
        </div>
        <div className='flex flex-col items-start gap-2.5'>
          <p className='text-2xl font-semibold'>{name}</p>
          <Tag content={`${showingYear}기 운영진`} color='black' />
        </div>
      </div>
      <p className='mb-4 mt-[26px] text-xl font-semibold md:font-bold'>
        {title}
      </p>
      <HighlightText
        containerClassName='h-[130px] shrink-0 overflow-hidden'
        textClassName='text-[13px] md:text-base leading-loose'
        text={content}
      />
      <div className='flex h-full items-end justify-end'>
        <p className='text-base font-bold'>MORE</p>
      </div>
    </div>
  );
}
