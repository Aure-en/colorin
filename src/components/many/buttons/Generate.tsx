import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { fetchPalettes, getModels } from '../../../slices/paletteSlice';

const Generate = () => {
  const dispatch = useAppDispatch();
  const models = useAppSelector(getModels);

  return (
    <Button type="button" onClick={() => { if (models.length > 0) dispatch(fetchPalettes()); }}>
      Generate
    </Button>
  );
};

const Button = styled.button`
  color: white;
  background: ${(props) => props.theme.neutral_text};
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-size: 0.925rem;
  border: none;
  transition: background-color 0.2s ease-out;
  justify-self: end;

  &:hover {
    background: ${(props) => props.theme.primary};
  }
`;

export default Generate;
