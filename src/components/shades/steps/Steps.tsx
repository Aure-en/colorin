import React, { ReactElement } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Step from './Step';
import { Palette as PaletteType } from '../../../ts/colors/colors';

type Direction = 'vertical' | 'horizontal';

interface Props {
  palette: PaletteType,
  main?: boolean,
  direction?: Direction,
}

const Steps: React.FC<Props> = ({ palette, main, direction }: Props): ReactElement => (
  <Wrapper $main={main} $direction={direction}>
    {palette.map((color, index) => (
      <Step
        key={`${index}-${color.hex}`}
        color={color}
      />
    ))}
  </Wrapper>
);

Steps.propTypes = {
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

Steps.defaultProps = {
  main: false,
  direction: 'horizontal',
};

const Wrapper = styled.div<{
  $main?: boolean,
  $direction?: Direction,
}>`
  display: flex;
  grid-gap: 1rem;
  width: 100%;
  flex: ${(props) => props.$main && '1'};

  & > * {
    flex: 1;
  }

  @media all and (min-width: 600px) {
    flex-direction: ${(props) => (props.$direction === 'vertical' ? 'column' : 'row')};
  }
`;

export default Steps;
