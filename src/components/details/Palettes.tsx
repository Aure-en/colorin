import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Palette from './Palette';
import Edit from './Edit';
import { Palette as PaletteType, Steps } from '../../ts/colors/colors';
import Name from './Name';

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

    {mainPalette.length > 0 && (
    <Center>
      <Palette palette={mainPalette} main />
      <Informations>
        {mainPalette.map((color) => <Name color={color} />)}
        {[...mainPalette].map((color, index) => <Edit color={color} index={index} />)}
      </Informations>
    </Center>
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

Palettes.propTypes = {};

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  grid-gap: 1rem;
  width: 100%;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  flex: 1;
`;

const Informations = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  grid-gap: 1rem;
`;

export default Palettes;
