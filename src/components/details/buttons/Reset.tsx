import React from 'react';

import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { reset } from '../../../slices/paletteSlice';

const Reset = () => {
  const dispatch = useDispatch();

  return (
    <Button type="button" onClick={() => { dispatch(reset()); }}>
      Reset
    </Button>
  );
};

const Button = styled.button`
  background: transparent;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-size: 0.925rem;
  border: 1px solid black;
  transition: all 0.2s ease-out;

  &:hover {
    color: ${(props) => props.theme.primary};
    border: 1px solid ${(props) => props.theme.primary}
  }
`;

export default Reset;
