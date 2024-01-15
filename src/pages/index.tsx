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
import Section from '@/components/sections/Section';
import RecruitTimeline, {
  RecruitTimelineItem,
} from '@/components/RecruitTimeline';
import SponsorSection from '@/components/sections/SponsorSection';
import activityData from '@/data/activity.json';
import ApplyCTASection from '@/components/sections/ApplyCTASection';
import Tooltip from '@/components/Tooltip';
import { Star } from 'lucide-react';
import StarSky from '@/components/StarSky';
import { getRecruitInfo } from '@/utils/recruitTimeHelpher';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

const mainReviews: SpeechBubbleProps[] = [
  {
    color: 'orange',
    content:
      '#세미나 퀄리티에 너무 만족했어요!# 자료도 너무 좋았고, 하나부터 친절하게 설명해주셔서 얻어가는 부분이 굉장히 많았습니다 :)',
    type: 'left',
  },
  {
    color: 'blue',
    content:
      '코딩데이 때 #배운 것을 직접 적용해보는 과정#에서 상당히 얻어가는 게 많다고 느꼈어요.',
    type: 'right',
  },
  {
    color: 'green',
    content:
      '오피스투어 때 #현직자 분들과 이야기를 나눌 수 있어 좋았습니다!# 또한 고려대 멋사 분들과 여러 활동을 함께하며 보다 #넓은 시각을 가지게 된 것 같아요!#',
    type: 'left',
  },
  {
    color: 'purple',
    content:
      '아이디어를 직접 내고 실제 서비스로 구현해내는 과정이 #다른 어떤 곳에서도 쉽게 경험할 수 없는 것#이라 굉장히 소중하고 의미 있게 다가왔어요.',
    type: 'right',
  },
];

