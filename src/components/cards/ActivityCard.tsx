import Button from '@/components/Button';
import Tag, { TagProps } from '@/components/Tag';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';

export interface ActivityCardProps {
  index: number;
  title: string;
  tags: TagProps[];
  description: string;
  imageSrc: string;
  link?: string;
  linkTitle?: string;
}

export default function ActivityCard(props: ActivityCardProps) {
  const { index, title, tags, description, imageSrc, link, linkTitle } = props;

  const router = useRouter();
  const cardRef = useRef<HTMLDivElement>(null);

  const handlePointerMovement = (e: any) => {
    if (cardRef.current) {
      const card = cardRef.current;
      const cardRect = card.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2;
      const cardCenterY = cardRect.top + cardRect.height / 2;

      const cardX = cardCenterX - e.pageX;
      const cardY = cardCenterY - e.pageY;

      const cardRotateX = cardY / 50;
      const cardRotateY = cardX / -50;

      card.style.transition = `none`;
      card.style.transform = `perspective(1000px) rotateX(${cardRotateX}deg) rotateY(${cardRotateY}deg)`;
    }
  };

  const handlePointerReset = () => {
    if (cardRef.current) {
      const card = cardRef.current;
      card.style.transition = `all 0.5s ease`;
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    }
  };

  return (
    <div
      ref={cardRef}
      className={`flex flex-col-reverse ${
        index % 2 === 1 ? 'md:flex-row' : 'md:flex-row-reverse'
      } max-w-[1000px] items-start justify-center gap-4 rounded-[10px] bg-white bg-opacity-10 p-0 max-md:w-full md:gap-20 md:rounded-[30px] md:px-[90px] md:py-[50px]`}
      onPointerMove={handlePointerMovement}
      onPointerLeave={handlePointerReset}
    >
      <div className='flex flex-col items-start justify-start gap-5 px-6 pb-9 pt-4 max-md:w-full md:gap-[30px] md:p-0'>
        <div className='flex flex-col gap-[15px] md:gap-5'>
          <div className='flex flex-col gap-1'>
            <p className='text-lg font-extrabold leading-normal md:text-3xl'>
              {'0' + index}
            </p>
            <p className='text-[32px] font-bold leading-normal md:text-[46px]'>
              {title}
            </p>
          </div>
          <div className='flex gap-2.5 md:gap-[15px]'>
            {tags.map((tag, index) => (
              <Tag key={index} color={tag.color} content={tag.content} />
            ))}
          </div>
          <p className='text-[13px] font-semibold leading-relaxed md:text-lg'>
            {description}
          </p>
        </div>
        {link && (
          <Button
            backgroundColor='chip-gradient'
            showArrow
            onClick={() => router.push(link)}
          >
            {linkTitle}
          </Button>
        )}
      </div>
      <div className='relative h-[190px] w-full shrink-0 md:h-[340px] md:w-[370px]'>
        <Image
          className='rounded-b-none rounded-t-[10px] md:rounded-[10px]'
          src={imageSrc}
          alt='activity-card'
          fill
          objectFit='cover'
          objectPosition='center'
        />
      </div>
    </div>
  );
}
