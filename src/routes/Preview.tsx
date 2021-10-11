import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../app/hooks';
import { getMainPalette } from '../slices/paletteSlice';
import Palette from '../components/details/Palette';
import Buttons from '../components/preview/Buttons';
import Example from '../components/preview/Preview';
import useWindowSize from '../hooks/useWindowSize';
import Generate from '../components/details/buttons/Generate';
import Reset from '../components/details/buttons/Reset';

const Preview: React.FC = () => {
  const mainPalette = useAppSelector(getMainPalette);
  const [slide, setSlide] = useState<{
    number: number,
    direction: 'next' | 'prev',
  }>({
    number: 1,
    direction: 'next',
  });
  const windowSize = useWindowSize();

  const TOTAL_PREVIEWS = 5;
  let throttle = false;

  const prevPreview = () => {
    setSlide((prev) => ({
      number: prev.number === 1 ? TOTAL_PREVIEWS : prev.number - 1,
      direction: 'prev',
    }));
  };

  const nextPreview = () => {
    setSlide((prev) => ({
      number: prev.number === TOTAL_PREVIEWS ? 1 : prev.number + 1,
      direction: 'next',
    }));
  };

  const onMouseWheel = (e: WheelEvent) => {
    if (!throttle) {
      e.stopPropagation();
      if (e.deltaY > 0) {
        nextPreview();
      } else {
        prevPreview();
      }
      throttle = true;
      setTimeout(() => { throttle = false; }, 300);
    }
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') prevPreview();
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') nextPreview();
  };

  useEffect(() => {
    if (windowSize.width > 600) {
      window.addEventListener('wheel', onMouseWheel);
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      window.removeEventListener('wheel', onMouseWheel);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [windowSize.width]);

  return (
    <Wrapper>
      <Colors>
        <Palette palette={mainPalette} main direction="vertical" />
        <Controls>
          <Generate icon />
          <Reset icon />
        </Controls>
      </Colors>
      <Example number={slide.number} direction={slide.direction} />
      <Buttons
        select={setSlide}
        total={TOTAL_PREVIEWS}
        current={slide.number}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  flex: 1;
  min-height: 0;
  padding: 1rem;
  overflow: hidden;

  @media all and (min-width: 600px) {
    grid-template-columns: 10rem 1fr auto;
    grid-template-rows: initial;
    grid-gap: 2rem;
  }

  @media all and (min-width: 900px) {
    grid-gap: 3rem;
    padding: 3rem;
  }
`;

const Colors = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Controls = styled.div`
  display: flex;
`;

export default Preview;
