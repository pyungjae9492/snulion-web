import Layout from '@/components/layout/Layout';
import Section from '@/components/sections/Section';
import Seo from '@/components/Seo';
import Sponsor from '@/components/sections/SponsorSection';
import Image from 'next/image';
import activityData from '@/data/activity.json';
import AboutActivityCard from '@/components/cards/AboutActivityCard';
import Marquee from 'react-fast-marquee';

export default function AboutPage() {
  return (
    <Layout>
      <Seo templateTitle='About' />
      <section className='relative flex min-h-lvh w-full flex-col items-start justify-start gap-16 pt-[20vh] max-md:pb-[10vh] md:gap-20 md:px-[15vw] md:pt-[20vh]'>
        <div className='z-10 flex max-w-[90vw] flex-col items-start gap-[15px] max-md:px-8 md:max-w-[660px]'>
          <p className='text-xl font-bold md:text-[34px] md:font-semibold'>
            About
          </p>
          <p className='text-4xl font-bold leading-relaxed md:text-[54px]'>
            <span className='text-orange'>LIKELION</span> <span>SNU</span>
          </p>
          <p className='text-[13px] font-normal leading-loose md:text-lg md:font-semibold md:leading-relaxed'>
            {
              '서울대학교 멋쟁이사자처럼에서 더불어 배우며 성장하는 열린 개발 커뮤니티를 형성하세요!\n\n기수를 거듭할수록 발전하는 교육 자료로 1년 간 기획부터 웹개발까지 기초를 탄탄히 다지고, 여름방학 해커톤과 2학기 스크럼 프로젝트를 통해 실용적 개발 지식을 익힙니다. 또한 연사 초청 강연, 오피스투어, 연합 해커톤 등 멋사 네트워크 속에서 더욱 다채로운 배움을 경험할 수 있습니다.\n개발로 여러분의 아이디어를 실현할 수 있는 그날까지 포기하지 않고 성장할 수 있도록 멋사 운영진들이 함께하겠습니다.'
            }
          </p>
        </div>
        <div className='z-10 flex flex-col items-start gap-4 max-md:px-8 md:gap-[25px]'>
          <p className='text-[13px] font-semibold md:text-lg'>
            어떤 기술을 배우나요?
          </p>
          <div className='flex flex-row gap-[9px] md:gap-5'>
            <div className='flex flex-col items-center gap-4 md:gap-5'>
              <div className='relative size-14 md:size-20'>
                <Image src='/images/js-logo.png' alt='react-logo' fill />
              </div>
              <p className='text-xs font-normal leading-loose md:text-base'>
                Javascript
              </p>
            </div>
            <div className='flex flex-col items-center gap-4 md:gap-5'>
              <div className='relative size-14 md:size-20'>
                <Image src='/images/react-logo.png' alt='react-logo' fill />
              </div>
              <p className='text-xs font-normal leading-loose md:text-base'>
                React
              </p>
            </div>
            <div className='flex flex-col items-center gap-4 md:gap-5'>
              <div className='relative size-14 md:size-20'>
                <Image src='/images/django-logo.png' alt='django-logo' fill />
              </div>
              <p className='text-xs font-normal leading-loose md:text-base'>
                Django
              </p>
            </div>
            <div className='flex flex-col items-center gap-4 md:gap-5'>
              <div className='relative size-14 md:size-20'>
                <Image src='/images/github-logo.png' alt='githb-logo' fill />
              </div>
              <p className='text-xs font-normal leading-loose md:text-base'>
                Git&GitHub
              </p>
            </div>
            <div className='flex flex-col items-center gap-4 md:gap-5'>
              <div className='relative size-14 md:size-20'>
                <Image src='/images/aws-logo.png' alt='aws-logo' fill />
              </div>
              <p className='text-xs font-normal leading-loose md:text-base'>
                AWS
              </p>
            </div>
          </div>
        </div>
        <Image
          className='opacity-10'
          src='/images/about-main-image.jpeg'
          alt='about-main'
          fill
          objectFit='cover'
          objectPosition='center'
          priority
        />
      </section>
      <main className='max-md:px-8'>
        <section className='mt-20 flex flex-col items-center gap-[120px] md:gap-[240px]'>
          <Section
            title='주요 활동'
            description={
              '1년 간의 동아리 활동을 통해 누구나 자신의 아이디어를\n웹 서비스로 구현할 수 있는 능력을 갖추게 됩니다.'
            }
          >
            <div className='md:grid-row-2 grid grid-cols-1 gap-4 md:grid-cols-2'>
              {activityData.map((activity, index) => (
                <AboutActivityCard
                  key={'about-activity-card-' + index}
                  title={activity.title}
                  //@ts-ignore
                  tags={activity.tags}
                  shortDescription={activity.shortDescription}
                  description={activity.description}
                  imageSrc={activity.imageSrc}
                />
              ))}
            </div>
          </Section>
          <Section
            title='활동 일정'
            description={
              '활동 기간 : 2024.03 ~ 2024.12\n*모든 활동은 대면으로 진행되며, 일부 변동 가능성이 있습니다.'
            }
          >
            <div className='relative h-[699px] w-[599px] max-md:hidden'>
              <Image
                src='/images/about-timeline-desktop.png'
                alt='about-timeline-desktop'
                fill
                priority
              />
            </div>
            <div className='relative h-[540px] w-[318px] md:hidden'>
              <Image
                src='/images/about-timeline-mobile.png'
                alt='about-timeline-mobile'
                fill
                priority
              />
            </div>
          </Section>
          <Section
            title='이전 기수 활동 둘러보기'
            description='인스타그램 카드뉴스를 통해 멋사에서 진행한 활동을 둘러보세요.'
          >
            <div className='scrollbar-hide overflow-x-scroll max-md:w-[100vw] max-md:px-8'>
              <div className='flex w-fit items-center justify-center gap-8 overflow-x-auto'>
                <div
                  className='relative size-[230px] cursor-pointer overflow-hidden rounded-lg md:size-[376px]'
                  onClick={() =>
                    window.open(
                      'https://www.instagram.com/p/C162GCZPmUB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
                    )
                  }
                >
                  <Image
                    src='/images/about-cardnews-1.png'
                    alt='about-cardnews-1'
                    fill
                    priority
                  />
                </div>
                <div
                  className='relative size-[230px] cursor-pointer overflow-hidden rounded-lg md:size-[376px]'
                  onClick={() =>
                    window.open(
                      'https://www.instagram.com/p/C2AEkt_vxzO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
                    )
                  }
                >
                  <Image
                    src='/images/about-cardnews-2.png'
                    alt='about-cardnews-1'
                    fill
                    priority
                  />
                </div>
              </div>
            </div>
          </Section>
          <Sponsor />
        </section>
      </main>
    </Layout>
  );
}
