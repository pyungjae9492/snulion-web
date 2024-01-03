
interface FilterProps {
  filterList: string[];
  currentFilterIndex: number;
  setCurrentFilterIndex: (index: number) => void;
}

export default function Filter(props: FilterProps) {

  const { filterList, currentFilterIndex, setCurrentFilterIndex } = props;

  return (
    <div className="flex flex-row gap-[22px]">
      {filterList.map((filter, index) => (
        <button 
          key={index}
          className={`flex justify-center items-center w-[65px] h-[34px] border-white border rounded-[5px] text-[18px] font-semibold ${
            index === currentFilterIndex ? "bg-white text-black" : "bg-chip-gradient text-white"
          }`}
          onClick={() => setCurrentFilterIndex(index)}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}