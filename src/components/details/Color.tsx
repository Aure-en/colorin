import React, { ReactElement, useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ColorConverter from 'color';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Color as ColorType } from '../../ts/colors/colors';
import { getLocked, toggleLock } from '../../slices/paletteSlice';
import useCopy from '../../hooks/useCopy';
import IconLock from '../../assets/icons/IconLock';
import Edit from './Edit';

interface Props {
  color: ColorType;
  index: number,
}

const Color: React.FC<Props> = ({ color, index }: Props): ReactElement => {
  const locked = useAppSelector(getLocked);
  const dispatch = useAppDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const [textColor, setTextColor] = useState('');
  const { copy } = useCopy();

  /**
   * Lock the color if there are < 5 locked colors.
   * The next generated palette will contain this color.
   */
  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(toggleLock(index, color.rgb));
  };

  // If the color is bright, darken it to use it on the card.
  useEffect(() => {
    const newColor = ColorConverter.rgb(color.rgb);
    if (newColor.hsl().array()[2] > 70) {
      setTextColor(newColor.lightness(70).hsl().string());
    } else {
      setTextColor(newColor.hsl().string());
    }
  }, [color]);

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Background
        $color={color.hex}
        onClick={(e) => {
          copy(e.pageX, e.pageY, color);
        }}
        onContextMenu={(e) => {
          e.preventDefault();
          handleRightClick(e);
        }}
      >
        <Edit index={index} />
      </Background>
      <Informations>
        <div>
          <div>{color.name}</div>
          <Code $color={textColor}>{color.hex}</Code>
        </div>
        {locked.find(
          (lock) => Array.isArray(lock) && lock.join('') === color.rgb.join(''),
        ) && <IconLock color={textColor} />}
      </Informations>
    </Card>
  );
};

Color.propTypes = {
  color: PropTypes.shape({
    name: PropTypes.string.isRequired,
    hex: PropTypes.string.isRequired,
    rgb: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    hsl: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
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
  min-height: 5rem;
  max-height: 5rem;
  flex: 1;
  border: none;
  cursor: pointer;
  padding: 0;

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

const Informations = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Buttons = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
`;

export default Color;
