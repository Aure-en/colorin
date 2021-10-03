import React, { ReactElement, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import {
  fetchPalette,
  getMainPalette,
  getSteps,
  setSteps,
} from '../../slices/paletteSlice';
import { Steps } from '../../ts/colors/colors';
import Palette from './Palette';

const Palettes: React.FC = (): ReactElement => {
  const dispatch = useDispatch();
  const mainPalette = useSelector(getMainPalette);
  const steps: Steps = useSelector(getSteps);

  useEffect(() => {
    dispatch(fetchPalette());
  }, []);

  useEffect(() => {
    dispatch(setSteps());
  }, [mainPalette]);

  return (
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
};

Palettes.propTypes = {};

const Wrapper = styled.main`
  display: grid;
  height: 100%;
  grid-gap: 1rem;
  width: 100%;
`;

export default Palettes;
