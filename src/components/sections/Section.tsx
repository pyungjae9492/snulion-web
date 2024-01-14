import BlinkingSvg from '@/components/BlinkingSvg';
import { useRouter } from 'next/router';

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

  return (
    <div className='flex w-full flex-col items-center gap-10 md:gap-[70px]'>
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
