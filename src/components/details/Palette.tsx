import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Color from 'color';
import { fetchPalette } from '../../slices/paletteSlice';
import ColorType from '../../ts/color';

const Palette = () => {
  const dispatch = useDispatch();
  const paletteFromAPI = useSelector(
    (state: any) => state.palette?.paletteFromAPI,
  );

  const [stepNumber, setStepNumber] = useState(2);
  const [steps, setSteps] = useState<{
    light: ColorType[][],
    dark: ColorType[][]
  }>({
    light: [],
    dark: [],
  });

  useEffect(() => {
    dispatch(fetchPalette());
  }, []);

  useEffect(() => {
    const newSteps: {
      light: ColorType[][],
      dark: ColorType[][],
    } = {
      light: [],
      dark: [],
    };

    for (let step = 1; step <= stepNumber; step += 1) {
      newSteps.light.unshift(
        paletteFromAPI.map((color: ColorType): ColorType => {
          const colorObject = Color.rgb(color);
          const lighter = colorObject.lighten(step * (2.5 / 10));
          const array: ColorType = lighter.rgb().array() as ColorType;
          return array;
        }),
      );

      newSteps.dark.push(
        paletteFromAPI.map((color: ColorType): ColorType => {
          const colorObject = Color.rgb(color);
          const lighter = colorObject.darken(step * (2.5 / 10));
          const array: ColorType = lighter.rgb().array() as ColorType;
          return array;
        }),
      );
    }

    setSteps(newSteps);
  }, [paletteFromAPI]);

  return (
    <>

      {
        steps.light.map((palette) => (
          <Row>
            {palette.map((color) => (
              <ColorComponent
                key={`${color[0]}-${color[1]}-${color[2]}`}
                $color={color}
              />
            ))}
          </Row>
        ))
      }

      <Row>
        {paletteFromAPI?.length > 0
        && paletteFromAPI.map((color: ColorType) => (
          <ColorComponent
            key={`${color[0]}-${color[1]}-${color[2]}`}
            $color={color}
          />
        ))}
      </Row>

      {
        steps.dark.map((palette) => (
          <Row>
            {palette.map((color) => (
              <ColorComponent
                key={`${color[0]}-${color[1]}-${color[2]}`}
                $color={color}
              />
            ))}
          </Row>
        ))
      }
    </>
  );
};

Palette.propTypes = {};

interface ColorProps {
  $color: number[];
}

const ColorComponent = styled.div<ColorProps>`
  width: 100px;
  height: 100px;
  background: ${(props) => `rgb(${props.$color[0]}, ${props.$color[1]}, ${props.$color[2]})`};
`;

const Row = styled.div`
  display: flex;
`;

export default Palette;
