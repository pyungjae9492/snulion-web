import Filter from '@/components/Filter';
import Seo from '@/components/Seo';
import InterviewCard from '@/components/cards/InterviewCard';
import Layout from '@/components/layout/Layout';
import { useEffect, useState } from 'react';
import peopleDataListJSON from '@/data/people.json';
import InterviewDetail from '@/components/InterviewDetail';
import { useRouter } from 'next/router';

const peopleTabs = ['전체', '11기', '10기', '9기'];

type PeopleData = {
  id: number;
  imageSrc: string;
  name: string;
  year: number;
  title: string;
  content: string;
  interviewContents: { type: 'question' | 'answer'; content: string }[];
};

export default function PeoplePage() {
  const peopleDataList = peopleDataListJSON as PeopleData[];

  const router = useRouter();
  const selectedPersonId = router.query.id;
  const selectedPersonData = peopleDataList.find(
    (person) => person.id === Number(selectedPersonId)
  );

  const [currentFilterIndex, setCurrentFilterIndex] = useState(0);
  const [filteredPeopleData, setFilteredPeopleData] = useState<PeopleData[]>(
    peopleDataList as PeopleData[]
  );

  useEffect(() => {
    if (currentFilterIndex === 0) {
      setFilteredPeopleData(peopleDataList);
    } else {
      setFilteredPeopleData(
        peopleDataList.filter(
          (person) => person.year === 12 - currentFilterIndex
        )
      );
    }
  }, [currentFilterIndex]);

  const onClickInterviewCard = (person: PeopleData) => {
    if (peopleDataList.map((person) => person.id).includes(person.id)) {
      router.push(`/people?id=${person.id}`, undefined, { shallow: true });
    } else {
      alert('존재하지 않는 인터뷰입니다.');
    }
  };

  return (
    <Layout>
      <Seo templateTitle='People' />
      {selectedPersonId ? (
        <InterviewDetail {...selectedPersonData!} />
      ) : (
        <section className='mt-20 flex h-fit w-full flex-col items-center gap-[60px]'>
          <p className='text-[32px] font-bold leading-normal md:text-[46px]'>
            운영진 인터뷰
          </p>
          <Filter
            filterList={peopleTabs}
            currentFilterIndex={currentFilterIndex}
            setCurrentFilterIndex={setCurrentFilterIndex}
          />
          <div className='grid h-full gap-10 md:grid-cols-2 lg:grid-cols-3'>
            {filteredPeopleData.map((person, index) => {
              return (
                <div
                  key={'interview-card-wrapper-' + index}
                  className='h-fit w-fit'
                  onClick={() => onClickInterviewCard(person)}
                >
                  <InterviewCard
                    key={'interview-card-' + index}
                    imageSrc={person.imageSrc}
                    name={person.name}
                    year={person.year}
                    title={person.title}
                    content={person.content}
                  />
                </div>
              );
            })}
          </div>
        </section>
      )}
    </Layout>
  );
}
