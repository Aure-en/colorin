import React, { ReactElement } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Step from './steps/Step';
import Color from './color/Color';
import { Color as ColorType, Palette as PaletteType } from '../../ts/colors/colors';

type Direction = 'vertical' | 'horizontal';

interface Props {
  palette: PaletteType,
  main?: boolean,
  direction?: Direction,
}

const Palette: React.FC<Props> = ({ palette, main, direction }: Props): ReactElement => (
  <Wrapper $main={main} $direction={direction}>
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
  </Wrapper>
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
  direction: PropTypes.oneOf(['vertical', 'horizontal']),
};

Palette.defaultProps = {
  main: false,
  direction: 'horizontal',
};

const Wrapper = styled.div<{
  $main?: boolean,
  $direction?: Direction,
}>`
  display: flex;
  flex-direction: ${(props) => (props.$direction === 'vertical' ? 'column' : 'row')};
  grid-gap: 1rem;
  width: 100%;
  flex: ${(props) => props.$main && '1'};

  & > * {
    flex: 1;
  }

`;

export default Palette;
