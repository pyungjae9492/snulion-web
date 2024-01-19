import Tag from '@/components/Tag';
import Image from 'next/image';

interface InterviewCardProps {
  imageSrc: string;
  year: number;
  title: string;
  description: string;
  link: string | null;
}

export default function ProjectCard(props: InterviewCardProps) {
  const { imageSrc, year, title, description, link } = props;

  return (
    <div
      className='flex h-[360px] w-[351px] cursor-pointer flex-col rounded-lg border border-l-0 border-t-0 border-white border-opacity-20 bg-white bg-opacity-10 p-7 shadow-2xl backdrop-blur-[1px]'
      onClick={() =>
        link
          ? window.open(link, '_blank')
          : alert('인스타그램 카드 뉴스 업로드 준비중입니다')
      }
    >
      <div className='flex h-full w-full flex-col gap-[22px]'>
        <div className='relative h-[180px] w-[300px]'>
          <Image src={imageSrc} alt='interview-card-image' fill priority />
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
