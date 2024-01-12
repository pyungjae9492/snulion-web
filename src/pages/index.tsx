import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Image from 'next/image';
import Button from '@/components/Button';
import projectData from '@/data/project.json';
import ProjectCard from '@/components/cards/ProjectCard';
import Marquee from 'react-fast-marquee';
import { useRouter } from 'next/router';
import SpeechBubble, { SpeechBubbleProps } from '@/components/SpeechBubble';
import AccomplishmentCard from '@/components/cards/AccomplishmentCard';
import ActivityCard, {
  ActivityCardProps,
} from '@/components/cards/ActivityCard';
import BlinkingSvg from '@/components/BlinkingSvg';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

interface HomeSectionProps {
  title: string;
  titleClassName?: string;
  description?: string;
  children: React.ReactNode;
  showBlinkComponent?: boolean;
}

const HomeSection = (props: HomeSectionProps) => {
  const {
    title,
    titleClassName,
    description,
    children,
    showBlinkComponent = true,
  } = props;
  return (
    <div className='flex w-full flex-col items-center gap-10 md:gap-[70px]'>
      <div className='flex flex-col items-center gap-10'>
        {showBlinkComponent && <BlinkingSvg />}
        <p
          className={`text-center text-[22px] font-bold leading-[32px] md:text-[38px] ${titleClassName}`}
        >
          {title}
        </p>
        {description && (
          <p
            className={`text-center text-[13px] font-semibold leading-normal md:text-[18px]`}
          >
            {description}
          </p>
        )}
      </div>
      {children}
    </div>
  );
};

const mainReviews: SpeechBubbleProps[] = [
  {
    color: 'orange',
    content:
      '세미나 퀄리티에 너무 만족했어요! 자료도 너무 좋았구 다들 하나부터 친절하게 설명해주셔서 얻어가는 부분이 굉장히 많았습니다 :)',
    type: 'left',
  },
  {
    color: 'blue',
    content:
      '코딩데이 때 배운 것을 직접 적용해보는 과정에서 상당히 얻어가는 게 많다고 느꼈어요.',
    type: 'right',
  },
  {
    color: 'green',
    content:
      '오피스투어 때 현직자 분들과 이야기를 나눌 수 있어 좋았습니다! 또한 고려대 멋사 분들과 여러 활동을 함께하며 보다 넓은 시각을 가지게 된 것 같아요!',
    type: 'left',
  },
  {
    color: 'purple',
    content:
      '아이디어를 직접 내고 실제 서비스로 구현해내는 과정이 다른 어떤 곳에서도 쉽게 경험할 수 없는 것이라 굉장히 소중하고 의미 있게 다가왔어요.',
    type: 'right',
  },
];

const activities: ActivityCardProps[] = [
  {
    index: 1,
    title: '정기 세미나',
    tags: ['1, 2학기', '토 14~18시'],
    description:
      '기초부터 실전까지 웹 개발을 배워요.\n알찬 자료와 실습 중심의 세미나로\n프론트엔드와 백엔드 개발을 모두 경험할 수 있어요.',
    imageSrc: '/images/activity-example.png',
    link: '/about?section=curriculum',
    linkTitle: '커리큘럼 보기',
  },
];

