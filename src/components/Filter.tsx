interface FilterProps {
  filterList: string[];
  currentFilterIndex: number;
  setCurrentFilterIndex: (index: number) => void;
}

export default function Filter(props: FilterProps) {
  const { filterList, currentFilterIndex, setCurrentFilterIndex } = props;

  return (
    <div className='scrollbar-hide flex w-full flex-row justify-center gap-[22px] overflow-auto px-[8vw] max-sm:justify-start'>
      {filterList.map((filter, index) => (
        <button
          key={index}
          className={`flex h-[34px] min-w-[65px] shrink-0 items-center justify-center rounded-[5px] border border-white px-2.5 text-sm font-semibold md:text-lg ${
            index === currentFilterIndex
              ? 'bg-white text-black'
              : 'bg-chip-gradient text-white'
          }`}
          onClick={() => setCurrentFilterIndex(index)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
