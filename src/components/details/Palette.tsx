import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Color from './Color';
import { Color as ColorType, Palette as PaletteType } from '../../ts/colors';

const Palette = ({ palette }: {
  palette: PaletteType,
}) => (
  <Row>
    {palette.map((color: ColorType) => (
      <Color
        key={`${color.hex}`}
        color={color}
      />
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
};

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
  width: 100%;
`;

export default Palette;
