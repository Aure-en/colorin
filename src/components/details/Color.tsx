import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Color as ColorType } from '../../ts/colors';
import copy from '../../utils/copy';

const Color = ({ color, index }: { color: ColorType, index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => copy(color.hex)}
    >
      <Background $color={color.hex}>
        <Buttons>Edit</Buttons>
      </Background>
      <div>{color.name}</div>
      <div>{color.hex}</div>
    </Card>
  );
};

Color.propTypes = {
  color: PropTypes.shape({
    name: PropTypes.string.isRequired,
    hex: PropTypes.string.isRequired,
    rgb: PropTypes.arrayOf(PropTypes.number).isRequired,
    hsl: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
`;

const Background = styled.div<{
  $color: string;
}>`
  position: relative;
  background: ${(props) => props.$color};
  min-height: 2rem;
  flex: 1;
`;

const Buttons = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
`;

export default Color;
