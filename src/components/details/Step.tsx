import React, { ReactElement } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Color as ColorType } from '../../ts/colors/colors';
import copy from '../../utils/copy';

interface Props {
  color: ColorType,
}

const Step : React.FC<Props> = ({ color }: Props): ReactElement => (
  <Card onClick={() => copy(color.hex)}>
    <Background $color={color.hex} />
    <div>{color.name}</div>
    <div>{color.hex}</div>
  </Card>
);

Step.propTypes = {
  color: PropTypes.shape({
    name: PropTypes.string.isRequired,
    hex: PropTypes.string.isRequired,
    rgb: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    hsl: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  }).isRequired,
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
`;

const Background = styled.div<{
  $color: string;
}>`
  background: ${(props) => props.$color};
  flex: 1;
  min-height: 2rem;
`;

export default Step;
