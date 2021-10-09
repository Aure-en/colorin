import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useAppDispatch } from '../../../app/hooks';
import IconLock from '../../../assets/icons/IconLock';
import IconUnlock from '../../../assets/icons/IconUnlock';
import { toggleLock } from '../../../slices/paletteSlice';
import { Color } from '../../../ts/colors/colors';

interface Props {
  color: Color,
  isLocked: boolean,
}

const Lock: React.FC<Props> = ({ color, isLocked }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <Button
      type="button"
      onClick={() => {
        if (color.id) {
          dispatch(toggleLock(color.id, color.rgb));
        }
      }}
    >
      {isLocked
        ? <IconLock color={color.hex} />
        : <IconUnlock color={color.hex} />}
    </Button>
  );
};

const Button = styled.button`
  background: transparent;
  padding: 0;
`;

Lock.propTypes = {
  color: PropTypes.shape({
    name: PropTypes.string.isRequired,
    hex: PropTypes.string.isRequired,
    rgb: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    hsl: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  }).isRequired,
  isLocked: PropTypes.bool.isRequired,
};
export default Lock;
