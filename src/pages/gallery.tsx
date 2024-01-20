import Filter from '@/components/Filter';
import Seo from '@/components/Seo';
import Layout from '@/components/layout/Layout';
import { useEffect, useMemo, useState } from 'react';
import galleryData from '@/data/gallery.json';
import GalleryCard from '@/components/cards/GalleryCard';
import { useRouter } from 'next/router';

const galleryTabs = ['전체', '세미나', '네트워킹', '친목행사', '기타'];

export default function PeoplePage() {
  const router = useRouter();

  const [currentFilterIndex, setCurrentFilterIndex] = useState(0);
  const [filteredGalleryData, setFilteredGalleryData] = useState(galleryData);

  const sortedGalleryData = useMemo(() => {
    return galleryData.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }, []);

  useEffect(() => {
    if (currentFilterIndex === 0) {
      setFilteredGalleryData(sortedGalleryData);
    } else {
      setFilteredGalleryData(
        sortedGalleryData.filter(
          (sortedGalleryData) =>
            sortedGalleryData.type === galleryTabs[currentFilterIndex]
        )
      );
    }
  }, [currentFilterIndex]);

  return (
    <Layout>
      <Seo templateTitle='Gallery' />
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
