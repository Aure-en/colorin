import React, { useState, useEffect, ReactElement } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Color from 'color';
import { Color as ColorType } from '../../ts/colors/colors';
import useCopy from '../../hooks/useCopy';

interface Props {
  color: ColorType;
}

const Step : React.FC<Props> = ({ color }: Props): ReactElement => {
  const { copy } = useCopy();
  const [textColor, setTextColor] = useState('');

  // If the color is bright, darken it to use it on the card.
  useEffect(() => {
    const newColor = Color.rgb(color.rgb);
    if (newColor.hsl().array()[2] > 70) {
      setTextColor(newColor.lightness(70).hsl().string());
    } else {
      setTextColor(newColor.hsl().string());
    }
  }, [color]);

  return (
    <Card>
      <Background $color={color.hex} onClick={(e) => { copy(e.pageX, e.pageY, color); }} />
      <div>{color.name}</div>
      <Code $color={textColor}>{color.hex}</Code>
    </Card>
  );
};

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

const Background = styled.button<{
  $color: string;
}>`
  position: relative;
  background: ${(props) => props.$color};
  min-height: 3.5rem;
  max-height: 3.5rem;
  flex: 1;
  border: none;
  cursor: pointer;

  &:focus {
    outline: 2px solid transparent;
  }
`;

const Code = styled.small<{
  $color: string,
}>`
  color: ${(props) => props.$color};
  font-size: 0.925rem;
`;

export default Step;
