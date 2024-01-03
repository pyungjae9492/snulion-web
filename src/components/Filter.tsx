interface FilterProps {
  filterList: string[];
  currentFilterIndex: number;
  setCurrentFilterIndex: (index: number) => void;
}

export default function Filter(props: FilterProps) {
  const { filterList, currentFilterIndex, setCurrentFilterIndex } = props;

  return (
    <div className='flex flex-row gap-[22px]'>
      {filterList.map((filter, index) => (
        <button
          key={index}
          className={`flex h-[34px] min-w-[65px] items-center justify-center rounded-[5px] border border-white px-2.5 text-[18px] font-semibold ${
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
