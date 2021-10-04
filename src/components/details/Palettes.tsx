import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Palette from './Palette';
import { Palette as PaletteType, Steps } from '../../ts/colors/colors';

interface Props {
  mainPalette: PaletteType,
  steps: Steps,
}

const Palettes: React.FC<Props> = ({ mainPalette, steps }: Props): ReactElement => (
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

    {mainPalette?.length > 0 && <Palette palette={mainPalette} main />}

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

Palettes.propTypes = {};

const Wrapper = styled.main`
  display: grid;
  height: 100%;
  grid-gap: 1rem;
  width: 100%;
  margin: 0 3rem 0 2rem;
`;

export default Palettes;
