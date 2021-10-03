import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Color from 'color';
import colorName from '../../utils/colorName';
import { fetchPalette } from '../../slices/paletteSlice';
import { Color as ColorType, Steps } from '../../ts/colors';
import Palette from './Palette';

const Palettes = () => {
  const dispatch = useDispatch();
  const paletteFromAPI = useSelector(
    (state: any) => state.palette?.paletteFromAPI,
  );

  const [stepNumber, setStepNumber] = useState(2);
  const [steps, setSteps] = useState<Steps>({
    light: [],
    dark: [],
  });

  useEffect(() => {
    dispatch(fetchPalette());
  }, []);

  useEffect(() => {
    const newSteps: Steps = {
      light: [],
      dark: [],
    };

    /**
     * For all steps:
     * - Get their values (rgb, hex, hsl)
     * - Get their names
     */
    for (let step = 1; step <= stepNumber; step += 1) {
      // Light steps
      newSteps.light.push(
        paletteFromAPI.map((color: ColorType): ColorType => {
          // Lighten the color
          const colorObject = Color.rgb(color.rgb);
          const lighter = colorObject.lighten(step * (2.5 / 10));

          // Get new color values
          const rgb = lighter.rgb().array();
          const hex = lighter.hex();
          const hsl = lighter.hsl().array();

          // Get color name
          const { name } = colorName(hex);

          return {
            name, rgb, hex, hsl,
          };
        }),
      );

      // Dark steps
      newSteps.dark.push(
        paletteFromAPI.map((color: ColorType): ColorType => {
          // Darken the color
          const colorObject = Color.rgb(color.rgb);
          const darker = colorObject.darken(step * (2.5 / 10));

          // Get new color values
          const rgb = darker.rgb().array();
          const hex = darker.hex();
          const hsl = darker.hsl().array();

          // Get color name
          const { name } = colorName(hex);

          return {
            name, rgb, hex, hsl,
          };
        }),
      );
    }

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
