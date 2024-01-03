import Filter from "@/components/Filter";
import Seo from "@/components/Seo";
import InterviewCard from "@/components/cards/InterviewCard";
import Layout from "@/components/layout/Layout";
import { useEffect, useState } from "react";
import peopleDataListJSON from "@/data/people.json";
import InterviewDetail from "@/components/InterviewDetail";
import { useRouter } from "next/router";

const peopleTabs = [
  "전체",
  "11기",
  "10기",
  "9기",
]

type PeopleData = {
  id: number;
  imageSrc: string;
  name: string;
  year: number;
  title: string;
  content: string;
  interviewContents: { type: "question" | "answer"; content: string }[];
}

export default function PeoplePage() {

  const peopleDataList = peopleDataListJSON as PeopleData[];

  const router = useRouter();
  const selectedPersonId = router.query.id;
  const selectedPersonData = peopleDataList.find(person => person.id === Number(selectedPersonId));

  const [currentFilterIndex, setCurrentFilterIndex] = useState(0);
  const [filteredPeopleData, setFilteredPeopleData] = useState<PeopleData[]>(peopleDataList as PeopleData[]);

  useEffect(() => {
    if (currentFilterIndex === 0) {
      setFilteredPeopleData(peopleDataList);
    } else {
      setFilteredPeopleData(peopleDataList.filter(person => person.year === 12 - currentFilterIndex));
    }
  }, [currentFilterIndex]);

  const onClickInterviewCard = (person: PeopleData) => {
    if (peopleDataList.map(person => person.id).includes(person.id)) {
      router.push(`/people?id=${person.id}`, undefined, { shallow: true });
    } else {
      alert("존재하지 않는 인터뷰입니다.");
    }
  }

  return (
    <Layout>
      <Seo templateTitle='People' />
      {selectedPersonId ? (
        <InterviewDetail
          {...selectedPersonData!}
        />
      ) : (
        <section className="h-fit w-full flex flex-col gap-[60px] mt-20 items-center">
          <p className="text-[46px] leading-normal font-bold">
            운영진 인터뷰
          </p>
          <Filter
            filterList={peopleTabs}
            currentFilterIndex={currentFilterIndex}
            setCurrentFilterIndex={setCurrentFilterIndex}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 h-full">
            {filteredPeopleData.map((person, index) => {
              return (
                <div 
                  className="w-fit h-fit"
                  onClick={() => onClickInterviewCard(person)}
                >
                  <InterviewCard
                    key={"interview-card-" + index}
                    imageSrc={person.imageSrc}
                    name={person.name}
                    year={person.year}
                    title={person.title}
                    content={person.content}
                  />
                </div>
              )
            })}
          </div>
        </section>
      )}
    </Layout>
  )
}