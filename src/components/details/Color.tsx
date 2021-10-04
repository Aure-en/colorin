import React, { ReactElement, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Color as ColorType } from '../../ts/colors/colors';
import { getLocked, toggleLock } from '../../slices/paletteSlice';
import useCopy from '../../hooks/useCopy';

interface Props {
  color: ColorType;
}

const Color: React.FC<Props> = ({ color }: Props): ReactElement => {
  const locked = useSelector(getLocked);
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const { copy } = useCopy();

  /**
   * Lock the color if there are < 5 locked colors.
   * The next generated palette will contain this color.
   */
  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(toggleLock(color.rgb));
  };

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
        <Buttons>
          {locked.find(
            (lock) => Array.isArray(lock) && lock.join('') === color.rgb.join(''),
          ) && 'locked'}
          {isHovered && <div>Edit</div>}
        </Buttons>
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
  min-height: 5rem;
  flex: 1;
  border: none;
  cursor: pointer;

  &:focus {
    outline: 2px solid transparent;
  }
`;

const Buttons = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
`;

export default Color;
