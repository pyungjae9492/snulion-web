import SpeechBubble from '@/components/SpeechBubble';
import Tag from '@/components/Tag';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface InterviewDetailProps {
  imageSrc: string;
  name: string;
  year: number;
  interviewContents: { type: 'question' | 'answer'; content: string }[];
}

export default function InterviewDetail(props: InterviewDetailProps) {
  const { imageSrc, name, year, interviewContents } = props;

  const router = useRouter();

  return (
    <div className='flex h-full w-full items-center justify-center'>
      <div className='flex w-[90%] max-w-[1000px] flex-col items-center justify-start md:w-[80%] lg:w-[70%]'>
        <div className='mb-16 mt-14 w-full border-b border-white border-opacity-20 px-[6px] py-[5px]'>
          <p className='cursor-pointer text-lg' onClick={() => router.back()}>
            <span className='font-normal'>{'운영진 인터뷰 > '}</span>
            <span className='font-bold'>{year + '기 ' + name}</span>
          </p>
        </div>
        <Image
          className='mb-[30px] overflow-hidden rounded-full'
          // TODO: Change to imageSrc
          // src={imageSrc}
          src={'/images/people-example.png'}
          alt='interview-card-image'
          width={172}
          height={172}
        />
        <p className='mb-5 text-4xl font-semibold'>{name}</p>
        <Tag className='mb-10' content={`${year}기 운영진`} color='black' />
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
                    ? 'mb-10 w-full md:w-[80%] lg:w-[60%]'
                    : 'mb-20 w-full md:w-[90%] lg:w-[85%]'
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
