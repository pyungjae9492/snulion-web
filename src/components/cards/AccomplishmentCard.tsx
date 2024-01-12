import { useEffect, useRef, useState } from 'react';
import SlotCounter, { SlotCounterRef } from 'react-slot-counter';

interface AccomplishmentCardProps {
  title: string;
  value: string;
}

export default function AccomplishmentCard(props: AccomplishmentCardProps) {
  const { title, value } = props;

  return (
    <div
      className='flex h-[120px] w-full flex-col items-center justify-start gap-2 rounded-[10px] py-4 md:h-[233px] md:w-[262px] md:gap-[25px] md:py-10'
      style={{
        background:
          'linear-gradient(152deg, rgba(187, 187, 187, 0.09) 23.87%, rgba(255, 244, 206, 0.13) 90.05%)',
      }}
    >
      <p className='text-center text-base font-normal leading-normal md:text-xl'>
        {title}
      </p>
      <p className='text-center text-[32px] font-bold leading-normal md:text-[44px]'>
        {value}
      </p>
    </div>
  );
}
