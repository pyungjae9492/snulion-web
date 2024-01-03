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

  return (
    <Layout>
      <Seo templateTitle='Gallery' />
      <section className="h-fit w-full flex flex-col gap-[91px] mt-20 items-center">
        <p className="text-[46px] leading-normal font-bold">
          갤러리
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 h-full">
          
        </div>
      </section>
    </Layout>
  )
}