import BlinkingSvg from '@/components/BlinkingSvg';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface SectionProps {
  title: string;
  titleClassName?: string;
  description?: string;
  children: React.ReactNode;
  showBlinkComponent?: boolean;
}

export default function Section(props: SectionProps) {
  const {
    title,
    titleClassName,
    description,
    children,
    showBlinkComponent = true,
  } = props;

  const router = useRouter();

  // intersection observer
  const [ref, inView, entry] = useInView({
    threshold: 0.25,
  });

  useEffect(() => {
    if (router.pathname !== '/') return;
    // console.log(inView);
    if (inView) {
      // change opacity
      if (entry) {
        entry.target.classList.remove('opacity-0');
        entry.target.classList.add('opacity-100');
      }
    } else {
      // change opacity
      if (entry) {
        entry.target.classList.add('opacity-0');
        entry.target.classList.remove('opacity-100');
      }
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`flex w-full flex-col items-center gap-10 transition-all duration-500 md:gap-[70px] ${
        router.pathname === '/' && 'opacity-0'
      }`}
    >
      <div className='flex flex-col items-center gap-10'>
        {showBlinkComponent && router.pathname === '/' && <BlinkingSvg />}
        <p
          className={`text-center text-[22px] font-bold leading-[32px] md:text-[38px] ${titleClassName}`}
        >
          {title}
        </p>
        {description && (
          <p
            className={`text-center text-[13px] font-semibold leading-normal md:text-[18px]`}
          >
            {description}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}
