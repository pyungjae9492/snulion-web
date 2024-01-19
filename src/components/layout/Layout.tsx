import Image from 'next/image';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const onClickHeaderLogo = () => {
    router.push('/');
  };

  const currentPath = router.pathname;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    {
      title: 'HOME',
      path: '/',
    },
    {
      title: 'ABOUT',
      path: '/about',
    },
    {
      title: '운영진',
      path: '/people',
    },
    {
      title: '프로젝트',
      path: '/project',
    },
    {
      title: '갤러리',
      path: '/gallery',
    },
    {
      title: '지원하기',
      path: '/apply',
    },
  ];

  return (
    <div
      className='fixed top-0 flex h-full min-h-[100dvh] w-full flex-col justify-between overflow-scroll'
      style={{
        background:
          'var(--background, linear-gradient(180deg, rgba(0, 0, 0, 0.85) 0%, #282C33 52.08%))',
      }}
    >
      <header
        className={`${
          currentPath === '/' || currentPath === '/about' ? 'fixed' : 'sticky'
        } top-0 z-50 flex h-fit w-full flex-row items-center justify-between px-5 py-6 md:px-[60px] md:py-[27.5px]`}
        style={{
          background:
            'linear-gradient(180deg, rgba(0, 0, 0, 0.90) 0%, rgba(0, 0, 0, 0.00) 100%)',
          backdropFilter: 'blur(1px)',
        }}
      >
        <button
          className='relative h-4 w-[95px] shrink-0 md:h-[30px] md:w-[260px]'
          onClick={onClickHeaderLogo}
        >
          <Image
            className='hidden md:block'
            src='/images/main-logo.png'
            alt='logo'
            fill
          />
          <Image
            className='hidden max-md:block'
            src='/images/header-mobile-logo.png'
            alt='logo'
            fill
          />
        </button>
        <div className='hidden h-full w-fit shrink flex-row gap-10 md:flex'>
          {menuItems.slice(1).map((item, index) => (
            <button
              key={'home-desktop-header-btn-' + index}
              onClick={() => router.push(item.path)}
            >
              <span
                className={`${
                  currentPath === item.path && 'text-orange font-semibold'
                } text-nowrap text-lg`}
              >
                {item.title}
              </span>
            </button>
          ))}
        </div>
        {!isMobileMenuOpen ? (
          <svg
            className='hidden cursor-pointer max-md:block'
            xmlns='http://www.w3.org/2000/svg'
            width='28'
            height='26'
            viewBox='0 0 28 26'
            fill='none'
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <path
              d='M3.54053 19.5V17.875H23.8205V19.5H3.54053ZM3.54053 13.8125V12.1875H23.8205V13.8125H3.54053ZM3.54053 8.125V6.5H23.8205V8.125H3.54053Z'
              fill='white'
            />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='26'
            height='26'
            viewBox='0 0 26 26'
            fill='none'
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <path
              d='M6.74395 20.3937L5.60645 19.2562L11.8627 13L5.60645 6.7437L6.74395 5.6062L13.0002 11.8625L19.2564 5.6062L20.3939 6.7437L14.1377 13L20.3939 19.2562L19.2564 20.3937L13.0002 14.1375L6.74395 20.3937Z'
              fill='white'
            />
          </svg>
        )}
      </header>
      <main className='z-10 h-fit w-full'>{children}</main>
      <footer
        className='z-10 flex flex-row justify-between px-[33px] pb-[55px] pt-[179px] md:px-[105px] md:pb-[87px] md:pt-[432px]'
        style={{
          background:
            'linear-gradient(180deg, rgba(27, 27, 27, 0.00) 0%, #1B1B1B 68.23%)',
        }}
      >
        <div className='flex flex-col justify-between'>
          <div className='relative h-[22px] w-[192px] md:h-[30px] md:w-[261px]'>
            <Image src='/images/main-logo.png' alt='logo' fill />
          </div>
          <p className='text-[14px] text-[#707070]'>
            서울대학교 멋쟁이사자처럼
          </p>
        </div>
        <button
          className='relative size-[48px] md:size-[68px]'
          onClick={() =>
            window.open('https://www.instagram.com/likelion_snu/', '_blank')
          }
        >
          <Image
            src='/images/footer-instagram-btn.png'
            alt='instagram-button'
            fill
          />
        </button>
      </footer>
      {/* mobile menu */}
      <div
        className={`${
          isMobileMenuOpen ? 'fixed' : 'hidden'
        } left-0 top-0 z-40 flex h-full w-full flex-col items-center justify-center`}
        style={{
          background:
            'var(--background, linear-gradient(180deg, rgba(0, 0, 0, 0.85) 0%, #282C33 52.08%))',
        }}
      >
        <div className='mt-16 flex h-full w-full flex-col items-center overflow-auto'>
          {menuItems.map((item, index) => (
            <div
              key={'home-mobile-header-btn-' + index}
              className='flex h-full max-h-[105px] items-center justify-center'
            >
              <button onClick={() => router.push(item.path)}>
                <span
                  className={`${
                    currentPath === item.path && 'text-orange font-semibold'
                  } text-lg`}
                >
                  {item.title}
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
