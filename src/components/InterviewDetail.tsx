import SpeechBubble from "@/components/SpeechBubble";
import Tag from "@/components/Tag";
import Image from "next/image";
import { useRouter } from "next/router";

interface InterviewDetailProps {
  imageSrc: string;
  name: string;
  year: number;
  interviewContents: { type: "question" | "answer"; content: string }[];
}

export default function InterviewDetail(props: InterviewDetailProps) {

  const { imageSrc, name, year, interviewContents } = props;

  const router = useRouter();

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col max-w-[1000px] w-[90%] md:w-[80%] lg:w-[70%] justify-start items-center">
        <div className="w-full px-[6px] py-[5px] border-b border-opacity-20 border-white mt-14 mb-16">
          <p 
            className="text-lg cursor-pointer"
            onClick={() => router.back()}
          >
            <span className="font-normal">{"운영진 인터뷰 > "}</span>
            <span className="font-bold">{year + "기 " + name}</span>
          </p>
        </div>
        <Image
          className="rounded-full overflow-hidden mb-[30px]"
          // TODO: Change to imageSrc
          // src={imageSrc}
          src={'/images/people-example.png'}
          alt="interview-card-image"
          width={172}
          height={172}
        />
        <p className="text-4xl font-semibold mb-5">
          {name}
        </p>
        <Tag
          className="mb-10"
          content={`${year}기 운영진`}
          color="black"
        />
        <div>
          {interviewContents.map((content, index) => {
            return (
              <SpeechBubble
                key={"speech-bubble-" + index}
                content={content.content}
                type={content.type === "question" ? "left" : "right"}
                color={content.type === "question" ? "orange" : "white"}
                className={content.type === "question" ? "mb-10 w-full md:w-[80%] lg:w-[60%]" : "mb-20 w-full md:w-[90%] lg:w-[85%]"}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}