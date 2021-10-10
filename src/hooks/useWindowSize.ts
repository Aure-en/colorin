import { useState, useEffect, useRef } from 'react';

type WindowSize = {
  width: number,
  height: number,
}

const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  const previous = useRef<{
    width: number,
    height: number,
  } | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize((prev) => {
        previous.current = prev;
        return {
          width: window.innerWidth,
          height: window.innerHeight,
        };
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
