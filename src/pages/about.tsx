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
      <section className='relative flex h-lvh w-full flex-col items-start justify-start gap-16 pt-[20vh] md:gap-20 md:px-[15vw] md:pt-[25vh]'>
        <div className='z-10 flex max-w-[90vw] flex-col items-start gap-[15px] max-md:px-8 md:max-w-[660px]'>
          <p className='text-xl font-bold md:text-[34px] md:font-semibold'>
            About
          </p>
          <p className='text-4xl font-bold leading-relaxed md:text-[54px]'>
            <span className='text-orange'>LIKELION</span> <span>SNU</span>
          </p>
          <p className='text-[13px] text-lg font-normal md:font-semibold'>
            {
              '피로그래밍은 두달의 방학기간 동안 일주일에 3번 이루어지는 세션을 통해 웹 개발에 대한 전반적인 지식과 경험을 쌓는 대학생들을 위한 연합 동아리입니다. 협업툴인 Git과 GitHub를 다루는 방법, 웹 개발 기초 (HTML, CSS, JavaScript)를 배우고, Python과 Django 프레임워크를 기반으로 웹 프로그래밍 학습을 진행합니다. 피로그래밍에서는 성장과 협력의 가치를 이어나갑니다.'
            }
          </p>
        </div>
        <div className='z-10 flex flex-col items-start gap-4 max-md:px-8 md:gap-[25px]'>
          <p className='text-[13px] font-semibold md:text-lg'>
            어떤 기술을 배우나요?
          </p>
          <div className='flex flex-row gap-4 md:gap-5'>
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
        />
      </section>
      <main className='max-md:px-8'>
        <section className='mt-20 flex flex-col items-center gap-[120px] md:gap-[240px]'>
          <Section
            title='주요 활동'
            description={
              '1년 간의 교육 과정을 통해 누구나 자신의 아이디어를\n웹 서비스로 구현할 수 있는 능력을 갖추게 됩니다'
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
            <div className='relative h-[669px] w-[566px] max-md:hidden'>
              <Image
                src='/images/about-timeline-desktop.png'
                alt='about-timeline-desktop'
                fill
              />
            </div>
            <div className='relative h-[540px] w-[292px] md:hidden'>
              <Image
                src='/images/about-timeline-mobile.png'
                alt='about-timeline-mobile'
                fill
              />
            </div>
          </Section>
          <Section
            title='이전 기수 활동 둘러보기'
            description='인스타 카드뉴스를 통해 멋사에서 진행한 활동을 둘러보세요'
          >
            <div className='flex items-center justify-center gap-8'>
              <div className='relative size-[376px] overflow-hidden rounded-lg'>
                <Image
                  src='/images/about-cardnews-1.png'
                  alt='about-cardnews-1'
                  fill
                />
              </div>
              <div className='relative size-[376px] overflow-hidden rounded-lg'>
                <Image
                  src='/images/about-cardnews-2.png'
                  alt='about-cardnews-1'
                  fill
                />
              </div>
            </div>
          </Section>
          <Sponsor />
        </section>
      </main>
    </Layout>
  );
}
