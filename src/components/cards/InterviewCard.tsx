import Tag from "@/components/Tag";
import Image from "next/image";

interface InterviewCardProps {
  imageSrc: string;
  name: string;
  year: number;
  title: string;
  content: string;
}
  
export default function InterviewCard(props: InterviewCardProps) {

  const { imageSrc, name, year, title, content } = props;

  return (
    <div className="flex flex-col px-9 pt-9 pb-4 w-[359px] h-[397px] rounded-lg bg-white bg-opacity-10 cursor-pointer">
      <div className="flex flex-row w-full gap-9 justify-start items-start">
        <Image
          className="rounded-full overflow-hidden"
          // TODO: Change to imageSrc
          // src={imageSrc}
          src={'/images/people-example.png'}
          alt="interview-card-image"
          width={98}
          height={98}
        />
        <div className="flex flex-col items-start gap-2.5">
          <p className="text-2xl font-semibold">{name}</p>
          <Tag content={`${year}기 운영진`} color="black" />
        </div>
      </div>
      <p className="mt-[26px] mb-4 font-bold text-xl">
        {title}
      </p>
      <p className="text-base leading-loose">
        {content}
      </p>
      <div className="flex h-full justify-end items-end">
        <p className="text-base font-bold">
          MORE
        </p>
      </div>
    </div>
  )
}