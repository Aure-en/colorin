import React, { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useAppDispatch } from '../../../app/hooks';
import { updatePalette, setStep } from '../../../slices/paletteSlice';
import { MainColor } from '../../../ts/colors/colors';
import { ReactComponent as IconEdit } from '../../../assets/icons/edit.svg';

interface Props {
  index: number;
  color: MainColor;
}

const Edit: React.FunctionComponent<Props> = ({ color, index }: Props) => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  let throttle = false;

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      if (!throttle) {
        dispatch(updatePalette(index, e.target.value));
        if (location.pathname === '/shades') dispatch(setStep(index, e.target.value));
        throttle = true;
        setTimeout(() => {
          throttle = false;
        }, 300);
      }
    },
    [throttle],
  );

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(updatePalette(index, e.target.value));
    if (location.pathname === '/shades') dispatch(setStep(index, e.target.value));
  };

  return (
    <Label
      htmlFor={`color-${index}`}
      onClick={(e: React.MouseEvent) => {
        e.stopPropagation();
      }}
      $index={index}
      $color={color}
    >
      <IconEdit />
      <input
        value={color.hex}
        onChange={handleChange}
        onBlur={handleBlur}
        type="color"
        id={`color-${index}`}
        name={`color-${index}`}
        aria-label="Edit color"
      />
    </Label>
  );
};

Edit.propTypes = {
  color: PropTypes.shape({
    name: PropTypes.string.isRequired,
    hex: PropTypes.string.isRequired,
    rgb: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    hsl: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const Label = styled.label<{
  $index: number;
  $color: MainColor
}>`
  cursor: pointer;

  & > input {
    border: none;
    width: 0;
    height: 0;
    opacity: 0;
    padding: 0;
  }
`;

export default Edit;
