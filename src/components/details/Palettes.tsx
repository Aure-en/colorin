import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Color from 'color';
import { fetchPalette } from '../../slices/paletteSlice';
import { Color as ColorType, Palette as PaletteType } from '../../ts/colors';
import Palette from './Palette';

const Palettes = () => {
  const dispatch = useDispatch();
  const paletteFromAPI = useSelector(
    (state: any) => state.palette?.paletteFromAPI,
  );

  const [stepNumber, setStepNumber] = useState(2);
  const [steps, setSteps] = useState<{
    light: PaletteType[],
    dark: PaletteType[]
  }>({
    light: [],
    dark: [],
  });

  useEffect(() => {
    dispatch(fetchPalette());
  }, []);

  useEffect(() => {
    const newSteps: {
      light: PaletteType[],
      dark: PaletteType[],
    } = {
      light: [],
      dark: [],
    };

    setSteps(newSteps);
  }, [paletteFromAPI, stepNumber]);

  return (
    <Wrapper>
      {
        steps.light.map((palette) => (
          <Palette palette={palette} />
        ))
      }

      {paletteFromAPI?.length > 0 && <Palette palette={paletteFromAPI} />}

      {
        steps.dark.map((palette) => (
          <Palette palette={palette} />
        ))
      }
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
