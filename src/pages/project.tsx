import Filter from "@/components/Filter";
import Seo from "@/components/Seo";
import Layout from "@/components/layout/Layout";
import { useEffect, useState } from "react";
import projectData from "@/data/project.json";
import ProjectCard from "@/components/cards/ProjectCard";

const projectTabs = [
  "전체",
  "11기",
  "10기",
  "9기",
]

export default function PeoplePage() {

  const [currentFilterIndex, setCurrentFilterIndex] = useState(0);

  const [filteredProjectData, setFilteredProjectData] = useState(projectData);

  useEffect(() => {
    if (currentFilterIndex === 0) {
      setFilteredProjectData(projectData);
    } else {
      setFilteredProjectData(projectData.filter(project => project.year === 12 - currentFilterIndex));
    }
  }, [currentFilterIndex]);

  return (
    <Layout>
      <Seo templateTitle='Project' />
      <section className="h-fit w-full flex flex-col gap-[60px] mt-20 items-center">
        <p className="text-[46px] leading-normal font-bold">
          프로젝트
        </p>
        <Filter
          filterList={projectTabs}
          currentFilterIndex={currentFilterIndex}
          setCurrentFilterIndex={setCurrentFilterIndex}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 h-full">
          {filteredProjectData.map((project, index) => {
            return (
              <ProjectCard
                key={"project-card-" + index}
                imageSrc={project.imageSrc}
                year={project.year}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            )
          })}
        </div>
      </section>
    </Layout>
  )
}