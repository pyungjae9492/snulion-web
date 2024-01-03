import Tag from "@/components/Tag";
import Image from "next/image";

interface InterviewCardProps {
  imageSrc: string;
  year: number;
  title: string;
  description: string;
  link: string;
}
  
export default function ProjectCard(props: InterviewCardProps) {

  const { imageSrc, year, title, description, link } = props;

  return (
    <div
      className="flex flex-col p-7 w-[351px] h-[380px] rounded-lg bg-white bg-opacity-10 cursor-pointer"
      onClick={() => link && window.open(link, "_blank")}
    >
      <div className="flex flex-col w-full h-full gap-[22px]">
        <div className="relative w-[300px] h-[220px]">
          <Image
            src={imageSrc}
            alt="interview-card-image"
            fill
          />
        </div>
        <div className="flex flex-row justify-between">
          <p className="text-lg font-bold">
            {title}
          </p>
          <Tag content={`${year}기`} color="black" />
        </div>
      </div>
      <div className="mt-2">
        <p className="text-base leading-normal max-h-[48px]">
          {description}
        </p>
      </div>
    </div>
  )
}