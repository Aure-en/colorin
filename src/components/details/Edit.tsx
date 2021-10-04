import React from 'react';
import { ReactComponent as IconEdit } from '../../assets/icons/picker.svg';

interface Props {
  index: number,
}

const Edit: React.FC<Props> = ({ index }: Props) => (
  <label htmlFor={`color-${index}`}>
    <input type="color" id={`color-${index}`} name={`color-${index}`} />
  </label>
);

export default Edit;
