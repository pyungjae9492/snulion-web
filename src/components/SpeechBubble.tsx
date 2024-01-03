import HighlightText from "@/components/HighlightText";

interface SpeechBubbleProps {
  content: string;
  color?: string;
  type: "left" | "right";
  className?: string;
}

export default function SpeechBubble(props: SpeechBubbleProps) {

  const { content, color, type, className } = props;

  return (
    <div className={`w-full h-fit flex ${type === "left" ? "justify-start" : "justify-end"}`}>
      <div className={`px-7 py-5 rounded-[30px]
        ${type === "left" ? "rounded-bl-none" : "rounded-br-none"}
        bg-${color} ` + className}
      >
        <HighlightText 
          className={`text-lg leading-normal font-normal ${color === "white" && "text-black"}`}
          text={content}
        />
      </div>
    </div>
  )
}