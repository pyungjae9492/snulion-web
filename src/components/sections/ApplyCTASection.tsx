import Button from '@/components/Button';
import Section from '@/components/sections/Section';
import { logEvent } from '@/utils/logHelper';
import { getRecruitInfo } from '@/utils/recruitTimeHelpher';
import { useRouter } from 'next/router';

export default function ApplyCTASection() {
  const router = useRouter();
  const { currentYear, remainingDays, status } = getRecruitInfo();

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
      label: router.pathname.replace('/', '') + '_page',
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
    <Section
      title={
        '멋쟁이사자처럼과 함께 성장할\n열정있는 12기 아기사자를 기다립니다!'
      }
      titleClassName='leading-normal'
      showBlinkComponent={false}
    >
      <Button backgroundColor='orange' onClick={onClickApply}>
        {applyBtnText}
      </Button>
    </Section>
  );
}
