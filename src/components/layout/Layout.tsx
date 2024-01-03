import Image from 'next/image';
import { useRouter } from 'next/router';
import * as React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {

  const router = useRouter();

  const onClickHeaderLogo = () => {
    router.push('/');
  }

  const onClickAbout = () => {
    router.push('/about');
  }

  const onClickPeople = () => {
    router.push('/people');
  }

  const onClickProject = () => {
    router.push('/project');
  }

  const onClickGallery = () => {
    router.push('/gallery');
  }

  const onClickApply = () => {
    router.push('/apply');
  }

  const currentPath = router.pathname;

  console.log(currentPath);

  return <div 
    className='fixed top-0 min-h-[100dvh] h-full w-full flex flex-col overflow-scroll'
    style={{
      background: "var(--background, linear-gradient(180deg, rgba(0, 0, 0, 0.85) 0%, #282C33 52.08%))"
    }}
  >
    <header 
      className='sticky top-0 flex flex-row justify-between items-center w-full h-fit px-[60px] py-[27.5px] z-50'
      style={{
        background: "linear-gradient(180deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.00) 100%)"
      }}
    >
      <button 
        className='relatvie w-[236px] h-[30px]'
        onClick={onClickHeaderLogo}
      >
        <Image 
          src='/images/header-logo.png'
          alt='logo'
          width={236}
          height={30}
        />
      </button>
      <div className='flex flex-row w-fit h-full gap-10'>
        <button onClick={onClickAbout}>
          <span className={`${currentPath === "/about" && "font-semibold text-orange"} text-lg`}>ABOUT</span>
        </button>
        <button onClick={onClickPeople}>
          <span className={`${currentPath === "/people" && "font-semibold text-orange"} text-lg`}>운영진</span>
        </button>
        <button onClick={onClickProject}>
          <span className={`${currentPath === "/project" && "font-semibold text-orange"} text-lg`}>프로젝트</span>
        </button>
        <button onClick={onClickGallery}>
          <span className={`${currentPath === "/gallery" && "font-semibold text-orange"} text-lg`}>갤러리</span>
        </button>
        <button onClick={onClickApply}>
          <span className={`${currentPath === "/apply" && "font-semibold text-orange"} text-lg`}>지원하기</span>
        </button>
      </div>
    </header>
    <main className='w-full h-fit z-10'>
      {children}
    </main>
    <footer 
      className='flex flex-row justify-between px-[105px] pb-[87px] pt-[432px]'
      style={{
        background: "linear-gradient(180deg, rgba(27, 27, 27, 0.00) 0%, #1B1B1B 68.23%)"
      }}
    >
      <div className='w-fit flex flex-col justify-between'>
        <Image
          src='/images/header-logo.png'
          alt='logo'
          width={236}
          height={30}
        />
        <p className='text-[#707070] text-[14px]'>
          서울대학교 멋쟁이사자처럼
        </p>
      </div>
      <Image 
        src='/images/footer-instagram-btn.png'
        alt='instagram-button'
        width={68}
        height={68}
      />
    </footer>
  </div>;
}
