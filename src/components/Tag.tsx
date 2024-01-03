interface TagProps {
  className?: string;
  content: string;
  color: "orange" | "white" | "black";
}

export default function Tag(props: TagProps) {

  const { color, content, className } = props;

  return (
    <div className={`flex px-[10px] h-8 max-h-8 items-center ${
      color === "orange" ? "bg-orange text-white" : 
      color === "white" ? "bg-white text-black" :
      "bg-chip-gradient text-white border border-white"
    } rounded-[20px] text-base font-semibold ` + className}>
      {content}
    </div>
  )
}