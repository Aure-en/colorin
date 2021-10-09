import React, { ReactElement } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Step from './steps/Step';
import Color from './color/Color';
import { Color as ColorType, Palette as PaletteType } from '../../ts/colors/colors';

interface Props {
  palette: PaletteType,
  main?: boolean,
}

const Palette: React.FC<Props> = ({ palette, main }: Props): ReactElement => (
  <Row $main={main}>
    {palette.map((color: ColorType, index: number) => (
      main
        ? (
          <Color
            key={color.id}
            index={index}
            color={color}
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
      rgb: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
      hsl: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    }).isRequired,
  ).isRequired,
  main: PropTypes.bool,
};

Palette.defaultProps = {
  main: false,
};

const Row = styled.div<{
  $main?: boolean,
}>`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
  width: 100%;
  flex: ${(props) => props.$main && '1'};
`;

export default Palette;
