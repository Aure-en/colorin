import React, { useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../app/hooks';
import { getMainPalette } from '../slices/paletteSlice';
import Palette from '../components/details/Palette';
import Buttons from '../components/preview/Buttons';
import Example from '../components/preview/Preview';

const Preview: React.FC = () => {
  const mainPalette = useAppSelector(getMainPalette);
  const TOTAL_PREVIEWS = 2;
  const [previewNumber, setPreviewNumber] = useState(1);

  return (
    <Wrapper>
      <Palette palette={mainPalette} main direction="vertical" />
      <Example number={previewNumber} />
      <Buttons select={setPreviewNumber} total={TOTAL_PREVIEWS} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 10rem 1fr auto;
  flex: 1;
  max-height: 100%;
  padding: 3rem;
  min-height: 0;
`;

export default Preview;
