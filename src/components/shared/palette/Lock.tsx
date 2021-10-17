import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useAppDispatch } from '../../../app/hooks';
import IconLock from '../../../assets/icons/IconLock';
import IconUnlock from '../../../assets/icons/IconUnlock';
import { toggleLock } from '../../../slices/paletteSlice';
import { MainColor } from '../../../ts/colors/colors';

interface Props {
  color: MainColor,
  textColor: string,
  isLocked: boolean,
}

const Lock: React.FunctionComponent<Props> = ({ color, textColor, isLocked }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <Button
      type="button"
      onClick={() => {
        if (typeof color.id === 'number') {
          dispatch(toggleLock(color.id, color.rgb));
        }
      }}
    >
      {isLocked
        ? <IconLock color={textColor} />
        : <IconUnlock color={textColor} />}
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
    id: PropTypes.number.isRequired,
  }).isRequired,
  isLocked: PropTypes.bool.isRequired,
  textColor: PropTypes.string.isRequired,
};

export default Lock;
