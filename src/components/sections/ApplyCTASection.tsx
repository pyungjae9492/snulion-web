import Button from '@/components/Button';
import Section from '@/components/sections/Section';

export default function ApplyCTASection() {
  return (
    <Section
      title={
        '멋쟁이사자처럼과 함께 성장할\n열정있는 12기 아기사자를 기다립니다!'
      }
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
    </Section>
  );
}
