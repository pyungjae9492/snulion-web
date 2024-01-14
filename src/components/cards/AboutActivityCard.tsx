import Button from '@/components/Button';
import Tag, { TagProps } from '@/components/Tag';
import useMobile from '@/hooks/useMobile';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

export interface ActivityCardProps {
  title: string;
  tags: TagProps[];
  shortDescription: string;
  description: string;
  imageSrc: string;
  link?: string;
  linkTitle?: string;
}

export default function AboutActivityCard(props: ActivityCardProps) {
  const { title, tags, shortDescription, description, imageSrc } = props;

  const [showFullDescription, setShowFullDescription] = useState(false);

  const router = useRouter();
  const isMobile = useMobile();

  return (
    <div
      className='h-[200px] w-[330px] rounded-[10px] md:h-[280px] md:w-[393px]'
      onPointerOver={() => !isMobile && setShowFullDescription(true)}
      onPointerOut={() => !isMobile && setShowFullDescription(false)}
      onClick={() => isMobile && setShowFullDescription(!showFullDescription)}
      style={{
        background: `url(${imageSrc}), lightgray 0px -89.047px / 109.794% 132.71% no-repeat`,
        backgroundSize: 'cover',
      }}
    >
      <div
        className={`flex h-full w-full flex-col items-end justify-between rounded-[10px] p-5 md:p-[27px] ${
          showFullDescription && 'bg-black bg-opacity-70 backdrop:blur-[2px]'
        } transition-all duration-300 ease-in-out`}
        style={{
          boxShadow: showFullDescription
            ? '0px 0px 10px 0px rgba(255, 255, 255, 0.8)'
            : 'none',
        }}
      >
        <div className='flex w-full flex-col md:gap-3'>
          <p
            className={`transition-color text-[22px] font-extrabold leading-normal duration-300 md:text-[26px] md:leading-tight ${
              showFullDescription
                ? tags[0].color === 'orange'
                  ? 'text-orange'
                  : tags[0].color === 'blue'
                  ? 'text-blue'
                  : tags[0].color === 'green'
                  ? 'text-green'
                  : tags[0].color === 'purple' && 'text-purple'
                : 'text-white'
            }`}
          >
            {title}
          </p>
          <div className='relative'>
            <p
              className={`absolute text-[13px] transition-all duration-300 md:text-base ${
                showFullDescription ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {description}
            </p>
            <p
              className={`text-base font-bold leading-relaxed transition-all duration-300 md:text-xl ${
                showFullDescription ? 'opacity-0' : 'opacity-60'
              }`}
            >
              {shortDescription}
            </p>
          </div>
        </div>
        <div className='flex gap-2.5 md:gap-4'>
          {tags.map((tag, index) => (
            <Tag key={index} color={'transparent'} content={tag.content} />
          ))}
        </div>
      </div>
    </div>
  );
}
