interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  backgroundColor?: string;
  showArrow?: boolean;
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  const { children, className, backgroundColor, showArrow, ...rest } = props;
  return (
    <button
      className={`relative flex w-fit min-w-[163px] items-center justify-center rounded-[5px] px-4 py-2.5 text-base font-semibold leading-normal text-white md:min-w-[220px] md:text-xl md:font-bold bg-${backgroundColor} ${
        backgroundColor === 'chip-gradient' &&
        'border border-white border-opacity-80'
      } ${className}`}
      {...rest}
    >
      {children}
      {showArrow && (
        <div className='absolute right-3 flex h-6 w-6 items-center justify-center md:right-6'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='37'
            height='37'
            viewBox='0 0 37 37'
            fill='none'
          >
            <path
              d='M22.2121 19.2872L17.4496 24.0497C17.0996 24.3997 16.6934 24.481 16.2309 24.2935C15.7684 24.106 15.5371 23.7622 15.5371 23.2622V13.7372C15.5371 13.2372 15.7684 12.8935 16.2309 12.706C16.6934 12.5185 17.0996 12.5997 17.4496 12.9497L22.2121 17.7122C22.3371 17.8372 22.4246 17.9622 22.4746 18.0872C22.5246 18.2122 22.5496 18.3497 22.5496 18.4997C22.5496 18.6497 22.5246 18.7872 22.4746 18.9122C22.4246 19.0372 22.3371 19.1622 22.2121 19.2872Z'
              fill='white'
            />
          </svg>
        </div>
      )}
    </button>
  );
}
