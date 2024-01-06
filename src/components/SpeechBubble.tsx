import HighlightText from '@/components/HighlightText';

export interface SpeechBubbleProps {
  content: string;
  color?: string;
  type: 'left' | 'right';
  className?: string;
}

export default function SpeechBubble(props: SpeechBubbleProps) {
  const { content, color, type, className } = props;

  return (
    <div
      className={`flex h-fit w-full ${
        type === 'left' ? 'justify-start' : 'justify-end'
      }`}
    >
      <div
        className={
          `rounded-[30px] px-7 py-5 ${
            type === 'left' ? 'rounded-bl-none' : 'rounded-br-none'
          } bg-${color} ` + className
        }
      >
        <HighlightText
          className={`text-lg font-normal leading-normal ${
            color === 'white' && 'text-black'
          }`}
          text={content}
        />
      </div>
    </div>
  );
}
