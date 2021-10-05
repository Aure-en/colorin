import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useAppDispatch } from '../../app/hooks';
import { Color as ColorType } from '../../ts/colors/colors';
import { toggleLock } from '../../slices/paletteSlice';
import useCopy from '../../hooks/useCopy';

interface Props {
  color: ColorType;
  index: number,
}

const Color: React.FC<Props> = ({ color, index }: Props): ReactElement => {
  const dispatch = useAppDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const { copy } = useCopy();

  /**
   * Lock the color if there are < 5 locked colors.
   * The next generated palette will contain this color.
   */
  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(toggleLock(index, color.rgb));
  };

  return (
    <Background
      $color={color.hex}
      onClick={(e) => {
        copy(e.pageX, e.pageY, color);
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        handleRightClick(e);
      }}
    />
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

const Background = styled.button<{
  $color: string;
}>`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.$color};
  min-height: 5rem;
  flex: 1;
  border: none;
  cursor: pointer;
  padding: 0;

  &:focus {
    outline: 2px solid transparent;
  }
`;

export default Color;
