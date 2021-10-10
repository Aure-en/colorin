import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../app/hooks';
import {
  getMainPalette,
  getSteps,
} from '../slices/paletteSlice';
import Palettes from '../components/details/Palettes';
import Steps from '../components/details/steps/Steps';
import { Steps as StepsType } from '../ts/colors/colors';
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr auto;
  grid-gap: 1rem;
  align-items: center;
  flex: 1;

  @media all and (min-width: 400px) {
    padding: 1rem;
  }

  @media all and (min-width: 576px) {
    padding: 2rem;
    grid-template-columns: min-content 2.5fr auto;
    grid-template-rows: 1fr min-content;
    grid-column-gap: 2.5rem;
    grid-row-gap: 1rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  grid-row: 1;
  grid-column: 2;
  align-self: center;

  & > button {
    margin-left: 1rem;
  }

  @media all and (min-width: 576px) {
    grid-row: 2;
    grid-column: 2;
  }
`;

export default Details;