export default function HomePage() {
  const router = useRouter();

  const { currentYear, remainingDays, status } = getRecruitInfo();

  const recruitingStatusText =
    status === 'BEFORE_DOCUMENT_SUBMISSION'
      ? '모집 시작까지'
      : status === 'DOCUMENT_SUBMISSION'
      ? '서류 마감까지'
      : status === 'INTERVIEW'
      ? '결과 발표까지'
      : '리크루팅 완료!';
  const remainingDaysText =
    status !== 'RECRUITING_FINISHED'
      ? remainingDays > 0
        ? `D-${remainingDays}`
        : 'D-Day'
      : '';

  const applyBtnText =
    status === 'BEFORE_DOCUMENT_SUBMISSION'
      ? `${currentYear}기 지원하기`
      : status === 'DOCUMENT_SUBMISSION'
      ? `${currentYear}기 지원하기`
      : status === 'INTERVIEW'
      ? '면접 진행 중'
      : `${currentYear + 1}기 모집 알림 받기`;

  const onClickApply = () => {
    if (status === 'BEFORE_DOCUMENT_SUBMISSION') {
      alert('모집이 아직 시작되지 않았습니다, 모집 시작일까지 기다려주세요.');
    } else if (status === 'DOCUMENT_SUBMISSION') {
      router.push('/apply');
    } else if (status === 'INTERVIEW') {
      router.push('/apply');
    }
  };

  return (
    <Layout>
      <Seo templateTitle='Home' />
      <main className='max-md:px-8'>
        <StarSky />
        <section className='relative flex h-dvh w-full flex-col items-center justify-center gap-10'>
          <div className='flex flex-col items-center gap-5'>
            <div className='relative h-[22px] w-[192px] md:h-[30px] md:w-[260px]'>
              <Image
                src='/images/main-logo.png'
                alt='main-logo'
                fill
                priority
              />
            </div>
            <p className='text-center text-[30px] font-bold leading-normal md:text-[58px]'>
              {'기술적 장벽을 허물고\n아이디어를 실현하는 사람들'}
            </p>
          </div>
          <div className='relative flex items-center justify-center'>
            <Button
              className='hidden md:block'
              backgroundColor='orange'
              onClick={onClickApply}
            >
              <span>{applyBtnText}</span>
            </Button>
            <div className='absolute right-[-190px] max-md:hidden'>
              <Tooltip
                content={`${recruitingStatusText} ${remainingDaysText}🔥`}
                arrowPosition='left'
              />
            </div>
          </div>
          <p className='text-center text-[18px] font-semibold leading-normal'>
            {
              '서울대학교 멋쟁이 사자처럼은\n아이디어를 현실로 만드는 웹 프로그래밍 동아리입니다.'
            }
          </p>
          <Button
            className='relative max-md:mt-[150px] max-md:w-full max-md:max-w-[450px] md:hidden'
            backgroundColor='orange'
            onClick={onClickApply}
          >
            <div className='absolute top-[-150px] md:hidden'>
              <Tooltip
                content={`${recruitingStatusText} ${remainingDaysText}🔥`}
                className='!rounded-3xl !px-6 !py-2.5'
                arrowPosition='bottom'
              />
            </div>
            <Image
              className='absolute top-[-116px] hidden max-md:block'
              src='/images/main-lion.png'
              alt='main-apply-btn'
              width={200}
              height={200}
              priority
            />
            <span>{applyBtnText}</span>
          </Button>
          <Image
            className='relative top-11 hidden md:block'
            src='/images/main-scroll-btn.png'
            alt='main-image'
            width={60}
            height={60}
            priority
          />
        </section>
        <section className='mt-14 flex flex-col items-center gap-[120px] md:gap-[240px]'>
          <Section
            title='ABOUT US'
            description={
              '2013년 창립된 이래 총 11기의 멋사인들이 거쳐간\n 서울대학교 멋쟁이사자처럼은 수많은 아이디어가 탄생한 성장의 발판입니다.'
            }
          >
            <div className='relative flex w-full flex-col justify-center gap-3 md:w-fit md:flex-row md:gap-10'>
              <Image
                className='absolute left-0 top-[-116px] max-md:hidden'
                src='/images/main-lion.png'
                alt='main-apply-btn'
                width={200}
                height={200}
                priority
              />
              <AccomplishmentCard title='Since' value={'2013'} />
              <AccomplishmentCard title='People' value={'220+'} />
              <AccomplishmentCard title='Projects' value={'50+'} />
              <Image
                className='absolute right-[-70px] top-[116px] max-md:hidden'
                src='/images/main-lion-labtop.png'
                alt='main-apply-btn'
                width={200}
                height={200}
                priority
              />
            </div>
          </Section>
          <Section
            title='ACTIVITIES'
            description={
              '1년 간의 동아리 활동을 통해 누구나 자신의 아이디어를\n웹 서비스로 구현할 수 있는 능력을 갖추게 됩니다.'
            }
          >
            {activityData.map((activity, index) => (
              <ActivityCard
                key={index}
                index={activity.index}
                title={activity.title}
                //@ts-ignore
                tags={activity.tags}
                description={activity.description}
                imageSrc={activity.imageSrc}
                link={activity.link}
                linkTitle={activity.linkTitle}
              />
            ))}
          </Section>
          <Section
            title='PROJECTS'
            description='해커톤에서 탄생한 프로젝트를 소개합니다.'
          >
            <div className='w-[100vw]'>
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
            </div>
            <Button
              backgroundColor='chip-gradient'
              onClick={() => router.push('/project')}
            >
              더 많은 프로젝트 보기
            </Button>
          </Section>
          <Section title='REVIEWS'>
            <div className='flex w-full max-w-[500px] flex-col items-center gap-8 md:gap-[60px]'>
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
          </Section>
          <Section title='RECRUIT'>
            <RecruitTimeline />
            <Button
              backgroundColor='chip-gradient'
              onClick={() => router.push('/apply')}
            >
              모집 공고 보기
            </Button>
          </Section>
          <ApplyCTASection />
          <SponsorSection />
        </section>
      </main>
    </Layout>
  );
}
