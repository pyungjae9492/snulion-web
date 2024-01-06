interface ButtonProps {
  children: React.ReactNode;
  backgroundColor?: string;
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  const { children, backgroundColor } = props;
  return (
    <button
      className={`flex w-[220px] items-center justify-center rounded-[5px] px-4 py-2.5 text-xl font-bold leading-normal text-white bg-${backgroundColor} ${
        backgroundColor === 'chip-gradient' &&
        'border border-white border-opacity-80'
      }`}
      {...props}
    >
      {children}
    </button>
  );
}
