import React, { useState, useEffect, ReactElement } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Color from 'color';
import { useAppSelector } from '../../app/hooks';
import IconLock from '../../assets/icons/IconLock';
import { Color as ColorType } from '../../ts/colors/colors';
import { getLocked } from '../../slices/paletteSlice';

interface Props {
  color: ColorType
}

const Name: React.FC<Props> = ({ color }: Props): ReactElement => {
  const locked = useAppSelector(getLocked);
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
    <Informations>
      <div>
        <div>{color.name}</div>
        <Code $color={textColor}>{color.hex}</Code>
      </div>
      {locked.find(
        (lock) => Array.isArray(lock) && lock.join('') === color.rgb.join(''),
      ) && <IconLock color={textColor} />}
    </Informations>
  );
};

Name.propTypes = {
  color: PropTypes.shape({
    name: PropTypes.string.isRequired,
    hex: PropTypes.string.isRequired,
    rgb: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    hsl: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  }).isRequired,
};

const Code = styled.small<{
  $color: string,
}>`
  color: ${(props) => props.$color};
  font-size: 0.925rem;
  text-transform: uppercase;
`;

const Informations = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Name;
