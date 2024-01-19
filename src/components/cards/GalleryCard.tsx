import Tag from '@/components/Tag';
import Image from 'next/image';

interface GalleryCardProps {
  imageSrc: string;
  type: string;
  title: string;
  date: string;
}

export default function GalleryCard(props: GalleryCardProps) {
  const { imageSrc, type, title, date } = props;

  return (
    <div className='h-[290px] max-w-[350px] overflow-hidden rounded-[10px] bg-white bg-opacity-10'>
      <div className='relative h-[210px] w-[350px]'>
        <Image
          src={imageSrc}
          alt='gallery-card-image'
          fill
          objectFit='cover'
          objectPosition='center'
          priority
        />
      </div>
      <div className='flex flex-row items-center justify-between px-5 py-2.5'>
        <div className='flex flex-col justify-between'>
          <p className='text-[15px] font-semibold md:text-lg'>{title}</p>
          <p className='text-[13px] md:text-base'>{date}</p>
        </div>
        <Tag content={type} color='black' />
      </div>
    </div>
  );
}
