import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import {
  fetchPalette, getMainPalette, getSteps, setSteps,
} from '../../slices/paletteSlice';
import Palette from './Palette';

const Palettes = () => {
  const dispatch = useDispatch();
  const mainPalette = useSelector(getMainPalette);
  const steps = useSelector(getSteps);

  useEffect(() => {
    dispatch(fetchPalette());
  }, []);

  useEffect(() => {
    dispatch(setSteps());
  }, [mainPalette]);

  return (
    <Wrapper>
      {steps.light.map((palette, index) => (
        <Palette
          key={`light-${index}`}
          palette={palette}
        />
      ))}

      {mainPalette?.length > 0 && <Palette palette={mainPalette} />}

      {steps.dark.map((palette, index) => (
        <Palette
          key={`dark-${index}`}
          palette={palette}
        />
      ))}
    </Wrapper>
  );
};

Palettes.propTypes = {};

const Wrapper = styled.main`
  display: grid;
  height: 100%;
  grid-gap: 1rem;
  min-height: 50rem;
`;

export default Palettes;
