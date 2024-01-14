import FAQ from '@/components/FAQ';
import Layout from '@/components/layout/Layout';
import RecruitTimeline from '@/components/RecruitTimeline';
import ApplyCTASection from '@/components/sections/ApplyCTASection';
import Section from '@/components/sections/Section';
import Seo from '@/components/Seo';
import SpeechBubble from '@/components/SpeechBubble';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

export default function ApplyPage() {
  return (
    <Layout>
      <Seo templateTitle='Apply' />
      <main className='max-md:px-8'>
        <section className='mt-14 flex flex-col items-center gap-[120px] md:gap-[240px]'>
          <Section title='모집 대상'>
            <div className='flex w-full flex-col justify-center gap-[14px] md:flex-row md:gap-8'>
              <div className='flex h-[133px] w-full items-center justify-center rounded-[20px] bg-white bg-opacity-10 md:h-[220px] md:max-w-[280px]'>
                <p className='text-center text-[15px] font-semibold leading-relaxed md:text-lg'>
                  {'서울대학교\n재학생/휴학생/졸업생'}
                </p>
              </div>
              <div className='flex h-[133px] w-full items-center justify-center rounded-[20px] bg-white bg-opacity-10 md:h-[220px] md:max-w-[280px]'>
                <p className='text-center text-[15px] font-semibold leading-relaxed md:text-lg'>
                  {
                    '매주 진행되는\n필참 세션(세미나, 코딩데이)에\n빠짐없이 참석 가능한 분'
                  }
                </p>
              </div>
              <div className='relative flex h-[133px] w-full items-center justify-center rounded-[20px] bg-white bg-opacity-10 md:h-[220px] md:max-w-[280px]'>
                <p className='text-center text-[15px] font-semibold leading-relaxed md:text-lg'>
                  {'웹 개발을 배우는 목표가 뚜렷하고\n성장 가능성이 있는 분'}
                </p>
                <Image
                  className='absolute bottom-[-20px] right-[-80px] max-md:hidden'
                  src='/images/apply-lion.png'
                  alt='apply-1'
                  width={150}
                  height={150}
                />
              </div>
            </div>
          </Section>
          <Section title='12기 모집 절차'>
            <RecruitTimeline />
          </Section>
          <Section title='11기 활동 후기'>
            <div className='h-fit w-[100vw]'>
              <Marquee speed={75}>
                <SpeechBubble
                  className='flex h-[125px] w-[215px] items-center justify-center text-center text-[13px] font-semibold md:h-[170px] md:w-[300px] md:text-base md:font-bold'
                  content='멋사에서는 성장과 협력의 가치를 이어나갑니다.'
                  color='white'
                  type='left'
                />
              </Marquee>
            </div>
          </Section>
          <ApplyCTASection />
          <Section title='FAQ'>
            <FAQ
              question='공지사항은 어디서 확인할 수 있나요?'
              answer='공지사항은 홈페이지의 공지사항 페이지와 페이스북 페이지에서 확인할 수 있습니다.'
            />
          </Section>
        </section>
      </main>
    </Layout>
  );
}
