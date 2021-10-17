import React, { useState, useEffect, ReactElement } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Color from 'color';
import Lock from './Lock';
import Edit from './Edit';
import { useAppSelector } from '../../../app/hooks';
import { MainColor } from '../../../ts/colors/colors';
import { getLocked } from '../../../slices/paletteSlice';
import { getFormat } from '../../../slices/settingsSlice';
import formatColorCode from '../../../utils/format';

interface Props {
  color: MainColor,
}

const Name: React.FunctionComponent<Props> = ({ color }: Props): ReactElement => {
  const [textColor, setTextColor] = useState('');
  const locked = useAppSelector(getLocked);
  const format = useAppSelector(getFormat);

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
        <Code $color={textColor}>{formatColorCode(format, color)}</Code>
      </div>
      <Buttons>
        <Edit color={color} index={color.id} />
        <Lock
          textColor={textColor}
          color={color}
          isLocked={
            locked.find(
              (lock) => Array.isArray(lock) && lock.join('') === color.rgb.join(''),
            ) !== undefined
          }
        />
      </Buttons>
    </Informations>
  );
};

Name.propTypes = {
  color: PropTypes.shape({
    name: PropTypes.string.isRequired,
    hex: PropTypes.string.isRequired,
    rgb: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    hsl: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

const Code = styled.small<{
  $color: string;
}>`
  color: ${(props) => props.$color};
  font-size: 0.925rem;
  text-transform: uppercase;
`;

const Informations = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  overflow-wrap: break-word;

  @media all and (min-width: 800px) {
    flex-direction: row;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: start;

  @media all and (min-width: 800px) {
    margin-left: 1rem;
  }
`;

export default Name;
