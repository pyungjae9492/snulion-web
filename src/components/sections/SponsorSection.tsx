import Button from '@/components/Button';
import Section from '@/components/sections/Section';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function SponsorSection() {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <Section title='SPONSORED BY'>
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
    </Section>
  );
}
