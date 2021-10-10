import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../app/hooks';
import { getMainPalette } from '../slices/paletteSlice';
import Palette from '../components/details/Palette';
import Buttons from '../components/preview/Buttons';
import Example from '../components/preview/Preview';

const Preview: React.FC = () => {
  const mainPalette = useAppSelector(getMainPalette);
  const TOTAL_PREVIEWS = 5;
  const [previewNumber, setPreviewNumber] = useState(1);
  let throttle = false;

  const prevPreview = () => {
    setPreviewNumber((prev) => (prev === 1 ? TOTAL_PREVIEWS : prev - 1));
  };

  const nextPreview = () => {
    setPreviewNumber((prev) => (prev === TOTAL_PREVIEWS ? 1 : prev + 1));
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
    if (e.key === 'ArrowUp') prevPreview();
    if (e.key === 'ArrowDown') nextPreview();
  };

  useEffect(() => {
    window.addEventListener('wheel', onMouseWheel);
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('wheel', onMouseWheel);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return (
    <Wrapper>
      <Palette palette={mainPalette} main direction="vertical" />
      <Example number={previewNumber} />
      <Buttons
        select={setPreviewNumber}
        total={TOTAL_PREVIEWS}
        current={previewNumber}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 10rem 1fr auto;
  grid-gap: 3rem;
  flex: 1;
  max-height: 100%;
  padding: 3rem;
  min-height: 0;
`;

export default Preview;
