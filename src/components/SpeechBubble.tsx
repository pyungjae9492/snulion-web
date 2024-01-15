import HighlightText from '@/components/HighlightText';

export interface SpeechBubbleProps {
  content: string;
  color?: string;
  type: 'left' | 'right';
  className?: string;
  children?: React.ReactNode;
}

export default function SpeechBubble(props: SpeechBubbleProps) {
  const { content, color, type, className, children } = props;

  return (
    <div
      className={`flex h-fit w-full ${
        type === 'left' ? 'justify-start' : 'justify-end'
      }`}
    >
      <div
        className={
          `rounded-[30px] px-7 py-5 ${
            color === 'orange'
              ? 'bg-orange'
              : color === 'blue'
              ? 'bg-blue'
              : color === 'green'
              ? 'bg-green'
              : color === 'purple'
              ? 'bg-purple'
              : color === 'white' && 'bg-white'
          } ${type === 'left' ? 'rounded-bl-none' : 'rounded-br-none'} ` +
          className
        }
      >
        <HighlightText
          textClassName={`text-[13px] md:text-lg font-normal leading-normal text-balanced ${
            color === 'white' && 'text-black'
          }`}
          text={content}
        />
        {children}
      </div>
    </div>
  );
}
