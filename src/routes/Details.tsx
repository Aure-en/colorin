import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../app/hooks';
import {
  getMainPalette,
  getSteps,
} from '../slices/paletteSlice';
import Palettes from '../components/details/Palettes';
import Steps from '../components/details/Steps';
import { Steps as StepsType } from '../ts/colors/colors';
import Phone from '../assets/preview/Phone';
import Generate from '../components/details/buttons/Generate';
import Reset from '../components/details/buttons/Reset';

const Details: React.FC = (): ReactElement => {
  const mainPalette = useAppSelector(getMainPalette);
  const steps: StepsType = useAppSelector(getSteps);

  return (
    <Wrapper>
      <Steps />
      <Palettes mainPalette={mainPalette} steps={steps} />
      <Buttons>
        <Generate />
        <Reset />
      </Buttons>
      <Phone mainPalette={mainPalette} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: min-content 2.5fr auto;
  grid-template-rows: 1fr min-content;
  grid-column-gap: 2.5rem;
  grid-row-gap: 1rem;
  align-items: center;
  padding: 2rem;
  flex: 1;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  grid-row: 2;
  grid-column: 2;
  align-self: start;

  & > button {
    margin-left: 1rem;
  }

`;

export default Details;
