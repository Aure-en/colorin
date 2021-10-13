import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { MainPalette as MainPaletteType, Steps } from '../../ts/colors/colors';
import MainPalette from './MainPalette';
import Palette from './Palette';

interface Props {
  mainPalette: MainPaletteType;
  steps: Steps;
}

const Palettes: React.FC<Props> = ({
  mainPalette,
  steps,
}: Props): ReactElement => (
  <Wrapper>
    {steps.light.map(
      (palette, index) => palette.length > 0 && (
      <Palette
        key={`${index}-${palette.reduce(
          (concat, color) => concat + color.hex,
          '',
        )}`}
        palette={palette}
      />
      ),
    )}

    {mainPalette.length > 0 && (
      <MainPalette
        palette={mainPalette}
      />
    )}

    {steps.dark.map(
      (palette, index) => palette.length > 0 && (
      <Palette
        key={`${index}-${palette.reduce(
          (concat, color) => concat + color.hex,
          '',
        )}`}
        palette={palette}
      />
      ),
    )}
  </Wrapper>
);

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  grid-gap: 1rem;
  width: 100%;
  grid-row: 2;
  grid-column: 1 / span 2;

  @media all and (min-width: 576px) {
    grid-row: initial;
    grid-column: initial;
  }
`;

export default Palettes;
