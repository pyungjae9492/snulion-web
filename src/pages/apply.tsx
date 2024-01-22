import Button from '@/components/Button';
import FAQ from '@/components/FAQ';
import Layout from '@/components/layout/Layout';
import RecruitTimeline from '@/components/RecruitTimeline';
import ApplyCTASection from '@/components/sections/ApplyCTASection';
import Section from '@/components/sections/Section';
import Seo from '@/components/Seo';
import SpeechBubble from '@/components/SpeechBubble';
import Tooltip from '@/components/Tooltip';
import { logEvent } from '@/utils/logHelper';
import { getRecruitInfo } from '@/utils/recruitTimeHelpher';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Marquee from 'react-fast-marquee';

const reviews = [
  {
    content:
      '세미나 퀄리티에 너무 만족했어요! 자료도 너무 좋았고 다들 하나부터 친절하게 설명해 주셔서 얻어가는 부분이 굉장히 많았습니다 :)',
    author: '- 11기 이OO',
  },
  {
    content:
      '기획, 디자인, 개발 과정에 모두 참여해볼 수 있었던 것, 팀원들과 한 달 동안 몰입해서 프로덕트를 완성시켜볼 수 있었던 것이 좋았어요.',
    author: '- 11기 이OO',
  },
  {
    content:
      '오피스투어를 통해 현직자 분들과 이야기를 나눌 수 있어 좋았습니다!',
    author: '- 11기 이OO',
  },
  {
    content:
      '일 년 남짓한 시간 동안 배운 것도 정말 많았고 좋은 사람들을 많이 만날 수 있어서 정말 행복했습니다.',
    author: '- 11기 전OO',
  },
  {
    content:
      '코딩 데이가 있어서 더 자주 보고 친해질 수 있고 세미나와의 연결성이 좋아서 더욱 시너지가 났습니다.',
    author: '- 11기 최OO',
  },
  {
    content:
      '해커톤을 하는 동안 매일같이 새벽에 줌을 켜고 팀원들의 화면을 보며 코딩을 했었는데, 작년 한 해 제일 재밌었던 기억으로 남아 있네요.',
    author: '- 11기 김OO',
  },
  {
    content: '프론트, 백 관련 지식을 압축적으로 배울 수 있었던 것이 좋았어요.',
    author: '- 11기 이OO',
  },
  {
    content:
      '코딩데이로 배운 걸 복습까지 할 수 있어 너무 좋았습니다. 과제도 적당한 분량이었고 세미나도 실습과 강의 비율이 좋았어요!',
    author: '- 11기 박OO',
  },
];

const fAQs = [
  {
    question: '공식활동은 언제, 얼마나 자주 이뤄지나요?',
    answer:
      '멋쟁이사자처럼 1학기 활동에서는 매주 토요일 오후 2시 - 6시에 정기 세미나가 열리고, 월/화 7 - 9시에는 코딩데이가 진행됩니다. 세미나는 매주 필수로 참여해야 하며, 코딩데이는 월요일/화요일 중 각자 가능한 요일에 자유롭게 투표해 참여하실 수 있습니다. \n\n매주 참여가 어려우실 경우 최종 선발이 어렵다는 점 참고 부탁드립니다!',
  },
  {
    question: '개발이 처음이어도 괜찮을까요?',
    answer:
      '네! 상관없습니다. 서울대 멋쟁이사자처럼은 웹개발이 처음인 분들도 함께하실 수 있도록 커리큘럼을 구성하고 있습니다. 개발에 대한 의지만 있다면 누구든 따라갈 수 있으니, 걱정하지 마시고 지원해주세요!',
  },
  {
    question: '멋사에서는 무엇을 배우나요?',
    answer:
      '프론트엔드 트랙에서는 HTML, CSS, Javascript와 React 라이브러리를 다루고, 백엔드 트랙에서는 Django 프레임워크를 학습합니다.',
  },
  {
    question: '2학기에도 리크루팅을 진행하나요?',
    answer:
      '서울대학교 멋쟁이사자처럼은 매년 1학기에만 리크루팅을 진행하며 최소 활동 단위는 1년, 두 학기 연속 활동입니다. 그러니 고민 중이시라면, 이번 리크루팅을 놓치지 마세요! 😉',
  },
  {
    question: '코딩테스트를 못 풀까봐 걱정이 들어요.',
    answer:
      '12기 리크루팅의 코딩테스트 문항은 개발을 처음 해보시는 분들도 충분히 시간을 들이면 푸실 수 있도록 구성되어 있어요. 개발이 아예 처음이라면 파이썬 기본서를 이용해 미리 공부해보셔도 도움이 될 거예요! 또한, 2번 문제의 경우 1회에 한해 메일로 힌트를 제공받을 수 있어요. 자세한 내용은 지원서 코딩테스트 항목을 참조해주세요.',
  },
  {
    question: '동아리비는 얼마인가요?',
    answer:
      '멋쟁이사자처럼 12기 동아리원들께서는 장소 대관, 행사 운영 등을 위해 6만원의 운영비를 납부하셔야 합니다(분납 가능). 운영비 사용 내역은 투명하게 공개됩니다.',
  },
  {
    question: '멋사에 들어가기 나이가 너무 어린(많은)게 아닌가 걱정되어요.',
    answer:
      '나이와 학년은 멋사 합불 여부에 영향을 주지 않습니다. 실제로 작년에 활동한 동아리원들은 15학번부터 23학번까지, 졸업생을 포함해 다양하게 구성되어 있었답니다!',
  },
];

