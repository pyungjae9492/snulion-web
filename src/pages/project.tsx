import Filter from '@/components/Filter';
import Seo from '@/components/Seo';
import Layout from '@/components/layout/Layout';
import { useEffect, useState } from 'react';
import projectData from '@/data/project.json';
import ProjectCard from '@/components/cards/ProjectCard';

const projectTabs = ['전체', '11기', '10기', '9기'];

export default function PeoplePage() {
  const [currentFilterIndex, setCurrentFilterIndex] = useState(0);

  const [filteredProjectData, setFilteredProjectData] = useState(projectData);

  useEffect(() => {
    if (currentFilterIndex === 0) {
      setFilteredProjectData(projectData);
    } else {
      setFilteredProjectData(
        projectData.filter(
          (project) => project.year === 12 - currentFilterIndex
        )
      );
    }
  }, [currentFilterIndex]);

  return (
    <Layout>
      <Seo templateTitle='Project' />
      <section className='mt-20 flex h-fit w-full flex-col items-center gap-[60px]'>
        <p className='text-[32px] font-bold leading-normal md:text-[46px]'>
          프로젝트
        </p>
        <Filter
          filterList={projectTabs}
          currentFilterIndex={currentFilterIndex}
          setCurrentFilterIndex={setCurrentFilterIndex}
        />
        <div className='grid h-full gap-10 md:grid-cols-2 lg:grid-cols-3'>
          {filteredProjectData.map((project, index) => {
            return (
              <ProjectCard
                key={'project-card-' + index}
                imageSrc={project.imageSrc}
                year={project.year}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
