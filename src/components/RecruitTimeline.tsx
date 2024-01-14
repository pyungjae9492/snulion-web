import Tag from '@/components/Tag';

export type RecruitTimelineItem = {
  title: string;
  color: 'orange' | 'white' | 'black';
  date: string;
};

const recruitTimelineItems: RecruitTimelineItem[] = [
  {
    title: '서류 접수',
    color: 'white',
    date: '1.22(월)~2.4(일)',
  },
  {
    title: '서류 발표',
    color: 'orange',
    date: '2.13(화)',
  },
  {
    title: '개별 면접',
    color: 'white',
    date: '2.16(금)~2.18(일)',
  },
  {
    title: '최종 합격자 발표',
    color: 'orange',
    date: '2.26(월)',
  },
  {
    title: 'OT',
    color: 'white',
    date: '3.2(토)',
  },
];

export default function RecruitTimeline() {
  return (
    <div className='relative flex w-full flex-col items-center justify-center gap-[35px] max-md:pb-20 md:flex-row md:gap-[180px]'>
      {recruitTimelineItems.map((item, index) => (
        <div
          key={'recruit-item-' + index}
          className='relative flex w-[10px] flex-row items-center justify-center overflow-visible max-md:h-[10px] md:flex-col'
        >
          <p
            className={`text-[15px] font-semibold text-white max-md:absolute max-md:left-10 md:text-[20px] md:font-bold md:text-${item.color}`}
          >
            {item.date}
          </p>
          <svg
            className='mx-5 shrink-0 md:hidden'
            xmlns='http://www.w3.org/2000/svg'
            width='12'
            height='12'
            viewBox='0 0 12 12'
            fill='none'
          >
            <circle
              cx='6.125'
              cy='6.10059'
              r='5.5'
              transform='rotate(-90 6.125 6.10059)'
              fill='white'
            />
          </svg>
          <svg
            className='mb-5 mt-6 max-md:hidden'
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
          >
            <circle cx='10' cy='10' r='10' fill='white' />
          </svg>
          <p
            className={`text-orange absolute right-10 text-nowrap text-[15px] font-semibold md:hidden`}
          >
            {item.title}
          </p>
          <Tag
            className='shrink-0 max-md:hidden'
            color={'white'}
            content={item.title}
          />
        </div>
      ))}
      <div
        className='absolute h-[2px] w-full max-w-[1100px] max-md:hidden'
        style={{
          background:
            'linear-gradient(90deg, rgba(255, 255, 255, 0.00) -0.76%, #FFF 26%, #FFF 67.98%, rgba(255, 255, 255, 0.00) 99.99%)',
        }}
      />
      <div
        className='absolute top-0 h-[280px] w-[1px] md:hidden'
        style={{
          background:
            'linear-gradient(rgba(255, 255, 255, 0.00) -0.76%, #FFF 0%, #FFF 67.98%, rgba(255, 255, 255, 0.00) 99.99%)',
        }}
      />
    </div>
  );
}
