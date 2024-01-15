import { useRef } from 'react';

function Arrow() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='17'
      height='8'
      viewBox='0 0 17 8'
      fill='none'
    >
      <path
        d='M16.5 0H0.5L7.08579 6.58579C7.86684 7.36684 9.13317 7.36684 9.91421 6.58579L16.5 0Z'
        fill='white'
      />
    </svg>
  );
}

interface TooltipProps {
  content: string;
  arrowPosition?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
  textClassName?: string;
}

export default function Tooltip(props: TooltipProps) {
  const { content, arrowPosition, className, textClassName } = props;

  return (
    <div
      className={
        'relative flex w-fit items-center justify-center rounded-lg bg-white px-[14px] py-[6px] ' +
        className
      }
    >
      <div
        className={`absolute ${
          arrowPosition === 'top'
            ? 'top-[-7.5px] rotate-180'
            : arrowPosition === 'bottom'
            ? 'bottom-[-7.5px]'
            : arrowPosition === 'left'
            ? 'left-[-12px] rotate-90'
            : arrowPosition === 'right' && 'right-[-12px] -rotate-90'
        }`}
      >
        <Arrow />
      </div>
      <p className={'text-base font-bold text-black ' + textClassName}>
        {content}
      </p>
    </div>
  );
}
