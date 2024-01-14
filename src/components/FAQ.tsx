import { useState } from 'react';

interface FAQProps {
  question: string;
  answer: string;
  className?: string;
}

export default function FAQ(props: FAQProps) {
  const { question, answer, className } = props;

  const [isAnswerOpen, setIsAnswerOpen] = useState(false);

  return (
    <div
      className={
        `flex w-full max-w-[883px] flex-col gap-4 overflow-hidden rounded-[20px] bg-white bg-opacity-80 px-10 py-6 transition-all max-md:p-4` +
        className
      }
      onClick={() => setIsAnswerOpen(!isAnswerOpen)}
    >
      <div className='flex w-full items-center justify-between'>
        <p className='text-[15px] font-bold leading-loose text-black md:text-xl md:leading-normal'>
          {'Q. ' + question}
        </p>
        <svg
          className={`size-[20px] transform transition-transform duration-500 md:size-[30px] ${
            isAnswerOpen ? 'rotate-180' : ''
          }`}
          xmlns='http://www.w3.org/2000/svg'
          width='30'
          height='30'
          viewBox='0 0 30 30'
          fill='none'
        >
          <path
            d='M26.9334 9.92435C26.5818 9.57284 26.105 9.37537 25.6078 9.37537C25.1106 9.37537 24.6338 9.57284 24.2822 9.92435L15.0009 19.2056L5.7197 9.92435C5.36607 9.5828 4.89244 9.39381 4.40082 9.39808C3.9092 9.40235 3.43893 9.59955 3.09129 9.94719C2.74364 10.2948 2.54646 10.7651 2.54218 11.2567C2.53791 11.7483 2.7269 12.222 3.06845 12.5756L13.6753 23.1825C14.0269 23.534 14.5038 23.7314 15.0009 23.7314C15.4981 23.7314 15.975 23.534 16.3266 23.1825L26.9334 12.5756C27.285 12.224 27.4824 11.7472 27.4824 11.25C27.4824 10.7528 27.285 10.276 26.9334 9.92435Z'
            fill='black'
          />
        </svg>
      </div>
      {isAnswerOpen && (
        <p className='text-[13px] font-semibold leading-relaxed text-black md:text-lg'>
          {answer}
        </p>
      )}
    </div>
  );
}
