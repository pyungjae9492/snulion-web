import Filter from '@/components/Filter';
import Seo from '@/components/Seo';
import Layout from '@/components/layout/Layout';
import { useEffect, useState } from 'react';
import galleryData from '@/data/gallery.json';
import GalleryCard from '@/components/cards/GalleryCard';

const galleryTabs = ['전체', '세미나', '네트워킹', '친목행사', '기타'];

export default function PeoplePage() {
  const [currentFilterIndex, setCurrentFilterIndex] = useState(0);

  const [filteredGalleryData, setFilteredGalleryData] = useState(galleryData);

  useEffect(() => {
    if (currentFilterIndex === 0) {
      setFilteredGalleryData(galleryData);
    } else {
      setFilteredGalleryData(
        galleryData.filter(
          (galleryData) => galleryData.type === galleryTabs[currentFilterIndex]
        )
      );
    }
  }, [currentFilterIndex]);

  return (
    <Layout>
      <Seo templateTitle='Project' />
      <section className='mt-20 flex h-fit w-full flex-col items-center gap-[60px] overflow-hidden'>
        <p className='text-[32px] font-bold leading-normal md:text-[46px]'>
          갤러리
        </p>
        <Filter
          filterList={galleryTabs}
          currentFilterIndex={currentFilterIndex}
          setCurrentFilterIndex={setCurrentFilterIndex}
        />
        <div className='grid h-full gap-10 md:grid-cols-2 lg:grid-cols-3'>
          {filteredGalleryData.map((project, index) => {
            return (
              <GalleryCard
                key={'project-card-' + index}
                imageSrc={project.imageSrc}
                title={project.title}
                type={project.type}
                date={project.date}
              />
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
