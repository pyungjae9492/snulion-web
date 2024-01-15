import SpeechBubble from '@/components/SpeechBubble';
import Tag from '@/components/Tag';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface InterviewDetailProps {
  imageSrc: string;
  name: string;
  year: number | number[];
  interviewContents: { type: 'question' | 'answer'; content: string }[];
}

export default function InterviewDetail(props: InterviewDetailProps) {
  const { imageSrc, name, year, interviewContents } = props;

  const router = useRouter();

  const yearString = Array.isArray(year) ? year.join(', ') : String(year);

  return (
    <div className='flex h-full w-full items-center justify-center'>
      <div className='flex w-[90%] max-w-[1000px] flex-col items-center justify-start md:w-[80%] lg:w-[70%]'>
        <div className='mb-16 mt-14 w-full border-b border-white border-opacity-20 px-[6px] py-[5px]'>
          <p className='cursor-pointer text-lg' onClick={() => router.back()}>
            <span className='font-normal'>{'운영진 인터뷰 > '}</span>
            <span className='font-bold'>{yearString + '기 ' + name}</span>
          </p>
        </div>
        <div className='relative mb-[30px] size-[120px] md:size-[172px]'>
          <Image
            className='overflow-hidden rounded-full'
            src={imageSrc}
            alt='interview-card-image'
            fill
            objectFit='cover'
            objectPosition='center'
          />
        </div>
        <p className='mb-5 text-4xl font-semibold'>{name}</p>
        <Tag
          className='mb-10'
          content={`${yearString}기 운영진`}
          color='black'
        />
        <div>
          {interviewContents.map((content, index) => {
            return (
              <SpeechBubble
                key={'speech-bubble-' + index}
                content={content.content}
                type={content.type === 'question' ? 'left' : 'right'}
                color={content.type === 'question' ? 'orange' : 'white'}
                className={
                  content.type === 'question'
                    ? 'mb-4 max-w-[80%] md:mb-10 lg:max-w-[60%]'
                    : 'mb-8 max-w-[90%] md:mb-20 lg:max-w-[85%]'
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
