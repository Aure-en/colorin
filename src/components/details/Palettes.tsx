import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import {
  fetchPalette,
  getMainPalette,
  getSteps,
  getStepsNumber,
  setSteps,
} from '../../slices/paletteSlice';
import Palette from './Palette';

const Palettes = () => {
  const dispatch = useDispatch();
  const mainPalette = useSelector(getMainPalette);
  const steps = useSelector(getSteps);
  const stepsNumber = useSelector(getStepsNumber);

  useEffect(() => {
    dispatch(fetchPalette());
  }, []);

  useEffect(() => {
    dispatch(setSteps());
  }, [mainPalette]);

  return (
    <Wrapper $steps={stepsNumber}>
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

const Wrapper = styled.main<{
  $steps: number,
}>`
  display: grid;
  grid-template-rows: ${(props) => `repeat(1fr, ${props.$steps}) 2fr repeat(1fr, ${props.$steps})`};
  height: 100%;
  grid-gap: 1rem;
  min-height: 50rem;
  width: 100%;
`;

export default Palettes;
