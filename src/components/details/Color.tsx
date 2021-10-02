import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Color as ColorType } from '../../ts/colors';

const Color = ({ color }: { color: ColorType }) => (
  <Card>
    <Background $color={color} />
  </Card>
);

Color.propTypes = {
  color: PropTypes.arrayOf(PropTypes.number).isRequired,
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
`;

const Background = styled.div<{
  $color: number[];
}>`
  background: ${(props) => `rgb(${props.$color[0]}, ${props.$color[1]}, ${props.$color[2]})`};
  flex: 1;
`;

export default Color;
