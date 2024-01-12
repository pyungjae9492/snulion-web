import React, { useState, useEffect } from 'react';

const BlinkingSvg = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible((prevIsVisible) => !prevIsVisible); // Toggle visibility
    }, 2000); // Adjust time here for blink speed

    return () => clearInterval(intervalId); // Clean up interval on unmount
  }, []);

  return (
    <div
      className={
        'svg-visible flex h-[10px] items-center justify-center overflow-visible md:hidden'
      }
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='111'
        height='110'
        viewBox='0 0 111 110'
        fill='none'
      >
        <g filter='url(#filter0_d_336_3581)'>
          <circle cx='55.4219' cy='55' r='5' fill='white' />
        </g>
        <path d='M20.5 55H90.5' stroke='url(#paint0_linear_336_3581)' />
        <defs>
          <filter
            id='filter0_d_336_3581'
            x='0.421875'
            y='0'
            width='110'
            height='110'
            filterUnits='userSpaceOnUse'
            color-interpolation-filters='sRGB'
          >
            <feFlood flood-opacity='0' result='BackgroundImageFix' />
            <feColorMatrix
              in='SourceAlpha'
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              result='hardAlpha'
            />
            <feMorphology
              radius='20'
              operator='dilate'
              in='SourceAlpha'
              result='effect1_dropShadow_336_3581'
            />
            <feOffset />
            <feGaussianBlur stdDeviation='15' />
            <feComposite in2='hardAlpha' operator='out' />
            <feColorMatrix
              type='matrix'
              values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0'
            />
            <feBlend
              mode='normal'
              in2='BackgroundImageFix'
              result='effect1_dropShadow_336_3581'
            />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='effect1_dropShadow_336_3581'
              result='shape'
            />
          </filter>
          <linearGradient
            id='paint0_linear_336_3581'
            x1='20.5'
            y1='55.5052'
            x2='90.4933'
            y2='54.5214'
            gradientUnits='userSpaceOnUse'
          >
            <stop stop-color='white' stop-opacity='0' />
            <stop offset='0.322917' stop-color='white' />
            <stop offset='0.682292' stop-color='white' />
            <stop offset='0.971278' stop-color='white' stop-opacity='0' />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default BlinkingSvg;
