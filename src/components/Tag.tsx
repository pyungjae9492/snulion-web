export interface TagProps {
  className?: string;
  content: string;
  color:
    | 'orange'
    | 'blue'
    | 'green'
    | 'purple'
    | 'white'
    | 'black'
    | 'transparent';
}

export default function Tag(props: TagProps) {
  const { color, content, className } = props;

  return (
    <div
      className={
        `flex h-8 max-h-8 items-center px-[10px] ${
          color === 'orange'
            ? 'bg-orange text-white'
            : color === 'blue'
            ? 'bg-blue text-white'
            : color === 'green'
            ? 'bg-green text-white'
            : color === 'purple'
            ? 'bg-purple text-white'
            : color === 'white'
            ? 'bg-white text-black'
            : color === 'black'
            ? 'bg-chip-gradient border border-white text-white'
            : 'border border-white bg-transparent text-white'
        } w-fit text-nowrap rounded-[20px] text-[13px] font-semibold md:text-base ` +
        className
      }
    >
      {content}
    </div>
  );
}
