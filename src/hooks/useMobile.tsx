import { useState, useEffect } from 'react';

export default function useMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }

      window.addEventListener('resize', () => {
        if (window.innerWidth <= 768) {
          setIsMobile(true);
        } else {
          setIsMobile(false);
        }
      });
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', () => {
          if (window.innerWidth <= 768) {
            setIsMobile(true);
          } else {
            setIsMobile(false);
          }
        });
      }
    };
  }, []);

  return isMobile;
}
