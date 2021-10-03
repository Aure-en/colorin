import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Color from './Color';
import Step from './Step';
import { Color as ColorType, Palette as PaletteType } from '../../ts/colors';

const Palette = ({ palette, main }: {
  palette: PaletteType,
  main?: boolean,
}) => (
  <Row>
    {palette.map((color: ColorType, index: number) => (
      main
        ? (
          <Color
            key={`${index}-${color.hex}`}
            color={color}
            index={index}
          />

        )
        : (
          <Step
            key={`${index}-${color.hex}`}
            color={color}
          />
        )
    ))}
  </Row>
);

Palette.propTypes = {
  palette: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      hex: PropTypes.string.isRequired,
      rgb: PropTypes.arrayOf(PropTypes.number).isRequired,
      hsl: PropTypes.arrayOf(PropTypes.number).isRequired,
    }),
  ).isRequired,
  main: PropTypes.bool,
};

Palette.defaultProps = {
  main: false,
};

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
  width: 100%;
`;

export default Palette;