export default function HomePage() {
  const router = useRouter();

  return (
    <Layout>
      <Seo templateTitle='Home' />
      <main className='max-md:px-8'>
        <section className='relative flex h-dvh w-full flex-col items-center justify-center gap-10'>
          <div className='flex flex-col items-center gap-5'>
            <div className='relative h-[22px] w-[192px] md:h-[30px] md:w-[260px]'>
              <Image src='/images/main-logo.png' alt='main-logo' fill />
            </div>
            <p className='text-center text-[30px] font-bold leading-normal md:text-[58px]'>
              {'기술적 장벽을 허물고\n아이디어를 실현하는 사람들'}
            </p>
          </div>
          <Button className='hidden md:block' backgroundColor='orange'>
            <span>12기 지원하기</span>
          </Button>
          <p className='text-center text-[18px] font-semibold leading-normal'>
            {'지원 기간: 2021.08.30(월) ~ 2021.09.12(일)'}
          </p>
          <Button
            className='relative max-md:mt-[150px] max-md:w-full max-md:max-w-[450px] md:hidden'
            backgroundColor='orange'
          >
            <Image
              className='absolute top-[-116px] hidden max-md:block'
              src='/images/main-lion.png'
              alt='main-apply-btn'
              width={200}
              height={200}
            />
            <span>12기 지원하기</span>
          </Button>
          <Image
            className='relative top-11 hidden md:block'
            src='/images/main-scroll-btn.png'
            alt='main-image'
            width={60}
            height={60}
          />
        </section>
        <section className='mt-14 flex flex-col items-center gap-[120px] md:gap-[240px]'>
          <HomeSection title='ABOUT US' description='우리는 누구인가요?'>
            <div className='flex w-full flex-col justify-center gap-3 md:flex-row md:gap-10'>
              <AccomplishmentCard title='Since' value={'2013'} />
              <AccomplishmentCard title='People' value={'220+'} />
              <AccomplishmentCard title='Projects' value={'50+'} />
            </div>
          </HomeSection>
          <HomeSection
            title='ACTIVITIES'
            description={
              '주요 활동을 설명하는 내용\n멋사 활동만 잘 따라와도 머찐 웹 개발자로  성장할 수 있다~'
            }
          >
            {activities.map((activity, index) => (
              <ActivityCard
                key={index}
                index={activity.index}
                title={activity.title}
                tags={activity.tags}
                description={activity.description}
                imageSrc={activity.imageSrc}
                link={activity.link}
                linkTitle={activity.linkTitle}
              />
            ))}
          </HomeSection>
          <HomeSection
            title='PROJECTS'
            description='해커톤에서 탄생한 프로젝트를 소개합니다'
          >
            <Marquee speed={75}>
              <div className='mr-[25px] flex w-full flex-row gap-[25px] overflow-auto'>
                {projectData.map((project, index) => (
                  <ProjectCard
                    key={index}
                    imageSrc={project.imageSrc}
                    title={project.title}
                    description={project.description}
                    year={project.year}
                    link={project.link}
                  />
                ))}
              </div>
            </Marquee>
            <Button
              backgroundColor='chip-gradient'
              onClick={() => router.push('/project')}
            >
              더 많은 프로젝트 보기
            </Button>
          </HomeSection>
          <HomeSection title='REVIEWS'>
            <div className='flex w-full max-w-[500px] flex-col items-center gap-[60px]'>
              {mainReviews.map((review, index) => (
                <div key={'main-speech-bubble-' + index}>
                  <SpeechBubble
                    color={review.color}
                    content={review.content}
                    type={review.type}
                    className='w-[85%]'
                  />
                </div>
              ))}
            </div>
            <Button
              backgroundColor='chip-gradient'
              onClick={() => router.push('/people')}
            >
              운영진 인터뷰 보기
            </Button>
          </HomeSection>
          <HomeSection title='RECRUIT'>
            <Button
              backgroundColor='chip-gradient'
              onClick={() => router.push('/apply')}
            >
              모집 공고 보기
            </Button>
          </HomeSection>
          <HomeSection
            title={'멋사와 함께 성장할\n열정있는 12기 아기사자를 기다립니다!'}
            titleClassName='leading-normal'
            showBlinkComponent={false}
          >
            <Button
              backgroundColor='orange'
              // TODO: Change to 구글폼 link
              // onClick={() => router.push('/apply')}
            >
              12기 지원하기
            </Button>
          </HomeSection>
          <HomeSection title='SPONSORED BY'>
            <div className='flex flex-row gap-10 md:gap-[54px]'>
              <div className='relative h-[31px] w-[127px] md:h-[63px] md:w-[200px]'>
                <Image
                  src='/images/main-springcamp-logo.png'
                  alt='sponsor-1'
                  width={200}
                  height={50}
                />
              </div>
              <div className='relative h-[39px] w-[122px] md:h-[63px] md:w-[200px]'>
                <Image
                  src='/images/main-channel-talk-logo.png'
                  alt='sponsor-1'
                  width={200}
                  height={63}
                />
              </div>
            </div>
            <Button
              backgroundColor='chip-gradient'
              // TODO: Change to 구글폼 link
              // onClick={() => router.push('/apply')}
            >
              후원 문의
            </Button>
          </HomeSection>
        </section>
      </main>
    </Layout>
  );
}
