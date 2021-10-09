import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../../app/hooks';
import { updatePalette, setStep } from '../../../slices/paletteSlice';
import { Color } from '../../../ts/colors/colors';
import { ReactComponent as IconEdit } from '../../../assets/icons/edit.svg';

interface Props {
  index: number;
  color: Color;
}

const Edit: React.FC<Props> = ({ color, index }: Props) => {
  const dispatch = useAppDispatch();
  let throttle = false;

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      if (!throttle) {
        dispatch(updatePalette(index, e.target.value));
        dispatch(setStep(index, e.target.value));
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
      />
    </Label>
  );
};

const Label = styled.label<{
  $index: number;
  $color: Color
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
