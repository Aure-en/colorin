import React from 'react';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getColor, updatePalette } from '../../slices/paletteSlice';
import { Color } from '../../ts/colors/colors';

interface Props {
  index: number,
}

const Edit: React.FC<Props> = ({ index }: Props) => {
  const dispatch = useAppDispatch();
  const color: Color = useAppSelector((state) => getColor(state, index));

  return (
    <Label
      htmlFor={`color-${index}`}
      onClick={(e: React.MouseEvent) => {
        e.stopPropagation();
      }}
    >
      edit
      <input value={color.hex} onChange={(e) => { dispatch(updatePalette(index, e.target.value)); }} type="color" id={`color-${index}`} name={`color-${index}`} />
    </Label>
  );
};

const Label = styled.label`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  right: 0;
  bottom: 0;
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