export default function ApplyPage() {
  const { currentYear, remainingDays, status } = getRecruitInfo();
  const router = useRouter();

  const recruitingTooltipText =
    status === 'BEFORE_DOCUMENT_SUBMISSION'
      ? '모집 시작까지'
      : status === 'DOCUMENT_SUBMISSION'
      ? '서류 마감까지'
      : status === 'INTERVIEW'
      ? '결과 발표까지'
      : '리크루팅 완료';

  const recruitingStatusText =
    status === 'BEFORE_DOCUMENT_SUBMISSION'
      ? '모집 예정'
      : status === 'DOCUMENT_SUBMISSION'
      ? '모집 중'
      : status === 'INTERVIEW'
      ? '면접 중'
      : '리크루팅 완료';

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
    logEvent({
      action: 'click',
      category: 'apply_btn',
      label: 'apply_page',
    });
    if (status === 'BEFORE_DOCUMENT_SUBMISSION') {
      alert('모집이 아직 시작되지 않았습니다, 모집 시작일까지 기다려주세요.');
    } else if (status === 'DOCUMENT_SUBMISSION') {
      window.open('https://url.kr/dyofek', '_blank', 'noopener noreferrer');
    } else if (status === 'INTERVIEW') {
      router.push('/apply');
    }
  };

  return (
    <Layout>
      <Seo templateTitle='Apply' />
      <main className='max-md:px-8'>
        <section className='mt-[110px] flex flex-col items-center gap-[120px] md:gap-[240px]'>
          <div className='flex w-full max-w-[900px] flex-col gap-[25px] md:gap-[15px]'>
            <div className='flex flex-col items-center gap-[10px] md:items-start md:gap-[5px]'>
              <Tooltip
                content={`${recruitingTooltipText} ${remainingDaysText} 🦁`}
                arrowPosition='bottom'
              />
              <p className='text-balance text-center text-[28px] font-bold leading-normal md:text-[54px]'>
                <span className='text-orange'>{`${currentYear}기 아기사자`}</span>{' '}
                <span>{`${recruitingStatusText} 🔥`}</span>
              </p>
            </div>
            <div className='flex w-full flex-col items-center justify-between max-md:gap-[110px] md:flex-row'>
              <p className='text-balance text-sm font-normal leading-relaxed max-md:text-center md:text-lg md:font-semibold'>
                {
                  '멋사와 함께 성장할 열정 있는 12기 아기사자를 기다립니다!\n12기 서류 접수 기간 : 24.01.22~24.02.04'
                }
              </p>
              <Button
                className='relative max-md:w-full'
                backgroundColor='orange'
                onClick={onClickApply}
              >
                <Image
                  className='absolute top-[-86.5px]'
                  src='/images/main-lion.png'
                  alt='apply-1'
                  width={150}
                  height={150}
                />
                <span>{applyBtnText}</span>
              </Button>
            </div>
          </div>
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
                <div className='flex gap-5 pr-5'>
                  {reviews.map((review, index) => (
                    <SpeechBubble
                      key={index}
                      className='relative flex h-[150px] w-[250px] items-center justify-center text-center text-[13px] font-semibold md:h-[200px] md:w-[330px] md:text-base md:font-bold'
                      content={review.content}
                      color='white'
                      type='left'
                    >
                      <p className='absolute bottom-2 right-8 text-sm font-normal text-black'>
                        {review.author}
                      </p>
                    </SpeechBubble>
                  ))}
                </div>
              </Marquee>
            </div>
          </Section>
          <ApplyCTASection />
          <Section title='FAQ'>
            <div className='flex w-full flex-col items-center justify-center gap-[14px] md:gap-5'>
              {fAQs.map((fAQ, index) => (
                <FAQ
                  key={'faq-' + index}
                  question={fAQ.question}
                  answer={fAQ.answer}
                />
              ))}
            </div>
          </Section>
        </section>
      </main>
    </Layout>
  );
}
