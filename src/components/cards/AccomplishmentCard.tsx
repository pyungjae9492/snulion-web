import { useEffect, useRef, useState } from 'react';
import SlotCounter, { SlotCounterRef } from 'react-slot-counter';

interface AccomplishmentCardProps {
  title: string;
  description?: string;
  number?: number;
}

export default function AccomplishmentCard(props: AccomplishmentCardProps) {
  const { title, description, number } = props;

  // intersection observer

  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<SlotCounterRef>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          counterRef.current?.startAnimation();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(containerRef.current!);
  }, []);

  return (
    <div
      ref={containerRef}
      className='flex h-[233px] w-[262px] flex-col items-center justify-start gap-[25px] rounded-[10px] py-10'
      style={{
        background:
          'linear-gradient(152deg, rgba(187, 187, 187, 0.09) 23.87%, rgba(255, 244, 206, 0.13) 90.05%)',
      }}
    >
      <p className='text-center text-xl font-normal leading-normal'>{title}</p>
      {description && <p>{description}</p>}
    </div>
  );
}
